import { describe, it, expect } from 'vitest'
import { parseSkillMarkdown, slugifySkillId, buildSkillMeta, skillToOpenAITool } from '../../src/lib/skill'

describe('parseSkillMarkdown', () => {
  it('extracts name, description, and body from valid frontmatter', () => {
    const src = `---
name: cite-source
description: Cite the exact source file and chunk for each claim.
---
When asked to cite, return the source filename and chunk id.
`
    const parsed = parseSkillMarkdown(src)
    expect(parsed.name).toBe('cite-source')
    expect(parsed.description).toBe('Cite the exact source file and chunk for each claim.')
    expect(parsed.body).toBe('When asked to cite, return the source filename and chunk id.')
  })

  it('throws when frontmatter delimiter is missing', () => {
    expect(() => parseSkillMarkdown('no frontmatter here')).toThrow(/frontmatter/)
  })

  it('throws when required keys are missing', () => {
    expect(() => parseSkillMarkdown('---\nname: x\n---\nbody')).toThrow(/description/)
    expect(() => parseSkillMarkdown('---\ndescription: y\n---\nbody')).toThrow(/name/)
  })

  it('parses inline JSON parameters', () => {
    const src = `---
name: x
description: y
parameters: {"type":"object","properties":{"q":{"type":"string"}}}
---
body
`
    expect(parseSkillMarkdown(src).parameters).toEqual({
      type: 'object',
      properties: { q: { type: 'string' } },
    })
  })
})

describe('slugifySkillId', () => {
  it('produces a clean dash-separated id', () => {
    expect(slugifySkillId('Kb Deep Search!')).toBe('kb-deep-search')
  })
})

describe('skillToOpenAITool', () => {
  it('returns an OpenAI-format function tool', () => {
    const tool = skillToOpenAITool(buildSkillMeta('search', {
      name: 'search',
      description: 'Search docs.',
      body: '',
      parameters: { type: 'object', properties: { q: { type: 'string' } }, required: ['q'] },
    }, true))
    expect(tool.type).toBe('function')
    expect(tool.function.name).toBe('search')
    expect(tool.function.description).toBe('Search docs.')
    expect(tool.function.parameters).toEqual({
      type: 'object',
      properties: { q: { type: 'string' } },
      required: ['q'],
    })
  })

  it('falls back to empty object schema when parameters absent', () => {
    const tool = skillToOpenAITool({
      id: 'no-args',
      name: 'no-args',
      description: 'No args.',
      has_script: false,
    })
    expect(tool.function.parameters).toEqual({
      type: 'object',
      properties: {},
      additionalProperties: false,
    })
  })
})
