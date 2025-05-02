"use client"

import { motion } from "framer-motion"

export function FibonacciLinesAnimation() {
  // Golden ratio
  const phi = 1.618033988749895

  // Generate points for a simple golden spiral
  const generateSpiralPoints = (): string => {
    let path = "M 0 0 "
    let x = 0
    let y = 0
    let size = 3

    for (let i = 0; i < 15; i++) {
      size = size * phi
      const angle = (i * Math.PI) / 2
      x += Math.cos(angle) * size
      y += Math.sin(angle) * size
      path += `L ${x} ${y} `
    }

    return path
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-full border border-gray-200 bg-white">
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
        <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <motion.path d={generateSpiralPoints()} stroke="black" strokeWidth="0.5" fill="none" className="opacity-40" />

          {/* Mirrored spiral */}
          <motion.path
            d={generateSpiralPoints()}
            stroke="black"
            strokeWidth="0.5"
            fill="none"
            className="opacity-40"
            style={{ transform: "scale(-1, 1)" }}
          />

          {/* Vertical mirrored spiral */}
          <motion.path
            d={generateSpiralPoints()}
            stroke="black"
            strokeWidth="0.5"
            fill="none"
            className="opacity-40"
            style={{ transform: "scale(1, -1)" }}
          />

          {/* Diagonal mirrored spiral */}
          <motion.path
            d={generateSpiralPoints()}
            stroke="black"
            strokeWidth="0.5"
            fill="none"
            className="opacity-40"
            style={{ transform: "scale(-1, -1)" }}
          />

          {/* Concentric circles based on Fibonacci sequence */}
          {[1, 2, 3, 5, 8, 13, 21, 34, 55, 89].map((radius, i) => {
            const normalizedRadius = (radius / 89) * 90

            return (
              <circle
                key={`circle-${i}`}
                cx="0"
                cy="0"
                r={normalizedRadius}
                stroke="black"
                strokeWidth="0.3"
                fill="none"
                className="opacity-20"
              />
            )
          })}

          {/* Golden ratio lines */}
          <line x1="-90" y1="0" x2="90" y2="0" stroke="black" strokeWidth="0.3" className="opacity-15" />
          <line x1="0" y1="-90" x2="0" y2="90" stroke="black" strokeWidth="0.3" className="opacity-15" />

          {/* Diagonal lines */}
          <line x1="-64" y1="-64" x2="64" y2="64" stroke="black" strokeWidth="0.3" className="opacity-15" />
          <line x1="-64" y1="64" x2="64" y2="-64" stroke="black" strokeWidth="0.3" className="opacity-15" />
        </svg>
      </motion.div>

      {/* Counter-rotating spiral */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 90,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ transformOrigin: "center" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Additional golden spiral with different rotation */}
          <motion.path
            d={generateSpiralPoints()}
            stroke="black"
            strokeWidth="0.3"
            fill="none"
            className="opacity-20"
            style={{ transform: "rotate(45deg)" }}
          />

          <motion.path
            d={generateSpiralPoints()}
            stroke="black"
            strokeWidth="0.3"
            fill="none"
            className="opacity-20"
            style={{ transform: "rotate(135deg)" }}
          />

          <motion.path
            d={generateSpiralPoints()}
            stroke="black"
            strokeWidth="0.3"
            fill="none"
            className="opacity-20"
            style={{ transform: "rotate(225deg)" }}
          />

          <motion.path
            d={generateSpiralPoints()}
            stroke="black"
            strokeWidth="0.3"
            fill="none"
            className="opacity-20"
            style={{ transform: "rotate(315deg)" }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
