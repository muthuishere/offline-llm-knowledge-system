import { useRef, useCallback, useState } from 'react'
import { useWebLLM } from './useWebLLM'
import { useWllama } from './useWllama'
import type { Manifest } from '../types'
import type { WebLLMMessage } from './chatMessages'

/**
 * Unified inference hook that delegates to useWebLLM (GPU) or useWllama (CPU)
 * based on the manifest's chat_model.engine field.
 *
 * Exposes the same { engine, loading, loadModel, chat } interface so
 * ChatInterface can work identically regardless of backend.
 */
export function useInference(): {
  engine: any | null
  loading: boolean
  engineType: 'webllm' | 'wllama' | null
  loadModel: (manifest: Manifest) => Promise<void>
  chat: (messages: WebLLMMessage[], onToken: (token: string) => void) => Promise<void>
} {
  const webllm = useWebLLM()
  const wllama = useWllama()
  const engineTypeRef = useRef<'webllm' | 'wllama' | null>(null)
  const [engineType, setEngineType] = useState<'webllm' | 'wllama' | null>(null)

  const loadModel = useCallback(async (manifest: Manifest): Promise<void> => {
    const type = manifest.chat_model.engine ?? 'webllm'
    engineTypeRef.current = type
    setEngineType(type)

    if (type === 'wllama') {
      return wllama.loadModel(manifest)
    }
    return webllm.loadModel(manifest)
  }, [webllm.loadModel, wllama.loadModel])

  const chat = useCallback(async (
    messages: WebLLMMessage[],
    onToken: (token: string) => void,
  ): Promise<void> => {
    if (engineTypeRef.current === 'wllama') {
      return wllama.chat(messages, onToken)
    }
    return webllm.chat(messages, onToken)
  }, [webllm.chat, wllama.chat])

  // Combine engine/loading from whichever backend is active
  const activeEngine = engineTypeRef.current === 'wllama' ? wllama.engine : webllm.engine
  const activeLoading = engineTypeRef.current === 'wllama' ? wllama.loading : webllm.loading

  return {
    engine: activeEngine,
    loading: activeLoading,
    engineType,
    loadModel,
    chat,
  }
}
