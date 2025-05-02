"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Project } from "@/data/projects"

interface ProjectsListProps {
  initialProjects: Project[]
}

export function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [visibleProjects, setVisibleProjects] = useState(3)
  const showMore = () => {
    setVisibleProjects(prev => prev + 3)
  }

  return (
    <>
      <div className="space-y-8">
        {initialProjects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {visibleProjects < initialProjects.length && (
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
    </>
  )
} 