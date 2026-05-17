import { describe, it, expect } from 'vitest'
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { parseSkillMarkdown, slugifySkillId, loadSkillsDir } from '../src/lib/skill.ts'

describe('parseSkillMarkdown (cli mirror)', () => {
  it('parses frontmatter + body', () => {
    const parsed = parseSkillMarkdown('---\nname: x\ndescription: y\n---\nbody')
    expect(parsed.name).toBe('x')
    expect(parsed.description).toBe('y')
    expect(parsed.body).toBe('body')
  })
})

describe('slugifySkillId', () => {
  it('produces dash-separated lowercase', () => {
    expect(slugifySkillId('Kb Deep Search!')).toBe('kb-deep-search')
  })
})

describe('loadSkillsDir', () => {
  it('returns empty array for non-existent dir', async () => {
    const out = await loadSkillsDir(join(tmpdir(), 'does-not-exist-' + Date.now()))
    expect(out).toEqual([])
  })

  it('loads skills with and without tool.js', async () => {
    const root = await mkdtemp(join(tmpdir(), 'kb-skills-'))
    await mkdir(join(root, 'cite-source'), { recursive: true })
    await writeFile(join(root, 'cite-source', 'SKILL.md'),
      '---\nname: cite-source\ndescription: Cite sources.\n---\nAlways cite the file.\n')

    await mkdir(join(root, 'kb-search'), { recursive: true })
    await writeFile(join(root, 'kb-search', 'SKILL.md'),
      '---\nname: kb-search\ndescription: Search docs.\n---\nUse for deep retrieval.\n')
    await writeFile(join(root, 'kb-search', 'tool.js'),
      'export default async ({ query }) => ({ ok: true, query })\n')

    const skills = await loadSkillsDir(root)
    expect(skills).toHaveLength(2)

    const cite = skills.find(s => s.meta.id === 'cite-source')!
    expect(cite.meta.has_script).toBe(false)
    expect(cite.script).toBeUndefined()
    expect(cite.body).toContain('Always cite the file.')

    const kb = skills.find(s => s.meta.id === 'kb-search')!
    expect(kb.meta.has_script).toBe(true)
    expect(kb.script).toBeDefined()
    expect(kb.body).toContain('Use for deep retrieval.')
  })

  it('skips folders without SKILL.md', async () => {
    const root = await mkdtemp(join(tmpdir(), 'kb-skills-empty-'))
    await mkdir(join(root, 'no-skill'), { recursive: true })
    await writeFile(join(root, 'no-skill', 'README.txt'), 'hi')

    const skills = await loadSkillsDir(root)
    expect(skills).toHaveLength(0)
  })
})
