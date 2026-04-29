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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-terra-100/40 dark:bg-terra-900/10 blur-3xl transition-colors duration-500" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cream-400/50 dark:bg-night-800/50 blur-3xl transition-colors duration-500" />
        <div className="absolute top-1/4 left-1/6 w-[300px] h-[300px] rounded-full bg-terra-50/60 dark:bg-terra-900/8 blur-2xl transition-colors duration-500" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Tag line */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cream-500 dark:border-night-600 bg-cream-50/60 dark:bg-night-800/50 text-xs font-medium text-charcoal-500 dark:text-night-200 tracking-wide uppercase transition-colors duration-400">
            <span className="w-1.5 h-1.5 rounded-full bg-terra-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal-800 dark:text-night-50 tracking-tight leading-[1.05] transition-colors duration-400"
        >
          Amogh Dey
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-charcoal-500 dark:text-night-200 leading-relaxed max-w-2xl mx-auto transition-colors duration-400"
        >
          A seamless blend of{' '}
          <span className="text-terra-600 dark:text-terra-400 font-medium">Frontend Development</span>,{' '}
          <span className="text-terra-600 dark:text-terra-400 font-medium">AI/ML</span>, and{' '}
          <span className="text-terra-600 dark:text-terra-400 font-medium">Design</span>
          <span className="text-terra-500">.</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm sm:text-base text-charcoal-400 dark:text-night-300 max-w-xl mx-auto leading-relaxed transition-colors duration-400"
        >
          Crafting intelligent, beautifully designed digital experiences
          that sit at the intersection of technology and aesthetics.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#skills"
            data-cursor-hover
            className="group inline-flex items-center gap-2 px-6 py-3 bg-terra-500 hover:bg-terra-600 dark:bg-terra-600 dark:hover:bg-terra-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-terra-300/40 dark:hover:shadow-terra-900/40"
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
            className="inline-flex items-center px-6 py-3 border border-cream-600 dark:border-night-600 hover:border-charcoal-300 dark:hover:border-night-400 text-charcoal-600 dark:text-night-200 hover:text-charcoal-800 dark:hover:text-night-50 text-sm font-medium rounded-lg transition-all duration-300"
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
            className="w-5 h-8 rounded-full border border-cream-700 dark:border-night-500 flex items-start justify-center p-1 transition-colors duration-400"
          >
            <div className="w-1 h-2 rounded-full bg-cream-700 dark:bg-night-400 transition-colors duration-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
