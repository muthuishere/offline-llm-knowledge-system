import { parseArgv } from './lib/argv.ts'
import { log } from './lib/log.ts'

const USAGE = `kb — offline LLM knowledge-base toolkit

Usage:
  kb export <docs-dir> [--out kb.zip] [--model <id>] [--skills <dir>] [--system <text>]
  kb import <kb.zip> [--question <text>] [--top-k 5] [--list-skills]
  kb help

Examples:
  kb export ./docs --out ./knowledge-base.zip --skills ./skills
  kb import ./knowledge-base.zip --question "What is the retry limit?"
  kb import ./knowledge-base.zip --list-skills
`

async function main(): Promise<void> {
  const args = parseArgv(process.argv.slice(2))

  if (!args.command || args.command === 'help' || args.flags.help === true || args.flags.h === true) {
    process.stdout.write(USAGE)
    return
  }

  switch (args.command) {
    case 'export': {
      const { runExport } = await import('./commands/export.ts')
      await runExport(args)
      return
    }
    case 'import': {
      const { runImport } = await import('./commands/import.ts')
      await runImport(args)
      return
    }
    default:
      log.error(`Unknown command: ${args.command}`)
      process.stdout.write(USAGE)
      process.exit(2)
  }
}

main().catch(err => {
  log.error((err as Error).message)
  if (process.env.KB_DEBUG) console.error(err)
  process.exit(1)
})
