import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { CyberBackground } from '@/components/ui/cyber-background'
import { Navbar } from '@/components/nav/navbar'
import { MobileBottomNav } from '@/components/nav/mobile-bottom-nav'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Nate Butler — Global Command Authority in GRC, AI & Cybersecurity',
  description: 'Strategic intelligence and executive briefings from a top-tier authority in governance, risk, compliance, and cybersecurity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#131318" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-cyber-dark text-on-surface antialiased">
        {/* Global cyber intelligence HUD background */}
        <CyberBackground />

        {/* Navigation bar */}
        <Navbar />

        {/* Page content with top padding for fixed navbar */}
        {children}

        {/* Mobile bottom navigation */}
        <MobileBottomNav />
      </body>
    </html>
  )
}
