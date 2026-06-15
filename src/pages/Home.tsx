import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BookOpen, Mic2, GraduationCap } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/site'

// Floating leaf/petal SVG decoration
const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{ y: [0, -20, 0], rotate: [0, 5, -3, 0], opacity: [0.4, 0.7, 0.4] }}
    transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M30 75C30 75 5 55 5 30C5 15.536 16.536 4 30 4C43.464 4 55 15.536 55 30C55 55 30 75 30 75Z"
        fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1"
      />
      <line x1="30" y1="4" x2="30" y2="75" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.75" />
    </svg>
  </motion.div>
)

// Typewriter effect for poetry lines
const PoetryReveal = () => {
  const [visibleLines, setVisibleLines] = useState(0)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  useEffect(() => {
    if (!isVisible) return
    siteData.poetryLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), i * 400)
    })
  }, [isVisible])

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-forest-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-1/4 w-64 h-64 rounded-full bg-gold-500 blur-3xl" />
        <div className="absolute bottom-8 right-1/4 w-48 h-48 rounded-full bg-forest-400 blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
        <p className="section-label text-gold-500 mb-10 text-center">A Voice Like No Other</p>
        <div className="space-y-3">
          {siteData.poetryLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={i < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`font-display text-2xl md:text-4xl font-light text-ivory-100 ${
                i % 2 === 1 ? 'pl-8 md:pl-16 text-gold-300' : ''
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats row
const StatsRow = () => {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid grid-cols-2 md:grid-cols-4 gap-px bg-forest-100 dark:bg-forest-900 border-y border-forest-100 dark:border-forest-900"
    >
      {siteData.stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
          className="bg-ivory-100 dark:bg-ink-900 p-8 text-center"
        >
          <p className="font-display text-4xl md:text-5xl font-light text-forest-700 dark:text-gold-400 mb-1">
            {stat.value}
          </p>
          <p className="section-label text-xs text-ink-600 dark:text-ivory-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

// Role cards
const roles = [
  { icon: BookOpen, title: 'Poet', desc: 'Published in Starbucks cups, TTC Transit, National Arts Centre, and journals across North America and beyond.' },
  { icon: GraduationCap, title: 'Professor', desc: 'Threading poetic inquiry through curriculum in Canadian universities — shaping scholarship with artistry and resonance.' },
  { icon: Mic2, title: 'Scholar', desc: 'Interdisciplinary researcher whose trauma-informed work spans CAMH, SickKids, Habitat For Women, and the June Callwood Centre.' },
]

const RoleCards = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-14">
        <p className="section-label mb-3">What She Does</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-ink-900 dark:text-ivory-100">
          Three Dimensions of One Voice
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-white dark:bg-ink-800 rounded-2xl p-8 border border-forest-100 dark:border-forest-900 hover:border-gold-400 dark:hover:border-gold-600 hover:shadow-gold transition-all duration-400 card-hover"
          >
            <div className="w-12 h-12 rounded-full bg-forest-50 dark:bg-forest-900 flex items-center justify-center mb-6 group-hover:bg-gold-100 dark:group-hover:bg-gold-900/40 transition-colors duration-300">
              <role.icon size={20} className="text-forest-700 dark:text-gold-400" />
            </div>
            <h3 className="font-display text-2xl font-light text-ink-900 dark:text-ivory-100 mb-3">{role.title}</h3>
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ivory-400">{role.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// Featured books
const FeaturedBooks = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  return (
    <section className="py-24 bg-ivory-200/50 dark:bg-ink-800/50">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="section-label mb-3">Published Works</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink-900 dark:text-ivory-100">
              The Books
            </h2>
          </div>
          <Link to="/works" className="btn-outline self-start md:self-auto text-sm">
            View All Works <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex gap-6 bg-white dark:bg-ink-800 rounded-2xl p-6 border border-forest-100 dark:border-forest-900 hover:shadow-card transition-all duration-300"
            >
              <div className="flex-shrink-0 w-24 md:w-28">
                <div className="relative rounded-lg overflow-hidden shadow-ink group-hover:shadow-gold transition-shadow duration-400">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-light text-ink-900 dark:text-ivory-100 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-ink-600 dark:text-ivory-400 line-clamp-3">
                    {book.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-forest-50 dark:bg-forest-900 text-forest-700 dark:text-forest-300 font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Hero
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-ivory-100 dark:bg-ink-900">
      {/* Decorative elements */}
      <FloatingOrb className="text-forest-600 w-16 h-20 top-1/4 left-[8%]" delay={0} />
      <FloatingOrb className="text-gold-500 w-10 h-14 top-1/3 right-[12%]" delay={2} />
      <FloatingOrb className="text-forest-400 w-8 h-10 bottom-1/3 left-[20%]" delay={4} />
      <FloatingOrb className="text-gold-400 w-12 h-16 bottom-1/4 right-[8%]" delay={1.5} />

      {/* Gold accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-[40%] w-24 h-px bg-gold-500 origin-left"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-label mb-6"
        >
          Toronto, Canada
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="display-heading"
          >
            Desi
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="display-heading italic text-forest-700 dark:text-gold-400"
          >
            Di Nardo
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="ink-divider" />
          <p className="font-display text-lg md:text-xl font-light italic text-forest-700 dark:text-gold-400 tracking-wide">
            Poet · Professor · Scholar
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="max-w-xl text-base md:text-lg leading-relaxed text-ink-600 dark:text-ivory-400 mb-10"
        >
          {siteData.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/works" className="btn-primary">
            Explore Works <ArrowRight size={15} />
          </Link>
          <Link to="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="section-label text-[10px]">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-forest-600 to-transparent"
        />
      </motion.div>
    </section>
  )
}

export const Home = () => (
  <>
    <Hero />
    <StatsRow />
    <RoleCards />
    <PoetryReveal />
    <FeaturedBooks />

    {/* CTA Banner */}
    <section className="py-20 bg-forest-700 dark:bg-forest-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label text-gold-400 mb-4">Poetry Parade</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-ivory-100 mb-5">
            Canada's National Poetry Mentorship Initiative
          </h2>
          <p className="text-ivory-300/80 mb-8 leading-relaxed">
            Convening Canada's foremost poets including Parliamentary and Toronto Poet Laureates to cultivate literary excellence among student writers.
          </p>
          <Link to="/works" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-ink-900 font-body font-medium text-sm tracking-wide rounded-full hover:bg-gold-400 transition-colors duration-200">
            Learn More <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
)
