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

export type InferenceEngine = 'webllm' | 'wllama'

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
  // ── WebGPU models (require GPU) ──────────────────────────────────────────
  {
    id: 'Phi-3-mini-4k-instruct-q4f16_1-MLC',
    label: 'Phi-3-mini (2.2 GB) — best quality',
    engine: 'webllm' as InferenceEngine,
    tag: 'GPU',
  },
  {
    id: 'gemma-2-2b-it-q4f16_1-MLC',
    label: 'Gemma 2B (1.4 GB) — recommended',
    engine: 'webllm' as InferenceEngine,
    tag: 'GPU',
  },
  {
    id: 'TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC',
    label: 'TinyLlama 1.1B (700 MB) — fastest',
    engine: 'webllm' as InferenceEngine,
    tag: 'GPU',
  },
  // ── CPU models (GGUF via wllama — no GPU needed) ─────────────────────────
  {
    id: 'gemma-2-2b-it-Q4_K_M-GGUF',
    label: 'Gemma 2B CPU (1.5 GB) — recommended',
    engine: 'wllama' as InferenceEngine,
    tag: 'CPU',
    gguf: {
      hfModel: 'bartowski/gemma-2-2b-it-GGUF',
      fileName: 'gemma-2-2b-it-Q4_K_M.gguf',
    },
  },
  {
    id: 'TinyLlama-1.1B-Chat-v1.0-Q4_K_M-GGUF',
    label: 'TinyLlama 1.1B CPU (670 MB) — fastest',
    engine: 'wllama' as InferenceEngine,
    tag: 'CPU',
    gguf: {
      hfModel: 'TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF',
      fileName: 'tinyllama-1.1b-chat-v1.0.Q4_K_M.gguf',
    },
  },
] as const

export type ChatModelId = (typeof CHAT_MODELS)[number]['id']

export const DEFAULT_CHAT_MODEL: ChatModelId = 'gemma-2-2b-it-q4f16_1-MLC'

/** Look up the model definition by ID */
export function getChatModel(id: ChatModelId) {
  return CHAT_MODELS.find(m => m.id === id)!
}

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
