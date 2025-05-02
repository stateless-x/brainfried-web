"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function CustomCursorSimple() {
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
      {/* Main cursor - highly visible version */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-50"
        style={{
          left: -12,
          top: -12,
        }}
        animate={{
          width: isHovering ? 30 : 24,
          height: isHovering ? 30 : 24,
          borderRadius: "50%",
          backgroundColor: isHovering ? "rgba(255, 215, 0, 0.8)" : "rgba(0, 0, 0, 0.7)",
          border: "2px solid white",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
      />

      {/* Ripple effects - simplified for better visibility */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="pointer-events-none fixed z-40 rounded-full border-2 border-black"
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: "-50%",
              translateY: "-50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            initial={{ width: 0, height: 0, opacity: 0.7 }}
            animate={{
              width: 100,
              height: 100,
              opacity: 0,
              borderWidth: 1,
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
