'use client'

import { type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Button Component
 *
 * Production-ready button component with three variants aligned to the
 * Cyber Command Center design system:
 *
 * Variants:
 * - primary: Cyan glow, high contrast. Use for primary CTAs ("Book Me Now")
 * - secondary: Purple glow, supporting role. Use for secondary CTAs ("Join Discord")
 * - ghost: Transparent with outline. Use for tertiary actions
 *
 * All variants:
 * - Pill-shaped (rounded-full) for modern, premium feel
 * - Smooth transitions (200ms) on all state changes
 * - Hover: Glow intensifies, subtle scale change (1 → 1.05)
 * - Active: Scale down (1.05 → 0.95) for tactile feedback
 * - No hard borders (only glows or outline-variant)
 * - Touch targets ≥44px for accessibility
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  // Base button styles: shared across all variants
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'rounded-xl font-medium',
    'transition-all duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    'active:scale-95 active:translate-y-0',
    'hover:-translate-y-[2px]',
  )

  // Size variants
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  // Variant styles
  const variantStyles = {
    // Primary: Gradient cyan-to-blue, high contrast, main CTA
    // - Background: gradient from primary cyan (#00e5ff) to blue (#4D7FFF)
    // - Text: high contrast black (text-on-primary)
    // - Glow: neon-glow-strong effect (two-layer cyan shadow)
    // - Hover: glow intensifies
    // - Used for: "Book Me Now" and other primary actions
    primary: cn(
      'bg-gradient-to-br from-primary to-[#4D7FFF] text-on-primary',
      'shadow-neon-glow-strong',
      'hover:shadow-[0_0_40px_rgba(0,229,255,0.75),_0_0_12px_rgba(0,229,255,0.4)]',
    ),

    // Secondary: Purple glow, supporting role
    // - Background: secondary purple (#7000ff)
    // - Text: high contrast white (text-on-secondary)
    // - Glow: neon-glow-secondary effect (purple shadow)
    // - Hover: glow intensifies, slight scale up
    // - Used for: "Join Discord" and secondary CTAs
    secondary: cn(
      'bg-secondary text-on-secondary',
      'hover:shadow-neon-glow-secondary',
      'active:shadow-neon-glow-secondary',
    ),

    // Ghost: Glass tint with subtle outline, tertiary actions
    // - Background: white at 4% opacity for glass tint
    // - Border: subtle outline at 15% opacity (outline-variant)
    // - Text: normal surface color
    // - Hover: background tint increases to 8%, border and text shift to muted cyan
    // - Used for: Tertiary actions, links styled as buttons
    ghost: cn(
      'bg-white/[0.04] border border-outline-variant text-on-surface',
      'hover:bg-white/[0.08] hover:border-[rgba(0,229,255,0.45)] hover:text-[#00e5ff]',
    ),
  }

  const finalClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  )

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
