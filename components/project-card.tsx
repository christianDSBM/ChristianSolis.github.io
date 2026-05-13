"use client"

import { ExternalLink, FileText, Play, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LaTeX } from "@/components/latex"

export interface ProjectCardProps {
  title: string
  description: string
  insight?: string
  latex?: string
  tags?: string[]
  slidesUrl?: string
  videoUrl?: string
  pdfUrl?: string
  status?: "completed" | "in-progress"
}

export function ProjectCard({
  title,
  description,
  insight,
  latex,
  tags = [],
  slidesUrl,
  videoUrl,
  pdfUrl,
  status = "completed",
}: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden border-emerald-500/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-500 bg-[#0a0a0b]">
      {/* Glow de fondo dinámico */}
      <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Borde sutil esmeralda en el top al hacer hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

      <CardHeader className="relative pb-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-semibold leading-tight text-balance group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </h3>
          {status === "in-progress" && (
            <Badge variant="secondary" className="shrink-0 text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              In Progress
            </Badge>
          )}
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/5 border-emerald-500/20 text-emerald-500/80 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-all"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="relative space-y-4 pt-2">
        <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
          {description}
        </p>

        {latex && (
          <div className="py-3 px-4 bg-emerald-500/5 rounded-lg border border-emerald-500/10 overflow-x-auto">
            <LaTeX display>{latex}</LaTeX>
          </div>
        )}

        {insight && (
          <div className="flex gap-3 py-3 px-4 bg-purple-500/5 rounded-lg border border-purple-500/10 group-hover:border-purple-500/20 transition-all">
            <Lightbulb className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-bold text-purple-400/70 uppercase tracking-widest mb-1">
                Deep Tech Insight
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {insight}
              </p>
            </div>
          </div>
        )}

        {(slidesUrl || videoUrl || pdfUrl) && (
          <div className="flex flex-wrap gap-4 pt-2">
            {pdfUrl && (
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-emerald-400 transition-colors">
                <FileText className="h-3.5 w-3.5" />
                <span>PDF REPORT</span>
              </a>
            )}
            {slidesUrl && (
              <a href={slidesUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-emerald-400 transition-colors">
                <ExternalLink className="h-3.5 w-3.5" />
                <span>TECHNICAL SLIDES</span>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}