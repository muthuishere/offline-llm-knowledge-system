import type { ImportStage } from '../types'

interface ExtractionProgressProps {
  stage: ImportStage
  progress: number
  error: string | null
}

const STAGE_LABELS: Record<ImportStage, string> = {
  idle: 'Waiting',
  extracting: 'Extracting zip to storage...',
  'loading-index': 'Loading search index...',
  'loading-model': 'Loading language model...',
  ready: 'Ready',
  error: 'Error',
}

export default function ExtractionProgress({ stage, progress, error }: ExtractionProgressProps) {
  const label = STAGE_LABELS[stage] ?? stage

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 480,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>{label}</span>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>{Math.round(progress)}%</span>
      </div>

      <div
        style={{
          height: 8,
          background: 'var(--border)',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${Math.min(100, Math.max(0, progress))}%`,
            background: error ? 'var(--danger)' : 'var(--accent)',
            borderRadius: 8,
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {error && (
        <p
          style={{
            color: 'var(--danger)',
            fontSize: 13,
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 8,
            padding: '10px 14px',
          }}
        >
          {error}
        </p>
      )}

      {stage === 'loading-model' && (
        <p style={{ color: 'var(--muted)', fontSize: 12, textAlign: 'center' }}>
          Loading model shards from local storage — this may take a moment.
        </p>
      )}
    </div>
  )
}
