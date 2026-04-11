## Project Overview

Static website for **Dojo Senshi**, a martial arts school (karate & kickboxing) in Vitoria, Spain. No build tools, no framework, no package manager — pure HTML, CSS, and vanilla JavaScript served directly from the filesystem or a static host.

## Running the site

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

There are no build steps, no linting scripts, and no test suite.

## File structure

- `index.html` — homepage (root level)
- `pages/*.html` — all inner pages (`dojo`, `karate`, `kickboxing`, `horarios-precios`, `contacto`)
- `assets/css/styles.css` — **single shared stylesheet** for the entire site; uses CSS custom properties defined in `:root`
- `assets/css/reseteo.css` — CSS reset loaded before `styles.css`
- `assets/js/index.js` — **single shared script** loaded on every page via `defer`; contains all JS logic
- `assets/images/` — all media assets (photos, video, icons)

## CSS architecture

All design tokens live in `:root` in `src/styles.css`:

```css
--primary-color, --secondary-color, --third-color, --fourth-color
--shadow-sm, --shadow-md, --shadow-lg
--card-radius, --max-width (1000px)
```

Always use these variables instead of hard-coded values. Background images in CSS use the path `../images/` (relative to `assets/css/`), which resolves to `assets/images/`.

## JavaScript conventions

`src/index.js` is split into guarded sections — each feature checks for the relevant DOM elements before running, so the same file works on every page without errors:

- **Hamburger menu** — toggles `.is-open` / `.is-active` / `.is-visible` classes; locks `body` scroll
- **Horarios/Precios tab switcher** — toggled via `.is-hidden` class; only active on `horarios-precios.html`
- **FAQ accordion** — `.is-open` + `maxHeight` animation; only active on pages with `.faq-item` elements

## Navigation / path conventions

- `index.html` (root) references assets with `./assets/…` and pages with `./pages/…`
- Pages in `pages/` reference assets with `../assets/…` and link back to the homepage with `../index.html`
- Links between pages in `pages/` are flat (`dojo.html`, `karate.html`, etc.) — no path prefix needed

## Content language

All user-facing content is in **Spanish (es-ES)**. Keep new copy in Spanish.
