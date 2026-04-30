import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-glass border-b border-line theme-aware"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight gradient-text"
          data-cursor-hover
        >
          AD
        </a>

        <div className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor-hover
              className="text-sm font-medium text-ink-3 hover:text-ink transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-500 to-coral-500 transition-all duration-400 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
