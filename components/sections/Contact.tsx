'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import Section from '../Section'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'md7428758@email.com' },
  { icon: FiPhone, label: 'Phone', value: '+92 313 9411785' },
  { icon: FiMapPin, label: 'Location', value: 'Remote Worldwide' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulated send
    await new Promise(r => setTimeout(r, 1500))
    setSent(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <Section id="contact">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 uppercase tracking-tighter">
            Start a <span className="text-primary italic">Project</span>
          </h2>
          <p className="text-muted text-sm sm:text-lg max-w-2xl">
            Have an idea? Let&apos;s build something extraordinary together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass-card rounded-2xl sm:rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5">
            {/* Contact Info */}
            <div className="md:w-2/5 p-6 sm:p-8 md:p-12 bg-primary/5">
              <h3 className="text-xl sm:text-2xl font-black mb-6 sm:mb-8">Contact Information</h3>
              <div className="space-y-5 sm:space-y-8">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                    <div className="p-3 sm:p-4 glass-card rounded-xl sm:rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted">{label}</div>
                      <div className="font-medium text-sm sm:text-base mt-0.5">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="md:w-3/5 p-6 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors hover:border-white/20 text-sm sm:text-base"
                      style={{ color: 'var(--text)', background: 'rgba(255,255,255,0.05)' }}
                      placeholder="Danyal Khan"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors hover:border-white/20 text-sm sm:text-base"
                      style={{ color: 'var(--text)', background: 'rgba(255,255,255,0.05)' }}
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors resize-none hover:border-white/20 text-sm sm:text-base"
                    style={{ color: 'var(--text)', background: 'rgba(255,255,255,0.05)' }}
                    placeholder="Tell me about your vision..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || sent}
                  whileTap={{ scale: 0.98 }}
                  className={`group w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg text-sm sm:text-base text-white ${
                    sent
                      ? 'bg-green-600 shadow-green-500/20'
                      : 'bg-primary hover:bg-blue-600 shadow-primary/20 disabled:opacity-50'
                  }`}
                  aria-label="Send contact message"
                >
                  {sent ? (
                    <><FiCheck className="animate-bounce" /> Message Sent!</>
                  ) : isSubmitting ? (
                    'Transmitting...'
                  ) : (
                    <>Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
