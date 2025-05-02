"use client"

import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function WorkSection() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full border-t border-gray-200 py-12 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-mono">03_work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">past.projects</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-10 py-12">
          {/* Only show the flagship project */}
          <Link href="https://braincase.app" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative overflow-hidden rounded-lg border border-gray-200 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:to-black/5 transition-all duration-500" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-mono text-sm text-gray-500">flagship_</div>
                  <h3 className="text-2xl font-bold">braincase</h3>
                  <p className="mt-2 text-gray-500">
                    an educational AI platform empowering teachers to create higher quality learning materials and enhance
                    the teaching experience.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 group-hover:border-black transition-all duration-300">
                    <Plus className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
          {/* See All Projects button */}
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className="group border-black hover:bg-black hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="/projects" className="flex items-center gap-2">
                See All Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
