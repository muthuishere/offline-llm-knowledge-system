import { useRef, useState } from 'react'

interface FileDropProps {
  files: File[]
  onAdd: (files: File[]) => void
  onRemove: (name: string) => void
  disabled: boolean
}

const ACCEPTED_TYPES = ['.txt', '.pdf', '.docx', '.md']

function isAccepted(file: File): boolean {
  const name = file.name.toLowerCase()
  return ACCEPTED_TYPES.some(ext => name.endsWith(ext))
}

export default function FileDrop({ files, onAdd, onRemove, disabled }: FileDropProps) {
  const [dragOver, setDragOver] = useState(false)
  const [typeError, setTypeError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFiles(incoming: FileList | File[]) {
    const arr = Array.from(incoming)
    const accepted: File[] = []
    const rejected: string[] = []

    for (const f of arr) {
      if (isAccepted(f)) {
        // Avoid duplicates
        if (!files.find(ex => ex.name === f.name)) {
          accepted.push(f)
        }
      } else {
        rejected.push(f.name)
      }
    }

    if (rejected.length > 0) {
      setTypeError(`Rejected (unsupported type): ${rejected.join(', ')}. Accepted: ${ACCEPTED_TYPES.join(', ')}`)
    } else {
      setTypeError(null)
    }

    if (accepted.length > 0) {
      onAdd(accepted)
    }
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    if (disabled) return
    handleFiles(e.dataTransfer.files)
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault()
    if (!disabled) setDragOver(true)
  }

  function onDragLeave() {
    setDragOver(false)
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      handleFiles(e.target.files)
      // Reset so same file can be re-added after remove
      e.target.value = ''
    }
  }

  function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Source Files</h2>

      {/* Drop zone */}
      <div
        style={styles.dropZone(dragOver, disabled)}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() => !disabled && inputRef.current?.click()}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={e => { if (!disabled && (e.key === 'Enter' || e.key === ' ')) inputRef.current?.click() }}
        aria-label="Drop files here or click to select"
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_TYPES.join(',')}
          multiple
          style={{ display: 'none' }}
          onChange={onInputChange}
          disabled={disabled}
        />
        <span style={styles.dropIcon}>+</span>
        <span style={styles.dropText}>
          {dragOver ? 'Release to add files' : 'Drag & drop files here, or click to browse'}
        </span>
        <span style={styles.dropHint}>{ACCEPTED_TYPES.join('  ')}</span>
      </div>

      {/* Type error */}
      {typeError && (
        <p style={styles.error} role="alert">
          {typeError}
        </p>
      )}

      {/* File list */}
      {files.length > 0 && (
        <ul style={styles.fileList}>
          {files.map(file => (
            <li key={file.name} style={styles.fileItem}>
              <span style={styles.fileIcon}>{fileIcon(file.name)}</span>
              <span style={styles.fileName}>{file.name}</span>
              <span style={styles.fileSize}>{formatSize(file.size)}</span>
              {!disabled && (
                <button
                  style={styles.removeBtn}
                  onClick={() => onRemove(file.name)}
                  title={`Remove ${file.name}`}
                  aria-label={`Remove ${file.name}`}
                >
                  &times;
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {files.length === 0 && (
        <p style={styles.emptyHint}>No files selected yet.</p>
      )}
    </div>
  )
}

function fileIcon(name: string): string {
  if (name.endsWith('.pdf')) return '📄'
  if (name.endsWith('.docx')) return '📝'
  if (name.endsWith('.md')) return '📋'
  return '📃'
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 12,
  },
  heading: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--muted)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
  },
  dropZone: (active: boolean, disabled: boolean): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: '28px 20px',
    border: `2px dashed ${active ? 'var(--accent)' : 'var(--border)'}`,
    borderRadius: 10,
    background: active ? 'rgba(99,102,241,0.08)' : 'var(--surface)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'border-color 0.15s, background 0.15s',
    userSelect: 'none',
  }),
  dropIcon: {
    fontSize: 28,
    color: 'var(--accent)',
    lineHeight: 1,
  },
  dropText: {
    fontSize: 14,
    color: 'var(--text)',
    textAlign: 'center' as const,
  },
  dropHint: {
    fontSize: 12,
    color: 'var(--muted)',
    letterSpacing: '0.04em',
  },
  error: {
    fontSize: 13,
    color: 'var(--danger)',
    background: 'rgba(239,68,68,0.1)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 6,
    padding: '8px 12px',
  },
  fileList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 6,
  },
  fileItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 7,
  },
  fileIcon: {
    fontSize: 16,
    flexShrink: 0,
  },
  fileName: {
    flex: 1,
    fontSize: 13,
    color: 'var(--text)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  fileSize: {
    fontSize: 12,
    color: 'var(--muted)',
    flexShrink: 0,
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--muted)',
    cursor: 'pointer',
    fontSize: 18,
    lineHeight: 1,
    padding: '0 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    transition: 'color 0.1s',
    flexShrink: 0,
  },
  emptyHint: {
    fontSize: 13,
    color: 'var(--muted)',
    textAlign: 'center' as const,
  },
}
