'use client'

import { useEffect, useState, useRef } from 'react'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: [
      'Led development of multiple web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality products',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines and improved deployment processes',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: [
      'Developed and maintained web applications using modern JavaScript frameworks',
      'Designed and implemented RESTful APIs',
      'Worked closely with designers to implement responsive UI components',
      'Optimized application performance and improved user experience',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: [
      'Built responsive websites using React and Vue.js',
      'Collaborated with clients to understand requirements and deliver solutions',
      'Transformed design mockups into functional web applications',
      'Ensured cross-browser compatibility and accessibility standards',
    ],
  },
]

export default function Experience() {
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
      id="experience"
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
              Experience
            </h2>
            <p className="section-subtitle">
              A track record of building and shipping polished digital products.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="card-surface rounded-2xl p-6 md:p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-transparent hover:border-primary-200/60 dark:hover:border-primary-500/30 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <FiBriefcase className="text-primary-600 dark:text-primary-200 flex-shrink-0" size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-base text-primary-600 dark:text-primary-200 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-slate-300 mt-3 md:mt-0">
                      <FiCalendar size={16} />
                      <span className="font-medium text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4 ml-9">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-slate-200 text-sm leading-relaxed"
                      >
                        <span className="text-primary-600 dark:text-primary-200 mr-3 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

