import { useImportPipeline } from '../import/useImportPipeline'
import ZipDrop from '../import/ZipDrop'
import ExtractionProgress from '../import/ExtractionProgress'
import ChatInterface from '../import/ChatInterface'
import { useCacheSize, formatCacheSize } from '../lib/useCacheSize'

export default function ImportPage() {
  const { stage, progress, error, importZip, clearKnowledgeBase, oramaDb, manifest } =
    useImportPipeline()
  const { info: cacheInfo, refresh: refreshCache } = useCacheSize()

  // loading-model is handled by ChatInterface's own header indicator — not ExtractionProgress
  const isLoading =
    stage === 'extracting' ||
    stage === 'caching' ||
    stage === 'loading-index'

  const showChat = stage === 'loading-model' || stage === 'ready'

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        color: 'var(--text)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top nav */}
      <nav
        style={{
          padding: '12px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--surface)',
          flexShrink: 0,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.5px' }}>
          Knowledge Base Chat
        </span>
        {!showChat && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <button
              onClick={async () => {
                await clearKnowledgeBase()
                refreshCache()
              }}
              style={{
                background: 'none',
                border: '1px solid var(--danger)',
                color: 'var(--danger)',
                borderRadius: 6,
                padding: '6px 14px',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              Clear cache · {formatCacheSize(cacheInfo)}
            </button>
            <span style={{ fontSize: 11, color: 'var(--muted)' }}>
              port 5199 only — export app (5198) has its own cache
            </span>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Idle: show drop zone */}
        {stage === 'idle' && (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
              gap: 24,
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  marginBottom: 8,
                  letterSpacing: '-0.5px',
                }}
              >
                Import Knowledge Base
              </h1>
              <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 400 }}>
                Drop your exported knowledge base zip to load it for offline chat.
              </p>
            </div>
            <ZipDrop onFile={importZip} disabled={false} />
          </div>
        )}

        {/* Loading stages: show progress */}
        {isLoading && (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
            }}
          >
            <ExtractionProgress stage={stage} progress={progress} error={null} />
          </div>
        )}

        {/* Error: show error + retry options */}
        {stage === 'error' && (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
              gap: 16,
            }}
          >
            <ExtractionProgress stage={stage} progress={progress} error={error} />
            <button
              onClick={clearKnowledgeBase}
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '10px 24px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Clear and try again
            </button>
          </div>
        )}

        {/* loading-model or ready: hand off to ChatInterface (has its own model loading indicator) */}
        {showChat && (
          <ChatInterface oramaDb={oramaDb} manifest={manifest} onClear={clearKnowledgeBase} />
        )}
      </main>
    </div>
  )
}
