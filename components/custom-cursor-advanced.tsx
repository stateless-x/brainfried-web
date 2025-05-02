"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function CustomCursorAdvanced() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; color: string }[]>([])
  const rippleIdRef = useRef(0)

  // Define a set of subtle colors for the ripples
  const rippleColors = [
    "rgba(255, 255, 255, 0.8)", // White
    "rgba(255, 215, 0, 0.6)", // Gold
    "rgba(255, 236, 179, 0.7)", // Light amber
    "rgba(250, 250, 250, 0.75)", // Off-white
    "rgba(255, 248, 220, 0.65)", // Cornsilk
  ]

  useEffect(() => {
    // Check if device is mobile or tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Only set up cursor effects if not on mobile
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          // Apply smooth animation with CSS
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }
      }

      const handleMouseOver = () => setIsHovering(true)
      const handleMouseOut = () => setIsHovering(false)

      const handleMouseDown = (e: MouseEvent) => {
        setIsClicking(true)

        // Select a random color from our palette
        const randomColor = rippleColors[Math.floor(Math.random() * rippleColors.length)]

        // Create a new ripple with color
        const newRipple = {
          id: rippleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          color: randomColor,
        }
        setRipples((prev) => [...prev, newRipple])

        // Remove the ripple after animation completes
        setTimeout(() => {
          setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
        }, 1000)
      }

      const handleMouseUp = () => setIsClicking(false)

      // Add hover detection to all buttons and links
      const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, [role='button']")
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseOver)
        el.addEventListener("mouseleave", handleMouseOut)
      })

      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mouseup", handleMouseUp)

      // Hide default cursor
      document.body.style.cursor = "none"

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mousedown", handleMouseDown)
        window.removeEventListener("mouseup", handleMouseUp)
        window.removeEventListener("resize", checkMobile)

        // Restore default cursor
        document.body.style.cursor = "auto"

        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseOver)
          el.removeEventListener("mouseleave", handleMouseOut)
        })
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-50"
        style={{
          left: -15,
          top: -15,
        }}
        animate={{
          width: isHovering ? 30 : 15,
          height: isHovering ? 30 : 15,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
      >
        {isHovering && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: 40, height: 40, opacity: 0.5 }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>

      {/* Ripple effects - multiple rings with color variations */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <div key={ripple.id} className="pointer-events-none fixed z-40" style={{ left: ripple.x, top: ripple.y }}>
            {/* First ring - fast */}
            <motion.div
              className="absolute rounded-full"
              style={{
                translateX: "-50%",
                translateY: "-50%",
                borderColor: ripple.color,
                boxShadow: `0 0 10px ${ripple.color.replace(")", ", 0.3)")}`,
              }}
              initial={{ width: 0, height: 0, opacity: 0.8, borderWidth: 1 }}
              animate={{
                width: 120,
                height: 120,
                opacity: 0,
                borderWidth: 0.5,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />

            {/* Second ring - medium with gradient */}
            <motion.div
              className="absolute rounded-full"
              style={{
                translateX: "-50%",
                translateY: "-50%",
                background: `radial-gradient(circle, transparent 60%, ${ripple.color} 100%)`,
                border: `1px solid ${ripple.color}`,
              }}
              initial={{ width: 0, height: 0, opacity: 0.6 }}
              animate={{
                width: 80,
                height: 80,
                opacity: 0,
                borderWidth: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1,
              }}
            />

            {/* Third ring - slow with different color */}
            <motion.div
              className="absolute rounded-full"
              style={{
                translateX: "-50%",
                translateY: "-50%",
                borderColor: "rgba(255, 215, 0, 0.5)", // Gold tint for inner ring
                background: `radial-gradient(circle, ${ripple.color.replace(")", ", 0.2)")} 0%, transparent 70%)`,
              }}
              initial={{ width: 0, height: 0, opacity: 0.4, borderWidth: 1.5 }}
              animate={{
                width: 40,
                height: 40,
                opacity: 0,
                borderWidth: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.2,
              }}
            />
          </div>
        ))}
      </AnimatePresence>
    </>
  )
}
