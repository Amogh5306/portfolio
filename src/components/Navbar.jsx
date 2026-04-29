import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-cream-500/30 bg-cream-200/80 backdrop-blur-xl transition-colors duration-300 dark:border-charcoal-700/60 dark:bg-charcoal-900/80"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold text-charcoal-800 tracking-tight hover:text-terra-600 transition-colors duration-300 dark:text-cream-100 dark:hover:text-terra-300"
          data-cursor-hover
        >
          AD<span className="text-terra-500">.</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor-hover
              className="relative group text-sm font-medium text-charcoal-500 hover:text-charcoal-800 transition-colors duration-300 dark:text-cream-500 dark:hover:text-cream-100"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-terra-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <button
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            onClick={onToggleTheme}
            data-cursor-hover
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-500/70 bg-cream-50/70 text-charcoal-700 transition-all duration-300 hover:border-terra-300 hover:text-terra-600 hover:shadow-lg hover:shadow-cream-500/20 dark:border-charcoal-700 dark:bg-charcoal-800/80 dark:text-cream-200 dark:hover:border-terra-500 dark:hover:text-terra-300 dark:hover:shadow-black/20"
          >
            <span className="sr-only">{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            {isDark ? (
              <svg className="h-[18px] w-[18px]" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.36.39-1.59 1.59M21 12h-2.25m-.39 6.36-1.59-1.59M12 18.75V21m-4.77-4.23-1.59 1.59M5.25 12H3m4.23-4.77L5.64 5.64M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
              </svg>
            ) : (
              <svg className="h-[18px] w-[18px]" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A8.25 8.25 0 1 1 11.21 3 6.75 6.75 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
