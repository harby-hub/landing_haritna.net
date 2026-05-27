# haritna — CLAUDE.md

The public landing page for Haretna (`haritna.net`). A static Vue 3 app with Three.js scenes and EN/AR i18n, deployed to Cloudflare Workers/Pages.

---

## Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Runtime / package manager | Bun | Always use `bun` |
| Framework | Vue 3.5 | Composition API + `<script setup>` |
| Build | Vite 8 + `@cloudflare/vite-plugin` | Static assets + Worker bundle |
| Styling | Tailwind CSS 4.2 + `@tailwindcss/vite` | Utility-first |
| Routing | vue-router 5 | History mode |
| i18n | vue-i18n 11 | EN + AR (RTL) |
| 3D | three ^0.183 + three-stdlib | Hero scenes / decorative visuals |
| Font | `@fontsource/cairo` | Primary font |
| Deploy | Wrangler ^4.73 | Cloudflare Workers |

---

## What This Project Is (and Isn't)

- **Is**: a public marketing site, viewable without login, presenting Dukkan as a product.
- **Is not**: the actual application (Customer/Staff/Delivery portals — those live in `frontend_product_poc`).
- **Is not**: connected to `backend_product_poc` APIs by default — this is purely static.

If something needs to become dynamic (forms, sign-up, waitlist), decide whether to add a Worker handler here, or move it to `frontend_product_poc` as a public route.

---

## Directory Structure

```
src/
├── App.vue                  # Root
├── main.ts                  # Entry
├── assets/                  # Static assets (CSS, images)
├── components/              # Reusable UI
├── composables/             # Reusable logic hooks
├── pages/                   # Route-level views
├── router/                  # Vue Router config
├── i18n/                    # EN + AR locales
├── three/                   # Three.js scenes/utilities
├── dukkan/                  # Dukkan-specific marketing content
└── vite-env.d.ts
```

---

## Commands

```bash
bun install
bun run dev               # Vite dev server
bun run build             # vue-tsc + vite build
bun run preview           # build + wrangler dev (local Worker)
bun run deploy            # build + wrangler deploy → Cloudflare
```

---

## Conventions

1. **Vue 3 Composition API only**, `<script setup lang="ts">`.
2. **i18n is mandatory**: every user-facing string lives in `i18n/en/...` and `i18n/ar/...`.
3. **RTL**: use Tailwind `rtl:` and `ltr:` modifiers — verify the visual flip.
4. **Three.js scenes** stay isolated in `src/three/`; do not interleave them with UI components.
5. **No backend API calls** by default — if needed, build it as a Cloudflare Worker handler.
6. **Cairo is the default font** — do not import additional fonts without reason.
7. **Wrangler config** lives in `wrangler.jsonc` — for deploy and bindings.

---

## Routing

- **History mode** (clean URLs), not hash. The Worker rewrites unknown paths to `index.html`.
- **Internal navigation**: `<router-link>` or `router.push()` — never `<a href>` for in-app routes.

---

## Build Output

- `dist/` — final static assets
- Pushed to Cloudflare Workers/Pages via `bun run deploy`
- Served from `haritna.net` (see `ducker_haritna/README.md` for the DNS layout)

---

## Don't Reinvent

- **Need a layout component?** Look in `src/components/` first.
- **Need shared CSS?** `src/assets/` already holds the tokens.
- **Need a 3D scene?** Start from `src/three/` — boilerplate exists.
- **Need new translations?** Add them to both `src/i18n/en/` and `src/i18n/ar/`, never just one.

---

## Notes for AI Assistants

- **Not here**: API routes, multi-guard auth, complex Pinia stores, electron/capacitor — all of those live in `frontend_product_poc`.
- **Here**: marketing copy, animations, 3D, SEO meta, Cloudflare deployment.
- **For marketing copy edits**: cross-reference `/srv/http/products_poc/docs/features*.md` for the source of truth on features.
- **For brand changes**: cross-reference `/srv/http/products_poc/docs/brand.md`.
