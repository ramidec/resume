"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, ChevronRight } from "lucide-react"

interface Project {
  id: string
  company: string
  title: string
  period: string
  description: string[]
  technologies: string[]
  color: string
}

export default function WorkExperience() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: "gointegro",
      company: "GOIntegro",
      title: "React Native Developer",
      period: "2022 - Present",
      description: [
        "Led development of GoConnect mobile application using React Native",
        "Implemented complex animations and transitions for enhanced UX",
        "Optimized app performance, reducing load times by 40%",
        "Contributed to architecture decisions and component library design",
        "Collaborated with design team to ensure pixel-perfect implementation",
      ],
      technologies: ["React Native", "TypeScript", "Redux", "Reanimated", "Jest"],
      color: "purple",
    },
    {
      id: "amalgama",
      company: "Amalgama",
      title: "Frontend Developer",
      period: "2020 - 2022",
      description: [
        "Developed Mine'd App frontend features and UI components",
        "Implemented complex animations using Reanimated library",
        "Fixed critical bugs and improved overall application stability",
        "Collaborated with backend team to integrate APIs and services",
        "Participated in code reviews and mentored junior developers",
      ],
      technologies: ["React", "React Native", "JavaScript", "Reanimated", "Styled Components"],
      color: "blue",
    },
  ]

  const toggleProject = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null)
    } else {
      setExpandedProject(id)
    }
  }

  return (
    <div className="py-10">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-400">
          <span className="text-green-500">&lt;</span> WORK_LOG <span className="text-green-500">/&gt;</span>
        </h2>
        <p className="text-blue-300 max-w-2xl mx-auto">
          Chronological record of system deployments and operational history
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            className={`border-2 border-${project.color}-500 bg-black/60 rounded-lg overflow-hidden relative group`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-${project.color}-500 opacity-70`} />
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-${project.color}-500 opacity-70`} />

            <div className="p-6 cursor-pointer" onClick={() => toggleProject(project.id)}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full bg-${project.color}-500 mr-3 animate-pulse`} />
                  <h3 className={`text-${project.color}-400 text-xl font-bold`}>{project.company}</h3>
                </div>
                <span className="text-green-400 text-sm">{project.period}</span>
              </div>

              <h4 className="text-white text-lg mb-4">{project.title}</h4>

              <motion.div
                animate={{
                  height: expandedProject === project.id ? "auto" : 0,
                  opacity: expandedProject === project.id ? 1 : 0,
                }}
                initial={false}
                className="overflow-hidden"
              >
                <div className="space-y-4 mt-4">
                  <div>
                    <h5 className="text-green-400 mb-2 flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      KEY_CONTRIBUTIONS
                    </h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
                      {project.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-green-400 mb-2 flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      TECH_USED
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded text-xs bg-${project.color}-900/30 text-${project.color}-300 border border-${project.color}-500/50`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open("https://example.com", "_blank")
                  }}
                  className={`text-${project.color}-400 text-sm flex items-center hover:underline`}
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> View Project
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleProject(project.id)
                  }}
                  className={`text-${project.color}-400 flex items-center`}
                >
                  {expandedProject === project.id ? "COLLAPSE" : "EXPAND"}
                  <ChevronRight
                    className={`w-5 h-5 ml-1 transition-transform ${expandedProject === project.id ? "rotate-90" : ""}`}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
