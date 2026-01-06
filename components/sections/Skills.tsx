'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

type Skill = {
  name: string
  logo: string
  level: number
}

const skills: Skill[] = [
  {
    name: 'Flutter',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    level: 92,
  },
  {
    name: 'Dart',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    level: 90,
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    level: 86,
  },
  {
    name: 'REST APIs',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    level: 84,
  },
  {
    name: 'UI/UX Design',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    level: 87,
  },
]

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container-custom">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-14">
            <h2 className="section-title text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="section-subtitle">
              A toolkit focused on building premium mobile experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="card-surface rounded-2xl p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur text-center group hover:-translate-y-1.5 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm md:text-base">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-300 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                    }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 dark:text-slate-400">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

