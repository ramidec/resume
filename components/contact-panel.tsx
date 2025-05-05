"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ContactPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPanel({ isOpen, onClose }: ContactPanelProps) {
  const contactItems = [
    {
      id: "mail",
      label: "MAIL",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:contact@example.com",
      color: "green",
    },
    {
      id: "linkedin",
      label: "LINKEDIN",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      color: "blue",
    },
    {
      id: "github",
      label: "GITHUB",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      color: "purple",
    },
  ]

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-black/90 border-2 border-green-500 rounded-lg p-6 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500" />
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-green-500 opacity-50" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-green-500 opacity-50" />

              {/* Scanline effect */}
              <div className="absolute inset-0 scanline pointer-events-none" />

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-green-400 mb-2">CONNECT_INTERFACE</h2>
                <p className="text-blue-300 text-sm">Select communication protocol</p>
              </div>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block relative overflow-hidden group`}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`
                      flex items-center justify-between p-4 rounded-md 
                      border border-${item.color}-500 
                      bg-${item.color}-900/20
                      transition-all duration-300
                      group-hover:bg-${item.color}-900/40
                    `}
                    >
                      <div className="flex items-center">
                        <div
                          className={`
                          flex items-center justify-center w-10 h-10 rounded-md mr-4
                          bg-${item.color}-900/50 
                          border border-${item.color}-500
                          text-${item.color}-400
                          group-hover:text-${item.color}-300
                          transition-all duration-300
                        `}
                        >
                          {item.icon}
                        </div>
                        <span
                          className={`
                          text-${item.color}-400 font-bold
                          group-hover:text-${item.color}-300
                          transition-colors duration-300
                        `}
                        >
                          {item.label}
                        </span>
                      </div>
                      <ExternalLink
                        className={`
                        w-5 h-5 text-${item.color}-500 opacity-50
                        group-hover:opacity-100
                        transition-opacity duration-300
                      `}
                      />
                    </div>

                    {/* Glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-md pointer-events-none`}
                      animate={{
                        boxShadow:
                          hoveredItem === item.id
                            ? `0 0 15px 2px var(--tw-shadow-color)`
                            : `0 0 0px 0px var(--tw-shadow-color)`,
                      }}
                      transition={{ duration: 0.3 }}
                      style={
                        {
                          "--tw-shadow-color":
                            item.color === "green"
                              ? "rgba(72, 187, 120, 0.5)"
                              : item.color === "blue"
                                ? "rgba(49, 130, 206, 0.5)"
                                : "rgba(128, 90, 213, 0.5)",
                        } as React.CSSProperties
                      }
                    />
                  </motion.a>
                ))}
              </div>

              <button
                onClick={onClose}
                className="mt-6 w-full py-2 border border-green-500 text-green-400 rounded-md
                  hover:bg-green-900/30 transition-colors duration-300"
              >
                CLOSE_CONNECTION
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
