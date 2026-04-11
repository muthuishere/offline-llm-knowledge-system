import { useState, useRef, useCallback } from 'react'
import type { Manifest } from '../types'
import type { WebLLMMessage } from './chatMessages'
import { readFileAsBlob, listDir } from './opfs'

/**
 * CPU inference hook using wllama (llama.cpp compiled to WASM).
 *
 * Mirrors the useWebLLM() interface so ChatInterface can use either engine
 * transparently based on manifest.chat_model.engine.
 *
 * Model loading:
 * 1. Read the GGUF file from OPFS as a Blob (zero-copy via File API)
 * 2. Initialize Wllama with local WASM files served at /wllama-wasm/
 * 3. Load the GGUF blob into the wllama engine
 *
 * Chat:
 * 1. Format messages using wllama's built-in chat template (from GGUF metadata)
 * 2. Stream tokens via createChatCompletion with onNewToken callback
 */
export function useWllama(): {
  engine: any | null
  loading: boolean
  loadModel: (manifest: Manifest) => Promise<void>
  chat: (messages: WebLLMMessage[], onToken: (token: string) => void) => Promise<void>
} {
  const [engine, setEngine] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  const engineRef = useRef<any>(null)
  const loadPromiseRef = useRef<Promise<void> | null>(null)

  const loadModel = useCallback(async (manifest: Manifest): Promise<void> => {
    if (engineRef.current) {
      console.log('[Wllama] Engine already loaded, skipping')
      return
    }
    if (loadPromiseRef.current) {
      console.log('[Wllama] Load in progress, awaiting shared promise')
      return loadPromiseRef.current
    }

    setLoading(true)
    console.log('[Wllama] Loading CPU model:', manifest.chat_model.name)

    loadPromiseRef.current = (async () => {
      try {
        const { Wllama } = await import('@wllama/wllama')

        // Resolve WASM paths — served by wllamaWasmPlugin in vite.config.ts
        const base = import.meta.env.BASE_URL || '/'
        const wllamaInstance = new Wllama({
          'single-thread/wllama.wasm': `${base}wllama-wasm/single-thread/wllama.wasm`,
          'multi-thread/wllama.wasm': `${base}wllama-wasm/multi-thread/wllama.wasm`,
        })

        // Find the GGUF file in OPFS under model/
        const modelFiles = await listDir(manifest.manifest_hash, 'model')
        const ggufFile = modelFiles.find(f => f.endsWith('.gguf'))
        if (!ggufFile) throw new Error('No .gguf file found in model/ directory')

        console.log('[Wllama] Reading GGUF from OPFS:', ggufFile)
        const blob = await readFileAsBlob(manifest.manifest_hash, `model/${ggufFile}`)
        console.log('[Wllama] GGUF size:', (blob.size / 1e6).toFixed(1), 'MB')

        // Load model from blob
        await wllamaInstance.loadModel([blob], {
          n_ctx: 2048,       // Context window (keep small for CPU perf)
          n_batch: 128,
          n_threads: Math.min(navigator.hardwareConcurrency || 4, 4),
        })

        console.log('[Wllama] Model loaded, template:', wllamaInstance.getChatTemplate()?.slice(0, 100))
        engineRef.current = wllamaInstance
        setEngine(wllamaInstance)
      } catch (err) {
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
    const wllamaEngine = engineRef.current
    if (!wllamaEngine) throw new Error('Wllama engine not loaded')

    // Convert from OpenAI format to wllama format
    const wllamaMessages = messages.map(m => ({
      role: m.role as 'system' | 'user' | 'assistant',
      content: m.content,
    }))

    // Stream chat completion — wllama's onNewToken gives cumulative text,
    // but our onToken callback expects individual token deltas.
    let prevText = ''
    await wllamaEngine.createChatCompletion(wllamaMessages, {
      nPredict: 512,
      sampling: {
        temp: 0.7,
        top_p: 0.9,
        top_k: 40,
        penalty_repeat: 1.1,
      },
      useCache: true,
      onNewToken: (_token: number, _piece: Uint8Array, currentText: string) => {
        const delta = currentText.slice(prevText.length)
        prevText = currentText
        if (delta) onToken(delta)
      },
    })
  }, [])

  return { engine, loading, loadModel, chat }
}
