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
    <Card className="group relative overflow-hidden border-border/60 hover:border-border hover:shadow-lg transition-all duration-300 bg-card">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative pb-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-semibold leading-tight text-balance">
            {title}
          </h3>
          {status === "in-progress" && (
            <Badge variant="secondary" className="shrink-0 text-xs">
              In Progress
            </Badge>
          )}
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="relative space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {latex && (
          <div className="py-2 px-3 bg-secondary/50 rounded-md overflow-x-auto">
            <LaTeX display>{latex}</LaTeX>
          </div>
        )}

        {insight && (
          <div className="flex gap-3 py-3 px-4 bg-secondary/30 rounded-lg border border-border/40">
            <Lightbulb className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">
                Key Insight
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {insight}
              </p>
            </div>
          </div>
        )}

        {(slidesUrl || videoUrl || pdfUrl) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>PDF</span>
              </a>
            )}
            {slidesUrl && (
              <a
                href={slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Slides</span>
              </a>
            )}
            {videoUrl && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Play className="h-4 w-4" />
                <span>Video</span>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
