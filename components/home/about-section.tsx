"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full border-t border-gray-200 py-12 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-mono">01_about</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">collective.mind</h2>
            <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed">
              a collection of builders, thinkers, and digital architects crafting experiences at the intersection of
              code and culture.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
