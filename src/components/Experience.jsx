import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'KPMG',
    role: 'Intern',
    location: 'Gurugram',
    duration: 'April — June 2026',
    bullets: [
      'Collaborated with cross-functional teams to deliver data-driven solutions for key business initiatives.',
      'Contributed to the development and optimization of analytical models to support strategic decision-making.',
      'Assisted in preparing comprehensive reports and presentations for senior stakeholders.',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, x: -60, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-coral-500/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-bold text-coral-400 tracking-[0.25em] uppercase mb-4">
            Where I've worked
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight theme-aware">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-ink-3 text-base sm:text-lg max-w-xl mx-auto theme-aware">
            Real-world experience building solutions that matter.
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-amber-500/60 via-coral-500/40 to-transparent" />
          </div>

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="relative pl-16 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[17px] sm:left-[25px] top-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-coral-500 shadow-[0_0_16px_rgba(245,166,35,0.4)]" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl border border-line hover:border-line-hover overflow-hidden transition-all duration-500 hover:shadow-2xl theme-aware"
              >
                <div className="absolute inset-0 bg-card/90 theme-aware" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(245,166,35,0.06) 0%, transparent 60%)' }}
                />

                <div className="relative z-10 p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight theme-aware">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-ink-3 mt-1 theme-aware">{exp.role}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-amber-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-4 theme-aware">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-amber-500/30 via-line to-transparent mb-5 theme-aware" />

                  <ul className="space-y-3.5">
                    {exp.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3 text-sm text-ink-2 leading-relaxed theme-aware"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-amber-400 to-coral-400 shrink-0" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
