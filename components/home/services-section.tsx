"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full border-t border-gray-200 py-12 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-mono">02_services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">solutions.for.you</h2>
            <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed">
              tailored digital solutions that transform your vision into reality
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group flex flex-col justify-between rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:border-black"
          >
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-gray-200 p-2">
                <div className="font-mono text-xs">01</div>
              </div>
              <h3 className="font-mono text-lg font-medium">consultation</h3>
              <p className="mt-2 text-sm text-gray-500">
                free strategic sessions to understand your needs and explore possibilities for your digital presence
              </p>
              <div className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">free</div>
            </div>
            <div className="mt-4 h-[1px] w-full bg-gray-100 transition-all duration-300 group-hover:bg-black" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group flex flex-col justify-between rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:border-black"
          >
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-gray-200 p-2">
                <div className="font-mono text-xs">02</div>
              </div>
              <h3 className="font-mono text-lg font-medium">design</h3>
              <p className="mt-2 text-sm text-gray-500">
                thoughtful visual design and user experience creation as a standalone service to elevate your brand
              </p>
              <div className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                standalone service
              </div>
            </div>
            <div className="mt-4 h-[1px] w-full bg-gray-100 transition-all duration-300 group-hover:bg-black" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group flex flex-col justify-between rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:border-black"
          >
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-gray-200 p-2">
                <div className="font-mono text-xs">03</div>
              </div>
              <h3 className="font-mono text-lg font-medium">design + app</h3>
              <p className="mt-2 text-sm text-gray-500">
                comprehensive solution combining beautiful design with powerful functionality in a complete digital
                product
              </p>
              <div className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                full package
              </div>
            </div>
            <div className="mt-4 h-[1px] w-full bg-gray-100 transition-all duration-300 group-hover:bg-black" />
          </motion.div>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-gray-500">each solution is tailored to your specific needs and business goals</p>
          <Button className="mt-4 bg-black text-white hover:bg-gray-800">
            <Link href="#contact">discuss your project</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
