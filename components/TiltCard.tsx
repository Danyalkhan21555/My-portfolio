'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from 'framer-motion'

interface TiltCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
}

/**
 * TiltCard: 3D tilt on mouse hover.
 * Automatically disabled on touch devices for performance.
 */
const TiltCard = ({ children, className, ...props }: TiltCardProps) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none) and (pointer: coarse)').matches)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // On touch: render plain div, no overhead
  if (isTouchDevice) {
    return (
      <div className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className={className}
      {...props}
    >
      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

export default TiltCard
