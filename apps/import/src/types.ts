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

export interface Manifest {
  version: string
  created_at: string
  chat_model: {
    name: string
    size_bytes: number
    model_url: string   // HuggingFace resolve/main/ URL — WebLLM cache key base
    wasm_url: string    // GitHub raw URL for compiled WebGPU kernel
  }
  embed_model: { name: string; dimensions: number; path: string }
  chunking: { chunk_size: number; chunk_overlap: number }
  sources: SourceMeta[]
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
