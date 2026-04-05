import { describe, it, expect } from 'vitest'
import { chunkText } from '../../src/lib/chunking'

// 1 token ≈ 4 chars (matches the implementation constant)
const CHARS_PER_TOKEN = 4

describe('chunkText', () => {
  it('returns empty array for empty string', () => {
    expect(chunkText('', 512, 64)).toEqual([])
  })

  it('returns empty array for whitespace-only string', () => {
    expect(chunkText('   \n\t  ', 512, 64)).toEqual([])
  })

  it('returns single chunk when text is shorter than chunk size', () => {
    const text = 'Hello world. This is a short sentence.'
    const chunks = chunkText(text, 512, 64)
    expect(chunks).toHaveLength(1)
    expect(chunks[0]).toBe(text)
  })

  it('returns single chunk when text length equals exactly one chunk', () => {
    // Exactly 512 tokens worth of characters
    const text = 'a'.repeat(512 * CHARS_PER_TOKEN)
    const chunks = chunkText(text, 512, 64)
    expect(chunks).toHaveLength(1)
    expect(chunks[0]).toBe(text)
  })

  it('returns correct chunk count for typical input', () => {
    // Build text of 3000 tokens = 12000 chars
    // chunk_size=512 (2048 chars), overlap=64 (256 chars)
    // step = 2048 - 256 = 1792 chars
    // expected chunks: ceil(12000 / 1792) = 7 (roughly)
    const totalTokens = 3000
    const text = 'x'.repeat(totalTokens * CHARS_PER_TOKEN)
    const chunkSize = 512
    const overlap = 64

    const chunks = chunkText(text, chunkSize, overlap)
    expect(chunks.length).toBeGreaterThan(1)

    // All chunks (except possibly the last) should be exactly chunkSize * CHARS_PER_TOKEN chars
    const expectedChunkChars = chunkSize * CHARS_PER_TOKEN
    for (let i = 0; i < chunks.length - 1; i++) {
      expect(chunks[i].length).toBe(expectedChunkChars)
    }
    // Last chunk may be shorter
    expect(chunks[chunks.length - 1].length).toBeLessThanOrEqual(expectedChunkChars)
  })

  it('has overlap between consecutive chunks', () => {
    // Use a text where each character is unique so we can detect overlap
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // Build a text long enough to produce at least 2 chunks
    // chunkSize=4 tokens = 16 chars, overlap=1 token = 4 chars
    const chunkSize = 4
    const overlap = 1
    const chunkChars = chunkSize * CHARS_PER_TOKEN  // 16
    const overlapChars = overlap * CHARS_PER_TOKEN  // 4
    // Need text longer than 16 chars
    const text = alphabet.repeat(4)  // 104 chars

    const chunks = chunkText(text, chunkSize, overlap)
    expect(chunks.length).toBeGreaterThanOrEqual(2)

    // The tail of chunk[i] should equal the head of chunk[i+1]
    for (let i = 0; i < chunks.length - 1; i++) {
      const tailOfPrev = chunks[i].slice(chunkChars - overlapChars)
      const headOfNext = chunks[i + 1].slice(0, overlapChars)
      expect(tailOfPrev).toBe(headOfNext)
    }
  })

  it('each chunk does not exceed the chunk size in chars', () => {
    const text = 'The quick brown fox jumps over the lazy dog. '.repeat(60)
    const chunkSize = 16
    const overlap = 2
    const maxChars = chunkSize * CHARS_PER_TOKEN

    const chunks = chunkText(text, chunkSize, overlap)
    for (const chunk of chunks) {
      expect(chunk.length).toBeLessThanOrEqual(maxChars)
    }
  })

  it('concatenation of unique regions covers the entire original text', () => {
    // With overlap=0, chunks should reconstruct the original text exactly
    const text = 'a'.repeat(512) + 'b'.repeat(512) + 'c'.repeat(512)
    const chunks = chunkText(text, 128, 0)
    const reconstructed = chunks.join('')
    expect(reconstructed).toBe(text)
  })

  it('text with single character still produces output', () => {
    const chunks = chunkText('x', 512, 64)
    expect(chunks).toHaveLength(1)
    expect(chunks[0]).toBe('x')
  })
})
