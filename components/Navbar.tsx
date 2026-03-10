'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { navItems } from '@/lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initial = saved ?? 'dark'
    setTheme(initial)
    document.documentElement.classList.add('dark') // Force dark for now as per requirement
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 transition-all duration-300">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-2xl transition-all duration-300 ${scrolled ? 'glass-nav shadow-2xl scale-[1.02]' : 'bg-transparent'
          }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="text-2xl font-black text-white flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]">
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
              className="px-4 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-xl hover:bg-white/5 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 text-muted hover:text-primary transition-colors glass-card rounded-xl border-white/5"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted hover:text-white glass-card rounded-xl border-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="absolute top-24 left-6 right-6 md:hidden glass-card rounded-3xl p-6 border-white/10 z-50 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-lg font-medium text-muted hover:text-primary transition-colors py-2 border-b border-white/5 last:border-0"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

