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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-500 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-terra-500 tracking-[0.2em] uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-800 tracking-tight">
            Experience
          </h2>
          <p className="mt-4 text-charcoal-500 text-base sm:text-lg max-w-xl">
            Professional experiences that have shaped my expertise and perspective.
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-terra-400/50 via-cream-500 to-transparent" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="relative pl-16 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[18px] sm:left-[26px] top-1 w-3 h-3 rounded-full bg-cream-200 border-2 border-terra-500 ring-4 ring-cream-200" />

              {/* Card */}
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-cream-50/70 border border-cream-500/50 hover:border-cream-600/70 hover:shadow-lg hover:shadow-cream-500/20 transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-terra-50/0 group-hover:bg-terra-50/30 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-charcoal-800 tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-charcoal-500 mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-0.5 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-terra-600">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-400">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-cream-500/60 mb-5" />

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal-500 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-terra-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
