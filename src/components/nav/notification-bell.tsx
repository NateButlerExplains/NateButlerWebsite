'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Notification {
  id: string
  type: string
  title: string
  message: string
  cta?: { label: string; href: string }
  active: boolean
}

export function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [dismissed, setDismissed] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const STORAGE_KEY = 'nb-dismissed-notifications'

  // Fetch notifications and load dismissed list from localStorage
  useEffect(() => {
    setHasMounted(true)

    // Load dismissed from localStorage
    const stored = localStorage.getItem(STORAGE_KEY)
    const dismissedList = stored ? JSON.parse(stored) : []
    setDismissed(dismissedList)

    // Fetch notifications from public JSON
    fetch('/data/notifications.json')
      .then(res => res.json())
      .then((data: Notification[]) => {
        setNotifications(data)

        // Auto-open modal if there are unread notifications (after brief delay)
        const unread = data.filter(n => !dismissedList.includes(n.id))
        if (unread.length > 0) {
          setTimeout(() => setIsOpen(true), 1500)
        }
      })
      .catch(err => console.error('Failed to fetch notifications:', err))
  }, [])

  const dismissNotification = (id: string) => {
    const updated = [...dismissed, id]
    setDismissed(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setIsOpen(false)
  }

  // Prevent rendering until hydrated (avoid localStorage mismatch)
  if (!hasMounted) return null

  // Count unread notifications
  const unread = notifications.filter(n => !dismissed.includes(n.id))
  const hasUnread = unread.length > 0

  return (
    <>
      {/* Bell Button — Mobile Only */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="md:hidden relative p-2 text-[#00E5FF] transition-all hover:scale-110"
        whileTap={{ scale: 0.95 }}
        style={{
          filter: 'drop-shadow(0 0 6px rgba(0, 229, 255, 0.5))',
        }}
      >
        {/* Bell SVG — thin, minimalist */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Bell body */}
          <path d="M18 16H6a1 1 0 0 1-1-1v-6a5 5 0 0 1 10 0v6a1 1 0 0 1-1 1z" />
          {/* Clapper */}
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>

        {/* Pulsing Badge Dot — only show if unread */}
        {hasUnread && (
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5FF]" />
          </span>
        )}
      </motion.button>

      {/* Modal Overlay — Notification Display */}
      <AnimatePresence>
        {isOpen && unread.length > 0 && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Card */}
            <motion.div
              className="bg-[#252429] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* First Unread Notification */}
              {unread[0] && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-white pr-6">{unread[0].title}</h2>
                  <p className="text-sm text-white/80 leading-relaxed">{unread[0].message}</p>

                  <div className="flex gap-2 pt-4">
                    {unread[0].cta && (
                      <Link
                        href={unread[0].cta.href}
                        onClick={() => dismissNotification(unread[0].id)}
                        className="flex-1 bg-[#00E5FF] text-slate-900 font-bold text-sm px-4 py-2 rounded-full text-center transition-all hover:scale-105"
                        style={{
                          boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
                        }}
                      >
                        {unread[0].cta.label}
                      </Link>
                    )}
                    <button
                      onClick={() => dismissNotification(unread[0].id)}
                      className="px-4 py-2 text-xs uppercase font-semibold text-white/70 hover:text-white transition-colors border border-white/20 rounded-full"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NotificationBell
