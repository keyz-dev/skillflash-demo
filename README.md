# Skillflash

Skillflash — a marketplace connecting people seeking practical expertise with experts, events, articles, audio/video content, and teams.

## Tech stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **next-intl** for German and English, cookie-based (`locale`), no `[locale]` routing or middleware redirects
- **clsx** + **tailwind-merge** for `className` composition (`cn()` in `src/lib/utils.ts`)

Zustand will be added later specifically for the wishlist feature.

## Folder structure

Paths below are under `src/` unless noted.

- **`app/`** — App Router routes: home (`/`), search (`/search`), expert profiles (`/experts/[slug]`), event details (`/events/[slug]`).
- **`components/ui`** — Generic reusable primitives (Button, Pill, Tag).
- **`components/layout`** — Page-shell structure: Header, Hero, BottomNav.
- **`components/cards`** — Polymorphic cards: shared `Card` primitives plus Expert, Event, Article, Media, and Team variants.
- **`components/filters`** — Skill drill-down filter bar and content-type toggle.
- **`lib/types`** — Shared TypeScript interfaces, including the `ResultItem` discriminated union.
- **`lib/data`** — Typed mock arrays standing in for a real backend/API.
- **`lib/theme`** — Dark mode React context and `useTheme` hook.
- **`lib/stores`** — Reserved for a future Zustand wishlist store.
- **`i18n/`** and **`messages/`** — next-intl request config, locale cookie action, and `de.json` / `en.json` translation files (`messages/` lives at the project root).

## Design tokens

Defined in `src/app/globals.css` (`@theme` plus `.dark` overrides).

### Colors

| Token | Light | Dark | Tailwind example |
| --- | --- | --- | --- |
| primary.blue | `#3A86FF` | — | `bg-primary-blue` |
| primary.lila | `#8338EC` | — | `text-primary-lila` |
| primary.orange | `#FB5607` | — | `bg-primary-orange` |
| secondary.pink | `#F84E6D` | — | `bg-secondary-pink` |
| secondary.yellow | `#FFBE0B` | — | `bg-secondary-yellow` |
| neutral.white | `#FFFFFF` | — | `bg-neutral-white` |
| neutral.grey | `#B7B7B7` | — | `text-neutral-grey` |
| neutral.black | `#200E38` | — | `text-neutral-black` |
| background | `#FFFFFF` | `#150B22` | `bg-background` |
| foreground | `#200E38` | `#F2EFF9` | `text-foreground` |
| surface | `#F7F6FA` | `#221532` | `bg-surface` |
| border | `#B7B7B7` | `#3D2C54` | `border-border` |
| muted | `#6B6B6B` | `#A79BC2` | `text-muted` |

Brand/neutral tokens do not change in dark mode. Semantic tokens (`background`, `foreground`, `surface`, `border`, `muted`) do, via the `.dark` class on `<html>`.

### Fonts

| Role | Family | Tailwind class |
| --- | --- | --- |
| Heading | Source Sans Pro (loaded as Source Sans 3 via `next/font`) | `font-heading` |
| Body | Quicksand | `font-body` |

### Type scale

Each size includes line-height and font-weight 700.

| Token | Size | Line height | Weight | Class |
| --- | --- | --- | --- | --- |
| h1 | 64px | 72px | 700 | `text-h1` |
| h6 | 24px | 40px | 700 | `text-h6` |
| body-lg | 18px | 24px | 700 | `text-body-lg` |
| body-input | 24px | 24px | 700 | `text-body-input` |
| p | 16px | 24px | 700 | `text-p` |

### Shadow and radius

| Token | Value | Class |
| --- | --- | --- |
| card shadow | `0 4px 10px 0 rgb(0 0 0 / 0.1)` | `shadow-card` |
| card radius | `6px` | `rounded-card` |

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To test on other devices on the same local network:

```bash
npm run dev -- -H 0.0.0.0
```

## Hero image assets

`public/assets/images/hero/` needs two files that are **not** in the repo scaffold. Export them from Figma and add them yourself:

- `hero-vector.png`
- `dot-pattern.png`
