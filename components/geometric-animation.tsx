"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export function GeometricAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Animation variants for different shapes
  const rotatingSquare = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  const pulsingCircle = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const floatingTriangle = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 15, 0],
      transition: {
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const movingLines = {
    animate: {
      pathLength: [0, 1, 0],
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-full border border-gray-200 bg-white"
    >
      {/* Background grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="black" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Rotating square */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[200px] h-[200px] border border-black opacity-20"
        style={{ translateX: "-50%", translateY: "-50%" }}
        variants={rotatingSquare}
        animate="animate"
      />

      {/* Pulsing circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[150px] h-[150px] rounded-full border border-black opacity-30"
        style={{ translateX: "-50%", translateY: "-50%" }}
        variants={pulsingCircle}
        animate="animate"
      />

      {/* Floating triangle */}
      <motion.div
        className="absolute top-1/2 left-1/2 opacity-40"
        style={{ translateX: "-50%", translateY: "-50%" }}
        variants={floatingTriangle}
        animate="animate"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L100 100H0L50 0Z" stroke="black" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      {/* Moving lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 50,50 Q 175,25 200,200 Q 225,375 350,350"
          stroke="black"
          strokeWidth="1"
          fill="none"
          variants={movingLines}
          animate="animate"
        />
        <motion.path
          d="M 350,50 Q 225,75 200,200 Q 175,325 50,350"
          stroke="black"
          strokeWidth="1"
          fill="none"
          variants={movingLines}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
      </svg>

      {/* Golden ratio spiral */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M200,200 Q 200,100 300,100 Q 300,0 400,0 M200,200 Q 200,300 100,300 Q 100,400 0,400 M200,200 Q 300,200 300,300 Q 400,300 400,400 M200,200 Q 100,200 100,100 Q 0,100 0,0"
          stroke="black"
          strokeWidth="0.5"
          fill="none"
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
          style={{ transformOrigin: "center" }}
        />
      </svg>

      {/* Fibonacci dots */}
      {[1, 2, 3, 5, 8, 13, 21].map((size, i) => (
        <motion.div
          key={`fib-${i}`}
          className="absolute rounded-full bg-black"
          style={{
            width: `${size * 2}px`,
            height: `${size * 2}px`,
            left: `${50 + Math.cos((i * Math.PI) / 3) * 100}%`,
            top: `${50 + Math.sin((i * Math.PI) / 3) * 100}%`,
            translateX: "-50%",
            translateY: "-50%",
            opacity: 0.2,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            transition: {
              duration: 3 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            },
          }}
        />
      ))}
    </div>
  )
}
