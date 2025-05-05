"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <span className={`relative z-10 ${isGlitching ? "opacity-90" : "opacity-100"}`}>{text}</span>

      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-red-500 z-0"
            animate={{
              x: [0, -5, 3, -2, 0],
              opacity: [0, 1, 0.5, 0],
            }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-blue-500 z-0"
            animate={{
              x: [0, 5, -3, 2, 0],
              opacity: [0, 1, 0.5, 0],
            }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  )
}
