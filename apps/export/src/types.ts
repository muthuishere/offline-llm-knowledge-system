// Shared types for the export pipeline

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
    model_url: string   // HuggingFace resolve/main/ URL — used as WebLLM cache key base
    wasm_url: string    // GitHub raw URL for compiled WebGPU kernel
  }
  embed_model: { name: string; dimensions: number; path: string }
  chunking: { chunk_size: number; chunk_overlap: number }
  sources: SourceMeta[]
  total_chunks: number
  manifest_hash: string
  system_instructions?: string
}

export type ExportStage =
  | 'idle'
  | 'parsing'
  | 'embedding'
  | 'indexing'
  | 'packaging'
  | 'done'
  | 'error'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export const CHAT_MODELS = [
  {
    id: 'Phi-3-mini-4k-instruct-q4f16_1-MLC',
    label: 'Phi-3-mini (2.2 GB) — best quality',
  },
  {
    id: 'gemma-2-2b-it-q4f16_1-MLC',
    label: 'Gemma 2B (1.4 GB) — recommended',
  },
  {
    id: 'TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC',
    label: 'TinyLlama 1.1B (700 MB) — fastest',
  },
] as const

export type ChatModelId = (typeof CHAT_MODELS)[number]['id']

export const DEFAULT_CHAT_MODEL: ChatModelId = 'gemma-2-2b-it-q4f16_1-MLC'

export const EMBED_MODEL = {
  name: 'bge-small-en-v1.5-q8',
  dimensions: 384,
  path: 'embed-model/bge-small-en-v1.5-q8.onnx',
}

// Phi-3-mini-4k has a 4096-token window. Keep chunks tiny so 3-4 fit alongside
// the system prompt + question with room for output.
// 100 tokens × 4 chars ≈ 400 chars per chunk. Overlap ~20% for continuity.
export const CHUNK_SIZE = 100
export const CHUNK_OVERLAP = 20
