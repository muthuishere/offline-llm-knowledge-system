import type { Page } from '@playwright/test'

/**
 * Stub model inference for E2E tests.
 *
 * - Intercepts all requests matching `*\/mlc-ai\/**` and returns a 1KB dummy binary
 *   so WebLLM does not attempt to download real model shards.
 * - Injects an init script that marks `window.__STUB_WEBLLM__ = true` before
 *   any app code runs, so the app can detect the stub environment.
 */
export async function stubModelInference(page: Page): Promise<void> {
  // Intercept model shard fetches — return 1KB dummy binary
  await page.route('**/mlc-ai/**', route =>
    route.fulfill({
      body: Buffer.alloc(1024),
      contentType: 'application/octet-stream',
    }),
  )

  // Intercept Hugging Face / Transformers.js model downloads
  await page.route('**/huggingface.co/**', route =>
    route.fulfill({
      body: Buffer.alloc(1024),
      contentType: 'application/octet-stream',
    }),
  )

  // Stub WebLLM engine via init script so it is available before app code runs
  await page.addInitScript(() => {
    ;(window as unknown as Record<string, unknown>).__STUB_WEBLLM__ = true

    // Provide a minimal stub for the WebLLM CreateMLCEngine API
    // so the app's import of @mlc-ai/web-llm resolves to this stub.
    ;(window as unknown as Record<string, unknown>).__WEBLLM_STUB_ENGINE__ = {
      chat: {
        completions: {
          create: async (opts: { stream?: boolean }) => {
            if (opts?.stream) {
              // Return an async iterable for streaming
              return (async function* () {
                for (const token of ['Stub ', 'response ', 'from ', 'WebLLM.']) {
                  yield { choices: [{ delta: { content: token } }] }
                }
              })()
            }
            return {
              choices: [{ message: { content: 'Stub response from WebLLM.' } }],
            }
          },
        },
      },
      unload: async () => {},
    }
  })
}
