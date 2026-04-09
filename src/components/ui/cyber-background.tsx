'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Cyber Background Component
 *
 * Premium dark cyber aesthetic with layered depth effects.
 * - Base: Deep space black (#131318)
 * - Grid: 40px x 40px white lines at 2% opacity
 * - Center radial glow: Subtle cyan (5% opacity)
 * - Cyan orb: Upper left, 10% opacity, blurred
 * - Purple orb: Lower right, 10% opacity, blurred
 * - Cursor tracking: Interactive grid perturbation
 */
export function CyberBackground() {
  const gridRef = useRef<HTMLDivElement>(null)
  const perturbRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* LAYER 1: Base Color — #131318 */}
      <div className="absolute inset-0 bg-surface" />

      {/* LAYER 2: Grid System — 40px x 40px, white at 2% opacity */}
      <div
        ref={gridRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* LAYER 3: Center Radial Glow — Cyan at 5% opacity */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(0, 229, 255, 0.05) 0%,
              transparent 50%
            )`,
        }}
      />

      {/* LAYER 4: Cyan Glow Orb (Upper Left) — 10% opacity, blurred */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle 800px at 15% 25%,
              rgba(0, 229, 255, 0.1) 0%,
              transparent 60%
            )`,
          filter: 'blur(100px)',
        }}
      />

      {/* LAYER 5: Purple/Magenta Glow Orb (Lower Right) — 10% opacity, blurred */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle 750px at 85% 80%,
              rgba(209, 188, 255, 0.1) 0%,
              transparent 60%
            )`,
          filter: 'blur(100px)',
        }}
      />

      {/* LAYER 6: Grid Perturb Effect — Cursor-tracking interactive */}
      <div
        ref={perturbRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle 125px at ${mousePos.x}px ${mousePos.y}px,
              #00e5ff 0%,
              transparent 60%
            )`,
          opacity: 0.08,
          mixBlendMode: 'screen',
          filter: 'blur(40px)',
          transition: 'background 0.05s ease-out',
        }}
      />
    </div>
  )
}

export default CyberBackground
