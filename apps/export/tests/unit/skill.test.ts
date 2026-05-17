import { describe, it, expect } from 'vitest'
import { parseSkillMarkdown, slugifySkillId, buildSkillMeta } from '../../src/lib/skill'

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
    expect(parsed.parameters).toBeUndefined()
  })

  it('strips wrapping quotes from frontmatter values', () => {
    const src = `---
name: "hello"
description: 'world'
---
body
`
    const parsed = parseSkillMarkdown(src)
    expect(parsed.name).toBe('hello')
    expect(parsed.description).toBe('world')
  })

  it('parses inline JSON parameters', () => {
    const src = `---
name: kb-deep-search
description: Search the knowledge base.
parameters: {"type":"object","properties":{"query":{"type":"string"}},"required":["query"]}
---
Use this when you need a focused retrieval.
`
    const parsed = parseSkillMarkdown(src)
    expect(parsed.parameters).toEqual({
      type: 'object',
      properties: { query: { type: 'string' } },
      required: ['query'],
    })
  })

  it('throws when frontmatter delimiter is missing', () => {
    expect(() => parseSkillMarkdown('no frontmatter here')).toThrow(/frontmatter/)
  })

  it('throws when name is missing', () => {
    const src = `---
description: only description
---
body
`
    expect(() => parseSkillMarkdown(src)).toThrow(/name/)
  })

  it('throws when description is missing', () => {
    const src = `---
name: only-name
---
body
`
    expect(() => parseSkillMarkdown(src)).toThrow(/description/)
  })

  it('throws when parameters is not valid JSON', () => {
    const src = `---
name: x
description: y
parameters: {not json}
---
`
    expect(() => parseSkillMarkdown(src)).toThrow(/parameters/)
  })

  it('handles CRLF line endings', () => {
    const src = '---\r\nname: crlf\r\ndescription: works\r\n---\r\nbody\r\n'
    const parsed = parseSkillMarkdown(src)
    expect(parsed.name).toBe('crlf')
    expect(parsed.description).toBe('works')
  })
})

describe('slugifySkillId', () => {
  it('lowercases and dashes', () => {
    expect(slugifySkillId('Kb Deep Search')).toBe('kb-deep-search')
  })
  it('collapses runs of non-alphanumerics', () => {
    expect(slugifySkillId('foo___bar  baz!!')).toBe('foo-bar-baz')
  })
  it('trims edge dashes', () => {
    expect(slugifySkillId('--foo--')).toBe('foo')
  })
})

describe('buildSkillMeta', () => {
  it('omits parameters when absent', () => {
    const meta = buildSkillMeta('cite-source', {
      name: 'cite-source',
      description: 'Cite sources.',
      body: 'do it',
    }, false)
    expect(meta).toEqual({
      id: 'cite-source',
      name: 'cite-source',
      description: 'Cite sources.',
      has_script: false,
    })
  })

  it('includes parameters and has_script flag', () => {
    const meta = buildSkillMeta('Kb Deep Search', {
      name: 'kb-deep-search',
      description: 'Search.',
      body: '',
      parameters: { type: 'object', properties: {} },
    }, true)
    expect(meta.id).toBe('kb-deep-search')
    expect(meta.has_script).toBe(true)
    expect(meta.parameters).toEqual({ type: 'object', properties: {} })
  })
})
