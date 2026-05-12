"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card" // <-- El import que faltaba
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"

export default function ProbabilisticPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-16">
          <Badge variant="outline" className="mb-4">Mathematics & Analysis</Badge>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Probabilistic Algorithms
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Exploración de algoritmos aleatorizados y análisis estadístico profundo. 
            Aquí combino el rigor matemático con aplicaciones prácticas de análisis de datos.
          </p>
        </div>

        <div className="grid gap-8">
          <ProjectCard 
            title="Comprehensive Probability Problem Set"
            tags={["Problem Solving", "Mathematical Rigor", "UNAM"]}
            description="Una compilación detallada de más de 60 ejercicios avanzados resueltos, cubriendo desde probabilidad clásica hasta variables aleatorias complejas y teoremas límite."
            insight="La resolución metódica de problemas fundamentales es la base para entender el comportamiento de sistemas estocásticos en la vida real."
            pdfUrl="/notes/probabilidad-60-ejercicios.pdf"
          />

          <ProjectCard 
            title="Bivariate Data Analysis & Correlation"
            tags={["Statistics", "Data Science", "Bivariate Analysis"]}
            description="Exploración de la relación entre dos variables aleatorias: distribuciones conjuntas, marginales y condicionales. Análisis de covarianza y el coeficiente de correlación de Pearson."
            insight="En la industria, el análisis bivariado es el primer paso para detectar dependencias no evidentes entre KPIs de negocio."
            latex="\rho_{X,Y} = \frac{E[(X-\mu_X)(Y-\mu_Y)]}{\sigma_X \sigma_Y}"
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}