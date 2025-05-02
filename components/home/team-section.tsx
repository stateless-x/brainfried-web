"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Askpurin",
      role: "Team Lead",
      bio: "Architect of elegant code solutions with a passion for creating seamless user experiences. Led a 40% performance improvement for our flagship product.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        github: "https://github.com/askpurin",
        twitter: "https://twitter.com/askpurin",
        linkedin: "https://linkedin.com/in/askpurin",
      },
    },
    {
      name: "iiihsy",
      role: "Design Lead",
      bio: "Visionary designer transforming concepts into beautiful interfaces that tell compelling stories. Created award-winning UI for the Ye platform.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        github: "https://github.com/iiihsy",
        twitter: "https://twitter.com/iiihsy",
        linkedin: "https://linkedin.com/in/iiihsy",
      },
    },
    {
      name: "Kira505",
      role: "Core Developer",
      bio: "Problem-solving engineer with expertise in building robust systems that scale. Optimized Gold Shopping's checkout flow, increasing conversions by 25%.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        github: "https://github.com/kira505",
        twitter: "https://twitter.com/kira505",
        linkedin: "https://linkedin.com/in/kira505",
      },
    },
  ]

  return (
    <motion.section
      id="team"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full border-t border-gray-200 py-12 md:py-24 bg-gray-50"
      aria-labelledby="team-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-mono">04_team</div>
            <h2 id="team-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">
              meet.the.team
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
              At Brainfried, our diverse team of innovators collaborates to push boundaries and deliver exceptional
              digital experiences. Meet the minds driving our success.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <motion.div
              key={`team-${i}`}
              whileHover={{
                y: -8,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-black focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2"
              tabIndex={0}
            >
              <div className="absolute -top-10 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`Portrait of ${member.name}, ${member.role} at Brainfried`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-12 text-center">
                <h3 className="font-mono text-xl font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-gray-500">{member.role}</p>
                <p className="mt-4 text-sm text-gray-600">{member.bio}</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-200 p-2 transition-colors hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label={`${member.name}'s GitHub profile`}
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-200 p-2 transition-colors hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-200 p-2 transition-colors hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="mt-6 h-[1px] w-full bg-gray-100 transition-all duration-300 group-hover:bg-black" />
              <Button
                variant="ghost"
                className="mt-4 w-full font-mono text-xs transition-colors group-hover:bg-black group-hover:text-white focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label={`View ${member.name}'s profile`}
              >
                view profile
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            "Working with Brainfried felt like an extension of our team—seamless and inspiring." – Gold Shopping
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Connect with our team"
            >
              <Link href="#contact">Connect With Our Team</Link>
            </Button>
            <Button
              variant="outline"
              className="focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="See our work"
            >
              <Link href="#work">See Our Work</Link>
            </Button>
          </div>
          <div className="mt-6">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 inline-flex items-center"
              aria-label="View open positions"
            >
              Want to join us? Check open roles
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Back to top button */}
        <div className="container flex justify-end px-4 md:px-6 mt-8">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full h-10 w-10 p-0 focus:ring-2 focus:ring-black focus:ring-offset-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ArrowRight className="h-4 w-4 rotate-270" style={{ transform: "rotate(-90deg)" }} />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
