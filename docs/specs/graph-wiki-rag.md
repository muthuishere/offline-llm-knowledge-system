# Spec: Graph + Wiki Layer on Top of Hybrid RAG

**Driver:** Muthukumaran Navaneethakrishnan
**Date:** 2026-04-07
**Status:** Implementing

---

## Problem

Existing retrieval is BM25 + vector (Orama hybrid search). Top-k chunks are concatenated directly into the user turn. No cross-document structural awareness. No persistent synthesized knowledge.

---

## Solution

Three additions, layered on top of existing RAG, applied in order at query time.

### Layer 1 — Karpathy Wiki (lazy, OPFS-cached)

- **When:** First query whose top-1 RAG hit is from source `X.pdf`
- **What:** Model synthesizes a concise 3–5 sentence reference page for `X.pdf` using RAG context as input
- **Where:** Stored in OPFS at `wiki/{slug}.md` inside the knowledge base directory
- **Subsequent queries:** Cache hit → read from OPFS, no model call
- **Quality note:** Bounded by small model capability. Acceptable — this system runs offline-only.

### Layer 2 — Semantic Graph (embedding-similarity edges)

- **Built at:** Export time, after all chunks are embedded. Cosine similarity between all chunk pairs (vectors already normalized → dot product). Edges written where score ≥ 0.75.
- **Stored as:** `graph.json` in the zip → extracted to OPFS on import
- **Used at:** Query time — 2-hop BFS from top-k RAG chunk IDs expands the retrieval neighborhood
- **Why not LLM-extracted edges:** Small models hallucinate relationships. Embedding similarity is more reliable and costs zero extra inference.

### Layer 3 — Existing RAG (unchanged)

BM25 + vector hybrid search (Orama). Top-3 chunks. Unchanged.

---

## Context Window Budget (user turn only)

Model context: ~4K tokens. Reserve ~75 tokens for system + question + answer headroom.

| Slot | Cap | ~Tokens | Order in user turn |
|---|---|---|---|
| Wiki | 3,200 chars | ~800 | First |
| Graph neighborhood | 7,000 chars | ~1,750 | Second |
| RAG chunks | 3,500 chars | ~875 | Third |

All three slots go in the **user turn** (not system prompt) — consistent with existing grounding research in this project.

---

## Data Contract: graph.json

```json
{
  "version": "1.0",
  "edges": [
    { "a": "chunk_0001", "b": "chunk_0047", "score": 0.81 }
  ]
}
```

Adjacency map built in-browser at import load time. No graph library needed.

---

## Implementation Pieces

### Piece 1 — Graph builder (Export app)

- **File:** `apps/export/src/lib/graphBuilder.ts` (new)
- **Touch point:** `useExportPipeline.ts` — after all chunks embedded, before zip assembly
- **Output:** `graph.json` added to `kbEntries`

### Piece 2 — Context assembler (Import app)

- **Files:**
  - `apps/import/src/import/graphSearch.ts` (new) — adjacency map + BFS
  - `apps/import/src/import/chatMessages.ts` (update) — three-slot builder
  - `apps/import/src/import/useImportPipeline.ts` (update) — load `graph.json`, return `chunks` + `graphEdges`
  - `apps/import/src/import/ChatInterface.tsx` (update) — wire graph BFS into query path
  - `apps/import/src/pages/ImportPage.tsx` (update) — pass new props

### Piece 3 — Wiki cache (Import app)

- **File:** `apps/import/src/import/wikiCache.ts` (new)
- **Touch point:** `ChatInterface.tsx` `handleSubmit` — after RAG search, before `buildChatMessages`

---

## Notes

- Wiki cache miss on first query → proceeds with graph + RAG only, synthesizes and caches wiki page for next query on same source
