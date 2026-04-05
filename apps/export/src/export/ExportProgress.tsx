import type { ExportStage } from '../types'

interface ExportProgressProps {
  stage: ExportStage
  progress: number
  currentFile: string | null
  error: string | null
}

const STAGE_LABELS: Record<ExportStage, string> = {
  idle: 'Ready',
  parsing: 'Parsing documents...',
  embedding: 'Generating embeddings...',
  indexing: 'Building search index...',
  packaging: 'Packaging zip...',
  done: 'Download ready!',
  error: 'Export failed',
}

const STAGE_COLORS: Partial<Record<ExportStage, string>> = {
  done: 'var(--success)',
  error: 'var(--danger)',
}

export default function ExportProgress({ stage, progress, currentFile, error }: ExportProgressProps) {
  if (stage === 'idle') return null

  const color = STAGE_COLORS[stage] ?? 'var(--accent)'
  const label = STAGE_LABELS[stage]

  return (
    <div style={styles.container}>
      {/* Stage label */}
      <div style={styles.row}>
        <span style={{ ...styles.stageLabel, color }}>{label}</span>
        <span style={styles.percent}>{Math.round(progress)}%</span>
      </div>

      {/* Progress bar */}
      <div style={styles.track}>
        <div
          style={{
            ...styles.bar,
            width: `${progress}%`,
            background: color,
            transition: progress > 0 ? 'width 0.3s ease' : 'none',
          }}
        />
      </div>

      {/* Current file */}
      {currentFile && stage !== 'done' && stage !== 'error' && (
        <p style={styles.currentFile}>
          <span style={styles.currentLabel}>Processing:</span> {currentFile}
        </p>
      )}

      {/* Error */}
      {error && (
        <div style={styles.errorBox} role="alert">
          <strong style={{ color: 'var(--danger)' }}>Error:</strong> {error}
        </div>
      )}

      {/* Done state */}
      {stage === 'done' && (
        <p style={styles.doneMsg}>
          Your knowledge base zip has been downloaded.
        </p>
      )}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stageLabel: {
    fontSize: 14,
    fontWeight: 600,
  },
  percent: {
    fontSize: 13,
    color: 'var(--muted)',
    fontVariantNumeric: 'tabular-nums',
  },
  track: {
    height: 6,
    background: 'var(--border)',
    borderRadius: 99,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 99,
  },
  currentFile: {
    fontSize: 12,
    color: 'var(--muted)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  currentLabel: {
    color: 'var(--text)',
    fontWeight: 500,
  },
  errorBox: {
    fontSize: 13,
    color: 'var(--text)',
    background: 'rgba(239,68,68,0.1)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 6,
    padding: '10px 14px',
    lineHeight: 1.5,
  },
  doneMsg: {
    fontSize: 13,
    color: 'var(--success)',
  },
}
