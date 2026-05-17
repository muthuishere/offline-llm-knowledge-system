import type { Skill } from '../types'

/**
 * Result of parsing a SKILL.md file.
 * `body` is the markdown content the model is shown when the skill is invoked.
 */
export interface ParsedSkill {
  name: string
  description: string
  parameters?: Record<string, unknown>
  body: string
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

/**
 * Parse a SKILL.md file with YAML-ish frontmatter.
 *
 * Required keys: `name`, `description`. Optional: `parameters` (inline JSON Schema).
 * Only flat string keys + a single JSON-string `parameters` value are recognised —
 * the format intentionally avoids a full YAML dependency.
 */
export function parseSkillMarkdown(source: string): ParsedSkill {
  const match = FRONTMATTER_RE.exec(source)
  if (!match) {
    throw new Error('SKILL.md must begin with a `---` frontmatter block')
  }

  const [, frontmatter, body] = match
  const meta: Record<string, string> = {}
  for (const rawLine of frontmatter.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const colonAt = line.indexOf(':')
    if (colonAt === -1) {
      throw new Error(`Invalid frontmatter line (missing colon): ${line}`)
    }
    const key = line.slice(0, colonAt).trim()
    const value = line.slice(colonAt + 1).trim().replace(/^["']|["']$/g, '')
    meta[key] = value
  }

  if (!meta.name) throw new Error('SKILL.md frontmatter missing required key: name')
  if (!meta.description) throw new Error('SKILL.md frontmatter missing required key: description')

  const parsed: ParsedSkill = {
    name: meta.name,
    description: meta.description,
    body: body.trim(),
  }
  if (meta.parameters) {
    try {
      parsed.parameters = JSON.parse(meta.parameters) as Record<string, unknown>
    } catch (err) {
      throw new Error('SKILL.md frontmatter parameters is not valid JSON: ' + (err as Error).message)
    }
  }
  return parsed
}

/**
 * Derive a skill `id` from its folder name.
 * Lowercases, replaces non-alphanumerics with `-`, collapses repeats, trims edges.
 */
export function slugifySkillId(folderName: string): string {
  return folderName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Build the Skill manifest entry from a parsed SKILL.md and the folder layout.
 */
export function buildSkillMeta(folderName: string, parsed: ParsedSkill, hasScript: boolean): Skill {
  return {
    id: slugifySkillId(folderName),
    name: parsed.name,
    description: parsed.description,
    has_script: hasScript,
    ...(parsed.parameters ? { parameters: parsed.parameters } : {}),
  }
}
