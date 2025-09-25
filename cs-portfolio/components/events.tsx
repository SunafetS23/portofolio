"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { ScrollAnimation } from "./scroll-animation"

const events = [
  {
    title: "Binus Badminton Cup 2024",
    role: "Publication and Documentation Division's Member",
    year: "2024",
    tasks: [
      "Created promotional materials and event posters",
      "Documented tournament matches and ceremonies",
      "Managed social media content during the event",
      "Coordinated with photography team for coverage",
    ],
  },
  {
    title: "Computer Science Student Association",
    role: "Vice President",
    year: "2023",
    tasks: [
      "Organized weekly programming workshops",
      "Led student council meetings and initiatives",
      "Coordinated hackathon events with industry partners",
      "Managed budget allocation for student activities",
    ],
  },
  {
    title: "ACM Programming Team",
    role: "Team Captain",
    year: "2022",
    tasks: [
      "Trained team members for competitive programming",
      "Participated in regional ICPC competitions",
      "Organized practice sessions and mock contests",
      "Mentored junior members in algorithm design",
    ],
  },
  {
    title: "Tech for Good Initiative",
    role: "Project Lead",
    year: "2023",
    tasks: [
      "Developed mobile app for local NGO",
      "Coordinated volunteer developers and designers",
      "Presented project outcomes to stakeholders",
      "Established partnerships with community organizations",
    ],
  },
]

export function Events() {
  const [showAll, setShowAll] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(0)

  const visibleEvents = showAll ? events : events.slice(0, 2)

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <section id="events" className="space-y-8">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold">Events</h2>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <div className="flex items-center justify-end my-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </ScrollAnimation>

      {!showAll ? (
        <ScrollAnimation delay={200}>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentEvent * 100}%)` }}
              >
                {events.map((event, index) => (
                  <div key={index} className="w-full flex-shrink-0 space-y-3">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-medium">{event.title}</h3>
                          <span className="text-sm text-muted-foreground">{event.year}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{event.role}</p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">Key Tasks:</h4>
                          <ul className="space-y-1">
                            {event.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevEvent}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                aria-label="Previous event"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex space-x-2">
                {events.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEvent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentEvent ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Go to event ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextEvent}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                aria-label="Next event"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollAnimation>
      ) : (
        <div className="space-y-8">
          {visibleEvents.map((event, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium">{event.title}</h3>
                    <span className="text-sm text-muted-foreground">{event.year}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{event.role}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Tasks:</h4>
                    <ul className="space-y-1">
                      {event.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      )}
    </section>
  )
}
