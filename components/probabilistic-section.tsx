"use client"

import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"

const probabilisticProjects = [
  {
    title: "Bloom Filters and Beyond",
    description:
      "Probabilistic data structures that trade perfect accuracy for dramatic space savings. This project examines Bloom filters, counting variants, and applications in distributed systems.",
    insight:
      "A Bloom filter can tell you 'definitely not in set' or 'probably in set'. This asymmetry is surprisingly useful for network protocols and databases.",
    tags: ["Data Structures", "Probability"],
    latex: "P(\\text{false positive}) \\approx \\left(1 - e^{-kn/m}\\right)^k",
    status: "completed" as const,
    pdfUrl: "#",
  },
  {
    title: "Randomized Algorithms",
    description:
      "Work in progress: exploring how randomization simplifies algorithm design. From quicksort to load balancing, random choices often lead to elegant solutions with strong expected guarantees.",
    insight:
      "Coming soon: analysis of Las Vegas vs Monte Carlo algorithms and when to use each approach.",
    tags: ["Algorithms", "Theory"],
    status: "in-progress" as const,
  },
]

export function ProbabilisticSection() {
  return (
    <section className="py-24 bg-secondary/30" id="probabilistic">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          title="Probabilistic Algorithms"
          subtitle="When exact answers are expensive, probabilistic methods offer elegant alternatives with provable guarantees."
        />

        <div className="flex items-center gap-2 mb-8">
          <Badge variant="outline" className="text-xs">
            Expanding Collection
          </Badge>
          <span className="text-sm text-muted-foreground">
            More entries coming soon
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {probabilisticProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
