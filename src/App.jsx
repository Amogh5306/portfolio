import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface text-ink-2 font-sans antialiased grain theme-aware">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
