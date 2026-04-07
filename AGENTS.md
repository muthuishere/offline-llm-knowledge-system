# AGENTS.md — offline-llm-knowledge-system

## What This Project Is

A portable, fully offline AI knowledge base that runs entirely in the browser. No server. No API keys. No internet after the initial export.

Two separate Vite + React + TypeScript apps:

| App    | Directory     | Dev URL               | Role                                        |
|--------|---------------|-----------------------|---------------------------------------------|
| Export | `apps/export` | http://localhost:5198 | Online — ingest docs, build, download zip   |
| Import | `apps/import` | http://localhost:5199 | Offline — load zip, chat with knowledge base |

### Core Flow

1. **Export** (needs internet once): drop documents → choose LLM → click Export → download a zip (500MB–1.3GB) with model weights, embedding model, search index, and all docs.
2. **Import** (never needs internet): drop the zip in any browser → extracted to OPFS → chat offline forever.

### Zip Bundle Format

```
knowledge-base.zip
├── manifest.json           ← version, model config, source list
├── chunks.json             ← all chunks with text + pre-computed vectors
├── orama-index.json.gz     ← Orama BM25 + vector index
├── sources/                ← original documents
├── embed-model/            ← bge-small-en-v1.5-q8.onnx (~24MB)
└── model/                  ← chat model weights (safetensors shards)
```

### Tech Stack

| Layer         | Library                   |
|---------------|---------------------------|
| LLM inference | `@mlc-ai/web-llm` (WASM, CPU, OPFS blob URLs) |
| Embeddings    | `@xenova/transformers` v4 (ONNX, Web Worker) |
| Hybrid search | `@orama/orama` (BM25 + cosine) |
| Zip           | `fflate` (streaming, never fully in RAM) |
| Storage       | OPFS + Cache API |
| Headers       | `coi-serviceworker` (SharedArrayBuffer) |

### Worker Architecture

| Worker            | Responsibility                                  |
|-------------------|-------------------------------------------------|
| `document-worker` | Parse PDF/DOCX/MD/TXT → plain text → chunks     |
| `embed-worker`    | Transformers.js vectors per chunk               |
| `zip-worker`      | fflate streaming compress / decompress          |

Main thread: UI state, Orama, WebLLM (manages its own workers internally).

### Key Design Decisions (do not change without reason)

- **Chunk size: 100 tokens** — small models (4K context) need room for answers; 512-token chunks leave none.
- **Context in user turn, not system prompt** — small models ground far better on user-turn content.
- **OPFS keyed by `manifest_hash`** — extraction is idempotent; subsequent visits skip re-extraction.
- **Blob URLs for model shards** — revoke after WebLLM engine init to avoid memory leaks.
- **Never buffer full zip in memory** — always stream with fflate.

---

## Running Dev Servers

### Option 1 — Current terminal (with tee logging)

Logs are written to `logs/` so agents and humans can both read them.

```bash
mkdir -p logs

# Run both in parallel (background), each piped to tee
(cd apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log) &
(cd apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log) &

wait
```

Or via task (one-liner):

```bash
mkdir -p logs
task export:dev 2>&1 | tee logs/export-dev.log &
task import:dev 2>&1 | tee logs/import-dev.log &
```

### Option 2 — New Ghostty window

```bash
mkdir -p logs
open -a Ghostty --args -e "bash -c 'cd $(pwd) && (cd apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log) & (cd apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log) & wait'"
```

Or open two separate Ghostty tabs:

```bash
mkdir -p logs
/Applications/Ghostty.app/Contents/MacOS/ghostty --command="bash -c 'cd $(pwd)/apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log; exec bash'" &
/Applications/Ghostty.app/Contents/MacOS/ghostty --command="bash -c 'cd $(pwd)/apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log; exec bash'" &
```

### Option 3 — macOS Terminal.app

```bash
mkdir -p logs
osascript -e "tell application \"Terminal\"
  activate
  do script \"cd '$(pwd)' && (cd apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log) & (cd apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log) & wait\"
end tell"
```

---

## Reading Logs (for agents)

```bash
# Tail both logs
tail -f logs/export-dev.log
tail -f logs/import-dev.log

# Tail both at once
tail -f logs/export-dev.log logs/import-dev.log

# Check for errors
grep -i error logs/export-dev.log
grep -i error logs/import-dev.log
```

Log files persist at:
- `logs/export-dev.log` — Export app (port 5198)
- `logs/import-dev.log` — Import app (port 5199)

---

## Quick Start Script

```bash
./scripts/dev.sh
```

See `scripts/dev.sh` for the canonical way to start both servers with logging.

---

## Testing

```bash
npm run test:unit          # Vitest — pure functions, no browser APIs
npm run test:integration   # Vitest — pipelines with mocked OPFS/models
npm run test:e2e           # Playwright Chromium — real OPFS, stubbed model inference
```

Heavy deps (WebLLM, Transformers.js, real model weights) are always mocked/stubbed. Never download real model weights in tests.

## Console Debug API (import page)

```js
await kb.ask("Why does error E-4417 appear?")
await kb.search("network timeout")
await kb.prompt("What is the retry limit?")
kb.history()
await kb.batch(["q1", "q2", "q3"])
```
