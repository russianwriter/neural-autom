import { Plus } from 'lucide-react'
import { motion } from 'motion/react'
import { EASE } from '../motion'
import { GridDots, LogoMark } from './Icons'

export default function Navbar({ menuOpen, detached, onToggleMenu, onGo }) {
  return (
    <motion.nav
      className={`navbar${detached ? ' is-detached' : ''}${menuOpen ? ' is-menu-open' : ''}`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      aria-label="Principal"
    >
      <div className="nav-left">
        <button
          type="button"
          className="brand"
          onClick={() => onGo('hero')}
          aria-label="NeuralAutom, início"
        >
          <LogoMark />
          <span className="brand-name">NeuralAutom</span>
        </button>

        <button
          type="button"
          className="menu-btn"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          <span className="menu-btn-circle">
            <Plus
              size={12}
              strokeWidth={3}
              style={{
                transform: menuOpen ? 'rotate(45deg)' : 'none',
                transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </span>
          <span className="menu-btn-label">{menuOpen ? 'Fechar' : 'Menu'}</span>
        </button>

        <div className="tags-pill" aria-hidden="true">
          <span className="tag-label">Advanced Bionics</span>
          <span className="tag-label">Cognitive AI</span>
        </div>
      </div>

      <div className="nav-right">
        <div className="systems-pill">
          <span className="icon-circle">
            <GridDots />
          </span>
          <span className="systems-label">Adaptive Systems</span>
        </div>
      </div>
    </motion.nav>
  )
}
