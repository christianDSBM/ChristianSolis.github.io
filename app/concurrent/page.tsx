"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { 
  Workflow, 
  ArrowRight,
  Lock,
} from "lucide-react"
import { InsightBox } from "@/components/tutorial/InsightBox"
import { CodeBlock } from "@/components/tutorial/CodeBlock"
import { ProjectCard } from "@/components/project-card"
import { PDFViewer } from "@/components/pdf-viewer"

export default function ConcurrentPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-16">
          <Badge variant="outline" className="mb-4">Theory & Implementation</Badge>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Concurrent Computing
          </h1>
          
          <div className="text-xl text-muted-foreground leading-relaxed max-w-3xl space-y-6 text-justify hyphens-auto">
            <p>
              When people ask me what concurrent computing is, I usually say something like: it is the study of what happens when multiple processes perform computations to achieve a common goal. However, for those unfamiliar with computer science, this is nothing more than a tongue twister.
            </p>

            <p>
              Instead, let's imagine a 1,000-piece puzzle. If you decide to build it alone, prepare for a long journey. According to data from the World Jigsaw Puzzle Championship, the average time for top individual competitors is around 100 minutes (1h 40m). 
              Now, what would we expect if we build it as a pair? It would be logical to think that, being two people, we would take half the time: 50 minutes. But the reality is different: the average for pairs is 1 hour and 4 minutes.
            </p>

            <p>
              Why don't we take half the time if we have twice the hands?
            </p>

            <p>
              This is where concurrent computing comes in. This discipline studies how multiple processes scale when performing the same task and how they must share resources. 
              Imagine that I take 500 pieces and my partner takes the other 500. If I need a piece that he has in his pile to complete my section, my work stops. We are blocked. Then the fundamental question arises: How do we arrange the pieces so they are visible and useful for both of us without getting in each other's way?
            </p>

            <p>
              In computing, this translates into designing strategies so that processors do not fight over the same "piece" of memory. We study how to prevent a process from waiting forever (deadlock) or how to ensure that, even if everyone works at the same time, the final result is exactly the same puzzle and not one with forced or missing pieces.
            </p>

            <p>
              In short, concurrent computing is not just about working faster, but about learning to collaborate efficiently so that the joint effort is truly worth it.
            </p>

            <p>To delve deeper into the technical challenges of shared systems, I have prepared a series of slides focused on practical implementation. Here we analyze case studies using Java, exploring how the language handles communication between processes and what tools it offers us to avoid memory conflicts. It is a visual journey through the code that makes high-performance computing possible.</p>
          </div>
        </div>

        <div className="mb-12 text-muted-foreground max-w-3xl leading-relaxed">
          Below, I have included several presentations created as supporting material for the 
          Concurrent Computing course taught by Prof. Gilde Valeria Rodriguez Jimenez at Facultad de Ciencias, UNAM, 
          as well as additional presentations developed for the Master's level Concurrent 
          Computing course of Posgrado en Ciencia e Ingeniería at UNAM, under the guidance of Dr. Armando Castañeda Rojano.
        </div>

        <div className="grid gap-8">
          {/* Module 1: Fundamentals and Java */}
        <ProjectCard 
          title="I. Thread Management in Java"
          tags={["Java", "Multithreading", "Fundamentals"]}
          description="
          Following the puzzle analogy, here we explore how in Java we request more partners to assemble the puzzle. This covers how to create execution threads using the Thread class and the Runnable interface. 
          We analyze the difference between a partner having their own puzzle pieces (local memory) and the pieces on the table in everyone's view (shared memory). 

          In this block, we also discuss the lifecycle of these processes: from threads working in the background (daemons) to those that control the main application."
          insight="Understanding that a thread shares the same memory space as its creator is the basis of all concurrent computing; it is what allows collaboration, but also what generates conflicts."
          pdfUrl="https://drive.google.com/file/d/1gkegpoEvD4Fiuwi6PJNXMck6CSN9SwwL/preview"
        />   

          {/* Module 2: Synchronization and Coordination */}
          <ProjectCard 
            title="II. Mutual Exclusion and Synchronization"
            tags={["Locking", "Java Concurrency", "Optimization"]}
            description="
            Here we address the challenge of mutual exclusion: what happens when two partners try to take the same piece at the same time? 
            We analyze the mechanisms Java offers to bring order to the table, from the use of 'synchronized' blocks and 'volatile' variables, to why it is not enough to automatically protect everything in complex systems.

            We explore advanced tools such as the Lock interface and ReentrantLock, and how to manage work through Thread Pools. 
            Additionally, we make a brief transition toward using anonymous classes and lambda expressions, closing with Callables and Futures to receive results from the team asynchronously."
            insight="Intrinsic locks are simple, but the Lock interface allows us to be 'fair' with each partner's turn, preventing someone from waiting for a piece indefinitely."
            pdfUrl="https://drive.google.com/file/d/1oO4lppaQsEPa7LvgZlhnT0QZ7Wsv3ONi/preview"
          />

          {/* Module 3: Classical Algorithms and Memory Models */}
          <ProjectCard 
          title="III. Classical Algorithms and Memory Models"
          tags={["Peterson", "Bakery", "Java Memory Model", "Volatile"]}
          description="
          What happens when the compiler tries to be 'too smart'? In this block, we explore the Java Memory Model 
          and the phenomenon of reordering, where the system changes the order of our instructions to gain efficiency, 
          sometimes breaking our code's logic. 
          We discuss the difference between sequential consistency (strict order) and eventual consistency, 
          and how using 'volatile' ensures that changes made by one partner are immediately visible to the entire team, 
          acting as an indispensable memory barrier."
          insight="Instruction reordering is the greatest enemy of consistency; 'volatile' is not just a label, it is the shout that forces all processors to agree on the reality of the data."
          pdfUrl="https://drive.google.com/file/d/1wU44Feks9MWKmppxZR4sdSSt_X9yDgQg/preview"
        />
        
        {/* Module 4: Atomic Operations and Scalable Locks */}
        <ProjectCard 
        title="IV. Atomic Operations and Scalable Locks"
        tags={["Atomics", "Spinlocks", "Wait Algorithms", "Hardware"]}
        description="
        How would you build a lock if Java didn't give you one? In this block, we descend to the hardware level 
        to explore atomic operations: indivisible actions like 'TestAndSet' and 'FetchAndAdd' that serve 
        as the fundamental building blocks of synchronization. 

        We implement various types of Spinlocks from scratch, analyzing the evolution and performance of 
        classical algorithms: from the simple TASLock and its improvement TTASLock, to more sophisticated solutions like BackoffLock 
        (to reduce contention) and queue-based locks like ALock and CLHLock, designed to scale efficiently in systems with many processors."
        insight="A good lock is not just one that protects memory, but one that does so without generating unnecessary 'traffic' on the data bus; scalability is born from knowing when to stop asking for the key."
        pdfUrl="https://drive.google.com/file/d/14jJIiah2eGC5CN30kZvReV0FwDCx0edV/preview"
      />

              {/* Module V: Quiescent and Eventual Consistency */}
        <ProjectCard 
        title="V. Quiescent and Eventual Consistency"
        tags={["Eventual Consistency", "Sloppy Counter", "Quiescent Consistency", "Diffraction tree"]}
        description="
        In this lab, we explore three implementations of a counter object, discussing how relaxing correctness leads to 
        greater scalability of our concurrent object. We look at the Sloppy Counter, which is a counter with eventual consistency, and the Diffraction Tree, which is a counter with quiescent consistency."
        insight="If you want higher correctness conditions, we must pay the price of low scalability; conversely, if we relax this, we can achieve greater scalability."
        pdfUrl="https://drive.google.com/file/d/1skcbYjBji2k6nlUd06tpVnicvpvr5ow8/preview"
      />

      <ProjectCard 
        title="VI. Lamport's Bakery Algorithm"
        tags={["Leslie Lamport", "Theory", "Liveness", "Classical Algorithms"]}
        description="
        'Back in the days when the world’s first multiprocessor computers were being built and clouds 
        existed only in the sky, Leslie Lamport ruminated about a bakery.' 

        This block explores one of the most elegant pillars of distributed computing. The relevance of 
        the Bakery algorithm lies in the fact that it achieves mutual exclusion without the need for special hardware support (synchronization primitives); it only requires that processes can read and write to shared memory. 

        We analyze how this protocol guarantees fundamental liveness properties: it is deadlock-free, starvation-free, and above all, guarantees fairness through a FIFO-style numbering system, ensuring that any process wishing to enter its critical section eventually succeeds in the order it arrived."
        insight="Lamport proved that mutual exclusion is a logical problem, not just a hardware one; the Bakery is proof that order can emerge from chaos even if clocks and memory are not perfect."
        pdfUrl="https://drive.google.com/file/d/1HdH36bXKcAOmHUpfa_2roBVy4GyC7-hz/preview"
      />

      <ProjectCard 
      title="VII. Distributed Consensus: The Paxos Protocol"
      tags={["Paxos", "Consensus", "Distributed Systems", "Fault Tolerance"]}
      description="
      How do we get a group of computers to agree on a single value if the network is unstable and 
      some machines might fail? We enter the realm of Paxos, the most influential consensus algorithm 
      in the history of distributed systems.

      We explore Leslie Lamport's 'Paxos Parliament' metaphor to understand the roles of Proposers, 
      Acceptors, and Learners. We analyze the phases of the protocol (Prepare and Accept) and how 
      it guarantees safety: that two different values are never chosen, allowing systems like Google 
      or Amazon to maintain data consistency at global scale."
      insight="Paxos is the pillar of modern cloud computing; it teaches us that consensus does not require everyone to be alive or present, but rather that a majority acts with unbreakable rules."
      pdfUrl="https://drive.google.com/file/d/1hJom87iqwdjuAbVJkpm7aPo36y3EpTHL/preview"
    />

      </div>

        <div className="mt-16 p-8 bg-secondary/20 rounded-2xl border border-border/50">
          <h3 className="font-serif text-2xl mb-4">Upcoming: Detailed Articles</h3>
            <p className="text-muted-foreground">
              I am currently working on a new presentation exploring the paradigm shift toward using languages like{" "}
              <span className="text-emerald-400 font-bold">Rust</span>, which inherently prevents Race Conditions, and{" "}
              <span className="text-emerald-400 font-bold">Clojure</span>, with its focus on the Message-Passing concurrency model.
            </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}