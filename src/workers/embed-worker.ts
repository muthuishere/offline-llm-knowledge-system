import { pipeline, type FeatureExtractionPipeline } from '@xenova/transformers'

type InMsg =
  | { type: 'INIT' }
  | { type: 'EMBED'; id: string; texts: string[] }

type OutMsg =
  | { type: 'READY' }
  | { type: 'EMBED_DONE'; id: string; vectors: number[][] }
  | { type: 'EMBED_ERROR'; id: string; error: string }

let extractor: FeatureExtractionPipeline | null = null

self.onmessage = async (event: MessageEvent<InMsg>) => {
  const msg = event.data

  if (msg.type === 'INIT') {
    try {
      extractor = await pipeline('feature-extraction', 'Xenova/bge-small-en-v1.5')
      const response: OutMsg = { type: 'READY' }
      self.postMessage(response)
    } catch (err) {
      // Post a general error if init fails — caller should handle lack of READY
      console.error('embed-worker: failed to initialize pipeline', err)
    }
    return
  }

  if (msg.type === 'EMBED') {
    const { id, texts } = msg
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
