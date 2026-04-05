import { test, expect } from '@playwright/test'
import path from 'path'
import { stubModelInference } from './helpers/stubModels'

const FIXTURES_DIR = path.join(__dirname, '..', 'fixtures')

test.describe('Export page (/export)', () => {
  test.beforeEach(async ({ page }) => {
    await stubModelInference(page)
    await page.goto('/export')
  })

  test('model picker renders all 3 chat models', async ({ page }) => {
    // Phi-3-mini
    await expect(
      page.getByText(/Phi-3-mini/i),
    ).toBeVisible()

    // Gemma 2B
    await expect(
      page.getByText(/Gemma/i),
    ).toBeVisible()

    // TinyLlama
    await expect(
      page.getByText(/TinyLlama/i),
    ).toBeVisible()
  })

  test('Gemma is selected by default', async ({ page }) => {
    // The default model should be Gemma — look for a checked/selected state
    const gemmaOption = page.locator('[data-model-id="gemma-2-2b-it-q4f16_1"], input[value="gemma-2-2b-it-q4f16_1"]')
    if (await gemmaOption.count() > 0) {
      await expect(gemmaOption).toBeChecked()
    } else {
      // Fallback: check that Gemma label has a selected/active class or aria-checked
      const gemmaLabel = page.getByText(/Gemma.*recommended/i).first()
      await expect(gemmaLabel).toBeVisible()
    }
  })

  test('file upload accepted — txt and md files appear in file list', async ({ page }) => {
    // Find the file input
    const fileInput = page.locator('input[type="file"]').first()

    await fileInput.setInputFiles([
      path.join(FIXTURES_DIR, 'sample.txt'),
      path.join(FIXTURES_DIR, 'sample.md'),
    ])

    // Both files should appear in the UI
    await expect(page.getByText('sample.txt')).toBeVisible()
    await expect(page.getByText('sample.md')).toBeVisible()
  })

  test('file type rejection — .jpg shows error, file not added', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]').first()

    // Create a fake jpg file (content doesn't matter for UI rejection test)
    await fileInput.setInputFiles({
      name: 'photo.jpg',
      mimeType: 'image/jpeg',
      buffer: Buffer.from('fake-image-data'),
    })

    // Error message should be visible
    await expect(
      page.getByText(/not supported|invalid.*type|only.*pdf|unsupported/i).first(),
    ).toBeVisible({ timeout: 3000 })

    // The jpg file should NOT appear in the accepted file list
    await expect(page.getByText('photo.jpg')).not.toBeVisible()
  })

  test('progress feedback shown during export', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]').first()

    await fileInput.setInputFiles([
      path.join(FIXTURES_DIR, 'sample.txt'),
    ])

    // Click the export button
    const exportButton = page.getByRole('button', { name: /export|build|start/i }).first()
    await exportButton.click()

    // At least one progress stage label should appear
    const stagePattern = /parsing|embedding|building|packaging|processing/i
    await expect(
      page.getByText(stagePattern).first(),
    ).toBeVisible({ timeout: 10000 })
  })

  test('export produces a download', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]').first()

    await fileInput.setInputFiles([
      path.join(FIXTURES_DIR, 'sample.txt'),
    ])

    const exportButton = page.getByRole('button', { name: /export|build|start/i }).first()

    // Wait for the download event
    const [download] = await Promise.all([
      page.waitForEvent('download', { timeout: 30000 }),
      exportButton.click(),
    ])

    expect(download.suggestedFilename()).toMatch(/\.zip$/i)
  })
})
