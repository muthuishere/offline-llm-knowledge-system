import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DEFAULT_CHAT_MODEL, type ChatModelId } from '../types'
import ModelPicker from '../export/ModelPicker'
import FileDrop from '../export/FileDrop'
import ExportProgress from '../export/ExportProgress'
import { useExportPipeline } from '../export/useExportPipeline'

export default function ExportPage() {
  const [selectedModel, setSelectedModel] = useState<ChatModelId>(DEFAULT_CHAT_MODEL)
  const [files, setFiles] = useState<File[]>([])

  const { stage, progress, currentFile, error, estimatedSizeBytes, startExport, updateEstimatedSize } =
    useExportPipeline()

  const isRunning = stage !== 'idle' && stage !== 'done' && stage !== 'error'
  const canExport = files.length > 0 && !isRunning

  // Update estimated size whenever model selection changes
  useEffect(() => {
    updateEstimatedSize(selectedModel)
  }, [selectedModel, updateEstimatedSize])

  function handleModelChange(id: ChatModelId) {
    setSelectedModel(id)
  }

  function handleAddFiles(incoming: File[]) {
    setFiles(prev => [...prev, ...incoming])
  }

  function handleRemoveFile(name: string) {
    setFiles(prev => prev.filter(f => f.name !== name))
  }

  async function handleStartExport() {
    if (!canExport) return
    await startExport(files, selectedModel)
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
          <nav style={styles.nav}>
            <Link to="/import" style={styles.navLink}>
              Import &amp; Chat →
            </Link>
          </nav>
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
  nav: {
    flexShrink: 0,
    paddingTop: 4,
  },
  navLink: {
    fontSize: 14,
    color: 'var(--accent)',
    textDecoration: 'none',
    fontWeight: 500,
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
}
