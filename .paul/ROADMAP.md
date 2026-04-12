# Roadmap: Nate Butler — Premium Speaker Website

## Overview

Build a premium personal speaker website that positions Nate Butler as a Global Command Authority in GRC, AI, and Cybersecurity. Phase 1 delivers the core conversion machine: a commanding hero with Framer Motion animation, floating glassmorphic navigation, about section, booking form, and footer—all optimized for speaker bookings and Discord community growth. Phase 2 adds content authority (podcast, books, past events). Phase 3 enables deeper engagement (coaching, calendar, blog).

---

## Current Milestone

**v0.2 Speaker Engagement & Content Authority** (v0.2.0)  
Status: Not started  
Phases: 0 of 3 complete

---

## Milestone 1: v0.1 MVP — Launch Ready ✅

**Status:** Complete (2026-04-12)  
**Phases:** 1 of 1 complete

---

## Milestone 2: v0.2 Speaker Engagement & Content Authority 🚧

**Status:** In Progress  
**Phases:** 0 of 3 complete

| Phase | Name | Focus | Status | Completed |
|-------|------|-------|--------|-----------|
| 2A | Keynote Landing Pages + Navigation | Redesign navigation, create `/speaker/{eventType}` template, 4 booking landing pages | Not started | - |
| 2B | Topics Cards + Demo Reel Placeholder | Build Topics card component, "See Nate in Action" section (placeholder) | Not started | - |
| 2C | Event Planner Kit + Books + Podcast | `/event-planners`, `/books`, `/podcast` pages, downloadables | Not started | - |

---

## Milestone 3: v0.3 Engagement & Expansion 📅

**Status:** Planned  
**Phases:** TBD

| Phase | Name | Deliverables | Status | Completed |
|-------|------|--------------|--------|-----------|
| 3 | Engagement & Expansion | Coaching, Calendar, Blog/Insights | Not started | - |

---

## Phase Details

### Phase 1: MVP — Launch Ready

**Goal:** Immediate presence with high-impact hero, core conversion funnels, and mobile-optimized experience. All Core Web Vitals green, booking form functional, CTAs prominent and clickable.

**Depends on:** Nothing (first phase)  
**Research:** Unlikely (established Next.js patterns, well-known design system)

**Scope:**

**Pages & Features:**
- **Hero / Home** — Commanding Framer Motion animation on load (gradient washes, neon glow pulses, data particles, corner brackets). Asymmetric layout with Nate's portrait off-center, neon accents, holographic overlays, subtle scanlines. Primary "Book Me Now" CTA (high-contrast glow) + Secondary "Join Discord" CTA. LCP <2.5s.
- **Floating Glassmorphic Navigation** — Header bar (70% opacity, 12px blur, sticky on scroll). Nav items: Home | About | Book Me Now | Join Discord. Logo/branding. Responsive mobile hamburger menu.
- **About Nate** — Professional bio, expertise pillars (GRC, AI, Cybersecurity), career highlights, trust signals (speaking numbers, e.g., "500+ executives briefed"). Asymmetric card layout with portrait. CTA to Book Me Now.
- **Book Me Now Page** — Value proposition section. Booking inquiry form with 7 required fields (Full Name, Email, Event Date, Event Type, Audience Size, Event Details, plus optional Budget and Location). "24-Hour Response Guarantee" prominently displayed. Trust signals (client logos, speaking metrics, testimonials if available). Clear next steps after submission.
- **Footer** — Social links (LinkedIn, Twitter/X, Discord). Repeated CTAs ("Book Me Now" + "Join Discord"). Legal links (privacy, terms). Contact email. Glassmorphic styling consistent with header.
- **Mobile Responsiveness** — All asymmetric layouts preserved and functional on mobile. CTAs thumb-accessible. Hero animation optimized for mobile (reduced particle count if needed, still impressive). Form fields stack clearly. Navigation collapses to hamburger menu. Full testing on iOS and Android breakpoints.

**Design System Implementation:**
- Colors: Surface #131318, Primary #00e5ff, Secondary #7000ff, Tertiary #ff00e5
- Typography: Space Grotesk (display/headlines), Manrope (body)
- Components: Pill-shaped buttons, ghost buttons (transparent + outline at 40%), input fields (bottom border only, transforms to glow on active), cards (no dividers, surface_container_high, allow image overlap)
- Effects: Neon underglow (5-10% opacity + 40px blur), holographic gradients, subtle scanlines, asymmetric layouts, no hard borders

**Performance Targets:**
- LCP <2.5s (hero animation must not delay)
- CLS <0.1
- INP <100ms
- TTFB <600ms (Vercel cold start)
- Mobile LCP <2.8s

**Quality Gates:**
- [ ] Hero animation impressive, professional, and fast (LCP <2.5s)
- [ ] Book Me Now form fully functional with Resend email delivery confirmed
- [ ] All CTAs visible, clickable, above fold on desktop and mobile
- [ ] Core Web Vitals all green (LCP <2.5s, CLS <0.1, INP <100ms)
- [ ] Mobile experience maintains asymmetry and command-center feel
- [ ] Deployed to Vercel with <3s cold start
- [ ] All pages tested on mobile (iOS and Android) and desktop breakpoints

**Plans:**
- [ ] 01-01: Set up Next.js 15 project, install dependencies (Tailwind, shadcn/ui, Framer Motion)
- [ ] 01-02: Create folder structure, configure TypeScript strict, set up shadcn/ui theme (colors, fonts)
- [ ] 01-03: Build floating glassmorphic navigation component + sticky behavior
- [ ] 01-04: Build hero section with Framer Motion animation (gradient washes, neon glows, data particles)
- [ ] 01-05: Build About Nate section with asymmetric layout and trust signals
- [ ] 01-06: Build Book Me Now page with form (Resend integration, auto-reply)
- [ ] 01-07: Build footer with social links, CTAs, legal links, glassmorphic styling
- [ ] 01-08: Implement full mobile responsiveness across all pages
- [ ] 01-09: Test and optimize Core Web Vitals (LCP, CLS, INP)
- [ ] 01-10: Deploy to Vercel and verify cold start <3s

---

### Milestone 2: v0.2 Speaker Engagement & Content Authority

**Goal:** Transform site into hyper-conversion speaker booking engine. Reorganize navigation to drive booking inquiries for different event types (Corporate, Executive Offsites, Conferences, Cyber Events). All other content (Coaching, Books, Podcast) links externally or surfaces as secondary.

**Depends on:** Phase 1 (core pages, design system, infrastructure)  
**Research:** Moderate (modern demo reel display options, TBD implementation)

---

#### Phase 2A: Keynote Landing Pages + Navigation Restructure

**Goal:** Create template-based landing pages for 4 event types, refactor navigation to lead directly to booking.

**Scope:**
- **Navigation Restructure** — Desktop top nav: Corporate Events | Executive Offsites | Conferences | Cyber Events | Podcasts | More ▼
- **Keynote Landing Page Template** — Single reusable template with `{eventType}` param. URL: `/speaker/{eventType}` where eventType = corporate | executive-offsite | conference | cyber-event
- **Page Sections (Top to Bottom):**
  - Hero section (customized per event type)
  - "See Nate in Action" placeholder (modern demo reel, TBD implementation)
  - Topics cards (3 cards: GRC, AI, Cybersecurity — no links, educational only, high visual impact)
  - Calendly embed at bottom for direct booking
- **Mobile Navigation** — Hamburger menu with all event types + Podcasts + Coaching (external) + Books

**Plans:**
- [ ] 2A-01: Refactor navigation (desktop top bar + mobile hamburger)
- [ ] 2A-02: Create `/speaker/{eventType}` dynamic route
- [ ] 2A-03: Build Keynote landing page template with hero section
- [ ] 2A-04: Add "See Nate in Action" placeholder section
- [ ] 2A-05: Wire up Calendly on keynote pages
- [ ] 2A-06: Test routing, navigation, mobile responsiveness
- [ ] 2A-07: Deploy and verify all 4 event type pages work

---

#### Phase 2B: Topics Cards + Demo Reel Placeholder

**Goal:** Build high-impact Topics card component and finalize modern demo reel display.

**Scope:**
- **Topics Card Component** — 3 cards (GRC, AI, Cybersecurity). Modern design (glassmorphism, animated hover, gradient overlays). Educational content + key takeaways. No links (visual only).
- **"See Nate in Action" Section** — Placeholder for modern demo reel display. TBD implementation approach (carousel, modal, 3D cards, interactive timeline, hero video overlay). User still exploring options.

**Plans:**
- [ ] 2B-01: Design Topics card component (modern, wow-factor)
- [ ] 2B-02: Implement animated hover states and interactions
- [ ] 2B-03: Create "See Nate in Action" placeholder section
- [ ] 2B-04: Explore modern video display options (3-5 approaches)
- [ ] 2B-05: Test visual impact and responsive design

---

#### Phase 2C: Event Planner Kit + Books + Podcast Pages

**Goal:** Build supporting pages for event planners, featured books, and podcast/TikTok highlights.

**Scope:**
- **Event Planner Kit** (`/event-planners`) — Downloadable speaker materials: speaker sheet, headshot, biography, MC intro. Clean, professional presentation. Entry point from "Download Speaker Kit" CTA.
- **Books Page** (`/books`) — Featured books section. Book titles, covers, descriptions, links.
- **Podcast Page** (`/podcast`) — Link to external TikTok/LinkedIn Live profile. Not hosted content, external redirect.

**Plans:**
- [ ] 2C-01: Build `/event-planners` page with file downloads
- [ ] 2C-02: Create file download component (speaker sheet, headshot, bio, intro)
- [ ] 2C-03: Build `/books` page with featured books
- [ ] 2C-04: Build `/podcast` page (external link to profile)
- [ ] 2C-05: Update navigation across site
- [ ] 2C-06: Test all pages, responsiveness, file downloads
- [ ] 2C-07: Deploy and verify external links working

---

### Milestone 3: v0.3 Engagement & Expansion

**Goal:** Enable deeper engagement through coaching, calendar, and content strategy. Polish design system.

**Status:** Planned (Phase 3)

**Depends on:** Phase 2 (established content patterns, design consistency)

**Scope:**
- **Coaching** — External link to https://nate.kashboxcoaching.com/ (no new page)
- **Calendar / Availability** — Public speaking calendar (optional)
- **Blog / Insights** — MDX-driven articles on GRC, AI, cybersecurity trends

**Plans:** TBD (to be defined in Phase 3 planning)

---

## Success Criteria

**Phase 1 Completion:**
- All pages above the fold on desktop and mobile
- Book Me Now form functional with email delivery confirmed
- All Core Web Vitals green (LCP <2.5s, CLS <0.1, INP <100ms)
- Hero animation achieves 95%+ user approval
- Mobile experience preserves asymmetry and premium feel
- Deployed to Vercel with <3s cold start

**Phase 2 Completion:**
- Podcast episodes searchable and displayed
- Books section with overlapping card design
- Past events and logos prominently showcased
- Trust signals reduce booking inquiry friction

**Phase 3 Completion:**
- Coaching inquiry form functional
- Blog/insights searchable and discoverable
- All design system tokens documented
- Accessibility audit passed (WCAG 2.1 AA)

---

*Roadmap created: 2026-04-09*  
*Last updated: 2026-04-09*
