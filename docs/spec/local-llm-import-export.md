# Spec: Local LLM Import/Export

**Project:** local-llm-import-export
**Date:** 2026-04-04
**Author:** Muthukumaran Navaneethakrishnan
**Stack:** React + Vite + TypeScript

---

## 1. Overview

A React + Vite single-page application deployed to GitHub Pages. Two routes:

- `/export` — Online tool. Ingest documents, choose models, build a knowledge base, download as a self-contained zip.
- `/import` — Offline-first tool. Import the zip, chat with the knowledge base. Zero internet required after import.

The zip is the complete portable unit — it contains the chat model, the embedding model, the processed text, and the search index. A user who receives the zip and has never been online can chat immediately after import.

---

## 2. User Flows

### 2.1 Export Flow

```
1. Open /export
2. Pick a chat model (WebLLM model list — e.g. Phi-3-mini-q4, Gemma-2-2b-q4)
3. Pick an embedding model (Transformers.js ONNX model list — e.g. all-MiniLM-L6-v2-q8)
4. Add source files: .txt, .pdf, .docx, .md (multiple, drag-and-drop)
5. App converts all files to plain text
6. App chunks text, runs embedding model, builds Orama hybrid index
7. App packages everything into a zip (see Section 4)
8. User downloads the zip
```

**Performance expectation:** Export is not time-critical. Progress feedback is required at each stage. The user can see which file is being processed and overall progress.

### 2.2 Import + Chat Flow

```
1. Open /import
2. App checks OPFS for an existing knowledge base (persistent)
   - If found: load directly — no zip needed, go to step 5
   - If not found: show zip drop zone
3. User drops zip file
4. App extracts zip to OPFS with progress feedback
   - Extraction is idempotent — safe to re-run if interrupted
5. Orama index loaded into memory from OPFS
6. WebLLM chat model loaded from OPFS (blob URL injection)
7. Chat interface ready — fully offline from this point
8. User asks questions → hybrid search (vector + full-text) → answer streamed
9. "Clear knowledge base" button wipes OPFS and returns to step 2
```

**Performance expectation:** Fast import is the primary goal. After first extraction, every subsequent visit goes straight to chat — no zip required, no re-extraction. OPFS is the persistent store.

---

## 3. Tech Stack

| Concern | Library | Notes |
|---|---|---|
| Framework | React + Vite + TypeScript | GitHub Pages static deploy |
| Chat inference | `@mlc-ai/web-llm` | Loads from OPFS via blob URLs |
| Embeddings | `@xenova/transformers` (v4) | ONNX, runs in Web Worker |
| Hybrid search | `@orama/orama` | Full-text + vector, single index |
| Zip | `fflate` | Streaming compress/decompress, progress callbacks |
| PDF parsing | `pdfjs-dist` | Web Worker, text extraction only |
| DOCX parsing | `mammoth` | Converts to plain text via arrayBuffer |
| Markdown/text | Native | TextDecoder, no library needed |
| COOP/COEP headers | `coi-serviceworker` | Required for SharedArrayBuffer on GitHub Pages |
| GitHub Pages deploy | `gh-pages` | Deploys `dist/` |
| Vite WASM support | `vite-plugin-wasm` + `vite-plugin-top-level-await` | Required for Transformers.js + WebLLM |

---

## 4. Zip Format

The zip is the interchange contract between export and import. It must be versioned.

### 4.1 Directory Structure

```
knowledge-base.zip
├── manifest.json               ← required, read first on import
├── chunks.json                 ← text chunks with metadata + embed vectors
├── orama-index.json.gz         ← serialized Orama index, gzipped
├── sources/                    ← original source files (for reference)
│   ├── document1.pdf
│   ├── document2.docx
│   └── ...
├── embed-model/
│   └── bge-small-en-v1.5-q8.onnx   ← embedding model (~24MB, fixed)
└── model/
    ├── config.json
    ├── tokenizer.json
    ├── tokenizer_config.json
    └── *.safetensors (shards)      ← chat model weights (2–4GB)
```

### 4.2 manifest.json Schema

```json
{
  "version": "1.0",
  "created_at": "2026-04-04T10:00:00Z",
  "chat_model": {
    "name": "Phi-3-mini-4k-instruct-q4f16_1",
    "size_bytes": 2200000000
  },
  "embed_model": {
    "name": "bge-small-en-v1.5-q8",
    "dimensions": 384,
    "path": "embed-model/bge-small-en-v1.5-q8.onnx"
  },
  "chunking": {
    "chunk_size": 512,
    "chunk_overlap": 64
  },
  "sources": [
    { "name": "document1.pdf", "type": "pdf", "chunks": 42, "checksum": "sha256:..." },
    { "name": "document2.docx", "type": "docx", "chunks": 18, "checksum": "sha256:..." }
  ],
  "total_chunks": 60,
  "manifest_hash": "sha256:..."
}
```

### 4.3 chunks.json Schema

```json
[
  {
    "id": "chunk_001",
    "source": "document1.pdf",
    "page": 1,
    "text": "...",
    "vector": [0.023, -0.114, ...]
  }
]
```

---

## 5. OPFS Storage Layout

On first import, the zip is extracted to the browser's Origin Private File System. Subsequent imports for the same zip (matched by `manifest_hash`) skip extraction.

```
OPFS root/
└── llm-import-export/
    └── {manifest_hash}/
        ├── manifest.json
        ├── chunks.json
        ├── orama-index.json.gz
        ├── embed-model/
        │   └── bge-small-en-v1.5-q8.onnx
        └── model/
            ├── config.json
            ├── tokenizer.json
            └── *.safetensors
```

**Extraction is idempotent.** If extraction was interrupted (browser closed mid-way), detect incomplete state via a `extraction_complete` flag in OPFS and re-extract cleanly.

---

## 6. Model Loading (Offline)

WebLLM requires model files at fetchable URLs. Since models are in OPFS (not a CDN), the import page loads each model shard from OPFS into a Blob, creates an object URL, and injects these into WebLLM's `appConfig`:

```js
// Pseudocode
const shards = await readModelShardsFromOPFS(manifestHash);
const blobUrls = shards.map(shard => URL.createObjectURL(new Blob([shard])));

const engine = await CreateMLCEngine(modelName, {
  appConfig: {
    model_list: [{
      model_id: modelName,
      model_url: blobUrls[0],   // primary shard URL
      // additional shard URLs as needed
    }]
  }
});
```

Object URLs are created fresh on each session (they don't persist across tab reloads). Revoke them after engine initialization to free memory references.

---

## 7. Chat Pipeline (Import Page)

```
User query
    ↓
1. Embed query using Transformers.js bge-small-en-v1.5-q8 (loaded from OPFS)
    ↓
2. Orama hybrid search: vector similarity + full-text, top-K results
    ↓
3. Retrieve matching chunks from chunks.json (in-memory)
    ↓
4. Build prompt: system context + retrieved chunks + user query
    ↓
5. WebLLM.chat() — stream tokens to UI
    ↓
Streamed answer displayed
```

Query embedding and search (steps 1–3) must complete before LLM call starts. Target: <200ms for retrieval step. LLM streaming starts immediately after.

---

## 8. Export Pipeline (Export Page)

```
Source files (PDF, DOCX, MD, TXT)
    ↓
1. Parse all files to plain text (Web Worker: pdfjs-dist, mammoth, TextDecoder)
    ↓
2. Chunk text (chunk_size: 512 tokens, overlap: 64)
    ↓
3. Embed each chunk (Transformers.js Web Worker, pipeline)
    ↓
4. Build Orama index (insert chunks + vectors)
    ↓
5. Serialize: chunks.json + orama-index.json.gz + manifest.json
    ↓
6. Fetch chat model files (WebLLM CDN) + embed model ONNX
    ↓
7. Stream all into zip (fflate streaming compression)
    ↓
8. Trigger browser download
```

Steps 1–3 pipeline: as each file finishes parsing, its chunks go to the embedder immediately. Do not wait for all files before starting embedding.

Steps 6–7 note: chat model files may already be cached in WebLLM's IndexedDB. Read from cache if available; fetch from CDN if not. Stream directly into fflate — do not buffer the full model in memory.

---

## 9. Worker Architecture

All heavy computation runs off the main thread:

| Worker | Responsibility |
|---|---|
| `document-worker` | Parse PDF/DOCX/MD/TXT → plain text → chunks |
| `embed-worker` | Run Transformers.js, generate vectors per chunk |
| `zip-worker` | fflate streaming compress (export) / decompress (import) |

Main thread handles: UI state, progress updates, Orama index operations, WebLLM (WebLLM manages its own workers internally).

---

## 10. GitHub Pages Deployment

### COOP/COEP Headers

`coi-serviceworker` must be registered before any WASM loads. It patches `Cross-Origin-Opener-Policy` and `Cross-Origin-Embedder-Policy` headers via service worker, enabling `SharedArrayBuffer` (required by WebLLM).

On first load: service worker installs → page reloads. Store any in-progress state to `sessionStorage` before install to survive the reload.

### Vite Config Requirements

```ts
// vite.config.ts
export default {
  base: '/local-llm-import-export/',   // matches GitHub Pages repo path
  plugins: [
    react(),
    wasm(),
    topLevelAwait(),
  ],
  optimizeDeps: {
    exclude: ['@mlc-ai/web-llm', '@xenova/transformers']
  }
}
```

### Deploy Command

```bash
npm run build && gh-pages -d dist
```

---

## 11. Key Constraints

| Constraint | Detail |
|---|---|
| GitHub Pages file limit | 100MB per file — model shards may exceed this. Use smaller quantized models (Phi-3-mini-q4 shards are ~600MB each). Models are fetched from WebLLM CDN at export time, not committed to repo. |
| Zip size | 2–4GB typical (dominated by chat model). User sees estimated size before export starts. |
| OPFS availability | All modern browsers (Chrome, Edge, Firefox, Safari 15.2+). Show compatibility warning for unsupported browsers. |
| Memory during import | Stream zip decompression — never load the full zip into memory. Write shards to OPFS as they decompress. |
| Blob URL lifecycle | Object URLs for model shards must be revoked after WebLLM engine init to avoid memory leaks. |

---

## 12. Decided

| Question | Decision |
|---|---|
| Chunk size | Fixed: 512 tokens, 64 overlap — not user-configurable |
| Import page — multiple knowledge bases? | One at a time. OPFS holds the active knowledge base. "Clear" wipes it and allows importing a new zip. |
| Re-export from import page | Out of scope for v1 |
| Tech stack | React + Vite + TypeScript |

## 13. Model Catalogue

### Chat Models (user picks one on Export page)

| Model | Approx Size | Notes |
|---|---|---|
| `Phi-3-mini-4k-instruct-q4f16_1` | ~2.2 GB | Best quality of the three |
| `gemma-2-2b-it-q4f16_1` | ~1.4 GB | Good balance of size and quality |
| `TinyLlama-1.1B-Chat-v1.0-q4f16_1` | ~700 MB | Smallest, fastest load |

Default selection: **Gemma-2-2b** (best size/quality balance).

### Embedding Model (fixed — not user-selectable)

**`bge-small-en-v1.5`** via Transformers.js (ONNX, q8 quantized)

- Size: ~24 MB
- Dimensions: 384
- Why: Outperforms `all-MiniLM-L6-v2` on retrieval benchmarks (MTEB) while being the same size. Best retrieval quality at the small-model tier.
- Bundled in the zip under `embed-model/bge-small-en-v1.5-q8.onnx`

---

## 14. Testing Strategy

### 14.1 Overview

Three layers of testing. Heavy model inference and OPFS are mocked/stubbed in unit and integration tests. Only Playwright E2E tests run against real browser APIs.

| Layer | Tool | What it covers |
|---|---|---|
| Unit | Vitest | Pure functions — parsing, chunking, manifest, zip format |
| Integration | Vitest + fake-indexeddb | Pipelines with mocked models and mocked OPFS |
| E2E | Playwright | Full user flows in a real browser with real OPFS, stubbed model inference |

---

### 14.2 Unit Tests (Vitest)

No browser APIs, no models, no workers. Test pure logic only.

**Targets:**

| Module | Tests |
|---|---|
| `chunkText(text, size, overlap)` | Correct chunk count, overlap tokens, edge cases (empty, short, exact-size) |
| `parseManifest(json)` | Valid manifest parses, missing required fields throws, version mismatch detected |
| `buildManifestHash(manifest)` | Same inputs → same hash, different inputs → different hash |
| `formatChunkId(source, index)` | Stable, unique IDs across calls |
| `selectModelConfig(modelName)` | Returns correct shard list for each of the 3 chat models |
| Document parsers | `parsePdf`, `parseDocx`, `parseMd`, `parseTxt` — fixture files in → expected plain text out |

**Fixture files** (`tests/fixtures/`): one small PDF, one DOCX, one MD, one TXT — known content, known expected text output.

```
tests/
├── unit/
│   ├── chunking.test.ts
│   ├── manifest.test.ts
│   ├── parsers.test.ts
│   └── modelConfig.test.ts
└── fixtures/
    ├── sample.pdf
    ├── sample.docx
    ├── sample.md
    └── sample.txt
```

---

### 14.3 Integration Tests (Vitest)

Test pipelines end-to-end with mocked heavy dependencies. Run in Node (jsdom) — no real browser required.

**Mock strategy:**

| Dependency | Mock |
|---|---|
| `@xenova/transformers` | Stub `pipeline()` — returns deterministic fake vectors (zero vector or seeded random) |
| `@mlc-ai/web-llm` | Stub `CreateMLCEngine` — returns fake engine with `chat.completions.create()` returning a fixed string |
| OPFS (`navigator.storage.getDirectory`) | Replace with in-memory filesystem (plain JS `Map`) via Vitest setup file |
| Model CDN fetch | `vi.mock(fetch)` — return small binary fixture instead of real model shards |

**Targets:**

| Pipeline | Tests |
|---|---|
| Export pipeline | 3 files in → `chunks.json`, `orama-index.json.gz`, `manifest.json` produced correctly; chunk count matches; Orama index is queryable |
| Zip build | Output zip contains all required paths; manifest hash matches contents; files extractable |
| Import pipeline | Valid zip in → OPFS written correctly; manifest loaded; Orama index restored; stub chat engine responds |
| OPFS persistence check | Import once → clear state → re-import → OPFS written fresh |
| Hybrid search | Insert known chunks → query matching text → result contains correct chunk |
| Manifest mismatch | Import zip with unknown embed model version → error surfaced |

```
tests/
└── integration/
    ├── exportPipeline.test.ts
    ├── importPipeline.test.ts
    ├── zipFormat.test.ts
    ├── hybridSearch.test.ts
    └── opfsPersistence.test.ts
```

---

### 14.4 E2E Tests (Playwright)

Real Chromium browser. Real OPFS. Real fflate. Real Orama. **WebLLM and Transformers.js are intercepted** — model inference is stubbed via `page.route()` to avoid downloading GB-sized models in CI.

#### Setup

```ts
// playwright.config.ts
export default defineConfig({
  use: {
    baseURL: 'http://localhost:5173',
    // Required for SharedArrayBuffer (coi-serviceworker needs this)
    launchOptions: {
      args: ['--enable-features=SharedArrayBuffer']
    }
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
  }
})
```

#### Model Stub via Route Interception

WebLLM fetches model shards from CDN. Intercept those requests and return a tiny binary fixture so tests don't download real models:

```ts
// tests/e2e/helpers/stubModels.ts
export async function stubModelInference(page: Page) {
  // Intercept model shard fetches — return 1KB dummy binary
  await page.route('**/mlc-ai/**', route =>
    route.fulfill({ body: Buffer.alloc(1024), contentType: 'application/octet-stream' })
  );
  // Stub WebLLM engine via page.addInitScript
  await page.addInitScript(() => {
    (window as any).__STUB_WEBLLM__ = true;
    // Overwrite before app imports — stubbed engine returns fixed response
  });
}
```

#### Test Fixtures

A pre-built `test-knowledge-base.zip` fixture lives in `tests/e2e/fixtures/`. Built once from the sample documents with a stubbed embed model (zero vectors). Used in all import tests — no live export required for import tests.

#### E2E Test Suite

**Export page (`/export`):**

| Test | Steps | Assert |
|---|---|---|
| Model picker renders all 3 chat models | Open `/export` | Phi-3-mini, Gemma-2-2b, TinyLlama visible; Gemma-2-2b selected by default |
| File upload accepted | Drop `sample.pdf`, `sample.docx`, `sample.md`, `sample.txt` | All 4 appear in file list with names |
| File type rejection | Drop a `.jpg` | Error message shown, file not added |
| Export produces download | Upload files, click Export, wait for download event | Download filename ends in `.zip`; zip contains `manifest.json` |
| Progress feedback shown | Upload 2 files, click Export | Stage labels visible: "Parsing...", "Embedding...", "Building index...", "Packaging..." |
| Estimated zip size shown | Select Gemma-2-2b model | Size estimate label visible before export starts |

**Import page (`/import`):**

| Test | Steps | Assert |
|---|---|---|
| Empty state shows drop zone | Open `/import` with clean OPFS | Drop zone visible, no chat UI |
| Import valid zip | Drop `test-knowledge-base.zip` | Progress bar shown; chat interface appears after extraction |
| OPFS persistence — reload | Import zip, reload page | Chat interface loads directly, no drop zone shown |
| OPFS persistence — new tab | Import zip, open new tab to `/import` | Chat interface loads directly |
| Clear knowledge base | Import zip, click "Clear", confirm | Drop zone shown again; OPFS wiped |
| Re-import after clear | Clear, drop zip again | Extraction runs; chat available again |
| Invalid zip rejected | Drop a random `.zip` with no `manifest.json` | Error message: "Invalid knowledge base file" |
| Corrupted zip rejected | Drop a truncated zip | Error message shown; app does not crash |

**Chat flow (`/import` after loaded):**

| Test | Steps | Assert |
|---|---|---|
| Question returns answer | Type question, submit | Response appears (stubbed); sources shown |
| Streamed response renders | Submit question | Tokens appear progressively (stub emits chunks) |
| Empty query rejected | Submit empty input | No request made; input shows validation state |
| Multiple questions | Ask 3 questions in sequence | Each gets a response; chat history grows |

**Offline simulation:**

| Test | Steps | Assert |
|---|---|---|
| Import works with network offline | Import zip, then `page.context().setOffline(true)`, reload | Chat loads from OPFS; no network errors |

```
tests/
└── e2e/
    ├── export.spec.ts
    ├── import.spec.ts
    ├── chat.spec.ts
    ├── offline.spec.ts
    ├── helpers/
    │   ├── stubModels.ts
    │   └── opfsHelpers.ts      ← clear OPFS between tests via page.evaluate()
    └── fixtures/
        └── test-knowledge-base.zip
```

---

### 14.5 CI Pipeline

```yaml
# .github/workflows/test.yml
jobs:
  unit:
    runs-on: ubuntu-latest
    steps:
      - run: npm run test:unit       # vitest run tests/unit

  integration:
    runs-on: ubuntu-latest
    steps:
      - run: npm run test:integration  # vitest run tests/integration

  e2e:
    runs-on: ubuntu-latest
    steps:
      - run: npx playwright install chromium
      - run: npm run test:e2e          # playwright test
    # E2E runs Chromium only — no Safari/Firefox needed for this app
```

**Scripts in `package.json`:**
```json
{
  "scripts": {
    "test:unit": "vitest run tests/unit",
    "test:integration": "vitest run tests/integration",
    "test:e2e": "playwright test",
    "test": "npm run test:unit && npm run test:integration && npm run test:e2e"
  }
}
```

---

### 14.6 What Is Not Tested

| Item | Reason |
|---|---|
| Real WebLLM inference quality | Model quality is not our code — test the plumbing, not the model |
| Real bge-small embeddings | Same — stub vectors are sufficient to test search pipeline correctness |
| Safari / Firefox E2E | OPFS and WASM behave correctly in Chrome; cross-browser is a post-v1 concern |
| Zip files >1GB in CI | CI has no space for real model zips; fixture zip uses stub model shards |
