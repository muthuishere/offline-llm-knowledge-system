import { describe, it, expect } from 'vitest'
import { selectModelConfig } from '../../src/lib/modelConfig'
import type { ChatModelId } from '../../src/types'

describe('selectModelConfig', () => {
  it('returns correct config for Phi-3-mini model', () => {
    const config = selectModelConfig('Phi-3-mini-4k-instruct-q4f16_1')
    expect(config.modelId).toBe('Phi-3-mini-4k-instruct-q4f16_1')
    expect(config.shards.length).toBeGreaterThan(0)
    expect(config.configFiles).toContain('config.json')
    expect(config.configFiles).toContain('tokenizer.json')
    expect(config.configFiles).toContain('tokenizer_config.json')
    expect(config.sizeBytesApprox).toBeGreaterThan(1_000_000_000)
  })

  it('returns correct config for Gemma-2-2b model', () => {
    const config = selectModelConfig('gemma-2-2b-it-q4f16_1')
    expect(config.modelId).toBe('gemma-2-2b-it-q4f16_1')
    expect(config.shards.length).toBeGreaterThan(0)
    expect(config.configFiles).toContain('config.json')
    expect(config.configFiles).toContain('tokenizer.json')
    expect(config.configFiles).toContain('tokenizer_config.json')
    expect(config.sizeBytesApprox).toBeGreaterThan(1_000_000_000)
    expect(config.sizeBytesApprox).toBeLessThan(2_000_000_000)
  })

  it('returns correct config for TinyLlama model', () => {
    const config = selectModelConfig('TinyLlama-1.1B-Chat-v1.0-q4f16_1')
    expect(config.modelId).toBe('TinyLlama-1.1B-Chat-v1.0-q4f16_1')
    expect(config.shards.length).toBeGreaterThan(0)
    expect(config.configFiles).toContain('config.json')
    expect(config.configFiles).toContain('tokenizer.json')
    expect(config.configFiles).toContain('tokenizer_config.json')
    expect(config.sizeBytesApprox).toBeLessThan(1_000_000_000)
  })

  it('returns all 3 model configs with distinct sizes', () => {
    const phi = selectModelConfig('Phi-3-mini-4k-instruct-q4f16_1')
    const gemma = selectModelConfig('gemma-2-2b-it-q4f16_1')
    const tiny = selectModelConfig('TinyLlama-1.1B-Chat-v1.0-q4f16_1')

    // Phi is largest, TinyLlama is smallest
    expect(phi.sizeBytesApprox).toBeGreaterThan(gemma.sizeBytesApprox)
    expect(gemma.sizeBytesApprox).toBeGreaterThan(tiny.sizeBytesApprox)
  })

  it('Phi-3-mini has multiple shards', () => {
    const config = selectModelConfig('Phi-3-mini-4k-instruct-q4f16_1')
    expect(config.shards.length).toBeGreaterThanOrEqual(2)
  })

  it('throws for unknown model ID', () => {
    expect(() =>
      selectModelConfig('unknown-model-id' as ChatModelId),
    ).toThrow(/unknown/i)
  })

  it('throws for empty string model ID', () => {
    expect(() =>
      selectModelConfig('' as ChatModelId),
    ).toThrow()
  })

  it('shard filenames end in .safetensors', () => {
    const models: ChatModelId[] = [
      'Phi-3-mini-4k-instruct-q4f16_1',
      'gemma-2-2b-it-q4f16_1',
      'TinyLlama-1.1B-Chat-v1.0-q4f16_1',
    ]
    for (const modelId of models) {
      const config = selectModelConfig(modelId)
      for (const shard of config.shards) {
        expect(shard).toMatch(/\.safetensors$/)
      }
    }
  })
})
