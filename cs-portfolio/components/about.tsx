import { ScrollAnimation } from "./scroll-animation"

export function About() {
  return (
    <section id="about" className="space-y-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-5 w-20 h-20 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-5 right-10 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
      </div>

      <div className="space-y-6">
        <ScrollAnimation>
          <h2 className="text-2xl font-semibold">About</h2>
        </ScrollAnimation>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <ScrollAnimation delay={100}>
            <p>
              I'm a Computer Science student passionate about creating digital experiences that are both beautiful and
              functional. My journey in technology began with curiosity about how things work, and has evolved into a
              deep appreciation for clean code and thoughtful design.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p>
              Currently in my third year at University, I focus on full-stack web development, algorithms, and software
              engineering principles. I enjoy working on projects that challenge me to learn new technologies and solve
              complex problems.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <p>
              When I'm not coding, you can find me reading about emerging technologies, contributing to open source
              projects, or exploring the outdoors with my camera.
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation delay={400}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Education</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-muted-foreground">State University</p>
              </div>
              <p className="text-sm text-muted-foreground">2022 — 2026</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Web Development
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
