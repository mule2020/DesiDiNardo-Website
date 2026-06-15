import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { Layout } from './components/layout/Layout'
import { AnimatedCursor } from './components/ui/AnimatedCursor'
import { Home } from './pages/Home'
import { Works } from './pages/Works'
import { Reviews } from './pages/Reviews'
import { Publications } from './pages/Publications'
import { Muse } from './pages/Muse'
import { Contact } from './pages/Contact'
import { ScrollToTop } from './components/layout/ScrollToTop'

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<Home />} />
        <Route path="/works"        element={<Works />} />
        <Route path="/reviews"      element={<Reviews />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/muse"         element={<Muse />} />
        <Route path="/contact"      element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <ScrollToTop />
        <AnimatedCursor />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
