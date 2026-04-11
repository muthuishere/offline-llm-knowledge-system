import { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { useInference } from './useInference'
import { useHybridSearch } from './useHybridSearch'
import { useEmbedWorker } from './useEmbedWorker'
import { buildChatMessages } from './chatMessages'
import { buildAdjacency, graphBFS, getChunksByIds } from './graphSearch'
import { fetchWikiPage } from './wikiCache'
import type { ChatMessage, Chunk, Manifest, GraphEdge } from '../types'

interface ChatInterfaceProps {
  oramaDb: any | null
  manifest: Manifest | null
  onClear: () => void
  chunks: Chunk[]
  graphEdges: GraphEdge[]
}

interface MessageWithSources {
  role: 'user' | 'assistant'
  content: string
  sources?: Chunk[]
  streaming?: boolean
}


export default function ChatInterface({ oramaDb, manifest, onClear, chunks, graphEdges }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<MessageWithSources[]>([])
  // Ref keeps messages accessible in useEffect/callbacks without being a dep
  const messagesRef = useRef<MessageWithSources[]>([])
  useEffect(() => { messagesRef.current = messages }, [messages])

  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [modelReady, setModelReady] = useState(false)
  const [modelError, setModelError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { engine, loading: modelLoading, engineType, loadModel, chat } = useInference()
  const { search } = useHybridSearch(oramaDb)
  const { embedQuery } = useEmbedWorker()

  // Build adjacency map once when graphEdges arrive — O(edges), stable across renders
  const adjacency = useMemo(
    () => (graphEdges.length > 0 ? buildAdjacency(graphEdges) : new Map<string, string[]>()),
    [graphEdges],
  )

  // Derive modelReady from engine presence — not from loadModel() resolving.
  // This is the only correct source of truth: the engine object IS the signal.
  // Previously, loadModel().then(setModelReady) fired on the latch's early return
  // (while the real load was still in progress), setting modelReady too early.
  useEffect(() => {
    if (engine && !modelReady) setModelReady(true)
  }, [engine, modelReady])

  // Trigger load once manifest arrives. loadModel's shared-promise pattern
  // ensures concurrent calls wait on the same in-flight load.
  useEffect(() => {
    if (!manifest) return
    loadModel(manifest).catch((err) =>
      setModelError(err instanceof Error ? err.message : String(err)),
    )
  }, [manifest, loadModel])

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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

      // 2. Hybrid search (RAG)
      const ragChunks = await search(query, queryVector)

      // 2a. Graph BFS — expand RAG results through semantic similarity edges
      let graphChunks: Chunk[] = []
      if (adjacency.size > 0 && chunks.length > 0) {
        const ragIds = ragChunks.map((c) => c.id)
        const expandedIds = graphBFS(adjacency, ragIds, 2)
        const ragIdSet = new Set(ragIds)
        // Graph slot: expanded neighbors only (RAG chunks already in their own slot)
        graphChunks = getChunksByIds(chunks, expandedIds).filter((c) => !ragIdSet.has(c.id))
      }

      // 2b. Wiki page — lazy OPFS-cached synthesis for top-1 source document
      let wikiContent = ''
      if (engine && manifest && ragChunks.length > 0) {
        const topSource = ragChunks[0].source
        const contextText = ragChunks.map((c) => c.text).join('\n\n')
        wikiContent = await fetchWikiPage(topSource, manifest.manifest_hash, engine, contextText, engineType)
      }

      // Update sources on placeholder (show RAG hits)
      setMessages((prev) => {
        const updated = [...prev]
        const last = updated[updated.length - 1]
        if (last.role === 'assistant') {
          updated[updated.length - 1] = { ...last, sources: ragChunks }
        }
        return updated
      })

      // 3. Build OpenAI-style messages — wiki → graph → RAG order in user turn.
      // Filter out error messages — they should never appear as assistant turns
      // in the model's conversation history (they confuse small models badly).
      const history: ChatMessage[] = messages
        .filter((m) => !(m.role === 'assistant' && m.content.startsWith('Error:')))
        .map((m) => ({ role: m.role, content: m.content }))
      const chatMessages = buildChatMessages(history, query, ragChunks, manifest, {
        wikiContent,
        graphChunks,
      })

      // Debug logging — helps diagnose quality issues with small models
      console.group('[Chat] Sending to model')
      console.log('Query:', query)
      console.log(`RAG chunks (${ragChunks.length}):`, ragChunks.map((c) => ({
        source: c.source,
        preview: c.text.slice(0, 100),
      })))
      console.log(`Graph chunks (${graphChunks.length}):`, graphChunks.map((c) => ({
        source: c.source,
        preview: c.text.slice(0, 100),
      })))
      console.log(`Wiki content (${wikiContent.length} chars):`, wikiContent.slice(0, 200))
      console.log('System prompt:', chatMessages[0]?.content?.slice(0, 500))
      console.log('Full messages:', JSON.stringify(chatMessages, null, 2))
      console.groupEnd()

      // 4. Stream response
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
  }, [input, isStreaming, engine, modelReady, embedQuery, search, chat, messages, adjacency, chunks, manifest])

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

  // window.kb — console API for testing without the UI.
  //
  // window.kb.ask("question")      → embed + search + LLM → returns answer string
  // window.kb.search("question")   → embed + search → logs + returns chunks
  // window.kb.prompt("question")   → embed + search → logs the full messages array, no LLM call
  // window.kb.history()            → logs current conversation history
  // window.kb.batch(["q1","q2"])   → runs ask() on each question sequentially, logs table
  //
  // Legacy: window.askchat("question") still works as an alias for window.kb.ask()
  useEffect(() => {
    const guard = (fn: string) => {
      if (!engine)   { console.error(`[kb.${fn}] Engine not loaded yet`);     return false }
      if (!oramaDb)  { console.error(`[kb.${fn}] No knowledge base loaded`);  return false }
      return true
    }

    const doSearch = async (query: string): Promise<Chunk[]> => {
      const queryVector = await embedQuery(query)
      return search(query, queryVector)
    }

    const doAsk = async (query: string): Promise<string> => {
      if (!guard('ask')) return ''
      console.time('[kb.ask] total')
      const ragChunksInner = await doSearch(query)
      const msgs = buildChatMessages([], query, ragChunksInner, manifest)
      console.log('[kb.ask] messages:', JSON.stringify(msgs, null, 2))
      let output = ''

      if (engineType === 'wllama') {
        // Wllama: use chat() which handles streaming
        await chat(msgs, (token) => { output += token })
      } else {
        // WebLLM: OpenAI-compatible streaming
        const stream = await engine!.chat.completions.create({ messages: msgs, stream: true, max_tokens: 512 })
        for await (const chunk of stream) {
          const t = chunk.choices[0]?.delta?.content ?? ''
          if (t) output += t
        }
      }

      console.timeEnd('[kb.ask] total')
      console.log('[kb.ask] answer:', output)
      return output
    }

    const kb = {
      ask: doAsk,

      search: async (query: string) => {
        if (!guard('search')) return []
        const results = await doSearch(query)
        console.table(results.map((c, i) => ({
          doc: i + 1,
          source: c.source,
          chars: c.text.length,
          preview: c.text.slice(0, 120).replace(/\n/g, ' '),
        })))
        return results
      },

      prompt: async (query: string) => {
        if (!guard('prompt')) return null
        const ragResults = await doSearch(query)
        const msgs = buildChatMessages([], query, ragResults, manifest)
        console.group('[kb.prompt] Full message array')
        msgs.forEach((m, i) => console.log(`[${i}] ${m.role} (${m.content.length} chars):\n${m.content}`))
        console.groupEnd()
        return msgs
      },

      history: () => {
        const msgs = messagesRef.current
        if (msgs.length === 0) { console.log('[kb.history] No messages yet'); return [] }
        console.table(msgs.map((m, i) => ({
          '#': i,
          role: m.role,
          chars: m.content.length,
          preview: m.content.slice(0, 100).replace(/\n/g, ' '),
        })))
        return msgs
      },

      batch: async (questions: string[]) => {
        if (!guard('batch')) return
        console.log(`[kb.batch] Running ${questions.length} questions...`)
        const results: { question: string; answer: string; ms: number }[] = []
        for (const q of questions) {
          const t0 = Date.now()
          const answer = await doAsk(q)
          results.push({ question: q, answer: answer.slice(0, 120), ms: Date.now() - t0 })
        }
        console.table(results)
        return results
      },
    }

    ;(window as any).kb = kb
    ;(window as any).askchat = doAsk  // legacy alias

    console.log(
      '%c[kb] Console API ready',
      'color: #4ade80; font-weight: bold',
      '\n  kb.ask("question")          → search + LLM answer',
      '\n  kb.search("question")       → show retrieved chunks',
      '\n  kb.prompt("question")       → show full prompt without calling LLM',
      '\n  kb.history()                → show current chat history',
      '\n  kb.batch(["q1","q2"])       → run multiple questions',
      '\n  askchat("question")         → alias for kb.ask()',
    )
  }, [engine, oramaDb, manifest, embedQuery, search, engineType, chat])

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
            {modelReady
              ? `Chat ready${engineType === 'wllama' ? ' (CPU)' : engineType === 'webllm' ? ' (GPU)' : ''}`
              : modelLoading
                ? engineType === 'wllama' ? 'Loading model (CPU)...' : 'Uploading to GPU...'
                : 'Initializing'}
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
              className={msg.role === 'assistant' ? 'markdown' : undefined}
              style={{
                maxWidth: '75%',
                padding: '10px 14px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: msg.role === 'user' ? 'var(--accent)' : 'var(--surface)',
                color: 'var(--text)',
                fontSize: 14,
                lineHeight: 1.6,
                wordBreak: 'break-word',
                border: msg.role === 'assistant' ? '1px solid var(--border)' : 'none',
              }}
            >
              {msg.role === 'assistant' ? (
                msg.content ? (
                  <>
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                    {msg.streaming && (
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
                  </>
                ) : (
                  msg.streaming ? <span style={{ color: 'var(--muted)' }}>...</span> : ''
                )
              ) : (
                <span style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</span>
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
