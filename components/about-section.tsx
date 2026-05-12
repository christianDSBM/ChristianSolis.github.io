"use client"

import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, MapPin, GraduationCap } from "lucide-react"

const interests = [
  "Distributed Computing",
  "Probabilistic Algorithms",
  "Stochastic Processes",
  "Data Analytics",
  "Concurrent Systems",
  "Mathematical Optimization",
]

export function AboutSection() {
  return (
    <section className="py-24 relative w-full" id="about">
      {/* Eliminamos la línea superior que no querías */}
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* REEMPLAZO DEL HEADER CON LA LÍNEA ESMERALDA PERSONALIZADA */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground">
            About
          </h2>
          {/* Esta es la línea que querías colorear */}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/60 via-emerald-400/20 to-transparent" />
        </div>

        <div className="grid gap-12 md:grid-cols-3 mt-8">
          <div className="md:col-span-2 space-y-7">
            <p className="text-lg leading-relaxed text-foreground">
              I am a problem solver driven by the intersection of abstract mathematics and advanced computing. With a **B.S. in Mathematics** and currently a **Master’s candidate in Computer Science at UNAM**, I possess a unique analytical framework for breaking down complex problems and designing robust, scalable solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in transforming theoretical foundations into practical implementations. While I am proficient in **SQL** and **Python (Pandas, NumPy)** for data analytics, my competitive edge lies in my ability to apply probabilistic thinking, graph theory, and algorithmic optimization to extract real-world value from data.
            </p>

            <p className="text-muted-foreground leading-relaxed italic border-l-2 border-emerald-500/30 pl-4 py-1">
              Currently transitioning from academia to industry, I am focused on roles that value deep technical thinking.
            </p>

            <div className="pt-4">
              <h3 className="text-xs font-semibold mb-4 text-emerald-500/80 tracking-widest uppercase italic">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="font-medium text-[11px] px-3 py-1 border border-emerald-500/10 hover:border-emerald-500/40 transition-colors">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10 md:pl-6">
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-foreground/90 tracking-wide border-b border-emerald-500/20 pb-2">Education</h3>
              <div className="space-y-4">
                <div className="flex gap-3 group">
                  <GraduationCap className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-foreground">M.S. Computer Science & Engineering</p>
                    <p className="text-xs text-muted-foreground">UNAM, 2024 — Present</p>
                  </div>
                </div>
                <div className="flex gap-3 group">
                  <GraduationCap className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-foreground">B.S. Mathematics</p>
                    <p className="text-xs text-muted-foreground">UNAM, 2022</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-foreground/90 tracking-wide border-b border-emerald-500/20 pb-2">Contact</h3>
              <div className="space-y-3.5">
                <a href="mailto:christian.soliscalderon@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-emerald-400 transition-colors group">
                  <Mail className="h-4 w-4 text-emerald-500" />
                  christian.soliscalderon@gmail.com
                </a>
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-emerald-400 transition-colors group">
                  <Github className="h-4 w-4 text-emerald-500" />
                  github.com/tu-usuario
                </a>
                <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-emerald-400 transition-colors group">
                  <Linkedin className="h-4 w-4 text-emerald-500" />
                  LinkedIn Profile
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-emerald-500" />
                  Mexico City, MX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}