'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container-custom px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Let's Build the <span className="text-primary italic">Future</span>.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <a href="https://github.com/Danyalkhan21555" target="_blank" className="p-4 glass-card rounded-2xl text-white hover:text-primary transition-all hover:scale-110 border-white/5">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-4 glass-card rounded-2xl text-white hover:text-primary transition-all hover:scale-110 border-white/5">
              <FiLinkedin size={24} />
            </a>
          </motion.div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-black text-white">
              Danyal<span className="text-primary italic">.</span>
            </div>
            <p className="text-muted text-sm font-medium">
              © {currentYear} Crafted with precision using Next.js & Framer.
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <FiArrowUp size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 group-hover:text-primary transition-colors">
              Back to Top
            </span>
          </motion.button>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">System Active</span>
              </div>
              <div className="text-[10px] text-muted font-medium uppercase tracking-widest mt-1">2025 Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
