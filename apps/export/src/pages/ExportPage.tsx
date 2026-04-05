import { useState, useEffect } from 'react'
import { DEFAULT_CHAT_MODEL, type ChatModelId } from '../types'
import { useCacheSize, formatCacheSize } from '../lib/useCacheSize'
import ModelPicker from '../export/ModelPicker'
import FileDrop from '../export/FileDrop'
import ExportProgress from '../export/ExportProgress'
import { useExportPipeline } from '../export/useExportPipeline'

// Kept short by design — small models (Phi-3-mini) perform best with ≤200-char system prompts.
// Retrieved context goes in the user turn, not here. No formatting instructions (causes terse bullets).
const MAX_INSTRUCTIONS_CHARS = 200
const DEFAULT_INSTRUCTIONS = `You are a grounded knowledge-base assistant. Answer only from the provided context. If the context is insufficient, say: "I don't have enough information." Cite source names.`

export default function ExportPage() {
  const [selectedModel, setSelectedModel] = useState<ChatModelId>(DEFAULT_CHAT_MODEL)
  const [files, setFiles] = useState<File[]>([])
  const [instructions, setInstructions] = useState(DEFAULT_INSTRUCTIONS)

  const { stage, progress, currentFile, error, estimatedSizeBytes, startExport, updateEstimatedSize } =
    useExportPipeline()
  const { info: cacheInfo, refresh: refreshCache } = useCacheSize()

  const isRunning = stage !== 'idle' && stage !== 'done' && stage !== 'error'
  const canExport = files.length > 0 && !isRunning

  useEffect(() => {
    updateEstimatedSize(selectedModel)
  }, [selectedModel, updateEstimatedSize])

  function handleModelChange(id: ChatModelId) {
    setSelectedModel(id)
  }

  async function handleAddFiles(incoming: File[]) {
    const instructionsFile = incoming.find(f => f.name.toLowerCase() === 'instructions.md')
    const otherFiles = incoming.filter(f => f.name.toLowerCase() !== 'instructions.md')

    if (instructionsFile) {
      const text = await instructionsFile.text()
      setInstructions(prev => prev.trimEnd() + '\n\n' + text.trim())
    }
    if (otherFiles.length > 0) {
      setFiles(prev => [...prev, ...otherFiles])
    }
  }

  function handleRemoveFile(name: string) {
    setFiles(prev => prev.filter(f => f.name !== name))
  }

  async function handleStartExport() {
    if (!canExport) return
    await startExport(files, selectedModel, instructions.trim())
  }

  async function handleClearCache() {
    await Promise.allSettled([
      caches.delete('webllm/config'),
      caches.delete('webllm/model'),
      caches.delete('webllm/wasm'),
    ])
    refreshCache()
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <h1 style={styles.title}>Export Knowledge Base</h1>
            <p style={styles.subtitle}>
              Package documents + a chat model into a portable, offline-ready zip.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <button
              onClick={handleClearCache}
              disabled={isRunning}
              style={styles.clearCacheBtn}
            >
              Clear cache · {formatCacheSize(cacheInfo)}
            </button>
            <span style={{ fontSize: 11, color: 'var(--muted)' }}>
              port 5198 only — import app (5199) has its own cache
            </span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.card}>
          {/* Model picker */}
          <ModelPicker
            value={selectedModel}
            onChange={handleModelChange}
            estimatedSize={estimatedSizeBytes}
          />

          <div style={styles.divider} />

          {/* File drop */}
          <FileDrop
            files={files}
            onAdd={handleAddFiles}
            onRemove={handleRemoveFile}
            disabled={isRunning}
          />

          <div style={styles.divider} />

          {/* System instructions */}
          <div style={styles.instructionsSection}>
            <label style={styles.instructionsLabel} htmlFor="system-instructions">
              System Instructions
              <span style={styles.instructionsMeta}>
                Defines how the chat assistant behaves — drop an <code style={styles.inlineCode}>instructions.md</code> to append.
                Keep under {MAX_INSTRUCTIONS_CHARS} chars for best results with small models.
              </span>
            </label>
            <textarea
              id="system-instructions"
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
              disabled={isRunning}
              rows={4}
              style={styles.instructionsTextarea(isRunning)}
            />
            <div style={{
              fontSize: 12,
              textAlign: 'right',
              marginTop: 4,
              color: instructions.length > MAX_INSTRUCTIONS_CHARS ? '#f87171' : '#6b7280',
            }}>
              {instructions.length} / {MAX_INSTRUCTIONS_CHARS} chars
              {instructions.length > MAX_INSTRUCTIONS_CHARS && ' — will be trimmed at import'}
            </div>
          </div>

          <div style={styles.divider} />

          {/* Progress */}
          <ExportProgress
            stage={stage}
            progress={progress}
            currentFile={currentFile}
            error={error}
          />

          {/* Export button */}
          <div style={styles.actions}>
            <button
              style={styles.exportBtn(canExport)}
              onClick={handleStartExport}
              disabled={!canExport}
              aria-busy={isRunning}
            >
              {isRunning ? 'Exporting...' : stage === 'done' ? 'Export Again' : 'Start Export'}
            </button>
            {files.length === 0 && !isRunning && (
              <p style={styles.hint}>Add at least one file to begin.</p>
            )}
          </div>
        </div>

        {/* Info box */}
        <aside style={styles.infoBox}>
          <h3 style={styles.infoTitle}>What happens during export?</h3>
          <ol style={styles.infoList}>
            <li>Documents are parsed to plain text</li>
            <li>Text is chunked and embedded (bge-small-en-v1.5)</li>
            <li>A hybrid search index is built with Orama</li>
            <li>Chat model files are fetched from the WebLLM CDN</li>
            <li>Everything is packaged into a single zip (~1–3 GB)</li>
          </ol>
          <p style={styles.infoNote}>
            The zip is self-contained — no internet required to use it.
          </p>
        </aside>
      </main>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const styles = {
  page: {
    minHeight: '100vh',
    background: 'var(--bg)',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    borderBottom: '1px solid var(--border)',
    padding: '18px 24px',
    background: 'var(--surface)',
  },
  headerInner: {
    maxWidth: 760,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: 'var(--text)',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: 14,
    color: 'var(--muted)',
    marginTop: 4,
  },
  main: {
    flex: 1,
    maxWidth: 760,
    width: '100%',
    margin: '32px auto',
    padding: '0 24px 48px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 24,
  },
  card: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: 28,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 24,
  },
  divider: {
    height: 1,
    background: 'var(--border)',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
    alignItems: 'flex-start',
  },
  exportBtn: (enabled: boolean): React.CSSProperties => ({
    padding: '11px 28px',
    fontSize: 15,
    fontWeight: 600,
    background: enabled ? 'var(--accent)' : 'var(--border)',
    color: enabled ? '#fff' : 'var(--muted)',
    border: 'none',
    borderRadius: 8,
    cursor: enabled ? 'pointer' : 'not-allowed',
    transition: 'background 0.15s',
    outline: 'none',
  }),
  hint: {
    fontSize: 13,
    color: 'var(--muted)',
  },
  infoBox: {
    background: 'rgba(99,102,241,0.06)',
    border: '1px solid rgba(99,102,241,0.2)',
    borderRadius: 10,
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 10,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text)',
  },
  infoList: {
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 6,
    fontSize: 13,
    color: 'var(--muted)',
    lineHeight: 1.5,
  },
  infoNote: {
    fontSize: 12,
    color: 'var(--accent)',
    fontWeight: 500,
    marginTop: 2,
  },
  clearCacheBtn: {
    background: 'none',
    border: '1px solid var(--danger)',
    color: 'var(--danger)',
    borderRadius: 6,
    padding: '6px 14px',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 500,
    flexShrink: 0,
    alignSelf: 'flex-start',
  } as React.CSSProperties,
  instructionsSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  },
  instructionsLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--muted)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 4,
  },
  instructionsMeta: {
    fontSize: 12,
    fontWeight: 400,
    textTransform: 'none' as const,
    letterSpacing: 0,
    color: 'var(--muted)',
  },
  instructionsTextarea: (disabled: boolean): React.CSSProperties => ({
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    color: 'var(--text)',
    fontSize: 13,
    fontFamily: 'system-ui, -apple-system, sans-serif',
    lineHeight: 1.6,
    padding: '10px 14px',
    resize: 'vertical',
    outline: 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'auto',
    boxSizing: 'border-box',
  }),
  inlineCode: {
    background: 'rgba(255,255,255,0.08)',
    padding: '1px 4px',
    borderRadius: 3,
    fontFamily: 'monospace',
    fontSize: 11,
    color: 'var(--accent-hover)',
  },
}
