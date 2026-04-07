# local-llm-import-export — Project Overview

## What Is This?

local-llm-import-export is a browser-based tool that packages documents and a local language model into a single portable zip file. You can then import that zip and chat with the knowledge base completely offline — no internet required after the initial export.

## Two Apps

### Export App (port 5198)
- Drag and drop source documents (PDF, DOCX, TXT, MD)
- Write or paste custom system instructions for the chat assistant
- Choose a chat model (Gemma 2B recommended, Phi-3-mini for best quality, TinyLlama for speed)
- Click Start Export → pick a save location → the app streams the zip directly to disk
- The export fetches model weights from HuggingFace CDN once and packages everything

### Import App (port 5199)
- Drop the exported zip file onto the page
- The app extracts it in a background worker — never blocks the UI
- Model weights go into the browser's Cache API (WebLLM reads them as if cached from network)
- Knowledge base index goes into OPFS (Origin Private File System)
- Once loaded, chat works 100% offline with no network calls

## Key Technical Decisions

### Why Cache API for Model Weights?
WebLLM internally uses the Cache API to store downloaded model files. By pre-populating those cache buckets from the zip, WebLLM finds everything it needs without touching the network.

### Why Streaming Zip?
Model weights are 700 MB – 2.2 GB. Loading the full zip into JavaScript memory would OOM the browser.
- Export: the zip worker streams model shards from HuggingFace directly into the zip, which streams to disk via showSaveFilePicker
- Import: the zip is read as a ReadableStream, extracted by fflate in a Web Worker, and each file is cached immediately

### Why Two Separate Apps?
Import is designed for air-gapped/offline environments. Export needs internet to fetch model weights. Keeping them separate prevents accidental coupling and keeps each bundle minimal.

## Supported Models

| Model | Size | Quality |
|---|---|---|
| Phi-3-mini-4k-instruct | ~2.2 GB | Best |
| Gemma 2B it | ~1.4 GB | Recommended |
| TinyLlama 1.1B | ~700 MB | Fastest |

All run locally on WebGPU — no server, no API key, no cloud.

## Tech Stack

- React + Vite + TypeScript
- @mlc-ai/web-llm — WebGPU inference
- @huggingface/transformers — BGE-small embedding (ONNX)
- @orama/orama — hybrid search index (BM25 + vector)
- fflate — streaming zip/unzip
- File System Access API (showSaveFilePicker) — stream zip directly to disk
- OPFS (Origin Private File System) — persist knowledge base index offline
