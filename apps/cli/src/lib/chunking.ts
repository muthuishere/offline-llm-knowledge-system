// Mirror of apps/export/src/lib/chunking.ts. Pure, no browser deps.
// Consolidation into a shared package is a planned follow-up.

const CHARS_PER_TOKEN = 4

export function chunkText(text: string, chunkSize: number, overlap: number): string[] {
  if (!text || text.trim().length === 0) return []

  const chunkChars = chunkSize * CHARS_PER_TOKEN
  const overlapChars = overlap * CHARS_PER_TOKEN

  if (text.length <= chunkChars) return [text]

  const chunks: string[] = []
  let start = 0
  while (start < text.length) {
    const end = Math.min(start + chunkChars, text.length)
    chunks.push(text.slice(start, end))
    if (end >= text.length) break
    const step = chunkChars - overlapChars
    start += step > 0 ? step : 1
  }
  return chunks
}
