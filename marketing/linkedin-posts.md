# LinkedIn Posts — Offline LLM Knowledge System

---

## Post 1 — The Origin Story

I deployed software to a site with no internet.

The team had 40 pages of runbooks. Nobody read them. They called me instead.

I thought: what if they could just ask questions?

But there's no internet. No OpenAI. No Anthropic. No cloud.

Just a browser.

So I built it.

You drop your documents. Choose a local LLM. Click Export. You get a zip file — 1–3 GB — that contains everything: the model weights, the search index, the embedding model, your documents.

You take that zip to the no-internet site.
You drop it in a browser tab.
You start chatting.

It answers from your documents. Offline. Always.

No server. No API key. No infrastructure.

Just a zip file and a browser.

---

## Post 2 — The "No Internet" Problem

Every enterprise has zones where the internet doesn't go.

Factory floors. Classified networks. Hospital isolation zones. Ships. Aircraft. Customer sites behind strict firewalls.

These zones still have browsers. They still have people who need answers.

But AI stops at the perimeter.

Until now.

We built a tool that packages a language model, your documents, a search index, and an embedding model into a single zip file.

You export it once (internet needed for the first download).
You import it anywhere (internet never needed again).

The chat runs entirely in the browser. WebGPU does the inference. OPFS stores the data. Web Workers keep the UI from freezing.

Your knowledge base. Your model. Totally offline.

---

## Post 3 — The Technical Bit

Here's what surprised me about running LLMs in the browser:

The hardest part wasn't the model.

It was the **prompt**.

Phi-3-mini has a 4K context window. Standard RAG uses 512-token chunks. Three chunks = 1,536 tokens of context before you've even written the question. The model has almost no room to answer.

We cut chunks to 100 tokens. Three chunks = 400 tokens. Room for a real answer.

The second problem: we were putting retrieved documents in the **system** message. Small models treat system messages as stable background instructions. They barely attend to dynamic context injected there.

We moved everything to the **user** message. Answers went from 3-word bullets to full, cited paragraphs.

The third problem: "Use bullet points" in the system prompt caused Phi to give 3-word answers on thin context. Removed it. Replaced with: "Write in complete sentences."

Three changes. Same model. Completely different quality.

Small models aren't bad. They just need different prompt shapes than big ones.

---

## Post 4 — What I Actually Shipped

Two browser apps. No backend.

**Export app** (needs internet once):
- Drop documents (PDF, DOCX, MD, TXT)
- Pick a local LLM (Phi-3-mini, Gemma-2B, TinyLlama)
- Write a system prompt (or use the default)
- Click Export → downloads a zip

**Import app** (never needs internet):
- Drop the zip
- Wait 20–30 seconds (model loads from zip into GPU)
- Ask questions → answers from your documents

The zip bundles everything:
- LLM weights (pre-fetched from HuggingFace, cached in browser, streamed into zip)
- Orama hybrid search index (BM25 + vector)
- Pre-computed embeddings for every document chunk
- The embedding model itself (bge-small-en-v1.5 ONNX)

The embedding model bundling was the trickiest part.

transformers.js stores model files in the browser's Cache API under `'transformers-cache'`. After pipeline() initialises, we drain that cache, filter to HuggingFace URLs only, bundle the files in the zip. On import, we restore them to Cache API with the original URLs as keys. transformers.js finds them there and never hits the network.

No monkey-patching. No service worker tricks. The browser's own cache mechanism does the work.

---

## Post 5 — The Use Cases I Didn't Expect

I built this for ops teams on air-gapped networks.

Then people started asking:

*"Can I use this for field engineers who need product manuals offline?"*
Yes.

*"Can I put our Docker Compose reference in there and let devs ask questions?"*
Yes.

*"Can I package our onboarding docs for new hires who don't have accounts yet?"*
Yes.

*"Can I use this on mobile? We have tablets in the warehouse."*
Any device with a modern browser and a GPU. Yes.

*"Can I ship the zip on a USB stick?"*
It's a file. You can put it anywhere.

The underlying idea is simple: **if it fits in a browser, it runs anywhere**.

No cloud dependency means no single point of failure. No API key means no cost per question. No server means no infrastructure to maintain.

A small model with a focused knowledge base often beats a big model with no context.

---

## Post 6 — The Console API

My favourite thing we shipped:

```js
await kb.ask("Why does error E-4417 appear?")
await kb.search("network timeout")
await kb.prompt("What is the retry limit?")
kb.history()
await kb.batch(["q1", "q2", "q3"])
```

All of it runs in your browser console.

Because this tool is for technical environments — factory floors, ops rooms, debug sessions — you shouldn't have to click through a UI to test your knowledge base.

You open the console. You test. You ship.

`kb.prompt()` is my favourite: it shows you the exact messages being sent to the LLM, including the retrieved chunks, the system prompt size, the token budget. You can debug your RAG pipeline without deploying anything.

An AI assistant you can inspect, debug, and verify — locally, offline, in the browser — is fundamentally different from one you call over an API.

You see exactly why it answered the way it did.

That matters a lot when the answer is telling a field engineer what to do with a broken machine.

---

## Post 7 — What This Says About Where AI Is Going

Six months ago, running a useful LLM in a browser was a demo trick.

Now it's a deployment strategy.

WebGPU shipped across all major browsers. Models shrank: Phi-3-mini is 1.3GB. Gemma-2B is 1.4GB. TinyLlama is 700MB. These run at 20–30 tokens/second on integrated graphics.

transformers.js handles embeddings in a Web Worker. WebLLM handles inference in another. The main thread stays free.

Web Workers, OPFS, Cache API, WebGPU — the browser platform spent the last three years building exactly the infrastructure you need to run AI locally.

The gap between "LLM on your laptop" and "LLM with your data in your browser" is now a zip file.

We're at the beginning of a wave of AI tools that assume no connectivity.

Not because connectivity is bad. But because the absence of connectivity is a real constraint that real people have to work around every day.

And now they don't have to.

---

*Open source. MIT. No backend required.*
*→ github.com/muthuishere/offline-llm-knowledge-system*
