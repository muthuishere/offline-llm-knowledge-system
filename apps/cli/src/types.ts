// Manifest contract — kept in sync with apps/{export,import}/src/types.ts.
// Consolidation into a shared package is a planned follow-up.

export type InferenceEngine = 'webllm' | 'wllama'

export interface Skill {
  id: string
  name: string
  description: string
  has_script: boolean
  parameters?: Record<string, unknown>
}

export interface SourceMeta {
  name: string
  type: 'pdf' | 'docx' | 'md' | 'txt'
  chunks: number
  checksum: string
}

export interface Chunk {
  id: string
  source: string
  page?: number
  text: string
  vector: number[]
}

export interface Manifest {
  version: string
  created_at: string
  chat_model: {
    name: string
    size_bytes: number
    engine: InferenceEngine
    model_url: string
    wasm_url: string
    supports_tools: boolean
  }
  embed_model: { name: string; dimensions: number; path: string }
  chunking: { chunk_size: number; chunk_overlap: number }
  sources: SourceMeta[]
  skills: Skill[]
  total_chunks: number
  manifest_hash: string
  system_instructions?: string
}

export const EMBED_MODEL = {
  name: 'bge-small-en-v1.5-q8',
  dimensions: 384,
  path: 'embed-model/bge-small-en-v1.5-q8.onnx',
}

export const CHUNK_SIZE = 100
export const CHUNK_OVERLAP = 20

export const DEFAULT_CHAT_MODEL = 'Hermes-3-Llama-3.2-3B-q4f16_1-MLC'
