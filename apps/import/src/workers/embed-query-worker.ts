/**
 * Embed Query Worker — runs ONNX text embedding off the main thread.
 *
 * Why a dedicated worker:
 * - The bge-small-en-v1.5 ONNX model init takes ~1-2s and inference ~200ms.
 *   Running this on the main thread freezes input and blocks React rendering.
 * - The worker shares the same Cache API origin, so transformers-cache entries
 *   pre-populated by unzip-worker are visible here — no network needed.
 * - ONNX WASM is served from /ort-wasm/ (vite-plugin copies them at build time).
 */
import { pipeline, env, type FeatureExtractionPipeline } from '@huggingface/transformers'

type InMsg =
  | { type: 'INIT' }
  | { type: 'EMBED_QUERY'; id: string; text: string }

type OutMsg =
  | { type: 'READY' }
  | { type: 'EMBED_QUERY_DONE'; id: string; vector: number[] }
  | { type: 'EMBED_QUERY_ERROR'; id: string; error: string }

let extractor: FeatureExtractionPipeline | null = null

self.onmessage = async (event: MessageEvent<InMsg>) => {
  const msg = event.data

  if (msg.type === 'INIT') {
    try {
      // Override ONNX WASM paths to load from local server (/ort-wasm/) instead of CDN.
      // Must happen before pipeline() so ort-web picks it up during InferenceSession.create().
      const onnxWasm = (env.backends?.onnx as any)?.wasm
      if (onnxWasm) {
        // import.meta.env.BASE_URL is '/' in dev and '/offline-llm-knowledge-system/import/' in prod.
        // This is the correct base regardless of where the worker script is located.
        const wasmPath = import.meta.env.BASE_URL + 'ort-wasm/'
        onnxWasm.wasmPaths = wasmPath
        console.log('[EmbedQueryWorker] ONNX WASM path →', wasmPath)
      }
      // Model files come from transformers-cache (pre-populated by unzip-worker).
      // No network requests needed after first import.
      extractor = await pipeline('feature-extraction', 'Xenova/bge-small-en-v1.5')
      self.postMessage({ type: 'READY' } satisfies OutMsg)
    } catch (err) {
      console.error('[EmbedQueryWorker] init failed:', err)
      // No READY sent — caller will timeout and fall back to zero-vector
    }
    return
  }

  if (msg.type === 'EMBED_QUERY') {
    const { id, text } = msg
    try {
      if (!extractor) throw new Error('Embedding pipeline not initialized. Send INIT first.')
      const output = await extractor(text, { pooling: 'mean', normalize: true })
      const vector = Array.from(output.data as Float32Array)
      self.postMessage({ type: 'EMBED_QUERY_DONE', id, vector } satisfies OutMsg)
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err)
      self.postMessage({ type: 'EMBED_QUERY_ERROR', id, error } satisfies OutMsg)
    }
  }
}
