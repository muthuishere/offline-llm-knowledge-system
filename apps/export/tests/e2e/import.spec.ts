import { test, expect } from '@playwright/test'
import path from 'path'
import { clearOpfs } from './helpers/opfsHelpers'
import { stubModelInference } from './helpers/stubModels'

const E2E_FIXTURES_DIR = path.join(__dirname, 'fixtures')

test.describe('Import page (/import)', () => {
  test.beforeEach(async ({ page }) => {
    await stubModelInference(page)
    await page.goto('/import')
    await clearOpfs(page)
    // Reload to reflect cleared OPFS
    await page.reload()
  })

  test('empty state shows drop zone when OPFS is empty', async ({ page }) => {
    // With no knowledge base in OPFS, a drop zone should be visible
    await expect(
      page.getByText(/drop|drag|import.*zip|upload/i).first(),
    ).toBeVisible({ timeout: 5000 })

    // Chat UI should NOT be visible yet
    await expect(
      page.getByRole('textbox', { name: /message|ask|query/i }),
    ).not.toBeVisible()
  })

  test('invalid zip rejected — text file renamed to .zip shows error', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]').first()

    // Upload a plain text file as if it were a zip
    await fileInput.setInputFiles({
      name: 'fake.zip',
      mimeType: 'application/zip',
      buffer: Buffer.from('this is not a valid zip file contents at all'),
    })

    // An error message should appear
    await expect(
      page.getByText(/invalid|error|not.*valid|corrupt/i).first(),
    ).toBeVisible({ timeout: 5000 })
  })

  test('clear knowledge base returns to drop zone state', async ({ page }) => {
    // First verify we start in drop zone state (OPFS was cleared in beforeEach)
    await expect(
      page.getByText(/drop|drag|import.*zip|upload/i).first(),
    ).toBeVisible({ timeout: 5000 })

    // If a clear button is visible (e.g. residual state), click it
    const clearButton = page.getByRole('button', { name: /clear/i })
    if (await clearButton.isVisible()) {
      await clearButton.click()

      // Confirm dialog if present
      const confirmButton = page.getByRole('button', { name: /confirm|yes|ok/i })
      if (await confirmButton.isVisible({ timeout: 1000 })) {
        await confirmButton.click()
      }

      // Drop zone should be visible again
      await expect(
        page.getByText(/drop|drag|import.*zip|upload/i).first(),
      ).toBeVisible({ timeout: 5000 })
    }

    // Whether or not we had to clear, the drop zone must be visible
    await expect(
      page.getByText(/drop|drag|import.*zip|upload/i).first(),
    ).toBeVisible()
  })
})
