import { createHash } from 'node:crypto'
import { readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { extname, join, resolve } from 'node:path'
import { zip, strToU8, gzipSync } from 'fflate'
import { create, insertMultiple, save } from '@orama/orama'
import { chunkText } from '../lib/chunking.ts'
import { loadSkillsDir } from '../lib/skill.ts'
import { log } from '../lib/log.ts'
import {
  CHUNK_OVERLAP,
  CHUNK_SIZE,
  DEFAULT_CHAT_MODEL,
  EMBED_MODEL,
  type Chunk,
  type Manifest,
  type SourceMeta,
} from '../types.ts'
import type { ParsedArgs as Argv } from '../lib/argv.ts'

const SUPPORTED_EXTS = new Set(['.txt', '.md'])

export async function runExport(args: Argv): Promise<void> {
  const docsDir = args.positional[0]
  if (!docsDir) throw new Error('export: missing <docs-dir> positional argument')

  const outPath = (args.flags.out as string | undefined) ?? './knowledge-base.zip'
  const modelId = (args.flags.model as string | undefined) ?? DEFAULT_CHAT_MODEL
  const skillsDir = args.flags.skills as string | undefined
  const systemInstructions = args.flags.system as string | undefined

  const absDocs = resolve(docsDir)
  log.step(`Scanning ${absDocs}`)
  const files = await collectFiles(absDocs)
  if (files.length === 0) throw new Error(`No .txt or .md files found under ${absDocs}`)
  log.info(`  found ${files.length} document(s)`)

  log.step('Parsing and chunking')
  const sourceMetas: SourceMeta[] = []
  const allChunks: Chunk[] = []
  for (const filePath of files) {
    const ext = extname(filePath).toLowerCase()
    const type = ext === '.md' ? 'md' : 'txt'
    const bytes = await readFile(filePath)
    const text = bytes.toString('utf8')
    const checksum = 'sha256:' + createHash('sha256').update(bytes).digest('hex')
    const name = filePath.slice(absDocs.length + 1) || filePath
    const chunks = chunkText(text, CHUNK_SIZE, CHUNK_OVERLAP)
    chunks.forEach((chunkText_, idx) => {
      allChunks.push({
        id: formatChunkId(name, idx),
        source: name,
        text: chunkText_,
        vector: [],  // populated below
      })
    })
    sourceMetas.push({ name, type, chunks: chunks.length, checksum })
    log.info(`  ${name}: ${chunks.length} chunk(s)`)
  }

  log.step('Generating embeddings (first run downloads bge-small-en-v1.5)')
  const vectors = await embedAll(allChunks.map(c => c.text))
  for (let i = 0; i < allChunks.length; i++) allChunks[i].vector = vectors[i]

  log.step('Building Orama hybrid index')
  const oramaDb = await create({
    schema: {
      id: 'string',
      text: 'string',
      source: 'string',
      vector: `vector[${EMBED_MODEL.dimensions}]`,
    } as const,
    components: { tokenizer: { stemming: false } },
  })
  await insertMultiple(
    oramaDb,
    allChunks.map(c => ({ id: c.id, text: c.text, source: c.source, vector: c.vector })),
  )
  const oramaSaved = await save(oramaDb)
  const oramaBytes = new TextEncoder().encode(JSON.stringify(oramaSaved))
  const oramaGzipped = gzipSync(oramaBytes)

  log.step('Loading skills')
  const loadedSkills = skillsDir ? await loadSkillsDir(resolve(skillsDir)) : []
  if (loadedSkills.length > 0) {
    for (const s of loadedSkills) {
      log.info(`  ${s.meta.id}${s.meta.has_script ? ' (with tool.js)' : ''}`)
    }
  } else {
    log.info('  (none)')
  }

  log.step('Building manifest')
  const manifestBase: Omit<Manifest, 'manifest_hash'> = {
    version: '1.0',
    created_at: new Date().toISOString(),
    chat_model: {
      name: modelId,
      size_bytes: 0,  // CLI doesn't bundle the chat model; the import side fetches it on demand
      engine: 'webllm',
      model_url: '',
      wasm_url: '',
      supports_tools: true,
    },
    embed_model: EMBED_MODEL,
    chunking: { chunk_size: CHUNK_SIZE, chunk_overlap: CHUNK_OVERLAP },
    sources: sourceMetas,
    skills: loadedSkills.map(s => s.meta),
    total_chunks: allChunks.length,
    ...(systemInstructions ? { system_instructions: systemInstructions } : {}),
  }
  const manifestHash = sha256(JSON.stringify(manifestBase))
  const manifest: Manifest = { ...manifestBase, manifest_hash: manifestHash }
  const manifestBytes = strToU8(JSON.stringify(manifest, null, 2))

  log.step('Writing zip')
  const chunksBytes = strToU8(JSON.stringify(allChunks))

  const zipFiles: Record<string, Uint8Array> = {
    'manifest.json': manifestBytes,
    'chunks.json': chunksBytes,
    'orama-index.json.gz': oramaGzipped,
  }
  for (const src of files) {
    const name = src.slice(absDocs.length + 1) || src
    zipFiles[`sources/${name}`] = new Uint8Array(await readFile(src))
  }
  for (const s of loadedSkills) {
    const skillMd = strToU8(`---\nname: ${s.meta.name}\ndescription: ${s.meta.description}\n---\n${s.body}\n`)
    zipFiles[`skills/${s.folderName}/SKILL.md`] = skillMd
    if (s.script) zipFiles[`skills/${s.folderName}/tool.js`] = s.script
  }
  if (systemInstructions) zipFiles['system-instructions.md'] = strToU8(systemInstructions)

  const zipped = await zipAsync(zipFiles)
  await writeFile(outPath, zipped)

  log.ok(`Wrote ${outPath} (${(zipped.byteLength / 1024 / 1024).toFixed(2)} MB)`)
  log.info(`  ${allChunks.length} chunks · ${loadedSkills.length} skill(s) · model=${modelId}`)
  log.warn('Note: chat model weights are NOT bundled by the CLI. The import-side runtime')
  log.warn('      fetches them via WebLLM/wllama on first use. (See docs for offline-bundle flow.)')
}

// ──────────────────────────────────────────────────────────────────────────────

async function collectFiles(root: string): Promise<string[]> {
  const out: string[] = []
  async function walk(dir: string): Promise<void> {
    const entries = await readdir(dir)
    for (const entry of entries) {
      const full = join(dir, entry)
      const s = await stat(full)
      if (s.isDirectory()) await walk(full)
      else if (SUPPORTED_EXTS.has(extname(entry).toLowerCase())) out.push(full)
    }
  }
  await walk(root)
  return out.sort()
}

function formatChunkId(source: string, index: number): string {
  const sanitized = source.replace(/[^a-z0-9]/gi, '_')
  return `chunk_${sanitized}_${String(index).padStart(4, '0')}`
}

function sha256(s: string): string {
  return 'sha256:' + createHash('sha256').update(s).digest('hex')
}

function zipAsync(files: Record<string, Uint8Array>): Promise<Uint8Array> {
  return new Promise((resolveP, reject) => {
    zip(files, { level: 6 }, (err, data) => err ? reject(err) : resolveP(data))
  })
}

async function embedAll(texts: string[]): Promise<number[][]> {
  const { pipeline } = await import('@huggingface/transformers')
  const extractor = await pipeline('feature-extraction', 'Xenova/bge-small-en-v1.5')

  const vectors: number[][] = []
  for (let i = 0; i < texts.length; i++) {
    const out = await extractor(texts[i], { pooling: 'mean', normalize: true })
    vectors.push(Array.from(out.data as Float32Array))
    if ((i + 1) % 50 === 0) log.info(`  embedded ${i + 1}/${texts.length}`)
  }
  return vectors
}
