'use client'

import { motion } from 'framer-motion'
import { FiSmartphone, FiLayers, FiCloud, FiUser, FiActivity } from 'react-icons/fi'
import TiltCard from '../TiltCard'
import Section from '../Section'

const journey = [
  { year: '2021', title: 'The Genesis', desc: 'Started my journey with Java & Android Studio, building my first simple utility apps.' },
  { year: '2022', title: 'Flutter Transition', desc: 'Discovered the power of cross-platform development and fell in love with Dart.' },
  { year: '2023', title: 'UI Architect', desc: 'Began specializing in custom complex animations and high-fidelity design systems.' },
  { year: '2024', title: 'Full-Stack Mastery', desc: 'Extended my skills into Next.js, Cloud architectures, and large-scale enterprise solutions.' },
]

export default function About() {
  return (
    <Section id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-primary text-sm font-bold border-white/10 uppercase tracking-widest">
              <FiUser className="animate-pulse" aria-hidden="true" /> My Story
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
              Crafting <span className="text-primary italic">Success</span> <br /> One Pixel at a Time.
            </h2>
            <p className="text-xl text-muted leading-relaxed max-w-xl">
              I am <span className="text-white font-bold">Danyal Khan</span>, a dedicated Full-Stack Mobile Engineer and UI/UX Designer.
              My mission is to build digital products that are not only functional but visually cinematic.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 glass-card rounded-2xl border-white/5 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available for Hire
              </div>
              <div className="px-6 py-3 glass-card rounded-2xl border-white/5 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Remote Expert
              </div>
            </div>
          </motion.div>

          {/* Animated Journey Timeline */}
          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-0 md:left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-white/20 to-transparent" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute left-[-11px] top-2 w-5 h-5 rounded-full bg-dark-900 border-2 border-primary group-hover:bg-primary transition-colors duration-500 z-10" />
                  <div className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-2">{item.year}</div>
                  <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Services / Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TiltCard>
            <div className="glass-card rounded-[2.5rem] p-10 h-full border-white/5 hover:bg-white/5 transition-colors group relative overflow-hidden">
              <FiSmartphone size={40} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4">Mobile Apps</h3>
              <p className="text-muted text-sm leading-relaxed">Cross-platform development with Flutter and Dart for iOS and Android.</p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
            </div>
          </TiltCard>
          <TiltCard>
            <div className="glass-card rounded-[2.5rem] p-10 h-full border-white/5 hover:bg-white/5 transition-colors group relative overflow-hidden">
              <FiLayers size={40} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4">UI/UX Layout</h3>
              <p className="text-muted text-sm leading-relaxed">Designing immersive pixel-perfect interfaces with high attention to detail.</p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px]" />
            </div>
          </TiltCard>
          <TiltCard>
            <div className="glass-card rounded-[2.5rem] p-10 h-full border-white/5 hover:bg-white/5 transition-colors group relative overflow-hidden">
              <FiCloud size={40} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4">Cloud Systems</h3>
              <p className="text-muted text-sm leading-relaxed">Scalable backends and API integration with Firebase and Node.js.</p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
            </div>
          </TiltCard>
        </div>
      </div>
    </Section>
  )
}
