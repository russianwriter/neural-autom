import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import MenuOverlay from './components/MenuOverlay.jsx'
import Hero from './components/Hero.jsx'
import {
  Manifesto,
  Linhas,
  Flagship,
  Prova,
  Contato,
} from './components/Chapters.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [detached, setDetached] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const update = () => {
      const bottom = hero.getBoundingClientRect().bottom
      setDetached(window.scrollY > 8)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const go = useCallback((id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <a className="skip-link" href="#hero">
        Ir ao conteúdo
      </a>
      <ScrollProgress />
      <Navbar
        menuOpen={menuOpen}
        detached={detached}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onGo={go}
      />
      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onGo={go}
      />
      <main>
        <Hero onGo={go} />
        <Manifesto />
        <Linhas />
        <Flagship onGo={go} />
        <Prova />
        <Contato onGo={go} />
      </main>
      <Footer />
    </>
  )
}
