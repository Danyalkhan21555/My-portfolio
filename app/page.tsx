import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

// Lazy load below-the-fold sections for better LCP/TTI
const About = dynamic(() => import('@/components/sections/About'))
const Skills = dynamic(() => import('@/components/sections/Skills'))
const Projects = dynamic(() => import('@/components/sections/Projects'))
const Experience = dynamic(() => import('@/components/sections/Experience'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  return (
    <>
      {/* Hero is eager-loaded for fast LCP */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  )
}
