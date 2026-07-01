import React from 'react'

export default function ArticleModal({ article, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <span style={{ fontSize: 12, opacity: 0.85 }}>Article {article.number} • Part {article.part}{article.chapterTitle ? ` — ${article.chapterTitle}` : ''}</span>
            <h2>{article.title}</h2>
          </div>
          <button onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <h4>Plain-Language Summary</h4>
          <p>{article.summary}</p>

          {article.amendedBy.length > 0 && (
            <>
              <h4>Amendment History</h4>
              <p>{article.amendedBy.join(', ')}</p>
            </>
          )}

          {article.status === 'omitted' && (
            <>
              <h4>Status</h4>
              <p>This article has been omitted from the Constitution by a subsequent amendment.</p>
            </>
          )}

          <h4>Keywords</h4>
          <p>{article.keywords.join(' • ')}</p>
        </div>
      </div>
    </div>
  )
}
