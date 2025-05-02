"use client"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { GoldenSignalAnimation } from "@/components/golden-signal-animation"

export function HeroSection() {
  const buttonRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(buttonRef, { once: false })

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            digital <br />
            <span className="text-gray-400">makers</span> <br />
            collective
          </h1>
          <p className="max-w-[400px] text-gray-500 md:text-xl/relaxed">we build things that matter.</p>
          <div ref={buttonRef} className="flex flex-col gap-2 min-[400px]:flex-row">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="bg-black text-white hover:bg-gray-800 relative z-10 overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  explore
                  <motion.span
                    className="ml-2 flex items-center"
                    animate={isInView ? { x: [0, 5, 0] } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </span>
                <motion.span
                  className="absolute inset-0 bg-amber-400 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              <motion.div
                className="absolute -bottom-1 -right-1 w-3 h-3"
                animate={
                  isInView
                    ? {
                        rotate: [0, 360],
                        opacity: [0.6, 1, 0.6],
                      }
                    : {}
                }
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
                }}
              >
                <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 5 5 L 9 5 A 4 4 0 0 0 5 1 L 5 5 Z" fill="black" transform="rotate(0, 5, 5)" />
                  <path d="M 5 5 L 5 9 A 4 4 0 0 0 9 5 L 5 5 Z" fill="black" transform="rotate(90, 5, 5)" />
                  <path d="M 5 5 L 1 5 A 4 4 0 0 0 5 9 L 5 5 Z" fill="black" transform="rotate(180, 5, 5)" />
                  <path d="M 5 5 L 5 1 A 4 4 0 0 0 1 5 L 5 5 Z" fill="black" transform="rotate(270, 5, 5)" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
            <GoldenSignalAnimation />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
