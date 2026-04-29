import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="min-h-screen bg-base-950 text-base-100 font-sans antialiased grain">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
