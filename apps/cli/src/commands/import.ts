import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { unzip, strFromU8 } from 'fflate'
import { create, insertMultiple, search } from '@orama/orama'
import { log } from '../lib/log.ts'
import { EMBED_MODEL, type Chunk, type Manifest, type Skill } from '../types.ts'
import type { ParsedArgs as Argv } from '../lib/argv.ts'

export async function runImport(args: Argv): Promise<void> {
  const zipPath = args.positional[0]
  if (!zipPath) throw new Error('import: missing <kb.zip> positional argument')

  const abs = resolve(zipPath)
  log.step(`Reading ${abs}`)
  const bytes = await readFile(abs)
  const files = await unzipAsync(new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength))

  const manifestBytes = files['manifest.json']
  if (!manifestBytes) throw new Error('zip does not contain manifest.json')
  const manifest = JSON.parse(strFromU8(manifestBytes)) as Manifest

  log.info(`  version=${manifest.version} · created=${manifest.created_at}`)
  log.info(`  ${manifest.sources.length} source(s) · ${manifest.total_chunks} chunks`)
  log.info(`  chat_model=${manifest.chat_model.name} (supports_tools=${manifest.chat_model.supports_tools})`)
  log.info(`  ${(manifest.skills ?? []).length} skill(s) bundled`)

  if (args.flags['list-skills'] === true) {
    listSkills(manifest.skills ?? [], files)
    return
  }

  if (typeof args.flags.question === 'string') {
    const topK = Number(args.flags['top-k'] ?? 5)
    await retrieve(files, args.flags.question, topK)
    return
  }

  log.info('')
  log.info('Pass --question "..." to retrieve top-k chunks, or --list-skills to inspect skills.')
  log.warn('LLM inference (chat) on the CLI requires a node runtime (node-llama-cpp);')
  log.warn('that wiring lands in a follow-up commit.')
}

function listSkills(skills: Skill[], files: Record<string, Uint8Array>): void {
  if (skills.length === 0) {
    log.info('No skills bundled.')
    return
  }
  for (const skill of skills) {
    log.info('')
    log.info(`  ${skill.id}${skill.has_script ? ' [tool.js]' : ''}`)
    log.info(`    name: ${skill.name}`)
    log.info(`    description: ${skill.description}`)
    if (skill.parameters) {
      log.info(`    parameters: ${JSON.stringify(skill.parameters)}`)
    }
    const folderName = findSkillFolder(files, skill.id)
    if (folderName) {
      const skillMd = files[`skills/${folderName}/SKILL.md`]
      if (skillMd) {
        const body = strFromU8(skillMd).split(/^---\s*$/m).slice(2).join('').trim()
        if (body) {
          const indented = body.split('\n').map(l => '      ' + l).join('\n')
          log.info('    body:')
          log.info(indented)
        }
      }
    }
  }
}

function findSkillFolder(files: Record<string, Uint8Array>, id: string): string | null {
  for (const path of Object.keys(files)) {
    const m = /^skills\/([^/]+)\/SKILL\.md$/.exec(path)
    if (m && (m[1] === id || m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === id)) {
      return m[1]
    }
  }
  return null
}

async function retrieve(files: Record<string, Uint8Array>, query: string, topK: number): Promise<void> {
  const chunksBytes = files['chunks.json']
  if (!chunksBytes) throw new Error('zip does not contain chunks.json')
  const chunks = JSON.parse(strFromU8(chunksBytes)) as Chunk[]

  log.step(`Rebuilding Orama index (${chunks.length} chunks)`)
  const db = await create({
    schema: {
      id: 'string',
      text: 'string',
      source: 'string',
      vector: `vector[${EMBED_MODEL.dimensions}]`,
    } as const,
    components: { tokenizer: { stemming: false } },
  })
  await insertMultiple(
    db,
    chunks.map(c => ({ id: c.id, text: c.text, source: c.source, vector: c.vector })),
  )

  log.step('Embedding query (downloads bge-small-en-v1.5 on first run)')
  const { pipeline } = await import('@huggingface/transformers')
  const extractor = await pipeline('feature-extraction', 'Xenova/bge-small-en-v1.5')
  const out = await extractor(query, { pooling: 'mean', normalize: true })
  const vector = Array.from(out.data as Float32Array)

  log.step(`Searching (top-${topK})`)
  const results = await search(db, {
    mode: 'hybrid',
    term: query,
    vector: { value: vector, property: 'vector' },
    limit: topK,
  })

  log.ok(`Got ${results.hits.length} result(s) in ${results.elapsed.formatted}`)
  for (let i = 0; i < results.hits.length; i++) {
    const hit = results.hits[i]
    const doc = hit.document as { source?: string; text?: string }
    process.stdout.write('\n')
    process.stdout.write(`#${i + 1}  score=${hit.score.toFixed(4)}  source=${doc.source ?? '?'}\n`)
    process.stdout.write(`${(doc.text ?? '').trim()}\n`)
  }
}

function unzipAsync(bytes: Uint8Array): Promise<Record<string, Uint8Array>> {
  return new Promise((resolveP, reject) => {
    unzip(bytes, (err, data) => err ? reject(err) : resolveP(data))
  })
}
