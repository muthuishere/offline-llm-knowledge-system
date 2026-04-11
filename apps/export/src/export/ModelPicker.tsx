import { useState, useEffect } from 'react'
import { CHAT_MODELS, type ChatModelId } from '../types'

interface ModelPickerProps {
  value: ChatModelId
  onChange: (id: ChatModelId) => void
  estimatedSize: number
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  const gb = bytes / 1_000_000_000
  if (gb >= 1) return `~${gb.toFixed(1)} GB`
  const mb = bytes / 1_000_000
  return `~${mb.toFixed(0)} MB`
}

async function detectWebGPU(): Promise<boolean> {
  try {
    const nav = navigator as any
    if (!nav.gpu) return false
    const adapter = await nav.gpu.requestAdapter()
    return adapter !== null
  } catch {
    return false
  }
}

export default function ModelPicker({ value, onChange, estimatedSize }: ModelPickerProps) {
  const [hasWebGPU, setHasWebGPU] = useState<boolean | null>(null)

  useEffect(() => {
    detectWebGPU().then(setHasWebGPU)
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Chat Model</h2>

      {hasWebGPU === false && (
        <p style={styles.gpuWarning}>
          WebGPU not detected — GPU models won't work on the target machine
          if it also lacks WebGPU. CPU models work everywhere.
        </p>
      )}

      <div style={styles.optionsList}>
        {CHAT_MODELS.map(model => (
          <label key={model.id} style={styles.option(value === model.id)}>
            <input
              type="radio"
              name="chat-model"
              value={model.id}
              checked={value === model.id}
              onChange={() => onChange(model.id as ChatModelId)}
              style={styles.radio}
            />
            <span style={styles.label}>
              <span style={styles.tag(model.tag)}>{model.tag}</span>
              {model.label}
            </span>
          </label>
        ))}
      </div>
      {estimatedSize > 0 && (
        <p style={styles.sizeHint}>
          Estimated zip size: <strong style={{ color: 'var(--accent)' }}>{formatBytes(estimatedSize)}</strong>
          <span style={{ color: 'var(--muted)', marginLeft: 8, fontSize: 13 }}>(dominated by model weights)</span>
        </p>
      )}
    </div>
  )
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
  gpuWarning: {
    fontSize: 13,
    color: '#f59e0b',
    background: 'rgba(245,158,11,0.1)',
    border: '1px solid rgba(245,158,11,0.3)',
    borderRadius: 8,
    padding: '8px 12px',
    margin: 0,
    lineHeight: 1.5,
  } as React.CSSProperties,
  optionsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  },
  option: (selected: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 14px',
    background: selected ? 'rgba(99,102,241,0.12)' : 'var(--surface)',
    border: `1px solid ${selected ? 'var(--accent)' : 'var(--border)'}`,
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'border-color 0.15s, background 0.15s',
  }),
  radio: {
    accentColor: 'var(--accent)',
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  label: {
    color: 'var(--text)',
    fontSize: 14,
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: 8,
  },
  tag: (type: string): React.CSSProperties => ({
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.05em',
    padding: '2px 6px',
    borderRadius: 4,
    background: type === 'GPU' ? 'rgba(99,102,241,0.15)' : 'rgba(34,197,94,0.15)',
    color: type === 'GPU' ? '#818cf8' : '#4ade80',
    flexShrink: 0,
  }),
  sizeHint: {
    fontSize: 13,
    color: 'var(--text)',
    marginTop: 4,
  },
}
