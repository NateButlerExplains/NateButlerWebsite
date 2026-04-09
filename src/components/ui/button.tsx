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
    'rounded-full font-medium',
    'transition-all duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    'active:scale-95',
    'hover:scale-105',
  )

  // Size variants
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  // Variant styles
  const variantStyles = {
    // Primary: Cyan glow, high contrast, main CTA
    // - Background: primary cyan (#00e5ff)
    // - Text: high contrast black (text-on-primary)
    // - Glow: neon-glow effect (cyan shadow)
    // - Hover: glow intensifies, slight scale up
    // - Used for: "Book Me Now" and other primary actions
    primary: cn(
      'bg-primary text-on-primary',
      'hover:shadow-neon-glow',
      'active:shadow-neon-glow',
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

    // Ghost: Transparent with outline, tertiary actions
    // - Background: transparent
    // - Border: subtle outline at 15% opacity (outline-variant)
    // - Text: normal surface color
    // - Hover: border and text shift to primary cyan, glow activates
    // - Used for: Tertiary actions, links styled as buttons
    ghost: cn(
      'bg-transparent border border-outline-variant text-on-surface',
      'hover:border-primary hover:text-primary hover:shadow-neon-glow',
      'active:shadow-neon-glow',
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
