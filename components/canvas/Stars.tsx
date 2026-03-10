'use client'

import { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import gsap from 'gsap'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

const StarBackground = (props: any) => {
    const ref: any = useRef()
    const [sphere] = useState(() => {
        const data = random.inSphere(new Float32Array(5001), { radius: 1.2 })
        // Filter out any NaN values just in case
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i])) data[i] = 0;
        }
        return data
    })

    useFrame((state, delta) => {
        if (!ref.current) return
        ref.current.rotation.x -= delta / 15
        ref.current.rotation.y -= delta / 20
    })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return
            const { clientX, clientY } = e
            const x = (clientX / window.innerWidth) - 0.5
            const y = (clientY / window.innerHeight) - 0.5

            gsap.to(ref.current.rotation, {
                x: y * 0.2,
                y: x * 0.2,
                duration: 2,
                ease: 'power2.out'
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
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
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
