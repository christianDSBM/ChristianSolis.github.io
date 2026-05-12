"use client"

import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"

const concurrentProjects = [
  {
    title: "Lock-Free Data Structures",
    description:
      "An exploration of concurrent data structures that avoid traditional locking mechanisms. This project examines compare-and-swap primitives and their role in building scalable, thread-safe collections.",
    insight:
      "The key to lock-free programming is understanding memory ordering: even without locks, we must reason carefully about when writes become visible to other threads.",
    tags: ["Concurrency", "Systems", "C++"],
    latex: "\\text{CAS}(\\text{addr}, \\text{expected}, \\text{new}) \\rightarrow \\text{bool}",
    slidesUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Distributed Consensus Protocols",
    description:
      "A deep dive into Raft and Paxos consensus algorithms. This work explains how distributed systems achieve agreement despite node failures, network partitions, and message delays.",
    insight:
      "Consensus is impossible in an asynchronous system with even one faulty process (FLP). Practical systems work around this by using timeouts and partial synchrony assumptions.",
    tags: ["Distributed Systems", "Algorithms"],
    slidesUrl: "#",
    pdfUrl: "#",
  },
  {
    title: "Actor Model Implementation",
    description:
      "Building a lightweight actor runtime from scratch. Actors communicate through message passing, eliminating shared state and simplifying reasoning about concurrent programs.",
    insight:
      "The actor model inverts our thinking: instead of protecting shared data, we isolate data and share messages. This makes distribution transparent.",
    tags: ["Erlang", "Concurrency", "Runtime"],
    videoUrl: "#",
  },
]

export function ConcurrentSection() {
  return (
    <section className="py-24" id="concurrent">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          title="Concurrent Computing"
          subtitle="Exploring the foundations of parallel and distributed computation. These projects focus on making concurrency understandable and teachable."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {concurrentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
