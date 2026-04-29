import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    gradient: 'from-amber-500/20 to-amber-600/5',
    borderGlow: 'hover:shadow-amber-500/10',
    skills: ['Python', 'JavaScript', 'MATLAB', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'AI & ML',
    icon: '⚡',
    gradient: 'from-coral-500/20 to-coral-600/5',
    borderGlow: 'hover:shadow-coral-500/10',
    skills: [
      'Machine Learning',
      'Regression',
      'Random Forest',
      'SHAP',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Data Viz',
    ],
  },
  {
    title: 'Frontend',
    icon: '◆',
    gradient: 'from-amber-400/20 to-coral-500/5',
    borderGlow: 'hover:shadow-amber-400/10',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'REST APIs'],
  },
  {
    title: 'Design',
    icon: '✦',
    gradient: 'from-coral-400/20 to-amber-500/5',
    borderGlow: 'hover:shadow-coral-400/10',
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Typography', 'Visual Design'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-bold text-amber-500 tracking-[0.25em] uppercase mb-4">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-base-200 text-base sm:text-lg max-w-xl mx-auto">
            My toolkit for building smart, beautiful things.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${category.gradient} border border-base-600/40 hover:border-base-500/60 ${category.borderGlow} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
            >
              {/* Card inner bg */}
              <div className="absolute inset-0 bg-base-850/80 rounded-2xl" />

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.05) 0%, transparent 70%)' }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-base-700/60 border border-base-600/40 text-lg">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={pillVariants}
                      data-cursor-hover
                      whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.15, ease: 'easeOut' },
                      }}
                      className="inline-flex items-center px-3.5 py-1.5 text-[13px] font-semibold text-base-100 bg-base-700/50 border border-base-500/30 rounded-lg transition-all duration-300 hover:text-amber-300 hover:border-amber-500/40 hover:bg-amber-500/8 hover:shadow-[0_0_12px_rgba(245,166,35,0.08)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
