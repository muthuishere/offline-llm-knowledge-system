import { useRef, useState, useCallback } from 'react'
import { create, insertMultiple, save } from '@orama/orama'
import { prebuiltAppConfig } from '@mlc-ai/web-llm'
import {
  type Chunk,
  type Manifest,
  type ExportStage,
  type ChatModelId,
  EMBED_MODEL,
  CHUNK_SIZE,
  CHUNK_OVERLAP,
} from '../types'

// ---------------------------------------------------------------------------
// Worker message helper
// ---------------------------------------------------------------------------

function workerCall<TIn, TOut>(
  worker: Worker,
  message: TIn & { type: string; id: string },
  doneType: string,
  errorType: string,
  transfers: Transferable[] = [],
): Promise<TOut> {
  return new Promise((resolve, reject) => {
    const handler = (event: MessageEvent) => {
      const data = event.data
      if (data.id !== message.id) return
      if (data.type === doneType) {
        worker.removeEventListener('message', handler)
        resolve(data as TOut)
      } else if (data.type === errorType) {
        worker.removeEventListener('message', handler)
        reject(new Error(data.error ?? 'Worker error'))
      }
    }
    worker.addEventListener('message', handler)
    if (transfers.length > 0) {
      worker.postMessage(message, transfers)
    } else {
      worker.postMessage(message)
    }
  })
}

// ---------------------------------------------------------------------------
// SHA-256 helper
// ---------------------------------------------------------------------------

async function sha256(data: string | Uint8Array): Promise<string> {
  const source: Uint8Array =
    typeof data === 'string' ? new TextEncoder().encode(data) : data
  // Ensure we have a plain ArrayBuffer (not SharedArrayBuffer) for SubtleCrypto
  const buf: ArrayBuffer = source.buffer instanceof ArrayBuffer
    ? source.buffer
    : new Uint8Array(source).buffer
  const hashBuffer = await crypto.subtle.digest('SHA-256', buf)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return 'sha256:' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// ---------------------------------------------------------------------------
// Model shard URL helpers
// ---------------------------------------------------------------------------

interface ModelShardInfo {
  url: string
  path: string // relative path in zip under model/
}

function getModelShards(modelId: ChatModelId): ModelShardInfo[] {
  // Find the model config from prebuiltAppConfig
  // ModelRecord.model is the CDN base URL for the model
  const modelConfig = prebuiltAppConfig.model_list.find(m => m.model_id === modelId)
  if (!modelConfig) {
    // Fallback CDN path
    return [
      {
        url: `https://huggingface.co/mlc-ai/${modelId}-MLC/resolve/main/mlc-chat-config.json`,
        path: 'mlc-chat-config.json',
      },
    ]
  }

  const base = modelConfig.model.endsWith('/') ? modelConfig.model : modelConfig.model + '/'

  const standardFiles = [
    'config.json',
    'tokenizer.json',
    'tokenizer_config.json',
    'mlc-chat-config.json',
  ]

  const shards: ModelShardInfo[] = standardFiles.map(f => ({
    url: base + f,
    path: f,
  }))

  // Attempt to fetch a few shards; the actual number varies per model.
  // We'll try up to 5 shards and skip 404s in the fetch loop.
  for (let i = 0; i < 5; i++) {
    const shardFile = `params_shard_${i}.bin`
    shards.push({ url: base + shardFile, path: shardFile })
  }

  return shards
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useExportPipeline() {
  const [stage, setStage] = useState<ExportStage>('idle')
  const [progress, setProgress] = useState(0)
  const [currentFile, setCurrentFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [estimatedSizeBytes, setEstimatedSizeBytes] = useState(0)

  // Lazy worker refs
  const docWorkerRef = useRef<Worker | null>(null)
  const embedWorkerRef = useRef<Worker | null>(null)
  const zipWorkerRef = useRef<Worker | null>(null)

  function getDocWorker(): Worker {
    if (!docWorkerRef.current) {
      docWorkerRef.current = new Worker(
        new URL('../workers/document-worker.ts', import.meta.url),
        { type: 'module' },
      )
    }
    return docWorkerRef.current
  }

  function getEmbedWorker(): Worker {
    if (!embedWorkerRef.current) {
      embedWorkerRef.current = new Worker(
        new URL('../workers/embed-worker.ts', import.meta.url),
        { type: 'module' },
      )
    }
    return embedWorkerRef.current
  }

  function getZipWorker(): Worker {
    if (!zipWorkerRef.current) {
      zipWorkerRef.current = new Worker(
        new URL('../workers/zip-worker.ts', import.meta.url),
        { type: 'module' },
      )
    }
    return zipWorkerRef.current
  }

  const startExport = useCallback(async (files: File[], modelId: ChatModelId) => {
    setStage('parsing')
    setProgress(0)
    setCurrentFile(null)
    setError(null)

    try {
      const docWorker = getDocWorker()
      const embedWorker = getEmbedWorker()
      const zipWorker = getZipWorker()

      // -----------------------------------------------------------------------
      // Step 1: Parse files to chunks
      // -----------------------------------------------------------------------
      const EMBED_BATCH = 8
      const allChunks: Chunk[] = []
      const sourceMetas: Manifest['sources'] = []

      for (let fi = 0; fi < files.length; fi++) {
        const file = files[fi]
        setCurrentFile(file.name)
        setProgress(Math.round((fi / files.length) * 30)) // parsing = 0–30%

        const ext = file.name.split('.').pop()?.toLowerCase() ?? 'txt'
        const fileType = ['pdf', 'docx', 'md', 'txt'].includes(ext) ? ext : 'txt'
        const buffer = await file.arrayBuffer()
        const callId = `parse-${fi}-${Date.now()}`

        type ParseDoneMsg = {
          type: 'PARSE_DONE'
          id: string
          fileName: string
          chunks: { text: string; page?: number }[]
        }

        const result = await workerCall<
          { type: string; id: string; fileName: string; fileType: string; buffer: ArrayBuffer },
          ParseDoneMsg
        >(
          docWorker,
          { type: 'PARSE_FILE', id: callId, fileName: file.name, fileType, buffer },
          'PARSE_DONE',
          'PARSE_ERROR',
          [buffer],
        )

        const rawChunks = result.chunks
        const fileBytes = await file.arrayBuffer().catch(() => new ArrayBuffer(0))
        const checksum = await sha256(new Uint8Array(fileBytes))

        sourceMetas.push({
          name: file.name,
          type: fileType as 'pdf' | 'docx' | 'md' | 'txt',
          chunks: rawChunks.length,
          checksum,
        })

        // -----------------------------------------------------------------------
        // Step 2: Embed this file's chunks in batches
        // -----------------------------------------------------------------------
        setStage('embedding')
        const chunkStartIndex = allChunks.length
        for (let bi = 0; bi < rawChunks.length; bi += EMBED_BATCH) {
          const batch = rawChunks.slice(bi, bi + EMBED_BATCH).map(c => ({
            ...c,
            source: file.name,
          }))
          const batchId = `embed-${fi}-${bi}-${Date.now()}`

          type EmbedDoneMsg = {
            type: 'EMBED_DONE'
            id: string
            chunks: { text: string; page?: number; source: string; vector: number[] }[]
          }

          const embedResult = await workerCall<
            { type: string; id: string; chunks: typeof batch },
            EmbedDoneMsg
          >(
            embedWorker,
            { type: 'EMBED', id: batchId, chunks: batch },
            'EMBED_DONE',
            'EMBED_ERROR',
          )

          for (let ci = 0; ci < embedResult.chunks.length; ci++) {
            const ec = embedResult.chunks[ci]
            const chunkIndex = chunkStartIndex + bi + ci
            allChunks.push({
              id: `chunk_${String(chunkIndex).padStart(4, '0')}`,
              source: ec.source,
              page: ec.page,
              text: ec.text,
              vector: ec.vector,
            })
          }

          // Progress: embedding = 30–60%
          const embedProgress = 30 + Math.round(
            ((fi / files.length) + (Math.min(bi + EMBED_BATCH, rawChunks.length) / rawChunks.length) / files.length) * 30,
          )
          setProgress(Math.min(60, embedProgress))
        }
      }

      // -----------------------------------------------------------------------
      // Step 3: Build Orama index
      // -----------------------------------------------------------------------
      setStage('indexing')
      setCurrentFile(null)
      setProgress(62)

      const oramaDb = await create({
        schema: {
          id: 'string',
          text: 'string',
          source: 'string',
        } as const,
        components: {
          tokenizer: { stemming: false },
        },
      })

      await insertMultiple(
        oramaDb,
        allChunks.map(c => ({ id: c.id, text: c.text, source: c.source })),
      )

      setProgress(68)

      // -----------------------------------------------------------------------
      // Step 4: Serialize chunks.json and orama-index.json.gz
      // -----------------------------------------------------------------------
      const chunksJson = JSON.stringify(allChunks)
      const chunksBytes = new TextEncoder().encode(chunksJson)

      const oramaSaved = await save(oramaDb)
      const oramaBytes = new TextEncoder().encode(JSON.stringify(oramaSaved))

      // Compress orama index using CompressionStream (available in modern browsers)
      const oramaGzipped = await compressGzip(oramaBytes)

      setProgress(72)

      // -----------------------------------------------------------------------
      // Step 5: Build manifest
      // -----------------------------------------------------------------------
      const modelSizeBytes = estimateModelSize(modelId)

      const manifestBase: Omit<Manifest, 'manifest_hash'> = {
        version: '1.0',
        created_at: new Date().toISOString(),
        chat_model: {
          name: modelId,
          size_bytes: modelSizeBytes,
        },
        embed_model: {
          name: EMBED_MODEL.name,
          dimensions: EMBED_MODEL.dimensions,
          path: EMBED_MODEL.path,
        },
        chunking: {
          chunk_size: CHUNK_SIZE,
          chunk_overlap: CHUNK_OVERLAP,
        },
        sources: sourceMetas,
        total_chunks: allChunks.length,
      }

      const manifestHash = await sha256(JSON.stringify(manifestBase))
      const manifest: Manifest = { ...manifestBase, manifest_hash: manifestHash }
      const manifestBytes = new TextEncoder().encode(JSON.stringify(manifest, null, 2))

      setProgress(75)

      // -----------------------------------------------------------------------
      // Step 6: Fetch model files
      // -----------------------------------------------------------------------
      setStage('packaging')
      setCurrentFile('Fetching model files...')

      const zipEntries: { path: string; data: Uint8Array }[] = []

      // Add already-built entries
      zipEntries.push({ path: 'manifest.json', data: manifestBytes })
      zipEntries.push({ path: 'chunks.json', data: chunksBytes })
      zipEntries.push({ path: 'orama-index.json.gz', data: oramaGzipped })

      // Add original source files
      for (const file of files) {
        const buf = await file.arrayBuffer()
        zipEntries.push({
          path: `sources/${file.name}`,
          data: new Uint8Array(buf),
        })
      }

      setProgress(78)

      // Fetch embed model ONNX
      const EMBED_ONNX_URL =
        'https://huggingface.co/Xenova/bge-small-en-v1.5/resolve/main/onnx/model_quantized.onnx'
      try {
        setCurrentFile('Fetching embed model...')
        const embedResp = await fetch(EMBED_ONNX_URL)
        if (embedResp.ok) {
          const embedBuf = await embedResp.arrayBuffer()
          zipEntries.push({
            path: 'embed-model/bge-small-en-v1.5-q8.onnx',
            data: new Uint8Array(embedBuf),
          })
        }
      } catch {
        // Non-fatal — embed model fetch failure means the zip won't have the model
        console.warn('Could not fetch embed model ONNX')
      }

      setProgress(82)

      // Fetch chat model shards
      const shards = getModelShards(modelId)
      const totalShards = shards.length
      for (let si = 0; si < shards.length; si++) {
        const shard = shards[si]
        setCurrentFile(`Fetching model: ${shard.path}`)
        try {
          const resp = await fetch(shard.url)
          if (resp.ok) {
            const buf = await resp.arrayBuffer()
            zipEntries.push({
              path: `model/${shard.path}`,
              data: new Uint8Array(buf),
            })
          }
        } catch {
          console.warn(`Could not fetch model shard: ${shard.url}`)
        }
        setProgress(82 + Math.round(((si + 1) / totalShards) * 12))
      }

      setProgress(94)
      setCurrentFile('Compressing...')

      // -----------------------------------------------------------------------
      // Step 7: Compress everything via zip-worker
      // -----------------------------------------------------------------------
      type CompressDoneMsg = { type: 'COMPRESS_DONE'; id: string; blob: Blob }
      const compressId = `compress-${Date.now()}`

      const compressResult = await workerCall<
        { type: string; id: string; entries: { path: string; data: Uint8Array }[] },
        CompressDoneMsg
      >(
        zipWorker,
        { type: 'COMPRESS', id: compressId, entries: zipEntries },
        'COMPRESS_DONE',
        'COMPRESS_ERROR',
      )

      setProgress(99)
      setCurrentFile(null)

      // -----------------------------------------------------------------------
      // Step 8: Trigger browser download
      // -----------------------------------------------------------------------
      const url = URL.createObjectURL(compressResult.blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'knowledge-base.zip'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 5000)

      setProgress(100)
      setStage('done')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(msg)
      setStage('error')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update estimated size when model changes
  const updateEstimatedSize = useCallback((modelId: ChatModelId) => {
    const modelSize = estimateModelSize(modelId)
    const embedSize = 24 * 1024 * 1024 // ~24MB
    setEstimatedSizeBytes(modelSize + embedSize)
  }, [])

  return {
    stage,
    progress,
    currentFile,
    error,
    estimatedSizeBytes,
    startExport,
    updateEstimatedSize,
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function estimateModelSize(modelId: ChatModelId): number {
  const sizes: Record<string, number> = {
    'Phi-3-mini-4k-instruct-q4f16_1': 2_200_000_000,
    'gemma-2-2b-it-q4f16_1': 1_400_000_000,
    'TinyLlama-1.1B-Chat-v1.0-q4f16_1': 700_000_000,
  }
  return sizes[modelId] ?? 1_400_000_000
}

async function compressGzip(data: Uint8Array): Promise<Uint8Array> {
  if (typeof CompressionStream !== 'undefined') {
    const cs = new CompressionStream('gzip')
    const writer = cs.writable.getWriter()
    // Use a plain ArrayBuffer slice to avoid SharedArrayBuffer typing issue
    void writer.write(new Uint8Array(data))
    void writer.close()
    const parts: Uint8Array[] = []
    const reader = cs.readable.getReader()
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      parts.push(value)
    }
    const total = parts.reduce((n, c) => n + c.length, 0)
    const result = new Uint8Array(total)
    let offset = 0
    for (const part of parts) {
      result.set(part, offset)
      offset += part.length
    }
    return result
  }
  // Fallback: return uncompressed
  return data
}
