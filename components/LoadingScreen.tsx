'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setLoading(false), 800)
                    return 100
                }
                return prev + 2
            })
        }, 30)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark-900"
                >
                    {/* Animated Background Ring */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute w-[300px] h-[300px] border-t-2 border-r-2 border-primary/20 rounded-full"
                    />

                    <div className="relative flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-6xl font-black text-white mb-4 tracking-tighter"
                        >
                            Danyal<span className="text-primary italic animate-pulse">.</span>
                        </motion.div>

                        <div className="flex items-center gap-4">
                            <div className="w-32 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_#3b82f6]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="text-primary font-black text-xs tabular-nums w-8">{progress}%</span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 text-[10px] font-black uppercase tracking-[0.5em] text-white/30"
                        >
                            Syncing Systems
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
