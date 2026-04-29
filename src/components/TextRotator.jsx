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
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 40, opacity: 0, rotateX: -40 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -40, opacity: 0, rotateX: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block gradient-text"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
