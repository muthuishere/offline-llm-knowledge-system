import { useState, useRef, useCallback, useEffect } from 'react'
import { useWebLLM } from './useWebLLM'
import { useHybridSearch } from './useHybridSearch'
import type { ChatMessage, Chunk } from '../types'

interface ChatInterfaceProps {
  oramaDb: any | null
  manifestHash: string | null
  onClear: () => void
}

interface MessageWithSources {
  role: 'user' | 'assistant'
  content: string
  sources?: Chunk[]
  streaming?: boolean
}

export default function ChatInterface({ oramaDb, manifestHash, onClear }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<MessageWithSources[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [modelReady, setModelReady] = useState(false)
  const [modelLoading, setModelLoading] = useState(false)
  const [modelError, setModelError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { engine, loadModel, chat } = useWebLLM()
  const { search } = useHybridSearch(oramaDb)

  // Load model on mount
  useEffect(() => {
    if (!manifestHash || modelReady || modelLoading) return
    setModelLoading(true)
    loadModel(manifestHash)
      .then(() => {
        setModelReady(true)
      })
      .catch((err) => {
        setModelError(err instanceof Error ? err.message : String(err))
      })
      .finally(() => {
        setModelLoading(false)
      })
  }, [manifestHash, loadModel, modelReady, modelLoading])

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const embedQuery = useCallback(async (query: string): Promise<number[]> => {
    try {
      const { pipeline } = await import('@xenova/transformers')
      const embedder = await pipeline('feature-extraction', 'Xenova/bge-small-en-v1.5')
      const result = await embedder(query, { pooling: 'mean', normalize: true })
      return Array.from(result.data as Float32Array)
    } catch {
      // Return zero vector as fallback
      return new Array(384).fill(0)
    }
  }, [])

  const handleSubmit = useCallback(async () => {
    const query = input.trim()
    if (!query || isStreaming) return
    if (!engine && !modelReady) return

    setInput('')
    setIsStreaming(true)

    const userMessage: MessageWithSources = { role: 'user', content: query }
    setMessages((prev) => [...prev, userMessage])

    // Add placeholder assistant message
    const assistantPlaceholder: MessageWithSources = {
      role: 'assistant',
      content: '',
      sources: [],
      streaming: true,
    }
    setMessages((prev) => [...prev, assistantPlaceholder])

    try {
      // 1. Embed query
      const queryVector = await embedQuery(query)

      // 2. Hybrid search
      const chunks = await search(query, queryVector)

      // Update sources on placeholder
      setMessages((prev) => {
        const updated = [...prev]
        const last = updated[updated.length - 1]
        if (last.role === 'assistant') {
          updated[updated.length - 1] = { ...last, sources: chunks }
        }
        return updated
      })

      // 3. Build system prompt
      const systemContent =
        chunks.length > 0
          ? `You are a helpful assistant. Use the following context to answer the question:\n\n${chunks.map((c) => c.text).join('\n\n')}`
          : 'You are a helpful assistant.'

      // 4. Build message history for LLM
      const history: ChatMessage[] = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }))

      const chatMessages: ChatMessage[] = [
        { role: 'user', content: systemContent },
        ...history,
        { role: 'user', content: query },
      ]

      // 5. Stream response
      let fullContent = ''
      await chat(chatMessages, (token) => {
        fullContent += token
        setMessages((prev) => {
          const updated = [...prev]
          const last = updated[updated.length - 1]
          if (last.role === 'assistant') {
            updated[updated.length - 1] = {
              ...last,
              content: fullContent,
              streaming: true,
            }
          }
          return updated
        })
      })

      // Mark streaming done
      setMessages((prev) => {
        const updated = [...prev]
        const last = updated[updated.length - 1]
        if (last.role === 'assistant') {
          updated[updated.length - 1] = { ...last, streaming: false }
        }
        return updated
      })
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err)
      setMessages((prev) => {
        const updated = [...prev]
        const last = updated[updated.length - 1]
        if (last.role === 'assistant') {
          updated[updated.length - 1] = {
            ...last,
            content: `Error: ${errMsg}`,
            streaming: false,
          }
        }
        return updated
      })
    } finally {
      setIsStreaming(false)
    }
  }, [input, isStreaming, engine, modelReady, embedQuery, search, chat, messages])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit],
  )

  const handleClearConfirm = useCallback(() => {
    if (window.confirm('Clear the knowledge base? You will need to import a zip again.')) {
      onClear()
    }
  }, [onClear])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0,
        flex: 1,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: modelReady ? 'var(--success)' : modelLoading ? 'var(--accent)' : 'var(--muted)',
            }}
          />
          <span style={{ fontWeight: 600, fontSize: 15 }}>
            {modelReady ? 'Chat ready' : modelLoading ? 'Loading model...' : 'Initializing'}
          </span>
          {modelError && (
            <span style={{ color: 'var(--danger)', fontSize: 12 }}>{modelError}</span>
          )}
        </div>
        <button
          onClick={handleClearConfirm}
          style={{
            background: 'none',
            border: '1px solid var(--danger)',
            color: 'var(--danger)',
            borderRadius: 6,
            padding: '5px 12px',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          Clear knowledge base
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {messages.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              marginTop: 60,
              fontSize: 14,
            }}
          >
            Ask a question about your knowledge base
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
              gap: 6,
            }}
          >
            <div
              style={{
                maxWidth: '75%',
                padding: '10px 14px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: msg.role === 'user' ? 'var(--accent)' : 'var(--surface)',
                color: 'var(--text)',
                fontSize: 14,
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                border: msg.role === 'assistant' ? '1px solid var(--border)' : 'none',
              }}
            >
              {msg.content || (msg.streaming ? <span style={{ color: 'var(--muted)' }}>...</span> : '')}
              {msg.streaming && msg.content && (
                <span
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 14,
                    background: 'var(--accent)',
                    marginLeft: 2,
                    verticalAlign: 'text-bottom',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              )}
            </div>

            {/* Source citations */}
            {msg.role === 'assistant' && msg.sources && msg.sources.length > 0 && !msg.streaming && (
              <div
                style={{
                  maxWidth: '75%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 2 }}>Sources:</span>
                {msg.sources.map((chunk, ci) => (
                  <div
                    key={ci}
                    style={{
                      fontSize: 12,
                      color: 'var(--muted)',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 6,
                      padding: '6px 10px',
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text)' }}>
                      {chunk.source}
                      {chunk.page ? ` p.${chunk.page}` : ''}
                    </span>
                    <span style={{ marginLeft: 6 }}>
                      {chunk.text.slice(0, 120)}
                      {chunk.text.length > 120 ? '...' : ''}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div
        style={{
          padding: '14px 20px',
          borderTop: '1px solid var(--border)',
          background: 'var(--surface)',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 10,
            alignItems: 'flex-end',
          }}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isStreaming || !modelReady}
            placeholder={
              modelReady ? 'Ask a question... (Enter to send, Shift+Enter for newline)' : 'Waiting for model...'
            }
            rows={1}
            style={{
              flex: 1,
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              color: 'var(--text)',
              padding: '10px 14px',
              fontSize: 14,
              resize: 'none',
              minHeight: 42,
              maxHeight: 120,
              outline: 'none',
              fontFamily: 'inherit',
              lineHeight: 1.5,
              overflowY: 'auto',
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={isStreaming || !modelReady || !input.trim()}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 18px',
              cursor: isStreaming || !modelReady || !input.trim() ? 'not-allowed' : 'pointer',
              fontWeight: 600,
              fontSize: 14,
              opacity: isStreaming || !modelReady || !input.trim() ? 0.5 : 1,
              flexShrink: 0,
              height: 42,
              whiteSpace: 'nowrap',
            }}
          >
            {isStreaming ? 'Thinking...' : 'Send'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
