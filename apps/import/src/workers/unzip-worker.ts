/**
 * Unzip worker — runs entirely off the main thread.
 *
 * Receives a transferred ReadableStream of the zip file, extracts it using
 * fflate's streaming Unzip, writes KB files to OPFS and model/wasm files to
 * the WebLLM Cache API. Sends progress messages back as it goes.
 */
import { Unzip, AsyncUnzipInflate, UnzipPassThrough } from 'fflate'
import { writeFile, markExtractionComplete } from '../import/opfs'
import type { Manifest } from '../types'

// ---------------------------------------------------------------------------
// Message types
// ---------------------------------------------------------------------------

type InMsg = {
  type: 'EXTRACT'
  id: string
  stream: ReadableStream<Uint8Array>
  fileSize: number
}

type OutMsg =
  | { type: 'EXTRACT_PROGRESS'; id: string; percent: number; label: string; stage: string }
  | { type: 'EXTRACT_MANIFEST'; id: string; manifest: Manifest }
  | { type: 'EXTRACT_DONE'; id: string }
  | { type: 'EXTRACT_ERROR'; id: string; error: string }

function send(msg: OutMsg) {
  self.postMessage(msg)
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function concatU8(chunks: Uint8Array[]): Uint8Array {
  if (chunks.length === 1) return chunks[0]
  const total = chunks.reduce((n, c) => n + c.length, 0)
  const out = new Uint8Array(total)
  let offset = 0
  for (const c of chunks) { out.set(c, offset); offset += c.length }
  return out
}

// The name transformers.js uses for its browser cache — must match.
const TRANSFORMERS_CACHE = 'transformers-cache'

async function cacheEntry(name: string, data: Uint8Array, mf: Manifest): Promise<void> {
  const { model_url: modelUrl, wasm_url: wasmUrl } = mf.chat_model

  if (name.startsWith('model/')) {
    const filename = name.slice('model/'.length)
    const url = new URL(filename, modelUrl).href

    if (filename === 'mlc-chat-config.json') {
      // WebLLM fetches mlc-chat-config.json from webllm/config
      const cache = await caches.open('webllm/config')
      await cache.put(url, new Response(data.buffer as ArrayBuffer, { status: 200 }))
    } else {
      // Everything else (tokenizer.json, tokenizer.model, tensor-cache.json, shards)
      // is fetched from webllm/model
      const cache = await caches.open('webllm/model')
      await cache.put(url, new Response(data.buffer as ArrayBuffer, { status: 200 }))
    }
  } else if (name.startsWith('wasm/')) {
    const cache = await caches.open('webllm/wasm')
    await cache.put(wasmUrl, new Response(data.buffer as ArrayBuffer, {
      status: 200,
      headers: { 'Content-Type': 'application/wasm' },
    }))
  }
}

// ---------------------------------------------------------------------------
// Main handler
// ---------------------------------------------------------------------------

self.onmessage = async (event: MessageEvent<InMsg>) => {
  const msg = event.data
  if (msg.type !== 'EXTRACT') return

  const { id, stream, fileSize } = msg

  try {
    let resolveManifest!: (m: Manifest) => void
    const manifestReady = new Promise<Manifest>(r => { resolveManifest = r })

    const filePromises: Promise<void>[] = []
    let totalFiles = 0
    let processedFiles = 0
    let bytesRead = 0

    // Collect embed-cache .bin files keyed by zip path; populate transformers-cache
    // after embed-cache/index.json is processed (it provides the original HF URLs).
    const embedCacheBins = new Map<string, Uint8Array>()

    const uz = new Unzip()
    uz.register(AsyncUnzipInflate) // deflate-compressed entries (JSON files)
    uz.register(UnzipPassThrough)  // stored entries (model shards, wasm)

    uz.onfile = (f) => {
      if (f.name.endsWith('/')) return // skip directory entries
      totalFiles++
      const chunks: Uint8Array[] = []

      const p = new Promise<void>((resolve, reject) => {
        f.ondata = async (err, data, final) => {
          if (err) { reject(err); return }
          chunks.push(data)
          if (!final) return

          try {
            const combined = concatU8(chunks)
            const name = f.name

            if (name === 'manifest.json') {
              const mf: Manifest = JSON.parse(new TextDecoder().decode(combined))
              if (!mf.manifest_hash) throw new Error('Invalid manifest: missing manifest_hash')
              resolveManifest(mf)
              send({ type: 'EXTRACT_MANIFEST', id, manifest: mf })
              send({ type: 'EXTRACT_PROGRESS', id, percent: 5, label: 'Manifest parsed', stage: 'extracting' })
              await writeFile(mf.manifest_hash, name, combined)

            } else if (name.startsWith('model/') || name.startsWith('wasm/')) {
              const mf = await manifestReady
              await cacheEntry(name, combined, mf)
              const sizeMB = (combined.length / 1e6).toFixed(1)
              console.log(`[UnzipWorker] Cached ${name} (${sizeMB} MB)`)

            } else if (name.startsWith('embed-cache/')) {
              // Collect embed-cache bins; restore into transformers-cache after index.json arrives.
              if (name === 'embed-cache/index.json') {
                const index: Array<{ file: string; url: string }> = JSON.parse(new TextDecoder().decode(combined))
                const tc = await caches.open(TRANSFORMERS_CACHE)
                for (const { file, url } of index) {
                  const binData = embedCacheBins.get(file)
                  if (binData) {
                    await tc.put(url, new Response(binData.buffer as ArrayBuffer, { status: 200 }))
                    console.log(`[UnzipWorker] transformers-cache restored: ${url}`)
                  } else {
                    console.warn(`[UnzipWorker] embed-cache missing bin for ${file}`)
                  }
                }
              } else {
                embedCacheBins.set(name, combined)
                console.log(`[UnzipWorker] embed-cache bin collected: ${name}`)
              }

            } else {
              const mf = await manifestReady
              await writeFile(mf.manifest_hash, name, combined)
              console.log(`[UnzipWorker] OPFS: ${name}`)
            }

            processedFiles++
            const pct = 5 + Math.round((processedFiles / Math.max(totalFiles, 1)) * 70)
            const isShard = name.startsWith('model/') && !name.endsWith('.json')
            const isEmbedCache = name.startsWith('embed-cache/')
            send({
              type: 'EXTRACT_PROGRESS',
              id,
              percent: pct,
              label: isShard
                ? `Caching ${name.split('/').pop()}...`
                : isEmbedCache
                  ? `Restoring embed model: ${name.split('/').pop()}...`
                  : `Processing ${name}...`,
              stage: (name.startsWith('model/') || name.startsWith('wasm/') || isEmbedCache) ? 'caching' : 'extracting',
            })
            resolve()
          } catch (e) {
            reject(e)
          }
        }
      })

      filePromises.push(p)
      f.start()
    }

    // Feed the zip stream into fflate — this loop runs in the worker, not the main thread
    const reader = stream.getReader()
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        bytesRead += value.length
        // Report read progress (0-5% range, before file processing kicks in)
        const readPct = Math.round((bytesRead / fileSize) * 5)
        send({ type: 'EXTRACT_PROGRESS', id, percent: readPct, label: 'Reading zip...', stage: 'extracting' })
        uz.push(value, false)
      }
      uz.push(new Uint8Array(0), true)
    } finally {
      reader.releaseLock()
    }

    // Wait for all async cache/OPFS writes to complete
    await Promise.all(filePromises)

    // Mark extraction complete in OPFS
    const mf = await manifestReady
    await markExtractionComplete(mf.manifest_hash)

    send({ type: 'EXTRACT_PROGRESS', id, percent: 80, label: 'Extraction complete', stage: 'loading-index' })
    send({ type: 'EXTRACT_DONE', id })

  } catch (err) {
    send({ type: 'EXTRACT_ERROR', id, error: err instanceof Error ? err.message : String(err) })
  }
}
