# Architecture Deep Dive

## Export Pipeline

```
User drops files → document-worker (parse PDF/DOCX/MD/TXT to text)
               → embed-worker (BGE-small ONNX → 384-dim vectors)
               → Orama DB (hybrid BM25 + vector index)
               → manifest.json (metadata + model URLs + system instructions)
               → showSaveFilePicker() → WritableStream to disk
                                          ↑
                                    zip-worker:
                                      KB entries (small, postMessage)
                                      + fetches model config from HuggingFace
                                      + fetches tensor-cache.json (shard list)
                                      + streams each shard → ZipPassThrough
                                      + streams WASM → ZipPassThrough
                                      → fflate streaming Zip → chunks → main thread → disk
```

## Import Pipeline

```
User drops zip → file.stream() → transferred to unzip-worker
                                       ↓
                              fflate streaming Unzip
                                       ↓
                    manifest.json → parse → resolve manifest promise
                    model/*.json  → caches.open('webllm/config').put()
                    model/*.bin   → caches.open('webllm/model').put()
                    wasm/*.wasm   → caches.open('webllm/wasm').put()
                    chunks.json   → OPFS write
                    orama-index.gz → OPFS write
                    instructions.md → OPFS write (system prompt)
                    sources/*     → OPFS write
                                       ↓
                    main thread: load Orama index from OPFS
                                       ↓
                    ChatInterface: CreateMLCEngine(modelId)
                                  → WebLLM finds all files in Cache API
                                  → no network requests
```

## Chat Pipeline

```
User query
    → BGE-small embed (Xenova/bge-small-en-v1.5 via @huggingface/transformers)
    → Orama hybrid search (BM25 text + vector cosine similarity)
    → top-K chunks retrieved
    → system prompt built:
        [manifest.system_instructions]
        [retrieved chunk texts as context]
    → WebLLM streaming chat.completions.create()
    → tokens stream to UI in real time (react-markdown rendering)
```

## Memory Strategy

| Component | Peak RAM |
|---|---|
| Export: shard fetching | ~one shard (~50 MB) |
| Export: zip output | ~one compressed chunk (~1 MB) |
| Import: unzip | ~one file being extracted (~50 MB) |
| Import: cache write | ~one shard at a time |
| Chat: model in VRAM | 700 MB – 2.2 GB (GPU) |
| Chat: model in RAM | minimal (WebGPU offloads to GPU) |

## File Layout in Zip

```
knowledge-base.zip
├── manifest.json          ← metadata, model URLs, system instructions
├── chunks.json            ← all text chunks with embeddings
├── orama-index.json.gz    ← serialized Orama hybrid search index
├── instructions.md        ← system prompt for the chat assistant
├── sources/               ← original source documents
│   ├── doc1.pdf
│   └── doc2.md
├── model/                 ← WebLLM model files
│   ├── mlc-chat-config.json
│   ├── tokenizer.json
│   ├── tokenizer_config.json
│   ├── tensor-cache.json  ← shard index
│   └── params_shard_*.bin ← weight shards
└── wasm/
    └── *.wasm             ← compiled WebGPU kernel
```

## WebLLM Cache Buckets

| Cache name | Contents | Key format |
|---|---|---|
| webllm/config | mlc-chat-config.json, tokenizer files | `{modelUrl}{filename}` |
| webllm/model | tensor-cache.json, weight shards | `{modelUrl}{filename}` or shard URL |
| webllm/wasm | compiled WebGPU WASM | raw GitHub URL |

## Workers

| Worker | Runs in | Responsibility |
|---|---|---|
| document-worker | Web Worker | Parse PDF/DOCX/MD/TXT to plain text |
| embed-worker | Web Worker | BGE-small ONNX inference → float32 vectors |
| zip-worker | Web Worker | Fetch model shards + stream-compress to zip |
| unzip-worker | Web Worker | Stream-decompress zip → Cache API + OPFS |
