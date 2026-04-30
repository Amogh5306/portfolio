import { motion } from 'framer-motion'
import TextRotator from './TextRotator'
import AnimatedShaderHero from './ui/animated-shader-hero'
import { LiquidButton, MetalButton } from './ui/liquid-glass-button'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section id="hero" className="relative w-full">
      <AnimatedShaderHero className="min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-line bg-card/40 backdrop-blur-md shadow-lg shadow-black/5 text-xs font-semibold text-ink-2 tracking-widest uppercase theme-aware">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            Open to opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-ink tracking-tight leading-[1.05] theme-aware"
        >
          Hey, I'm{' '}
          <span className="gradient-text">Amogh Dey</span>
        </motion.h1>

        {/* Animated role line */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 text-2xl sm:text-3xl md:text-4xl font-bold leading-none theme-aware"
        >
          <span className="text-ink-2">I'm a</span>
          <TextRotator />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base sm:text-lg text-ink-3 max-w-2xl mx-auto leading-relaxed theme-aware"
        >
          I build things at the intersection of{' '}
          <span className="text-amber-500 font-medium">code</span>,{' '}
          <span className="text-coral-500 font-medium">intelligence</span>, and{' '}
          <span className="text-amber-400 font-medium">design</span>
          — turning complex problems into smooth, beautiful digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <LiquidButton 
            onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
            data-cursor-hover
            className="px-10 h-14 text-white"
          >
            See what I do
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </LiquidButton>
          <MetalButton 
            onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
            variant="default"
            data-cursor-hover
          >
            My experience
          </MetalButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '3+', label: 'Technologies' },
            { value: '10+', label: 'Skills' },
            { value: 'KPMG', label: 'Internship' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold gradient-text">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-ink-4 tracking-wider uppercase theme-aware">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-16">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto w-6 h-10 rounded-full border-2 border-line flex items-start justify-center p-1.5 theme-aware"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], height: [6, 12, 6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 rounded-full bg-gradient-to-b from-amber-400 to-coral-400"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      </AnimatedShaderHero>
    </section>
  )
}
