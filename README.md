# offline-llm-knowledge-system

Portable offline knowledge bases for air-gapped and no-internet environments.

Read the full write-up on Medium:
https://muthuishere.medium.com/offline-llm-knowledge-system-your-docs-their-browser-zero-internet-ded644e94b83

![Demo](./demo.gif)

## What It Does

This project turns a set of documents into a self-contained knowledge bundle that can be opened in a browser and queried fully offline.

It is built as two separate browser apps:

- `apps/export`: package documents, prompt instructions, search index, and model assets into a portable bundle
- `apps/import`: open that bundle later and chat with it locally, with no server and no internet

The intended flow is:

1. Open the export app while online.
2. Add your documents and generate a portable knowledge bundle.
3. Move that bundle to the target machine.
4. Open the import app and chat with the bundled knowledge completely offline.

## Why This Exists

This is aimed at environments where cloud APIs are not an option:

- factory floors
- secure customer networks
- hospital and government systems
- ships and field deployments
- offline developer environments

Instead of deploying a backend, vector database, or local Python stack, the workflow stays inside the browser.

## How It Works

### Export — what happens when you click Export

1. **Parse** — documents (PDF, DOCX, MD, TXT) are parsed to plain text inside a Web Worker using `pdfjs-dist` and `mammoth`. The main thread never touches raw file bytes.

2. **Chunk + Embed** — text is split into 100-token chunks (small enough to fit in a 4K context model). Each chunk is embedded by `bge-small-en-v1.5-q8` running in ONNX via Transformers.js inside a dedicated embed worker. Vectors are 384-dimensional and L2-normalised.

3. **Build knowledge graph** — cosine similarity (dot product, already normalised) is computed between all chunk pairs. Pairs scoring ≥ 0.75 become edges in `graph.json`. Zero extra LLM calls — this reuses the same vectors just computed.

4. **Build search index** — all chunks + their vectors are inserted into an Orama BM25 + vector hybrid index, serialised and gzip-compressed to `orama-index.json.gz`.

5. **Fetch model weights** — a zip worker fetches the chat model shards (safetensors) and compiled WebGPU WASM kernel directly from the WebLLM CDN, streaming them straight into the zip file without buffering through main-thread RAM.

6. **Bundle embed model cache** — after Transformers.js loads the embedding model, its Cache API entries (the ONNX weights) are drained and bundled as `embed-cache/`. The import side will restore these to Cache API so Transformers.js never makes a network request.

7. **Stream-compress to disk** — everything is assembled by `fflate` in streaming mode and written chunk-by-chunk to the user's chosen file via the File System Access API (`showSaveFilePicker`). The full zip is never held in RAM.

The resulting zip is ~500 MB–1.3 GB depending on model choice. It is self-contained — no internet required to use it.

### Import — what happens when you drop the zip

1. **Stream-extract to OPFS** — an unzip worker reads the zip as a `ReadableStream` (zero full-file RAM), decompresses with `fflate`, and writes every file into the browser's Origin Private File System (OPFS). Extraction is keyed by `manifest_hash` — re-dropping the same zip skips extraction entirely.

2. **Restore embed model cache** — `embed-cache/` entries are written back to Cache API under their original HuggingFace CDN URLs. Transformers.js finds them on first request and makes zero network calls.

3. **Load search index + graph** — `chunks.json` and `graph.json` are read from OPFS. Chunks are inserted into a fresh Orama index in the browser. Graph edges are loaded and an in-memory adjacency map is built — no library needed, just a `Map<chunkId, chunkId[]>`.

4. **Load chat model from OPFS** — model shards are read from OPFS into Blobs, converted to object URLs, and injected into WebLLM's `appConfig`. The engine loads from `blob:` URLs. Object URLs are revoked after init to free memory.

5. **Query pipeline (per message)**:
   - Embed the query (Transformers.js, embed worker)
   - Hybrid search: BM25 + vector in Orama → top-3 RAG chunks
   - 2-hop BFS from those chunk IDs through the graph adjacency map → expanded semantic neighborhood
   - Wiki lookup: check OPFS for a cached synthesis of the top source document. On cache miss, the chat model synthesizes a 3–5 sentence reference page and writes it to `opfs/wiki/{slug}.md` for future queries
   - Assemble user-turn context in priority order: wiki (~800 tokens) → graph neighborhood (~1,750 tokens) → RAG chunks (~875 tokens)
   - Stream response from WebLLM

Context always goes in the **user turn**, not the system prompt — small models attend to user-turn content far more reliably.

## Repo Layout

```text
apps/
  export/   Build the portable knowledge bundle
  import/   Load a bundle and chat with it offline
```

## Local Development

From the repo root:

```bash
./scripts/dev.sh
```

Or run each app directly:

```bash
cd apps/export && npm run dev
cd apps/import && npm run dev
```

Default dev URLs:

- Export app: `http://localhost:5198`
- Import app: `http://localhost:5199`

## Status

Open source MIT project focused on practical offline LLM workflows in the browser.

Built while dogfooding [Huddle](https://github.com/m-agentic-skills/huddle).
