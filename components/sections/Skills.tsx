'use client'

import { motion } from 'framer-motion'
import Section from '../Section'

type SkillBar = {
  name: string
  level: number
  color: string
}

const skillBars: SkillBar[] = [
  { name: 'Flutter & Dart', level: 95, color: '#3b82f6' },
  { name: 'UI/UX Design', level: 90, color: '#a855f7' },
  { name: 'React / Next.js', level: 85, color: '#06b6d4' },
  { name: 'Node.js / Backend', level: 80, color: '#10b981' },
  { name: 'Firebase / Cloud', level: 88, color: '#f59e0b' },
]

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '04+', label: 'Years Exp.' },
  { value: '24/7', label: 'Support' },
]

export default function Skills() {
  return (
    <Section id="skills">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: skill bars */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 uppercase tracking-tighter">
              Technical <span className="text-primary italic">Proficiency</span>
            </h2>
            <p className="text-muted text-base sm:text-lg mb-6 sm:mb-8 max-w-xl">
              Equipped with a diverse toolkit, I specialize in building cross-platform mobile
              solutions that don&apos;t compromise on performance or design quality.
            </p>

            <div className="space-y-5">
              {skillBars.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white">{skill.name}</span>
                    <span className="text-xs font-black text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 sm:h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: 'circOut' }}
                      className="h-full rounded-full relative"
                      style={{ backgroundColor: skill.color }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center text-center aspect-square border-white/5 hover:border-primary/30 transition-colors group ${i % 2 === 1 ? 'mt-4 sm:mt-8' : ''}`}
              >
                <div className="text-2xl sm:text-4xl font-black text-primary group-hover:scale-110 transition-transform mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
