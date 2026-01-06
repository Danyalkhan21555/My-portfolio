'use client'

import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-28 md:pt-32"
    >
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto card-surface rounded-3xl p-10 md:p-14 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-primary-600 dark:text-primary-200 font-semibold mb-4 text-xs md:text-sm tracking-[0.28em] uppercase">
              Flutter Developer & UI/UX Designer
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="text-primary-600 dark:text-primary-200">Danyal Khan</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              I build clean and user-friendly mobile app interfaces with a focus on
              beautiful design and exceptional user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-3.5 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-3.5 bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-100 border-2 border-primary-600/60 dark:border-primary-400/60 rounded-xl font-semibold hover:bg-primary-50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <button
            onClick={scrollToAbout}
            className="mt-16 animate-bounce text-gray-400 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-200 transition-colors"
            aria-label="Scroll down"
          >
            <FiChevronDown size={28} />
          </button>
        </div>
      </div>
    </section>
  )
}

