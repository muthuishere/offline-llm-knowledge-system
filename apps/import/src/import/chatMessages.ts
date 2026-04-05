import type { Chunk, ChatMessage, Manifest } from '../types'

export interface WebLLMMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

// WebLLM uses ~4 chars per token. Phi-3-mini has a 4096-token context window.
// We reserve ~500 tokens for model output → usable budget ≈ 3500 tokens ≈ 14000 chars.
const MAX_PROMPT_CHARS = 14_000

// Chunks live in the user message, right beside the question.
// Research: Phi-3-mini RAG best practice is 250–350 tokens per chunk ≈ 1,000–1,400 chars.
// 400-char cap was cutting answers mid-sentence, causing Phi to echo the question fragment.
const MAX_CHUNK_CHARS = 1_100

// System prompt is kept tiny and static for small models (Phi, Gemma-2B).
// Only the first paragraph of system_instructions is used — no markdown headers.
// Target ≤ 150 tokens (~120 words). Phi-3 processes system via <|system|> token wrapping.
const MAX_SYSTEM_CHARS = 300

// RAG-specific suffix appended to the extracted identity.
// Research (Amara, 2025-04-05):
//   - "Write in complete sentences" prevents terse 3-word bullet collapse in Phi
//   - "Do not repeat the question" suppresses Phi's echo-on-thin-context behaviour
//   - Explicit fallback reduces confabulation when retrieval score is low
const RAG_SUFFIX = ' Write in complete sentences. Do not repeat the question. If the documents do not contain the answer, say so.'

/** Extract the first plain-text paragraph from system instructions (before any ## heading or bullet list). */
function extractSystemIdentity(raw: string): string {
  // Split at first heading or bullet block — we only want the prose identity sentence(s)
  const firstSection = raw.split(/\n##|\n#|\n-\s|\n\*/)[0].trim()
  const identity = firstSection.length > MAX_SYSTEM_CHARS
    ? firstSection.slice(0, MAX_SYSTEM_CHARS).trimEnd() + '…'
    : firstSection
  return identity + RAG_SUFFIX
}

export function buildChatMessages(
  messages: ChatMessage[],
  query: string,
  chunks: Chunk[],
  manifest: Manifest | null,
): WebLLMMessage[] {
  // System prompt: tiny and static. Never truncated mid-thought, never changes between turns.
  const rawInstructions = manifest?.system_instructions?.trim() || 'You are a helpful assistant.'
  const systemContent = extractSystemIdentity(rawInstructions)

  // Context goes in the user message — right next to the question.
  // Small models (Phi) attend to user-turn content far better than distant system content.
  const truncatedChunks = chunks.map((c, i) => {
    const text = c.text.length > MAX_CHUNK_CHARS
      ? c.text.slice(0, MAX_CHUNK_CHARS).trimEnd() + '…'
      : c.text
    return `[DOC ${i + 1} — ${c.source}]\n${text}`
  })

  const userContent = chunks.length > 0
    ? `Context:\n${truncatedChunks.join('\n\n')}\n\nQuestion: ${query}`
    : query

  // History budget: drop oldest [user, assistant] pairs without mercy until we fit.
  // Never truncate mid-message — a half-message confuses small models more than no history.
  let history: WebLLMMessage[] = messages.map((m) => ({ role: m.role, content: m.content }))
  const calcTotal = (hist: WebLLMMessage[]) =>
    systemContent.length + hist.reduce((n, m) => n + m.content.length, 0) + userContent.length

  while (calcTotal(history) > MAX_PROMPT_CHARS && history.length >= 2) {
    history = history.slice(2) // drop oldest user+assistant pair
    console.log('[chatMessages] History trimmed: dropped oldest message pair, remaining:', history.length)
  }

  const result: WebLLMMessage[] = [
    { role: 'system', content: systemContent },
    ...history,
    { role: 'user', content: userContent },
  ]

  console.log('[chatMessages] system:', systemContent.length,
    'chars | history:', history.length,
    'msgs | user+ctx:', userContent.length,
    'chars | chunks:', chunks.length,
    '(each ≤', MAX_CHUNK_CHARS, 'chars) | total:', calcTotal(history))

  return result
}
