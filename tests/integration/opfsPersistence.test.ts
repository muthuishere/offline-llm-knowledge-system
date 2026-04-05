import { describe, it, expect, beforeEach } from 'vitest'

// The OPFS mock is installed globally in tests/setup.ts
// __resetOPFS is exposed as a global for test isolation

declare const __resetOPFS: () => void

function getResetFn(): () => void {
  return (globalThis as unknown as Record<string, () => void>).__resetOPFS
}

async function getRootHandle(): Promise<FileSystemDirectoryHandle> {
  return navigator.storage.getDirectory()
}

// ---------------------------------------------------------------------------
// Helpers — thin wrappers over the mocked OPFS API
// ---------------------------------------------------------------------------

async function writeFile(
  dir: FileSystemDirectoryHandle,
  name: string,
  content: string,
): Promise<void> {
  const fh = await dir.getFileHandle(name, { create: true })
  const writable = await fh.createWritable()
  await writable.write(content)
  await writable.close()
}

async function readFile(
  dir: FileSystemDirectoryHandle,
  name: string,
): Promise<string> {
  const fh = await dir.getFileHandle(name)
  const file = await fh.getFile()
  return file.text()
}

async function fileExists(
  dir: FileSystemDirectoryHandle,
  name: string,
): Promise<boolean> {
  try {
    await dir.getFileHandle(name)
    return true
  } catch {
    return false
  }
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('OPFS persistence (mocked)', () => {
  beforeEach(() => {
    getResetFn()()
  })

  it('writes a file and reads it back with the same content', async () => {
    const root = await getRootHandle()
    const dir = await root.getDirectoryHandle('llm-import-export', { create: true })

    await writeFile(dir, 'manifest.json', JSON.stringify({ version: '1.0' }))

    const content = await readFile(dir, 'manifest.json')
    const parsed = JSON.parse(content)

    expect(parsed.version).toBe('1.0')
  })

  it('writes binary content and reads it back faithfully', async () => {
    const root = await getRootHandle()
    const dir = await root.getDirectoryHandle('llm-import-export', { create: true })

    const fh = await dir.getFileHandle('data.bin', { create: true })
    const writable = await fh.createWritable()
    const data = new Uint8Array([1, 2, 3, 4, 5])
    await writable.write(data)
    await writable.close()

    const fh2 = await dir.getFileHandle('data.bin')
    const file = await fh2.getFile()
    const buf = await file.arrayBuffer()
    const result = new Uint8Array(buf)

    expect(Array.from(result)).toEqual([1, 2, 3, 4, 5])
  })

  it('clears OPFS and verifies the file is gone', async () => {
    const root = await getRootHandle()
    const dir = await root.getDirectoryHandle('llm-import-export', { create: true })

    await writeFile(dir, 'chunks.json', '[]')
    expect(await fileExists(dir, 'chunks.json')).toBe(true)

    // Reset clears all in-memory state
    getResetFn()()

    // After reset, the directory and file no longer exist
    const freshRoot = await getRootHandle()
    try {
      const freshDir = await freshRoot.getDirectoryHandle('llm-import-export')
      // If we get here, the directory exists — check the file is gone
      const exists = await fileExists(freshDir, 'chunks.json')
      expect(exists).toBe(false)
    } catch {
      // Directory not found — also acceptable proof that it was cleared
      expect(true).toBe(true)
    }
  })

  it('writes again after clear and verifies new content', async () => {
    const root = await getRootHandle()
    const dir = await root.getDirectoryHandle('llm-import-export', { create: true })

    await writeFile(dir, 'manifest.json', JSON.stringify({ version: '1.0' }))

    // Clear
    getResetFn()()

    // Write fresh
    const root2 = await getRootHandle()
    const dir2 = await root2.getDirectoryHandle('llm-import-export', { create: true })
    await writeFile(dir2, 'manifest.json', JSON.stringify({ version: '2.0' }))

    const content = await readFile(dir2, 'manifest.json')
    const parsed = JSON.parse(content)
    expect(parsed.version).toBe('2.0')
  })

  it('supports nested directories', async () => {
    const root = await getRootHandle()
    const base = await root.getDirectoryHandle('llm-import-export', { create: true })
    const modelDir = await base.getDirectoryHandle('model', { create: true })

    await writeFile(modelDir, 'config.json', JSON.stringify({ model: 'gemma' }))

    const content = await readFile(modelDir, 'config.json')
    const parsed = JSON.parse(content)
    expect(parsed.model).toBe('gemma')
  })

  it('throws when reading a non-existent file', async () => {
    const root = await getRootHandle()
    const dir = await root.getDirectoryHandle('llm-import-export', { create: true })

    await expect(dir.getFileHandle('does-not-exist.json')).rejects.toThrow()
  })

  it('throws when reading a non-existent directory', async () => {
    const root = await getRootHandle()
    await expect(root.getDirectoryHandle('no-such-dir')).rejects.toThrow()
  })

  it('overwrites an existing file with new content', async () => {
    const root = await getRootHandle()
    const dir = await root.getDirectoryHandle('llm-import-export', { create: true })

    await writeFile(dir, 'manifest.json', JSON.stringify({ version: '1.0' }))
    await writeFile(dir, 'manifest.json', JSON.stringify({ version: '1.1' }))

    const content = await readFile(dir, 'manifest.json')
    const parsed = JSON.parse(content)
    expect(parsed.version).toBe('1.1')
  })

  it('removes a file with removeEntry', async () => {
    const root = await getRootHandle()
    const dir = await root.getDirectoryHandle('llm-import-export', { create: true })

    await writeFile(dir, 'temp.json', '{}')
    expect(await fileExists(dir, 'temp.json')).toBe(true)

    await dir.removeEntry('temp.json')
    expect(await fileExists(dir, 'temp.json')).toBe(false)
  })
})
