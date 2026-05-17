// Shared types for the import pipeline

export interface Chunk {
  id: string
  source: string
  page?: number
  text: string
  vector: number[]
}

export interface SourceMeta {
  name: string
  type: 'pdf' | 'docx' | 'md' | 'txt'
  chunks: number
  checksum: string
}

export type InferenceEngine = 'webllm' | 'wllama'

/**
 * An agent skill bundled into the knowledge base.
 * See apps/export/src/types.ts for the full description.
 */
export interface Skill {
  id: string
  name: string
  description: string
  has_script: boolean
  parameters?: Record<string, unknown>
}

export interface Manifest {
  version: string
  created_at: string
  chat_model: {
    name: string
    size_bytes: number
    engine: InferenceEngine   // 'webllm' = WebGPU, 'wllama' = CPU/WASM
    model_url: string         // WebLLM: HuggingFace resolve/main/ URL — cache key base
                              // Wllama: HuggingFace URL to GGUF file
    wasm_url: string          // WebLLM: GitHub raw URL for compiled WebGPU kernel
                              // Wllama: empty string (runtime ships its own WASM)
    supports_tools: boolean   // whether the model is trained for function calling
  }
  embed_model: { name: string; dimensions: number; path: string }
  chunking: { chunk_size: number; chunk_overlap: number }
  sources: SourceMeta[]
  skills: Skill[]
  total_chunks: number
  manifest_hash: string
  system_instructions?: string
}

export type ImportStage =
  | 'idle'
  | 'extracting'
  | 'caching'
  | 'loading-index'
  | 'loading-model'
  | 'ready'
  | 'error'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface GraphEdge {
  a: string
  b: string
  score: number
}
