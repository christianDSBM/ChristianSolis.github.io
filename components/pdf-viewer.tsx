"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, X, Maximize2 } from "lucide-react"

interface PDFViewerProps {
  url: string
  title?: string
}

export function PDFViewer({ url, title }: PDFViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (isExpanded) {
    return (
      <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <Button variant="outline" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in New Tab
            </a>
          </Button>
          <Button variant="outline" size="icon" onClick={() => setIsExpanded(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <iframe
          src={url}
          className="w-full h-full"
          title={title || "PDF Document"}
        />
      </div>
    )
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] relative bg-muted">
        <iframe
          src={url}
          className="w-full h-full"
          title={title || "PDF Document"}
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsExpanded(true)}
          >
            <Maximize2 className="h-4 w-4 mr-2" />
            Expand
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open
            </a>
          </Button>
        </div>
      </div>
      {title && (
        <div className="p-3 border-t border-border">
          <p className="text-sm font-medium">{title}</p>
        </div>
      )}
    </Card>
  )
}
