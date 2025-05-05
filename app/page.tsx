"use client"

import { useState } from "react"
import { Terminal, Code, Cpu } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { motion, AnimatePresence } from "framer-motion"
import GlitchText from "@/components/glitch-text"
import TerminalScreen from "@/components/terminal-screen"
import WorkExperience from "@/components/work-experience"
import TechStack from "@/components/tech-stack"
import NavBar from "@/components/nav-bar"
import ContactPanel from "@/components/contact-panel"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<"boot" | "main">("boot")
  const [currentSection, setCurrentSection] = useState<"home" | "work" | "stack">("home")
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false)

  const handleEnterSite = () => {
    setCurrentScreen("main")
  }

  const navigateTo = (section: "home" | "work" | "stack") => {
    setCurrentSection(section)
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === "boot" ? (
          <motion.div
            key="boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              filter: "blur(10px)",
              x: "-100vw",
            }}
            transition={{ duration: 0.5 }}
            className="h-screen w-screen flex flex-col items-center justify-center"
          >
            <TerminalScreen onEnter={handleEnterSite} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              x: "100vw",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
            }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-screen relative"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20 pointer-events-none" />

            <NavBar currentSection={currentSection} navigateTo={navigateTo} />

            <main className="container mx-auto px-4 pt-20">
              <AnimatePresence mode="wait">
                {currentSection === "home" && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="min-h-[80vh] flex flex-col items-center justify-center"
                  >
                    <div className="text-center mb-8">
                      <GlitchText text="RAMIRO.EXE" className="text-5xl md:text-7xl font-bold mb-4 text-purple-500" />
                      <div className="text-xl md:text-2xl text-blue-400 mb-6">
                        <TypeAnimation
                          sequence={[
                            "FRONTEND DEVELOPER",
                            2000,
                            "REACT NATIVE SPECIALIST",
                            2000,
                            "CYBERNETIC ENGINEER",
                            2000,
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Number.POSITIVE_INFINITY}
                        />
                      </div>
                      <p className="text-green-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                        {"> "} Specialized in creating futuristic interfaces and immersive mobile experiences. Operating
                        at the intersection of code and design.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                      <button
                        onClick={() => navigateTo("work")}
                        className="cyberpunk-button flex flex-col items-center p-6 border border-purple-500 bg-black/50 rounded-md hover:bg-purple-900/20 transition-all group"
                      >
                        <Code className="w-12 h-12 mb-3 text-purple-400 group-hover:text-purple-300" />
                        <span className="text-lg font-bold text-purple-400 group-hover:text-purple-300">WORK_LOG</span>
                      </button>

                      <button
                        onClick={() => navigateTo("stack")}
                        className="cyberpunk-button flex flex-col items-center p-6 border border-blue-500 bg-black/50 rounded-md hover:bg-blue-900/20 transition-all group"
                      >
                        <Cpu className="w-12 h-12 mb-3 text-blue-400 group-hover:text-blue-300" />
                        <span className="text-lg font-bold text-blue-400 group-hover:text-blue-300">TECH_STACK</span>
                      </button>

                      <button
                        onClick={() => setIsContactPanelOpen(true)}
                        className="cyberpunk-button flex flex-col items-center p-6 border border-green-500 bg-black/50 rounded-md hover:bg-green-900/20 transition-all group"
                      >
                        <Terminal className="w-12 h-12 mb-3 text-green-400 group-hover:text-green-300" />
                        <span className="text-lg font-bold text-green-400 group-hover:text-green-300">CONNECT</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentSection === "work" && (
                  <motion.div key="work" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <WorkExperience />
                  </motion.div>
                )}

                {currentSection === "stack" && (
                  <motion.div key="stack" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <TechStack />
                  </motion.div>
                )}
              </AnimatePresence>
            </main>

            <footer className="border-t border-green-900/30 mt-20 py-4 text-center text-green-600 text-sm">
              <p>© {new Date().getFullYear()} RAMIRO.EXE // ALL SYSTEMS OPERATIONAL</p>
            </footer>
            <ContactPanel isOpen={isContactPanelOpen} onClose={() => setIsContactPanelOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
