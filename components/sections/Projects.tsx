'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import TiltCard from '../TiltCard'
import Section from '../Section'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image: string
  accent: string
}

const projects: Project[] = [
  {
    title: 'Instagram UI Clone',
    description: 'A pixel-perfect recreation of Instagram focusing on high-performance scrolling and fluid transitions.',
    technologies: ['Flutter', 'Dart', 'Animations'],
    githubUrl: 'https://github.com/Danyalkhan21555',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    accent: '#E4405F',
  },
  {
    title: 'Modern E-Com UI',
    description: 'Next-gen shopping experience with a focus on immersive product photography and glassmorphism UI.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    githubUrl: 'https://github.com/Danyalkhan21555',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    accent: '#3b82f6',
  },
]

export default function Projects() {
  return (
    <Section id="projects">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 uppercase tracking-tighter">
              Selected <span className="text-primary italic">Works</span>
            </h2>
            <p className="text-muted text-sm sm:text-lg">
              Pushing the boundaries of mobile design one pixel at a time.
            </p>
          </div>
          <div className="hidden md:block text-sm font-bold uppercase tracking-widest text-primary/50 flex-shrink-0">
            Scroll to Explore (0{projects.length})
          </div>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 gap-16 sm:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center group`}
            >
              {/* Image Container */}
              <TiltCard className="w-full md:w-3/5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-[2.5rem] glass-card border-white/5 group-hover:border-white/20 transition-all duration-700 shadow-2xl shimmer-effect">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-700" />

                  {/* Hover overlay with links */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-dark-900 to-transparent">
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 sm:p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all focus:ring-2 focus:ring-primary outline-none"
                        aria-label={`View GitHub source code for ${project.title}`}
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 sm:p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all focus:ring-2 focus:ring-primary outline-none"
                        aria-label={`Visit live demo for ${project.title}`}
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Content */}
              <div className="w-full md:w-2/5 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-black text-xs sm:text-sm tracking-widest uppercase">
                    0{index + 1}
                  </span>
                  <div className="h-[1px] w-8 sm:w-12 bg-primary/30" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 sm:px-5 py-1.5 sm:py-2 glass-card rounded-full text-xs font-bold uppercase tracking-wider border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 text-white font-bold group/btn hover:text-primary transition-colors"
                >
                  View Case Study
                  <FiArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
