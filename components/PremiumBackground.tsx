'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PremiumBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="premium-bg">
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="glow-circle w-[500px] h-[500px] -top-48 -left-48"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="glow-circle w-[600px] h-[600px] bottom-0 right-0 bg-accent-purple"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="glow-circle w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-cyan"
            />
        </div>
    )
}
