"use client"

import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { ScrollAnimation } from "./scroll-animation"

const projects = [
  {
    title: "Task Management App",
    description:
      "A full-stack web application for managing personal and team tasks with real-time collaboration features.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2024",
  },
  {
    title: "Weather Dashboard",
    description:
      "Clean, responsive weather application with location-based forecasts and interactive data visualizations.",
    tech: ["Next.js", "TypeScript", "Chart.js", "Weather API"],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2024",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive tool for visualizing sorting and pathfinding algorithms to help students understand computer science concepts.",
    tech: ["JavaScript", "Canvas API", "CSS Animations"],
    github: "https://github.com",
    year: "2023",
  },
  {
    title: "Personal Finance Tracker",
    description: "Mobile-responsive app for tracking expenses and budgets with data visualization and export features.",
    tech: ["React", "Firebase", "Chart.js", "PWA"],
    github: "https://github.com",
    year: "2023",
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  const visibleProjects = showAll ? projects : projects.slice(0, 2)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="space-y-8">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold">Projects</h2>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <div className="flex items-center justify-end my-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </ScrollAnimation>

      {!showAll ? (
        <ScrollAnimation delay={200}>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 space-y-3">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-lg font-medium">{project.title}</h3>
                            <span className="text-sm text-muted-foreground">{project.year}</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed max-w-2xl">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            aria-label="View source code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                              aria-label="View live demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevProject}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentProject ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollAnimation>
      ) : (
        <div className="space-y-8">
          {visibleProjects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      )}
    </section>
  )
}
