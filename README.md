# Aiyeen Pakistan — آئین پاکستان

A constitution explorer for Pakistan: all Articles, Schedules, and 27 Amendments, with plain-language summaries and a Gemini-powered AI assistant.

## Stack
- React + Vite (frontend, static — no traditional backend needed)
- Vercel Serverless Function (`/api/chat.js`) — calls Gemini securely, hides your API key from the browser
- Data lives in `src/data/constitution.js` — no database required since constitution text doesn't change often
- Bookmarks stored in browser localStorage (per-device, no login needed)

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:5173

The chatbot will show an error locally unless you also run `vercel dev` (which emulates the `/api` functions) — see below.

## Deploy to Vercel via Git (recommended)

1. **Push this project to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Aiyeen Pakistan"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aiyeen-pakistan.git
   git push -u origin main
   ```

2. **Get a Gemini API key**
   Go to https://aistudio.google.com/app/apikey and create a free API key.

3. **Import the project in Vercel**
   - Go to https://vercel.com/new
   - Select "Import Git Repository" and pick your repo
   - Framework Preset: Vite (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)

4. **Add your Gemini API key as an Environment Variable**
   - In the Vercel project import screen (or later under Project → Settings → Environment Variables):
   - Name: `GEMINI_API_KEY`
   - Value: paste your key from step 2
   - Apply to: Production, Preview, and Development

5. **Click Deploy.** Vercel builds the static site and automatically deploys `api/chat.js` as a serverless function. Your live URL (e.g. `aiyeen-pakistan.vercel.app`) will have both the site and the working chatbot.

6. **Future updates**: just `git push` — Vercel auto-redeploys on every push to `main`.

## Project structure
```
aiyeen-pakistan/
├── api/
│   └── chat.js          # Serverless function → Gemini API
├── src/
│   ├── components/
│   │   ├── ChatBot.jsx
│   │   └── ArticleModal.jsx
│   ├── data/
│   │   └── constitution.js   # All articles, schedules, amendments
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vercel.json
└── package.json
```

## Notes
- Never commit your real API key — it only lives in Vercel's Environment Variables.
- The chatbot endpoint (`/api/chat`) keeps your `GEMINI_API_KEY` server-side only — it is never sent to the browser.
- All content is for educational purposes; it is not legal advice. Encourage users to consult the official Gazette text or a lawyer for legal matters.
