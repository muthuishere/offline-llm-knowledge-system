import { describe, expect, it } from 'vitest'
import { buildChatMessages } from '../../src/import/chatMessages'
import type { Chunk, Manifest } from '../../src/types'

const manifest: Manifest = {
  version: '1.0',
  created_at: '2026-04-05T00:00:00.000Z',
  chat_model: {
    name: 'test-model',
    size_bytes: 123,
    engine: 'webllm' as const,
    model_url: 'https://example.com/model/',
    wasm_url: 'https://example.com/model.wasm',
  },
  embed_model: { name: 'bge-small', dimensions: 384, path: 'embed-model/model.onnx' },
  chunking: { chunk_size: 512, chunk_overlap: 64 },
  sources: [],
  total_chunks: 1,
  manifest_hash: 'sha256:test',
  system_instructions: 'Answer only from the provided context.',
}

describe('buildChatMessages', () => {
  it('uses a system-role message for instructions and retrieved context', () => {
    const chunks: Chunk[] = [
      { id: 'chunk_0001', source: 'doc.txt', text: 'Export starts by parsing files.', vector: [0, 0, 0] },
    ]

    const result = buildChatMessages(
      [{ role: 'assistant', content: 'Earlier answer.' }],
      'Explain the export pipeline',
      chunks,
      manifest,
    )

    expect(result[0]).toEqual({
      role: 'system',
      content: expect.stringContaining('Answer only from the provided context.'),
    })
    expect(result[0].content).toContain('Export starts by parsing files.')
    expect(result.at(-1)).toEqual({ role: 'user', content: 'Explain the export pipeline' })
  })
})
