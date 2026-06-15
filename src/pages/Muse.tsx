import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { museImages } from '../data/site'

const Lightbox = ({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) => {
  const img = museImages[index]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-ink-900/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-ivory-100 transition-colors"
      >
        <X size={18} />
      </button>

      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-ivory-100 transition-colors"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-4"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-ink"
        />
        <p className="font-display text-lg font-light italic text-ivory-300">{img.caption}</p>
        <p className="text-xs text-ivory-500">{index + 1} / {museImages.length}</p>
      </motion.div>

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        className="absolute right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-ivory-100 transition-colors"
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  )
}

export const Muse = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open  = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev  = () => setLightboxIndex(i => i !== null ? (i - 1 + museImages.length) % museImages.length : 0)
  const next  = () => setLightboxIndex(i => i !== null ? (i + 1) % museImages.length : 0)

  return (
    <>
      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="section-label mb-3">Inspiration</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-ink-900 dark:text-ivory-100 mb-4">
              The <span className="italic text-forest-700 dark:text-gold-400">Muse</span>
            </h1>
            <p className="text-ink-500 dark:text-ivory-400 max-w-xl leading-relaxed">
              The moments, spaces, and faces that breathe life into the poetry. A window into the world Desi inhabits — classrooms, communities, and the places where words begin.
            </p>
          </motion.div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {museImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl bg-forest-50 dark:bg-forest-950"
                onClick={() => open(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/50 transition-all duration-300 flex items-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-display text-sm italic text-ivory-100">{img.caption}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                    <ZoomIn size={14} className="text-ivory-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="ink-divider mx-auto mb-5" />
            <p className="font-display text-lg italic text-ink-400 dark:text-ivory-600">
              "For the poet, poetry is not art alone — it is force, it is fuel, it is fire."
            </p>
          </motion.div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </>
  )
}