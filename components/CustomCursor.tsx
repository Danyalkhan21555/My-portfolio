'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const mouseX = useMotionValue(-100)
    const mouseY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 400 }
    const mainX = useSpring(mouseX, springConfig)
    const mainY = useSpring(mouseY, springConfig)

    const ringConfig = { damping: 40, stiffness: 200 }
    const ringX = useSpring(mouseX, ringConfig)
    const ringY = useSpring(mouseY, ringConfig)

    useEffect(() => {
        setMounted(true)
        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY, target } = e
            
            const targetElement = target as HTMLElement
            const magneticElement = targetElement.closest('[data-magnetic]') as HTMLElement
            
            if (magneticElement) {
                const rect = magneticElement.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                
                // Strength of magnetism
                const dx = clientX - centerX
                const dy = clientY - centerY
                
                mouseX.set(centerX + dx * 0.2)
                mouseY.set(centerY + dy * 0.2)
                setIsHovering(true)
            } else {
                mouseX.set(clientX)
                mouseY.set(clientY)
                
                setIsHovering(
                    targetElement.closest('button') !== null ||
                    targetElement.closest('a') !== null ||
                    targetElement.style.cursor === 'pointer'
                )
            }
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [mouseX, mouseY])

    if (!mounted) return null

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
                style={{
                    x: mainX,
                    y: mainY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 0 : 1,
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0)",
                    borderColor: isHovering ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    )
}
