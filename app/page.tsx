import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="space-y-24">
      <section className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Portfolio Content Checkpoint
        </h1>
        <p className="text-sm text-gray-600 dark:text-slate-300">
          If you can see this text, rendering is working.
        </p>
      </section>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}





