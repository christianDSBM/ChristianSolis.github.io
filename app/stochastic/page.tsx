"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"

export default function StochasticPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-16">
          <Badge variant="outline" className="mb-4">Modeling & Uncertainty</Badge>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Stochastic Processes
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Modelado del tiempo y la incertidumbre a través de procesos aleatorios. 
            Desde caminatas aleatorias hasta el cálculo estocástico aplicado a finanzas y biología.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Proyecto 1: Caminatas Aleatorias */}
          <ProjectCard 
            title="Random Walks: From Theory to Logistics"
            tags={["Markov Chains", "Random Walks", "Optimization"]}
            description="Introducción a las caminatas aleatorias y su importancia en la modelación de trayectorias. ¿Cómo se comporta un sistema cuando cada paso depende del azar?"
            insight="Las caminatas aleatorias son el fundamento para algoritmos de búsqueda y optimización de rutas en flotas logísticas."
            latex="S_n = \sum_{i=1}^{n} X_i"
          />

          {/* Proyecto 2: Movimiento Browniano */}
          <ProjectCard 
            title="Brownian Motion in Financial Markets"
            tags={["Finance", "Stochastic Calculus", "Brownian Motion"]}
            description="Estudio del Movimiento Browniano como límite de caminatas aleatorias y su aplicación en modelos de valoración de activos financieros."
            insight="La industria financiera utiliza estos procesos para gestionar el riesgo; entender la difusión es entender el mercado."
            latex="dS_t = \mu S_t dt + \sigma S_t dW_t"
          />
          
          {/* Proyecto 3: Proyecto de Roedores */}
          <ProjectCard 
            title="Automated Locomotor Analysis"
            tags={["Computer Vision", "Stochastic Modeling", "Research"]}
            description="Aplicación de procesos estocásticos para modelar el movimiento de roedores en laboratorio, permitiendo una cuantificación precisa del comportamiento biológico mediante Computer Vision."
            insight="Transformar video en datos estocásticos permite aplicar tests de hipótesis sobre el efecto de fármacos en sujetos de prueba."
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}