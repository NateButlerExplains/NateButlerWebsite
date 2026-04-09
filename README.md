# Nate Butler — Premium Speaker Website

**Project Type:** Client Website  
**Status:** Phase 1 - Under Development  
**Created:** 2026-04-09

---

## Quick Start

### Prerequisites
- Node.js 18+ (LTS)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (Resend API key, etc.)

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
# See https://vercel.com/docs/frameworks/nextjs for deployment steps
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page (placeholder)
├── components/            # Reusable React components
│   ├── navigation/        # Navigation components
│   ├── hero/              # Hero section components
│   ├── sections/          # Page section components
│   └── ui/                # Base UI components (buttons, cards, inputs)
├── features/              # Feature-specific logic
│   ├── booking/           # Booking form and logic
│   ├── newsletter/        # Newsletter signup
│   └── analytics/         # Analytics integration
├── lib/                   # Utility functions and helpers
│   ├── api/              # API client utilities
│   ├── types/            # TypeScript types and interfaces
│   └── utils/            # Helper functions
└── styles/
    └── globals.css       # Global styles and design tokens
```

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + custom design tokens
- **Animation:** Framer Motion
- **UI Components:** shadcn/ui (customized)
- **Forms:** React + Server Actions
- **Email:** Resend (transactional email)
- **Analytics:** Vercel Analytics + Umami
- **Deployment:** Vercel

---

## Design System

### Visual North Star
**Cyber Command Center War Room** — A high-fidelity command center where Nate briefs elite operators on critical strategic challenges.

### Color Palette
- **Surface:** `#131318` (deep space black)
- **Primary:** `#00e5ff` (cyan – system data, core actions)
- **Secondary:** `#7000ff` (purple – energy pulse, AI/cyber highlights)
- **Tertiary:** `#ff00e5` (magenta – premium CTAs)

### Typography
- **Display/Headlines:** Space Grotesk (700 weight)
- **Body/Copy:** Manrope (400-500 weight)

### Core Aesthetic Rules
1. **Intentional Asymmetry** — No symmetric grids; 60/40 splits, overlapping elements
2. **Heavy Glassmorphism** — 70% opacity nav + 12px blur, 60% cards + 24px blur
3. **Neon Underglow** — Primary/secondary at 5-10% opacity + 40px blur (never black shadows)
4. **No Hard Borders** — Only glows, background shifts, ghost lines
5. **Subtle Scanlines** — 1-2px horizontal lines at 2-5% opacity
6. **Commanding Hero Animation** — Framer Motion, professional/authoritative, LCP <2.5s

---

## Key Pages

### Phase 1 (MVP — Launch Ready)
- **Hero / Home** — Commanding animation, asymmetric layout, primary CTAs
- **Navigation** — Floating glassmorphic header, sticky on scroll
- **About Nate** — Bio, expertise pillars, trust signals
- **Book Me Now** — Booking inquiry form, response guarantee, trust signals
- **Footer** — Social links, repeated CTAs, legal links, glassmorphic styling

### Phase 2 (Content & Community Authority)
- **Podcast: CyberTalks Live** — MDX-driven episodes, searchable
- **Books** — Featured books with overlapping card design
- **Companies / Past Speaking Events** — Client logos, testimonials, trust signals

### Phase 3 (Engagement & Expansion)
- **Coaching / Workshops** — Training offerings, inquiry form
- **Calendar / Availability** — Public speaking calendar (optional)
- **Blog / Insights** — MDX articles on GRC, AI, cybersecurity

---

## Performance Targets

- **LCP:** <2.5s (hero animation must not delay primary paint)
- **CLS:** <0.1
- **INP:** <100ms
- **TTFB:** <600ms on Vercel
- **Bundle Size:** <200KB gzipped (JS)

---

## Conversion Goals

- **Primary:** 2-4% of visitors submit "Book Me Now" inquiries
- **Secondary:** 5-10% of visitors join Discord community
- **Overall:** 7-14% conversion rate (at least one desired action)

---

## Available Scripts

```bash
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build production bundle
npm run start       # Start production server
npm run lint        # Run ESLint and type checking
npm run type-check  # Run TypeScript type checking
```

---

## Environment Variables

See `.env.example` for required and optional environment variables:
- `RESEND_API_KEY` — Email delivery service
- `NEXT_PUBLIC_DISCORD_INVITE_URL` — Discord community link
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` — Analytics (optional)
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` — Privacy-first analytics (optional)

---

## Development Workflow

### PAUL-Managed Phases

This project uses PAUL for structured phase planning and tracking.

**Current Phase:** Phase 1 (MVP — Launch Ready)

View phase details: See `.paul/ROADMAP.md`

```bash
# After making changes, commit and reference PAUL phase:
git add .
git commit -m "feat: Phase 1 implementation

- Hero section with Framer Motion animation
- Floating glassmorphic navigation
- About Nate section

Relates to: Phase 1 of PAUL roadmap"
```

---

## Code Quality

- **Strict TypeScript:** No `any` types allowed
- **ESLint:** Enforces next/core-web-vitals
- **Type Checking:** Run `npm run type-check` before committing
- **File Naming:** kebab-case for files, PascalCase for React components

---

## References

- **Original Planning:** `/Users/nateb/Projects/NateButlerWebsite/PLANNING.md`
- **Design Docs:** `/Users/nateb/Projects/NateButlerWebsite/DESIGN.md`
- **PAUL Roadmap:** `.paul/ROADMAP.md`
- **PAUL Project Brief:** `.paul/PROJECT.md`

---

## Useful Links

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Vercel Deployment](https://vercel.com/docs/frameworks/nextjs)
- [Resend Email API](https://resend.com/)

---

*Next step: Run `/paul:plan` to create detailed Phase 1 implementation plan*
