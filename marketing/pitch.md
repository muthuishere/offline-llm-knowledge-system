# Offline LLM Knowledge System — Pitch

> *Your LLM. Your data. No internet. No server. Just a zip file.*

**Status:** Open Source · [github.com/muthuishere/offline-llm-knowledge-system](https://github.com/muthuishere/offline-llm-knowledge-system)

---

## The Problem Nobody Talks About

You're deploying software into a factory floor. An aircraft carrier. A hospital isolated network. A customer site behind a firewall. A data centre with zero-trust outbound rules.

You want your team to have an AI assistant that knows your product. Your runbooks. Your debug commands. Your logs format. Your deployment guide.

But there's no internet.

You can't call OpenAI. You can't hit Anthropic. You can't even reach HuggingFace.

You have a browser. That's it.

**This is not a niche problem. Every enterprise, every OT network, every air-gapped system faces it.**

---

## What We Built

A two-app browser tool that turns your documents into a portable, fully offline AI assistant.

```
Export App (needs internet once)          Import App (never needs internet)
────────────────────────────────          ─────────────────────────────────
Drop your documents                  →    Drop the zip
Choose your LLM (Phi-3, Gemma, etc) →    Chat immediately
Click Export                         →    All answers come from your docs
           ↓
    knowledge-base.zip
    (~1–3 GB, self-contained)
```

One zip. One import. Fully offline chat — forever.

---

## The Use Cases

| Scenario | What you put in the zip |
|----------|------------------------|
| Factory floor debug assistant | Maintenance manuals, error code guides, wiring diagrams |
| Air-gapped ops team | Runbooks, incident playbooks, deployment guides |
| Field engineer | Product specs, installation docs, FAQ |
| Secure customer site | Your product docs, release notes, configuration reference |
| Offline dev environment | API docs, architecture decisions, onboarding guides |
| Docker host with no egress | Docker Compose files, env var docs, troubleshooting guides |

---

## The Technical Reality

### Why browsers? Why not a local app?

Because a browser is already there. Always. On every machine. No installer. No admin rights. No dependency hell. No `pip install`. No PATH issues.

WebGPU is now in every modern browser. A 1.3GB model runs at 20–30 tokens/second on a laptop GPU.

The entire stack runs inside a single browser tab.

### What's inside the zip

```
knowledge-base.zip
├── manifest.json           ← model config, chunk settings, source list
├── chunks.json             ← all document chunks with pre-computed vectors
├── orama-index.json.gz     ← BM25 full-text search index (offline)
├── instructions.md         ← your system prompt
├── sources/                ← original documents
├── model/                  ← LLM weights (Phi-3-mini, Gemma-2B, TinyLlama)
├── wasm/                   ← WebGPU kernel
└── embed-cache/            ← embedding model (bge-small-en-v1.5, pre-bundled)
```

Everything the browser needs. Nothing else.

### The search pipeline

When you ask a question:

1. Your query is embedded → 384-dimensional vector (off main thread, ONNX worker)
2. Hybrid search: BM25 text match + cosine vector similarity → top 3 chunks
3. Chunks injected into the **user** message (not system) → Phi-3 attends to them reliably
4. LLM generates answer in a dedicated Web Worker → UI never freezes
5. Answer streams back token by token

Total latency from question to first token: ~500ms on integrated GPU.

### Why we put context in the user turn, not system

Small models like Phi-3-mini (4K context) are trained on instruction-following. They attend much more reliably to content in the **user** turn than in the system prompt.

Classic RAG mistake: stuff all your retrieved chunks into the system message. Phi treats them as background instructions, not grounding facts. Answers become vague or hallucinated.

Correct shape for small models:

```
System: (tiny, stable, <200 chars)
  "You are a grounded assistant. Answer only from the provided context.
   If insufficient, say so. Cite sources. Complete sentences."

User:
  Context:
  [DOC 1 — maintenance-guide.md]
  ... chunk text ...

  [DOC 2 — error-codes.md]
  ... chunk text ...

  Question: Why does error E-4417 appear after restart?
```

This shape gets 3–5× better grounding on Phi-3-mini than the standard RAG prompt.

### Why tiny chunks

Standard RAG uses 512-token chunks. For a 4K-context model running 3-chunk retrieval, that's 1,536 tokens of context before you even add the question and system prompt. Phi-3 has almost no room left for output.

We use 100-token chunks (~400 chars). Three chunks = 400 tokens. Plenty of room. More focused retrieval. Better answers.

---

## The Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| LLM inference | WebLLM + MLC | Runs LLM on WebGPU, entirely in-browser |
| Embedding | transformers.js + bge-small-en-v1.5 ONNX | Runs off main thread in a Web Worker |
| Vector + text search | Orama | Hybrid BM25 + cosine, pure JS, offline |
| Compression | fflate | Streaming zip, never fully in RAM |
| Storage | OPFS + Cache API | Survives page refresh, no server needed |
| Cross-origin isolation | coi-serviceworker | Enables SharedArrayBuffer for WebGPU |
| UI | React + Vite | Two separate apps, zero backend |

No Node.js at runtime. No Python. No Docker. No cloud.

### The embed model bundling trick

At export time, after the embedding pipeline runs, we drain the browser's `transformers-cache` Cache API — this is where transformers.js stores the model files after fetching from HuggingFace. We capture only the HuggingFace model files (not CDN ort-web runtime), bundle them in the zip as `embed-cache/N.bin` with a URL index.

At import time, the unzip worker restores them into `transformers-cache` with the original HuggingFace URLs as keys. When the embed-query worker starts `pipeline()`, transformers.js finds the files in cache — zero network requests.

The embed model is fully offline after one export.

---

## What This Unlocks

- **No-internet deployments**: factory floors, ships, aircraft, hospitals, secure government
- **Data sovereignty**: your documents never leave your machine, ever
- **Zero infrastructure**: no vector database, no GPU server, no API keys
- **Portability**: one zip file, any modern browser, any OS
- **Customisable**: swap the LLM, change the system prompt, add more documents — just re-export
- **Debuggable**: `kb.ask("question")`, `kb.search("question")`, `kb.prompt("question")` in the browser console

---

## The Console API

Because this tool is designed for technical environments, we expose a full console API for testing without the UI:

```js
// Ask a question (embed + search + LLM)
await kb.ask("Why does error E-4417 appear after restart?")

// Just show what documents were retrieved
await kb.search("network timeout configuration")

// Show the full prompt being sent to the LLM (debug)
await kb.prompt("How do I restart the monitoring service?")

// Show conversation history
kb.history()

// Batch test multiple questions
await kb.batch([
  "What is the default retry limit?",
  "How do I clear the event log?",
  "What ports need to be open?"
])
```

Drop this in your debug session. Keep it in your ops runbook. Test your knowledge base before you ship the zip to the field.

---

## Why Now

WebGPU shipped in Chrome 113 (May 2023). It's now in Firefox and Safari. The models got small enough: Phi-3-mini at 1.3GB, Gemma-2B at 1.4GB. The tooling matured: WebLLM, transformers.js, Orama.

The gap between "LLM works on your laptop" and "LLM works with your data in your browser" is now 15 lines of export config and a zip file.

We closed that gap.

---

*Built in public. MIT licensed.*
