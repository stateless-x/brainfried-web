"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function InteractiveAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  // Fibonacci sequence for sizes (simplified)
  const fibSizes = [8, 13, 21, 34, 55, 89]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      // Calculate mouse position relative to container (0-1 range)
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      setMousePosition({ x, y })
    }

    // Add touch support
    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.touches[0].clientX - rect.left) / rect.width
      const y = (e.touches[0].clientY - rect.top) / rect.height

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden rounded-full border border-gray-200">
      {/* Background circle that follows mouse with delay */}
      <motion.div
        className="absolute rounded-full bg-black/5"
        animate={{
          x: mousePosition.x * 100 - 50 + "%",
          y: mousePosition.y * 100 - 50 + "%",
          scale: 0.8 + mousePosition.x * 0.4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
        style={{
          width: "70%",
          height: "70%",
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Fibonacci circles */}
      {fibSizes.map((size, i) => {
        // Calculate position based on mouse and fibonacci sequence
        // This creates a cascading effect where each circle follows the previous one
        const delay = i * 0.1
        const springStiffness = 100 - i * 10

        return (
          <motion.div
            key={`fib-${i}`}
            className="absolute rounded-full border border-black"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              opacity: 0.7 - i * 0.1,
            }}
            animate={{
              x: (mousePosition.x * 2 - 1) * (100 - i * 15),
              y: (mousePosition.y * 2 - 1) * (100 - i * 15),
              scale: 1 + Math.sin(Date.now() * 0.001 + i) * 0.1,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: springStiffness,
              delay: delay,
            }}
          />
        )
      })}

      {/* Golden ratio line */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[1px] w-[80%] -translate-x-1/2 -translate-y-1/2 bg-black opacity-20"
        animate={{
          rotate: mousePosition.x * 180,
          scaleX: 0.8 + mousePosition.y * 0.4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[80%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-black opacity-20"
        animate={{
          rotate: mousePosition.y * 180,
          scaleY: 0.8 + mousePosition.x * 0.4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Interactive dots that move away from mouse */}
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const radius = 100
        const baseX = Math.cos(angle) * radius
        const baseY = Math.sin(angle) * radius

        // Calculate repulsion from mouse
        const dx = baseX / radius - (mousePosition.x * 2 - 1)
        const dy = baseY / radius - (mousePosition.y * 2 - 1)
        const distance = Math.sqrt(dx * dx + dy * dy) || 0.001
        const repulsionForce = 50 / distance

        const repulsionX = (dx / distance) * repulsionForce
        const repulsionY = (dy / distance) * repulsionForce

        return (
          <motion.div
            key={`dot-${i}`}
            className="absolute h-2 w-2 rounded-full bg-black"
            style={{
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              x: baseX + repulsionX,
              y: baseY + repulsionY,
              opacity: 0.3 + distance * 0.3,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
          />
        )
      })}
    </div>
  )
}
