import { useState, useCallback } from 'react'
import { useImportPipeline } from '../import/useImportPipeline'
import ZipDrop from '../import/ZipDrop'
import ExtractionProgress from '../import/ExtractionProgress'
import ChatInterface from '../import/ChatInterface'
import { useCacheSize, formatCacheSize } from '../lib/useCacheSize'

const modalStyles = {
  backdrop: { position: 'fixed' as const, inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 },
  modal: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, width: '100%', maxWidth: 560, maxHeight: '80vh', display: 'flex', flexDirection: 'column' as const, overflow: 'hidden' },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border)', flexShrink: 0 },
  title: { fontSize: 15, fontWeight: 700, color: 'var(--text)' } as React.CSSProperties,
  close: { background: 'none', border: 'none', color: 'var(--muted)', fontSize: 16, cursor: 'pointer', padding: '2px 6px' } as React.CSSProperties,
  tabs: { display: 'flex', borderBottom: '1px solid var(--border)', flexShrink: 0 },
  tab: (active: boolean): React.CSSProperties => ({ flex: 1, padding: '10px 16px', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent', color: active ? 'var(--text)' : 'var(--muted)', cursor: 'pointer' }),
  body: { overflowY: 'auto' as const, flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column' as const, gap: 14 },
  lead: { fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 } as React.CSSProperties,
  stepItem: { display: 'flex', gap: 12, fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 } as React.CSSProperties,
  stepIcon: { fontSize: 18, flexShrink: 0, width: 24, textAlign: 'center' as const, marginTop: 1 },
  techItem: { fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6, padding: '10px 14px' } as React.CSSProperties,
  techLabel: { display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--accent-hover)', fontFamily: 'monospace', marginBottom: 3 } as React.CSSProperties,
  infoBtn: { width: 30, height: 30, borderRadius: '50%', border: '1px solid var(--border)', background: 'none', color: 'var(--muted)', fontSize: 13, fontWeight: 700, cursor: 'pointer' } as React.CSSProperties,
}

export default function ImportPage() {
  const { stage, progress, error, importZip, clearKnowledgeBase, oramaDb, manifest, chunks, graphEdges } =
    useImportPipeline()
  const { info: cacheInfo, refresh: refreshCache } = useCacheSize()
  const [infoOpen, setInfoOpen] = useState(false)
  const [infoTab, setInfoTab] = useState<'functional' | 'technical'>('functional')
  const closeInfo = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).dataset.backdrop) setInfoOpen(false)
  }, [])

  // loading-model is handled by ChatInterface's own header indicator — not ExtractionProgress
  const isLoading =
    stage === 'extracting' ||
    stage === 'caching' ||
    stage === 'loading-index'

  const showChat = stage === 'loading-model' || stage === 'ready'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', display: 'flex', flexDirection: 'column' }}>

      {/* Info modal */}
      {infoOpen && (
        <div style={modalStyles.backdrop} data-backdrop="1" onClick={closeInfo}>
          <div style={modalStyles.modal}>
            <div style={modalStyles.header}>
              <span style={modalStyles.title}>About this app</span>
              <button style={modalStyles.close} onClick={() => setInfoOpen(false)}>✕</button>
            </div>
            <div style={modalStyles.tabs}>
              {(['functional', 'technical'] as const).map(tab => (
                <button key={tab} style={modalStyles.tab(infoTab === tab)} onClick={() => setInfoTab(tab)}>
                  {tab === 'functional' ? 'What it does' : 'How it works'}
                </button>
              ))}
            </div>
            <div style={modalStyles.body}>
              {infoTab === 'functional' ? (
                <>
                  <p style={modalStyles.lead}>Chat with your documents completely offline — no server, no API keys, no internet after the first load.</p>
                  <div style={modalStyles.stepItem}><span style={modalStyles.stepIcon}>📥</span><div><strong>Drop the exported zip</strong><br/>The zip was built by the Export app — it contains your documents, search index, knowledge graph, and the chat model.</div></div>
                  <div style={modalStyles.stepItem}><span style={modalStyles.stepIcon}>⏳</span><div><strong>Wait for extraction</strong><br/>The browser extracts the zip into local OPFS storage. Takes 1–3 minutes on first load. Drop the same zip again — it's instant.</div></div>
                  <div style={modalStyles.stepItem}><span style={modalStyles.stepIcon}>💬</span><div><strong>Ask questions</strong><br/>The AI answers from your documents. Sources are shown below each answer.</div></div>
                  <div style={modalStyles.stepItem}><span style={modalStyles.stepIcon}>📖</span><div><strong>Gets smarter as you use it</strong><br/>The first question about a document synthesizes a wiki page and caches it locally. Subsequent questions on that document use the cached page — zero model calls.</div></div>
                </>
              ) : (
                <>
                  <p style={modalStyles.lead}>Everything runs in the browser. No server, no Python, no backend. The full inference pipeline runs on-device.</p>
                  <div style={modalStyles.techItem}><span style={modalStyles.techLabel}>OPFS extraction</span>fflate streaming unzip → OPFS, keyed by manifest_hash. Re-drop = instant load from OPFS.</div>
                  <div style={modalStyles.techItem}><span style={modalStyles.techLabel}>Embed model restore</span>embed-cache/ entries written back to Cache API under original HuggingFace CDN URLs. Transformers.js loads them with zero network calls.</div>
                  <div style={modalStyles.techItem}><span style={modalStyles.techLabel}>Chat model from blob URLs</span>Model safetensors shards read from OPFS → Blob → blob: URLs → injected into WebLLM appConfig. Revoked after init to free memory.</div>
                  <div style={modalStyles.techItem}><span style={modalStyles.techLabel}>Query pipeline (per message)</span>Embed query → Orama BM25+vector hybrid → top-3 RAG chunks → 2-hop BFS graph expansion → OPFS wiki lookup → three-slot user-turn context: wiki (~800 tok) → graph (~1,750 tok) → RAG (~875 tok) → WebLLM stream.</div>
                  <div style={modalStyles.techItem}><span style={modalStyles.techLabel}>Context always in user turn</span>Small models (Phi-3, Gemma-2B) attend to user-turn content far more reliably than system-prompt content. All retrieved context is injected into the user message, not the system prompt.</div>
                  <div style={modalStyles.techItem}><span style={modalStyles.techLabel}>SharedArrayBuffer</span>Required by WebLLM's WASM threading. coi-serviceworker provides COOP/COEP headers on first load, reloads the page, then runs normally.</div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.5px' }}>
            Knowledge Base Chat
          </span>
          <button onClick={() => setInfoOpen(true)} style={modalStyles.infoBtn} title="About this app">?</button>
        </div>
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
          <ChatInterface
            oramaDb={oramaDb}
            manifest={manifest}
            onClear={clearKnowledgeBase}
            chunks={chunks}
            graphEdges={graphEdges}
          />
        )}
      </main>
    </div>
  )
}
