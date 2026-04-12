# Roadmap: Nate Butler — Premium Speaker Website

## Overview

Build a premium personal speaker website that positions Nate Butler as a Global Command Authority in GRC, AI, and Cybersecurity. Phase 1 delivers the core conversion machine: a commanding hero with Framer Motion animation, floating glassmorphic navigation, about section, booking form, and footer—all optimized for speaker bookings and Discord community growth. Phase 2 adds content authority (podcast, books, past events). Phase 3 enables deeper engagement (coaching, calendar, blog).

---

## Current Milestone

**v0.1 MVP — Launch Ready** (v0.1.0)  
Status: In Progress (Phase 1 complete, Phase 2 starting)  
Phases: 1 of 3 complete

---

## Phases

| Phase | Name | Deliverables | Status | Completed |
|-------|------|--------------|--------|-----------|
| 1 | MVP — Launch Ready | Hero, Nav, About, Book Me Now, Footer, Mobile | ✅ Complete | 2026-04-12 |
| 2 | Content & Community Authority | Podcast, Books, Past Events | Not started | - |
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

### Phase 2: Content & Community Authority

**Goal:** Build credibility and expertise authority through podcast episodes, featured books, and past speaking events. Showcase track record, drive engagement, build warm leads for booking.

**Depends on:** Phase 1 (core pages, design system, infrastructure)  
**Research:** Likely (MDX content strategy, podcast feed structure, image optimization for book covers and logos)  
**Research topics:**
- Podcast feed integration (existing platform? Spotify/Apple links?)
- MDX structure for episodes, books, events (metadata, filtering, search)
- Image optimization for overlapping card design (book covers, logos)
- SEO strategy for content pages

**Scope:**
- **Podcast: CyberTalks Live** — MDX-driven episode list with title, guest (if applicable), description, listen buttons (Spotify, Apple Podcasts, direct links). Featured episodes section. Search/filter by topic (AI, Cybersecurity, GRC). Asymmetric card grid layout. Episode metadata (date, length, guest).
- **Books** — Featured cybersecurity books (authored or recommended by Nate). Book covers with overlapping card design (break rigid boundaries). Descriptions, key takeaways, purchase/preview links. Staggered, asymmetric layout (not standard grid).
- **Companies / Past Speaking Events** — Client logos and speaking engagement highlights. Event names, dates, audience sizes (builds social proof). Topics and impact metrics (e.g., "Briefed 500+ executives"). Testimonials from event organizers (if available). Timeline, carousel, or asymmetric card grid visual. Trust signal messaging ("Trusted by Fortune 1000 companies").

**Plans:**
- [ ] 02-01: Set up MDX structure for podcast episodes (metadata, filtering)
- [ ] 02-02: Build Podcast section with episode list, featured episodes, search/filter
- [ ] 02-03: Set up MDX structure for books (metadata, descriptions)
- [ ] 02-04: Build Books section with overlapping card design
- [ ] 02-05: Collect and structure past speaking events data (logos, testimonials)
- [ ] 02-06: Build Companies / Past Events section with trust signals and social proof
- [ ] 02-07: Optimize images for all content sections (logos, covers, portraits)
- [ ] 02-08: Test performance and Core Web Vitals with content sections

---

### Phase 3: Engagement & Expansion

**Goal:** Enable deeper engagement through coaching services, optional availability calendar, and content strategy (blog/insights). Polish design system, expand reach, enable content marketing.

**Depends on:** Phase 2 (established content patterns, design consistency)  
**Research:** Unlikely (internal coaching format definitions, optional calendar integration)

**Scope:**
- **Coaching / Workshops** — Custom training offerings for organizations. Format options (half-day workshops, full-day intensives, quarterly advisory). Duration, audience fit, format details. Inquiry form (similar to booking, but for coaching).
- **Calendar / Availability** — Public speaking calendar (optional). Available booking dates and times. Integration with booking system for self-service scheduling (optional).
- **Blog / Insights** — Articles on GRC, AI, cybersecurity trends. MDX-driven, version-controlled content. Search and category filtering. Social sharing buttons, estimated read time. Related articles suggestions.
- **Content Polish & Design System Documentation** — Finalize all design tokens, component library documentation, accessibility audit.

**Plans:**
- [ ] 03-01: Define coaching services and pricing structure
- [ ] 03-02: Build Coaching section with inquiry form
- [ ] 03-03: Integrate calendar system (optional, may defer)
- [ ] 03-04: Set up blog/insights MDX structure (categories, tags, search)
- [ ] 03-05: Create initial blog content (5-10 articles on GRC, AI, cybersecurity)
- [ ] 03-06: Build blog section with search/filtering, social sharing
- [ ] 03-07: Document design system and component library
- [ ] 03-08: Run accessibility audit and fix issues
- [ ] 03-09: Final performance optimization and Core Web Vitals review

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
