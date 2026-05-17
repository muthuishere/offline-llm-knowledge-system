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

/**
 * An agent skill bundled into the knowledge base.
 *
 * Bundle layout: `skills/<id>/SKILL.md` (required) + `skills/<id>/tool.js` (optional).
 * SKILL.md frontmatter supplies `name` + `description`; the body is the
 * instruction the model follows when the skill is invoked.
 * When `has_script` is true, `tool.js` is executed in a sandboxed worker
 * and its return value is appended to the SKILL.md body in the tool result.
 */
export interface Skill {
  id: string
  name: string
  description: string
  has_script: boolean
  parameters?: Record<string, unknown>  // JSON Schema for tool.js arguments
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

/**
 * Chat model registry. Every entry must be trained for tool / function calling —
 * the runtime exposes bundled skills as tools and relies on the model to emit
 * structured tool_calls. Models without tool-call training (Phi-3, Gemma-2,
 * TinyLlama) are intentionally excluded.
 */
export const CHAT_MODELS = [
  // ── WebGPU models (require GPU) ──────────────────────────────────────────
  {
    id: 'Hermes-3-Llama-3.2-3B-q4f16_1-MLC',
    label: 'Hermes-3 Llama 3.2 3B (1.8 GB) — recommended',
    engine: 'webllm' as InferenceEngine,
    tag: 'GPU',
  },
  {
    id: 'Hermes-2-Pro-Llama-3-8B-q4f16_1-MLC',
    label: 'Hermes-2 Pro Llama 3 8B (4.5 GB) — best accuracy',
    engine: 'webllm' as InferenceEngine,
    tag: 'GPU',
  },
  {
    id: 'Llama-3.1-8B-Instruct-q4f16_1-MLC',
    label: 'Llama 3.1 8B Instruct (4.6 GB) — stock Meta',
    engine: 'webllm' as InferenceEngine,
    tag: 'GPU',
  },
  // ── CPU models (GGUF via wllama — no GPU needed) ─────────────────────────
  {
    id: 'Llama-3.2-3B-Instruct-Q4_K_M-GGUF',
    label: 'Llama 3.2 3B CPU (2.0 GB) — tool-capable on CPU',
    engine: 'wllama' as InferenceEngine,
    tag: 'CPU',
    gguf: {
      hfModel: 'bartowski/Llama-3.2-3B-Instruct-GGUF',
      fileName: 'Llama-3.2-3B-Instruct-Q4_K_M.gguf',
    },
  },
] as const

export type ChatModelId = (typeof CHAT_MODELS)[number]['id']

export const DEFAULT_CHAT_MODEL: ChatModelId = 'Hermes-3-Llama-3.2-3B-q4f16_1-MLC'

/** Look up the model definition by ID */
export function getChatModel(id: ChatModelId) {
  return CHAT_MODELS.find(m => m.id === id)!
}

export const EMBED_MODEL = {
  name: 'bge-small-en-v1.5-q8',
  dimensions: 384,
  path: 'embed-model/bge-small-en-v1.5-q8.onnx',
}

// Tool-capable models (Llama-3.x / Hermes) ship with 8K–128K context windows,
// so 100-token chunks leave ample room for 5–10 retrieved chunks plus tool
// call traffic. Larger chunks improve grounding for narrative docs; the
// trade-off is fewer chunks fit alongside multi-turn tool conversations.
export const CHUNK_SIZE = 100
export const CHUNK_OVERLAP = 20
