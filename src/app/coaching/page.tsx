'use client'

import { useEffect } from 'react'

export default function CoachingRedirect() {
  useEffect(() => {
    window.location.href = 'https://nate.kashboxcoaching.com/'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-white">Redirecting to coaching platform...</p>
    </div>
  )
}
