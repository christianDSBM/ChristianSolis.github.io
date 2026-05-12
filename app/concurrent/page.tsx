"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"

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
          
          {/* AQUÍ ESTÁ LA MAGIA: Contenedor div con text-justify, hyphens-auto y space-y-6 para separar párrafos */}
          <div className="text-xl text-muted-foreground leading-relaxed max-w-3xl space-y-6 text-justify hyphens-auto">
            <p>
              Cuando me preguntan qué es la computación concurrente, suelo decir algo como: es el estudio de lo que sucede cuando muchos procesos realizan cómputo para lograr un objetivo común. Sin embargo, para quien no sabe mucho de computación, esto no es más que un trabalenguas.
            </p>

            <p>
              Mejor imaginemos un rompecabezas de 1,000 piezas. Si decides armarlo solo, prepárate para una jornada larga. Según datos del Campeonato Mundial de Rompecabezas, el tiempo promedio de los mejores competidores individuales ronda los 100 minutos (1h 40m).
              Ahora, ¿qué esperaríamos si lo armamos en pareja? Lo lógico sería pensar que, al ser dos personas, tardaríamos la mitad: 50 minutos. Pero la realidad es distinta: el promedio en parejas es de 1 hora con 4 minutos.
            </p>

            <p>
              ¿Por qué no tardamos la mitad si somos el doble de manos?
            </p>

            <p>
              Aquí es donde entra la computación concurrente. Esta disciplina estudia cómo escalan varios procesos al realizar una misma tarea y cómo deben compartir los recursos.
              Imagina que yo tomo 500 piezas y mi compañero las otras 500. Si para completar mi sección necesito una pieza que él tiene en su montón, mi trabajo se detiene. Estamos bloqueados. Surge entonces la pregunta fundamental: ¿Cómo acomodar las piezas para que sean visibles y útiles para ambos sin estorbarnos?
            </p>

            <p>
              En computación, esto se traduce en diseñar estrategias para que los procesadores no se peleen por la misma "pieza" de memoria. Estudiamos cómo evitar que un proceso se quede esperando eternamente (deadlock) o cómo asegurar que, aunque todos trabajen al mismo tiempo, el resultado final sea exactamente el mismo rompecabezas y no uno con piezas forzadas o faltantes.
            </p>

            <p>
              En fin, la computación concurrente no se trata solo de trabajar más rápido, sino de aprender a colaborar con eficiencia para que el esfuerzo conjunto realmente valga la pena.
            </p>

            <p>Para profundizar en los retos técnicos de los sistemas compartidos, he preparado una serie de láminas enfocadas en la implementación práctica. Aquí analizamos casos de estudio utilizando Java, explorando cómo el lenguaje maneja la comunicación entre procesos y qué herramientas nos ofrece para evitar conflictos de memoria. Es un recorrido visual por el código que hace posible la computación de alto rendimiento.</p>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Módulo 1: Fundamentos y Java */}
        <ProjectCard 
          title="I. Gestión de Hilos en Java (Thread Management)"
          tags={["Java", "Multithreading", "Fundamentos"]}
          description="
          Siguiendo la analogía del rompecabezas, aquí exploramos cómo en Java solicitamos más compañeros para armar el rompecabezas. Esto es cómo crear hilos de ejecución mediante la clase Thread y la interfaz Runnable. 
          Analizamos la diferencia entre que un compañero tenga sus propias piezas de rompecabezas (memoria local) y las piezas que están sobre la mesa a la vista de todos (memoria compartida). 

          En este bloque también discutimos el ciclo de vida de estos procesos: desde hilos que trabajan en segundo plano (daemons) hasta aquellos que controlan la aplicación principal."
          insight="Entender que un hilo comparte el mismo espacio de memoria que su creador es la base de toda la computación concurrente; es lo que permite la colaboración, pero también lo que genera conflictos."
          pdfUrl="/notes/Practica1.pdf"
        />   

          {/* Módulo 2: Sincronización y Coordinación */}
          <ProjectCard 
            title="II. Exclusión Mutua y Sincronización"
            tags={["Locking", "Java Concurrency", "Optimización"]}
            description="
            Aquí abordamos el reto de la exclusión mutua: ¿qué pasa cuando dos compañeros intentan tomar la misma pieza al mismo tiempo? 
            Analizamos los mecanismos que Java nos ofrece para poner orden en la mesa, desde el uso de bloques 'synchronized' y variables 
            'volatile', hasta por qué en sistemas complejos no basta con protegerlo todo de forma automática.

            Exploramos herramientas avanzadas como la interfaz Lock y ReentrantLock, y cómo gestionar el trabajo mediante Pools de Hilos. 
            Además, hacemos una breve transición hacia el uso de clases anónimas y expresiones lambda, cerrando con Callables y Futures 
            para recibir resultados del equipo de manera asíncrona."
            insight="Los candados intrínsecos son sencillos, pero la interfaz Lock nos permite ser 'justos' con el turno de cada compañero, evitando que alguien se quede esperando una pieza eternamente."
            pdfUrl="/notes/Practica2.pdf"
          />

          {/* Módulo 3: Algoritmos Clásicos y Consistencia */}
          <ProjectCard 
          title="III. Algoritmos Clásicos y Modelos de Memoria"
          tags={["Peterson", "Bakery", "Memoria de Java", "Volatile"]}
          description="
          ¿Qué pasa cuando el compilador intenta ser 'demasiado listo'? En este bloque exploramos el Modelo de Memoria de Java 
          y el fenómeno del reordenamiento, donde el sistema cambia el orden de nuestras instrucciones para ganar eficiencia, 
          rompiendo a veces la lógica de nuestro código. 
          Discutimos la diferencia entre consistencia secuencial (orden estricto) y consistencia eventual, 
          y cómo el uso de 'volatile' garantiza que los cambios realizados por un compañero sean visibles de inmediato 
          para todo el equipo, actuando como una barrera de memoria indispensable."
          insight="El reordenamiento de operaciones es el mayor enemigo de la consistencia; 'volatile' no es solo una etiqueta, es el grito que obliga a todos los procesadores a ponerse de acuerdo sobre la realidad de los datos."
          pdfUrl="/notes/Practica3.pdf"
        />
        
        {/* Módulo 4: Algoritmos Clásicos y Consistencia */}
        <ProjectCard 
        title="IV. Operaciones Atómicas y Candados Escalables"
        tags={["Atómicos", "Spinlocks", "Algoritmos de Espera", "Hardware"]}
        description="
        ¿Cómo construirías un candado si Java no te diera ninguno? En este bloque descendemos al nivel del hardware 
        para explorar las operaciones atómicas: acciones indivisibles como 'TestAndSet' y 'FetchAndAdd' que sirven 
        como los ladrillos fundamentales de la sincronización. 

        Implementamos desde cero diversos tipos de Spinlocks, analizando la evolución y el rendimiento de algoritmos 
        clásicos: desde el simple TASLock y su mejora TTASLock, hasta soluciones más sofisticadas como BackoffLock 
        (para reducir la congestión) y candados basados en colas como ALock y CLHLock, diseñados para escalar 
        eficientemente en sistemas con muchos procesadores."
        insight="Un buen candado no es solo el que protege la memoria, sino el que lo hace sin generar un 'tráfico' innecesario en el bus de datos; la escalabilidad nace de saber cuándo dejar de preguntar por la llave."
        pdfUrl="/notes/Practica4.pdf"
      />

      <ProjectCard 
        title="V. El Algoritmo del Panadero de Lamport"
        tags={["Leslie Lamport", "Teoría", "Liveness", "Algoritmos Clásicos"]}
        description="
        'Back in the days when the world’s first multiprocessor computers were being built and clouds 
        existed only in the sky, Leslie Lamport ruminated about a bakery.' 

        Este bloque explora uno de los pilares más elegantes de la computación distribuida. La relevancia 
        del algoritmo del Panadero radica en que logra la exclusión mutua sin necesidad de soporte 
        especial del hardware (primitivas de sincronización); solo requiere que los procesos puedan 
        leer y escribir en memoria compartida. 

        Analizamos cómo este protocolo garantiza propiedades fundamentales de viveza: es libre de 
        interbloqueos (deadlock-free), libre de inanición (starvation-free) y, sobre todo, garantiza 
        justicia (fairness) mediante un sistema de turnos tipo FIFO, asegurando que cualquier proceso 
        que desee entrar a su sección crítica eventualmente lo logre en el orden en que llegó."
        insight="Lamport demostró que la exclusión mutua es un problema lógico, no solo de hardware; el Panadero es la prueba de que el orden puede emerger del caos incluso si los relojes y la memoria no son perfectos."
        pdfUrl="/notes/BakeryAlgorithm.pdf"
      />

      <ProjectCard 
      title="VI. Consenso Distribuido: El Protocolo Paxos"
      tags={["Paxos", "Consenso", "Sistemas Distribuidos", "Tolerancia a Fallos"]}
      description="
      ¿Cómo logramos que un grupo de computadoras se ponga de acuerdo en un valor único si 
      la red es inestable y algunas máquinas pueden fallar? Entramos al terreno de Paxos, 
      el algoritmo de consenso más influyente en la historia de los sistemas distribuidos.

      Exploramos la metáfora del 'Parlamento de Paxos' de Leslie Lamport para entender 
      los roles de Proponentes, Aceptadores y Aprendices. Analizamos las fases del 
      protocolo (Prepare y Accept) y cómo este garantiza la seguridad (safety): que nunca 
      se elijan dos valores distintos, permitiendo que sistemas como Google o Amazon 
      mantengan la consistencia de sus datos a escala global."
      insight="Paxos es el pilar de la computación en la nube moderna; nos enseña que el consenso no requiere que todos estén vivos o presentes, sino que una mayoría actúe con reglas inquebrantables."
      pdfUrl="/notes/PracticaPaxos.pdf"
    />

      </div>

        <div className="mt-16 p-8 bg-secondary/20 rounded-2xl border border-border/50">
          <h3 className="font-serif text-2xl mb-4">Próximamente: Artículos Detallados</h3>
          <p className="text-muted-foreground">
            Estoy redactando mini-artículos específicos sobre la **Jerarquía de Consenso de Herlihy** y la implementación de estructuras de datos **Wait-Free**.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}