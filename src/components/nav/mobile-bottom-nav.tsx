'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Mobile Bottom Navigation Bar
 *
 * Fixed navigation bar at bottom of mobile screens (hidden on desktop).
 * 5 items: Corporate Events | Executive Offsites | [Home - center/featured] | Cyber Conferences | Virtual Events
 *
 * Desktop (md:) hides this and uses top navbar instead.
 */

export function MobileBottomNav() {
  const pathname = usePathname()

  const isActive = (id: string) => {
    if (pathname === '/') return id === 'home'
    return pathname.includes(id)
  }

  // ── Standard nav item with two-line text ──
  const NavItem = ({
    href,
    id,
    line1,
    line2,
  }: {
    href: string
    id: string
    line1: string
    line2: string
  }) => {
    const active = isActive(id)
    return (
      <Link
        href={href}
        className={`flex flex-col items-center justify-center gap-[2px] py-2 px-3 transition-colors duration-200 ${
          active ? 'text-[#00E5FF]' : 'text-white/50 hover:text-white/70'
        }`}
      >
        <span className="text-[9px] uppercase tracking-widest font-semibold leading-none">
          {line1}
        </span>
        <span className="text-[9px] uppercase tracking-widest font-semibold leading-none">
          {line2}
        </span>
      </Link>
    )
  }

  // ── Center/featured Home item ──
  const HomeItem = () => {
    const active = isActive('home')
    return (
      <Link
        href="/"
        className="flex flex-col items-center justify-center gap-[3px] py-1 px-3 transition-colors duration-200"
      >
        {/* Embossed button-like pill background */}
        <div
          className="flex items-center justify-center rounded-full w-9 h-9 text-lg font-semibold"
          style={{
            background: active
              ? 'linear-gradient(135deg, rgba(0, 229, 255, 0.25), rgba(0, 229, 255, 0.12))'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04))',
            boxShadow: active
              ? 'inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 0 20px rgba(0, 229, 255, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)'
              : 'inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 0 8px rgba(255, 255, 255, 0.08), 0 2px 6px rgba(0, 0, 0, 0.2)',
            border: active
              ? '1px solid rgba(0, 229, 255, 0.3)'
              : '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.2s ease',
            color: active ? '#00E5FF' : 'rgba(255,255,255,0.6)',
          }}
        >
          H
        </div>
        <span
          className="text-[9px] uppercase tracking-widest font-semibold leading-none"
          style={{ color: active ? '#00E5FF' : 'rgba(255,255,255,0.5)' }}
        >
          Home
        </span>
      </Link>
    )
  }

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cyber-dark/90 border-t border-white/10"
      style={{
        backdropFilter: 'blur(20px)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-center justify-around w-full">
        <NavItem
          href="/speaker/corporate"
          id="corporate"
          line1="Corporate"
          line2="Events"
        />
        <NavItem
          href="/speaker/executive-offsite"
          id="executive-offsite"
          line1="Executive"
          line2="Offsites"
        />
        <HomeItem />
        <NavItem
          href="/speaker/conference"
          id="conference"
          line1="Cyber"
          line2="Conferences"
        />
        <NavItem
          href="/speaker/cyber-event"
          id="cyber-event"
          line1="Virtual"
          line2="Events"
        />
      </div>
    </nav>
  )
}

export default MobileBottomNav
