# Debugging Guide

## Export App Debugging

### "Must be handling a user gesture to show a file picker"
**Cause:** `showSaveFilePicker()` was called after one or more `await` statements, losing the user gesture context.
**Fix:** `showSaveFilePicker()` must be the absolute first call in the export handler, before any async work. Move it to the top of `startExport` before parsing, embedding, or any other awaits.

### "Data cannot be cloned" / Out of Memory at high progress %
**Cause:** Trying to postMessage large Uint8Arrays (1–5 GB of model shards) from main thread to zip worker via structured clone.
**Fix:** Never fetch model shards on the main thread. The zip-worker fetches shards directly from HuggingFace and streams them through fflate ZipPassThrough. Main thread only sends small KB entries.

### Export stuck at 0% / embed worker INIT timeout
**Cause:** BGE-small ONNX model failed to load in the embed worker (network issue or WASM not initialized).
**Debug steps:**
1. Open DevTools → Console tab
2. Look for errors from embed-worker
3. Check Network tab for failed fetches to huggingface.co
4. Ensure SharedArrayBuffer is available: `typeof SharedArrayBuffer !== 'undefined'`
5. Cross-Origin Isolation headers must be present: `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`

### COI (Cross-Origin Isolation) errors
**Symptom:** `SharedArrayBuffer is not defined` or Atomics errors.
**Fix:** The app uses `coi-serviceworker` to inject COOP/COEP headers on localhost. If you see these errors:
1. Hard-refresh the page (Cmd+Shift+R) to register the service worker
2. Check Application → Service Workers in DevTools — the COI SW should be active
3. On first load there's a redirect — wait for it to complete

### fflate Zip callback errors
**Symptom:** TypeError in zip-worker around ZipPassThrough or Zip callback.
**Note:** fflate's `Zip` callback signature is `(err: FlateError | null, chunk: Uint8Array | null, final: boolean)`. Always null-check `err` and `chunk` before using them.

---

## Import App Debugging

### Import stuck at 0% "Extracting zip to storage..."
**Cause:** `uz.push()` was running synchronously on the main thread, blocking React re-renders.
**Fix:** All zip extraction runs in `unzip-worker.ts`. The worker receives a transferred ReadableStream from the main thread. If stuck at 0%, check:
1. DevTools → Application → Workers — unzip-worker should be active
2. Console for errors from the worker
3. The zip file must be a valid zip (not corrupt or truncated)

### "model not found in cache" / WebLLM network requests after import
**Cause:** Cache API was not pre-populated correctly. The cache key format must exactly match what WebLLM expects.
**Debug:**
1. DevTools → Application → Cache Storage — look for `webllm/config`, `webllm/model`, `webllm/wasm`
2. Verify entries exist under the correct keys (`{modelUrl}{filename}`)
3. The model URL comes from `manifest.chat_model.model_url` — must end with `/`

### Chat model loads but gives irrelevant answers
**Cause:** System instructions are missing or the retrieved context chunks are not relevant.
**Debug:**
1. Check `manifest.json` in the zip — verify `system_instructions` field is populated
2. Check that the Orama hybrid search is returning chunks (sources appear below each assistant message)
3. If no sources appear, the embedding search may have failed — check console for errors from `@huggingface/transformers`

### "Uploading to GPU..." hangs indefinitely
**Cause:** WebGPU adapter not available, or model too large for available VRAM.
**Debug:**
1. `navigator.gpu` must be defined — check in console
2. Try a smaller model (TinyLlama 700 MB) in the next export
3. On mobile or integrated GPU, Phi-3-mini (2.2 GB) may exceed VRAM limits

### OPFS write failures
**Cause:** Storage quota exceeded or OPFS not supported.
**Debug:**
1. DevTools → Application → Storage → check available quota
2. `navigator.storage.estimate()` in console shows usage/quota
3. Clear old OPFS data: Application → Storage → Clear site data

---

## General Debug Checklist

- [ ] Browser is Chrome 113+ or Edge 113+ (WebGPU + File System Access API)
- [ ] Running on `localhost` or `https://` (showSaveFilePicker requires secure context)
- [ ] SharedArrayBuffer available (`typeof SharedArrayBuffer !== 'undefined'`)
- [ ] COI service worker active (Application → Service Workers)
- [ ] No CORS errors in Network tab
- [ ] Sufficient disk space for zip (700 MB – 3 GB depending on model)
- [ ] Sufficient VRAM for chosen model
