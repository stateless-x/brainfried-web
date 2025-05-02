"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div
        className="p-6 cursor-pointer"
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        aria-controls={`project-details-${project.id}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-mono text-sm text-gray-500">{project.category}</div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-2 text-gray-500">{project.description}</p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full p-2"
              aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
            >
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* <AnimatePresence>
        {isExpanded && (
          <motion.div
            id={`project-details-${project.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100 pt-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`Screenshot of ${project.title} project`}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">About this project</h3>
                    <p className="text-gray-600">{project.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.link && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Visit Project <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}

                    {project.github && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View Code <Github className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  )
}
