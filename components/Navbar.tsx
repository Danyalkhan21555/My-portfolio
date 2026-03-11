'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { navItems } from '@/lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Read saved theme or default to dark
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initial = saved ?? 'dark'
    applyTheme(initial)
    setTheme(initial)
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const applyTheme = (t: 'light' | 'dark') => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(t)
  }

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }, [theme])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 md:p-6 transition-all duration-300">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2 sm:py-3 rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="text-xl sm:text-2xl font-black text-white dark:text-white light:text-gray-900 flex items-center gap-2 group flex-shrink-0"
          style={{ color: 'var(--text)' }}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)] text-white text-sm">
            D
          </div>
          <span className="hidden sm:block">Danyal.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className="px-3 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-white/5 relative group"
              style={{ color: 'var(--muted)' }}
            >
              <span className="hover:text-white transition-colors">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 transition-colors glass-card rounded-xl border-white/5 text-primary"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          )}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-colors glass-card rounded-xl border-white/5"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            style={{ color: 'var(--muted)' }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute top-16 sm:top-20 left-3 right-3 md:hidden glass-card rounded-2xl p-4 border-white/10 z-50 shadow-2xl"
          >
            <nav aria-label="Mobile navigation">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-base font-semibold py-3 px-4 rounded-xl border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
