// Mirror of apps/{export,import}/src/lib/skill.ts. Pure, no browser deps.

import { readFile, readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'
import type { Skill } from '../types.ts'

export interface ParsedSkill {
  name: string
  description: string
  parameters?: Record<string, unknown>
  body: string
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

export function parseSkillMarkdown(source: string): ParsedSkill {
  const match = FRONTMATTER_RE.exec(source)
  if (!match) throw new Error('SKILL.md must begin with a `---` frontmatter block')

  const [, frontmatter, body] = match
  const meta: Record<string, string> = {}
  for (const rawLine of frontmatter.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const colonAt = line.indexOf(':')
    if (colonAt === -1) throw new Error(`Invalid frontmatter line (missing colon): ${line}`)
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

export function slugifySkillId(folderName: string): string {
  return folderName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function buildSkillMeta(folderName: string, parsed: ParsedSkill, hasScript: boolean): Skill {
  return {
    id: slugifySkillId(folderName),
    name: parsed.name,
    description: parsed.description,
    has_script: hasScript,
    ...(parsed.parameters ? { parameters: parsed.parameters } : {}),
  }
}

/**
 * A skill folder loaded from disk, ready to bundle into the zip.
 */
export interface LoadedSkill {
  folderName: string
  meta: Skill
  body: string             // SKILL.md body (the instruction text)
  script?: Uint8Array      // tool.js bytes if present
}

/**
 * Walk a skills/ directory and load every subfolder that contains a SKILL.md.
 */
export async function loadSkillsDir(skillsDir: string): Promise<LoadedSkill[]> {
  let entries: string[]
  try {
    entries = await readdir(skillsDir)
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return []
    throw err
  }

  const skills: LoadedSkill[] = []
  for (const name of entries) {
    const folder = join(skillsDir, name)
    const folderStat = await stat(folder).catch(() => null)
    if (!folderStat?.isDirectory()) continue

    const skillMdPath = join(folder, 'SKILL.md')
    const md = await readFile(skillMdPath, 'utf8').catch(() => null)
    if (md === null) continue

    const parsed = parseSkillMarkdown(md)

    const toolJsPath = join(folder, 'tool.js')
    const script = await readFile(toolJsPath).catch(() => null)
    const hasScript = script !== null

    skills.push({
      folderName: name,
      meta: buildSkillMeta(name, parsed, hasScript),
      body: parsed.body,
      ...(hasScript ? { script: new Uint8Array(script.buffer, script.byteOffset, script.byteLength) } : {}),
    })
  }

  return skills.sort((a, b) => a.meta.id.localeCompare(b.meta.id))
}
