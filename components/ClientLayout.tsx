'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import dynamic from 'next/dynamic'

// Heavy components — dynamically imported for code splitting
const LoadingScreen = dynamic(() => import('./LoadingScreen'), { ssr: false })
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false })
const PremiumBackground = dynamic(() => import('./PremiumBackground'), { ssr: false })
const StarsCanvas = dynamic(() => import('./canvas/Stars'), { ssr: false })
const Navbar = dynamic(() => import('./Navbar'), { ssr: false })
const Footer = dynamic(() => import('./Footer'), { ssr: false })

import SmoothScroll from './SmoothScroll'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      {/* Custom cursor — hidden on touch devices via CSS (hidden md:block) */}
      <CustomCursor />
      <PremiumBackground />
      <SmoothScroll>
        <StarsCanvas />
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          {children}
        </motion.main>
        <Footer />
      </SmoothScroll>
    </>
  )
}
