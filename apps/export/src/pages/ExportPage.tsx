import { useState, useEffect, useCallback } from 'react'
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
  const [infoOpen, setInfoOpen] = useState(false)
  const [infoTab, setInfoTab] = useState<'functional' | 'technical'>('functional')

  const closeInfo = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).dataset.backdrop) setInfoOpen(false)
  }, [])

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
      {/* Info modal */}
      {infoOpen && (
        <div style={styles.backdrop} data-backdrop="1" onClick={closeInfo}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <span style={styles.modalTitle}>About this app</span>
              <button style={styles.modalClose} onClick={() => setInfoOpen(false)}>✕</button>
            </div>
            <div style={styles.tabs}>
              {(['functional', 'technical'] as const).map(tab => (
                <button
                  key={tab}
                  style={styles.tab(infoTab === tab)}
                  onClick={() => setInfoTab(tab)}
                >
                  {tab === 'functional' ? 'What it does' : 'How it works'}
                </button>
              ))}
            </div>
            <div style={styles.modalBody}>
              {infoTab === 'functional' ? (
                <div style={styles.infoContent}>
                  <p style={styles.infoLead}>Build a portable, self-contained knowledge base that runs offline in any browser.</p>
                  <div style={styles.stepItems}>
                    <div style={styles.stepItem}><span style={styles.stepIcon}>📄</span><div><strong>Add your documents</strong><br/>PDF, DOCX, Markdown, and plain text. Drop as many as you need.</div></div>
                    <div style={styles.stepItem}><span style={styles.stepIcon}>🎛️</span><div><strong>Choose a chat model</strong><br/>Smaller = faster download, larger = better answers. Gemma-2B is a good default.</div></div>
                    <div style={styles.stepItem}><span style={styles.stepIcon}>⚙️</span><div><strong>Optionally set system instructions</strong><br/>Defines how the assistant behaves. Keep it under 200 chars for small models.</div></div>
                    <div style={styles.stepItem}><span style={styles.stepIcon}>📦</span><div><strong>Click Export</strong><br/>The browser builds and saves a self-contained zip (~700 MB – 2.2 GB depending on model).</div></div>
                    <div style={styles.stepItem}><span style={styles.stepIcon}>✈️</span><div><strong>Use it anywhere, forever</strong><br/>Copy the zip to any machine. Drop it in the Import app. No internet ever needed again.</div></div>
                  </div>
                </div>
              ) : (
                <div style={styles.infoContent}>
                  <p style={styles.infoLead}>Everything runs in the browser across three Web Workers — the main thread only drives the UI.</p>
                  <div style={styles.techItems}>
                    <div style={styles.techItem}><span style={styles.techLabel}>document-worker</span>Parses PDF (pdfjs-dist), DOCX (mammoth), MD, TXT to plain text off-thread.</div>
                    <div style={styles.techItem}><span style={styles.techLabel}>embed-worker</span>Chunks text to 100 tokens. Embeds each chunk with bge-small-en-v1.5-q8 (ONNX via Transformers.js) → 384-dim normalised vectors.</div>
                    <div style={styles.techItem}><span style={styles.techLabel}>Knowledge graph</span>Cosine similarity (dot product, already normalised) between all chunk pairs. Edges ≥ 0.75 → graph.json. Zero extra LLM calls.</div>
                    <div style={styles.techItem}><span style={styles.techLabel}>Search index</span>Orama BM25 + vector hybrid index, serialised and gzip-compressed to orama-index.json.gz.</div>
                    <div style={styles.techItem}><span style={styles.techLabel}>zip-worker + fflate</span>Streams compressed output directly to disk via File System Access API (showSaveFilePicker). The full zip is never buffered in RAM — even for a 1.3 GB bundle.</div>
                    <div style={styles.techItem}><span style={styles.techLabel}>Embed cache trick</span>After Transformers.js loads, its Cache API entries (the ONNX weights) are captured and bundled as embed-cache/. Import restores them → zero network calls for the embedding model.</div>
                    <div style={styles.techItem}><span style={styles.techLabel}>Model weights</span>zip-worker fetches safetensors shards + WebGPU WASM kernel from the WebLLM CDN, streaming straight into the zip without touching main-thread RAM.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <h1 style={styles.title}>Export Knowledge Base</h1>
            <p style={styles.subtitle}>
              Package documents + a chat model into a portable, offline-ready zip.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={() => setInfoOpen(true)} style={styles.infoBtn} title="About this app">?</button>
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
  infoBtn: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    color: 'var(--muted)',
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  backdrop: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.65)',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modal: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    width: '100%',
    maxWidth: 560,
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: '1px solid var(--border)',
    flexShrink: 0,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: 'var(--text)',
  },
  modalClose: {
    background: 'none',
    border: 'none',
    color: 'var(--muted)',
    fontSize: 16,
    cursor: 'pointer',
    padding: '2px 6px',
    borderRadius: 4,
  } as React.CSSProperties,
  tabs: {
    display: 'flex',
    borderBottom: '1px solid var(--border)',
    flexShrink: 0,
  },
  tab: (active: boolean): React.CSSProperties => ({
    flex: 1,
    padding: '10px 16px',
    fontSize: 13,
    fontWeight: 600,
    background: 'none',
    border: 'none',
    borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
    color: active ? 'var(--text)' : 'var(--muted)',
    cursor: 'pointer',
    transition: 'color 0.15s',
  }),
  modalBody: {
    overflowY: 'auto' as const,
    flex: 1,
  },
  infoContent: {
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 16,
  },
  infoLead: {
    fontSize: 14,
    color: 'var(--muted)',
    lineHeight: 1.65,
  },
  stepItems: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 14,
  },
  stepItem: {
    display: 'flex',
    gap: 12,
    fontSize: 13,
    color: 'var(--muted)',
    lineHeight: 1.6,
  } as React.CSSProperties,
  stepIcon: {
    fontSize: 18,
    flexShrink: 0,
    width: 24,
    textAlign: 'center' as const,
    marginTop: 1,
  },
  techItems: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 10,
  },
  techItem: {
    fontSize: 13,
    color: 'var(--muted)',
    lineHeight: 1.6,
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 6,
    padding: '10px 14px',
  } as React.CSSProperties,
  techLabel: {
    display: 'block',
    fontSize: 11,
    fontWeight: 700,
    color: 'var(--accent-hover)',
    fontFamily: 'monospace',
    marginBottom: 3,
    letterSpacing: 0.3,
  } as React.CSSProperties,
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
