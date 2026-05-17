import { describe, it, expect } from 'vitest'
import { parseManifest, buildManifestHash, formatChunkId } from '../../src/lib/manifest'
import type { Manifest } from '../../src/types'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function validManifestObj(): Record<string, unknown> {
  return {
    version: '1.0',
    created_at: '2026-04-04T10:00:00Z',
    chat_model: { name: 'gemma-2-2b-it-q4f16_1', size_bytes: 1_400_000_000, engine: 'webllm' as const, model_url: '', wasm_url: '' },
    embed_model: { name: 'bge-small-en-v1.5-q8', dimensions: 384, path: 'embed-model/bge-small-en-v1.5-q8.onnx' },
    chunking: { chunk_size: 512, chunk_overlap: 64 },
    sources: [{ name: 'doc.txt', type: 'txt', chunks: 10, checksum: 'sha256:abc123' }],
    total_chunks: 10,
    manifest_hash: 'sha256:deadbeef',
  }
}

function manifestWithout(field: string): Record<string, unknown> {
  const obj = validManifestObj()
  delete obj[field]
  return obj
}

// ---------------------------------------------------------------------------
// parseManifest
// ---------------------------------------------------------------------------

describe('parseManifest', () => {
  it('parses a valid manifest without throwing', () => {
    const result = parseManifest(validManifestObj())
    expect(result.version).toBe('1.0')
    expect(result.chat_model.name).toBe('gemma-2-2b-it-q4f16_1')
    expect(result.embed_model.dimensions).toBe(384)
    expect(result.sources).toHaveLength(1)
    expect(result.total_chunks).toBe(10)
  })

  it('throws when version is missing', () => {
    expect(() => parseManifest(manifestWithout('version'))).toThrow(/version/)
  })

  it('throws when chat_model is missing', () => {
    expect(() => parseManifest(manifestWithout('chat_model'))).toThrow(/chat_model/)
  })

  it('throws when embed_model is missing', () => {
    expect(() => parseManifest(manifestWithout('embed_model'))).toThrow(/embed_model/)
  })

  it('throws when chunking is missing', () => {
    expect(() => parseManifest(manifestWithout('chunking'))).toThrow(/chunking/)
  })

  it('throws when sources is missing', () => {
    expect(() => parseManifest(manifestWithout('sources'))).toThrow(/sources/)
  })

  it('throws when total_chunks is missing', () => {
    expect(() => parseManifest(manifestWithout('total_chunks'))).toThrow(/total_chunks/)
  })

  it('throws when manifest_hash is missing', () => {
    expect(() => parseManifest(manifestWithout('manifest_hash'))).toThrow(/manifest_hash/)
  })

  it('throws when input is not an object', () => {
    expect(() => parseManifest('not an object')).toThrow()
    expect(() => parseManifest(null)).toThrow()
    expect(() => parseManifest(42)).toThrow()
    expect(() => parseManifest([1, 2, 3])).toThrow()
  })

  it('throws when chat_model.name is wrong type', () => {
    const obj = validManifestObj()
    ;(obj['chat_model'] as Record<string, unknown>)['name'] = 12345
    expect(() => parseManifest(obj)).toThrow(/name/)
  })

  it('throws when chat_model.size_bytes is wrong type', () => {
    const obj = validManifestObj()
    ;(obj['chat_model'] as Record<string, unknown>)['size_bytes'] = 'not-a-number'
    expect(() => parseManifest(obj)).toThrow(/size_bytes/)
  })

  it('throws when sources contains invalid type value', () => {
    const obj = validManifestObj()
    ;(obj['sources'] as Record<string, unknown>[])[0]['type'] = 'html'
    expect(() => parseManifest(obj)).toThrow(/type/)
  })

  it('accepts all valid source types', () => {
    for (const type of ['pdf', 'docx', 'md', 'txt']) {
      const obj = validManifestObj()
      ;(obj['sources'] as Record<string, unknown>[])[0]['type'] = type
      expect(() => parseManifest(obj)).not.toThrow()
    }
  })
})

// ---------------------------------------------------------------------------
// buildManifestHash
// ---------------------------------------------------------------------------

describe('buildManifestHash', () => {
  const baseManifest = (): Omit<Manifest, 'manifest_hash'> => ({
    version: '1.0',
    created_at: '2026-04-04T10:00:00Z',
    chat_model: { name: 'Hermes-3-Llama-3.2-3B-q4f16_1-MLC', size_bytes: 1_800_000_000, engine: 'webllm' as const, model_url: '', wasm_url: '', supports_tools: true },
    embed_model: { name: 'bge-small-en-v1.5-q8', dimensions: 384, path: 'embed-model/bge-small-en-v1.5-q8.onnx' },
    chunking: { chunk_size: 512, chunk_overlap: 64 },
    sources: [{ name: 'doc.txt', type: 'txt', chunks: 10, checksum: 'sha256:abc123' }],
    skills: [],
    total_chunks: 10,
  })

  it('returns a string starting with "sha256:"', async () => {
    const hash = await buildManifestHash(baseManifest())
    expect(hash).toMatch(/^sha256:[0-9a-f]{64}$/)
  })

  it('same inputs produce the same hash', async () => {
    const a = await buildManifestHash(baseManifest())
    const b = await buildManifestHash(baseManifest())
    expect(a).toBe(b)
  })

  it('different inputs produce different hashes', async () => {
    const manifest1 = baseManifest()
    const manifest2 = { ...baseManifest(), total_chunks: 99 }
    const hash1 = await buildManifestHash(manifest1)
    const hash2 = await buildManifestHash(manifest2)
    expect(hash1).not.toBe(hash2)
  })

  it('changing chat_model name changes the hash', async () => {
    const m1 = baseManifest()
    const m2 = { ...baseManifest(), chat_model: { ...m1.chat_model, name: 'Llama-3.1-8B-Instruct-q4f16_1-MLC' } }
    const h1 = await buildManifestHash(m1)
    const h2 = await buildManifestHash(m2)
    expect(h1).not.toBe(h2)
  })
})

// ---------------------------------------------------------------------------
// formatChunkId
// ---------------------------------------------------------------------------

describe('formatChunkId', () => {
  it('produces a stable ID for the same inputs', () => {
    expect(formatChunkId('doc.txt', 0)).toBe(formatChunkId('doc.txt', 0))
  })

  it('produces different IDs for different indexes', () => {
    const id0 = formatChunkId('doc.txt', 0)
    const id1 = formatChunkId('doc.txt', 1)
    expect(id0).not.toBe(id1)
  })

  it('produces different IDs for different sources', () => {
    const idA = formatChunkId('file-a.txt', 0)
    const idB = formatChunkId('file-b.txt', 0)
    expect(idA).not.toBe(idB)
  })

  it('replaces special characters in source name', () => {
    const id = formatChunkId('my file/with spaces & symbols!.pdf', 0)
    // Must not contain path separators or special chars that would break filenames
    expect(id).not.toContain('/')
    expect(id).not.toContain(' ')
    expect(id).not.toContain('&')
    expect(id).not.toContain('!')
  })

  it('pads index to at least 4 digits', () => {
    const id = formatChunkId('doc.txt', 1)
    // Should contain a zero-padded index like "0001"
    expect(id).toContain('0001')
  })

  it('handles index 0 with proper padding', () => {
    const id = formatChunkId('doc.txt', 0)
    expect(id).toContain('0000')
  })

  it('handles large index values', () => {
    const id = formatChunkId('doc.txt', 9999)
    expect(id).toContain('9999')
  })
})
