# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (HMR)
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
npm run lint      # ESLint
```

No test runner is configured.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the project and deploys `dist/` to GitHub Pages via `peaceiris/actions-gh-pages`.

## Architecture

Single-page marketing site for Stratix Labs (Chilean 3D printing / laser cutting workshop). React 19 + Vite, no TypeScript, no router.

**State lives entirely in `src/App.jsx`.** Four design-variant keys (`hero`, `navTheme`, `density`, `accent`) are persisted to `localStorage` under `stratix_tweaks` and applied as CSS custom properties at runtime:

- `--orange` ← `state.accent` (user-selectable brand color)
- `--pad-section-y` ← mapped from `state.density` via `densityMap`

**Content data** (`materials`, `shop`, `igTiles`) is in `src/data.js` — edit here to change copy or product listings.

**Styling approach:** `src/index.css` is the primary stylesheet — it defines all design tokens (`:root` CSS custom properties), layout utilities (`.wrap`, `.section`, `.section--dark`), and all component-level CSS classes. Tailwind is configured but used minimally; the Tailwind config (`tailwind.config.js`) maps token names to `var(--...)` references so Tailwind utilities like `text-orange` resolve to the CSS variable.

**Font stack:** Montserrat (headings/UI), JetBrains Mono (labels/eyebrows/nav), Instrument Serif (italic accent via `.italic-serif`).

**`Tweaks` panel** (`src/components/Tweaks.jsx`) is a floating design-variant switcher. It is hidden by default and shown/hidden via `postMessage` events (`__activate_edit_mode` / `__deactivate_edit_mode`), meaning this site is built to be embedded in a parent iframe editor. The parent frame also receives state-change notifications via `__edit_mode_set_keys`.

**Nav color logic** (`src/components/Nav.jsx`): the nav toggles `.nav--dark` based on scroll position — it goes dark when overlapping any `.section--dark` or `.footer` element, or when `state.hero === 'bold'` and the user hasn't scrolled past 70% of the viewport height.

**`<Instagram />` is commented out** in `App.jsx` — the component and data (`igTiles`) exist but the section is not rendered.
