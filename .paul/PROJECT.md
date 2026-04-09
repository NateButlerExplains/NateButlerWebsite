# Nate Butler — Premium Speaker Website

## What This Is

A premium personal speaker website positioning Nate Butler as a top-tier Global Command Authority in GRC, AI, and Cybersecurity. The site adopts a "Cyber Command Center War Room" aesthetic—a high-fidelity command center with dark, luminous neon cyan/purple/magenta, glassmorphism, asymmetry, holographic effects, and commanding animations. Primary focus: driving speaker bookings ("Book Me Now" CTA), growing Discord community, and establishing premium personal brand authority.

## Core Value

Event organizers and Fortune 1000 leaders can instantly recognize Nate as a top-tier authority on GRC, AI, and cybersecurity strategy, and book him directly for executive briefings and keynotes.

## Current State

| Attribute | Value |
|-----------|-------|
| Type | Client / Website |
| Version | 0.0.0 |
| Status | Initializing |
| Last Updated | 2026-04-09 |
| Deployment Target | Vercel |

---

## Requirements

### Core Pages & Features

**Phase 1 (MVP — Launch Ready):**
- Hero / Home with commanding Framer Motion animation
- Floating glassmorphic navigation (70% opacity, 12px blur, sticky)
- About Nate section (bio, expertise pillars, trust signals)
- Book Me Now page with booking inquiry form (7 required fields)
- Footer with social links, legal, repeated CTAs
- Full mobile responsiveness (asymmetric layouts preserved)

**Phase 2 (Content & Community Authority):**
- Podcast: CyberTalks Live (MDX-driven episodes, searchable)
- Books section (featured books with covers, links)
- Companies / Past Speaking Events (logos, testimonials, trust signals)

**Phase 3 (Engagement & Expansion):**
- Coaching / Workshops section with inquiry form
- Calendar / Availability (optional)
- Blog / Insights (MDX-driven, searchable, social sharing)

### Validated (Shipped)
None yet.

### Active (In Progress)
- PAUL project initialization
- Next.js 15 scaffolding

### Planned (Next)
- Phase 1 build: Hero + Navigation + About + Book Me Now + Footer
- Core Web Vitals optimization
- Mobile responsiveness verification
- Resend email integration

### Out of Scope
- Real-time features (static/ISR sufficient)
- Multiple language support (Phase 2+)
- Advanced ecommerce (books/courses handled via external links)

---

## Target Users

**Primary: Fortune 1000 Event Organizers**
- Sourcing premium speakers for executive briefings, keynotes
- Value expertise, authority, polish, and easy booking
- Decision makers or influencers in speaker selection
- Need to understand track record and speaking impact quickly

**Secondary: L&D / Talent Development Leaders**
- Building thought leadership programs
- Need coaching offerings, workshop customization
- Value practical insights and speaker accessibility

**Tertiary: Cybersecurity Community**
- Practitioners, engineers, security leaders
- Following Nate for insights, networking, community
- Value authenticity, education, peer connection
- Podcast, books, Discord community engagement

---

## Context

**Business Context:**
- Premium positioning drives conversion more than aggressive discounting
- Booking inquiries are the primary revenue driver (#1 KPI)
- Discord community is secondary but important for long-term brand loyalty
- Response guarantee ("24 hours") is a key trust signal
- Trust signals (logos, testimonials, metrics) reduce friction

**Technical Context:**
- Strict TypeScript, no `any` types
- Next.js 15 App Router (RSC support, Vercel optimization)
- Server components by default, client only for interactions/animations
- Server Actions for forms (no separate API needed)
- Resend for transactional email
- Umami + Vercel Analytics (privacy-first, no Google Analytics)

---

## Constraints

### Technical Constraints
- Must be strict TypeScript (no `any` types)
- Must ship to Vercel with <3s cold start
- No heavy backend services initially (Server Actions sufficient)
- Analytics must be privacy-respecting (Umami, not Google Analytics)
- Hero animation must not delay LCP (<2.5s)
- Bundle size: stay under 200KB gzipped (JS)

### Business Constraints
- Nate is primary content owner (admin/updates)
- MDX content must be easy to update (no complex build steps)
- No real-time data needed (static/ISR sufficient initially)
- Professional assets (photos, book covers, logos) provided by Nate

### Design Constraints
- **Intentional Asymmetry:** No symmetric grids; 60/40 splits, overlapping elements, off-center portraits
- **No Hard Borders:** Only glows, background shifts, ghost lines (outline_variant at 15%)
- **Heavy Glassmorphism:** Navigation 70% opacity + 12px blur; floating cards 60% + 24px blur
- **Neon Underglow:** Primary/secondary at 5-10% opacity + 40px blur (never black shadows)
- **Subtle Scanlines:** 1-2px horizontal lines at 2-5% opacity over hero and key sections
- **Commanding Hero Animation:** Framer Motion, professional/authoritative feel, GPU-accelerated, completes within 2 seconds

---

## Key Decisions

| Decision | Rationale | Date | Status |
|----------|-----------|------|--------|
| Next.js 15 App Router | Modern, performant, RSC support; aligns with Vercel deployment | 2026-04-09 | Active |
| shadcn/ui (customized) | Component flexibility, design system control, dark mode built-in | 2026-04-09 | Active |
| Framer Motion | Smooth animations, GPU-accelerated, excellent timing controls for hero | 2026-04-09 | Active |
| MDX for content | Version-control friendly, component + content fusion, easy updates | 2026-04-09 | Active |
| Server Actions + Resend | No separate API needed for forms; simpler, secure architecture | 2026-04-09 | Active |
| Vercel Analytics + Umami | Privacy-first, integrated monitoring; no third-party tracking risk | 2026-04-09 | Active |
| Strict TypeScript | Catches errors early, improves maintainability for long-term ownership | 2026-04-09 | Active |
| Asymmetric Design System | Signals premium, custom, high-energy experience; not templated | 2026-04-09 | Active |

---

## Success Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Booking inquiry conversion | 2-4% of visitors | - | Not started |
| Discord join conversion | 5-10% of visitors | - | Not started |
| Overall conversion | 7-14% of visitors | - | Not started |
| LCP (hero animation) | <2.5s | - | Not started |
| CLS | <0.1 | - | Not started |
| INP | <100ms | - | Not started |
| Mobile LCP | <2.8s | - | Not started |
| Vercel cold start | <3s | - | Not started |
| Hero animation impression | 95%+ users impressed | - | Not started |
| Mobile asymmetry preservation | 90%+ mobile users satisfied | - | Not started |

---

## Tech Stack / Tools

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Next.js 15 (App Router) | Modern, performant, RSC support |
| Language | TypeScript (strict) | No `any` types |
| Styling | Tailwind CSS | Utility-first, design system control |
| UI Components | shadcn/ui (customized) | Component flexibility for cyber-aesthetic |
| Animations | Framer Motion | GPU-accelerated, commanding hero animations |
| Content | MDX | Version-control friendly, component fusion |
| Forms | Server Actions | No API needed, simpler architecture |
| Email | Resend | Transactional email delivery |
| Analytics | Vercel Analytics + Umami | Privacy-first monitoring |
| Deployment | Vercel | Primary hosting, cold start <3s |
| Typography | Space Grotesk + Manrope | Google Fonts (variable weights 400–700) |
| Color System | Custom palette | Surface #131318, Primary #00e5ff, Secondary #7000ff, Tertiary #ff00e5 |

---

## Links

| Resource | URL |
|----------|-----|
| Repository | /Users/nateb/Projects/apps/nate-butler-website |
| Original Planning | /Users/nateb/Projects/NateButlerWebsite/PLANNING.md |
| Design Docs | /Users/nateb/Projects/NateButlerWebsite/DESIGN.md |

---

*PROJECT.md — Updated when requirements or context change*  
*Created: 2026-04-09*
