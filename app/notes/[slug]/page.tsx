import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LaTeX, LaTeXBlock } from "@/components/latex"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface NoteContent {
  title: string
  date: string
  readTime: string
  content: React.ReactNode
}

const notesContent: Record<string, NoteContent> = {
  "eventual-consistency": {
    title: "Why Eventual Consistency Matters",
    date: "2024-02-15",
    readTime: "5 min",
    content: (
      <>
        <p>
          Strong consistency is intuitive. When you write a value, everyone immediately sees it.
          But this intuition breaks down in distributed systems, where network partitions and
          latency are facts of life.
        </p>

        <h2>The CAP Theorem</h2>
        <p>
          The famous CAP theorem tells us we can only have two of three properties: Consistency,
          Availability, and Partition tolerance. Since network partitions are unavoidable, we
          must choose between consistency and availability.
        </p>

        <div className="my-6">
          <LaTeXBlock>{"\\text{Consistency} + \\text{Availability} + \\text{Partition Tolerance} \\Rightarrow \\text{Choose 2}"}</LaTeXBlock>
        </div>

        <p>
          Eventual consistency is the pragmatic choice for many systems. It guarantees that
          if no new updates are made, all replicas will eventually converge to the same value.
        </p>

        <h2>A Mental Model</h2>
        <p>
          Think of eventual consistency like gossip in a social network. Information spreads,
          but not instantly. Eventually, everyone knows the news, but there&apos;s a propagation delay.
        </p>

        <p>
          The key insight is that many applications can tolerate temporary inconsistency.
          Your social media feed doesn&apos;t need to show posts in perfect global order—it just
          needs to be reasonably current and eventually correct.
        </p>
      </>
    ),
  },
  "central-limit-theorem": {
    title: "The Beauty of the Central Limit Theorem",
    date: "2024-01-28",
    readTime: "7 min",
    content: (
      <>
        <p>
          One of the most remarkable results in probability theory is the Central Limit Theorem.
          It explains why the normal distribution appears everywhere in nature and statistics.
        </p>

        <h2>The Statement</h2>
        <p>
          If you take the sum (or average) of many independent random variables, the result
          tends toward a normal distribution—regardless of the original distribution of
          those variables.
        </p>

        <div className="my-6">
          <LaTeXBlock>{"\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{d} N(0, 1) \\text{ as } n \\to \\infty"}</LaTeXBlock>
        </div>

        <h2>Why This Matters</h2>
        <p>
          The CLT explains why measurement errors are normally distributed, why biological
          traits follow bell curves, and why we can make statistical inferences about
          populations from samples.
        </p>

        <p>
          In systems design, the CLT tells us that aggregate behavior becomes predictable
          even when individual components are not. This is the foundation of capacity
          planning and load balancing.
        </p>

        <h2>The Intuition</h2>
        <p>
          Imagine rolling many dice and summing the results. Each die has a uniform
          distribution, but the sum quickly becomes bell-shaped. The more dice you add,
          the more normal it looks. The CLT formalizes this observation.
        </p>
      </>
    ),
  },
  "academia-to-industry": {
    title: "From Academia to Industry: Notes",
    date: "2024-01-10",
    readTime: "4 min",
    content: (
      <>
        <p>
          After years in academic research, I&apos;m transitioning to industry. Here are some
          observations about what transfers and what doesn&apos;t.
        </p>

        <h2>What Transfers Well</h2>
        <ul>
          <li>
            <strong>Deep thinking:</strong> The ability to sit with a hard problem and reason
            through it systematically is invaluable.
          </li>
          <li>
            <strong>Clear communication:</strong> Writing papers teaches you to explain
            complex ideas precisely.
          </li>
          <li>
            <strong>First principles reasoning:</strong> Understanding fundamentals helps
            when debugging novel problems.
          </li>
        </ul>

        <h2>What Needs Adjustment</h2>
        <ul>
          <li>
            <strong>Shipping speed:</strong> Industry moves faster. Perfect is the enemy
            of good enough.
          </li>
          <li>
            <strong>Scope management:</strong> Research explores; industry delivers.
            Knowing when to stop is crucial.
          </li>
          <li>
            <strong>Collaboration:</strong> Papers have few authors; products have many
            stakeholders.
          </li>
        </ul>

        <h2>The Bridge</h2>
        <p>
          The best roles combine both worlds: deep technical work with real-world impact.
          Research engineering, ML infrastructure, and distributed systems are natural fits
          for the academically-minded.
        </p>
      </>
    ),
  },
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export async function generateStaticParams() {
  return Object.keys(notesContent).map((slug) => ({ slug }))
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = notesContent[slug]

  if (!note) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            href="/#notes"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Notes
          </Link>

          <header className="mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-balance">
              {note.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(note.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {note.readTime} read
              </span>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:leading-relaxed prose-li:leading-relaxed">
            {note.content}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
