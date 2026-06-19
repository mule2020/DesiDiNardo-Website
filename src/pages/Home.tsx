import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BookOpen, Mic2, GraduationCap, Feather } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/site'

// ── Floating leaf decoration ─────────────────────────────────────────────────
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

// ── Ink blot SVG decoration ───────────────────────────────────────────────────
const InkBlot = ({ className }: { className: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M100 20C130 20 140 50 160 60C180 70 180 100 160 120C140 140 140 170 100 180C60 170 40 150 30 120C20 90 30 60 50 50C70 40 70 20 100 20Z"
      fill="currentColor"
    />
  </svg>
)

// ── Typewriter line — used beside the hero photo ─────────────────────────────
const TypewriterLine = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setShown(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 40)
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [text, delay])

  return (
    <span>
      {shown}
      {!done && <span className="opacity-50 animate-pulse">|</span>}
    </span>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-ivory-100 dark:bg-ink-900">

      <FloatingOrb className="text-forest-600 w-16 h-20 top-1/4 left-[4%]" delay={0} />
      <FloatingOrb className="text-gold-500  w-10 h-14 top-1/3 right-[6%]" delay={2} />
      <FloatingOrb className="text-forest-400 w-8 h-10 bottom-1/3 left-[12%]" delay={4} />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-[42%] w-20 h-px bg-gold-500 origin-left"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left — text ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="section-label mb-6"
            >
              Toronto, Canada
            </motion.p>

            <div className="overflow-hidden mb-1">
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
              className="text-base md:text-lg leading-relaxed text-ink-600 dark:text-ivory-400 mb-10 max-w-lg"
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
          </div>

          {/* ── Right — portrait photo + typewriter caption beside it ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-gold-400/40 z-0"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-gold-400/20 z-0"
            />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full bg-gold-500/10 z-0" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
              style={{ rotate: -2 }}
            >
              <div className="relative w-72 h-96 md:w-80 md:h-[440px] lg:w-96 lg:h-[520px] rounded-2xl overflow-hidden shadow-ink border-2 border-gold-400/30">
                <img
                  src="/images/educator/image-1.jpg"
                  alt="Desi Di Nardo"
                  className="w-full h-full object-cover relative z-10"
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-forest-100 to-forest-200 dark:from-forest-900 dark:to-forest-950 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-forest-400/50 dark:border-forest-600 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-forest-500 dark:text-forest-400">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-xs text-forest-600 dark:text-forest-400 font-body text-center px-6 leading-relaxed">
                    Portrait photo<br />coming soon
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Typewriter caption beside/below the photo frame */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute -bottom-14 left-0 right-0 px-2"
              >
                <p className="font-display text-sm md:text-base italic text-center text-forest-700 dark:text-gold-400 leading-snug">
                  <TypewriterLine text={siteData.poetryLines[0]} delay={1800} />
                </p>
              </motion.div>

              <div className="absolute -bottom-2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

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

// ── Poetry reveal ─────────────────────────────────────────────────────────────
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
              className={`font-display text-2xl md:text-4xl font-light text-ivory-100 ${i % 2 === 1 ? 'pl-8 md:pl-16 text-gold-300' : ''}`}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Featured Poem ──────────────────────────────────────────────────────────
// TODO: Replace placeholder lines with one of Desi's real short poems
const featuredPoem = {
  title: 'Tumbleweed',
  lines: [
    'when your world ends',
    'stallion of the street',
    '2 in the morning',
    'my blue dress',
    'by your wrists',
    'at the window',
    'a beautiful view',
    '',
    'I crave language',
    'the stain of flesh',
    'the revving engine',
    'wayward honeysuckle',
    'tracing your fence',
    'and this frenzy—',
    'my mustang heart',
    '',
    'in the pain of glass',
    'wind and quietness',
    'a tumbleweed of rain',
    'tell the angels our story',
    'hold me photographer',
    'reclaim us despite',
    'the blindness from the start',
  ],
}

const FeaturedPoem = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative py-28 bg-ivory-50 dark:bg-ink-900 overflow-hidden">
      <InkBlot className="absolute -top-10 -left-16 w-64 h-64 text-forest-100 dark:text-forest-950 opacity-60" />
      <InkBlot className="absolute -bottom-16 -right-10 w-72 h-72 text-gold-100 dark:text-gold-950/40 opacity-40" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Feather size={20} className="text-gold-500 mx-auto mb-5" />
          <p className="section-label mb-3">A Poem</p>
          <h2 className="font-display text-2xl md:text-3xl italic font-light text-ink-900 dark:text-ivory-100 mb-10">
            {featuredPoem.title}
          </h2>
        </motion.div>

        <div className="space-y-2">
          {featuredPoem.lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className={`font-display text-lg md:text-xl leading-relaxed text-ink-700 dark:text-ivory-300 ${line === '' ? 'h-3' : ''}`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/works"
            className="text-sm font-body text-forest-700 dark:text-gold-400 font-medium hover:underline"
          >
            Read more of her poetry →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ── Audio reading — redesigned, sits right below the poem ────────────────────
const AudioReading = () => {
  const [playing, setPlaying] = useState(false)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-forest-900 dark:bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-xl mx-auto px-6 text-center"
      >
        <p className="section-label text-gold-500 mb-3">Listen</p>
        <h2 className="font-display text-2xl md:text-3xl italic font-light text-ivory-100 mb-12">
          Close your eyes.
        </h2>

        <div className="flex items-end justify-center gap-1.5 h-16 mb-10">
          {Array.from({ length: 28 }, (_, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-full bg-gold-400"
              animate={playing ? {
                height: [`${8 + (i % 5) * 6}px`, `${36 + (i % 7) * 6}px`, `${8 + (i % 5) * 6}px`],
              } : { height: '6px' }}
              transition={{
                duration: 0.8 + (i % 4) * 0.2,
                repeat: playing ? Infinity : 0,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <motion.button
          onClick={() => setPlaying(p => !p)}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-ink-900 hover:bg-gold-400 transition-colors duration-300 mx-auto shadow-gold"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          )}
        </motion.button>

        <audio
          src="/videos/poetry-video.mp4"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="hidden"
          ref={el => {
            if (el) {
              if (playing) el.play().catch(() => {})
              else el.pause()
            }
          }}
        />
        <p className="text-xs text-gold-400/70 tracking-wide mt-6 font-body">Desi reads her own poetry</p>
      </motion.div>
    </section>
  )
}

// ── Photo + pull quote moment ─────────────────────────────────────────────────
const PhotoQuoteMoment = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative py-20 md:py-28 bg-ivory-100 dark:bg-ink-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/images/educator/image-2.jpg"
            alt="Desi Di Nardo"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-ink-900/15 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:max-w-md"
          >
            <Feather size={16} className="text-gold-400 mb-3" />
            <p className="font-display text-xl md:text-2xl italic font-light text-ivory-100 leading-relaxed mb-3">
              "Desi makes the invisible palpable, and the visible insurgent."
            </p>
            <p className="text-xs text-gold-300/90 tracking-wide font-body">— On her poetry</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Stats row ─────────────────────────────────────────────────────────────────
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

// ── Role cards ────────────────────────────────────────────────────────────────
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

// ── Featured books ────────────────────────────────────────────────────────────
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

// ── Page export ───────────────────────────────────────────────────────────────
export const Home = () => (
  <>
    <Hero />
    <FeaturedPoem />
    <AudioReading />
    <PhotoQuoteMoment />
    <RoleCards />
    <PoetryReveal />
    <StatsRow />
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