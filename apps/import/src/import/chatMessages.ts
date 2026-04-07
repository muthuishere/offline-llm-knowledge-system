import type { Chunk, ChatMessage, Manifest } from '../types'

export interface WebLLMMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

// WebLLM uses ~4 chars per token. Phi-3-mini has a 4096-token context window.
// Reserve ~500 tokens for model output → usable budget ≈ 3500 tokens ≈ 14000 chars.
const MAX_PROMPT_CHARS = 14_000

// Per-chunk text cap (applies to both RAG and graph slots).
const MAX_CHUNK_CHARS = 1_100

// System prompt cap — kept tiny and static for small models.
const MAX_SYSTEM_CHARS = 300

// Slot budgets (chars). Order in user turn: wiki → graph → RAG.
// wiki:  ~800 tokens  → 3200 chars  (fixed cap, first slot, highest priority)
// graph: ~1750 tokens → 7000 chars  (50% of retrieval budget)
// rag:   ~875 tokens  → 3500 chars  (25% of retrieval budget)
const MAX_WIKI_CHARS = 3_200
const MAX_GRAPH_CHARS = 7_000
const MAX_RAG_CHARS = 3_500

// RAG-specific suffix appended to the extracted identity.
const RAG_SUFFIX =
  ' Write in complete sentences. Do not repeat the question.' +
  ' If the documents do not contain the answer, say so.'

/** Extract the first plain-text paragraph from system instructions. */
function extractSystemIdentity(raw: string): string {
  const firstSection = raw.split(/\n##|\n#|\n-\s|\n\*/)[0].trim()
  const identity =
    firstSection.length > MAX_SYSTEM_CHARS
      ? firstSection.slice(0, MAX_SYSTEM_CHARS).trimEnd() + '…'
      : firstSection
  return identity + RAG_SUFFIX
}

/**
 * Format a list of chunks into a labelled text block, respecting a total char budget.
 * Stops adding chunks once the budget is exhausted.
 */
function formatChunks(chunks: Chunk[], maxTotalChars: number, label: string): string {
  const parts: string[] = []
  let used = 0
  for (let i = 0; i < chunks.length; i++) {
    const text =
      chunks[i].text.length > MAX_CHUNK_CHARS
        ? chunks[i].text.slice(0, MAX_CHUNK_CHARS).trimEnd() + '…'
        : chunks[i].text
    const entry = `[${label} ${i + 1} — ${chunks[i].source}]\n${text}`
    if (used + entry.length > maxTotalChars) break
    parts.push(entry)
    used += entry.length
  }
  return parts.join('\n\n')
}

export function buildChatMessages(
  messages: ChatMessage[],
  query: string,
  ragChunks: Chunk[],
  manifest: Manifest | null,
  extra?: { wikiContent?: string; graphChunks?: Chunk[] },
): WebLLMMessage[] {
  // System prompt: tiny and static.
  const rawInstructions =
    manifest?.system_instructions?.trim() || 'You are a helpful assistant.'
  const systemContent = extractSystemIdentity(rawInstructions)

  // Slot 1 — Wiki (highest priority, first in context)
  const wikiText = extra?.wikiContent
    ? `[WIKI]\n${extra.wikiContent.slice(0, MAX_WIKI_CHARS)}`
    : ''

  // Slot 2 — Graph neighborhood (50% of retrieval budget)
  const graphText =
    extra?.graphChunks?.length
      ? `[GRAPH CONTEXT]\n${formatChunks(extra.graphChunks, MAX_GRAPH_CHARS, 'GRAPH')}`
      : ''

  // Slot 3 — RAG chunks (25% of retrieval budget)
  const ragText = ragChunks.length
    ? `[RETRIEVED DOCS]\n${formatChunks(ragChunks, MAX_RAG_CHARS, 'DOC')}`
    : ''

  const contextParts = [wikiText, graphText, ragText].filter(Boolean)
  const userContent =
    contextParts.length > 0
      ? `${contextParts.join('\n\n')}\n\nQuestion: ${query}`
      : query

  // History budget: drop oldest [user, assistant] pairs until we fit.
  let history: WebLLMMessage[] = messages.map((m) => ({ role: m.role, content: m.content }))
  const calcTotal = (hist: WebLLMMessage[]) =>
    systemContent.length +
    hist.reduce((n, m) => n + m.content.length, 0) +
    userContent.length

  while (calcTotal(history) > MAX_PROMPT_CHARS && history.length >= 2) {
    history = history.slice(2)
    console.log(
      '[chatMessages] History trimmed: dropped oldest message pair, remaining:',
      history.length,
    )
  }

  const result: WebLLMMessage[] = [
    { role: 'system', content: systemContent },
    ...history,
    { role: 'user', content: userContent },
  ]

  console.log(
    '[chatMessages] system:', systemContent.length,
    'chars | wiki:', wikiText.length,
    '| graph:', graphText.length,
    '| rag:', ragText.length,
    '| history:', history.length, 'msgs',
    '| total:', calcTotal(history), 'chars',
  )

  return result
}
