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

export default function Skills() {
  return (
    <Section id="skills">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              Technical <span className="text-primary italic">Proficiency</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl">
              Equipped with a diverse toolkit, I specialize in building cross-platform mobile
              solutions that don't compromise on performance or design quality.
            </p>

            <div className="space-y-6">
              {skillBars.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-sm font-bold uppercase tracking-widest text-white">{skill.name}</span>
                    <span className="text-xs font-black text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "circOut" }}
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square border-white/5 hover:border-primary/30 transition-colors group">
                <div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform mb-2">50+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted">Projects Completed</div>
              </div>
              <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square border-white/5 hover:border-primary/30 transition-colors group">
                <div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform mb-2">99%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted">Client Satisfaction</div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square border-white/5 hover:border-primary/30 transition-colors group">
                <div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform mb-2">04+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted">Years Exp.</div>
              </div>
              <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square border-white/5 hover:border-primary/30 transition-colors group">
                <div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform mb-2">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted">Professional Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
