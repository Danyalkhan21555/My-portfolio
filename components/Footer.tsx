'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container-custom px-4 sm:px-6">
        {/* Top CTA */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Let&apos;s Build the <span className="text-primary italic">Future</span>.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-3 sm:gap-4"
          >
            <a
              href="https://github.com/Danyalkhan21555"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-3 sm:p-4 glass-card rounded-xl sm:rounded-2xl text-white hover:text-primary transition-all hover:scale-110 border-white/5"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/danyalkhan215"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-3 sm:p-4 glass-card rounded-xl sm:rounded-2xl text-white hover:text-primary transition-all hover:scale-110 border-white/5"
            >
              <FiLinkedin size={22} />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 sm:mb-12" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
            <div className="text-xl sm:text-2xl font-black text-white">
              Danyal<span className="text-primary italic">.</span>
            </div>
            <p className="text-muted text-xs sm:text-sm font-medium">
              © {currentYear} Crafted with precision using Next.js &amp; Framer.
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full glass-card border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <FiArrowUp size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 group-hover:text-primary transition-colors">
              Top
            </span>
          </motion.button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">System Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
