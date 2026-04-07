# Common Queries and Expected Answers

This document captures frequently asked questions about local-llm-import-export and what the chat assistant should answer.

## Usage Questions

**Q: How do I export my documents?**
Open the export app (port 5198), select a chat model, optionally write system instructions, drag and drop your documents into the file drop zone, then click Start Export. A file picker will open — choose where to save the zip. The export streams directly to disk and may take several minutes depending on model size.

**Q: What file types can I export?**
The export app accepts PDF, DOCX, TXT, and MD files. Other file types (CSV, XLSX, images) are not supported. Drop unsupported files and they will be rejected with an error message.

**Q: How large will the exported zip be?**
The zip size is dominated by the model weights: TinyLlama ~700 MB, Gemma 2B ~1.4 GB, Phi-3-mini ~2.2 GB. Document content (chunks, index, sources) adds only a few MB on top.

**Q: Do I need internet to use the import app?**
No. Once the zip is imported, the app is fully offline. The chat model runs locally on your GPU via WebGPU, and the knowledge base index is stored in OPFS. No network requests are made during chat.

**Q: Can I import the zip on a different computer?**
Yes. The zip is self-contained. Copy it to any computer, open the import app (port 5199) in a supported browser, and drop the zip. The model will load from the zip's bundled weights.

**Q: How do I update the knowledge base with new documents?**
Re-export with the updated document set. There is no incremental update — each export creates a complete new zip.

## Technical Questions

**Q: What is the system instructions field?**
The system instructions textarea in the export app lets you define how the chat assistant should behave. The text is stored in `manifest.json` as `system_instructions` and used as the LLM system prompt in the import app. You can also drop an `instructions.md` file to append content to the textarea.

**Q: What embedding model is used?**
BGE-small-en-v1.5 (384 dimensions, quantized to Q8). It runs via ONNX in a Web Worker using @huggingface/transformers. The embedding model is not bundled in the zip — it is loaded from cache or the CDN on first use.

**Q: What is hybrid search?**
The chat retrieval combines BM25 keyword search with vector cosine similarity search using @orama/orama. This finds chunks that match both the keywords and the semantic meaning of the query. Top-K results are passed to the LLM as context.

**Q: Why does the export need internet but import does not?**
The export app fetches model weights from the HuggingFace CDN. These weights are streamed directly into the zip without ever fully loading into RAM. Once the zip is created, the import app uses only the zip's contents — no network calls.

**Q: What happens to my documents after export?**
Source documents are stored in the `sources/` folder inside the zip. They are also parsed, chunked, and embedded — the text chunks are in `chunks.json` and the search index is in `orama-index.json.gz`. The manifest records file names, types, chunk counts, and SHA-256 checksums.

**Q: Can I use this on mobile?**
Mobile browsers do not currently support WebGPU at the required level. Use Chrome 113+ or Edge 113+ on desktop for full support.

**Q: What is the manifest_hash?**
A SHA-256 hash of the manifest content (excluding the hash field itself). Used as a unique identifier for the knowledge base — OPFS stores data under this hash so multiple knowledge bases can coexist.

## Error / Troubleshooting Questions

**Q: The export fails with "Must be handling a user gesture"**
This means `showSaveFilePicker()` was called too late. The fix requires moving the file picker call to be the first thing that happens when the user clicks Start Export, before any async document processing.

**Q: The import is stuck at 0%**
The unzip-worker may have crashed. Check the browser console for worker errors. Ensure the zip file is not corrupt. Try re-exporting.

**Q: The chat gives answers unrelated to my documents**
Check that `manifest.system_instructions` is set and that the Orama search is returning relevant chunks (visible as source citations below each response). If no sources appear, the embedding may have failed — check console for errors.

**Q: How do I clear the knowledge base?**
In the import app, click "Clear knowledge base" in the chat header. This clears OPFS data and Cache API entries for the current knowledge base, returning to the zip drop screen.
