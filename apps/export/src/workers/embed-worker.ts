import { pipeline, env, type FeatureExtractionPipeline } from '@huggingface/transformers'

// v4 browser build auto-configures CDN wasm paths; set allowLocalModels=false to
// ensure the model is always fetched from Hugging Face Hub, never a local path.
env.allowLocalModels = false

// The transformers.js cache name — must match what the library uses internally.
const TRANSFORMERS_CACHE = 'transformers-cache'

type InMsg =
  | { type: 'INIT' }
  | { type: 'EMBED'; id: string; texts: string[] }
  | { type: 'EMBED'; id: string; chunks: Array<{ text: string; [key: string]: unknown }> }

type OutMsg =
  | { type: 'READY' }
  | { type: 'CACHE_CAPTURED'; entries: Array<{ url: string; data: Uint8Array }> }
  | { type: 'EMBED_DONE'; id: string; vectors: number[][] }
  | { type: 'EMBED_ERROR'; id: string; error: string }

let extractor: FeatureExtractionPipeline | null = null

/** After pipeline init, drain the transformers-cache and send all entries to the main thread. */
async function captureEmbedCache(): Promise<void> {
  try {
    const cache = await caches.open(TRANSFORMERS_CACHE)
    const requests = await cache.keys()
    const entries: Array<{ url: string; data: Uint8Array }> = []

    for (const req of requests) {
      // Only bundle HuggingFace model files — skip CDN ort-web runtime files.
      // The import app serves ONNX runtime locally via /ort-wasm/ (onnxWasmPlugin).
      if (!req.url.includes('huggingface.co')) {
        console.log(`[EmbedWorker] skipping non-HF cache entry: ${req.url}`)
        continue
      }
      const res = await cache.match(req)
      if (!res) continue
      const buf = await res.arrayBuffer()
      if (buf.byteLength === 0) {
        console.log(`[EmbedWorker] skipping empty cache entry: ${req.url}`)
        continue
      }
      entries.push({ url: req.url, data: new Uint8Array(buf) })
      console.log(`[EmbedWorker] captured cache entry: ${req.url} (${(buf.byteLength / 1024).toFixed(0)} KB)`)
    }

    // Transfer all buffers to main thread zero-copy
    const transfers = entries.map(e => e.data.buffer as ArrayBuffer)
    self.postMessage({ type: 'CACHE_CAPTURED', entries } satisfies OutMsg, { transfer: transfers })
  } catch (err) {
    console.warn('[EmbedWorker] could not capture transformers-cache:', err)
    self.postMessage({ type: 'CACHE_CAPTURED', entries: [] } satisfies OutMsg)
  }
}

self.onmessage = async (event: MessageEvent<InMsg>) => {
  const msg = event.data

  if (msg.type === 'INIT') {
    try {
      extractor = await pipeline('feature-extraction', 'Xenova/bge-small-en-v1.5')
      // Send READY first so the pipeline continues, then drain the cache in the background.
      self.postMessage({ type: 'READY' } satisfies OutMsg)
      // captureEmbedCache runs async — main thread will receive CACHE_CAPTURED later.
      captureEmbedCache()
    } catch (err) {
      // Post a general error if init fails — caller should handle lack of READY
      console.error('embed-worker: failed to initialize pipeline', err)
    }
    return
  }

  if (msg.type === 'EMBED') {
    const { id } = msg
    // Support both texts:string[] and chunks:{text:string}[] formats
    const texts: string[] = 'texts' in msg && msg.texts
      ? msg.texts
      : 'chunks' in msg && msg.chunks
        ? msg.chunks.map((c) => c.text)
        : []
    try {
      if (!extractor) {
        throw new Error('Embedding pipeline not initialized. Send INIT first.')
      }

      const vectors: number[][] = []

      for (const text of texts) {
        const output = await extractor(text, { pooling: 'mean', normalize: true })
        // output.data is a Float32Array — convert to a plain number[]
        vectors.push(Array.from(output.data as Float32Array))
      }

      const response: OutMsg = { type: 'EMBED_DONE', id, vectors }
      self.postMessage(response)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err)
      const response: OutMsg = { type: 'EMBED_ERROR', id, error: errorMsg }
      self.postMessage(response)
    }
  }
}
