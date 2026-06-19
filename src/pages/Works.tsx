import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { siteData, workMedia } from '../data/site'

const categories = ['All', 'Collabs', 'Poetry', 'Education', 'Engagement', "Children's Author"]
// ── Image carousel ───────────────────────────────────────────────────────────
const ImageCarousel = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [current, setCurrent] = useState(0)
  if (!images.length) return null
  return (
    <div className="relative rounded-xl overflow-hidden mt-5 bg-forest-50 dark:bg-forest-950">
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="w-full h-48 object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); setCurrent(c => (c - 1 + images.length) % images.length) }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-ink-900/60 flex items-center justify-center text-ivory-100 hover:bg-ink-900/90 transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); setCurrent(c => (c + 1) % images.length) }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-ink-900/60 flex items-center justify-center text-ivory-100 hover:bg-ink-900/90 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setCurrent(i) }}
                className={`h-1.5 rounded-full transition-all duration-200 ${i === current ? 'bg-ivory-100 w-4' : 'bg-ivory-100/50 w-1.5'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Video player ─────────────────────────────────────────────────────────────
const VideoPlayer = ({ videos }: { videos: { src?: string; youtubeId?: string; label?: string }[] }) => {
  const [current, setCurrent] = useState(0)
  if (!videos.length) return null
  const video = videos[current]

  return (
    <div className="mt-5">
      {video.youtubeId ? (
        <div className="relative w-full rounded-xl overflow-hidden bg-ink-900" style={{ paddingTop: '56.25%' }}>
          <iframe
            key={video.youtubeId}
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.label || 'YouTube video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <video
          key={video.src}
          controls
          className="w-full rounded-xl bg-ink-900"
          style={{ maxHeight: '220px' }}
          preload="metadata"
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {videos.length > 1 && (
        <div className="flex gap-2 mt-2">
          {videos.map((v, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex items-center gap-1.5 text-[10px] px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
                i === current
                  ? 'bg-forest-700 text-ivory-100'
                  : 'bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-300 hover:bg-forest-100'
              }`}
            >
              <Play size={9} /> {v.label || `Video ${i + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Works page ───────────────────────────────────────────────────────────────
export const Works = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? siteData.works
    : siteData.works.filter(w => w.category === active)

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-ink-900 dark:text-ivory-100 mb-6">
            Works & <span className="italic text-forest-700 dark:text-gold-400">Collaborations</span>
          </h1>
          <div className="ink-divider" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-forest-700 text-ivory-100 shadow-forest'
                  : 'bg-white dark:bg-ink-800 text-ink-700 dark:text-ivory-300 border border-forest-100 dark:border-forest-900 hover:border-forest-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Works grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((work, i) => {
              const media = workMedia[work.id]
              return (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group bg-white dark:bg-ink-800 rounded-2xl p-7 border border-forest-100 dark:border-forest-900 hover:border-gold-400 dark:hover:border-gold-700 hover:shadow-gold transition-all duration-300 card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] px-3 py-1 rounded-full bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-300 font-medium tracking-widest uppercase">
                      {work.category}
                    </span>
                    {work.reach && (
                      <span className="text-[10px] text-gold-600 dark:text-gold-400 font-medium">{work.reach}</span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-light text-ink-900 dark:text-ivory-100 mb-1">{work.title}</h3>
                  <p className="text-xs text-forest-600 dark:text-gold-500 font-medium mb-3">{work.subtitle}</p>
                  <p className="text-sm leading-relaxed text-ink-600 dark:text-ivory-400 mb-2">{work.description}</p>

                  {/* Images */}
                  {media?.images && <ImageCarousel images={media.images} />}

                  {/* Videos */}
                  {media?.videos && <VideoPlayer videos={media.videos} />}

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {work.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-ink-700 text-ink-500 dark:text-ivory-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Books section */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="ink-divider" />
            <p className="section-label">Published Books</p>
            <div className="ink-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.books.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group flex gap-8 bg-white dark:bg-ink-800 rounded-2xl p-8 border border-forest-100 dark:border-forest-900 hover:shadow-card transition-all duration-300"
              >
                <div className="flex-shrink-0 w-32">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full rounded-lg shadow-ink group-hover:shadow-gold group-hover:scale-[1.03] transition-all duration-400"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-light text-ink-900 dark:text-ivory-100 mb-3">{book.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-600 dark:text-ivory-400">{book.description}</p>
                  </div>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-forest-700 dark:text-gold-400 font-medium hover:gap-3 transition-all duration-200"
                  >
                    Purchase on Amazon <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}