'use client'

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, MeshDistortMaterial, Float, Environment, ContactShadows } from '@react-three/drei'

const Shape = () => {
    const meshRef = useRef<any>()

    return (
        <Float speed={4} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef} position={[0, 0, 0]} scale={2.5}>
                <sphereGeometry args={[1, 100, 100]} />
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.5}
                    speed={2.5}
                    roughness={0.1}
                    metalness={0.9}
                    emissive="#1e3a8a"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    )
}

const HeroCanvas = () => {
    return (
        <Canvas
            frameloop="always"
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 0, 8],
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={2} />
                <Environment preset="city" />
                <Shape />
                <ContactShadows
                    position={[0, -3.5, 0]}
                    opacity={0.4}
                    scale={20}
                    blur={2}
                    far={4.5}
                />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default HeroCanvas
