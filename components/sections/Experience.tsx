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
        <h2 className="text-4xl md:text-6xl font-black mb-24 text-center uppercase tracking-tighter">
          Career <span className="text-primary italic">Trajectory</span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-white/10 to-transparent md:ml-[-0.5px] opacity-30" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Animation Dot */}
                <div className="absolute left-[24px] md:left-1/2 md:ml-[-16px] w-8 h-8 rounded-full bg-dark-900 border-2 border-primary z-20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className={`w-full md:w-[45%] group`}
                >
                  <div className="glass-card rounded-[2.5rem] p-10 hover:bg-white/5 transition-all duration-700 border-white/5 relative group-hover:scale-[1.02] shadow-xl">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 glass-card rounded-2xl text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner" aria-hidden="true">
                        {exp.icon}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest px-4 py-2 glass-card rounded-full border-white/5">
                        <FiCalendar aria-hidden="true" /> {exp.period}
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mb-2 group-hover:text-primary transition-colors duration-500">{exp.title}</h3>
                    <div className="text-lg font-bold text-white/60 mb-6 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-primary/40" /> {exp.company}
                    </div>

                    <p className="text-muted leading-relaxed text-base font-medium">
                      {exp.description}
                    </p>

                    <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  </div>
                </motion.div>

                {/* Empty spacer for the other side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
