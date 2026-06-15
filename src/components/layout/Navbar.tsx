import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { siteData } from '../../data/site'

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory-100/90 dark:bg-ink-900/90 backdrop-blur-md shadow-sm border-b border-forest-100/60 dark:border-forest-900/40'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-col leading-none">
            <span className="font-display text-xl font-light tracking-wider text-ink-900 dark:text-ivory-100 group-hover:text-forest-700 dark:group-hover:text-gold-400 transition-colors duration-300">
              Desi Di Nardo
            </span>
            <span className="text-[10px] font-body tracking-[0.22em] uppercase text-forest-600 dark:text-gold-500 mt-0.5">
              Poet · Professor · Scholar
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteData.nav.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link pb-1 ${
                  location.pathname === path
                    ? 'text-forest-700 dark:text-gold-400 after:w-full'
                    : 'dark:text-ivory-300 dark:hover:text-gold-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-forest-200 dark:border-forest-700 text-forest-700 dark:text-gold-400 hover:bg-forest-100 dark:hover:bg-forest-900 transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <Link to="/contact" className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5">
              Get in Touch
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center text-ink-800 dark:text-ivory-200"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ivory-100/97 dark:bg-ink-900/97 backdrop-blur-lg flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-6 mt-4">
              {siteData.nav.map(({ label, path }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={path}
                    className={`font-display text-4xl font-light ${
                      location.pathname === path
                        ? 'text-forest-700 dark:text-gold-400'
                        : 'text-ink-800 dark:text-ivory-200'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto mb-12">
              <div className="ink-divider mb-6" />
              <p className="section-label">Toronto, Canada</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
