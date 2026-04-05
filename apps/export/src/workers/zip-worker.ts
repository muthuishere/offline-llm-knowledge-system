import { Zip, ZipDeflate, ZipPassThrough } from 'fflate'

// ---------------------------------------------------------------------------
// Message types
// ---------------------------------------------------------------------------

type InMsg = {
  type: 'COMPRESS'
  id: string
  kbEntries: Array<{ path: string; data: Uint8Array }>
  modelUrl: string   // e.g. https://huggingface.co/.../resolve/main/
  wasmUrl: string    // full URL to compiled .wasm
  embedCacheEntries?: Array<{ url: string; data: Uint8Array }>  // captured from transformers-cache
}

type OutMsg =
  | { type: 'ZIP_CHUNK'; id: string; chunk: Uint8Array }
  | { type: 'ZIP_PROGRESS'; id: string; percent: number; label: string }
  | { type: 'ZIP_DONE'; id: string }
  | { type: 'ZIP_ERROR'; id: string; error: string }

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function send(msg: OutMsg, transfer?: ArrayBuffer[]) {
  if (transfer?.length) {
    self.postMessage(msg, { transfer })
  } else {
    self.postMessage(msg)
  }
}

/** Add a small in-memory entry to the zip. Already-compressed formats are stored; others are deflated. */
function addEntry(zip: Zip, path: string, data: Uint8Array): void {
  const store = path.endsWith('.gz') || path.endsWith('.bin') || path.endsWith('.wasm')
  if (store) {
    const f = new ZipPassThrough(path)
    zip.add(f)
    f.push(data, true)
  } else {
    const f = new ZipDeflate(path, { level: 6 })
    zip.add(f)
    f.push(data, true)
  }
}

/** Fetch a URL and stream its response body directly into the zip — never accumulates in memory. */
async function streamFetch(zip: Zip, path: string, url: string): Promise<void> {
  let resp: Response
  try {
    resp = await fetch(url)
  } catch (e) {
    console.warn(`[ZipWorker] fetch failed for ${url}:`, e)
    return
  }
  if (!resp.ok) {
    console.warn(`[ZipWorker] ${url}: HTTP ${resp.status} — skipping`)
    return
  }

  const f = new ZipPassThrough(path)
  zip.add(f)

  const reader = resp.body!.getReader()
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        f.push(new Uint8Array(0), true)
        break
      }
      f.push(value, false)
    }
  } finally {
    reader.releaseLock()
  }
}

// ---------------------------------------------------------------------------
// Message handler
// ---------------------------------------------------------------------------

self.onmessage = async (event: MessageEvent<InMsg>) => {
  const msg = event.data
  if (msg.type !== 'COMPRESS') return

  const { id, kbEntries, modelUrl, wasmUrl, embedCacheEntries = [] } = msg

  try {
    const zip = new Zip((err, chunk, final) => {
      if (err) { send({ type: 'ZIP_ERROR', id, error: err.message }); return }
      if (chunk && chunk.length > 0) {
        // Slice to a standalone buffer so transfer is safe regardless of byteOffset
        const buf = chunk.buffer.slice(chunk.byteOffset, chunk.byteOffset + chunk.byteLength) as ArrayBuffer
        send({ type: 'ZIP_CHUNK', id, chunk: new Uint8Array(buf) }, [buf])
      }
      if (final) send({ type: 'ZIP_DONE', id })
    })

    // ── Step 1: KB entries (manifest, chunks, orama-index, source files) ────
    // These are small and were already built in the main thread
    for (const entry of kbEntries) {
      addEntry(zip, entry.path, entry.data)
    }

    // ── Step 2: Model config + tokenizer files ───────────────────────────────
    send({ type: 'ZIP_PROGRESS', id, percent: 77, label: 'Fetching model config...' })
    for (const name of ['mlc-chat-config.json', 'tokenizer.json', 'tokenizer_config.json', 'tokenizer.model']) {
      try {
        const resp = await fetch(modelUrl + name)
        if (!resp.ok) {
          console.warn(`[ZipWorker] ${name}: HTTP ${resp.status}, skipping`)
          continue
        }
        const data = new Uint8Array(await resp.arrayBuffer())
        const f = new ZipDeflate(`model/${name}`, { level: 6 })
        zip.add(f)
        f.push(data, true)
        console.log(`[ZipWorker] Config fetched: ${name}`)
      } catch (e) {
        console.warn(`[ZipWorker] ${name} not available, skipping`)
      }
    }

    // ── Step 3: tensor-cache.json — discovers the actual shard filenames ─────
    send({ type: 'ZIP_PROGRESS', id, percent: 80, label: 'Fetching tensor-cache.json...' })
    console.log(`[ZipWorker] Fetching tensor-cache.json from ${modelUrl}`)
    const tcResp = await fetch(modelUrl + 'tensor-cache.json')
    if (!tcResp.ok) throw new Error(`tensor-cache.json: HTTP ${tcResp.status}`)
    const tcData = new Uint8Array(await tcResp.arrayBuffer())
    const tcEntry = new ZipDeflate('model/tensor-cache.json', { level: 6 })
    zip.add(tcEntry)
    tcEntry.push(tcData, true)

    const tensorCache = JSON.parse(new TextDecoder().decode(tcData))
    const records: Array<{ dataPath: string }> = tensorCache.records ?? []
    console.log(`[ZipWorker] ${records.length} shards to fetch`)

    // ── Step 4: Weight shards — streamed from HuggingFace, never fully in RAM ─
    for (let i = 0; i < records.length; i++) {
      const { dataPath } = records[i]
      const shardUrl = new URL(dataPath, modelUrl).href
      const pct = 80 + Math.round(((i + 1) / (records.length + 1)) * 13)
      send({ type: 'ZIP_PROGRESS', id, percent: pct, label: `Shard ${i + 1}/${records.length}: ${dataPath}` })
      console.log(`[ZipWorker] Shard ${i + 1}/${records.length}: ${dataPath}`)
      await streamFetch(zip, `model/${dataPath}`, shardUrl)
    }

    // ── Step 5: Compiled WebGPU WASM kernel ──────────────────────────────────
    send({ type: 'ZIP_PROGRESS', id, percent: 94, label: 'Fetching WASM kernel...' })
    const wasmFilename = wasmUrl.split('/').pop()!
    console.log(`[ZipWorker] WASM: ${wasmUrl}`)
    await streamFetch(zip, `wasm/${wasmFilename}`, wasmUrl)

    // ── Step 6: Embed model cache (captured from transformers-cache in embed-worker) ──
    // Stored as embed-cache/index.json (URL→filename map) + embed-cache/<n>.bin
    // Unzip-worker will restore these into caches.open('transformers-cache') on import.
    if (embedCacheEntries.length > 0) {
      send({ type: 'ZIP_PROGRESS', id, percent: 95, label: 'Bundling embed model cache...' })
      const cacheIndex: Array<{ file: string; url: string }> = []

      for (let i = 0; i < embedCacheEntries.length; i++) {
        const { url, data } = embedCacheEntries[i]
        const filename = `embed-cache/${i}.bin`
        cacheIndex.push({ file: filename, url })
        addEntry(zip, filename, data)
        console.log(`[ZipWorker] embed-cache ${i}: ${url} (${(data.length / 1024).toFixed(0)} KB)`)
      }

      const indexBytes = new TextEncoder().encode(JSON.stringify(cacheIndex))
      addEntry(zip, 'embed-cache/index.json', indexBytes)
      console.log(`[ZipWorker] embed-cache: ${embedCacheEntries.length} entries bundled`)
    }

    send({ type: 'ZIP_PROGRESS', id, percent: 96, label: 'Finalizing zip...' })
    zip.end()

  } catch (err) {
    send({ type: 'ZIP_ERROR', id, error: err instanceof Error ? err.message : String(err) })
  }
}
