"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "events", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            Alex Chen
          </button>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "events", label: "Events" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
