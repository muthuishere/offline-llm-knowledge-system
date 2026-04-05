import { useRef, useCallback, useEffect } from 'react'

/**
 * Manages a singleton embed-query-worker for off-main-thread ONNX embedding.
 *
 * - Worker is created once on mount, sent INIT, and kept alive.
 * - embedQuery() sends a query text and awaits EMBED_QUERY_DONE.
 * - Falls back to a zero vector if the worker errors or is not ready.
 */
export function useEmbedWorker(): {
  embedQuery: (text: string) => Promise<number[]>
} {
  const workerRef = useRef<Worker | null>(null)
  const readyRef = useRef<boolean>(false)
  const pendingRef = useRef<Map<string, { resolve: (v: number[]) => void }>>(new Map())

  useEffect(() => {
    const worker = new Worker(
      new URL('../workers/embed-query-worker.ts', import.meta.url),
      { type: 'module' },
    )
    workerRef.current = worker

    worker.onmessage = (e: MessageEvent) => {
      const { type, id, vector, error } = e.data

      if (type === 'READY') {
        readyRef.current = true
        console.log('[EmbedWorker] ready')
        return
      }

      if (type === 'EMBED_QUERY_DONE') {
        const pending = pendingRef.current.get(id)
        if (pending) { pending.resolve(vector); pendingRef.current.delete(id) }
        return
      }

      if (type === 'EMBED_QUERY_ERROR') {
        console.warn('[EmbedWorker] error:', error)
        const pending = pendingRef.current.get(id)
        if (pending) {
          pending.resolve(new Array(384).fill(0)) // zero-vector fallback
          pendingRef.current.delete(id)
        }
      }
    }

    worker.onerror = (e) => {
      console.error('[EmbedWorker] uncaught error:', e)
    }

    // Kick off model load immediately so it's warm before first query
    worker.postMessage({ type: 'INIT' })

    return () => {
      worker.terminate()
      workerRef.current = null
      readyRef.current = false
    }
  }, [])

  const embedQuery = useCallback(async (text: string): Promise<number[]> => {
    const worker = workerRef.current
    if (!worker) {
      console.warn('[EmbedWorker] worker not available, using zero vector')
      return new Array(384).fill(0)
    }

    const id = `eq-${Date.now()}-${Math.random().toString(36).slice(2)}`
    return new Promise<number[]>((resolve) => {
      // Store pending resolve; resolved by onmessage handler above
      pendingRef.current.set(id, { resolve })
      worker.postMessage({ type: 'EMBED_QUERY', id, text })

      // Safety timeout — if worker is stuck, return zero vector after 10s
      setTimeout(() => {
        if (pendingRef.current.has(id)) {
          console.warn('[EmbedWorker] timeout for query:', text)
          pendingRef.current.delete(id)
          resolve(new Array(384).fill(0))
        }
      }, 10_000)
    })
  }, [])

  return { embedQuery }
}
