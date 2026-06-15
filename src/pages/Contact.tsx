import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, ExternalLink } from 'lucide-react'
import { siteData } from '../data/site'

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <p className="section-label mb-3">Say Hello</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-ink-900 dark:text-ivory-100 mb-6">
            Get in <span className="italic text-forest-700 dark:text-gold-400">Touch</span>
          </h1>
          <div className="ink-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2">
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ivory-400 mb-10">
              Whether you're interested in a reading, collaboration, academic inquiry, or just want to connect about poetry — Desi would love to hear from you.
            </p>
            <div className="space-y-5">
              <a href={`mailto:${siteData.contact.email}`} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-forest-50 dark:bg-forest-950 flex items-center justify-center group-hover:bg-gold-100 dark:group-hover:bg-gold-900/30 transition-colors duration-200">
                  <Mail size={16} className="text-forest-700 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-[10px] section-label mb-0.5">Email</p>
                  <p className="text-sm text-ink-700 dark:text-ivory-300 group-hover:text-forest-700 dark:group-hover:text-gold-400 transition-colors">{siteData.contact.email}</p>
                </div>
              </a>
              <a href={siteData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-forest-50 dark:bg-forest-950 flex items-center justify-center group-hover:bg-gold-100 dark:group-hover:bg-gold-900/30 transition-colors duration-200">
                  <ExternalLink size={16} className="text-forest-700 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-[10px] section-label mb-0.5">LinkedIn</p>
                  <p className="text-sm text-ink-700 dark:text-ivory-300 group-hover:text-forest-700 dark:group-hover:text-gold-400 transition-colors">Desi Di Nardo</p>
                </div>
              </a>
            </div>
            <div className="mt-10 p-5 rounded-xl bg-forest-50 dark:bg-forest-950 border border-forest-100 dark:border-forest-900">
              <p className="section-label mb-2">Based In</p>
              <p className="font-display text-xl font-light text-ink-900 dark:text-ivory-100">Toronto, Ontario</p>
              <p className="text-xs text-ink-500 dark:text-ivory-500 mt-1">Canada</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-3">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-20">
                <CheckCircle size={48} className="text-forest-600 dark:text-gold-400 mb-4" />
                <h2 className="font-display text-3xl font-light text-ink-900 dark:text-ivory-100 mb-3">Message Received</h2>
                <p className="text-ink-500 dark:text-ivory-400 text-sm">Thank you for reaching out. Desi will be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Doe' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-xs font-body font-medium text-ink-500 dark:text-ivory-500 mb-2 tracking-wide">{field.label}</label>
                      <input type={field.type} name={field.name} value={(form as Record<string,string>)[field.name]}
                        onChange={handleChange} placeholder={field.placeholder} required
                        className="w-full px-4 py-3 rounded-xl border border-forest-200 dark:border-forest-800 bg-white dark:bg-ink-800 text-ink-900 dark:text-ivory-100 text-sm placeholder:text-ink-300 dark:placeholder:text-ivory-600 focus:outline-none focus:border-forest-500 dark:focus:border-gold-500 transition-colors duration-200" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-ink-500 dark:text-ivory-500 mb-2 tracking-wide">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Reading inquiry, collaboration, etc."
                    className="w-full px-4 py-3 rounded-xl border border-forest-200 dark:border-forest-800 bg-white dark:bg-ink-800 text-ink-900 dark:text-ivory-100 text-sm placeholder:text-ink-300 dark:placeholder:text-ivory-600 focus:outline-none focus:border-forest-500 dark:focus:border-gold-500 transition-colors duration-200" />
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-ink-500 dark:text-ivory-500 mb-2 tracking-wide">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={6} required
                    placeholder="Tell Desi about your project, question, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-forest-200 dark:border-forest-800 bg-white dark:bg-ink-800 text-ink-900 dark:text-ivory-100 text-sm placeholder:text-ink-300 dark:placeholder:text-ivory-600 focus:outline-none focus:border-forest-500 dark:focus:border-gold-500 transition-colors duration-200 resize-none" />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary w-full justify-center">
                  Send Message <Send size={14} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
