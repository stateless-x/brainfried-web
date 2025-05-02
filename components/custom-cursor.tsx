"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const rippleIdRef = useRef(0)

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
        // Create a new ripple
        const newRipple = {
          id: rippleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
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
        className="pointer-events-none fixed z-50 mix-blend-difference"
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

      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="pointer-events-none fixed z-40 rounded-full border border-white mix-blend-difference"
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ width: 0, height: 0, opacity: 0.7 }}
            animate={{
              width: 100,
              height: 100,
              opacity: 0,
              borderWidth: 0.5,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  )
}
