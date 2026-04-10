'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

/**
 * Mobile Bottom Navigation Bar
 *
 * Fixed navigation bar at bottom of mobile screens (hidden on desktop).
 * Provides quick access to main sections:
 * - Home
 * - About
 * - Books
 *
 * Desktop (md:) hides this and uses top navbar instead.
 * Uses scroll-spy to highlight active section.
 */
export function MobileBottomNav() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('home')
      return
    }

    const handleScroll = () => {
      const sections = [
        { id: 'about', sectionId: 'about' },
        { id: 'books', sectionId: 'books' },
      ]

      // Check which section is currently in viewport
      let found = false
      for (const { id, sectionId } of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          // If section is visible in viewport (top < window.innerHeight and bottom > 64px for mobile nav)
          if (rect.top < window.innerHeight * 0.6 && rect.bottom > 64) {
            setActiveSection(id)
            found = true
            break
          }
        }
      }

      // If no section found in viewport, we're at home/hero
      if (!found) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Call once on mount to set initial state
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: (active: boolean) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={active ? 'text-[#00E5FF]' : 'text-white/60'}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: 'About',
      href: '#about',
      icon: (active: boolean) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={active ? 'text-[#00E5FF]' : 'text-white/60'}
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      label: 'Books',
      href: '#books',
      icon: (active: boolean) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={active ? 'text-[#00E5FF]' : 'text-white/60'}
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
  ]

  const isActive = (href: string) => {
    if (pathname !== '/') return false

    if (href === '/') return activeSection === 'home'
    if (href === '#about') return activeSection === 'about'
    if (href === '#books') return activeSection === 'books'
    return false
  }

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-around z-40 bg-cyber-dark/90 border-t border-white/10"
      style={{
        backdropFilter: 'blur(20px)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {navItems.map((item) => {
        const active = isActive(item.href)
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center py-4 px-4 transition-colors duration-200 ${
              active ? 'text-[#00E5FF]' : 'text-white/50 hover:text-white/70'
            }`}
          >
            {item.icon(active)}
            <span className="text-[10px] uppercase tracking-widest font-semibold mt-1 text-center">
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

export default MobileBottomNav
