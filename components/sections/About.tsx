'use client'

import { motion } from 'framer-motion'
import { FiSmartphone, FiLayers, FiCloud, FiUser } from 'react-icons/fi'
import TiltCard from '../TiltCard'
import Section from '../Section'

const journey = [
  { year: '2021', title: 'The Genesis', desc: 'Started my journey with Java & Android Studio, building my first simple utility apps.' },
  { year: '2022', title: 'Flutter Transition', desc: 'Discovered the power of cross-platform development and fell in love with Dart.' },
  { year: '2023', title: 'UI Architect', desc: 'Began specializing in custom complex animations and high-fidelity design systems.' },
  { year: '2024', title: 'Full-Stack Mastery', desc: 'Extended my skills into Next.js, Cloud architectures, and large-scale enterprise solutions.' },
]

const services = [
  {
    icon: <FiSmartphone size={36} className="text-primary mb-5 group-hover:scale-110 transition-transform" />,
    title: 'Mobile Apps',
    desc: 'Cross-platform development with Flutter and Dart for iOS and Android.',
    glow: 'bg-primary/10',
  },
  {
    icon: <FiLayers size={36} className="text-accent mb-5 group-hover:scale-110 transition-transform" />,
    title: 'UI/UX Layout',
    desc: 'Designing immersive pixel-perfect interfaces with high attention to detail.',
    glow: 'bg-accent/10',
  },
  {
    icon: <FiCloud size={36} className="text-primary mb-5 group-hover:scale-110 transition-transform" />,
    title: 'Cloud Systems',
    desc: 'Scalable backends and API integration with Firebase and Node.js.',
    glow: 'bg-primary/10',
  },
]

export default function About() {
  return (
    <Section id="about">
      <div className="container-custom">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 sm:mb-24 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 glass-card rounded-full text-primary text-xs sm:text-sm font-bold border-white/10 uppercase tracking-widest">
              <FiUser className="animate-pulse" aria-hidden="true" /> My Story
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
              Crafting <span className="text-primary italic">Success</span>{' '}
              <br className="hidden sm:block" />One Pixel at a Time.
            </h2>
            <p className="text-base sm:text-xl text-muted leading-relaxed max-w-xl">
              I am <span className="text-white font-bold">Danyal Khan</span>, a dedicated Full-Stack Mobile Engineer and UI/UX Designer.
              My mission is to build digital products that are not only functional but visually cinematic.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 sm:px-6 py-2.5 sm:py-3 glass-card rounded-2xl border-white/5 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" /> Available for Hire
              </div>
              <div className="px-4 sm:px-6 py-2.5 sm:py-3 glass-card rounded-2xl border-white/5 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" /> Remote Expert
              </div>
            </div>
          </motion.div>

          {/* Right: timeline */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-white/20 to-transparent" />
            <div className="space-y-8 sm:space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative pl-6 sm:pl-8 group"
                >
                  <div className="absolute left-[-11px] top-2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-dark-900 border-2 border-primary group-hover:bg-primary transition-colors duration-500 z-10" />
                  <div className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-1">{item.year}</div>
                  <h3 className="text-lg sm:text-2xl font-black text-white mb-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, i) => (
            <TiltCard key={service.title}>
              <div className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 h-full border-white/5 hover:bg-white/5 transition-colors group relative overflow-hidden">
                {service.icon}
                <h3 className="text-xl sm:text-2xl font-black mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                <div className={`absolute -bottom-10 -right-10 w-36 h-36 ${service.glow} rounded-full blur-[80px]`} />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
