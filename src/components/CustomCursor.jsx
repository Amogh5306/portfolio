import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CURSOR_SIZE = 36
const CURSOR_SIZE_HOVER = 64

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 350, mass: 0.4 }
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

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  const size = isHovering ? CURSOR_SIZE_HOVER : CURSOR_SIZE

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: size,
            height: size,
            borderWidth: isHovering ? 2.5 : 2,
            backgroundColor: isHovering
              ? 'rgba(245, 166, 35, 0.15)'
              : 'rgba(245, 166, 35, 0)',
          }}
          transition={{ type: 'spring', damping: 22, stiffness: 400, mass: 0.3 }}
          className="rounded-full"
          style={{
            opacity: isVisible ? 1 : 0,
            borderStyle: 'solid',
            borderColor: isHovering
              ? 'rgba(245, 166, 35, 0.85)'
              : 'rgba(245, 166, 35, 0.65)',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: isHovering ? 10 : 8,
            height: isHovering ? 10 : 8,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 500 }}
          className="rounded-full"
          style={{ background: 'linear-gradient(135deg, #f5a623, #e8604c)' }}
        />
      </motion.div>
    </>
  )
}
