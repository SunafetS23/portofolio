import { Mail, Github, Linkedin } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function Contact() {
  return (
    <section id="contact" className="space-y-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-5 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/30 rounded-full"></div>
      </div>

      <ScrollAnimation>
        <h2 className="text-2xl font-semibold">Contact</h2>
      </ScrollAnimation>

      <div className="space-y-6">
        <ScrollAnimation delay={100}>
          <p className="text-muted-foreground leading-relaxed">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind, want to
            discuss technology, or just want to connect, feel free to reach out.
          </p>
        </ScrollAnimation>

        {/* Removed location section and simplified contact info */}
        <ScrollAnimation delay={200}>
          <a
            href="mailto:alex.chen@example.com"
            className="flex items-center space-x-3 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
          >
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span>alex.chen@example.com</span>
          </a>
        </ScrollAnimation>

        <ScrollAnimation delay={250}>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation delay={400}>
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Alex Chen. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  )
}
