import type { Page } from '@playwright/test'

/**
 * Clear the llm-import-export OPFS directory between tests.
 * Uses page.evaluate to run in the browser context where real OPFS is available.
 */
export async function clearOpfs(page: Page): Promise<void> {
  await page.evaluate(async () => {
    try {
      const root = await navigator.storage.getDirectory()
      await root.removeEntry('llm-import-export', { recursive: true })
    } catch {
      // Directory may not exist yet — that's fine
    }
  })
}
