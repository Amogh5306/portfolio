import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CURSOR_SIZE = 32
const CURSOR_SIZE_HOVER = 56

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    /* Detect hover on interactive elements */
    const interactiveSelectors = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'

    const handleElementEnter = () => setIsHovering(true)
    const handleElementLeave = () => setIsHovering(false)

    const attachListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener('mouseenter', handleElementEnter)
        el.addEventListener('mouseleave', handleElementLeave)
      })
    }

    const detachListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener('mouseenter', handleElementEnter)
        el.removeEventListener('mouseleave', handleElementLeave)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    /* Initial attach + MutationObserver for dynamic elements */
    attachListeners()
    const observer = new MutationObserver(() => {
      detachListeners()
      attachListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      detachListeners()
      observer.disconnect()
    }
  }, [cursorX, cursorY, isVisible])

  /* Hide on touch devices */
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  const size = isHovering ? CURSOR_SIZE_HOVER : CURSOR_SIZE

  return (
    <>
      {/* Outer ring — soft, hollow circle */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-normal"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: size,
            height: size,
            borderWidth: isHovering ? 2 : 1.5,
            backgroundColor: isHovering
              ? 'rgba(212, 104, 58, 0.10)'
              : 'rgba(212, 104, 58, 0)',
          }}
          transition={{
            type: 'spring',
            damping: 22,
            stiffness: 400,
            mass: 0.3,
          }}
          className="rounded-full border-terra-500/50"
          style={{
            opacity: isVisible ? 1 : 0,
            borderStyle: 'solid',
            borderColor: 'rgba(212, 104, 58, 0.45)',
          }}
        />
      </motion.div>

      {/* Inner dot — small, filled accent */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 6 : 5,
            height: isHovering ? 6 : 5,
            opacity: isVisible ? (isHovering ? 0.9 : 0.7) : 0,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 500,
          }}
          className="rounded-full bg-terra-500"
        />
      </motion.div>
    </>
  )
}
