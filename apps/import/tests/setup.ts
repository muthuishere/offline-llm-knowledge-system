// Vitest global setup: mock OPFS, @xenova/transformers, and @mlc-ai/web-llm

import { vi } from 'vitest'

// ---------------------------------------------------------------------------
// In-memory OPFS mock
// ---------------------------------------------------------------------------

interface MemEntry {
  type: 'file' | 'directory'
  content?: Uint8Array
  children?: Map<string, MemEntry>
}

function makeDir(): MemEntry {
  return { type: 'directory', children: new Map() }
}

function makeFile(content: Uint8Array = new Uint8Array()): MemEntry {
  return { type: 'file', content }
}

class MemFileHandle {
  constructor(private entry: MemEntry) {}

  async getFile(): Promise<{ arrayBuffer(): Promise<ArrayBuffer>; text(): Promise<string> }> {
    const buf = this.entry.content ?? new Uint8Array()
    return {
      arrayBuffer: async () => buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
      text: async () => new TextDecoder().decode(buf),
    }
  }

  async createWritable(): Promise<{ write(data: ArrayBuffer | Uint8Array | string): Promise<void>; close(): Promise<void> }> {
    const entry = this.entry
    return {
      async write(data: ArrayBuffer | Uint8Array | string) {
        if (typeof data === 'string') {
          entry.content = new TextEncoder().encode(data)
        } else if (data instanceof ArrayBuffer) {
          entry.content = new Uint8Array(data)
        } else {
          entry.content = data
        }
      },
      async close() {},
    }
  }
}

class MemDirHandle {
  constructor(
    public name: string,
    private entry: MemEntry,
  ) {}

  async getDirectoryHandle(
    name: string,
    opts: { create?: boolean } = {},
  ): Promise<MemDirHandle> {
    const children = this.entry.children!
    if (!children.has(name)) {
      if (!opts.create) throw new DOMException(`${name} not found`, 'NotFoundError')
      children.set(name, makeDir())
    }
    const child = children.get(name)!
    if (child.type !== 'directory') throw new DOMException(`${name} is not a directory`, 'TypeMismatchError')
    return new MemDirHandle(name, child)
  }

  async getFileHandle(
    name: string,
    opts: { create?: boolean } = {},
  ): Promise<MemFileHandle> {
    const children = this.entry.children!
    if (!children.has(name)) {
      if (!opts.create) throw new DOMException(`${name} not found`, 'NotFoundError')
      children.set(name, makeFile())
    }
    const child = children.get(name)!
    if (child.type !== 'file') throw new DOMException(`${name} is not a file`, 'TypeMismatchError')
    return new MemFileHandle(child)
  }

  async removeEntry(name: string, _opts?: { recursive?: boolean }): Promise<void> {
    this.entry.children!.delete(name)
  }

  async *keys(): AsyncIterable<string> {
    for (const key of this.entry.children!.keys()) {
      yield key
    }
  }

  async *values(): AsyncIterable<MemDirHandle | MemFileHandle> {
    for (const [, child] of this.entry.children!) {
      if (child.type === 'directory') yield new MemDirHandle('', child)
      else yield new MemFileHandle(child)
    }
  }

  async *entries(): AsyncIterable<[string, MemDirHandle | MemFileHandle]> {
    for (const [key, child] of this.entry.children!) {
      if (child.type === 'directory') yield [key, new MemDirHandle(key, child)]
      else yield [key, new MemFileHandle(child)]
    }
  }
}

// Root in-memory directory — shared across the test session but reset between tests if needed
let rootEntry: MemEntry = makeDir()
let rootHandle: MemDirHandle = new MemDirHandle('', rootEntry)

function resetOPFS() {
  rootEntry = makeDir()
  rootHandle = new MemDirHandle('', rootEntry)
}

// Expose reset helper for tests that need a clean slate
;(globalThis as unknown as Record<string, unknown>).__resetOPFS = resetOPFS

// Patch navigator.storage.getDirectory
Object.defineProperty(globalThis, 'navigator', {
  value: {
    ...((globalThis as unknown as Record<string, unknown>).navigator ?? {}),
    storage: {
      getDirectory: async () => rootHandle,
    },
  },
  writable: true,
})

// ---------------------------------------------------------------------------
// Mock @xenova/transformers
// ---------------------------------------------------------------------------

vi.mock('@xenova/transformers', () => {
  const fakePipeline = vi.fn().mockResolvedValue(
    vi.fn().mockImplementation(async (_inputs: string | string[]) => {
      const inputs = Array.isArray(_inputs) ? _inputs : [_inputs]
      // Return zero vector of dimension 384 for each input
      const zeroVec = new Float32Array(384).fill(0)
      return inputs.map(() => ({ data: zeroVec }))
    }),
  )
  return {
    pipeline: fakePipeline,
    env: { allowLocalModels: true, useBrowserCache: false },
  }
})

// ---------------------------------------------------------------------------
// Mock @mlc-ai/web-llm
// ---------------------------------------------------------------------------

vi.mock('@mlc-ai/web-llm', () => {
  const fakeEngine = {
    chat: {
      completions: {
        create: vi.fn().mockResolvedValue({
          choices: [{ message: { content: 'Stubbed LLM response.' } }],
        }),
      },
    },
    unload: vi.fn().mockResolvedValue(undefined),
  }
  return {
    CreateMLCEngine: vi.fn().mockResolvedValue(fakeEngine),
    hasModelInCache: vi.fn().mockResolvedValue(false),
  }
})
