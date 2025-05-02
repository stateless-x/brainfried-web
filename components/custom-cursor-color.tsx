"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function CustomCursorColor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; colorScheme: number }[]>([])
  const rippleIdRef = useRef(0)

  // Define color schemes for different ripple effects
  const colorSchemes = [
    // Gold theme
    {
      outer: {
        border: "rgba(255, 215, 0, 0.8)",
        shadow: "0 0 15px rgba(255, 215, 0, 0.4)",
        background: "radial-gradient(circle, transparent 70%, rgba(255, 215, 0, 0.5) 100%)",
      },
      middle: {
        border: "rgba(255, 235, 122, 0.8)",
        shadow: "0 0 10px rgba(255, 235, 122, 0.4)",
        background: "radial-gradient(circle, transparent 60%, rgba(255, 235, 122, 0.4) 100%)",
      },
      inner: {
        border: "rgba(255, 248, 220, 0.8)",
        shadow: "0 0 5px rgba(255, 248, 220, 0.5)",
        background: "radial-gradient(circle, rgba(255, 248, 220, 0.4) 0%, transparent 70%)",
      },
    },
    // Black theme
    {
      outer: {
        border: "rgba(0, 0, 0, 0.8)",
        shadow: "0 0 15px rgba(0, 0, 0, 0.4)",
        background: "radial-gradient(circle, transparent 70%, rgba(0, 0, 0, 0.5) 100%)",
      },
      middle: {
        border: "rgba(40, 40, 40, 0.8)",
        shadow: "0 0 10px rgba(40, 40, 40, 0.4)",
        background: "radial-gradient(circle, transparent 60%, rgba(40, 40, 40, 0.4) 100%)",
      },
      inner: {
        border: "rgba(80, 80, 80, 0.8)",
        shadow: "0 0 5px rgba(80, 80, 80, 0.5)",
        background: "radial-gradient(circle, rgba(80, 80, 80, 0.4) 0%, transparent 70%)",
      },
    },
    // Amber theme
    {
      outer: {
        border: "rgba(255, 191, 0, 0.8)",
        shadow: "0 0 15px rgba(255, 191, 0, 0.4)",
        background: "radial-gradient(circle, transparent 70%, rgba(255, 191, 0, 0.5) 100%)",
      },
      middle: {
        border: "rgba(255, 213, 79, 0.8)",
        shadow: "0 0 10px rgba(255, 213, 79, 0.4)",
        background: "radial-gradient(circle, transparent 60%, rgba(255, 213, 79, 0.4) 100%)",
      },
      inner: {
        border: "rgba(255, 236, 179, 0.8)",
        shadow: "0 0 5px rgba(255, 236, 179, 0.5)",
        background: "radial-gradient(circle, rgba(255, 236, 179, 0.4) 0%, transparent 70%)",
      },
    },
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

        // Select a random color scheme
        const schemeIndex = Math.floor(Math.random() * colorSchemes.length)

        // Create a new ripple with color scheme
        const newRipple = {
          id: rippleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          colorScheme: schemeIndex,
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
          left: -18,
          top: -18,
        }}
        animate={{
          width: isHovering ? 36 : 18,
          height: isHovering ? 36 : 18,
          borderRadius: "50%",
          backgroundColor: isHovering ? "rgba(255, 215, 0, 0.9)" : "rgba(0, 0, 0, 0.7)",
          border: "2px solid white",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
      >
        {isHovering && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              border: "1.5px solid white",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            }}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: 48, height: 48, opacity: 0.7 }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>

      {/* Ripple effects - multiple rings with color variations */}
      <AnimatePresence>
        {ripples.map((ripple) => {
          const scheme = colorSchemes[ripple.colorScheme]

          return (
            <div key={ripple.id} className="pointer-events-none fixed z-40" style={{ left: ripple.x, top: ripple.y }}>
              {/* First ring - fast */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                  border: `1.5px solid ${scheme.outer.border}`,
                  boxShadow: scheme.outer.shadow,
                  background: scheme.outer.background,
                }}
                initial={{ width: 0, height: 0, opacity: 0.8 }}
                animate={{
                  width: 120,
                  height: 120,
                  opacity: 0,
                  borderWidth: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />

              {/* Second ring - medium */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                  border: `1px solid ${scheme.middle.border}`,
                  boxShadow: scheme.middle.shadow,
                  background: scheme.middle.background,
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

              {/* Third ring - slow */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                  border: `1.5px solid ${scheme.inner.border}`,
                  boxShadow: scheme.inner.shadow,
                  background: scheme.inner.background,
                }}
                initial={{ width: 0, height: 0, opacity: 0.4 }}
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
          )
        })}
      </AnimatePresence>
    </>
  )
}
