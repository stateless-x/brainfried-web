"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export function FibonacciAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Golden ratio
  const phi = 1.618033988749895

  // Generate Fibonacci sequence
  const generateFibonacciSequence = (count: number): number[] => {
    const sequence = [1, 1]
    for (let i = 2; i < count; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence
  }

  const fibSequence = generateFibonacciSequence(10)

  // Calculate points for golden spiral
  const generateSpiralPoints = (): string => {
    let path = "M 0 0 "
    let x = 0
    let y = 0
    let size = 5

    for (let i = 0; i < 20; i++) {
      size = size * phi
      const angle = (i * Math.PI) / 2
      x += Math.cos(angle) * size
      y += Math.sin(angle) * size
      path += `Q ${x * 0.9} ${y * 0.5} ${x} ${y} `
    }

    return path
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-full border border-gray-200 bg-white"
    >
      {/* Background with subtle grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5" />
          </pattern>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="url(#smallGrid)" />
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="black" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Main rotating container */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ transformOrigin: "center" }}
      >
        {/* Golden spiral */}
        <svg className="absolute inset-0 w-full h-full" viewBox="-200 -200 400 400" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0 0 Q 5 0 5 -5 Q 5 -10 10 -10 Q 15 -10 15 -5 Q 15 0 10 0 Q 5 0 5 5 Q 5 10 0 10 Q -5 10 -5 5 Q -5 0 -10 0 Q -15 0 -15 -5 Q -15 -10 -10 -10 Q -5 -10 -5 -5 Q -5 0 0 0"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
            className="opacity-40"
            animate={{
              scale: [1, 10],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.path
            d={generateSpiralPoints()}
            stroke="black"
            strokeWidth="0.5"
            fill="none"
            className="opacity-30"
            animate={{
              strokeDashoffset: [0, 1000],
            }}
            style={{
              strokeDasharray: 1000,
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </svg>

        {/* Fibonacci squares */}
        <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          {fibSequence.map((size, i) => {
            const normalizedSize = (size / fibSequence[fibSequence.length - 1]) * 80
            const x = i % 2 === 0 ? -normalizedSize / 2 : 0
            const y = i % 2 === 1 ? -normalizedSize / 2 : 0

            return (
              <motion.rect
                key={`fib-square-${i}`}
                x={x}
                y={y}
                width={normalizedSize}
                height={normalizedSize}
                stroke="black"
                strokeWidth="0.3"
                fill="none"
                className="opacity-30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            )
          })}
        </svg>

        {/* Golden ratio circles */}
        <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          {[1, 2, 3, 5, 8, 13, 21, 34, 55].map((radius, i) => {
            const normalizedRadius = (radius / 55) * 90

            return (
              <motion.circle
                key={`fib-circle-${i}`}
                cx="0"
                cy="0"
                r={normalizedRadius}
                stroke="black"
                strokeWidth="0.3"
                fill="none"
                className="opacity-20"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            )
          })}
        </svg>

        {/* Golden angle dots */}
        <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 100 }).map((_, i) => {
            // Golden angle is approximately 137.5 degrees
            const angle = i * 137.5 * (Math.PI / 180)
            // Distance increases with square root to create more natural spacing
            const distance = Math.sqrt(i) * 5
            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance
            const size = Math.max(0.5, 3 - (i / 100) * 2.5)

            return (
              <motion.circle
                key={`golden-dot-${i}`}
                cx={x}
                cy={y}
                r={size}
                fill="black"
                className="opacity-40"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.01,
                }}
              />
            )
          })}
        </svg>
      </motion.div>

      {/* Counter-rotating phi symbol */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30,70 L70,70 M50,30 L50,70 M30,50 C30,40 40,30 50,30 C60,30 70,40 70,50"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Fibonacci numbers */}
      {fibSequence.slice(0, 8).map((num, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 40 + i * 5
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={`fib-num-${i}`}
            className="absolute font-mono text-xs opacity-20"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {num}
          </motion.div>
        )
      })}
    </div>
  )
}
