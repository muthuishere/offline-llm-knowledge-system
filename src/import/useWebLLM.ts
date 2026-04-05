import { useState, useRef } from 'react'
import { readFile } from './opfs'
import type { ChatMessage, Manifest } from '../types'

export function useWebLLM(): {
  engine: any | null
  loading: boolean
  loadModel: (manifestHash: string) => Promise<void>
  chat: (messages: ChatMessage[], onToken: (token: string) => void) => Promise<void>
} {
  const [engine, setEngine] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const blobUrlsRef = useRef<string[]>([])

  async function loadModel(manifestHash: string): Promise<void> {
    setLoading(true)
    try {
      // Read manifest to get model name
      const manifestBytes = await readFile(manifestHash, 'manifest.json')
      const manifest: Manifest = JSON.parse(new TextDecoder().decode(manifestBytes))
      const modelName = manifest.chat_model.name

      // Dynamically import to avoid top-level issues
      const { CreateMLCEngine } = await import('@mlc-ai/web-llm')

      // Enumerate model files from OPFS directory
      const modelFiles = await getModelFiles(manifestHash)

      const blobUrls: string[] = []
      const urlMap: Record<string, string> = {}

      for (const filePath of modelFiles) {
        const data = await readFile(manifestHash, filePath)
        // Ensure we have a regular ArrayBuffer, not SharedArrayBuffer
        // Slice to get a plain ArrayBuffer regardless of backing store type
        const arrayBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer
        const blob = new Blob([arrayBuffer])
        const url = URL.createObjectURL(blob)
        blobUrls.push(url)
        urlMap[filePath] = url
      }
      blobUrlsRef.current = blobUrls

      // WebLLM expects model_url pointing to the model directory base
      // We provide the config.json blob URL as the primary entry point
      const configUrl = urlMap['model/config.json'] ?? blobUrls[0] ?? ''

      // Build appConfig as plain object cast to any to avoid strict ModelRecord typing
      const appConfig: any = {
        model_list: [
          {
            model_id: modelName,
            model: configUrl,
            model_lib: '',
            overrides: { context_window_size: 2048 },
          },
        ],
      }

      const mlcEngine = await CreateMLCEngine(modelName, {
        appConfig,
        initProgressCallback: (_report: any) => {
          // Progress handled at pipeline level
        },
      })

      // Revoke all blob URLs after engine init to free memory references
      for (const url of blobUrls) {
        URL.revokeObjectURL(url)
      }
      blobUrlsRef.current = []

      setEngine(mlcEngine)
    } finally {
      setLoading(false)
    }
  }

  async function getModelFiles(manifestHash: string): Promise<string[]> {
    const baseFiles = [
      'model/config.json',
      'model/tokenizer.json',
      'model/tokenizer_config.json',
    ]

    // Try to enumerate model directory entries via OPFS handle
    const { getKnowledgeBaseDir } = await import('./opfs')
    const dir = await getKnowledgeBaseDir(manifestHash)
    let modelDir: FileSystemDirectoryHandle
    try {
      modelDir = await dir.getDirectoryHandle('model')
    } catch {
      return baseFiles
    }

    const files: string[] = []
    for await (const [name] of modelDir as any) {
      files.push(`model/${name}`)
    }

    return files.length > 0 ? files : baseFiles
  }

  async function chat(
    messages: ChatMessage[],
    onToken: (token: string) => void,
  ): Promise<void> {
    if (!engine) throw new Error('Engine not loaded')

    const stream = await engine.chat.completions.create({
      messages,
      stream: true,
    })

    for await (const chunk of stream) {
      const token = chunk.choices[0]?.delta?.content ?? ''
      if (token) {
        onToken(token)
      }
    }
  }

  return { engine, loading, loadModel, chat }
}
