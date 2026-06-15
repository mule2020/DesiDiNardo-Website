import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'


const articles = [
  {
    title: 'Desi Di Nardo, an Annex Poet Laureate',
    image: '/images/publications/image-7.jpeg',
    type: 'Award',
    year: '2024',
    outlet: 'Annex Literary Award',
  },
  {
    title: 'Q&A — National Post "The Afterword"',
    image: '/images/publications/image-1.png',
    type: 'Interview',
    year: 'Earlier',
    outlet: 'National Post, by Mark Medley',
    link: 'https://desidinardo.com/documents/q&a-mark-medley.doc',
    linkLabel: 'Download Full Interview',
    qa: [
      {
        q: 'Can you remember the first poem you ever wrote? What was it about?',
        a: "I always remember writing poetry, even from a very early age, but 'Rainbird in the Annex' is the first poem I wrote when I began my writing about eight years ago. Fittingly, it deals with the influence and essentialness of place for a writer and the shaping of one's voice or craft based on what that writer or artist defines as 'home.'",
      },
      {
        q: "Who's your favourite living poet — Canadian or otherwise — and why?",
        a: "There are so many brilliant poets who are the backbone of what modern poetry in Canada is today. As for a favourite living poet, I don't have one, though there are a handful of poets whose style I appreciate. P. K. Page is one. Another is Pier Giorgio Di Cicco for his wry wit and magical way of personifying unlikely matter. And someone whose work I've only been recently acquainted with is Tim Lilburn whose poetical charm is heavily entrenched in landscape and the natural world.",
      },
      {
        q: 'If you could get everyone in the world to read one poem, what would it be?',
        a: "Hands down — Al Purdy's 'The Last Picture in the World'. It is starkly still, sad, and impossibly beautiful.",
      },
      {
        q: "What's the most exciting thing happening in poetry these days?",
        a: 'More and more poetry is reaching people who might otherwise not be readily exposed to it. Not only is the poetical word alive and well but there are more opportunities and venues for performances and readings, a larger number of poets mentoring students in schools, greater community involvement, and much more accessibility for those interested in getting published on the Net.',
      },
    ],
  },
  {
    title: 'Ten Questions With Desi Di Nardo',
    image: '/images/publications/image-2.jpg',
    type: 'Interview',
    year: 'Recent',
    outlet: 'Literary Magazine',
  },
  {
    title: 'The Cure Is A Forest — Commentary',
    image: '/images/publications/image-3.png',
    type: 'Review',
    year: 'Recent',
    outlet: 'Literary Review',
  },
  {
    title: 'Canadian Poet Finds New Venues, Sources For Creative Voices',
    image: '/images/publications/image-4.jpg',
    type: 'Article',
    year: 'Recent',
    outlet: 'National Publication',
  },
  {
    title: 'Suzanne Takes Your Hand',
    image: '/images/publications/image-5.jpg',
    type: 'Article',
    year: 'Earlier',
    outlet: 'Literary Publication',
  },
  {
    title: 'Jumpstarting The Words',
    image: '/images/publications/image-6.jpg',
    type: 'Article',
    year: 'Earlier',
    outlet: 'Literary Publication',
  },
]

const typeBadgeClass = (type: string) => {
  switch (type) {
    case 'Award':     return 'bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400'
    case 'Interview': return 'bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-300'
    default:          return 'bg-ivory-200 dark:bg-ink-700 text-ink-600 dark:text-ivory-400'
  }
}

// Lightbox for individual article images
const Lightbox = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className="fixed inset-0 z-50 bg-ink-900/95 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={onClose}
  >
    <button
      onClick={onClose}
      className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-ivory-100 transition-colors"
    >
      <X size={18} />
    </button>
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl max-h-[90vh]"
      onClick={e => e.stopPropagation()}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[88vh] max-w-full object-contain rounded-xl shadow-ink"
      />
    </motion.div>
  </motion.div>
)

export const Publications = () => {
  const [lightboxSrc, setLightboxSrc] = useState<{ src: string; alt: string } | null>(null)
  const [expandedQA, setExpandedQA] = useState<number | null>(1) // open the National Post Q&A by default

  return (
    <>
      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="section-label mb-3">Media & Press</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-ink-900 dark:text-ivory-100 mb-6">
              Publications <span className="italic text-forest-700 dark:text-gold-400">&</span> Press
            </h1>
            <div className="ink-divider" />
          </motion.div>

          {/* Articles — each with its own image */}
          <div className="space-y-10">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="bg-white dark:bg-ink-800 rounded-2xl border border-forest-100 dark:border-forest-900 overflow-hidden hover:border-gold-400 dark:hover:border-gold-700 transition-colors duration-300"
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Image side */}
                  <div
                    className="md:w-56 flex-shrink-0 bg-forest-50 dark:bg-forest-950 cursor-zoom-in overflow-hidden"
                    onClick={() => setLightboxSrc({ src: article.image, alt: article.title })}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium font-body ${typeBadgeClass(article.type)}`}>
                          {article.type}
                        </span>
                        <span className="text-[10px] text-gold-600 dark:text-gold-500 font-medium font-body uppercase tracking-widest">
                          {article.year}
                        </span>
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-light text-ink-900 dark:text-ivory-100 mb-1">
                        {article.title}
                      </h2>
                      <p className="text-xs text-ink-500 dark:text-ivory-500 mb-4">{article.outlet}</p>

                      {/* Expandable Q&A */}
                      {article.qa && (
                        <div className="mt-2">
                          <button
                            onClick={() => setExpandedQA(expandedQA === i ? null : i)}
                            className="text-xs font-medium text-forest-700 dark:text-gold-400 hover:underline flex items-center gap-1 mb-4"
                          >
                            {expandedQA === i ? 'Hide Q&A ↑' : 'Read Q&A ↓'}
                          </button>
                          <AnimatePresence initial={false}>
                            {expandedQA === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-5 pt-1 pb-2">
                                  {article.qa.map((item, qi) => (
                                    <div key={qi} className="border-l-2 border-gold-400 pl-4">
                                      <p className="font-display text-sm font-medium italic text-forest-700 dark:text-gold-400 mb-1">
                                        {item.q}
                                      </p>
                                      <p className="text-xs leading-relaxed text-ink-600 dark:text-ivory-400">{item.a}</p>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    {/* Footer row */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-forest-100 dark:border-forest-900">
                      <button
                        onClick={() => setLightboxSrc({ src: article.image, alt: article.title })}
                        className="text-xs text-ink-400 dark:text-ivory-600 hover:text-forest-700 dark:hover:text-gold-400 transition-colors flex items-center gap-1"
                      >
                        View image ↗
                      </button>
                      {article.link && (
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-forest-700 dark:text-gold-400 font-medium hover:underline"
                        >
                          {article.linkLabel || 'Download'} <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <Lightbox
            src={lightboxSrc.src}
            alt={lightboxSrc.alt}
            onClose={() => setLightboxSrc(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}