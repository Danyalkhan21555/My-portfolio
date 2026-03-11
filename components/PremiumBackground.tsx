'use client'

import { useEffect, useState } from 'react'

/**
 * PremiumBackground: Animated ambient glow circles.
 * - On mobile: static circles (no motion) to save CPU
 * - On desktop: animated with Framer Motion
 */
export default function PremiumBackground() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    setMounted(true)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!mounted) return null

  // On mobile: static glows, no motion (saves CPU)
  if (isMobile) {
    return (
      <div className="premium-bg" aria-hidden="true">
        <div className="glow-circle w-[300px] h-[300px] -top-32 -left-32 opacity-10" />
        <div className="glow-circle w-[300px] h-[300px] bottom-0 right-0 bg-accent-purple opacity-10" />
      </div>
    )
  }

  // Desktop: animated glow orbs using CSS animations (lighter than Framer Motion)
  return (
    <div className="premium-bg" aria-hidden="true">
      <div
        className="glow-circle w-[500px] h-[500px] -top-48 -left-48"
        style={{ animation: 'float-tl 20s linear infinite' }}
      />
      <div
        className="glow-circle w-[600px] h-[600px] bottom-0 right-0"
        style={{ animation: 'float-br 25s linear infinite', background: 'var(--accent)' }}
      />
      <div
        className="glow-circle w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ animation: 'pulse-center 15s ease-in-out infinite', background: 'var(--primary)' }}
      />
      <style jsx>{`
        @keyframes float-tl {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(80px, 40px); }
          66% { transform: translate(40px, 20px); }
        }
        @keyframes float-br {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-80px, 80px); }
          66% { transform: translate(-40px, 40px); }
        }
        @keyframes pulse-center {
          0%, 100% { opacity: 0.08; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.18; transform: translate(-50%, -50%) scale(1.2); }
        }
      `}</style>
    </div>
  )
}
