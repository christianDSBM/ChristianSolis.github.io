"use client"

import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, MapPin, GraduationCap } from "lucide-react"

const interests = [
  "Distributed Computing",
  "Probabilistic Algorithms",
  "Stochastic Processes",
  "Machine Learning",
  "Concurrent Systems",
  "Mathematical Optimization",
  "Data Analytics",
  "Rust & Python",
]

export function AboutSection() {
  return (
    <section className="py-24 relative w-full" id="about">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HEADER CON LÍNEA ESMERALDA */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground">
            About
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/60 via-emerald-400/20 to-transparent" />
        </div>

        <div className="grid gap-12 md:grid-cols-3 mt-8">
          <div className="md:col-span-2 space-y-7">
            {/* PÁRRAFO 1: IDENTIDAD Y ENFOQUE */}
            <p className="text-lg leading-relaxed text-foreground">
              I am a <span className="text-emerald-400 font-medium">Master's candidate in Computer Science and Engineering</span> and a <span className="text-emerald-400 font-medium">Mathematician</span> from Univversidad Nacional Autónoma de México (UNAM). 
              My primary focus has been the search for strategies to <span className="text-emerald-400 font-medium">reduce algorithmic complexity</span>, a goal I have approached from different perspectives.
            </p>

            {/* PÁRRAFO 2: LA CONEXIÓN TÉCNICA */}
            <p className="text-muted-foreground leading-relaxed">
              Initially, I specialized in <span className="text-emerald-400 font-medium">concurrency</span> as a tool to optimize execution in distributed systems. 
              Recently, I have expanded this analysis toward <span className="text-emerald-400 font-medium">randomization</span>, exploring how relaxing absolute 
              certainty allows for gains in scalability and efficiency.
            </p>

            {/* PÁRRAFO 3: TRANSICIÓN A IA Y DATA SCIENCE */}
            <p className="text-muted-foreground leading-relaxed">
              This same search for solutions to high-complexity problems led me to delve into <span className="text-emerald-400 font-medium">Artificial 
                Intelligence</span>. I have found in AI and <span className="text-emerald-400 font-medium">Machine Learning</span> a third complementary 
                approach, where using tools like <span className="text-emerald-400 font-medium">Pandas, Scikit-learn, and Matplotlib</span> allows me to 
                materialize theoretical models into practical data analysis implementations.
            </p>

            {/* PÁRRAFO 4: NÚCLEO MATEMÁTICO Y DOCENCIA */}
            <p className="text-muted-foreground leading-relaxed">
              My background in <span className="text-emerald-400 font-medium">Probability, Stochastic Processes, and Statistics</span> acts as the core uniting these areas. Additionally, my <span className="text-emerald-400 font-medium">5-year tenure as a Teaching Assistant</span> at the Faculty of Sciences has been key to developing my ability to translate deep mathematical concepts into clear, accessible explanations.
            </p>

            {/* CALL TO ACTION PROFESIONAL */}
            <p className="text-muted-foreground leading-relaxed italic border-l-2 border-emerald-500/30 pl-4 py-1">
              Currently transitioning to the industry, seeking challenges in Data Science roles where technical rigor is the standard.
            </p>

            {/* CORE EXPERTISE TAGS */}
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

          {/* COLUMNA DERECHA: EDUCACIÓN Y CONTACTO */}
          <div className="space-y-10 md:pl-6">
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-foreground/90 tracking-wide border-b border-emerald-500/20 pb-2">Education</h3>
              <div className="space-y-4">
                <div className="flex gap-3 group">
                  <GraduationCap className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] transition-all" />
                  <div>
                    <p className="font-medium text-sm text-foreground">M.S. Computer Science & Engineering</p>
                    <p className="text-xs text-muted-foreground">UNAM, 2024 — Present</p>
                  </div>
                </div>
                <div className="flex gap-3 group">
                  <GraduationCap className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] transition-all" />
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