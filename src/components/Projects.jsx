import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Keyboard Price Tracker',
    description: 'A full-stack, automated web scraping pipeline and real-time dashboard built to track the pricing volatility of the Royal Kludge RK M75 keyboard. Features a robust Python scraping script, a Flask REST API on Render, and a premium dark-mode Chart.js frontend on Vercel.',
    tags: ['Python', 'Flask', 'Chart.js', 'Web Scraping', 'Render', 'Vercel'],
    github: 'https://github.com/Amogh5306/keyboard-price-tracker',
    live: 'https://amogh-keyboard-tracker.vercel.app/'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-coral-500 rounded-full" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative backdrop-blur-md bg-glass border border-line rounded-2xl p-8 hover:bg-white/[0.03] dark:hover:bg-black/[0.03] transition-colors theme-aware shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-ink mb-3">{project.title}</h3>
              <p className="text-ink-3 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-line text-ink rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-amber-500 transition-colors"
                  data-cursor-hover
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  Source Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-coral-500 transition-colors"
                  data-cursor-hover
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
