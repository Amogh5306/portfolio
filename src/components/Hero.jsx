import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Warm radial gradient background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-terra-100/40 blur-3xl dark:bg-terra-900/20" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cream-400/50 blur-3xl dark:bg-charcoal-700/50" />
        <div className="absolute top-1/4 left-1/6 w-[300px] h-[300px] rounded-full bg-terra-50/60 blur-2xl dark:bg-terra-700/10" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Tag line */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cream-500 bg-cream-50/60 text-xs font-medium text-charcoal-500 tracking-wide uppercase dark:border-charcoal-700 dark:bg-charcoal-800/70 dark:text-cream-400">
            <span className="w-1.5 h-1.5 rounded-full bg-terra-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal-800 tracking-tight leading-[1.05] dark:text-cream-100"
        >
          Amogh Dey
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-charcoal-500 leading-relaxed max-w-2xl mx-auto dark:text-cream-400"
        >
          A seamless blend of{' '}
          <span className="text-terra-600 font-medium dark:text-terra-300">Frontend Development</span>,{' '}
          <span className="text-terra-600 font-medium dark:text-terra-300">AI/ML</span>, and{' '}
          <span className="text-terra-600 font-medium dark:text-terra-300">Design</span>
          <span className="text-terra-500">.</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm sm:text-base text-charcoal-400 max-w-xl mx-auto leading-relaxed dark:text-cream-500"
        >
          Crafting intelligent, beautifully designed digital experiences
          that sit at the intersection of technology and aesthetics.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#skills"
            data-cursor-hover
            className="group inline-flex items-center gap-2 px-6 py-3 bg-terra-500 hover:bg-terra-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-terra-300/40"
          >
            Explore my work
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a
            href="#experience"
            data-cursor-hover
            className="inline-flex items-center px-6 py-3 border border-cream-600 hover:border-charcoal-300 text-charcoal-600 hover:text-charcoal-800 text-sm font-medium rounded-lg transition-all duration-300 dark:border-charcoal-600 dark:text-cream-300 dark:hover:border-cream-500 dark:hover:text-cream-100"
          >
            View experience
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-cream-700 flex items-start justify-center p-1 dark:border-charcoal-500"
          >
            <div className="w-1 h-2 rounded-full bg-cream-700 dark:bg-cream-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
