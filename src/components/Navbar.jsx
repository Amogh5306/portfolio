import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cream-200/80 dark:bg-night-950/70 border-b border-cream-500/30 dark:border-night-700/40 transition-colors duration-400"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold text-charcoal-800 dark:text-night-50 tracking-tight hover:text-terra-600 dark:hover:text-terra-400 transition-colors duration-300"
          data-cursor-hover
        >
          AD<span className="text-terra-500">.</span>
        </a>

        <div className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor-hover
              className="text-sm font-medium text-charcoal-500 dark:text-night-200 hover:text-charcoal-800 dark:hover:text-night-50 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-terra-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
