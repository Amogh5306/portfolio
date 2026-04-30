import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { ShaderAnimation } from './components/ui/shader-animation'
import { SparklesCore } from './components/ui/sparkles'

function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Shader animation background */}
      <ShaderAnimation />

      {/* Sparkles particle effect */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesglobal"
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={80}
          className="w-full h-full opacity-60"
          particleColor="#f5a623"
          speed={0.8}
        />
      </div>

      {/* Tech grid */}
      <div className="absolute inset-0 tech-grid opacity-50 theme-aware" />
      
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50 theme-aware" />

      {/* Orbs - using pure CSS animations to fix lag */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full animate-float-slow"
        style={{ opacity: 'var(--c-orb-opacity)', background: 'radial-gradient(circle, rgba(245,166,35,0.25) 0%, transparent 70%)' }}
      />
      <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full animate-float-medium"
        style={{ opacity: 'var(--c-orb-opacity)', background: 'radial-gradient(circle, rgba(232,96,76,0.25) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full animate-float-fast"
        style={{ opacity: 'var(--c-orb-opacity)', background: 'radial-gradient(circle, rgba(255,194,51,0.2) 0%, transparent 70%)' }}
      />

      {/* Decorative shapes to fill blank space */}
      <div className="absolute top-[20%] right-[20%] text-line theme-aware">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11 0h2v24h-2z"/><path d="M0 11h24v2h-24z"/></svg>
      </div>
      <div className="absolute bottom-[30%] left-[15%] text-line theme-aware">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11 0h2v24h-2z"/><path d="M0 11h24v2h-24z"/></svg>
      </div>
      <div className="absolute top-[60%] right-[10%] text-line theme-aware">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M11 0h2v24h-2z"/><path d="M0 11h24v2h-24z"/></svg>
      </div>
      <div className="absolute top-[35%] left-[8%] text-line theme-aware opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>
      </div>
      <div className="absolute bottom-[20%] right-[25%] text-line theme-aware opacity-50">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20L12 2z"/></svg>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-surface text-ink-2 font-sans antialiased grain theme-aware">
        <CustomCursor />
        <BackgroundElements />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Skills />
            <Experience />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}
