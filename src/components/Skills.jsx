import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['Python', 'JavaScript', 'MATLAB', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'AI & ML',
    icon: '⚡',
    skills: [
      'Machine Learning',
      'Regression',
      'Random Forest',
      'SHAP',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Data Visualization',
    ],
  },
  {
    title: 'Frontend',
    icon: '◆',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'REST APIs'],
  },
  {
    title: 'Design',
    icon: '✦',
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

function getGoogleSearchUrl(skill) {
  return `https://www.google.com/search?q=${encodeURIComponent(skill)}`
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight theme-aware">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-ink-3 text-base sm:text-lg max-w-xl mx-auto theme-aware">
            My toolkit for building smart, beautiful things. Click any skill to learn more.
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
              className="group relative p-6 sm:p-8 rounded-2xl border border-line hover:border-line-hover hover:shadow-2xl transition-all duration-500 overflow-hidden theme-aware backdrop-blur-xl shadow-xl shadow-black/5"
            >
              {/* Card bg */}
              <div className="absolute inset-0 bg-card/60 rounded-2xl theme-aware" />

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.05) 0%, transparent 70%)' }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-icon-bg border border-line text-lg theme-aware">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-bold text-ink tracking-tight theme-aware">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.a
                      key={skill}
                      href={getGoogleSearchUrl(skill)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={pillVariants}
                      data-cursor-hover
                      whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.15, ease: 'easeOut' },
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-semibold text-ink-2 bg-pill-bg border border-line rounded-lg transition-all duration-300 hover:text-amber-500 hover:border-amber-500/40 hover:shadow-[0_0_12px_rgba(245,166,35,0.08)] no-underline theme-aware"
                    >
                      {skill}
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
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
