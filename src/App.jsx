import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const THEME_STORAGE_KEY = 'portfolio-theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [isDark, theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div
      className={`min-h-screen bg-cream-200 text-charcoal-600 font-sans antialiased transition-colors duration-300 dark:bg-charcoal-900 dark:text-cream-100 ${isDark ? 'dark' : ''}`}
    >
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
