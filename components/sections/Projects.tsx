'use client'

import { useEffect, useState, useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Instagram UI Clone',
    description:
      'A polished Instagram-inspired UI with stories, feed, and profile views tailored for Flutter.',
    technologies: ['Flutter', 'Dart', 'UI/UX'],
    githubUrl: 'https://github.com/Danyalkhan21555',
    liveUrl: '#',
    image:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'E-commerce App UI',
    description:
      'Premium shopping experience with curated product grids, detail views, and checkout flow.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    githubUrl: 'https://github.com/Danyalkhan21555',
    liveUrl: '#',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'WhatsApp UI Clone',
    description:
      'Messaging interface with chat list, conversations, and status inspired by WhatsApp.',
    technologies: ['Flutter', 'Dart'],
    githubUrl: 'https://github.com/Danyalkhan21555',
    liveUrl: '#',
    image:
      'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Provider State Management',
    description:
      'A best-practice Flutter starter showing scalable state management with Provider.',
    technologies: ['Flutter', 'Dart', 'Provider'],
    githubUrl: 'https://github.com/Danyalkhan21555',
    liveUrl: '#',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function Projects() {
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
      id="projects"
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
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Interfaces crafted to mirror modern product quality and polish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group card-surface rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur hover:-translate-y-2 transition-all duration-300 shadow-xl"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/80">Case Study</p>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-gray-700 dark:text-slate-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 dark:bg-slate-800 dark:text-primary-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-200 transition-colors group/link"
                    >
                      <FiGithub size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-200 transition-colors group/link"
                      >
                        <FiExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

