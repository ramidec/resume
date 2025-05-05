"use client"

import { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

interface TerminalScreenProps {
  onEnter: () => void
}

export default function TerminalScreen({ onEnter }: TerminalScreenProps) {
  const [bootSequenceComplete, setBootSequenceComplete] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="w-full max-w-3xl p-8 border-2 border-green-500 bg-black rounded-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-purple-500 to-blue-500" />

      <div className="terminal-header flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-red-500 mr-2" />
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-green-400">TERMINAL v3.7.2</div>
      </div>

      <div className="terminal-content space-y-2 mb-8">
        <div className="flex">
          <span className="text-green-400 mr-2">$</span>
          <span className="text-white">initialize_system</span>
        </div>

        <div className="text-green-300 text-sm">
          <TypeAnimation
            sequence={[
              "> System check...",
              500,
              "> System check... COMPLETE",
              250,
              "> System check... COMPLETE\n> Loading core modules...",
              500,
              "> System check... COMPLETE\n> Loading core modules... DONE",
              250,
              "> System check... COMPLETE\n> Loading core modules... DONE\n> Establishing neural connection...",
              500,
              "> System check... COMPLETE\n> Loading core modules... DONE\n> Establishing neural connection... SECURE",
              250,
              "> System check... COMPLETE\n> Loading core modules... DONE\n> Establishing neural connection... SECURE\n> Booting RAMIRO.EXE...",
              500,
              () => setBootSequenceComplete(true),
            ]}
            wrapper="div"
            cursor={false}
            className="whitespace-pre-line"
            speed={100}
          />
        </div>
      </div>

      {bootSequenceComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-4xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-purple-500">RAMIRO</span>
            <span className="text-blue-500">.</span>
            <span className="text-green-500">EXE</span>
          </div>

          <div className="mb-8 text-center">
            <span className="text-green-400">System ready. Press ENTER to continue...</span>
            <span className={`ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`}>▋</span>
          </div>

          <button
            onClick={onEnter}
            className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 group relative overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-black transition-colors">ENTER</span>
            <span className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
        </motion.div>
      )}
    </div>
  )
}
