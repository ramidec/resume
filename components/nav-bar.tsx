"use client"

import { motion } from "framer-motion"
import { Terminal, Code, Layers, Cpu } from "lucide-react"

interface NavBarProps {
  currentSection: "home" | "work" | "stack"
  navigateTo: (section: "home" | "work" | "stack") => void
}

export default function NavBar({ currentSection, navigateTo }: NavBarProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-green-900/30"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <button onClick={() => navigateTo("home")} className="text-green-500 font-bold text-xl flex items-center">
          <Terminal className="w-5 h-5 mr-2" />
          <span>RAMIRO.EXE</span>
        </button>

        <div className="flex space-x-6">
          <button
            onClick={() => navigateTo("home")}
            className={`flex items-center px-3 py-1 rounded-md transition-colors ${
              currentSection === "home"
                ? "bg-green-900/30 text-green-400 border border-green-500/50"
                : "text-gray-400 hover:text-green-400"
            }`}
          >
            <Code className="w-4 h-4 mr-2" />
            <span>HOME</span>
          </button>

          <button
            onClick={() => navigateTo("work")}
            className={`flex items-center px-3 py-1 rounded-md transition-colors ${
              currentSection === "work"
                ? "bg-purple-900/30 text-purple-400 border border-purple-500/50"
                : "text-gray-400 hover:text-purple-400"
            }`}
          >
            <Layers className="w-4 h-4 mr-2" />
            <span>WORK</span>
          </button>

          <button
            onClick={() => navigateTo("stack")}
            className={`flex items-center px-3 py-1 rounded-md transition-colors ${
              currentSection === "stack"
                ? "bg-blue-900/30 text-blue-400 border border-blue-500/50"
                : "text-gray-400 hover:text-blue-400"
            }`}
          >
            <Cpu className="w-4 h-4 mr-2" />
            <span>STACK</span>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
