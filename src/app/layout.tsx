import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
      </head>
      <body className="bg-cyber-dark text-on-surface antialiased">
        {children}
      </body>
    </html>
  )
}
