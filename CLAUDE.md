# Project Context — offline-llm-knowledge-system

## What This Project Is

A portable, fully offline AI knowledge base that runs entirely in the browser. No server. No API keys. No internet after the initial export.

Two separate Vite + React + TypeScript apps:

| App    | Directory     | Dev URL               | Role                                        |
|--------|---------------|-----------------------|---------------------------------------------|
| Export | `apps/export` | http://localhost:5198 | Online — ingest docs, build, download zip   |
| Import | `apps/import` | http://localhost:5199 | Offline — load zip, chat with knowledge base |

## Core Idea

1. **Export** (needs internet once): drop documents → choose LLM → click Export → download a zip (500MB–1.3GB) containing model weights, embedding model, search index, and all docs.
2. **Import** (never needs internet): drop the zip in any browser → wait for extraction to OPFS → chat offline, forever.

## Target Environments

Factory floors, air-gapped networks, hospital/government systems, ships, field deployments — any place with a browser but no cloud access.

---

## Tech Stack

| Layer           | Library                                | Notes                                              |
|-----------------|----------------------------------------|----------------------------------------------------|
| Framework       | React + Vite + TypeScript              | Two separate apps, GitHub Pages static deploy      |
| LLM inference   | `@mlc-ai/web-llm`                      | Runs on CPU in WASM; loads from OPFS via blob URLs |
| Embeddings      | `@xenova/transformers` (v4)            | ONNX bge-small-en-v1.5-q8, runs in Web Worker      |
| Hybrid search   | `@orama/orama`                         | BM25 + cosine vector, pure JS, offline             |
| Zip             | `fflate`                               | Streaming compress/decompress, never fully in RAM  |
| PDF parsing     | `pdfjs-dist`                           | Web Worker                                         |
| DOCX parsing    | `mammoth`                              | arrayBuffer → plain text                           |
| OPFS            | Browser Origin Private File System     | Persistent storage, survives reload                |
| COOP/COEP       | `coi-serviceworker`                    | Required for SharedArrayBuffer on GitHub Pages     |

---

## Zip Bundle Format

```
knowledge-base.zip
├── manifest.json           ← version, model config, source list, chunk settings
├── chunks.json             ← all chunks with text + pre-computed vectors
├── orama-index.json.gz     ← serialized Orama index (BM25 + vector)
├── sources/                ← original documents
├── embed-model/            ← bge-small-en-v1.5-q8.onnx (~24MB, fixed)
└── model/                  ← chat model weights (config + tokenizer + safetensors)
```

The zip is the interchange contract. It is versioned via `manifest.json`.

---

## Key Design Decisions

### Chunk size: 100 tokens (not 512)
Small models (Phi-3-mini, 4K context) can't fit 3×512-token chunks + question + answer. 100-token chunks = 400 tokens retrieved, plenty of room.

### Context in user turn, not system prompt
Small models attend far better to dynamic content in the **user** message than in system. Classic RAG mistake: context in system → vague answers. Moved to user turn → 3–5× better grounding.

### Embedding model bundling trick
After export, drain `transformers-cache` Cache API (where transformers.js caches HuggingFace model files), bundle those files in the zip as `embed-cache/`. On import, restore them to Cache API with original URLs as keys. transformers.js finds them and makes zero network requests.

### OPFS persistence
Import extracts zip to OPFS once (keyed by `manifest_hash`). Every subsequent visit loads directly from OPFS — no re-extraction. Extraction is idempotent.

### Model loading via blob URLs
WebLLM needs fetchable URLs. Read model shards from OPFS into Blobs, create object URLs, inject into WebLLM's `appConfig`. Revoke after engine init to free memory.

---

## Worker Architecture

All heavy computation is off the main thread:

| Worker            | Responsibility                                         |
|-------------------|--------------------------------------------------------|
| `document-worker` | Parse PDF/DOCX/MD/TXT → plain text → chunks           |
| `embed-worker`    | Run Transformers.js, generate vectors per chunk        |
| `zip-worker`      | fflate streaming compress (export) / decompress (import) |

Main thread: UI state, progress updates, Orama index ops, WebLLM (manages its own workers).

---

## Chat Models (user picks on Export page)

| Model                                | Approx Size | Notes                     |
|--------------------------------------|-------------|---------------------------|
| `Phi-3-mini-4k-instruct-q4f16_1`    | ~2.2 GB     | Best grounding accuracy   |
| `gemma-2-2b-it-q4f16_1`             | ~1.4 GB     | Default — best size/quality balance |
| `TinyLlama-1.1B-Chat-v1.0-q4f16_1` | ~700 MB     | Smallest, fastest         |

Embedding model is fixed: **bge-small-en-v1.5-q8** (384 dims, ~24MB).

---

## Console Debug API (import page)

```js
await kb.ask("Why does error E-4417 appear?")   // embed + search + LLM
await kb.search("network timeout")               // retrieval only
await kb.prompt("What is the retry limit?")      // show full prompt sent to LLM
kb.history()                                     // conversation history
await kb.batch(["q1", "q2", "q3"])              // batch test
```

---

## Testing Strategy

| Layer       | Tool                       | What it covers                                              |
|-------------|----------------------------|-------------------------------------------------------------|
| Unit        | Vitest                     | Pure functions — chunking, parsing, manifest, model config  |
| Integration | Vitest + mocked OPFS/models| Pipelines with stubbed heavy deps                           |
| E2E         | Playwright (Chromium only) | Full flows with real OPFS, stubbed model inference          |

Heavy deps (WebLLM, Transformers.js, real model weights) are always mocked/stubbed in unit and integration tests. E2E stubs via `page.route()` and `page.addInitScript()`.

---

## Dev Commands

```bash
# Both apps in parallel
./scripts/dev.sh

# Individual
cd apps/export && npm run dev   # port 5198
cd apps/import && npm run dev   # port 5199

# Tests
npm run test:unit
npm run test:integration
npm run test:e2e
```

Logs written to `logs/export-dev.log` and `logs/import-dev.log`.

---

## Constraints to Keep in Mind

- **GitHub Pages 100MB file limit** — model shards are fetched from WebLLM CDN at export time, not committed to the repo.
- **Never buffer the full zip in memory** — always stream with fflate.
- **Blob URLs for model shards must be revoked** after WebLLM engine init to avoid memory leaks.
- **COOP/COEP service worker** installs and reloads the page on first visit — save state to `sessionStorage` before install.

---

## Git Conventions

- Never add `Co-authored-by` trailers to commits.
- Commits are on `main` branch.
