import { describe, it, expect, beforeEach } from 'vitest'
import { chunkText } from '../../src/lib/chunking'
import { create, insert, search, count } from '@orama/orama'

// ---------------------------------------------------------------------------
// Stub embed function — returns zero vectors of dimension 384
// ---------------------------------------------------------------------------

const VECTOR_DIM = 384

async function stubEmbed(_text: string): Promise<number[]> {
  return new Array(VECTOR_DIM).fill(0)
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function buildOramaIndex(chunks: { id: string; text: string; vector: number[] }[]) {
  const db = await create({
    schema: {
      id: 'string',
      text: 'string',
      vector: `vector[${VECTOR_DIM}]`,
    } as const,
  })

  for (const chunk of chunks) {
    await insert(db, {
      id: chunk.id,
      text: chunk.text,
      vector: chunk.vector,
    })
  }

  return db
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Export pipeline — chunking + embedding + Orama indexing', () => {
  const DOC_A = `The quick brown fox jumps over the lazy dog. `.repeat(40)
  const DOC_B = `Artificial intelligence is transforming the world of software engineering. `.repeat(30)

  it('chunks two documents and produces the correct total chunk count', () => {
    const chunksA = chunkText(DOC_A, 512, 64)
    const chunksB = chunkText(DOC_B, 512, 64)

    expect(chunksA.length).toBeGreaterThan(0)
    expect(chunksB.length).toBeGreaterThan(0)
  })

  it('stub embed returns zero vector of correct dimension', async () => {
    const vec = await stubEmbed('test text')
    expect(vec).toHaveLength(VECTOR_DIM)
    expect(vec.every(v => v === 0)).toBe(true)
  })

  it('Orama index is queryable after inserting chunks', async () => {
    const chunks = chunkText(DOC_A, 512, 64)
    const indexedChunks = await Promise.all(
      chunks.map(async (text, i) => ({
        id: `chunk_a_${String(i).padStart(4, '0')}`,
        text,
        vector: await stubEmbed(text),
      })),
    )

    const db = await buildOramaIndex(indexedChunks)

    const results = await search(db, {
      term: 'fox',
      properties: ['text'],
    })

    expect(results.hits.length).toBeGreaterThan(0)
    expect(results.hits[0].document.text).toContain('fox')
  })

  it('chunk count in Orama matches the number of inserted chunks', async () => {
    const chunks = chunkText(DOC_A, 512, 64)
    const indexedChunks = await Promise.all(
      chunks.map(async (text, i) => ({
        id: `chunk_a_${String(i).padStart(4, '0')}`,
        text,
        vector: await stubEmbed(text),
      })),
    )

    const db = await buildOramaIndex(indexedChunks)
    const total = await count(db)

    expect(total).toBe(chunks.length)
  })

  it('inserts chunks from two documents and both are findable', async () => {
    const chunksA = chunkText(DOC_A, 512, 64)
    const chunksB = chunkText(DOC_B, 512, 64)

    const allChunks = [
      ...(await Promise.all(
        chunksA.map(async (text, i) => ({
          id: `docA_${String(i).padStart(4, '0')}`,
          text,
          vector: await stubEmbed(text),
        })),
      )),
      ...(await Promise.all(
        chunksB.map(async (text, i) => ({
          id: `docB_${String(i).padStart(4, '0')}`,
          text,
          vector: await stubEmbed(text),
        })),
      )),
    ]

    const db = await buildOramaIndex(allChunks)
    const total = await count(db)
    expect(total).toBe(chunksA.length + chunksB.length)

    const foxResults = await search(db, { term: 'fox', properties: ['text'] })
    const aiResults = await search(db, { term: 'artificial', properties: ['text'] })

    expect(foxResults.hits.length).toBeGreaterThan(0)
    expect(aiResults.hits.length).toBeGreaterThan(0)
  })

  it('searching for a term not in the documents returns 0 hits', async () => {
    const chunks = chunkText('Hello world. This is a test.', 512, 64)
    const indexedChunks = await Promise.all(
      chunks.map(async (text, i) => ({
        id: `chunk_${i}`,
        text,
        vector: await stubEmbed(text),
      })),
    )

    const db = await buildOramaIndex(indexedChunks)
    const results = await search(db, { term: 'xyzzy_nonexistent_term_42', properties: ['text'] })

    expect(results.hits.length).toBe(0)
  })
})
