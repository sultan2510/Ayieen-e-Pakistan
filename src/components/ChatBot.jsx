import React, { useState, useRef, useEffect } from 'react'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Assalam-o-Alaikum! I\'m your Aiyeen Pakistan assistant. Ask me anything about the Constitution — articles, rights, amendments, or how government institutions work.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, loading])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(m => [...m, { role: 'user', text }])
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-8).map(m => ({ role: m.role === 'user' ? 'user' : 'model', text: m.text }))
        })
      })
      const data = await res.json()
      if (data.error) {
        setMessages(m => [...m, { role: 'bot', text: `Error: ${data.error}` }])
      } else {
        setMessages(m => [...m, { role: 'bot', text: data.reply }])
      }
    } catch (err) {
      setMessages(m => [...m, { role: 'bot', text: 'Sorry, I could not reach the server. Please check your connection and try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => { if (e.key === 'Enter') send() }

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(o => !o)} aria-label="Open chat">
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <span>Aiyeen Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>{m.text}</div>
            ))}
            {loading && <div className="msg bot loading">Thinking…</div>}
          </div>
          <div className="chat-input-row">
            <input
              placeholder="Ask about an article, right, or amendment…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
            />
            <button onClick={send} disabled={loading || !input.trim()}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}
