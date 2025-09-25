"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="pt-20 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/30 rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Profile Picture */}
        <div
          className={`flex-shrink-0 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/professional-headshot-of-young-computer-science-st.jpg"
                alt="Alex Chen - Computer Science Student"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1
              className={`text-4xl md:text-5xl font-bold text-balance transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Alex Chen
            </h1>
            <p
              className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Computer Science Student
            </p>
            <p
              className={`text-lg text-muted-foreground max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              I build accessible, performant web applications and explore the intersection of technology and user
              experience. Currently pursuing my degree while working on projects that solve real-world problems.
            </p>
          </div>

          <div
            className={`flex items-center justify-center md:justify-start space-x-6 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:alex@example.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
