// /api/chat.js
// Vercel Serverless Function — calls Google's Gemini API.
// The GEMINI_API_KEY is read from a Vercel Environment Variable, never exposed to the browser.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Server is not configured with a Gemini API key. Set GEMINI_API_KEY in Vercel project settings.' })
  }

  const { message, history = [] } = req.body || {}
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Missing message' })
  }

  const systemInstruction = {
    role: 'user',
    parts: [{
      text: `You are the "Aiyeen Pakistan Assistant" — a helpful, neutral guide to the Constitution of Pakistan, 1973 (as amended through the 27th Amendment, 2025).
Rules:
- Answer clearly and concisely, in plain language, citing specific Article numbers where relevant (e.g. "Article 19A").
- You are educational only — you are not a lawyer and do not give legal advice. For real legal matters, tell the user to consult a licensed lawyer.
- Be neutral and factual about politically sensitive topics (e.g. the 27th Amendment, military courts, judicial reforms) — present what the Constitution/amendment says without taking political sides.
- If unsure of an exact legal detail, say so rather than guessing.
- Keep answers under ~150 words unless the user asks for more detail.
- You may answer in English or Urdu depending on what language the user writes in.`
    }]
  }

  const contents = [
    systemInstruction,
    { role: 'model', parts: [{ text: 'Understood. I will help users understand the Constitution of Pakistan clearly, neutrally, and educationally.' }] },
    ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
    { role: 'user', parts: [{ text: message }] }
  ]

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          generationConfig: { temperature: 0.4, maxOutputTokens: 500 }
        })
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({ error: data?.error?.message || 'Gemini API error' })
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response. Please try rephrasing your question.'
    return res.status(200).json({ reply })
  } catch (err) {
    return res.status(500).json({ error: 'Failed to reach Gemini API: ' + err.message })
  }
}
