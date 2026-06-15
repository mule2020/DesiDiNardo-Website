# Desi Di Nardo — Official Website

A modern, animated portfolio website for **Desi Di Nardo** — Poet, Professor, and Scholar based in Toronto, Canada.

Live site: [desi-di-nardo.vercel.app](https://desi-di-nardo.vercel.app/)

---

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS v3** — custom design system (forest green + ivory + gold palette)
- **Framer Motion** — page transitions, scroll reveals, animations
- **React Router v6** — client-side routing
- **Vite** — build tool

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Cinematic hero, stats, role cards, poetry reveal, featured books |
| Works | `/works` | Filterable grid with image carousels and video players |
| Reviews | `/reviews` | Literary quote layout with alternating design |
| Publications | `/publications` | Each article paired with its image + expandable Q&A |
| Muse | `/muse` | Masonry photo gallery with lightbox |
| Contact | `/contact` | Elegant contact form |

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout, ScrollToTop
│   └── ui/           # AnimatedCursor
├── context/          # ThemeContext (dark/light mode)
├── data/             # site.ts — all content and media paths
├── hooks/            # useScrollReveal
└── pages/            # Home, Works, Reviews, Publications, Muse, Contact

public/
├── images/
│   ├── books/        # Book covers
│   ├── educator/     # Teaching/classroom photos
│   ├── starbucks/    # Starbucks cup poems
│   ├── publications/ # Article images
│   ├── reviews/      # Review photos
│   └── decorations/  # Sunflower and decorative assets
├── videos/           # MP4 videos (PEN Canada, MPSJ, Desjardins, Poetry)
└── favicon.svg       # Quill feather favicon
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run on local network (for mobile testing)
npm run dev -- --host

# Build for production
npm run build
```

---

## Updating Content

All site content lives in one file — **`src/data/site.ts`**:

- **Text content** → edit `siteData` object
- **Adding a new work card** → add to `siteData.works` array with a unique `id`
- **Adding media to a card** → add matching entry to `workMedia` using the same `id`
- **Gallery photos** → add to `museImages` array
- **Publication articles** → add to `publicationImages` array

### Adding a new work with media example

```ts
// In siteData.works
{ id: 'new-project', category: 'Collabs', title: 'New Project', ... }

// In workMedia
'new-project': {
  images: [{ src: '/images/new/photo.jpg', alt: 'Description' }],
  videos: [{ src: '/videos/new-video.mp4', label: 'Watch video' }],
}
```

---

## Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

```bash
git add .
git commit -m "your update message"
git push
```

Vercel detects the push, rebuilds, and redeploys automatically within ~30 seconds.

---

## Features

- Dark / light mode (persisted to localStorage)
- Animated custom cursor (gold dot + forest ring trail)
- Scroll-triggered animations throughout
- Page transitions with Framer Motion
- Image carousels with dot navigation
- HTML5 video players with multi-video switching
- Masonry photo gallery with full-screen lightbox
- Scroll-to-top on every page navigation
- Fully responsive — mobile first
- Reduced motion support for accessibility

---

## Credits

Built by **Muluken Bekele**
Design & Development — 2026
