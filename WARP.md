# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Frontend single-page app built with Vite + React (TypeScript), React Router, and Tailwind CSS.
- Entry: index.html → src/main.tsx mounts <App/> inside BrowserRouter.
- Routing: src/App.tsx defines routes for Home, Services, Portfolio, About, Contact; shared layout via Navbar and Footer.
- Styling: Tailwind via src/index.css, configured by tailwind.config.js and postcss.config.js.
- Tooling: ESLint (flat config), TypeScript (app/node tsconfigs), Vite + @vitejs/plugin-react-swc.

Commands
- Install deps (pnpm is implied by pnpm-lock.yaml):
  - pnpm install
- Start dev server (HMR):
  - pnpm dev
  - Options: vite flags are supported, e.g. pnpm dev -- --open --host
- Typecheck + build production bundle:
  - pnpm build
- Lint all files:
  - pnpm lint
- Preview built app locally (after build):
  - pnpm preview
- Tests: no test runner is configured in package.json; running single tests is not applicable until a test framework (e.g., Vitest/Jest) is added.

Architecture and key files
- src/main.tsx: React root, wraps App in BrowserRouter.
- src/App.tsx: top-level layout and <Routes> mapping to page components.
- src/pages/*: route-level pages (Home, Services, Portfolio, About, Contact).
- src/components/*: shared UI (Navbar, Footer).
- index.html: single HTML shell used by Vite; sets title/metadata.
- Tailwind setup: tailwind.config.js (content globs), src/index.css (Tailwind layers), postcss.config.js.
- Build/dev config: vite.config.ts uses SWC React plugin for fast refresh and builds.
- Linting: eslint.config.js (flat config) with @eslint/js, typescript-eslint, react-hooks, react-refresh.
- TypeScript: tsconfig.app.json (strict, bundler module resolution) and tsconfig.node.json for tooling; root tsconfig.json uses project references.

Important notes from README and config
- React Compiler is not compatible with @vitejs/plugin-react-swc; avoid enabling the React Compiler while using this plugin.
- For type-aware ESLint rules, you can switch to typescript-eslint’s recommendedTypeChecked/strictTypeChecked configs with parserOptions.project pointing at tsconfig.node.json and tsconfig.app.json if needed.

Conventions
- Routing paths are stable and used in the Navbar via NavLink; active link styling depends on isActive.
- SPA deployment requires history fallback to index.html on the host (Vite preview already handles this).
