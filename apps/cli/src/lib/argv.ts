/**
 * Tiny argv parser. No external dep, no fancy validation —
 * just enough to dispatch subcommands and pick up `--flag value` / `--flag=value`.
 */
export interface ParsedArgs {
  command: string | null
  positional: string[]
  flags: Record<string, string | boolean>
}

export function parseArgv(argv: string[]): ParsedArgs {
  const out: ParsedArgs = { command: null, positional: [], flags: {} }
  let i = 0

  if (argv[i] && !argv[i].startsWith('-')) {
    out.command = argv[i]
    i++
  }

  while (i < argv.length) {
    const token = argv[i]
    if (token.startsWith('--')) {
      const eqAt = token.indexOf('=')
      if (eqAt !== -1) {
        out.flags[token.slice(2, eqAt)] = token.slice(eqAt + 1)
        i++
      } else {
        const key = token.slice(2)
        const next = argv[i + 1]
        if (next !== undefined && !next.startsWith('-')) {
          out.flags[key] = next
          i += 2
        } else {
          out.flags[key] = true
          i++
        }
      }
    } else if (token.startsWith('-') && token.length > 1) {
      out.flags[token.slice(1)] = true
      i++
    } else {
      out.positional.push(token)
      i++
    }
  }

  return out
}

export function requireFlag(args: ParsedArgs, name: string): string {
  const v = args.flags[name]
  if (typeof v !== 'string') {
    throw new Error(`Missing required flag: --${name}`)
  }
  return v
}
