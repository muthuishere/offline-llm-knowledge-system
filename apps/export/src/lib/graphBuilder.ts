import type { Chunk } from '../types'

export interface GraphEdge {
  a: string
  b: string
  score: number
}

// Cosine similarity threshold for a semantic edge.
// Vectors are already L2-normalised by bge-small-en-v1.5 (normalize: true),
// so cosine similarity = dot product.
const SIMILARITY_THRESHOLD = 0.75

function dot(a: number[], b: number[]): number {
  let s = 0
  for (let i = 0; i < a.length; i++) s += a[i] * b[i]
  return s
}

/**
 * Build a list of semantic similarity edges from pre-computed, normalised chunk vectors.
 * O(n²) — acceptable for typical export sizes (100–500 chunks).
 */
export function buildGraphEdges(chunks: Chunk[]): GraphEdge[] {
  const edges: GraphEdge[] = []
  for (let i = 0; i < chunks.length; i++) {
    for (let j = i + 1; j < chunks.length; j++) {
      const score = dot(chunks[i].vector, chunks[j].vector)
      if (score >= SIMILARITY_THRESHOLD) {
        edges.push({
          a: chunks[i].id,
          b: chunks[j].id,
          score: Math.round(score * 1000) / 1000,
        })
      }
    }
  }
  return edges
}
