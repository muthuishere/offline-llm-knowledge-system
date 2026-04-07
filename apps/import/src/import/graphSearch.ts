import type { GraphEdge, Chunk } from '../types'

/**
 * Build an undirected adjacency map from a flat edge list.
 * Called once after graph.json loads; result cached in module scope via useMemo.
 */
export function buildAdjacency(edges: GraphEdge[]): Map<string, string[]> {
  const adj = new Map<string, string[]>()
  for (const edge of edges) {
    if (!adj.has(edge.a)) adj.set(edge.a, [])
    if (!adj.has(edge.b)) adj.set(edge.b, [])
    adj.get(edge.a)!.push(edge.b)
    adj.get(edge.b)!.push(edge.a)
  }
  return adj
}

/**
 * BFS from startIds up to `hops` hops.
 * Returns the full set of visited chunk IDs (including startIds).
 */
export function graphBFS(
  adjacency: Map<string, string[]>,
  startIds: string[],
  hops: number = 2,
): Set<string> {
  const visited = new Set<string>(startIds)
  let frontier = [...startIds]
  for (let hop = 0; hop < hops; hop++) {
    const next: string[] = []
    for (const id of frontier) {
      for (const neighbor of adjacency.get(id) ?? []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          next.push(neighbor)
        }
      }
    }
    frontier = next
    if (frontier.length === 0) break
  }
  return visited
}

/** Return chunks whose id is in the given set. */
export function getChunksByIds(chunks: Chunk[], ids: Set<string>): Chunk[] {
  return chunks.filter((c) => ids.has(c.id))
}
