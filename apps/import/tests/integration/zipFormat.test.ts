// @vitest-environment node
// fflate uses Node.js-specific typed array handling that is incompatible with jsdom.
// This file runs in a pure Node environment — no browser APIs are needed.

import { describe, it, expect } from 'vitest'
import { strToU8, zipSync, unzipSync, strFromU8 } from 'fflate'

// Helper: ensure output from zipSync is a proper Uint8Array for unzipSync.
// always normalise through the buffer.
function toUint8(data: Uint8Array): Uint8Array {
  return new Uint8Array(data.buffer, data.byteOffset, data.byteLength)
}

describe('Zip format — fflate compress/decompress', () => {
  it('creates a zip containing manifest.json and chunks.json, then decompresses both', () => {
    const manifest = {
      version: '1.0',
      created_at: '2026-04-04T10:00:00Z',
      chat_model: { name: 'gemma-2-2b-it-q4f16_1', size_bytes: 1_400_000_000, engine: 'webllm' as const, model_url: '', wasm_url: '' },
      embed_model: { name: 'bge-small-en-v1.5-q8', dimensions: 384, path: 'embed-model/bge-small-en-v1.5-q8.onnx' },
      chunking: { chunk_size: 512, chunk_overlap: 64 },
      sources: [{ name: 'test.txt', type: 'txt', chunks: 2, checksum: 'sha256:abc' }],
      total_chunks: 2,
      manifest_hash: 'sha256:deadbeef',
    }

    const chunks = [
      { id: 'chunk_0000', source: 'test.txt', text: 'Hello world.', vector: [0, 0, 0] },
      { id: 'chunk_0001', source: 'test.txt', text: 'Foo bar baz.', vector: [1, 1, 1] },
    ]

    const manifestBytes = strToU8(JSON.stringify(manifest))
    const chunksBytes = strToU8(JSON.stringify(chunks))

    const zipped = toUint8(
      zipSync({
        'manifest.json': manifestBytes,
        'chunks.json': chunksBytes,
      }),
    )

    // Verify it's a valid zip (starts with PK header)
    expect(zipped[0]).toBe(0x50) // 'P'
    expect(zipped[1]).toBe(0x4b) // 'K'

    // Decompress
    const decompressed = unzipSync(zipped)
    const keys = Object.keys(decompressed)

    // Both files must be present (filter out directory entries if any)
    const fileKeys = keys.filter(k => !k.endsWith('/'))
    expect(fileKeys).toContain('manifest.json')
    expect(fileKeys).toContain('chunks.json')

    // Files must be parseable JSON
    const parsedManifest = JSON.parse(strFromU8(decompressed['manifest.json']))
    const parsedChunks = JSON.parse(strFromU8(decompressed['chunks.json']))

    expect(parsedManifest.version).toBe('1.0')
    expect(parsedManifest.chat_model.name).toBe('gemma-2-2b-it-q4f16_1')
    expect(parsedManifest.manifest_hash).toBe('sha256:deadbeef')

    expect(Array.isArray(parsedChunks)).toBe(true)
    expect(parsedChunks).toHaveLength(2)
    expect(parsedChunks[0].id).toBe('chunk_0000')
    expect(parsedChunks[1].id).toBe('chunk_0001')
  })

  it('zip with a subdirectory structure is extractable', () => {
    const sourceFile = strToU8('Original document content.')

    const zipped = toUint8(
      zipSync({
        'manifest.json': strToU8(JSON.stringify({ version: '1.0' })),
        'sources/doc.txt': sourceFile,
      }),
    )

    const decompressed = unzipSync(zipped)
    const fileKeys = Object.keys(decompressed).filter(k => !k.endsWith('/'))

    expect(fileKeys).toContain('manifest.json')
    expect(fileKeys).toContain('sources/doc.txt')

    const content = strFromU8(decompressed['sources/doc.txt'])
    expect(content).toBe('Original document content.')
  })

  it('zip without manifest.json can be detected as invalid', () => {
    const zipped = toUint8(
      zipSync({
        'chunks.json': strToU8('[]'),
      }),
    )

    const decompressed = unzipSync(zipped)
    const fileKeys = Object.keys(decompressed).filter(k => !k.endsWith('/'))

    expect(fileKeys).not.toContain('manifest.json')
  })

  it('round-trips binary data faithfully', () => {
    const binaryData = new Uint8Array(256)
    for (let i = 0; i < 256; i++) binaryData[i] = i

    const zipped = toUint8(zipSync({ 'binary.bin': binaryData }))
    const decompressed = unzipSync(zipped)

    expect(Array.from(decompressed['binary.bin'])).toEqual(Array.from(binaryData))
  })

  it('manifest hash in zip matches expected value', () => {
    const manifest = {
      version: '1.0',
      manifest_hash: 'sha256:testvalue123',
    }

    const zipped = toUint8(zipSync({ 'manifest.json': strToU8(JSON.stringify(manifest)) }))
    const decompressed = unzipSync(zipped)
    const parsed = JSON.parse(strFromU8(decompressed['manifest.json']))

    expect(parsed.manifest_hash).toBe('sha256:testvalue123')
    expect(parsed.manifest_hash).toMatch(/^sha256:/)
  })
})
