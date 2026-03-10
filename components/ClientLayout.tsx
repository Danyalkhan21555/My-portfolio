'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import LoadingScreen from './LoadingScreen'
import CustomCursor from './CustomCursor'
import PremiumBackground from './PremiumBackground'
import SmoothScroll from './SmoothScroll'
import StarsCanvas from './canvas/Stars'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <LoadingScreen />
            <CustomCursor />
            <PremiumBackground />
            <SmoothScroll>
                <StarsCanvas />
                <Navbar />
                <motion.main
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="min-h-screen"
                >
                    {children}
                </motion.main>
                <Footer />
            </SmoothScroll>
        </>
    )
}
