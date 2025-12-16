# CryptoCurrency Converter

Lightweight Node.js + Express app that fetches live cryptocurrency prices and converts amounts between fiat currencies and cryptocurrencies.

## What to upload to GitHub
- `index.js` — main server file (entry point).
- `package.json` — project metadata and scripts.
- `package-lock.json` — (recommended) locks exact dependency versions.
- `public/` — static assets (styles, client JS, images).
- `views/` — EJS templates used by the app.
- `README.md` — this file.
- Any config or helper files required to run the app (for example `utils.js`, `routes/`, etc.).

Do NOT upload:
- `node_modules/` — huge and platform-specific. Add this to `.gitignore`.
- `.env` or other files that contain API keys or secrets.
- Local editor files (e.g. `.vscode/`), OS files (e.g. `.DS_Store`).

## Suggested .gitignore
```
node_modules/
.env
.DS_Store
npm-debug.log
coverage/
dist/
```

## Install & run (npm)
1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm start
# or for development with automatic restarts (if you use nodemon):
npx nodemon index.js
```

If `package.json` defines a `start` script (for example `node index.js`), use `npm start`.

## Environment / API keys
- If the app uses a crypto rates provider (CoinGecko, CoinAPI, etc.), keep API keys in a `.env` file and load them with `dotenv` in `index.js`.
- Example `.env` entries:

```
API_KEY=your_api_key_here
PORT=3000
```

Do NOT commit `.env` to GitHub.

## Notes & tips
- Commit `package-lock.json` so others install the exact dependency tree you tested.
- Add a short `usage` section or screenshots to the README for clarity.
- If the project will be public and uses a paid API, consider showing how to obtain a free API key or switch to a free provider.

---
If you want, I can also add a `.gitignore` file and a short `package.json` `start` script if they're missing.
