/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light'
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isLight) {
      root.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      root.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }, [isLight])

  const toggleTheme = () => setIsLight((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
