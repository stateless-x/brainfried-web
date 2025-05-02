"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full border-t border-gray-200 py-12 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-mono">05_contact</div>
          <h2 id="contact-heading" className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
            connect.now
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg">
            Ready to transform your ideas into reality? Let's build something amazing together.
          </p>

          <div className="mt-8 space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:border-black">
              <p className="text-sm mb-4">
                Reach out for a <span className="font-bold">free consultation</span> to discuss your project ideas
              </p>
              <div className="inline-block rounded-lg border border-gray-200 px-6 py-4 font-mono bg-white transition-all duration-300 hover:border-black hover:shadow-md">
                <a
                  href="mailto:askpurin@pm.me"
                  className="text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 inline-block"
                  aria-label="Email us at askpurin@pm.me"
                >
                  askpurin@pm.me
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label="Start a project"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label="View our portfolio"
              >
                <Link href="#work">View Our Portfolio</Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">We typically respond within 24 hours during business days.</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
