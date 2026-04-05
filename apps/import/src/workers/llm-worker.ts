/**
 * LLM Worker — runs WebLLM's MLCEngine entirely off the main thread.
 *
 * Why a dedicated worker:
 * - Model loading and GPU inference are CPU/GPU-intensive. Running them on the
 *   main thread blocks the UI, freezes scroll/input, and can trigger browser
 *   "page unresponsive" warnings on 2GB+ models.
 * - WebLLM's WebWorkerMLCEngineHandler creates its own MLCEngine internally and
 *   communicates with the main thread via postMessage. The main-thread proxy
 *   (WebWorkerMLCEngine) has the identical API — chat.completions.create(),
 *   reload(), etc. — so no call-site changes are needed.
 * - The worker shares the same Cache API origin as the main thread, so model
 *   weights pre-populated by unzip-worker into webllm/* caches are visible here.
 */
import { WebWorkerMLCEngineHandler } from '@mlc-ai/web-llm'

const handler = new WebWorkerMLCEngineHandler()
self.onmessage = (msg: MessageEvent) => {
  handler.onmessage(msg)
}
