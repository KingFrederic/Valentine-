# Frédéric Idowu — Portfolio

> **Creative Director & Multimedia Strategist.** Brand, film and communications
> that move continents — for the African Union, GIZ, Nigeria's Federal Ministry
> of Arts and global founders.

A fast, fully static, dependency-free portfolio website with a dark editorial
aesthetic, glassmorphic surfaces, an aurora-gradient atmosphere, scroll-reveal
motion, a custom cursor, animated counters and a deep-linkable, filterable case
study system. Built to be **irresistible to employers worldwide** — and to load
instantly anywhere.

**Live:** https://fredericidowu.vercel.app

---

## ✨ Highlights

- **Zero build step.** Pure HTML, CSS and vanilla JS — deploys anywhere, instantly.
- **Glassmorphism done right.** Frosted glass cards, layered sheens, soft shadows.
- **Living atmosphere.** Three drifting aurora blobs + film-grain overlay behind every page.
- **Eight sectors, twelve case studies.** Branding · Diplomacy · Corporate · Social ·
  Decks · Web3 · Film · Campaigns — filterable and deep-linkable.
- **Generated cover art.** Each project renders a unique gradient artwork from a tiny
  spec in `data.js` — no image assets to manage, nothing to break.
- **Motion with taste.** Intersection-Observer reveals, magnetic buttons, animated
  stat counters, marquee, custom cursor — all respecting `prefers-reduced-motion`.
- **Accessible & SEO-ready.** Semantic HTML, `lang`, focus styles, Open Graph,
  Twitter cards, JSON-LD Person schema, sitemap, robots and a manifest.
- **Tested.** A zero-dependency Node test suite guards structure, links, data and a11y.

---

## 🗂 Structure

```
.
├── index.html          # Landing — hero, sectors, featured work, services, process, testimonials
├── work.html           # Full portfolio grid with sector filtering (deep-linkable ?sector=)
├── about.html          # Bio, experience timeline, skills, languages, credentials
├── project.html        # Case study template — renders from ?id=<slug>
├── contact.html        # Validated contact form (mailto fallback, optional Formspree)
├── 404.html            # Branded not-found page
├── assets/
│   ├── css/
│   │   ├── tokens.css   # Design tokens — colour, type, spacing, motion
│   │   └── styles.css   # Full component + layout system
│   ├── js/
│   │   ├── data.js      # ◆ Single source of truth — profile, sectors, projects
│   │   ├── ui.js        # Shared engine — nav, cursor, reveals, counters, cover art
│   │   ├── home.js      # Landing-page rendering
│   │   ├── work.js      # Portfolio grid + filtering
│   │   ├── project.js   # Case study rendering
│   │   ├── about.js     # Timeline / skills / credentials rendering
│   │   └── contact.js   # Form validation + submission
│   └── img/
│       ├── favicon.svg  # FI monogram
│       └── og.svg       # Social share card
├── tests/site.test.js  # Zero-dependency test suite
├── site.webmanifest · robots.txt · sitemap.xml · vercel.json
└── package.json
```

---

## ✏️ Editing content

**Everything lives in [`assets/js/data.js`](assets/js/data.js).** It's the single
source of truth for the whole site — change it once and every page updates.

### Add a project

Append an object to the `projects` array:

```js
{
  id: "my-project",                       // unique slug → project.html?id=my-project
  title: "My Project",
  client: "Client name",
  sectors: ["branding", "web3"],          // must match sector ids
  year: "2026",
  role: "Creative Director",
  tagline: "One irresistible line.",
  featured: true,                         // show on the landing page
  real: true,                             // shows a "Live work" badge
  art: { a: "#1A1430", b: "#B69CFF", glyph: "⬡" }, // generated cover: 2 stops + glyph
  summary:   "…", challenge: "…", approach: "…", outcome: "…",
  metrics:  [{ v: "25K+", l: "Impressions" }, /* exactly 3 */],
  services: ["Brand identity", "…"],
  gallery:  ["Identity system", "…", "…", "…"]      // exactly 4 labels
}
```

The test suite enforces 3 metrics, 4 gallery items and valid sector references,
so you'll know immediately if a record is incomplete.

### Cover art

There are **no image files** to wrangle. Each project's `art` spec
(`{ a, b, glyph }`) is rendered into a unique layered gradient by
`UI.coverArt()` in `ui.js`. Pick two hex stops and a glyph — that's the cover.

---

## 🧪 Testing

```bash
npm test          # runs tests/ with Node's built-in runner — no install needed
```

The suite validates: all files present, the old site fully removed, valid head
metadata and a11y basics on every page, all local asset references resolve,
internal links point to real pages, the data model is complete and well-formed,
the brief's required sectors exist, sitemap links match real projects, and all
JSON configs parse.

Requires Node 18+ (for the stable `node:test` runner).

---

## 🚀 Local development & deploy

```bash
npm run serve     # serves at http://localhost:8080 (Python 3)
# or: npx serve .   /   any static file server
```

**Deploy:** push to the connected repo and Vercel builds it as a static site
(no framework, no build command). `vercel.json` adds clean URLs, long-lived
asset caching and sensible security headers.

### Contact form

`contact.js` works out of the box via a `mailto:` fallback. To also capture
submissions, set `FORM_ENDPOINT` in `assets/js/contact.js` to a
[Formspree](https://formspree.io) / [Basin](https://usebasin.com) URL.

---

## 🎨 Design system

| Token group | Notes |
|---|---|
| **Palette** | Near-black ink base, champagne **gold** signature accent, violet/cyan/mint/rose for sector colour-coding |
| **Type** | `Fraunces` (editorial display serif) + `Space Grotesk` (sans) |
| **Surfaces** | Glassmorphism — `backdrop-filter` blur, layered sheen, soft elevation |
| **Motion** | `cubic-bezier(.22,1,.36,1)` easing; all motion gated behind `prefers-reduced-motion` |

---

## 📇 About the work

A subset of the projects are **real, live engagements** (badged "Live work"):
the African Union / GIZ **Afri'Talent Bootcamp**, the Federal Ministry of Arts
**Reimagining Hope Residency**, and multi-year brand & social work for FBUX
Consulting and Rebirth Christian Center. The remainder are **ambitious flagship
concepts** — staged as placeholders for projects being formally packaged.

---

© Frédéric Idowu · Lagos, Nigeria · Working worldwide.
