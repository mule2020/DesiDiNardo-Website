import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const AnimatedCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    setIsVisible(true)

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const onEnterInteractive = () => setIsHovering(true)
    const onLeaveInteractive = () => setIsHovering(false)

    window.addEventListener('mousemove', onMove)

    const interactives = document.querySelectorAll('a, button, [data-cursor="hover"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [])

  useEffect(() => {
    let raf: number
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.1,
        y: prev.y + (pos.y - prev.y) * 0.1,
      }))
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [pos])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-multiply"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      >
        <motion.div
          className="rounded-full bg-gold-500"
          animate={{ width: isHovering ? 8 : 6, height: isHovering ? 8 : 6, opacity: isHovering ? 0.9 : 0.7 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-multiply"
        animate={{ x: trail.x - 18, y: trail.y - 18 }}
        transition={{ type: "tween", duration: 0 }}
      >
        <motion.div
          className="rounded-full border border-forest-600"
          animate={{
            width:   isHovering ? 48 : 36,
            height:  isHovering ? 48 : 36,
            opacity: isHovering ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  )
}
