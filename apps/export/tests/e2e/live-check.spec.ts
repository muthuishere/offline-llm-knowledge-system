import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// tests/e2e → tests → project root → test-data
const TEST_DATA = path.join(__dirname, '../..', 'test-data')

/** Navigate and wait for React to render.
 *  Service workers are blocked in playwright.config.ts so no coi-sw reloads. */
/** Navigate using relative path (no leading slash). */
async function goto(page: import('@playwright/test').Page, route: 'export' | 'import') {
  await page.goto(route, { waitUntil: 'networkidle', timeout: 20000 })
}

test.describe('Export page', () => {
  test('renders model picker, file drop zone, and export button', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', e => errors.push(e.message))
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })

    await goto(page, 'export')

    // All 3 models visible
    await expect(page.getByText('Gemma 2B (1.4 GB) — recommended')).toBeVisible()
    await expect(page.getByText(/Phi-3-mini.*2\.2 GB/)).toBeVisible()
    await expect(page.getByText(/TinyLlama.*700 MB/)).toBeVisible()

    // File drop zone
    await expect(page.getByText('Drag & drop files here, or click to browse')).toBeVisible()
    await expect(page.getByText('.txt .pdf .docx .md')).toBeVisible()

    // Export button
    await expect(page.getByRole('button', { name: 'Start Export' })).toBeVisible()

    // Estimated size shown (default Gemma = ~1.4 GB)
    await expect(page.getByText(/~1\.4 GB/)).toBeVisible()

    // No critical JS errors
    const critical = errors.filter(e =>
      !e.includes('favicon') &&
      !e.includes('Future Flag') &&
      !e.includes('ReactRouter') &&
      !e.includes("'scope'") // coi-serviceworker accessing serviceWorker.scope when SW is blocked in tests
    )
    expect(critical, `Critical errors:\n${critical.join('\n')}`).toHaveLength(0)
  })

  test('adds txt and md test files via file input', async ({ page }) => {
    await goto(page, 'export')

    const fileInput = page.locator('input[type="file"]')
    await fileInput.setInputFiles([
      path.join(TEST_DATA, 'sql-queries.txt'),
      path.join(TEST_DATA, 'react-hooks-cheatsheet.md'),
    ])

    await page.waitForTimeout(500)
    await expect(page.getByText('sql-queries.txt')).toBeVisible()
    await expect(page.getByText('react-hooks-cheatsheet.md')).toBeVisible()

    // Export button should now be enabled
    await expect(page.getByRole('button', { name: 'Start Export' })).toBeEnabled()
  })

  test('adds pdf test files via file input', async ({ page }) => {
    await goto(page, 'export')

    const fileInput = page.locator('input[type="file"]')
    await fileInput.setInputFiles([
      path.join(TEST_DATA, 'getting-started-with-docker.pdf'),
      path.join(TEST_DATA, 'javascript-async-patterns-guide.pdf'),
    ])

    await page.waitForTimeout(500)
    await expect(page.getByText('getting-started-with-docker.pdf')).toBeVisible()
    await expect(page.getByText('javascript-async-patterns-guide.pdf')).toBeVisible()
  })

  test('adds all 6 test data files', async ({ page }) => {
    await goto(page, 'export')

    const fileInput = page.locator('input[type="file"]')
    await fileInput.setInputFiles([
      path.join(TEST_DATA, 'sql-queries.txt'),
      path.join(TEST_DATA, 'postgresql-performance-guide.txt'),
      path.join(TEST_DATA, 'react-hooks-cheatsheet.md'),
      path.join(TEST_DATA, 'todo-app-installation.md'),
      path.join(TEST_DATA, 'getting-started-with-docker.pdf'),
      path.join(TEST_DATA, 'javascript-async-patterns-guide.pdf'),
    ])

    await page.waitForTimeout(600)
    await expect(page.getByText('sql-queries.txt')).toBeVisible()
    await expect(page.getByText('postgresql-performance-guide.txt')).toBeVisible()
    await expect(page.getByText('react-hooks-cheatsheet.md')).toBeVisible()
    await expect(page.getByText('todo-app-installation.md')).toBeVisible()
    await expect(page.getByText('getting-started-with-docker.pdf')).toBeVisible()
    await expect(page.getByText('javascript-async-patterns-guide.pdf')).toBeVisible()

    // Button enabled with files added
    await expect(page.getByRole('button', { name: 'Start Export' })).toBeEnabled()
  })

  test('removes a file from the list', async ({ page }) => {
    await goto(page, 'export')

    const fileInput = page.locator('input[type="file"]')
    await fileInput.setInputFiles([
      path.join(TEST_DATA, 'sql-queries.txt'),
      path.join(TEST_DATA, 'todo-app-installation.md'),
    ])
    await page.waitForTimeout(500)

    await expect(page.getByText('sql-queries.txt')).toBeVisible()

    // Click × button next to the first file
    const removeBtn = page.locator('button').filter({ hasText: '×' }).first()
    await removeBtn.click()
    await page.waitForTimeout(300)

    // One file should be gone; one remains
    const fileCount = await page.locator('button').filter({ hasText: '×' }).count()
    expect(fileCount).toBe(1)
  })

  test('rejects unsupported file type via drop', async ({ page }) => {
    await goto(page, 'export')

    await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('*'))
      const dropZone = inputs.find(el => el.getAttribute('ondrop') !== null) ??
                       document.querySelector('[class*="drop"], [class*="zone"]') ??
                       document.querySelector('label') as Element

      const file = new File(['fake'], 'photo.jpg', { type: 'image/jpeg' })
      const dt = new DataTransfer()
      dt.items.add(file)
      const dropEl = document.querySelector('div[style*="border-style: dashed"]') ??
                     document.querySelector('div[style*="border: 2px"]') ??
                     document.querySelector('label') ??
                     document.body
      dropEl.dispatchEvent(new DragEvent('drop', { bubbles: true, dataTransfer: dt, cancelable: true }))
    })

    await page.waitForTimeout(600)
    // Either an error is shown OR photo.jpg was NOT added to the list
    const jpgVisible = await page.getByText('photo.jpg').count()
    const errorVisible = await page.getByText(/not supported|unsupported|only.*allowed|rejected/i).count()
    expect(jpgVisible === 0 || errorVisible > 0).toBe(true)
  })

  test('model selection changes estimated zip size', async ({ page }) => {
    await goto(page, 'export')

    // Default = Gemma ~1.4 GB
    await expect(page.getByText(/~1\.4 GB/)).toBeVisible()

    // Click Phi-3-mini (larger model, ~2.2 GB)
    await page.getByText(/Phi-3-mini/).click()
    await page.waitForTimeout(300)

    await expect(page.getByText(/~2\.2 GB/)).toBeVisible()

    // Click TinyLlama (~700 MB)
    await page.getByText(/TinyLlama/).click()
    await page.waitForTimeout(300)

    await expect(page.getByText(/~\d{3} MB|~0\.\d GB/)).toBeVisible()
  })

  test('nav link to Import page works', async ({ page }) => {
    await goto(page, 'export')

    await page.getByRole('link', { name: /Import/i }).click()
    await page.waitForURL(/\/import/, { timeout: 8000 })
    await expect(page).toHaveURL(/\/import/)
  })
})

test.describe('Import page', () => {
  test('shows drop zone when OPFS is empty', async ({ page }) => {
    await goto(page, 'import')

    // Clear OPFS
    await page.evaluate(async () => {
      try {
        const root = await navigator.storage.getDirectory()
        await root.removeEntry('llm-import-export', { recursive: true }).catch(() => {})
      } catch { /* ignore */ }
    })
    await page.reload({ waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(1000)

    await expect(page.getByText('Import Knowledge Base')).toBeVisible()
    await expect(page.getByText(/Drop knowledge base zip here/)).toBeVisible()
  })

  test('shows nav links to Import and Export', async ({ page }) => {
    await goto(page, 'import')

    await expect(page.getByRole('link', { name: 'Export' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Import' })).toBeVisible()
  })

  test('nav link to Export page works', async ({ page }) => {
    await goto(page, 'import')

    await page.getByRole('link', { name: 'Export' }).click()
    await page.waitForURL(/\/export/, { timeout: 8000 })
    await expect(page).toHaveURL(/\/export/)
  })
})
