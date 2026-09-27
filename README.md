# Personal Homepage — So Lok Hang, Nathan

A single-page, dark-themed personal homepage. Built with React, TypeScript,
Tailwind CSS v4 and Lucide icons, bundled by Vite.

**Live site:** https://nn2005.github.io/Personal-Website-/

## Editing your details

Everything personal lives in one file: [`src/data/profile.ts`](src/data/profile.ts).
Change the name, major, email, GitHub URL, avatar path or introduction there and
the whole page updates — no component edits needed.

To swap the photo, replace `public/avatar.jpg`. If the image ever fails to load,
the avatar component falls back to the initials set in `profile.ts`.

## Commands

| Command | What it does |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server with hot reload |
| `pnpm build` | Type-check, then build the production site into `dist/` |
| `pnpm preview` | Serve the production build locally to check it |
| `pnpm deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Deploying

The live site is served by GitHub Pages from the `gh-pages` branch.

```bash
pnpm deploy
```

That script rebuilds the site and force-pushes the output to `gh-pages`, which
GitHub Pages republishes within a minute or so.

One-time setup (already done for this repository): in **Settings → Pages**, the
source must be *Deploy from a branch* → `gh-pages` → `/ (root)`.

> The `base` value in [`vite.config.ts`](vite.config.ts) must match the repository
> name, because GitHub Pages project sites are served from `/<repo>/`. The deploy
> script warns you if the two drift apart.

## Project structure

```
src/
  App.tsx                    layout of the page
  index.css                  design tokens, component classes, keyframes
  data/profile.ts            all personal content
  components/
    ActionButtons.tsx        email + GitHub calls to action
    Avatar.tsx               photo in a glowing ring, with initials fallback
    CodeBackground.tsx       decorative gradients, grid and code tokens
    Footer.tsx               small monospace footer
    StatusBadge.tsx          "University Student" pill
public/
  avatar.jpg                 profile picture
  .nojekyll                  stops GitHub Pages from running Jekyll
```

## Design notes

- **Theme** — dark navy background with blue/cyan/violet accents. Adjust the
  palette in the `@theme` block at the top of `src/index.css`.
- **Typography** — system UI stack for text, monospace for technical details.
  No web fonts are requested, so the page renders instantly.
- **Motion** — staggered entrance animation, hover glow and a slow drift in the
  background. Everything is disabled under `prefers-reduced-motion: reduce`.
- **Accessibility** — semantic landmarks, visible focus rings, AA-contrast body
  text, `alt` text on the avatar, a keyboard-reachable layout and mobile tap
  targets of at least 44px.
