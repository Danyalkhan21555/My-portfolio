'use client'

import { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

/**
 * Adaptive star count based on device capability.
 * Mobile gets fewer particles to maintain 60fps.
 */
function getStarCount(): number {
  if (typeof window === 'undefined') return 2000
  const isMobile = window.innerWidth < 768
  const isLowEnd = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4
  if (isMobile || isLowEnd) return 1200
  return 3500
}

const StarBackground = (props: any) => {
  const ref = useRef<any>()
  const [sphere] = useState(() => {
    const count = getStarCount()
    const data = random.inSphere(new Float32Array(count * 3), { radius: 1.2 })
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) data[i] = 0
    }
    return data
  })

  // Always rotate gently
  useFrame((_state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x -= delta / 15
    ref.current.rotation.y -= delta / 20
  })

  // Mouse tracking — desktop only
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    if (isTouchDevice) return

    let ticking = false
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (!ref.current) { ticking = false; return }
        const x = (e.clientX / window.innerWidth) - 0.5
        const y = (e.clientY / window.innerHeight) - 0.5
        ref.current.rotation.x = y * 0.15
        ref.current.rotation.y = x * 0.15
        ticking = false
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  const [dpr, setDpr] = useState<[number, number]>([1, 1])

  useEffect(() => {
    // Cap DPR on mobile for performance
    const isMobile = window.innerWidth < 768
    setDpr(isMobile ? [1, 1] : [1, 1.5])
  }, [])

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={dpr}
        gl={{
          antialias: false, // Disabled for perf — not needed at star scale
          alpha: true,
          powerPreference: 'high-performance',
        }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
