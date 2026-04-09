// ═══════════════════════════════════════════════════════════════════════════
// HERO ANIMATION SYSTEM
// ═══════════════════════════════════════════════════════════════════════════
// Animation constants and variants that define the motion language for the
// entire Cyber Command Center brand. These values serve as the foundation for
// all subsequent components (Navigation, About, etc).

// ───────────────────────────────────────────────────────────────────────────
// MOTION LANGUAGE: Animation Timings
// ───────────────────────────────────────────────────────────────────────────
// 2-second hero animation establishes the "commanding but not frenetic" pace.
// Other components will use these as reference:
// - Slower animations (≥2s) = more authority, more gravitas
// - Medium animations (0.8-1.5s) = normal interactions, balanced feel
// - Faster animations (<0.8s) = micro-interactions, energy bursts

/** Total hero animation cycle duration (milliseconds) */
export const ANIMATION_DURATION_MS = 2000

/** Headline fadeInUp duration */
export const HEADLINE_DURATION_MS = 800

/** Gradient background animation duration (loops) */
export const GRADIENT_FLOW_DURATION_MS = 4000

/** Glow pulse effect duration */
export const GLOW_PULSE_DURATION_MS = 2000

/** Particle cascade animation duration */
export const PARTICLE_CASCADE_DURATION_MS = 2000

/** Corner bracket scale-in duration */
export const CORNER_BRACKET_DURATION_MS = 600

// ───────────────────────────────────────────────────────────────────────────
// STAGGER DELAYS: Visual Hierarchy
// ───────────────────────────────────────────────────────────────────────────
// Stagger delay between animated elements creates visual hierarchy and rhythm.
// 150ms spacing feels premium (not too quick, not too slow).
// Larger stagger (200ms+) = more deliberate, more separated
// Smaller stagger (<100ms) = more playful, more cohesive
// This rhythm repeats across Navigation and About for consistency.

/** Stagger delay between animated elements (milliseconds) */
export const STAGGER_DELAY_MS = 150

/** Delay before corner brackets appear (after headline) */
export const CORNER_BRACKET_DELAY_MS = 400

/** Delay before glow pulse starts (after headline fade-in) */
export const GLOW_PULSE_DELAY_MS = 500

// ───────────────────────────────────────────────────────────────────────────
// PARTICLE SYSTEM
// ───────────────────────────────────────────────────────────────────────────
// Data particles floating in the background create movement and energy.
// Too many = chaotic and performance-hungry
// Too few = sparse and empty
// 4 particles on desktop = balanced, visible but not overwhelming
// 2 particles on mobile = respects performance budget while maintaining feel

export const PARTICLE_COUNT = 4
export const PARTICLE_COUNT_MOBILE = 2

/** Base size of data particles (pixels) */
export const PARTICLE_SIZE_MIN = 2
export const PARTICLE_SIZE_MAX = 4

// ───────────────────────────────────────────────────────────────────────────
// COLOR HIERARCHY
// ───────────────────────────────────────────────────────────────────────────
// Color application hierarchy drives the entire visual system.
// This hierarchy informs every component that follows (Navigation, About, etc).
//
// Primary (cyan #00e5ff):
//   - Headlines and main focal points
//   - Primary glow effects
//   - "Here's the authority" signal
//   - When in doubt, use primary for headlines
//
// Secondary (purple #7000ff):
//   - Supporting glows and accents
//   - "Here's the energy" signal
//   - Secondary CTAs, supporting text
//   - Complements primary without competing
//
// Tertiary (magenta #ff00e5):
//   - Reserve for emphasis and micro-interactions
//   - Rarely used in large areas (too saturated)
//   - Hover states, highlights, special moments
//   - Signals something important or different

export const COLOR_PRIMARY = '#00e5ff'
export const COLOR_SECONDARY = '#7000ff'
export const COLOR_TERTIARY = '#ff00e5'

// ───────────────────────────────────────────────────────────────────────────
// LAYOUT ASYMMETRY
// ───────────────────────────────────────────────────────────────────────────
// Asymmetric layout is the foundation of the premium, non-templated feel.
// 60/40 split (content vs breathing room) signals:
// - Custom, thoughtful design (not AI-generated or template-based)
// - Confidence (able to leave space empty)
// - Intentional hierarchy (content gets prime real estate)
//
// This ratio applies across all sections. No forced centering anywhere.

export const ASYMMETRY_RATIO = '60/40' // 60% content, 40% breathing room
export const CONTENT_WIDTH_PERCENT = 60
export const BREATHING_ROOM_PERCENT = 40

// ───────────────────────────────────────────────────────────────────────────
// GLOW EFFECTS
// ───────────────────────────────────────────────────────────────────────────
// Neon underglow effects create the "powered by light" aesthetic.
// Never use black shadows in this system—shadows = weight.
// Glows = illumination = power.
//
// Glow opacity range: 5-10% (subtle, not overwhelming)
// Glow blur radius: 40px (large, diffuse, glowing feel)
// Stacking glows: multiple layers create depth without hard edges

export const GLOW_OPACITY_MIN = 0.05
export const GLOW_OPACITY_MAX = 0.1
export const GLOW_BLUR_RADIUS = 40

// ───────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS (Reusable)
// ───────────────────────────────────────────────────────────────────────────
// Export animation variant objects for use in hero-section.tsx and future
// components. Each variant captures a specific motion pattern from the brand.

/**
 * Fade in with upward movement.
 * Used for headlines, subheadings, primary text.
 * Creates entrance from below, drawing eye upward.
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
}

/**
 * Cascade downward with staggered timing.
 * Used for data particles and floating elements.
 * Creates waterfall effect, visual depth.
 */
export const cascadeDown = (index: number) => ({
  initial: { y: -100, opacity: 0 },
  animate: { y: 500, opacity: [0, 0.6, 0] },
  transition: {
    duration: 2,
    delay: (index * STAGGER_DELAY_MS) / 1000,
    ease: 'easeInOut',
  },
})

/**
 * Corner bracket animation.
 * Used for accent brackets at screen corners.
 * Creates "frame" feel, commanding presence.
 */
export const cornerBracketAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' },
}

/**
 * Glow pulse effect.
 * Used for headline emphasis, CTAs.
 * Radiates outward and pulsates 2-3 times.
 */
export const glowPulse = {
  animate: {
    boxShadow: [
      `0 0 20px ${COLOR_PRIMARY}33, 0 0 40px ${COLOR_PRIMARY}1f`,
      `0 0 30px ${COLOR_PRIMARY}66, 0 0 60px ${COLOR_PRIMARY}33`,
      `0 0 20px ${COLOR_PRIMARY}33, 0 0 40px ${COLOR_PRIMARY}1f`,
    ],
  },
  transition: { duration: 2, times: [0, 0.5, 1], delay: 0.5 },
}

/**
 * Animated gradient flow background.
 * Used for hero section background.
 * Creates continuous color animation: primary → secondary → tertiary → loop
 */
export const gradientFlow = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'linear',
  },
}
