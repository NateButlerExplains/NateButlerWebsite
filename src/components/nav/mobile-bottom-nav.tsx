'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, ReactNode } from 'react'

/**
 * Mobile Bottom Navigation Bar
 *
 * Fixed navigation bar at bottom of mobile screens (hidden on desktop).
 * 5 items: Podcast | About | [Home - center/featured] | Books | Coaching
 *
 * Desktop (md:) hides this and uses top navbar instead.
 * Scroll-spy tracks: podcast, about, books, coaching.
 * If none visible → active = home.
 *
 * Note: #podcast, #books, #coaching anchors are Phase 2 — links present
 * but targets don't exist yet, so they simply won't scroll anywhere.
 */

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function IconPodcast({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? 'text-[#00E5FF]' : 'text-white/60'}
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}

function IconAbout({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? 'text-[#00E5FF]' : 'text-white/60'}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconHome({ active }: { active: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? 'text-[#00E5FF]' : 'text-white/80'}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconBooks({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? 'text-[#00E5FF]' : 'text-white/60'}
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
      <polyline points="9 6 9 18" />
    </svg>
  )
}

function IconCoaching({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? 'text-[#00E5FF]' : 'text-white/60'}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function MobileBottomNav() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('home')
      return
    }

    const handleScroll = () => {
      const sections = ['podcast', 'about', 'books', 'coaching']

      let found = false
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.6 && rect.bottom > 64) {
            setActiveSection(id)
            found = true
            break
          }
        }
      }

      if (!found) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const isActive = (id: string) => {
    if (pathname !== '/') return id === 'home'
    return activeSection === id
  }

  // ── Standard nav item ──
  const NavItem = ({
    href,
    id,
    label,
    icon,
  }: {
    href: string
    id: string
    label: string
    icon: ReactNode
  }) => {
    const active = isActive(id)
    return (
      <Link
        href={href}
        className={`flex flex-col items-center justify-center gap-[3px] py-2 px-3 transition-colors duration-200 ${
          active ? 'text-[#00E5FF]' : 'text-white/50 hover:text-white/70'
        }`}
      >
        {icon}
        <span className="text-[9px] uppercase tracking-widest font-semibold leading-none">
          {label}
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
          className="flex items-center justify-center rounded-full w-9 h-9"
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
          }}
        >
          <IconHome active={active} />
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
          href="#about"
          id="about"
          label="About"
          icon={<IconAbout active={isActive('about')} />}
        />
        <NavItem
          href="#books"
          id="books"
          label="Books"
          icon={<IconBooks active={isActive('books')} />}
        />
        <HomeItem />
        <NavItem
          href="#coaching"
          id="coaching"
          label="Coaching"
          icon={<IconCoaching active={isActive('coaching')} />}
        />
        <NavItem
          href="#podcast"
          id="podcast"
          label="Podcast"
          icon={<IconPodcast active={isActive('podcast')} />}
        />
      </div>
    </nav>
  )
}

export default MobileBottomNav
