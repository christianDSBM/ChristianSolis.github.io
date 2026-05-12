import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Sección de Artículos/Investigación */}
      <section id="work" className="py-24 bg-secondary/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-12">Research & Specializations</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <ProjectCard 
              title="Concurrent Computing"
              description="Análisis de jerarquías de consenso, exclusión mutua y modelos de consistencia en sistemas distribuidos."
              tags={["Theory", "Java", "Systems"]}
              slidesUrl="/concurrent" // Esto ahora funciona como el link a la página
            />
            <ProjectCard 
              title="Probabilistic Algorithms"
              description="Diseño de algoritmos aleatorizados y análisis de complejidad esperada en escenarios de alta incertidumbre."
              tags={["Probability", "Math", "Algorithms"]}
              slidesUrl="/probabilistic"
            />
            <ProjectCard 
              title="Stochastic Processes"
              description="Modelado estocástico aplicado, incluyendo proyectos de visión computacional y análisis locomotor."
              tags={["Stochastic", "Python", "Vision"]}
              slidesUrl="/stochastic"
            />
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </main>
  )
}
