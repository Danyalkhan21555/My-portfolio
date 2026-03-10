'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import Section from '../Section'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      alert('Message Sent Successfully!')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <Section id="contact">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            Start a <span className="text-primary italic">Project</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Have an idea? Let's build something extraordinary together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass-card rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5">
            {/* Info Side */}
            <div className="md:w-2/5 p-8 md:p-12 bg-primary/5">
              <h3 className="text-2xl font-black mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 glass-card rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted">Email</div>
                    <div className="font-medium">md7428758@email.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 glass-card rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted">Phone</div>
                    <div className="font-medium">+92 313 9411785</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 glass-card rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted">Location</div>
                    <div className="font-medium">Remote Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="md:w-3/5 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors hover:border-white/20"
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
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors hover:border-white/20"
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
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none hover:border-white/20"
                    placeholder="Tell me about your vision..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 active:scale-[0.98]"
                >
                  {isSubmitting ? 'Transmitting...' : (
                    <>
                      Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
