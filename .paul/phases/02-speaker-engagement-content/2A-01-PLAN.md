---
phase: 02-speaker-engagement-content
plan: 2A-01
type: execute
wave: 1
depends_on: []
files_modified: [
  "src/components/nav/navbar.tsx",
  "src/app/speaker/[eventType]/page.tsx",
  "src/app/speaker/[eventType]/layout.tsx",
  "src/components/sections/keynote-hero.tsx",
  "src/components/sections/see-nate-in-action.tsx",
  "src/app/page.tsx"
]
autonomous: true
---

<objective>
## Goal

Transform the site into a hyper-focused speaker booking engine by:
1. Refactoring navigation to lead directly to booking (4 event type CTAs)
2. Creating a reusable `/speaker/{eventType}` landing page template
3. Building foundation for keynote pages with hero, placeholder sections, and Calendly integration

## Purpose

Phase 1 established the design system and home page. Phase 2A pivots the entire site's navigation to drive booking inquiries across different event types (Corporate, Executive Offsite, Conference, Cyber Event). Every page and CTA now leads to booking. This shift from "personal brand hub" to "booking conversion engine" is the core pivot of Milestone 2.

## Output

- Updated navbar (desktop + mobile) with new navigation structure
- 4 keynote landing pages via parameterized route `/speaker/{eventType}`
- Foundation components: keynote hero, "See Nate in Action" placeholder
- Calendly integration ready on all keynote pages
- All pages tested and responsive
- Deployed to Firebase Hosting
</objective>

<context>
## Project Context

@.paul/PROJECT.md — Core value: drive speaker bookings for Fortune 1000 leaders
@.paul/ROADMAP.md — Phase 2A: Keynote Landing Pages + Navigation Restructure
@.paul/STATE.md — Milestone 2 (v0.2) started, Phase 1 complete

## Prior Work Reference

Phase 1 SUMMARY: `.paul/phases/01-mvp-launch-ready/PHASE-01-SUMMARY.md`
- Navigation component already built (src/components/nav/navbar.tsx)
- Design system locked (colors, typography, motion language)
- Responsive patterns established (md: 768px breakpoint)
- Calendly embed already functional in booking section

## Source Files

@src/components/nav/navbar.tsx — Current navigation (will be refactored)
@src/app/page.tsx — Home page (will be updated)
@src/components/hero/hero-section.tsx — Hero pattern (reference for keynote hero)
@src/components/sections/ — Section component patterns

## Key Decisions from Phase 1

- Single keynote template (not 4 separate pages) — DRY principle, easier maintenance
- Reuse navigation patterns from Phase 1 (glassmorphism, scroll-spy)
- Coaching links externally (https://nate.kashboxcoaching.com/)
- Podcast/TikTok links externally (not self-hosted)
</context>

<acceptance_criteria>

## AC-1: Navigation Structure Updated

```gherkin
Given the site is deployed
When a user visits the site
Then desktop top navigation shows: "Corporate Events | Executive Offsites | Conferences | Cyber Events | Podcasts | More ▼"
And desktop More dropdown shows: "Coaching (→ external), Books, Podcast"
And mobile hamburger shows: "Corporate Events, Executive Offsites, Conferences, Cyber Events, Podcasts, Coaching (→ external), Books"
And all links are clickable and navigate correctly
```

## AC-2: Dynamic Keynote Landing Pages Accessible

```gherkin
Given the site has keynote landing pages
When a user clicks "Corporate Events" from navigation
Then the page navigates to /speaker/corporate
And page title reflects event type (e.g., "Keynote Speaker for Corporate Events")
And the page loads with correct customized hero content
And the page includes placeholder sections for "See Nate in Action", Topics, and Calendly

When a user visits /speaker/executive-offsite
Then the page loads correctly with event-type-specific content
When a user visits /speaker/conference
Then the page loads correctly with event-type-specific content
When a user visits /speaker/cyber-event
Then the page loads correctly with event-type-specific content
```

## AC-3: Keynote Landing Page Structure Complete

```gherkin
Given a user is on any keynote landing page (e.g., /speaker/corporate)
Then the page structure from top to bottom includes:
  1. Keynote hero section (customized per event type)
  2. "See Nate in Action" placeholder section (visual placeholder, TBD implementation)
  3. Topics cards section (placeholder or basic structure for 2B)
  4. Calendly embed at bottom for direct booking
And all sections are responsive on mobile and desktop
And Core Web Vitals maintained (LCP <2.5s, CLS <0.1, INP <100ms)
```

## AC-4: Responsive Design Verified

```gherkin
Given a keynote page is rendered
When viewed on desktop (1920px, 1440px, 1024px)
Then layout is correct, CTAs visible, Calendly functional
When viewed on tablet (768px)
Then layout adapts, hamburger menu appears, all sections stack properly
When viewed on mobile (375px, 414px)
Then navigation collapses to hamburger, sections stack, Calendly responsive, CTAs thumb-accessible
And no layout shifts or broken elements on any breakpoint
```

## AC-5: Routing and Navigation Tested

```gherkin
Given the site has refactored navigation
When a user navigates from Home to any keynote page via nav link
Then routing works correctly without errors
When a user manually enters /speaker/corporate
Then page loads correctly
When a user navigates between keynote pages (corporate → conference)
Then routing updates correctly and content refreshes
When a user clicks an external link (Coaching, Podcast)
Then link opens in new tab pointing to correct external URL
```

</acceptance_criteria>

<tasks>

<task type="auto">
  <name>Refactor Navigation (Desktop + Mobile)</name>
  <files>src/components/nav/navbar.tsx</files>
  <action>
    Update navbar to implement new navigation structure:

    **Desktop Top Navigation:**
    - Remove current nav items (ABOUT, BOOKS, HOME, COACHING, PODCAST)
    - Add new primary CTAs: Corporate Events, Executive Offsites, Conferences, Cyber Events, Podcasts
    - Add "More" dropdown with: Coaching (external link to https://nate.kashboxcoaching.com/), Books, Podcast
    - Each event type CTA links to /speaker/{eventType}
    - Podcasts CTA links to /podcast (internal page, to be built in Phase 2C)
    - Logo/brand name remains on left

    **Mobile Hamburger Menu:**
    - Collapse all navigation into hamburger (3-line menu icon)
    - Menu items in order: Corporate Events, Executive Offsites, Conferences, Cyber Events, Podcasts, Coaching (external), Books
    - Hamburger menu toggles on click
    - All items clickable, links work same as desktop

    **Maintained from Phase 1:**
    - Scroll-spy active state logic (still track sections on home page)
    - Glassmorphic styling (70% opacity, 12px blur, dark background)
    - Fixed/sticky behavior on scroll
    - Mobile Book Now button fade-in (smooth opacity transition when scrolling past hero CTA)

    **Avoid:**
    - Do NOT change design system colors (cyan, purple)
    - Do NOT modify animation timings or motion language
    - Do NOT break existing Desktop "Book Now" button functionality
    - Do NOT change navbar height or padding
    
    **Verify:** Navbar compiles without errors, all links navigate correctly (check console for routing errors)
  </action>
  <verify>
    - npm run build passes with no errors
    - Navbar displays with new nav items (Corporate Events, Executive Offsites, Conferences, Cyber Events, Podcasts, More)
    - Each nav item is clickable (test in dev: /speaker/corporate, /speaker/executive-offsite, /speaker/conference, /speaker/cyber-event, /podcast)
    - Mobile hamburger opens/closes
    - Desktop Book Now button still visible and functional
    - External links (Coaching) open in new tab
  </verify>
  <done>AC-1 satisfied: Navigation structure updated with all new CTAs</done>
</task>

<task type="auto">
  <name>Create Dynamic /speaker/[eventType] Route and Template</name>
  <files>src/app/speaker/[eventType]/page.tsx, src/app/speaker/[eventType]/layout.tsx</files>
  <action>
    Create dynamic route handler for keynote landing pages:

    **File: src/app/speaker/[eventType]/layout.tsx**
    - Standard Next.js layout wrapper
    - Generate metadata dynamically based on eventType param (e.g., title: "Keynote Speaker for Corporate Events")
    - Include head tags for SEO (dynamic og:title, description, etc.)

    **File: src/app/speaker/[eventType]/page.tsx**
    - Extract {eventType} from URL params (corporate, executive-offsite, conference, cyber-event)
    - Validate eventType (if invalid, 404 or redirect to /speaker/corporate)
    - Define content mapping for each event type:
      - Keynote hero headline (customized per type)
      - Keynote hero subheadline/value prop (customized per type)
      - Meta title and description
    - Example customization:
      ```
      corporate: { headline: "Keynote Speaker for Corporate Events", subheadline: "Executive leadership on GRC, AI, and cyber strategy..." }
      executive-offsite: { headline: "Keynote Speaker for Executive Offsites", subheadline: "Custom keynotes for C-suite retreats..." }
      conference: { headline: "Keynote Speaker for Conferences", subheadline: "Captivating keynotes for industry conferences..." }
      cyber-event: { headline: "Keynote Speaker for Cyber Events", subheadline: "Expert talks on cybersecurity trends and best practices..." }
      ```
    - Return JSX with page structure:
      - KernoteHero component (pass eventType, headline, subheadline)
      - SeeNateInAction component (placeholder)
      - Topics section (placeholder)
      - Calendly embed (use existing embed, styled as section)

    **Avoid:**
    - Do NOT hardcode 4 separate page components — use single parameterized template
    - Do NOT break from design system (use existing colors, typography, motion)
    - Do NOT change Calendly embed implementation (reuse existing)

    **Verify:**
    - Route compiles without errors
    - /speaker/corporate loads and renders (check browser)
    - /speaker/executive-offsite loads correctly
    - /speaker/conference loads correctly
    - /speaker/cyber-event loads correctly
    - /speaker/invalid-type returns 404 or redirects
    - Page title updates dynamically per eventType (check browser title bar)
  </action>
  <verify>
    - npm run dev runs without errors
    - Navigate to /speaker/corporate in browser — page loads
    - Check page title in browser (should show "Keynote Speaker for Corporate Events")
    - Repeat for /speaker/executive-offsite, /speaker/conference, /speaker/cyber-event
    - All 4 pages render correctly with customized headlines
    - Mobile view responsive (test at 375px)
    - All sections visible on page (hero, placeholder, Calendly)
  </verify>
  <done>AC-2 satisfied: Dynamic keynote landing pages accessible at /speaker/{eventType}</done>
</task>

<task type="auto">
  <name>Build Keynote Hero + Placeholder Sections + Calendly Integration</name>
  <files>src/components/sections/keynote-hero.tsx, src/components/sections/see-nate-in-action.tsx, src/app/speaker/[eventType]/page.tsx</files>
  <action>
    Create keynote landing page structure with hero, placeholders, and Calendly:

    **File: src/components/sections/keynote-hero.tsx**
    - Component that accepts props: { headline, subheadline, eventType }
    - Render hero section similar to Phase 1 hero but customized for keynote positioning
    - Include:
      - Event type headline (e.g., "Keynote Speaker for Corporate Events")
      - Subheadline with value prop
      - Optional: Small badge or text indicating event type
      - Hero background or gradient (reuse design system colors)
      - No CTA in hero (Calendly at bottom instead)
    - Responsive on mobile and desktop
    - Maintain asymmetry and glassmorphism from Phase 1

    **File: src/components/sections/see-nate-in-action.tsx**
    - Placeholder component for demo reel (NOT IMPLEMENTED YET — TBD in Phase 2B)
    - Render as a simple section with:
      - Heading: "See Nate in Action"
      - Placeholder text: "Coming soon — professional speaking engagement highlights"
      - Subtle background or card styling
      - Responsive height/spacing
    - When Phase 2B finishes, this component will be enhanced with actual video display

    **Topics Section:**
    - Build basic structure (can be simple grid or cards placeholder)
    - Show 3 topic names: GRC, AI, Cybersecurity
    - Placeholder content for each topic
    - Will be fully styled in Phase 2B

    **Calendly Integration:**
    - Reuse existing Calendly embed code (from Phase 1 booking section)
    - Wrap in styled container section at bottom of page
    - Add section heading: "Select Your Speaking Event"
    - Style wrapper to match glassmorphic design system (cyan border, slight glow)
    - Ensure Calendly responsive on mobile

    **Page Structure (in speaker/[eventType]/page.tsx):**
    ```
    1. KernoteHero (customized headline/subheadline)
    2. SeeNateInAction (placeholder)
    3. Topics section (basic cards or grid)
    4. Calendly embed (styled container)
    ```

    **Avoid:**
    - Do NOT implement full video display (Phase 2B task)
    - Do NOT build full Topics cards with wow-factor design (Phase 2B task)
    - Do NOT change Calendly embed functionality or styling significantly
    - Do NOT add new dependencies or libraries

    **Verify:**
    - Keynote hero renders with correct customized text per eventType
    - "See Nate in Action" placeholder visible on page
    - Topics section visible (even if simple)
    - Calendly embed appears at bottom and is functional
    - No console errors or layout issues
    - Mobile responsiveness tested
  </action>
  <verify>
    - npm run dev runs without errors
    - Navigate to /speaker/corporate and verify all sections render:
      - Keynote hero with "Keynote Speaker for Corporate Events"
      - "See Nate in Action" placeholder section
      - Topics section (basic structure)
      - Calendly embed
    - Repeat for other event types (/speaker/executive-offsite, etc.)
    - Click Calendly embed to confirm it's functional
    - Test on mobile (375px) — all sections visible and responsive
    - No layout shifts or broken styling
    - Core Web Vitals check: npm run build (verify no regressions from Phase 1)
  </verify>
  <done>AC-3 satisfied: Keynote landing page structure complete with hero, placeholders, and Calendly</done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <what-built>
    - Updated navbar with new navigation structure (desktop + mobile)
    - 4 dynamic keynote landing pages (/speaker/{eventType})
    - Keynote hero component with customized headlines
    - "See Nate in Action" placeholder section
    - Topics section placeholder
    - Calendly integration on all keynote pages
  </what-built>
  <how-to-verify>
    1. **Run locally:** `npm run dev`
    2. **Test navigation:**
       - Click "Corporate Events" from nav → should navigate to /speaker/corporate
       - Click "Executive Offsites" from nav → should navigate to /speaker/executive-offsite
       - Verify all 4 event types accessible
    3. **Test keynote pages:**
       - Visit /speaker/corporate → check headline says "Keynote Speaker for Corporate Events"
       - Check page structure top-to-bottom: hero, placeholder, topics, Calendly
       - Visit other event type pages and verify customized headlines
    4. **Test Calendly:**
       - Scroll to bottom of any keynote page
       - Confirm Calendly embed is visible and interactive
    5. **Test mobile (use DevTools to simulate 375px):**
       - Hamburger menu appears
       - Navigation items accessible
       - All page sections visible and responsive
       - Calendly responsive on mobile
    6. **Build check:**
       - Run `npm run build` (should pass with no errors)
       - Run `npm run dev` (dev server should start without issues)
    7. **Visual inspection:**
       - Check Core Web Vitals haven't regressed (LCP still <2.5s)
       - Verify design system consistency (colors, spacing, glassmorphism)
       - Check no broken links or navigation issues
  </how-to-verify>
  <resume-signal>
    Type "approved" if all sections render correctly, navigation works, and Calendly is functional.
    Or describe any issues found so they can be fixed before proceeding to APPLY completion.
  </resume-signal>
</task>

</tasks>

<boundaries>

## DO NOT CHANGE

- Design system (colors, typography, motion language from Phase 1)
- Home page structure (home page at / remains as-is, just update nav)
- Existing Calendly embed implementation (reuse, don't rebuild)
- Phase 1 components (hero-section.tsx, navbar.tsx animations, footer, etc.) — only update navbar.tsx
- Core Web Vitals targets (LCP <2.5s, CLS <0.1, INP <100ms)

## SCOPE LIMITS

- Do NOT implement full video display for "See Nate in Action" (Phase 2B task)
- Do NOT style Topics cards with wow-factor design (Phase 2B task)
- Do NOT create `/event-planners`, `/books`, or `/podcast` pages (Phase 2C tasks)
- Do NOT change Calendly embed styling significantly
- Do NOT add new npm dependencies
- Do NOT refactor existing Phase 1 components (except navbar)

</boundaries>

<verification>

Before declaring this plan complete:

- [ ] Navbar refactoring compiles without errors and displays new nav structure
- [ ] All 4 keynote landing pages accessible at /speaker/corporate, /speaker/executive-offsite, /speaker/conference, /speaker/cyber-event
- [ ] Page titles update dynamically per event type
- [ ] Keynote hero renders with customized headlines
- [ ] "See Nate in Action" placeholder visible
- [ ] Topics section visible (basic structure)
- [ ] Calendly embed functional on all keynote pages
- [ ] Mobile navigation hamburger works correctly
- [ ] All pages responsive on desktop, tablet, and mobile breakpoints
- [ ] No console errors or warnings
- [ ] npm run build passes without errors
- [ ] Core Web Vitals maintained (no regressions)
- [ ] All navigation links work (internal and external)
- [ ] External links (Coaching) open in new tab

</verification>

<success_criteria>

- All navigation refactoring complete and tested
- 4 keynote landing pages fully accessible and functional
- Keynote hero component built and customized per event type
- Placeholder sections rendered (See Nate in Action, Topics)
- Calendly integration ready on all pages
- Mobile navigation (hamburger) fully functional
- All pages responsive on all breakpoints
- No errors, no regressions from Phase 1
- Core Web Vitals green (LCP <2.5s, CLS <0.1, INP <100ms)
- All internal navigation links work
- All external links (Coaching) work correctly

</success_criteria>

<output>

After completion, create `.paul/phases/02-speaker-engagement-content/2A-01-SUMMARY.md`

Summary should include:
- What was built (navigation, dynamic routes, keynote pages, components)
- All acceptance criteria results (all pass)
- Files created/modified
- Key decisions made (if any deviations from plan)
- Next phase readiness (Phase 2B can build on this foundation)
- Any deferred issues or technical debt

</output>
