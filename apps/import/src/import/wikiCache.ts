import { readFile, writeFile } from './opfs'
import type { InferenceEngine } from '../types'

function slugify(source: string): string {
  return source.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase().slice(0, 80)
}

/**
 * Fetch a wiki page for `source` (document filename) from the OPFS cache.
 *
 * Cache miss: the model synthesizes a concise 3–5 sentence reference summary
 * from the provided RAG context, then persists the result to OPFS.
 *
 * Cache hit: reads directly from OPFS — zero model calls.
 *
 * Returns empty string on any failure so callers can degrade gracefully.
 */
export async function fetchWikiPage(
  source: string,
  manifestHash: string,
  engine: any,
  contextText: string,
  engineType?: InferenceEngine | null,
): Promise<string> {
  const slug = slugify(source)
  const wikiPath = `wiki/${slug}.md`

  // Cache hit
  try {
    const bytes = await readFile(manifestHash, wikiPath)
    const content = new TextDecoder().decode(bytes)
    console.log(`[wikiCache] hit: ${wikiPath} (${content.length} chars)`)
    return content
  } catch {
    // File not found — synthesize below
  }

  // Synthesize with the loaded chat model.
  // Constrained prompt: small models do better with explicit output constraints.
  const prompt =
    `Write a concise 3-5 sentence reference summary for "${source}". ` +
    `Be factual and specific. Use only information from the excerpts below. ` +
    `Do not repeat the instructions.\n\nExcerpts:\n${contextText.slice(0, 2_000)}\n\nSummary:`

  let wikiContent = ''
  try {
    if (engineType === 'wllama') {
      // Wllama: use createChatCompletion directly
      wikiContent = await engine.createChatCompletion(
        [{ role: 'user', content: prompt }],
        { nPredict: 200, sampling: { temp: 0.1 } },
      )
      wikiContent = (wikiContent || '').trim()
    } else {
      // WebLLM: OpenAI-compatible API
      const response = await engine.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200,
        temperature: 0.1,
      })
      wikiContent = response.choices[0]?.message?.content?.trim() ?? ''
    }
  } catch (err) {
    console.warn('[wikiCache] synthesis failed:', err)
    return ''
  }

  if (!wikiContent) return ''

  // Persist to OPFS — non-fatal if write fails
  try {
    await writeFile(manifestHash, wikiPath, new TextEncoder().encode(wikiContent))
    console.log(`[wikiCache] written: ${wikiPath} (${wikiContent.length} chars)`)
  } catch (err) {
    console.warn('[wikiCache] OPFS write failed (non-fatal):', err)
  }

  return wikiContent
}
