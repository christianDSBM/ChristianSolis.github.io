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
          <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-500/70 via-fuchsia-400/30 to-transparent" />
        </div>

        <div className="grid gap-12 md:grid-cols-3 mt-8">
          <div className="md:col-span-2 space-y-7">
            {/* PÁRRAFO 1: IDENTIDAD Y ENFOQUE */}
 <div className="space-y-8">
  {/* INTRODUCCIÓN GENERAL */}
  <p className="text-lg leading-relaxed text-foreground">
    I am a <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Master&apos;s candidate in Computer Science and Engineering</span> and a <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Mathematician</span> from the Universidad Nacional Autónoma de México (UNAM). Currently, I work as a <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Software Developer at Accenture Mexico</span>, and as an academic instructor at the <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Faculty of Sciences, UNAM</span>.
  </p>

  {/* SECCIÓN 1: ACADEMIA & INVESTIGACIÓN */}
  <div className="space-y-3">
    <div className="text-xs font-mono font-semibold tracking-wider text-fuchsia-700 dark:text-fuchsia-300 uppercase">
      // Academia & Research
    </div>
    <p className="text-muted-foreground leading-relaxed">
      My academic journey centers on the pursuit of strategies to <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">reduce algorithmic complexity</span>, analyzing problems at the intersection of discrete mathematics and computing.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Initially, I focused on <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">concurrency and distributed computing</span> to optimize coordination and execution in non-blocking systems. More recently, I have extended this work toward <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">randomization</span>—investigating how relaxing deterministic certainty unlocks substantial gains in scalability, fault tolerance, and computational efficiency.
    </p>
  </div>

  {/* SECCIÓN 2: DESARROLLO & BIG DATA */}
  <div className="space-y-3">
    <div className="text-xs font-mono font-semibold tracking-wider text-fuchsia-700 dark:text-fuchsia-300 uppercase">
      // Engineering & Cloud
    </div>
    <p className="text-muted-foreground leading-relaxed">
      In the industry, my core work revolves around <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">large-scale batch data processing</span>, building high-throughput pipelines with <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Java and Apache Spark</span> managed via Maven. Operating within mission-critical Big Data environments has driven me to leverage <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Docker</span> for containerization, <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Kubernetes</span> for orchestration, and a mix of relational and NoSQL storage engines.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Beyond daily enterprise workloads, I am deeply fascinated by architectural paradigms: tracing the historical evolution from <span className="text-foreground font-mono text-sm">On-Premises → VMs → Containers → Serverless</span>, and engineering event-driven architectures with FaaS/BaaS. Concurrently, I actively explore the emergence of <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">LLMs and agentic systems</span>, studying how foundation models can be orchestrated into autonomous, robust backend workflows.
    </p>
  </div>

  {/* SECCIÓN 3: DOCENCIA */}
  <div className="space-y-3">
    <div className="text-xs font-mono font-semibold tracking-wider text-fuchsia-700 dark:text-fuchsia-300 uppercase">
      // Teaching
    </div>
    <p className="text-muted-foreground leading-relaxed">
      With over <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">5 years of teaching tenure</span> at the Faculty of Sciences, I have instructed courses ranging from undergraduate foundations to graduate seminars. My teaching portfolio includes core mathematical pillars (<span className="text-foreground">Calculus, Linear Algebra, and Geometry</span>) as well as advanced computer science courses such as <span className="text-foreground">Concurrent Computing, Analysis and Design of Algorithms, and Randomized Algorithms</span>.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      I currently teach <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Probability</span>, actively fostering my ongoing research in <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">stochastic processes, statistics, and stochastic calculus</span>. Teaching remains my strongest tool for distilling abstract theory into clear, first-principles implementations.
    </p>
  </div>

  {/* CALL TO ACTION PROFESIONAL */}
  <div className="border-l-2 border-sky-500/50 pl-4 py-1.5 my-4">
    <p className="text-muted-foreground leading-relaxed italic text-sm">
      Bridging rigorous mathematical foundations with enterprise-grade cloud and distributed systems.
    </p>
  </div>
</div>


            {/* CORE EXPERTISE TAGS */}
            <div className="pt-4">
              <h3 className="text-xs font-semibold mb-4 text-fuchsia-700 dark:text-fuchsia-300 tracking-widest uppercase italic">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="font-medium text-[11px] px-3 py-1 border border-sky-500/20 hover:border-fuchsia-500/40 transition-colors">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: EDUCACIÓN Y CONTACTO */}
          <div className="space-y-10 md:pl-6">
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-foreground/90 tracking-wide border-b border-sky-500/30 pb-2">Education</h3>
              <div className="space-y-4">
                <div className="flex gap-3 group">
                  <GraduationCap className="h-5 w-5 text-fuchsia-600 shrink-0 mt-0.5 transition-all group-hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.35)] dark:text-fuchsia-300" />
                  <div>
                    <p className="font-medium text-sm text-foreground">M.S. Computer Science & Engineering</p>
                    <p className="text-xs text-muted-foreground">UNAM, 2024 — Present</p>
                  </div>
                </div>
                <div className="flex gap-3 group">
                  <GraduationCap className="h-5 w-5 text-fuchsia-600 shrink-0 mt-0.5 transition-all group-hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.35)] dark:text-fuchsia-300" />
                  <div>
                    <p className="font-medium text-sm text-foreground">B.S. Mathematics</p>
                    <p className="text-xs text-muted-foreground">UNAM, 2022</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-foreground/90 tracking-wide border-b border-sky-500/30 pb-2">Contact</h3>
              <div className="space-y-3.5">
                <a href="mailto:christian.soliscalderon@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group hover:text-sky-600 dark:hover:text-sky-300">
                  <Mail className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-300" />
                  christian.soliscalderon@gmail.com
                </a>
                <a href="https://github.com/christianDSBM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group hover:text-sky-600 dark:hover:text-sky-300">
                  <Github className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-300" />
                  github.com/christianDSBM
                </a>
                <a href="https://www.linkedin.com/in/christian-solís-b864a4374?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group hover:text-sky-600 dark:hover:text-sky-300">
                  <Linkedin className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-300" />
                  LinkedIn Profile
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-300" />
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