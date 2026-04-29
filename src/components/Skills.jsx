import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'MATLAB', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'AI & ML',
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
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'REST APIs'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Typography', 'Visual Design'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      {/* Section dividers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-500 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-terra-500 tracking-[0.2em] uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-800 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-charcoal-500 text-base sm:text-lg max-w-xl">
            A curated set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="group relative p-6 sm:p-8 rounded-2xl bg-cream-50/70 border border-cream-500/50 hover:border-cream-600/70 hover:shadow-lg hover:shadow-cream-500/20 transition-all duration-500"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-terra-50/0 group-hover:bg-terra-50/30 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-full bg-terra-500" />
                  <h3 className="text-lg font-semibold text-charcoal-800 tracking-tight">
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
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-charcoal-600 bg-cream-200/80 border border-cream-500/60 rounded-lg transition-colors duration-300 hover:text-terra-700 hover:border-terra-300 hover:bg-terra-50/50"
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
