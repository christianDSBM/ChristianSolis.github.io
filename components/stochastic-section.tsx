"use client"

import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"

const stochasticProjects = [
  {
    title: "Markov Chain Monte Carlo",
    description:
      "Understanding MCMC methods for sampling from complex distributions. This project covers Metropolis-Hastings, Gibbs sampling, and convergence diagnostics.",
    insight:
      "MCMC lets us sample from distributions we can't normalize. The key insight: if we can compute ratios of probabilities, we can explore the entire distribution.",
    tags: ["Statistics", "ML", "Sampling"],
    latex: "\\alpha = \\min\\left(1, \\frac{p(x')q(x|x')}{p(x)q(x'|x)}\\right)",
    status: "completed" as const,
    slidesUrl: "#",
    pdfUrl: "#",
  },
  {
    title: "Martingales in Finance",
    description:
      "Applying martingale theory to option pricing. This work connects measure theory, stochastic calculus, and practical financial modeling.",
    insight:
      "Under the risk-neutral measure, discounted asset prices are martingales. This beautiful result is the foundation of derivative pricing.",
    tags: ["Finance", "Stochastic Calculus"],
    latex: "\\mathbb{E}^Q[S_T | \\mathcal{F}_t] = S_t e^{r(T-t)}",
    status: "in-progress" as const,
  },
]

export function StochasticSection() {
  return (
    <section className="py-24" id="stochastic">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          title="Stochastic Processes"
          subtitle="Mathematical models for systems that evolve randomly over time. From random walks to continuous-time processes."
        />

        <div className="flex items-center gap-2 mb-8">
          <Badge variant="outline" className="text-xs">
            Theory-Heavy
          </Badge>
          <span className="text-sm text-muted-foreground">
            Includes mathematical derivations
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stochasticProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
