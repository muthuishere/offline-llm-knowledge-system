import type { ChatModelId } from '../types'

export interface ModelShardConfig {
  modelId: ChatModelId
  shards: string[]       // shard filenames inside model/ dir in the zip
  configFiles: string[]  // config.json, tokenizer.json, tokenizer_config.json
  sizeBytesApprox: number
}

const CONFIG_FILES = ['config.json', 'tokenizer.json', 'tokenizer_config.json']

const MODEL_CONFIGS: Record<ChatModelId, ModelShardConfig> = {
  'Phi-3-mini-4k-instruct-q4f16_1': {
    modelId: 'Phi-3-mini-4k-instruct-q4f16_1',
    shards: [
      'model-00001-of-00002.safetensors',
      'model-00002-of-00002.safetensors',
    ],
    configFiles: CONFIG_FILES,
    sizeBytesApprox: 2_200_000_000,
  },
  'gemma-2-2b-it-q4f16_1': {
    modelId: 'gemma-2-2b-it-q4f16_1',
    shards: ['model.safetensors'],
    configFiles: CONFIG_FILES,
    sizeBytesApprox: 1_400_000_000,
  },
  'TinyLlama-1.1B-Chat-v1.0-q4f16_1': {
    modelId: 'TinyLlama-1.1B-Chat-v1.0-q4f16_1',
    shards: ['model.safetensors'],
    configFiles: CONFIG_FILES,
    sizeBytesApprox: 700_000_000,
  },
}

/**
 * Return the shard configuration for a given chat model ID.
 * Throws if the model ID is not recognized.
 */
export function selectModelConfig(modelId: ChatModelId): ModelShardConfig {
  const config = MODEL_CONFIGS[modelId]
  if (!config) {
    throw new Error(`Unknown chat model ID: ${modelId}`)
  }
  return config
}
