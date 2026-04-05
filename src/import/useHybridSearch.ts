import { search } from '@orama/orama'
import type { Chunk } from '../types'

export function useHybridSearch(oramaDb: any | null): {
  search: (query: string, queryVector: number[]) => Promise<Chunk[]>
} {
  async function performSearch(query: string, queryVector: number[]): Promise<Chunk[]> {
    if (!oramaDb) return []

    try {
      const results = await search(oramaDb, {
        term: query,
        vector: {
          value: queryVector,
          property: 'vector',
        },
        limit: 5,
        mode: 'hybrid',
      } as any)

      return results.hits.map((hit: any) => hit.document as Chunk)
    } catch {
      // Fallback to text-only search if hybrid fails
      try {
        const results = await search(oramaDb, {
          term: query,
          limit: 5,
        } as any)
        return results.hits.map((hit: any) => hit.document as Chunk)
      } catch {
        return []
      }
    }
  }

  return { search: performSearch }
}
