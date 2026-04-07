import { useState, useCallback } from 'react'
import { gunzipSync } from 'fflate'
import { insertMultiple } from '@orama/orama'
import { readFile, clearKnowledgeBase as opfsClear } from './opfs'
import type { Chunk, ImportStage, Manifest, GraphEdge } from '../types'

export function useImportPipeline(): {
  stage: ImportStage
  progress: number
  error: string | null
  importZip: (file: File) => Promise<void>
  clearKnowledgeBase: () => Promise<void>
  oramaDb: any | null
  manifest: Manifest | null
  chunks: Chunk[]
  graphEdges: GraphEdge[]
} {
  const [stage, setStage] = useState<ImportStage>('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [oramaDb, setOramaDb] = useState<any | null>(null)
  const [manifest, setManifest] = useState<Manifest | null>(null)
  const [chunks, setChunks] = useState<Chunk[]>([])
  const [graphEdges, setGraphEdges] = useState<GraphEdge[]>([])

  const importZip = useCallback(async (file: File): Promise<void> => {
    try {
      setError(null)
      setStage('extracting')
      setProgress(0)
      console.log('[Import] Handing zip to unzip-worker:', file.name, `(${(file.size / 1e9).toFixed(2)} GB)`)

      // ── Phase 1: Worker extracts zip, writes Cache API + OPFS ───────────────
      // ReadableStream is transferable — the worker owns it and does all heavy
      // work off the main thread. The main thread just receives progress events.
      const worker = new Worker(
        new URL('../workers/unzip-worker.ts', import.meta.url),
        { type: 'module' },
      )

      const extractId = `extract-${Date.now()}`
      let resolvedManifest: Manifest | null = null

      await new Promise<void>((resolve, reject) => {
        worker.onmessage = (event) => {
          const data = event.data
          if (data.id !== extractId) return

          switch (data.type) {
            case 'EXTRACT_MANIFEST':
              resolvedManifest = data.manifest
              setManifest(data.manifest)
              break

            case 'EXTRACT_PROGRESS':
              setProgress(data.percent)
              if (data.stage) setStage(data.stage as ImportStage)
              break

            case 'EXTRACT_DONE':
              worker.terminate()
              resolve()
              break

            case 'EXTRACT_ERROR':
              worker.terminate()
              reject(new Error(data.error))
              break
          }
        }

        worker.onerror = (e) => {
          worker.terminate()
          reject(new Error(e.message ?? 'Unzip worker crashed'))
        }

        // Transfer the ReadableStream — zero-copy, no full file in RAM
        const stream = file.stream()
        worker.postMessage(
          { type: 'EXTRACT', id: extractId, stream, fileSize: file.size },
          { transfer: [stream] },
        )
      })

      if (!resolvedManifest) throw new Error('Manifest was not received from worker')
      const mf = resolvedManifest as Manifest

      // ── Phase 2: Load Orama search index from OPFS ────────────────────────
      setStage('loading-index')
      setProgress(82)
      console.log('[Import] Loading Orama index from OPFS...')

      const chunksBytes = await readFile(mf.manifest_hash, 'chunks.json')
      const loadedChunks = JSON.parse(new TextDecoder().decode(chunksBytes)) as Chunk[]
      const indexGz = await readFile(mf.manifest_hash, 'orama-index.json.gz').catch(() => null)
      if (indexGz) {
        // Keep parsing the saved index as a lightweight integrity check for the import payload.
        gunzipSync(indexGz)
      }

      // Load graph edges
      const graphBytes = await readFile(mf.manifest_hash, 'graph.json')
      const graphData = JSON.parse(new TextDecoder().decode(graphBytes))
      const loadedEdges: GraphEdge[] = graphData.edges
      console.log(`[Import] Graph loaded: ${loadedEdges.length} edges`)

      const { create } = await import('@orama/orama')
      const db = await create({
        schema: {
          id: 'string',
          source: 'string',
          text: 'string',
          vector: `vector[${mf.embed_model.dimensions}]`,
        } as any,
        components: { tokenizer: { stemming: false } },
      })
      await insertMultiple(
        db,
        loadedChunks.map((chunk) => ({
          id: chunk.id,
          source: chunk.source,
          text: chunk.text,
          vector: chunk.vector,
        })),
      )
      setChunks(loadedChunks)
      setGraphEdges(loadedEdges)
      setOramaDb(db)
      setProgress(92)
      console.log('[Import] Orama index ready.')

      // WebLLM caches are pre-populated — ChatInterface calls loadModel(manifest)
      setStage('loading-model')

    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('[Import] importZip error:', msg)
      setError(msg)
      setStage('error')
    }
  }, [])

  const clearKnowledgeBase = useCallback(async (): Promise<void> => {
    try {
      await opfsClear()
      setOramaDb(null)
      setManifest(null)
      setChunks([])
      setGraphEdges([])
      setProgress(0)
      setError(null)
      setStage('idle')
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }, [])

  return { stage, progress, error, importZip, clearKnowledgeBase, oramaDb, manifest, chunks, graphEdges }
}
