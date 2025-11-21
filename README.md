<div align="center">
   <img width="100%" alt="Data Science Freshers 2025" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Data Science Freshers 2025 — Vite + React App

An interactive, neon-themed landing experience with a particle background, a hero entry animation, and a dashboard with schedule, menu, and venue details.

This repository contains a Vite + React + TypeScript project configured to serve under a sub-path (`/Samplemodel/`).

## Tech Stack

- React 19 + React DOM
- TypeScript 5
- Vite 6 with `@vitejs/plugin-react`
- Tailwind (via CDN in `index.html`)
- lucide-react icons

## Project Structure

```
App.tsx
index.html
index.tsx
metadata.json
package.json
tsconfig.json
vite.config.ts
components/
   Dashboard.tsx
   GlassCard.tsx
   Hero.tsx
   ParticleBackground.tsx
```

## Prerequisites

- Node.js 18+ (LTS recommended)

## Quick Start

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the app at:

- Dev: `http://localhost:3000/Samplemodel/`

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Open: `http://localhost:4173/Samplemodel/`

## Base Path Configuration

This project is served under the sub-path `/Samplemodel/`. The Vite config includes:

```ts
// vite.config.ts
export default defineConfig({
   base: "/Samplemodel/",
   // ...
});
```

And the entry script in `index.html` is referenced with a relative path so it resolves correctly both in dev and preview/build under that base:

```html
<script type="module" src="./index.tsx"></script>
```

If you change the repository name or deploy under a different path, update `base` in `vite.config.ts` and adjust the entry script path if necessary.

## Common Tasks

- Type check only:

```bash
npx tsc --noEmit
```

- Linting/formatting: not configured yet. If you want, add ESLint/Prettier and Tailwind plugins.

## Troubleshooting

- Blank screen but background visible:
   - Ensure you open the app at `/Samplemodel/` (dev: port 3000, preview: 4173).
   - Verify the entry script tag in `index.html` is relative: `<script type="module" src="./index.tsx"></script>`.
   - Hard refresh the browser (Ctrl+Shift+R).

- 404s for JS chunks or `/index.tsx`:
   - Confirm `base` is `/Samplemodel/` in `vite.config.ts` and you are using the correct URL.

- TypeScript TSX parse error around `>` characters:
   - Escape raw `>` inside JSX text as `&gt;`.

## Notes on Tailwind and Import Map

- Tailwind is loaded via CDN in `index.html` for simplicity. For production-grade control, consider installing Tailwind locally and generating a config.
- There is an import map in `index.html`, but Vite handles module resolution/building. You can remove the import map if you prefer to rely solely on local dependencies.

## Deploying

For GitHub Pages via a sub-path:

1. Ensure `base` is set to `"/Samplemodel/"`.
2. Build with `npm run build`.
3. Serve `dist/` with your chosen hosting or configure GitHub Pages (e.g., deploy `dist` to `gh-pages` branch).

---

Maintained by: KatkamKoushik
