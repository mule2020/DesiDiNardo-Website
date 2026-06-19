import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Feather, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ── Opening statement ──────────────────────────────────────────────────────
const Opening = () => (
    <section className="pt-40 pb-20 bg-ivory-100 dark:bg-ink-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-xs tracking-[0.2em] uppercase text-forest-600 dark:text-gold-400 mb-8"
            >
                About
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-display text-3xl md:text-5xl lg:text-6xl font-light italic leading-tight text-ink-900 dark:text-ivory-100"
            >
                A poet who teaches.
                <br />
                A teacher who never stopped writing.
            </motion.p>
        </div>
    </section>
)

// ── Photo moment — right after the opening line ────────────────────────────
const PhotoMoment = ({ src = '/images/about/desi1.jpeg' }: { src?: string }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })
    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="pb-24 bg-ivory-100 dark:bg-ink-900">
            <div className="max-w-2xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="rounded-2xl overflow-hidden shadow-ink aspect-[4/3]">
                        <img src={src} alt="Desi Di Nardo" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                </motion.div>
            </div>
        </section>
    )
}

// ── Chapters of her story ──────────────────────────────────────────────────
const chapters = [
    {
        num: 'I',
        title: 'The Beginning',
        text: '"Rainbird in the Annex" was the poem that started it all — not her first poem, but the first to find its own voice. A poem about place, and how a writer\'s craft takes shape from what they call home.',
    },
    {
        num: 'II',
        title: 'The Classroom',
        text: 'Long before her words appeared in print, Desi stood in front of students. Teaching never competed with writing — it sharpened it. The classroom became another kind of page, the page another kind of classroom.',
    },
]

const chaptersTwo = [
    {
        num: 'III',
        title: 'The Page',
        text: 'Two collections followed. The Plural of Some Things and The Cure Is A Forest — written with a probingly sensitive eye, where the numinous and the mundane sit comfortably side by side.',
    },
    {
        num: 'IV',
        title: 'The Stage',
        text: 'Her poetry left the page entirely — onto Starbucks cups, into TTC transit cars, across stages at the National Arts Centre. Proof that a poem doesn\'t need permission to enter daily life.',
    },
]

const ChapterBlock = ({ items, isVisible }: { items: typeof chapters; isVisible: boolean }) => (
    <div className="space-y-16">
        {items.map((ch, i) => (
            <motion.div
                key={ch.num}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex gap-6 md:gap-10"
            >
                <p className="font-display text-3xl md:text-4xl italic font-light text-gold-500 flex-shrink-0 w-10">
                    {ch.num}
                </p>
                <div>
                    <h3 className="font-display text-xl md:text-2xl font-light text-ink-900 dark:text-ivory-100 mb-3">
                        {ch.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-ink-600 dark:text-ivory-400">
                        {ch.text}
                    </p>
                </div>
            </motion.div>
        ))}
    </div>
)

const Chapters = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-white dark:bg-ink-800">
            <div className="max-w-3xl mx-auto px-6">
                <ChapterBlock items={chapters} isVisible={isVisible} />
            </div>
        </section>
    )
}

// ── Mid-page photo — between chapters II and III ───────────────────────────
const MidPhoto = ({ src = '/images/about/desi2.jpeg' }: { src?: string }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })
    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="py-4 bg-white dark:bg-ink-800">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
                        <img src={src} alt="Desi Di Nardo teaching" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
                        <img src="/images/about/desi3.jpeg" alt="Desi Di Nardo with students" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

const ChaptersTwo = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-white dark:bg-ink-800">
            <div className="max-w-3xl mx-auto px-6">
                <ChapterBlock items={chaptersTwo} isVisible={isVisible} />
            </div>
        </section>
    )
}

// ── Philosophy — her words on poetry, with photo ───────────────────────────
const Philosophy = ({ src = '/images/about/image-3.jpg' }: { src?: string }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })
    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-forest-900 dark:bg-ink-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold-500 blur-3xl" />
            </div>
            <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-ink aspect-[3/4]">
                            <img src={src} alt="Desi Di Nardo" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <Feather size={20} className="text-gold-400 mb-6" />
                        <p className="font-display text-2xl md:text-3xl lg:text-4xl italic font-light text-ivory-100 leading-relaxed mb-6">
                            "Desi makes the invisible palpable, and the visible insurgent."
                        </p>
                        <p className="text-sm text-gold-300/80 tracking-wide font-body mb-8">— On her poetry</p>
                        <p className="text-base leading-relaxed text-ivory-300/80">
                            For Desi, poetry is not a relic — it is a living art. Between lyric and critique, classroom and
                            community, her voice carries poetry's power to restore, revoke, and reimagine what we think we
                            already know.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// ── Timeline — recent to oldest, journal-style ─────────────────────────────
const milestones = [
    { year: '2024', text: 'Named an Annex Poet Laureate.', current: true },
    { year: '2022', text: 'Featured in TTC\'s Poetry on the Way, reaching daily commuters across Toronto.' },
    { year: '2021', text: 'Poems featured on Starbucks cups as part of "The Way I See It" series.' },
    { year: '2019', text: 'The Cure Is A Forest released by Guernica Editions.' },
    { year: '2013', text: 'Published The Plural of Some Things — her debut poetry collection.' },
    { year: '2008', text: 'Began writing seriously, with "Rainbird in the Annex" as a defining first poem.' },
]

const Timeline = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-ivory-50 dark:bg-ink-900">
            <div className="max-w-2xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-xs tracking-[0.2em] uppercase text-forest-600 dark:text-gold-400 mb-3">
                        The journey so far
                    </p>
                    <p className="font-display text-lg italic text-ink-500 dark:text-ivory-500">
                        Most recent first
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-[68px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-400 via-forest-300 dark:via-forest-700 to-transparent" />

                    <div className="space-y-10">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative flex gap-6 pl-0"
                            >
                                <div className="flex-shrink-0 w-16 text-right">
                                    <p className={`font-display text-lg italic ${m.current ? 'text-gold-500 font-medium' : 'text-forest-700 dark:text-gold-400'
                                        }`}>
                                        {m.year}
                                    </p>
                                </div>

                                <div className="relative flex-shrink-0 w-px">
                                    <div className={`absolute top-1.5 -left-[3px] w-2 h-2 rounded-full ${m.current ? 'bg-gold-500' : 'bg-forest-400 dark:bg-forest-600'
                                        }`} />
                                </div>

                                <p className="text-sm leading-relaxed text-ink-600 dark:text-ivory-400 pt-0.5 pl-2">
                                    {m.text}
                                    {m.current && (
                                        <span className="ml-2 text-[10px] uppercase tracking-wide text-gold-600 dark:text-gold-400 font-medium">
                                            · Latest
                                        </span>
                                    )}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// ── By the numbers, humanized ──────────────────────────────────────────────
const ByTheNumbers = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })
    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-white dark:bg-ink-800">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="font-display text-xl md:text-2xl leading-relaxed text-ink-700 dark:text-ivory-300"
                >
                    Two published collections.{' '}
                    <span className="italic text-forest-700 dark:text-gold-400">Fifteen years</span> of teaching.
                    Words that have lived on coffee cups, transit walls, and concert hall stages.
                    One voice that refuses to be just one thing.
                </motion.p>
            </div>
        </section>
    )
}

// ── Where she's been — geographic influence ────────────────────────────────
const places = ['Toronto', 'India', 'Iran', 'Italy']

const WhereSheBeen = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })
    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-forest-50/50 dark:bg-forest-950/30">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-xs tracking-[0.2em] uppercase text-forest-600 dark:text-gold-400 mb-8"
                >
                    Where her words have travelled
                </motion.p>
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
                    {places.map((place, i) => (
                        <motion.span
                            key={place}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="font-display text-2xl md:text-3xl italic font-light text-ink-800 dark:text-ivory-200"
                        >
                            {place}{i < places.length - 1 && <span className="text-gold-500 mx-3 not-italic">·</span>}
                        </motion.span>
                    ))}
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-sm text-ink-500 dark:text-ivory-500 mt-8 max-w-md mx-auto leading-relaxed"
                >
                    Classrooms and communities far beyond Toronto have made room for her words — proof that good poetry travels.
                </motion.p>
            </div>
        </section>
    )
}

// ── Closing — personal invitation ──────────────────────────────────────────
const Closing = () => (
    <section className="py-28 bg-forest-900 dark:bg-ink-900">
        <div className="max-w-xl mx-auto px-6 text-center">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-2xl md:text-3xl italic font-light text-ivory-100 leading-relaxed mb-12"
            >
                If you've read this far, you already know something about her work.
                <br />
                Now go read the rest of it.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
            >
                <Link
                    to="/works"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 text-ink-900 font-medium text-sm tracking-wide hover:bg-gold-400 transition-colors duration-300"
                >
                    Explore her work <ArrowRight size={15} />
                </Link>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold-400/40 text-gold-300 font-medium text-sm tracking-wide hover:bg-gold-400/10 transition-colors duration-300"
                >
                    Get in touch
                </Link>
            </motion.div>
        </div>
    </section>
)

// ── Page export ─────────────────────────────────────────────────────────────
export const About = () => (
    <>
        <Opening />
        <PhotoMoment src="/images/about/desi1.jpeg" />
        <Chapters />
        <MidPhoto />
        <ChaptersTwo />
        <Philosophy src="/images/educator/image-3.jpg" />
        <Timeline />
        <ByTheNumbers />
        <WhereSheBeen />
        <Closing />
    </>
)