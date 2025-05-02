"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { CustomCursorSimple } from "@/components/custom-cursor-simple"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState(3)
  const showMore = () => {
    setVisibleProjects(prev => prev + 3)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <CustomCursorSimple />
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter" aria-label="Brainfried Home">
            BRAINFRIED
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2" aria-label="Back to Homepage">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main id="main-content" className="flex-1 container py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-mono mb-4">our_work</div>
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Project Portfolio</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore our collection of digital experiences crafted with precision and purpose. Each project represents
              our commitment to excellence and innovation.
            </p>
          </div>

          <div className="space-y-8">
            {projects.slice(0, visibleProjects).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {visibleProjects < projects.length && (
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                onClick={showMore}
                className="bg-white hover:bg-gray-50"
              >
                See More Projects
              </Button>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">Interested in working with us on your next project?</p>
            <Button className="bg-black text-white hover:bg-gray-800" asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
