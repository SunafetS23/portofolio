"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right"
  delay?: number
}

export function ScrollAnimation({ children, className = "", direction = "up", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass =
    direction === "left" ? "scroll-animate-left" : direction === "right" ? "scroll-animate-right" : "scroll-animate"

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
