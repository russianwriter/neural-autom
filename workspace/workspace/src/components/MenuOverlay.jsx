import { useEffect } from 'react'
import { motion } from 'motion/react'
import { EASE } from '../motion'

const ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'manifesto', label: 'Manifesto' },
  { id: 'linhas', label: 'Linhas' },
  { id: 'flagship', label: 'Flagship' },
  { id: 'prova', label: 'Prova' },
  { id: 'contato', label: 'Contato' },
]

export default function MenuOverlay({ open, onClose, onGo }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <motion.div
      className="menu-overlay"
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navegação"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <ul className="menu-overlay-list">
        {ITEMS.map((item, i) => (
          <li key={item.id}>
            <motion.button
              type="button"
              className="menu-overlay-link"
              onClick={() => onGo(item.id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
            >
              {item.label}
            </motion.button>
          </li>
        ))}
      </ul>
      <p className="menu-overlay-meta">NeuralAutom · robótica e automação</p>
    </motion.div>
  )
}
