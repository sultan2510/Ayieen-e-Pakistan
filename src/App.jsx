import React, { useState, useMemo, useEffect } from 'react'
import { articles, schedules, amendments, parts, preamble } from './data/constitution.js'
import ChatBot from './components/ChatBot.jsx'
import ArticleModal from './components/ArticleModal.jsx'

const VIEWS = ['browse', 'amendments', 'schedules', 'bookmarks']

export default function App() {
  const [view, setView] = useState('browse')
  const [activePart, setActivePart] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [bookmarks, setBookmarks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('aiyeen-bookmarks') || '[]') } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem('aiyeen-bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const toggleBookmark = (id) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id])
  }

  const filteredArticles = useMemo(() => {
    let list = articles
    if (activePart !== 'all') list = list.filter(a => a.part === activePart)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.number.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.keywords.some(k => k.toLowerCase().includes(q))
      )
    }
    return list
  }, [activePart, query])

  const bookmarkedArticles = articles.filter(a => bookmarks.includes(a.id))

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-mark">آ</div>
            <div className="brand-text">
              <h1>Aiyeen Pakistan</h1>
              <div className="urdu">آئین پاکستان</div>
            </div>
          </div>
          <nav className="topnav">
            <button className={view === 'browse' ? 'active' : ''} onClick={() => setView('browse')}>Articles</button>
            <button className={view === 'amendments' ? 'active' : ''} onClick={() => setView('amendments')}>Amendments</button>
            <button className={view === 'schedules' ? 'active' : ''} onClick={() => setView('schedules')}>Schedules</button>
            <button className={view === 'bookmarks' ? 'active' : ''} onClick={() => setView('bookmarks')}>Bookmarks ({bookmarks.length})</button>
          </nav>
        </div>
      </header>

      {view === 'browse' && (
        <div className="hero">
          <div className="hero-inner">
            <div className="hero-eyebrow">دستور پاکستان</div>
            <h2>The Constitution of Pakistan, 1973</h2>
            <p>All 280+ Articles, plain-language summaries, schedules and all 27 amendments — searchable, bookmarkable, and explained.</p>
            <div className="searchbox">
              <input
                placeholder="Search by article number, topic, or keyword…"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <button onClick={() => {}}>Search</button>
            </div>
          </div>
        </div>
      )}

      <main className="content">
        {view === 'browse' && (
          <>
            <aside className="sidebar">
              <h3>Parts of the Constitution</h3>
              <button className={`part-link ${activePart === 'all' ? 'active' : ''}`} onClick={() => setActivePart('all')}>
                All Articles <small>{articles.length} total</small>
              </button>
              {parts.map(p => (
                <button key={p.number} className={`part-link ${activePart === p.number ? 'active' : ''}`} onClick={() => setActivePart(p.number)}>
                  Part {p.number} <small>{p.title}</small>
                </button>
              ))}
            </aside>

            <section>
              <h2 className="section-title">
                {activePart === 'all' ? 'All Articles' : `Part ${activePart}`}
              </h2>
              <div className="section-sub">{filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found</div>

              {activePart === 'all' && !query && (
                <div className="amend-card" style={{ marginBottom: 20 }}>
                  <div className="amend-title" style={{ marginTop: 0 }}>Preamble</div>
                  <p className="amend-summary">{preamble.summary}</p>
                </div>
              )}

              <div className="article-grid">
                {filteredArticles.length === 0 && (
                  <div className="empty-state">
                    <div className="big">📜</div>
                    No articles match your search. Try a different keyword.
                  </div>
                )}
                {filteredArticles.map(a => (
                  <ArticleCard key={a.id} article={a} bookmarked={bookmarks.includes(a.id)} onToggleBookmark={toggleBookmark} onOpen={() => setSelected(a)} />
                ))}
              </div>
            </section>
          </>
        )}

        {view === 'amendments' && (
          <section style={{ gridColumn: '1 / -1' }}>
            <h2 className="section-title">Constitutional Amendments</h2>
            <div className="section-sub">All 27 amendments to the Constitution of Pakistan, 1973 — from 1974 to 2025.</div>
            {amendments.map(a => (
              <div className="amend-card" key={a.id}>
                <div className="amend-head">
                  <span className="amend-num">{a.number} Amendment</span>
                  <span className="amend-year">{a.year}</span>
                </div>
                <div className="amend-title">{a.title}</div>
                <p className="amend-summary">{a.summary}</p>
                <div className="amend-meta">Government: {a.government} • Articles affected: {a.articlesAmended.join(', ')}</div>
              </div>
            ))}
          </section>
        )}

        {view === 'schedules' && (
          <section style={{ gridColumn: '1 / -1' }}>
            <h2 className="section-title">Schedules</h2>
            <div className="section-sub">The six Schedules attached to the Constitution.</div>
            {schedules.map(s => (
              <div className="amend-card" key={s.id}>
                <div className="amend-head">
                  <span className="amend-num">{s.number} Schedule</span>
                </div>
                <div className="amend-title">{s.title}</div>
                <p className="amend-summary">{s.summary}</p>
                <div className="amend-meta">{s.details}</div>
              </div>
            ))}
          </section>
        )}

        {view === 'bookmarks' && (
          <section style={{ gridColumn: '1 / -1' }}>
            <h2 className="section-title">Your Bookmarks</h2>
            <div className="section-sub">Saved locally on this device.</div>
            <div className="article-grid">
              {bookmarkedArticles.length === 0 && (
                <div className="empty-state">
                  <div className="big">🔖</div>
                  No bookmarks yet. Tap the ☆ on any article to save it here.
                </div>
              )}
              {bookmarkedArticles.map(a => (
                <ArticleCard key={a.id} article={a} bookmarked={true} onToggleBookmark={toggleBookmark} onOpen={() => setSelected(a)} />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        Aiyeen Pakistan — an independent educational resource. Not a substitute for legal advice. Always consult the official Gazette text for legal purposes.
      </footer>

      {selected && <ArticleModal article={selected} onClose={() => setSelected(null)} />}
      <ChatBot />
    </div>
  )
}

function ArticleCard({ article, bookmarked, onToggleBookmark, onOpen }) {
  return (
    <div className={`article-card ${article.amendedBy.length ? 'amended' : ''} ${article.status === 'omitted' ? 'omitted' : ''}`}>
      <div className="article-head" onClick={onOpen}>
        <div>
          <span className="article-num">Article {article.number}</span>
          <div className="article-title">{article.title}</div>
        </div>
        <button
          className={`bookmark-btn ${bookmarked ? 'active' : ''}`}
          onClick={(e) => { e.stopPropagation(); onToggleBookmark(article.id) }}
          aria-label="Bookmark"
        >
          {bookmarked ? '★' : '☆'}
        </button>
      </div>
      <p className="article-summary" onClick={onOpen} style={{ cursor: 'pointer' }}>{article.summary}</p>
      <div className="tag-row">
        <span className="tag">Part {article.part}</span>
        {article.chapterTitle && <span className="tag">{article.chapterTitle}</span>}
        {article.status === 'omitted' && <span className="tag omitted">Omitted</span>}
        {article.amendedBy.map(am => <span key={am} className="tag amend">{am}</span>)}
      </div>
    </div>
  )
}
