import { describe, it, expect } from 'vitest'
import { parseArgv, requireFlag } from '../src/lib/argv.ts'

describe('parseArgv', () => {
  it('parses subcommand + positional + flags', () => {
    const out = parseArgv(['export', './docs', '--out', 'kb.zip', '--model', 'X'])
    expect(out.command).toBe('export')
    expect(out.positional).toEqual(['./docs'])
    expect(out.flags).toEqual({ out: 'kb.zip', model: 'X' })
  })

  it('parses --flag=value', () => {
    const out = parseArgv(['import', 'a.zip', '--top-k=10'])
    expect(out.flags['top-k']).toBe('10')
  })

  it('treats bare flag as boolean true', () => {
    const out = parseArgv(['import', 'a.zip', '--list-skills'])
    expect(out.flags['list-skills']).toBe(true)
  })

  it('falls back to no command when first token is a flag', () => {
    const out = parseArgv(['--help'])
    expect(out.command).toBeNull()
    expect(out.flags.help).toBe(true)
  })

  it('collects multiple positional args', () => {
    const out = parseArgv(['cmd', 'a', 'b', 'c'])
    expect(out.positional).toEqual(['a', 'b', 'c'])
  })

  it('treats flag value as string even when numeric-looking', () => {
    const out = parseArgv(['x', '--n', '42'])
    expect(out.flags.n).toBe('42')
  })
})

describe('requireFlag', () => {
  it('returns string flags', () => {
    const out = parseArgv(['x', '--name', 'foo'])
    expect(requireFlag(out, 'name')).toBe('foo')
  })

  it('throws on missing or boolean flag', () => {
    const out = parseArgv(['x', '--flag'])
    expect(() => requireFlag(out, 'flag')).toThrow(/--flag/)
    expect(() => requireFlag(out, 'missing')).toThrow(/--missing/)
  })
})
