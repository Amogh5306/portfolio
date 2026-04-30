import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  'Frontend Developer',
  'AI/ML Engineer',
  'UI/UX Designer',
  'Problem Solver',
]

export default function TextRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-grid h-[1.15em] min-w-[15ch] overflow-hidden text-left align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 34, opacity: 0, rotateX: -35 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -34, opacity: 0, rotateX: 35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 inline-block whitespace-nowrap gradient-text"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
