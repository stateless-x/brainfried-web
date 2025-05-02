"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ExpertiseSection() {
  const expertiseAreas = [
    {
      title: "wedding platforms",
      desc: "beautiful digital solutions to make your special day seamless and memorable",
    },
    {
      title: "custom applications",
      desc: "tailor-made digital tools that solve your unique business challenges",
    },
    {
      title: "booking & scheduling",
      desc: "smart systems that manage appointments and reservations effortlessly",
    },
    {
      title: "online stores",
      desc: "attractive digital shops that showcase your products and boost sales",
    },
    {
      title: "user experiences",
      desc: "thoughtfully designed journeys that delight your customers at every step",
    },
    {
      title: "visual design",
      desc: "eye-catching visuals that communicate your brand's unique story",
    },
  ]

  return (
    <motion.section
      id="solutions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full border-t border-gray-200 py-12 md:py-24 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-mono">build.with.us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">expertise.areas</h2>
            <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed">
              specialized domains where we excel in creating exceptional digital experiences
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((service, i) => (
            <motion.div
              key={`service-${i}`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-black"
            >
              <div>
                <h3 className="font-mono text-lg font-medium">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{service.desc}</p>
              </div>
              <div className="mt-4 h-[1px] w-full bg-gray-100 transition-all duration-300 group-hover:bg-black" />
            </motion.div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-gray-500">have something else in mind? we love unique challenges and new ideas.</p>
          <Button className="mt-4 bg-black text-white hover:bg-gray-800">
            <Link href="#contact">get in touch</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
