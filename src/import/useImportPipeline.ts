import { useState, useCallback } from 'react'
import { unzip, gunzipSync } from 'fflate'
import { load } from '@orama/orama'
import {
  findExistingKnowledgeBase,
  isExtractionComplete,
  writeFile,
  readFile,
  markExtractionComplete,
  clearKnowledgeBase as opfsClear,
} from './opfs'
import { useWebLLM } from './useWebLLM'
import type { ImportStage } from '../types'

export function useImportPipeline(): {
  stage: ImportStage
  progress: number
  error: string | null
  loadFromOpfs: () => Promise<void>
  importZip: (file: File) => Promise<void>
  clearKnowledgeBase: () => Promise<void>
  oramaDb: any | null
  manifestHash: string | null
} {
  const [stage, setStage] = useState<ImportStage>('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [oramaDb, setOramaDb] = useState<any | null>(null)
  const [manifestHash, setManifestHash] = useState<string | null>(null)
  const { loadModel } = useWebLLM()

  const loadFromOpfs = useCallback(async (): Promise<void> => {
    try {
      setError(null)
      const existingHash = await findExistingKnowledgeBase()

      if (!existingHash) {
        setStage('idle')
        return
      }

      const complete = await isExtractionComplete(existingHash)
      if (!complete) {
        setStage('idle')
        return
      }

      setManifestHash(existingHash)
      setStage('loading-index')
      setProgress(0)

      // Load Orama index from OPFS
      const indexGz = await readFile(existingHash, 'orama-index.json.gz')
      const indexJson = gunzipSync(indexGz)
      const indexData = JSON.parse(new TextDecoder().decode(indexJson))

      // Dynamically create schema to match the stored index
      const { create } = await import('@orama/orama')
      const db = await create({
        schema: {
          id: 'string',
          source: 'string',
          text: 'string',
          vector: 'vector[384]',
        } as any,
      })

      await load(db, indexData)
      setOramaDb(db)
      setProgress(50)

      setStage('loading-model')
      await loadModel(existingHash)
      setProgress(100)

      setStage('ready')
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
      setStage('error')
    }
  }, [loadModel])

  const importZip = useCallback(async (file: File): Promise<void> => {
    try {
      setError(null)
      setStage('extracting')
      setProgress(0)

      // Read zip as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer()
      const zipData = new Uint8Array(arrayBuffer)

      // Use fflate to unzip
      await new Promise<void>((resolve, reject) => {
        unzip(zipData, async (err, files) => {
          if (err) {
            reject(err)
            return
          }

          try {
            // First pass: find manifest.json to get the hash
            const manifestEntry = files['manifest.json']
            if (!manifestEntry) {
              reject(new Error('Invalid knowledge base file: manifest.json not found'))
              return
            }

            const manifest = JSON.parse(new TextDecoder().decode(manifestEntry))
            if (!manifest.manifest_hash) {
              reject(new Error('Invalid knowledge base file: missing manifest_hash'))
              return
            }

            const hash = manifest.manifest_hash
            setManifestHash(hash)

            // Write all files to OPFS
            const entries = Object.entries(files)
            let written = 0

            for (const [path, data] of entries) {
              // Skip directory entries (empty data with trailing slash)
              if (path.endsWith('/')) {
                written++
                setProgress(Math.round((written / entries.length) * 80))
                continue
              }
              await writeFile(hash, path, data as Uint8Array)
              written++
              setProgress(Math.round((written / entries.length) * 80))
            }

            await markExtractionComplete(hash)
            setProgress(85)

            resolve()
          } catch (writeErr) {
            reject(writeErr)
          }
        })
      })

      await loadFromOpfs()
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
      setStage('error')
    }
  }, [loadFromOpfs])

  const clearKnowledgeBase = useCallback(async (): Promise<void> => {
    try {
      await opfsClear()
      setOramaDb(null)
      setManifestHash(null)
      setProgress(0)
      setError(null)
      setStage('idle')
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }, [])

  return {
    stage,
    progress,
    error,
    loadFromOpfs,
    importZip,
    clearKnowledgeBase,
    oramaDb,
    manifestHash,
  }
}
