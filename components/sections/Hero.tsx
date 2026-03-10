'use client'

import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import dynamic from 'next/dynamic'
const HeroCanvas = dynamic(() => import('../canvas/HeroCanvas'), { ssr: false })
import Section from '../Section'

export default function Hero() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-20 !py-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="container-custom relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-8 border-primary/20"
          >
            <HiSparkles className="animate-pulse" />
            <span>Available for New Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] uppercase tracking-tighter"
          >
            Crafting Digital <br />
            <span className="text-primary italic animate-glow text-glow">Experiences</span>
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="absolute -top-10 right-20 w-4 h-4 bg-primary rounded-full animate-orbit blur-[2px] shadow-[0_0_20px_#3b82f6]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-xl mb-12 leading-relaxed"
          >
            Hi, I'm <span className="text-white font-semibold">Danyal Khan</span>.
            A Flutter Developer & UI/UX Designer dedicated to building
            premium, user-centric mobile applications with cutting-edge tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              data-magnetic
              aria-label="View selected works and projects"
              className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.4)] uppercase tracking-widest text-sm"
            >
              Explore My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                data-magnetic
                className="p-4 glass-card rounded-2xl text-white hover:text-primary transition-colors border-white/5 active:bg-white/10"
                aria-label="View developer GitHub profile"
                onClick={() => window.open('https://github.com/Danyalkhan21555', '_blank')}
              >
                <FiGithub size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                data-magnetic
                className="p-4 glass-card rounded-2xl text-white hover:text-primary transition-colors border-white/5 active:bg-white/10"
                aria-label="Connect on LinkedIn"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <FiLinkedin size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="w-full h-[400px] lg:h-[600px] order-1 lg:order-2 relative">
          <Suspense fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            </div>
          }>
            <HeroCanvas />
          </Suspense>
        </div>
      </div>
    </Section>
  )
}
