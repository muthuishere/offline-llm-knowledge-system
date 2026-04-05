// OPFS utilities for the import pipeline

const OPFS_ROOT = 'llm-import-export'

async function getRootDir(): Promise<FileSystemDirectoryHandle> {
  const root = await navigator.storage.getDirectory()
  return root.getDirectoryHandle(OPFS_ROOT, { create: true })
}

export async function getKnowledgeBaseDir(manifestHash: string): Promise<FileSystemDirectoryHandle> {
  const root = await getRootDir()
  return root.getDirectoryHandle(manifestHash, { create: true })
}

export async function findExistingKnowledgeBase(): Promise<string | null> {
  try {
    const root = await getRootDir()
    for await (const [name, handle] of root as any) {
      if (handle.kind === 'directory') {
        return name
      }
    }
    return null
  } catch {
    return null
  }
}

export async function isExtractionComplete(manifestHash: string): Promise<boolean> {
  try {
    const dir = await getKnowledgeBaseDir(manifestHash)
    await dir.getFileHandle('extraction_complete')
    return true
  } catch {
    return false
  }
}

async function ensureDir(
  base: FileSystemDirectoryHandle,
  parts: string[],
): Promise<FileSystemDirectoryHandle> {
  let current = base
  for (const part of parts) {
    current = await current.getDirectoryHandle(part, { create: true })
  }
  return current
}

export async function writeFile(
  manifestHash: string,
  path: string,
  data: Uint8Array,
): Promise<void> {
  const dir = await getKnowledgeBaseDir(manifestHash)
  const parts = path.split('/')
  const fileName = parts.pop()!
  const parentDir = parts.length > 0 ? await ensureDir(dir, parts) : dir
  const fileHandle = await parentDir.getFileHandle(fileName, { create: true })
  const writable = await fileHandle.createWritable()
  // Copy to a plain ArrayBuffer to satisfy FileSystemWritableFileStream typing
  const plainBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer
  await writable.write(plainBuffer)
  await writable.close()
}

export async function readFile(manifestHash: string, path: string): Promise<Uint8Array> {
  const dir = await getKnowledgeBaseDir(manifestHash)
  const parts = path.split('/')
  const fileName = parts.pop()!
  let parentDir = dir
  for (const part of parts) {
    parentDir = await parentDir.getDirectoryHandle(part)
  }
  const fileHandle = await parentDir.getFileHandle(fileName)
  const file = await fileHandle.getFile()
  const buffer = await file.arrayBuffer()
  return new Uint8Array(buffer)
}

export async function markExtractionComplete(manifestHash: string): Promise<void> {
  const dir = await getKnowledgeBaseDir(manifestHash)
  const fileHandle = await dir.getFileHandle('extraction_complete', { create: true })
  const writable = await fileHandle.createWritable()
  await writable.write(new Uint8Array(0))
  await writable.close()
}

export async function clearKnowledgeBase(): Promise<void> {
  try {
    const root = await navigator.storage.getDirectory()
    await root.removeEntry(OPFS_ROOT, { recursive: true })
  } catch {
    // Already cleared or doesn't exist
  }
}
