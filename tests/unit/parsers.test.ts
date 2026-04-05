import { describe, it, expect, vi, beforeEach } from 'vitest'

// ---------------------------------------------------------------------------
// Mock heavy external dependencies before importing parsers
// ---------------------------------------------------------------------------

vi.mock('pdfjs-dist', () => {
  return {
    GlobalWorkerOptions: { workerSrc: '' },
    getDocument: vi.fn().mockReturnValue({
      promise: Promise.resolve({
        numPages: 2,
        getPage: vi.fn().mockResolvedValue({
          getTextContent: vi.fn().mockResolvedValue({
            items: [
              { str: 'Hello' },
              { str: 'World' },
            ],
          }),
        }),
      }),
    }),
  }
})

vi.mock('mammoth', () => {
  return {
    default: {
      extractRawText: vi.fn().mockResolvedValue({ value: 'Extracted DOCX text content.' }),
    },
  }
})

import { parseTxt, parseMd, parsePdf, parseDocx } from '../../src/lib/parsers'
import * as pdfjsLib from 'pdfjs-dist'
import mammoth from 'mammoth'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toArrayBuffer(text: string): ArrayBuffer {
  return new TextEncoder().encode(text).buffer
}

// ---------------------------------------------------------------------------
// parseTxt
// ---------------------------------------------------------------------------

describe('parseTxt', () => {
  it('decodes an ArrayBuffer to the original string', async () => {
    const input = 'Hello, plain text world!'
    const buffer = toArrayBuffer(input)
    const result = await parseTxt(buffer)
    expect(result).toBe(input)
  })

  it('handles multi-line text', async () => {
    const input = 'Line 1\nLine 2\nLine 3'
    const buffer = toArrayBuffer(input)
    const result = await parseTxt(buffer)
    expect(result).toBe(input)
  })

  it('handles empty buffer', async () => {
    const result = await parseTxt(new ArrayBuffer(0))
    expect(result).toBe('')
  })

  it('handles unicode characters', async () => {
    const input = 'こんにちは世界 — Hello World'
    const buffer = toArrayBuffer(input)
    const result = await parseTxt(buffer)
    expect(result).toBe(input)
  })
})

// ---------------------------------------------------------------------------
// parseMd
// ---------------------------------------------------------------------------

describe('parseMd', () => {
  it('returns the raw markdown text as-is', async () => {
    const input = '# Heading\n\n- item 1\n- item 2\n\nParagraph text.'
    const buffer = toArrayBuffer(input)
    const result = await parseMd(buffer)
    expect(result).toBe(input)
  })

  it('preserves markdown formatting characters', async () => {
    const input = '**bold** _italic_ `code` [link](http://example.com)'
    const buffer = toArrayBuffer(input)
    const result = await parseMd(buffer)
    expect(result).toBe(input)
  })

  it('handles empty buffer', async () => {
    const result = await parseMd(new ArrayBuffer(0))
    expect(result).toBe('')
  })

  it('returns a string (not undefined or null)', async () => {
    const buffer = toArrayBuffer('# Test')
    const result = await parseMd(buffer)
    expect(typeof result).toBe('string')
  })
})

// ---------------------------------------------------------------------------
// parsePdf (stubbed)
// ---------------------------------------------------------------------------

describe('parsePdf', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    const mockGetPage = vi.fn().mockResolvedValue({
      getTextContent: vi.fn().mockResolvedValue({
        items: [{ str: 'Page text from PDF.' }],
      }),
    })
    ;(pdfjsLib.getDocument as ReturnType<typeof vi.fn>).mockReturnValue({
      promise: Promise.resolve({
        numPages: 1,
        getPage: mockGetPage,
      }),
    })
  })

  it('calls pdfjs-dist getDocument with the buffer data', async () => {
    const buffer = new ArrayBuffer(16)
    await parsePdf(buffer)
    expect(pdfjsLib.getDocument).toHaveBeenCalledWith(
      expect.objectContaining({ data: expect.any(Uint8Array) }),
    )
  })

  it('returns a string from PDF text content', async () => {
    const buffer = new ArrayBuffer(16)
    const result = await parsePdf(buffer)
    expect(typeof result).toBe('string')
    expect(result.length).toBeGreaterThan(0)
  })

  it('joins text from multiple pages', async () => {
    const mockGetPage = vi.fn()
      .mockResolvedValueOnce({
        getTextContent: vi.fn().mockResolvedValue({ items: [{ str: 'Page 1 content' }] }),
      })
      .mockResolvedValueOnce({
        getTextContent: vi.fn().mockResolvedValue({ items: [{ str: 'Page 2 content' }] }),
      })

    ;(pdfjsLib.getDocument as ReturnType<typeof vi.fn>).mockReturnValue({
      promise: Promise.resolve({ numPages: 2, getPage: mockGetPage }),
    })

    const result = await parsePdf(new ArrayBuffer(16))
    expect(result).toContain('Page 1 content')
    expect(result).toContain('Page 2 content')
  })
})

// ---------------------------------------------------------------------------
// parseDocx (stubbed)
// ---------------------------------------------------------------------------

describe('parseDocx', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    ;(mammoth.extractRawText as ReturnType<typeof vi.fn>).mockResolvedValue({
      value: 'Extracted DOCX text content.',
    })
  })

  it('calls mammoth.extractRawText with the buffer', async () => {
    const buffer = new ArrayBuffer(32)
    await parseDocx(buffer)
    expect(mammoth.extractRawText).toHaveBeenCalledWith(
      expect.objectContaining({ arrayBuffer: buffer }),
    )
  })

  it('returns the text from mammoth result', async () => {
    const buffer = new ArrayBuffer(32)
    const result = await parseDocx(buffer)
    expect(result).toBe('Extracted DOCX text content.')
  })

  it('returns a string type', async () => {
    const result = await parseDocx(new ArrayBuffer(32))
    expect(typeof result).toBe('string')
  })
})
