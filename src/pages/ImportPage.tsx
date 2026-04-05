import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useImportPipeline } from '../import/useImportPipeline'
import ZipDrop from '../import/ZipDrop'
import ExtractionProgress from '../import/ExtractionProgress'
import ChatInterface from '../import/ChatInterface'

export default function ImportPage() {
  const {
    stage,
    progress,
    error,
    loadFromOpfs,
    importZip,
    clearKnowledgeBase,
    oramaDb,
    manifestHash,
  } = useImportPipeline()

  // On mount: check OPFS for existing knowledge base
  useEffect(() => {
    loadFromOpfs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isLoading =
    stage === 'extracting' || stage === 'loading-index' || stage === 'loading-model'

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
          local-llm-import-export
        </span>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <Link
            to="/import"
            style={{
              color: 'var(--accent)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Import
          </Link>
          <Link
            to="/export"
            style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: 14,
            }}
          >
            Export
          </Link>
        </div>
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

        {/* Error: show error + retry */}
        {stage === 'error' && (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
              gap: 20,
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

        {/* Ready: show chat */}
        {stage === 'ready' && (
          <ChatInterface
            oramaDb={oramaDb}
            manifestHash={manifestHash}
            onClear={clearKnowledgeBase}
          />
        )}
      </main>
    </div>
  )
}
