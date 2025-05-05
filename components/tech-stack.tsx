"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface TechItem {
  name: string
  icon: string
  description: string
  experience: string
  category: "frontend" | "backend" | "tools" | "design"
  color: string
}

export default function TechStack() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const techItems: TechItem[] = [
    // Frontend
    {
      name: "React",
      icon: "⚛️",
      description: "Library for building user interfaces",
      experience: "4+ years",
      category: "frontend",
      color: "blue",
    },
    {
      name: "React Native",
      icon: "📱",
      description: "Framework for building native apps",
      experience: "3+ years",
      category: "frontend",
      color: "blue",
    },
    {
      name: "TypeScript",
      icon: "TS",
      description: "Typed superset of JavaScript",
      experience: "3+ years",
      category: "frontend",
      color: "blue",
    },
    {
      name: "Zustand",
      icon: "🐻",
      description: "State management solution",
      experience: "2+ years",
      category: "frontend",
      color: "blue",
    },

    // Backend
    {
      name: "Node.js",
      icon: "🟢",
      description: "JavaScript runtime environment",
      experience: "3+ years",
      category: "backend",
      color: "green",
    },
    {
      name: "Express",
      icon: "🚂",
      description: "Web application framework",
      experience: "3+ years",
      category: "backend",
      color: "green",
    },
    {
      name: "GraphQL",
      icon: "◢",
      description: "API query language",
      experience: "2+ years",
      category: "backend",
      color: "green",
    },
    {
      name: "Firebase",
      icon: "🔥",
      description: "App development platform",
      experience: "2+ years",
      category: "backend",
      color: "green",
    },

    // Tools
    {
      name: "Git",
      icon: "🔄",
      description: "Version control system",
      experience: "4+ years",
      category: "tools",
      color: "purple",
    },
    {
      name: "Vite",
      icon: "⚡",
      description: "Frontend build tool",
      experience: "2+ years",
      category: "tools",
      color: "purple",
    },
    {
      name: "Webpack",
      icon: "📦",
      description: "Module bundler",
      experience: "3+ years",
      category: "tools",
      color: "purple",
    },
    {
      name: "Postman",
      icon: "🚀",
      description: "API platform",
      experience: "3+ years",
      category: "tools",
      color: "purple",
    },

    // Design
    {
      name: "Figma",
      icon: "🎨",
      description: "Design tool",
      experience: "3+ years",
      category: "design",
      color: "cyan",
    },
    {
      name: "Adobe Suite",
      icon: "🖌️",
      description: "Creative software suite",
      experience: "4+ years",
      category: "design",
      color: "cyan",
    },
    {
      name: "Procreate",
      icon: "🎭",
      description: "Digital illustration app",
      experience: "2+ years",
      category: "design",
      color: "cyan",
    },
  ]

  const categories = [
    { id: "frontend", name: "FRONTEND", color: "blue" },
    { id: "backend", name: "BACKEND", color: "green" },
    { id: "tools", name: "TOOLS", color: "purple" },
    { id: "design", name: "DESIGN", color: "cyan" },
  ]

  return (
    <div className="py-10">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">
          <span className="text-green-500">&lt;</span> TECH_STACK <span className="text-green-500">/&gt;</span>
        </h2>
        <p className="text-green-300 max-w-2xl mx-auto">Neural network of technologies and frameworks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`border-2 border-${category.color}-500 bg-black/60 rounded-lg overflow-hidden relative`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-${category.color}-500 opacity-70`} />
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-${category.color}-500 opacity-70`} />

            <div className="p-6">
              <h3 className={`text-${category.color}-400 text-xl font-bold mb-6 flex items-center`}>
                <div className={`w-3 h-3 rounded-full bg-${category.color}-500 mr-3 animate-pulse`} />
                {category.name}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {techItems
                  .filter((item) => item.category === category.id)
                  .map((item) => (
                    <motion.div
                      key={item.name}
                      className={`relative p-4 border border-${item.color}-500/30 rounded-md bg-${item.color}-900/10 cursor-pointer group`}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-xl mr-2">{item.icon}</span>
                        <h4 className={`text-${item.color}-300 font-bold`}>{item.name}</h4>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredItem === item.name ? 1 : 0,
                          height: hoveredItem === item.name ? "auto" : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 text-sm mb-1">{item.description}</p>
                        <p className={`text-${item.color}-400 text-xs`}>Experience: {item.experience}</p>
                      </motion.div>

                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-${item.color}-500 transition-all duration-300`}
                        style={{
                          width: hoveredItem === item.name ? "100%" : "30%",
                          opacity: hoveredItem === item.name ? 0.8 : 0.3,
                        }}
                      />
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
