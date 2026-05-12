"use client"

import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

interface NoteEntry {
  title: string
  excerpt: string
  date: string
  slug: string
  readTime: string
}

const notes: NoteEntry[] = [
  {
    title: "Why Eventual Consistency Matters",
    excerpt:
      "Strong consistency is intuitive but expensive. Here's a mental model for thinking about eventual consistency that helped me understand distributed databases.",
    date: "2024-02-15",
    slug: "eventual-consistency",
    readTime: "5 min",
  },
  {
    title: "The Beauty of the Central Limit Theorem",
    excerpt:
      "Why does everything tend toward normality? An intuitive explanation of the CLT and its surprising consequences for real-world systems.",
    date: "2024-01-28",
    slug: "central-limit-theorem",
    readTime: "7 min",
  },
  {
    title: "From Academia to Industry: Notes",
    excerpt:
      "Reflections on bridging theoretical computer science with practical engineering. What transfers, what doesn't, and what surprised me.",
    date: "2024-01-10",
    slug: "academia-to-industry",
    readTime: "4 min",
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function NotesSection() {
  return (
    <section className="py-24 bg-secondary/30" id="notes">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          title="Notes & Insights"
          subtitle="Short-form writing on ideas I find interesting. Focus on explaining complex concepts simply."
        />

        <div className="space-y-4">
          {notes.map((note, index) => (
            <Link key={index} href={`/notes/${note.slug}`} className="block group">
              <Card className="border-border/60 hover:border-border hover:shadow-md transition-all duration-200 bg-card">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-lg font-medium group-hover:text-accent transition-colors">
                      {note.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {note.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(note.date)}
                    </span>
                    <span>{note.readTime} read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
