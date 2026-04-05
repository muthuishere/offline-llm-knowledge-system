import { useState, useCallback } from 'react'

interface ZipDropProps {
  onFile: (file: File) => void
  disabled: boolean
}

export default function ZipDrop({ onFile, disabled }: ZipDropProps) {
  const [dragOver, setDragOver] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleFile = useCallback(
    (file: File) => {
      setValidationError(null)
      if (!file.name.endsWith('.zip')) {
        setValidationError('Please drop a .zip file')
        return
      }
      onFile(file)
    },
    [onFile],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled) setDragOver(true)
  }, [disabled])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragOver(false)
      if (disabled) return
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [disabled, handleFile],
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) handleFile(file)
      e.target.value = ''
    },
    [handleFile],
  )

  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto' }}>
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          border: `2px dashed ${dragOver ? 'var(--accent)' : 'var(--border)'}`,
          borderRadius: 12,
          padding: '56px 32px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          background: dragOver ? 'rgba(99,102,241,0.08)' : 'var(--surface)',
          transition: 'border-color 0.15s, background 0.15s',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <input
          type="file"
          accept=".zip"
          onChange={handleChange}
          disabled={disabled}
          style={{ display: 'none' }}
        />
        <svg
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          stroke={dragOver ? 'var(--accent)' : 'var(--muted)'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: 17, color: 'var(--text)' }}>
            Drop knowledge base zip here
          </div>
          <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 6 }}>
            or click to browse &mdash; .zip files only
          </div>
        </div>
      </label>
      {validationError && (
        <p
          style={{
            color: 'var(--danger)',
            marginTop: 12,
            fontSize: 13,
            textAlign: 'center',
          }}
        >
          {validationError}
        </p>
      )}
    </div>
  )
}
