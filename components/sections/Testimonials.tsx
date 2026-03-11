'use client'

import { motion } from 'framer-motion'
import { FiMessageSquare, FiStar } from 'react-icons/fi'
import Section from '../Section'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Product Manager',
    company: 'TechFlow Systems',
    quote: "Danyal's expertise in Flutter and UI/UX design is unmatched. He delivered a complex mobile app ahead of schedule with zero compromising on design quality.",
    stars: 5,
  },
  {
    name: 'Sarah Miller',
    role: 'CEO & Founder',
    company: 'HealthPlus Solutions',
    quote: 'The level of professionalism and technical depth Danyal brought to our project was refreshing. Our conversion rates increased by 40% after his UI overhaul.',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'CloudCore',
    quote: 'A brilliant problem solver. His code is clean, modular, and extremely well documented. Danyal is now our go-to for any Flutter related work.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 uppercase tracking-tighter">
            Client <span className="text-primary italic">Feedback</span>
          </h2>
          <p className="text-muted text-sm sm:text-lg max-w-2xl">
            Success stories from amazing people I&apos;ve had the pleasure to build for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl sm:rounded-[2.5rem] p-7 sm:p-10 border-white/5 relative group hover:bg-primary/5 transition-colors duration-500"
            >
              {/* Large quote icon in background */}
              <div className="absolute top-0 right-0 p-6 sm:p-8 text-primary/10 transition-colors group-hover:text-primary/20 pointer-events-none">
                <FiMessageSquare size={60} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 sm:mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FiStar key={i} className="text-primary fill-primary" size={14} />
                ))}
              </div>

              <p className="text-base sm:text-lg text-white/90 italic mb-6 sm:mb-8 relative z-10 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="relative z-10">
                <div className="font-black text-lg sm:text-xl text-white">{testimonial.name}</div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/80 mt-1">
                  {testimonial.role} @ {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
