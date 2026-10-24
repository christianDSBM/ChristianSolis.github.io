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
      
      <section id="work" className="py-24 bg-secondary/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-12 text-fuchsia-700 dark:text-fuchsia-300">Research & Specializations</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <ProjectCard 
                accent="blue"
                title="Concurrent Computing"
                description={
                  <>
                    Investigación analizando el impacto de la <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">relajación semántica</span> en el poder computacional, <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">número de consenso</span>, así como la implementación de objetos de alto rendimiento enfocada en optimizar la <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">escalabilidad</span>.
                  </>
                }
                tags={["Theory", "Java", "Systems", "Rust"]}
                // slidesUrl="/concurrent" AÑADIR SLIDES CUANDO SE TENGA ALGUNA PRESENTACIÓN
            />

            <ProjectCard 
              accent="blue"
              title="Graph Theory"
              description={
                <>
                  Investigación sobre la caracterización de <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">digráficas de intervalos</span> mediante estructuras prohibidas, lo cual dió pie al desarrollo de algoritmos de reconocimiento en <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">tiempo polinomial</span>, enfocados en la <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">optimización de la eficiencia</span> computacional.
                </>
              }
              tags={["Math", "Algorithms", "Optimization"]}
              slidesUrl="notes/TesisMate.pdf"
              insight="Tesis de licenciatura: Digráficas de intervalos ajustadas. "
            />

            <ProjectCard 
              accent="blue"
              title="Probabilistic Algorithms"
              description={
                <>
                  Estudio de la <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">relajación de la corrección</span> mediante algoritmos de Monte Carlo para lograr <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">escalabilidad extrema</span>. Especializado en el análisis del <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">tiempo de ejecución esperado</span> y la reducción de complejidad en escenarios de alta incertidumbre.
                </>
              }
              tags={["Monte Carlo", "Las Vegas", "Randomization"]}
              // slidesUrl="/probabilistic" AÑADIR SLIDES CUANDO SE TENGA ALGUNA PRESENTACIÓN
              insight="Analogía técnica: así como la relajación semántica potencia la concurrencia, la relajación de corrección escala la computación probabilista."
            />

            <ProjectCard 
              accent="blue"
              title="Data Science & Analytics"
              description={
                <>
                  Aplicación de <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Machine Learning</span> y análisis estadístico para la resolución de problemas de negocio. Experiencia en el pipeline completo: desde la extracción mediante <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">SQL</span> hasta el modelado predictivo con <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">Scikit-Learn</span> y visualización de insights.
                </>
              }
              tags={["Python", "Pandas", "Scikit-Learn"]}
              insight="Enfoque: transformar el rigor matemático en soluciones escalables y decisiones basadas en datos."
            />

            <ProjectCard 
              accent="blue"
              title="Stochastic Processes"
              description={
                <>
                  Área de especialización actual. Mi interés se centra en el estudio de <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">martingalas</span> y <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">cadenas de Markov</span> como herramientas para modelar la incertidumbre en sistemas dinámicos y mercados financieros.
                </>
              }
              tags={["Research In Progress", "Math", "Modeling"]}
              // slidesUrl="/stochastic" --- AÑADIR SLIDES CUANDO SE TENGA ALGUNA PRESENTACIÓN
              insight="Enfoque actual: conectando la teoría de procesos aleatorios con el modelado de fenómenos económicos complejos."
            />

            <ProjectCard 
              accent="blue"
              title="Exploratory Data Analysis"
              description={
                <>
                  Transformación de datos crudos en <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">insights accionables</span> mediante el análisis estadístico profundo. Especializado en el descubrimiento de <span className="font-medium text-fuchsia-700 dark:text-fuchsia-300">patrones y anomalías</span>, utilizando herramientas de visualización para comunicar hallazgos complejos de forma clara.
                </>
              }
              tags={["Pandas", "Matplotlib", "Seaborn"]}
              //slidesUrl="/eda-projects" --- AÑADIR SLIDES CUANDO SE TENGA ALGUNA PRESENTACIÓN
              insight="El rigor matemático no sirve de nada si no se puede comunicar: el EDA es el puente entre el algoritmo y la decisión de negocio."
            />
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </main>
  )
}