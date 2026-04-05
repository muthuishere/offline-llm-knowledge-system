import { useRef, useState, useCallback } from 'react'
import { create, insertMultiple, save } from '@orama/orama'
import { prebuiltAppConfig } from '@mlc-ai/web-llm'
import {
  type Chunk,
  type Manifest,
  type ExportStage,
  type ChatModelId,
  EMBED_MODEL,
  CHUNK_SIZE,
  CHUNK_OVERLAP,
} from '../types'
import { chunkText } from '../lib/chunking'

// ---------------------------------------------------------------------------
// Worker message helper
// ---------------------------------------------------------------------------

function workerCall<TIn, TOut>(
  worker: Worker,
  message: TIn & { type: string; id: string },
  doneType: string,
  errorType: string,
  transfers: Transferable[] = [],
): Promise<TOut> {
  return new Promise((resolve, reject) => {
    const handler = (event: MessageEvent) => {
      const data = event.data
      if (data.id !== message.id) return
      if (data.type === doneType) {
        worker.removeEventListener('message', handler)
        resolve(data as TOut)
      } else if (data.type === errorType) {
        worker.removeEventListener('message', handler)
        reject(new Error(data.error ?? 'Worker error'))
      }
    }
    worker.addEventListener('message', handler)
    if (transfers.length > 0) {
      worker.postMessage(message, transfers)
    } else {
      worker.postMessage(message)
    }
  })
}

// ---------------------------------------------------------------------------
// SHA-256 helper
// ---------------------------------------------------------------------------

async function sha256(data: string | Uint8Array): Promise<string> {
  const source: Uint8Array =
    typeof data === 'string' ? new TextEncoder().encode(data) : data
  const buf: ArrayBuffer = source.buffer instanceof ArrayBuffer
    ? source.buffer
    : new Uint8Array(source).buffer
  const hashBuffer = await crypto.subtle.digest('SHA-256', buf)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return 'sha256:' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// ---------------------------------------------------------------------------
// Model URL helpers
// ---------------------------------------------------------------------------

function getModelUrl(modelId: ChatModelId): string {
  const record = prebuiltAppConfig.model_list.find(m => m.model_id === modelId)
  if (!record) throw new Error(`Model not found in prebuiltAppConfig: ${modelId}`)
  const base = record.model.endsWith('/') ? record.model : record.model + '/'
  return base.match(/.+\/resolve\/.+\//) ? base : base + 'resolve/main/'
}

function getWasmUrl(modelId: ChatModelId): string {
  const record = prebuiltAppConfig.model_list.find(m => m.model_id === modelId)
  if (!record) throw new Error(`Model not found in prebuiltAppConfig: ${modelId}`)
  return record.model_lib as string
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useExportPipeline() {
  const [stage, setStage] = useState<ExportStage>('idle')
  const [progress, setProgress] = useState(0)
  const [currentFile, setCurrentFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [estimatedSizeBytes, setEstimatedSizeBytes] = useState(0)

  const docWorkerRef = useRef<Worker | null>(null)
  const embedWorkerRef = useRef<Worker | null>(null)
  const zipWorkerRef = useRef<Worker | null>(null)

  function getDocWorker(): Worker {
    if (!docWorkerRef.current) {
      docWorkerRef.current = new Worker(
        new URL('../workers/document-worker.ts', import.meta.url),
        { type: 'module' },
      )
    }
    return docWorkerRef.current
  }

  function getEmbedWorker(): Worker {
    if (!embedWorkerRef.current) {
      embedWorkerRef.current = new Worker(
        new URL('../workers/embed-worker.ts', import.meta.url),
        { type: 'module' },
      )
    }
    return embedWorkerRef.current
  }

  function getZipWorker(): Worker {
    if (!zipWorkerRef.current) {
      zipWorkerRef.current = new Worker(
        new URL('../workers/zip-worker.ts', import.meta.url),
        { type: 'module' },
      )
    }
    return zipWorkerRef.current
  }

  const startExport = useCallback(async (files: File[], modelId: ChatModelId, systemInstructions?: string) => {
    setStage('parsing')
    setProgress(0)
    setCurrentFile(null)
    setError(null)

    try {
      // showSaveFilePicker MUST be called synchronously from the user gesture (click).
      // Any await before this call loses the gesture context and throws.
      const fileHandle = await (window as any).showSaveFilePicker({
        suggestedName: 'knowledge-base.zip',
        types: [{ description: 'ZIP Archive', accept: { 'application/zip': ['.zip'] } }],
      }).catch((err: any) => {
        if (err?.name === 'AbortError') return null
        throw err
      })

      if (!fileHandle) {
        setStage('idle')
        setProgress(0)
        return
      }

      const docWorker = getDocWorker()
      const embedWorker = getEmbedWorker()
      const zipWorker = getZipWorker()

      // Initialize embed worker. CACHE_CAPTURED arrives async after READY.
      // We collect it in a promise that resolves whenever it arrives (before or after embedding).
      let resolveCacheCapture!: (entries: Array<{ url: string; data: Uint8Array }>) => void
      const cacheCapturePromise = new Promise<Array<{ url: string; data: Uint8Array }>>(r => { resolveCacheCapture = r })

      const cacheHandler = (e: MessageEvent) => {
        if (e.data?.type === 'CACHE_CAPTURED') {
          embedWorker.removeEventListener('message', cacheHandler)
          resolveCacheCapture(e.data.entries ?? [])
        }
      }
      embedWorker.addEventListener('message', cacheHandler)

      await new Promise<void>((resolve, reject) => {
        const handler = (e: MessageEvent) => {
          if (e.data?.type === 'READY') {
            embedWorker.removeEventListener('message', handler)
            resolve()
          }
        }
        embedWorker.addEventListener('message', handler)
        embedWorker.postMessage({ type: 'INIT' })
        setTimeout(() => reject(new Error('Embed worker INIT timed out after 30s')), 30_000)
      })

      // ── Step 1: Parse + chunk files ─────────────────────────────────────────
      const EMBED_BATCH = 8
      const allChunks: Chunk[] = []
      const sourceMetas: Manifest['sources'] = []
      const sourceBuffers: { name: string; data: Uint8Array }[] = []

      for (let fi = 0; fi < files.length; fi++) {
        const file = files[fi]
        setCurrentFile(file.name)
        setProgress(Math.round((fi / files.length) * 30))

        const buffer = await file.arrayBuffer()
        // Keep a copy for the zip source entry before transferring to worker
        sourceBuffers.push({ name: file.name, data: new Uint8Array(buffer.slice(0)) })

        const callId = `parse-${fi}-${Date.now()}`
        type ParseDoneMsg = { type: 'PARSE_DONE'; id: string; text: string }

        const result = await workerCall<
          { type: string; id: string; name: string; buffer: ArrayBuffer },
          ParseDoneMsg
        >(
          docWorker,
          { type: 'PARSE_FILE', id: callId, name: file.name, buffer },
          'PARSE_DONE',
          'PARSE_ERROR',
          [buffer],
        )

        const rawChunks = chunkText(result.text, CHUNK_SIZE, CHUNK_OVERLAP)
          .map((text, i) => ({ text, page: i }))
        const checksum = await sha256(sourceBuffers[fi].data)

        sourceMetas.push({
          name: file.name,
          type: file.name.split('.').pop()?.toLowerCase() as 'pdf' | 'docx' | 'md' | 'txt',
          chunks: rawChunks.length,
          checksum,
        })

        // ── Step 2: Embed chunks ──────────────────────────────────────────────
        setStage('embedding')
        const chunkStartIndex = allChunks.length
        for (let bi = 0; bi < rawChunks.length; bi += EMBED_BATCH) {
          const batch = rawChunks.slice(bi, bi + EMBED_BATCH)
          const batchId = `embed-${fi}-${bi}-${Date.now()}`

          type EmbedDoneMsg = { type: 'EMBED_DONE'; id: string; vectors: number[][] }
          const embedResult = await workerCall<
            { type: string; id: string; texts: string[] },
            EmbedDoneMsg
          >(
            embedWorker,
            { type: 'EMBED', id: batchId, texts: batch.map(c => c.text) },
            'EMBED_DONE',
            'EMBED_ERROR',
          )

          for (let ci = 0; ci < batch.length; ci++) {
            allChunks.push({
              id: `chunk_${String(chunkStartIndex + bi + ci).padStart(4, '0')}`,
              source: file.name,
              page: batch[ci].page,
              text: batch[ci].text,
              vector: embedResult.vectors[ci] ?? [],
            })
          }

          const embedProgress = 30 + Math.round(
            ((fi / files.length) + (Math.min(bi + EMBED_BATCH, rawChunks.length) / rawChunks.length) / files.length) * 30,
          )
          setProgress(Math.min(60, embedProgress))
        }
      }

      // ── Step 3: Build Orama index ───────────────────────────────────────────
      setStage('indexing')
      setCurrentFile(null)
      setProgress(62)

      const oramaDb = await create({
        schema: {
          id: 'string',
          text: 'string',
          source: 'string',
          vector: `vector[${EMBED_MODEL.dimensions}]`,
        } as const,
        components: { tokenizer: { stemming: false } },
      })
      await insertMultiple(
        oramaDb,
        allChunks.map(c => ({ id: c.id, text: c.text, source: c.source, vector: c.vector })),
      )
      setProgress(66)

      // ── Step 4: Serialize chunks + Orama index ──────────────────────────────
      const chunksBytes = new TextEncoder().encode(JSON.stringify(allChunks))
      const oramaSaved = await save(oramaDb)
      const oramaBytes = new TextEncoder().encode(JSON.stringify(oramaSaved))
      const oramaGzipped = await compressGzip(oramaBytes)
      setProgress(70)

      // ── Step 5: Build manifest ──────────────────────────────────────────────
      const modelUrl = getModelUrl(modelId)
      const wasmUrl = getWasmUrl(modelId)
      const modelSizeBytes = estimateModelSize(modelId)

      const manifestBase: Omit<Manifest, 'manifest_hash'> = {
        version: '1.0',
        created_at: new Date().toISOString(),
        chat_model: {
          name: modelId,
          size_bytes: modelSizeBytes,
          model_url: modelUrl,
          wasm_url: wasmUrl,
        },
        embed_model: {
          name: EMBED_MODEL.name,
          dimensions: EMBED_MODEL.dimensions,
          path: EMBED_MODEL.path,
        },
        chunking: { chunk_size: CHUNK_SIZE, chunk_overlap: CHUNK_OVERLAP },
        sources: sourceMetas,
        total_chunks: allChunks.length,
        ...(systemInstructions ? { system_instructions: systemInstructions } : {}),
      }

      const manifestHash = await sha256(JSON.stringify(manifestBase))
      const manifest: Manifest = { ...manifestBase, manifest_hash: manifestHash }
      const manifestBytes = new TextEncoder().encode(JSON.stringify(manifest, null, 2))
      setProgress(74)

      // ── Step 6: Build KB entries for worker ────────────────────────────────
      setStage('packaging')
      setCurrentFile('Preparing knowledge base...')

      // Wait for embed cache capture (should already be done by now, but race is safe)
      setCurrentFile('Collecting embed model cache...')
      const embedCacheEntries = await Promise.race([
        cacheCapturePromise,
        new Promise<Array<{ url: string; data: Uint8Array }>>(r =>
          setTimeout(() => r([]), 15_000), // fallback if CACHE_CAPTURED never arrives
        ),
      ])
      console.log(`[Export] embed cache: ${embedCacheEntries.length} entries captured`)

      // KB entries: everything except model/wasm (those are fetched inside the worker)
      const kbEntries: Array<{ path: string; data: Uint8Array }> = [
        { path: 'manifest.json', data: manifestBytes },
        { path: 'chunks.json', data: chunksBytes },
        { path: 'orama-index.json.gz', data: oramaGzipped },
      ]
      if (systemInstructions) {
        kbEntries.push({
          path: 'instructions.md',
          data: new TextEncoder().encode(systemInstructions),
        })
      }
      for (const { name, data } of sourceBuffers) {
        kbEntries.push({ path: `sources/${name}`, data })
      }

      setProgress(76)

      // ── Step 7: Stream-compress to disk via zip worker ──────────────────────
      // The zip worker fetches model shards + WASM directly (never goes through main thread memory).
      // Each compressed chunk is postMessage'd back and written to the user's chosen file.
      const writable = await fileHandle.createWritable()
      const writer = writable.getWriter()

      const compressId = `compress-${Date.now()}`
      let writeChain = Promise.resolve()

      await new Promise<void>((resolve, reject) => {
        const handler = (event: MessageEvent) => {
          const { type, id, chunk, percent, label, error: workerError } = event.data
          if (id !== compressId) return

          if (type === 'ZIP_CHUNK') {
            // Chain writes so they're sequential — no risk of out-of-order writes
            writeChain = writeChain.then(() => writer.write(chunk))
          } else if (type === 'ZIP_PROGRESS') {
            setProgress(percent)
            if (label) setCurrentFile(label)
          } else if (type === 'ZIP_DONE') {
            zipWorker.removeEventListener('message', handler)
            writeChain
              .then(() => writer.close())
              .then(resolve)
              .catch(reject)
          } else if (type === 'ZIP_ERROR') {
            zipWorker.removeEventListener('message', handler)
            writeChain
              .then(() => writer.abort())
              .then(() => reject(new Error(workerError)))
              .catch(reject)
          }
        }
        zipWorker.addEventListener('message', handler)

        // Transfer kb entry buffers + embed cache buffers to worker (zero-copy)
        const kbTransfers = kbEntries.map(e => e.data.buffer as ArrayBuffer)
        const cacheTransfers = embedCacheEntries.map(e => e.data.buffer as ArrayBuffer)
        zipWorker.postMessage(
          { type: 'COMPRESS', id: compressId, kbEntries, modelUrl, wasmUrl, embedCacheEntries },
          [...kbTransfers, ...cacheTransfers],
        )
      })

      setProgress(100)
      setCurrentFile(null)
      setStage('done')

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(msg)
      setStage('error')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateEstimatedSize = useCallback((modelId: ChatModelId) => {
    const modelSize = estimateModelSize(modelId)
    const embedSize = 24 * 1024 * 1024
    setEstimatedSizeBytes(modelSize + embedSize)
  }, [])

  return { stage, progress, currentFile, error, estimatedSizeBytes, startExport, updateEstimatedSize }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function estimateModelSize(modelId: ChatModelId): number {
  const record = prebuiltAppConfig.model_list.find(m => m.model_id === modelId)
  const mb = (record as any)?.vram_required_MB ?? 1400
  return Math.round(mb * 1024 * 1024)
}

async function compressGzip(data: Uint8Array): Promise<Uint8Array> {
  if (typeof CompressionStream !== 'undefined') {
    const cs = new CompressionStream('gzip')
    const writer = cs.writable.getWriter()
    void writer.write(new Uint8Array(data))
    void writer.close()
    const parts: Uint8Array[] = []
    const reader = cs.readable.getReader()
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      parts.push(value)
    }
    const total = parts.reduce((n, c) => n + c.length, 0)
    const result = new Uint8Array(total)
    let offset = 0
    for (const part of parts) { result.set(part, offset); offset += part.length }
    return result
  }
  return data
}
