import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { siteData } from '../data/site'

export const Reviews = () => (
  <div className="pt-32 pb-24 min-h-screen">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="section-label mb-3">Praise</p>
        <h1 className="font-display text-5xl md:text-7xl font-light text-ink-900 dark:text-ivory-100 mb-6">
          What They <span className="italic text-forest-700 dark:text-gold-400">Say</span>
        </h1>
        <p className="font-display text-xl font-light italic text-ink-500 dark:text-ivory-400 max-w-2xl">
          "To read Di Nardo is to be reminded that poetry is not a relic but a living art — urgent, luminous, indispensable."
        </p>
      </motion.div>

      {/* Reviews in alternating layout */}
      <div className="space-y-16">
        {siteData.reviews.map((review, i) => (
          <motion.article
            key={review.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}
          >
            {/* Quote mark decoration */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-50 dark:bg-forest-950 flex items-center justify-center mt-2">
              <Quote size={18} className="text-gold-500" />
            </div>

            <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
              <div className="mb-2">
                <div className={`ink-divider mb-6 ${i % 2 === 1 ? 'md:ml-auto' : ''}`} />
              </div>
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-ink-800 dark:text-ivory-200 mb-6">
                "{review.quote}"
              </blockquote>
              <div className={`flex flex-col gap-0.5 ${i % 2 === 1 ? 'md:items-end' : ''}`}>
                <p className="font-body font-medium text-forest-700 dark:text-gold-400 text-sm">{review.author}</p>
                <p className="text-xs text-ink-500 dark:text-ivory-500 font-body">{review.title}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Add review CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 text-center p-12 rounded-2xl bg-forest-900 dark:bg-forest-950"
      >
        <p className="section-label text-gold-500 mb-3">Collaborate</p>
        <h2 className="font-display text-3xl font-light text-ivory-100 mb-4">
          Want to add your review?
        </h2>
        <p className="text-ivory-300/70 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          If Desi's work has impacted you, your organization, or your students — reach out to share your story.
        </p>
        <a href="/contact" className="btn-primary bg-gold-500 hover:bg-gold-400 text-ink-900">
          Get in Touch
        </a>
      </motion.div>
    </div>
  </div>
)
