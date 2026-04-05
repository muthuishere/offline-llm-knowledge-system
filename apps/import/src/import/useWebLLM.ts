import { useState, useRef, useCallback } from 'react'
import type { Manifest } from '../types'
import type { WebLLMMessage } from './chatMessages'

/**
 * WHY WORKER + REF PATTERN:
 *
 * 1. Worker (off-main-thread inference)
 *    CreateMLCEngine() on the main thread blocks the browser during 30s model
 *    load and during every inference call. CreateWebWorkerMLCEngine() runs the
 *    MLCEngine inside a dedicated Web Worker — the main thread sends messages
 *    and awaits responses but never blocks the event loop. The returned proxy
 *    object has the identical API (chat.completions.create, reload, etc.).
 *
 * 2. useRef latch (synchronous duplicate-load guard)
 *    React setState is async. If loadModel() is called twice before the first
 *    setLoading(true) flushes, both calls pass the useState guard. useRef reads
 *    and writes synchronously in the same tick — the second call sees
 *    loadingRef.current === true immediately and bails.
 *
 * 3. Shared Promise (callers that race get the same result)
 *    Instead of returning void when the latch fires, we return the original
 *    in-flight Promise. Any caller that arrives while loading is in progress
 *    waits on the same Promise and resolves together when the engine is ready.
 *    This means loadModel().then(() => setModelReady(true)) always fires AFTER
 *    the engine is actually available — not on a no-op early return.
 *
 * 4. useCallback([]) stable reference
 *    loadModel and chat are wrapped in useCallback with empty deps so their
 *    identity never changes across re-renders. This prevents useEffect deps
 *    from seeing a "new" function on every render and re-firing the effect.
 */
export function useWebLLM(): {
  engine: any | null
  loading: boolean
  loadModel: (manifest: Manifest) => Promise<void>
  chat: (messages: WebLLMMessage[], onToken: (token: string) => void) => Promise<void>
} {
  const [engine, setEngine] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  const engineRef = useRef<any>(null)           // singleton: set once, never recreated
  const loadPromiseRef = useRef<Promise<void> | null>(null) // shared in-flight promise

  const loadModel = useCallback(async (manifest: Manifest): Promise<void> => {
    // Already loaded — resolve immediately
    if (engineRef.current) {
      console.log('[WebLLM] Engine already exists (singleton), skipping load')
      return
    }

    // Already loading — return the SAME promise so callers wait for the real result
    if (loadPromiseRef.current) {
      console.log('[WebLLM] Load already in progress, awaiting shared promise')
      return loadPromiseRef.current
    }

    const modelId = manifest.chat_model.name
    console.log('[WebLLM] Loading model from pre-populated cache:', modelId)
    setLoading(true)

    loadPromiseRef.current = (async () => {
      try {
        const { CreateWebWorkerMLCEngine } = await import('@mlc-ai/web-llm')

        // Spin up a dedicated worker for model loading + inference.
        // The worker runs WebWorkerMLCEngineHandler which creates its own MLCEngine.
        // Cache API is shared by origin, so webllm/* entries from unzip-worker are visible.
        const worker = new Worker(
          new URL('../workers/llm-worker.ts', import.meta.url),
          { type: 'module' },
        )

        const mlcEngine = await CreateWebWorkerMLCEngine(worker, modelId, {
          initProgressCallback: (report: any) => {
            console.log('[WebLLM]', report.text, `${Math.round((report.progress ?? 0) * 100)}%`)
          },
        })

        engineRef.current = mlcEngine
        setEngine(mlcEngine)
        console.log('[WebLLM] Engine ready (worker)')
      } catch (err) {
        // Clear promise so a retry is possible after failure
        loadPromiseRef.current = null
        setLoading(false)
        throw err
      }
      setLoading(false)
    })()

    return loadPromiseRef.current
  }, [])

  const chat = useCallback(async (
    messages: WebLLMMessage[],
    onToken: (token: string) => void,
  ): Promise<void> => {
    const eng = engineRef.current
    if (!eng) throw new Error('Engine not loaded')

    const stream = await eng.chat.completions.create({
      messages,
      stream: true,
    })

    for await (const chunk of stream) {
      const token = chunk.choices[0]?.delta?.content ?? ''
      if (token) onToken(token)
    }
  }, [])

  return { engine, loading, loadModel, chat }
}
