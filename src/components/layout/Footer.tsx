import { Link } from 'react-router-dom'
import { Mail, ArrowUp, ExternalLink } from 'lucide-react'
import { siteData } from '../../data/site'

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-ink-900 text-ivory-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-forest-800">
          <div>
            <h3 className="font-display text-3xl font-light text-ivory-100 mb-3">Desi Di Nardo</h3>
            <p className="section-label text-gold-500 mb-4">Poet · Professor · Scholar</p>
            <p className="text-sm text-ivory-300/70 leading-relaxed max-w-xs">
              Toronto-based poet whose work lives at the intersection of language, healing, and transformation.
            </p>
          </div>
          <div>
            <p className="section-label text-forest-400 mb-5">Navigate</p>
            <nav className="flex flex-col gap-3">
              {siteData.nav.map(({ label, path }) => (
                <Link key={path} to={path} className="text-sm text-ivory-300/70 hover:text-gold-400 transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="section-label text-forest-400 mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              <a href={siteData.contact.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ivory-300/70 hover:text-gold-400 transition-colors duration-200">
                <ExternalLink size={15} /> LinkedIn
              </a>
              <a href={`mailto:${siteData.contact.email}`}
                className="flex items-center gap-2 text-sm text-ivory-300/70 hover:text-gold-400 transition-colors duration-200">
                <Mail size={15} /> {siteData.contact.email}
              </a>
            </div>
            <div className="mt-8">
              <p className="section-label text-forest-400 mb-3">Books</p>
              {siteData.books.map(book => (
                <a key={book.id} href={book.link} target="_blank" rel="noopener noreferrer"
                  className="block text-sm text-ivory-300/70 hover:text-gold-400 transition-colors duration-200 mb-2">
                  {book.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-ivory-300/40 font-body">© {new Date().getFullYear()} Desi Di Nardo. All rights reserved.</p>
          <button onClick={scrollTop} className="flex items-center gap-2 text-xs text-ivory-300/50 hover:text-gold-400 transition-colors duration-200">
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
