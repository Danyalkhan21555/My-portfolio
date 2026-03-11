'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiSmartphone, FiCpu, FiCode } from 'react-icons/fi'
import Section from '../Section'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  icon: JSX.Element
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Flutter Developer',
    company: 'Innovation Labs',
    period: '2023 - Present',
    description: 'Lead architect for cross-platform mobile solutions, achieving 40% faster rendering cycles and implementing advanced biometric security layers.',
    icon: <FiCpu />,
  },
  {
    title: 'Mobile UI Designer',
    company: 'Creative Studio',
    period: '2021 - 2023',
    description: 'Designed and deployed 15+ award-winning mobile interfaces. Specialized in complex motion transitions and adaptive design systems.',
    icon: <FiSmartphone />,
  },
  {
    title: 'Junior App Developer',
    company: 'NextGen Apps',
    period: '2020 - 2021',
    description: 'Maintained and scaled legacy Android applications, reducing crash rates by 25% through meticulous refactoring to MVVM architecture.',
    icon: <FiCode />,
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-24 text-center uppercase tracking-tighter">
          Career <span className="text-primary italic">Trajectory</span>
        </h2>

        {/* Mobile: stacked timeline. Desktop: alternating sides */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line — compact on mobile */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-white/10 to-transparent md:ml-[-0.5px] opacity-30" />

          <div className="space-y-10 sm:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pl-10 sm:pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 md:left-1/2 md:ml-[-16px] w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-dark-900 border-2 border-primary z-20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                  className="w-full md:w-[45%] group"
                >
                  <div className="glass-card rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 hover:bg-white/5 transition-all duration-700 border-white/5 relative shadow-xl">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-5 sm:mb-6">
                      <div
                        className="p-3 sm:p-4 glass-card rounded-xl sm:rounded-2xl text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500"
                        aria-hidden="true"
                      >
                        {exp.icon}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 glass-card rounded-full border-white/5">
                        <FiCalendar aria-hidden="true" className="flex-shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-black mb-2 group-hover:text-primary transition-colors duration-500">
                      {exp.title}
                    </h3>
                    <div className="text-sm sm:text-lg font-bold text-white/60 mb-4 sm:mb-6 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-primary/40 flex-shrink-0" /> {exp.company}
                    </div>
                    <p className="text-muted leading-relaxed text-sm sm:text-base font-medium">
                      {exp.description}
                    </p>
                    <div className="absolute -z-10 top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  </div>
                </motion.div>

                {/* Spacer for non-mobile */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
