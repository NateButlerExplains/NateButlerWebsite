'use client'

/**
 * Cyber Environment Background
 *
 * Global background layer providing a high-end cyber intelligence HUD aesthetic.
 * Positioned behind all content, fully compatible with glassmorphism and layering.
 *
 * Design goals:
 * - Deep space black base (#131318) — feels infinite and authoritative
 * - Subtle grid system — suggests system infrastructure without visual noise
 * - Neon cyan/purple glow gradients — provides energy and visual interest
 * - Soft radial lighting — creates depth and focal points
 * - No hard borders — everything blends smoothly via gradients and blur
 * - Glassmorphism-compatible — doesn't interfere with glass effects on top
 * - Alive but not noisy — minimal animation, very subtle breathing
 *
 * This component should be placed in the root layout, fixed position, -z-50.
 */
export function CyberEnvironment() {
  return (
    <>
      {/* Deep space black base */}
      <div className="fixed inset-0 -z-50 bg-surface" />

      {/* Grid system background — very subtle, large spacing */}
      <div
        className="fixed inset-0 -z-50 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(0deg, #00e5ff05 1px, transparent 1px),
            linear-gradient(90deg, #00e5ff05 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 0',
        }}
      />

      {/* Soft radial lighting — top-left corner, cyan glow */}
      <div
        className="fixed inset-0 -z-50 opacity-20"
        style={{
          background: `
            radial-gradient(
              ellipse 1200px 800px at 10% 20%,
              #00e5ff15 0%,
              transparent 60%
            )
          `,
        }}
      />

      {/* Soft radial lighting — bottom-right corner, purple glow */}
      <div
        className="fixed inset-0 -z-50 opacity-20"
        style={{
          background: `
            radial-gradient(
              ellipse 1000px 900px at 85% 80%,
              #7000ff10 0%,
              transparent 50%
            )
          `,
        }}
      />

      {/* Center radial lighting — subtle cyan/purple blend */}
      <div
        className="fixed inset-0 -z-50 opacity-15"
        style={{
          background: `
            radial-gradient(
              ellipse 800px 600px at 50% 50%,
              #00e5ff08 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Horizontal light sweep — very subtle, provides sense of movement */}
      <div
        className="fixed inset-0 -z-50 opacity-5"
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              #00e5ff06 25%,
              #7000ff06 50%,
              #00e5ff06 75%,
              transparent 100%
            )`,
        }}
      />

      {/* Scanlines overlay — adds texture without being loud */}
      <div
        className="fixed inset-0 -z-50 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.02) 0px,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
        }}
      />

      {/* Vignette — subtle darkening at edges, draws focus inward */}
      <div
        className="fixed inset-0 -z-50 opacity-40 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 30%,
              rgba(19, 19, 24, 0.4) 100%
            )
          `,
        }}
      />
    </>
  )
}

export default CyberEnvironment
