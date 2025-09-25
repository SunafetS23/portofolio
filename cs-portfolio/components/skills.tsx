import { ScrollAnimation } from "./scroll-animation"
import { Code, Globe, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Figma", "Linux", "Agile/Scrum"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="space-y-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-5 right-20 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-16 w-20 h-20 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary/20 rounded-full"></div>
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-accent/30 rounded-full"></div>
      </div>

      <ScrollAnimation>
        <h2 className="text-2xl font-semibold">Skills</h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <ScrollAnimation key={index} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="space-y-4 p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm px-3 py-1 bg-muted text-muted-foreground rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    </section>
  )
}
