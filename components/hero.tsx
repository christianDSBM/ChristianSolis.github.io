"use client"

import { ArrowDown, FileText, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  SiPython, 
  SiPostgresql, 
  SiLatex, 
  SiLooker, 
  SiGooglesheets, 
  SiOpenjdk, 
  SiGit, 
  SiGnusocial 
} from "react-icons/si"
import { FaCoffee } from "react-icons/fa"

export function Hero() {
  const tools = [
    { Icon: SiPython, label: "Python", category: "Data" },
    { Icon: SiPostgresql, label: "SQL", category: "DB" },
    { Icon: SiLatex, label: "LaTeX", category: "Formal" },
    { Icon: FaCoffee, label: "Java", category: "Concurrent" },
    { Icon: SiLooker, label: "Looker", category: "BI" },
    { Icon: SiGooglesheets, label: "Sheets", category: "Analysis" },
    { Icon: SiOpenjdk, label: "JavaFX", category: "GUI/Dev" },
    { Icon: SiGit, label: "Git", category: "Tools" },
    { Icon: SiGnusocial, label: "Shell", category: "Scripts" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 relative overflow-hidden">
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p className="text-sm text-emerald-500 font-bold mb-4 tracking-[0.2em] uppercase italic">
            Computer Science & Mathematics • UNAM
          </p>
          
          {/* NOMBRE CORREGIDO CON GRADIENTE VISIBLE */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[1.1] mb-6 bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent inline-block">
            Christian Solís
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 max-w-xl">
            {"Master's candidate at UNAM specializing in "}
            <span className="text-emerald-400 font-medium">probabilistic algorithms</span>
            {" and "}
            <span className="text-emerald-400 font-medium">concurrent systems</span>.
            {" I apply mathematical rigor to solve complex data challenges."}
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Button asChild variant="default" className="group px-6 bg-emerald-600 hover:bg-emerald-500 text-white border-none shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300">
              <a href="#work">
                View Research
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>

            <Button asChild variant="outline" className="px-6 border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5">
              <a href="/cv-christian-solis.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4 text-emerald-500/70" />
                Resume / CV
              </a>
            </Button>
          </div>

          {/* TECHNICAL TOOLBOX CON LABEL VERDE Y LÍNEA */}
          <div className="flex flex-col gap-6 mb-16 pt-8 relative">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xs text-emerald-500 font-bold uppercase tracking-widest whitespace-nowrap">
                Technical Toolbox
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/60 via-emerald-400/10 to-transparent" />
            </div>

            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
              <div className="animate-scroll flex gap-12 py-4">
                {[...tools, ...tools].map((tool, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 min-w-[110px] group transition-transform duration-300 hover:scale-110">
                    <tool.Icon className="h-10 w-10 text-muted-foreground/60 group-hover:text-emerald-400 transition-colors duration-300" />
                    <div className="flex flex-col items-center leading-tight">
                      <span className="text-[10px] font-bold text-foreground/70 group-hover:text-emerald-400 transition-colors uppercase tracking-wider text-center">
                        {tool.label}
                      </span>
                      <span className="text-[8px] text-muted-foreground/40 font-medium">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 text-[11px] text-muted-foreground font-medium uppercase tracking-[0.15em]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-emerald-500/40" />
              <span className="text-emerald-500/80">Optimization</span>
            </div>
            <span className="hidden sm:inline">Stochastic Analysis</span>
            <span className="hidden md:inline">Concurrent Systems</span>
            <span className="hidden lg:inline">Bivariate Data</span>
          </div>
        </div>
      </div>
    </section>
  )
}