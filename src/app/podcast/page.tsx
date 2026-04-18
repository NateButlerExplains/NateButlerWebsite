'use client'

import { useEffect } from 'react'

export default function PodcastRedirect() {
  useEffect(() => {
    window.location.href = 'https://www.tiktok.com/@natebutlerexplains'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-white">Redirecting to CyberTalks...</p>
    </div>
  )
}
