'use client'

import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import dynamic from 'next/dynamic'
import Section from '../Section'

const HeroCanvas = dynamic(() => import('../canvas/HeroCanvas'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
    </div>
  ),
})

export default function Hero() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 !py-0">
      {/* Background Decorative Blobs — hidden on mobile for perf */}
      <div className="absolute top-1/4 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse pointer-events-none mobile-hide-decoration" />
      <div className="absolute bottom-1/4 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse delay-700 pointer-events-none mobile-hide-decoration" />

      <div className="container-custom relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-8 sm:py-12 lg:py-0">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-8 border-primary/20"
          >
            <HiSparkles className="animate-pulse flex-shrink-0" />
            <span>Available for New Projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-5 sm:mb-8 leading-[0.9] uppercase tracking-tighter"
          >
            Crafting Digital <br />
            <span className="text-primary italic text-glow">Experiences</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-muted max-w-xl mb-8 sm:mb-12 leading-relaxed"
          >
            Hi, I&apos;m <span className="text-white font-semibold">Danyal Khan</span>.
            A Flutter Developer &amp; UI/UX Designer dedicated to building
            premium, user-centric mobile applications with cutting-edge tech.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              aria-label="View selected works and projects"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.4)] uppercase tracking-widest text-xs sm:text-sm"
            >
              Explore My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 sm:p-4 glass-card rounded-2xl text-white hover:text-primary transition-colors border-white/5 active:bg-white/10"
                aria-label="View developer GitHub profile"
                onClick={() => window.open('https://github.com/Danyalkhan21555', '_blank')}
              >
                <FiGithub size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 sm:p-4 glass-card rounded-2xl text-white hover:text-primary transition-colors border-white/5 active:bg-white/10"
                aria-label="Connect on LinkedIn"
                onClick={() => window.open('https://www.linkedin.com/in/danyalkhan215', '_blank')}
              >
                <FiLinkedin size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 3D Canvas */}
        <div className="w-full h-[280px] sm:h-[380px] lg:h-[600px] order-1 lg:order-2 relative">
          <Suspense fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 sm:w-32 h-24 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            </div>
          }>
            <HeroCanvas />
          </Suspense>
        </div>
      </div>
    </Section>
  )
}
