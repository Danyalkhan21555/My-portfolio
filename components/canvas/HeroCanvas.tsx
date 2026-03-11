'use client'

import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, MeshDistortMaterial, Float } from '@react-three/drei'

interface ShapeConfig {
  segments: number
  distort: number
  speed: number
  scale: number
}

function getShapeConfig(): ShapeConfig {
  if (typeof window === 'undefined') {
    return { segments: 64, distort: 0.4, speed: 2, scale: 2.5 }
  }
  const isMobile = window.innerWidth < 768
  const isTablet = window.innerWidth < 1024
  if (isMobile) return { segments: 32, distort: 0.3, speed: 1, scale: 2 }
  if (isTablet) return { segments: 48, distort: 0.35, speed: 1.5, scale: 2.2 }
  return { segments: 100, distort: 0.4, speed: 2, scale: 2.5 }
}

const Shape = ({ isMobile }: { isMobile: boolean }) => {
  const meshRef = useRef<any>()
  const config = getShapeConfig()

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(time) * 0.1

    // Skip mouse reaction on mobile — expensive & unnecessary
    if (!isMobile) {
      const { x, y } = state.mouse
      meshRef.current.rotation.x = -y * 0.3
      meshRef.current.rotation.y = x * 0.3
    }
  })

  return (
    <Float speed={isMobile ? 2 : 4} rotationIntensity={isMobile ? 0.5 : 1.5} floatIntensity={isMobile ? 1 : 2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={config.scale}>
        <sphereGeometry args={[1, config.segments, config.segments]} />
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={config.distort}
          speed={config.speed}
          roughness={0.2}
          metalness={isMobile ? 0.5 : 0.8}
          emissive="#1e3a8a"
          emissiveIntensity={isMobile ? 0.3 : 0.5}
        />
      </mesh>
    </Float>
  )
}

const HeroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [dpr, setDpr] = useState<[number, number]>([1, 2])

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setDpr(mobile ? [1, 1] : [1, 2])
    }
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <Canvas
      frameloop="always"
      dpr={dpr}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 8],
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={isMobile ? 0.6 : 0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={isMobile ? 1 : 2}
        />
        {/* Skip costly point light on mobile */}
        {!isMobile && (
          <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={2} />
        )}
        <Shape isMobile={isMobile} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={isMobile ? 0.3 : 0.5}
          enableDamping={!isMobile}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default HeroCanvas
