// 1 token ≈ 4 characters (word-based approximation)
const CHARS_PER_TOKEN = 4

/**
 * Split text into overlapping chunks.
 * @param text      Input text to chunk
 * @param chunkSize Desired chunk size in tokens
 * @param overlap   Overlap between consecutive chunks in tokens
 * @returns Array of text chunks
 */
export function chunkText(text: string, chunkSize: number, overlap: number): string[] {
  if (!text || text.trim().length === 0) {
    return []
  }

  const chunkChars = chunkSize * CHARS_PER_TOKEN
  const overlapChars = overlap * CHARS_PER_TOKEN

  // If the entire text fits in one chunk, return it as-is
  if (text.length <= chunkChars) {
    return [text]
  }

  const chunks: string[] = []
  let start = 0

  while (start < text.length) {
    const end = Math.min(start + chunkChars, text.length)
    const chunk = text.slice(start, end)
    chunks.push(chunk)

    // If we've reached the end, stop
    if (end >= text.length) {
      break
    }

    // Advance by (chunkChars - overlapChars) to create overlap
    const step = chunkChars - overlapChars
    // Ensure we always make forward progress
    start += step > 0 ? step : 1
  }

  return chunks
}
