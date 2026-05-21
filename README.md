# Noramo Deb — website

Static marketing site for **Noramo Deb Limited**, an engineering and product consultancy.

Built with [Astro 5](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and TypeScript. Deployed to Cloudflare Pages as fully static output.

## Stack

- **Astro 5** — static-first, zero-JS by default, content-driven
- **Tailwind CSS v4** — design tokens via `@theme` directive, no separate config file
- **TypeScript** — strict mode, path alias `~/* → src/*`
- **Sharp** — image optimisation pipeline (Astro built-in)
- **@astrojs/sitemap** — automatic sitemap generation

No client-side framework, no APIs, no databases, no CMS. The site renders to flat HTML/CSS/SVG. Animations are CSS-only and respect `prefers-reduced-motion`.

## Scripts

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview built site
npm run check      # astro type-check
```

## Project structure

```
src/
├── components/        # Astro components (Hero, Services, Approach, etc.)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── services.astro
│   ├── approach.astro
│   └── contact.astro
├── styles/
│   └── global.css     # Tailwind v4 + design tokens
public/
├── favicon.svg
├── robots.txt
└── _headers           # Cloudflare Pages headers
astro.config.mjs
tailwind: configured via @tailwindcss/vite + global.css @theme
```

## Design system

Defined inline in `src/styles/global.css` via Tailwind v4's `@theme` directive:

- **Surfaces** — `--color-bg`, `--color-bg-elevated`, `--color-surface`, `--color-border`
- **Text** — `--color-fg`, `--color-fg-muted`, `--color-fg-subtle`
- **Type scale** — `--text-display`, `--text-h1`, `--text-h2`, `--text-h3`
- **Radii** — `--radius-sm` through `--radius-xl`

Components use a small, intentional utility set: `.card`, `.btn`, `.pill`, `.eyebrow`, `.mono-caption`, `.hairline`, `.grid-bg`. Everything else is standard Tailwind utilities.

Typography: Inter (sans) + JetBrains Mono (mono) via Google Fonts, preconnected and preloaded.

## Deployment — Cloudflare Pages

1. Push the repo to GitHub / GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20.x or later (set via `NODE_VERSION=20` env var)
4. Set the production domain (e.g. `noramodeb.com`) under **Custom domains**.
5. The `public/_headers` file applies security and caching headers automatically.

That's it. No serverless functions or runtime configuration required.

## Conventions

- **No client-side JS unless necessary.** All current sections render server-side. Reveal animations are CSS.
- **Edit content in components.** Each section's copy lives in its `.astro` file's frontmatter as typed data — easy to find, easy to change.
- **Adding a page:** create `src/pages/<name>.astro`, wrap with `BaseLayout`, use `Section` for consistency.
- **Adding capabilities or services:** edit the typed arrays in `Capabilities.astro` / `Services.astro` / `pages/services.astro`.
- **Updating brand:** colours and type scale are all in `global.css` `@theme` block.

## Performance targets

- Lighthouse 95+ on Performance, Accessibility, Best Practices, SEO
- < 100 KB transferred on first paint (excluding fonts)
- No client-side JavaScript on the home page
- All images served as AVIF/WebP via Astro's image pipeline (when introduced)

## License

© Noramo Deb Limited. All rights reserved.
