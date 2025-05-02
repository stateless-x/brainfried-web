"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"

export function GoldenSignalAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotControls = useAnimationControls()

  // Generate points for a fibonacci spiral
  const generateSpiralPath = (): string => {
    let path = "M 0 0 "
    let x = 0
    let y = 0
    let size = 2
    const phi = 1.618033988749895

    for (let i = 0; i < 15; i++) {
      size = size * phi
      const angle = (i * Math.PI) / 2
      x += Math.cos(angle) * size
      y += Math.sin(angle) * size
      path += `L ${x} ${y} `
    }

    return path
  }

  // Calculate dot position along the spiral
  useEffect(() => {
    const animateDot = async () => {
      await dotControls.start({
        offsetDistance: "100%",
        transition: {
          duration: 8,
          ease: "linear",
        },
      })

      dotControls.set({ offsetDistance: "0%" })
      animateDot()
    }

    animateDot()
  }, [dotControls])

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-full border border-gray-200 bg-white"
    >
      {/* Central gold circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-400 opacity-80" />

      {/* Radiating lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const x = Math.cos(angle) * 100
          const y = Math.sin(angle) * 100

          return (
            <motion.line
              key={`line-${i}`}
              x1="0"
              y1="0"
              x2={x}
              y2={y}
              stroke="black"
              strokeWidth="0.3"
              className="opacity-20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          )
        })}
      </svg>

      {/* Concentric circles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
        {[1, 2, 3, 5, 8, 13, 21, 34, 55, 89].map((radius, i) => {
          const normalizedRadius = (radius / 89) * 90

          return (
            <motion.circle
              key={`circle-${i}`}
              cx="0"
              cy="0"
              r={normalizedRadius}
              stroke="black"
              strokeWidth="0.2"
              fill="none"
              className="opacity-15"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          )
        })}
      </svg>

      {/* Rotating spiral */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8, // Full rotation every 8 seconds
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ transformOrigin: "center" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d={generateSpiralPath()}
            stroke="black"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            fill="none"
            className="opacity-40"
          />
        </svg>
      </motion.div>

      {/* Gold dot following the spiral */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-amber-400"
        style={{
          offsetPath: `path("${generateSpiralPath()}")`,
          offsetDistance: "0%",
          offsetRotate: "0deg",
        }}
        animate={dotControls}
      />
    </div>
  )
}
