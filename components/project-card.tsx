"use client"

import { ExternalLink, FileText, Play, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LaTeX } from "@/components/latex"

export interface ProjectCardProps {
  id?: string
  title: string
  description: string
  insight?: string
  latex?: string
  tags?: string[]
  slidesUrl?: string
  videoUrl?: string
  pdfUrl?: string
  projectUrl?: string
  projectLinkLabel?: string
  status?: "completed" | "in-progress"
  accent?: "emerald" | "blue"
}

export function ProjectCard({
  id,
  title,
  description,
  insight,
  latex,
  tags = [],
  slidesUrl,
  videoUrl,
  pdfUrl,
  projectUrl,
  projectLinkLabel = "VIEW PROJECT",
  status = "completed",
  accent = "emerald",
}: ProjectCardProps) {
  const accentClasses =
    accent === "blue"
      ? {
          card: "border-[#89542e]/15 hover:border-[#89542e]/40 hover:shadow-[0_0_30px_rgba(137,84,46,0.12)] dark:border-sky-500/15 dark:hover:border-sky-400/45 dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]",
          glow: "from-[#89542e]/15 via-transparent to-[#b7793f]/10 dark:from-sky-500/20 dark:to-fuchsia-500/10",
          topLine: "via-[#89542e]/60 dark:via-sky-400/60",
          title: "group-hover:text-[#89542e] dark:group-hover:text-fuchsia-300",
          status: "bg-[#89542e]/10 text-[#734123] border-[#89542e]/20 dark:bg-sky-500/10 dark:text-fuchsia-300 dark:border-sky-500/20",
          tag: "bg-[#89542e]/5 border-[#89542e]/20 text-[#734123] group-hover:border-[#89542e]/40 group-hover:text-[#89542e] dark:bg-sky-500/5 dark:border-sky-500/20 dark:text-fuchsia-300 dark:group-hover:border-sky-500/40 dark:group-hover:text-fuchsia-200",
          formula: "bg-[#89542e]/5 border-[#89542e]/10 dark:bg-sky-500/5 dark:border-sky-500/10",
          insight: "bg-[#89542e]/5 border-[#89542e]/15 group-hover:border-[#89542e]/30 dark:bg-fuchsia-500/5 dark:border-fuchsia-500/15 dark:group-hover:border-fuchsia-500/30",
          insightIcon: "text-[#89542e] dark:text-fuchsia-300",
          link: "hover:text-[#89542e] dark:hover:text-fuchsia-300",
        }
      : {
          card: "border-emerald-500/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(137,84,46,0.1)] dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
          glow: "from-emerald-500/20 via-transparent to-purple-500/10",
          topLine: "via-emerald-500/50",
          title: "group-hover:text-emerald-400",
          status: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          tag: "bg-emerald-500/5 border-emerald-500/20 text-emerald-500/80 group-hover:border-emerald-500/40 group-hover:text-emerald-400",
          formula: "bg-emerald-500/5 border-emerald-500/10",
          insight: "bg-purple-500/5 border-purple-500/10 group-hover:border-purple-500/20",
          insightIcon: "text-purple-400",
          link: "hover:text-emerald-400",
        }

  return (
    <Card id={id} className={`group relative scroll-mt-32 overflow-hidden transition-all duration-500 bg-card dark:bg-[#0a0a0b] ${accentClasses.card}`}>
      {/* Glow de fondo dinámico */}
      <div className={`absolute -inset-px bg-gradient-to-br ${accentClasses.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Hover accent line */}
      <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent ${accentClasses.topLine} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />

      <CardHeader className="relative pb-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className={`font-serif text-xl font-semibold leading-tight text-balance transition-colors duration-300 ${accentClasses.title}`}>
            {title}
          </h3>
          {status === "in-progress" && (
            <Badge variant="secondary" className={`shrink-0 text-[10px] ${accentClasses.status}`}>
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
                className={`text-[10px] font-bold uppercase tracking-wider transition-all ${accentClasses.tag}`}
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
          <div className={`py-3 px-4 rounded-lg border overflow-x-auto ${accentClasses.formula}`}>
            <LaTeX display>{latex}</LaTeX>
          </div>
        )}

        {insight && (
          <div className={`flex gap-3 py-3 px-4 rounded-lg border transition-all ${accentClasses.insight}`}>
            <Lightbulb className={`h-4 w-4 shrink-0 mt-0.5 ${accentClasses.insightIcon}`} />
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${accentClasses.insightIcon} opacity-75`}>
                Deep Tech Insight
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {insight}
              </p>
            </div>
          </div>
        )}

        {(slidesUrl || videoUrl || pdfUrl || projectUrl) && (
          <div className="flex flex-wrap gap-4 pt-2">
            {projectUrl && (
              <Link href={projectUrl} className={`flex items-center gap-2 text-xs font-bold text-zinc-500 transition-colors ${accentClasses.link}`}>
                <ExternalLink className="h-3.5 w-3.5" />
                <span>{projectLinkLabel}</span>
              </Link>
            )}
            {pdfUrl && (
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-xs font-bold text-zinc-500 transition-colors ${accentClasses.link}`}>
                <FileText className="h-3.5 w-3.5" />
                <span>PDF REPORT</span>
              </a>
            )}
            {slidesUrl && (
              <a href={slidesUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-xs font-bold text-zinc-500 transition-colors ${accentClasses.link}`}>
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