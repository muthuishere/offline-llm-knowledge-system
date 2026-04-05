import { describe, it, expect, beforeEach } from 'vitest'
import { create, insert, search } from '@orama/orama'
import type { AnyOrama } from '@orama/orama'

const VECTOR_DIM = 384

// Create fresh chunk data each time to avoid reference mutation issues
function makeChunks() {
  return [
    {
      id: 'chunk_0001',
      source: 'doc1.txt',
      text: 'The mitochondria is the powerhouse of the cell.',
      vector: new Array(VECTOR_DIM).fill(0.1) as number[],
    },
    {
      id: 'chunk_0002',
      source: 'doc1.txt',
      text: 'Photosynthesis converts sunlight into chemical energy.',
      vector: new Array(VECTOR_DIM).fill(0.2) as number[],
    },
    {
      id: 'chunk_0003',
      source: 'doc2.txt',
      text: 'Neural networks are inspired by the biological brain.',
      vector: new Array(VECTOR_DIM).fill(0.3) as number[],
    },
    {
      id: 'chunk_0004',
      source: 'doc2.txt',
      text: 'Gradient descent optimizes model parameters by minimizing loss.',
      vector: new Array(VECTOR_DIM).fill(0.4) as number[],
    },
  ]
}

async function buildIndex() {
  const db = create({
    schema: {
      id: 'string',
      source: 'string',
      text: 'string',
      vector: `vector[${VECTOR_DIM}]`,
    } as const,
  })

  for (const chunk of makeChunks()) {
    await insert(db, chunk)
  }

  return db
}

describe('Hybrid search — Orama index', () => {
  let db: AnyOrama

  beforeEach(async () => {
    db = await buildIndex()
  })

  it('finds a chunk matching a distinctive term', async () => {
    const results = await search(db, {
      term: 'mitochondria',
      properties: ['text'],
    })

    expect(results.hits.length).toBeGreaterThan(0)
    const texts = results.hits.map(h => (h.document as { text: string }).text)
    expect(texts.some(t => t.includes('mitochondria'))).toBe(true)
  })

  it('returns only the matching chunk, not unrelated ones', async () => {
    const results = await search(db, {
      term: 'photosynthesis',
      properties: ['text'],
    })

    expect(results.hits.length).toBeGreaterThan(0)
    const ids = results.hits.map(h => (h.document as { id: string }).id)
    expect(ids).toContain('chunk_0002')
    // Should not return neural network chunk
    expect(ids).not.toContain('chunk_0003')
  })

  it('returns multiple chunks matching a broad term', async () => {
    // "cell" appears in the mitochondria chunk
    const results = await search(db, {
      term: 'cell',
      properties: ['text'],
    })

    expect(results.hits.length).toBeGreaterThan(0)
  })

  it('returns empty results for a term that does not appear in any chunk', async () => {
    const results = await search(db, {
      term: 'blockchain_xyz_nonexistent',
      properties: ['text'],
    })

    expect(results.hits.length).toBe(0)
  })

  it('can search by source field', async () => {
    const results = await search(db, {
      term: 'doc1',
      properties: ['source'],
    })

    expect(results.hits.length).toBeGreaterThan(0)
    const sources = results.hits.map(h => (h.document as { source: string }).source)
    expect(sources.every(s => s === 'doc1.txt')).toBe(true)
  })

  it('result documents contain expected fields', async () => {
    const results = await search(db, {
      term: 'mitochondria',
      properties: ['text'],
    })

    expect(results.hits.length).toBeGreaterThan(0)
    const doc = results.hits[0].document as Record<string, unknown>
    expect(doc).toHaveProperty('id')
    expect(doc).toHaveProperty('source')
    expect(doc).toHaveProperty('text')
  })

  it('gradient descent chunk is found by keyword', async () => {
    const results = await search(db, {
      term: 'gradient',
      properties: ['text'],
    })

    expect(results.hits.length).toBeGreaterThan(0)
    const ids = results.hits.map(h => (h.document as { id: string }).id)
    expect(ids).toContain('chunk_0004')
  })
})
