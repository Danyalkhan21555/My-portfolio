'use client'

import { useEffect, useState, useRef } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container-custom">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="section-subtitle">
              Crafting elegant mobile experiences with Flutter, Dart, and thoughtful design.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <div className="card-surface rounded-2xl p-8 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
                <p className="text-lg text-gray-700 dark:text-slate-200 leading-relaxed">
                  I am a Flutter developer with strong UI/UX design skills. I build
                  clean and user-friendly mobile app interfaces that provide
                  exceptional user experiences.
                </p>
                <p className="text-lg text-gray-700 dark:text-slate-200 leading-relaxed">
                  My passion lies in creating beautiful, intuitive mobile
                  applications that not only look great but also function seamlessly.
                  I combine my technical expertise in Flutter and Dart with a keen
                  eye for design to bring ideas to life.
                </p>
                <p className="text-lg text-gray-700 dark:text-slate-200 leading-relaxed">
                  When I'm not coding, you can find me exploring new Flutter
                  packages, practicing UI/UX design principles, or working on
                  personal projects that challenge my skills.
                </p>
              </div>
            </div>
            <div className="card-surface rounded-2xl p-8 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Do
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-slate-200">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-200 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">Mobile App Development with Flutter & Dart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-200 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">UI/UX Design & Prototyping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-200 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">Firebase Integration & Backend Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-200 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">REST API Integration & Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-200 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">State Management & App Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

