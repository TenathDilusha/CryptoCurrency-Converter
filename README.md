
# CryptoCurrency Converter

A small Node.js + Express web app with an EJS frontend that fetches live cryptocurrency prices and converts amounts between fiat and crypto currencies.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Environment variables](#environment-variables)
- [Run](#run)
- [Files to include on GitHub](#files-to-include-on-github)
- [Contributing](#contributing)
- [License](#license)

## About

This repository contains a learning-focused currency converter that uses a public crypto rates API to convert between fiat currencies (USD, EUR, etc.) and cryptocurrencies (BTC, ETH, etc.). The app is intentionally small and easy to extend.

## Features
- Fetches live rates from a public API (via `axios`).
- Simple responsive UI using EJS templates.
- Server-side conversion logic in `index.js`.

## Demo
Run locally (instructions below) and open `http://localhost:3000` (or your configured `PORT`).

## Prerequisites
- Node.js 16+ and npm

## Install

Clone the repo and install dependencies:

```bash
git clone https://github.com/TenathDilusha/CryptoCurrency-Converter.git
cd CryptoCurrency-Converter
npm install
```

## Environment variables
Create a `.env` file (do NOT commit it). Use `.env.example` as a template.

Example `.env`:

```
API_KEY=your_api_key_here
PORT=3000
```

Load environment variables in `index.js` with `dotenv` if needed.

## Run

Start the server:

```bash
npm start
# for development with auto-restart:
npm run dev
```

Open `http://localhost:3000` in your browser.

## Files to include on GitHub
Upload these project files and folders:

- `index.js` — server entry point
- `package.json` — dependencies and scripts
- `package-lock.json` — recommended to commit (after `npm install`)
- `public/` — static assets (CSS, client JS, images)
- `views/` — EJS templates
- `README.md` — this file
- `.env.example` — example environment variables (safe to include)
- any helper modules or folders your app uses (for example `routes/`)

Do NOT commit:

- `node_modules/`
- `.env` (secrets/API keys)
- OS/editor files like `.DS_Store` or `.vscode/`

(.gitignore is provided in the repo.)

## Contributing
- Open an issue or send a pull request for bug fixes and enhancements.
- Keep changes small and include instructions or examples for new features.

## License
This project has no license specified. Add a `LICENSE` file if you want to set one.

---
If you want, I can also:
- Add a short usage example in the README showing a sample conversion request and response.
- Add screenshots of the UI.
- Add a `LICENSE` file (MIT/Apache/etc.).
