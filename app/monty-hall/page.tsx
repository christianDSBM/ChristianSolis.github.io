import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { LaTeXBlock } from "@/components/latex"
import { Navigation } from "@/components/navigation"
import { MontyHallSimulator } from "@/components/monty-hall-simulator"

export const metadata: Metadata = {
  title: "El problema de Monty Hall | Christian Solís",
  description:
    "Una explicación matemática del problema de Monty Hall y un simulador de Monte Carlo para comparar las estrategias de mantener o cambiar de puerta.",
}

const sectionClass =
  "rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8"

export default function MontyHallPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <header className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Probabilidad · Intuición y evidencia
          </p>
          <h1 className="mb-6 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            El problema de Monty Hall
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Tres puertas, un auto y una decisión que parece un volado. La
            respuesta correcta no es la que dicta la intuición: conviene cambiar.
          </p>
        </header>

        <div className="space-y-8">
          <section aria-labelledby="historia" className={sectionClass}>
            <p className="mb-2 text-sm font-semibold text-emerald-400">01 / El dilema</p>
            <h2 id="historia" className="mb-4 font-serif text-2xl font-semibold md:text-3xl">
              De un programa de televisión a una controversia matemática
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                El problema toma su nombre de Monty Hall, presentador del
                programa estadounidense <em>Let&apos;s Make a Deal</em>. En su
                versión clásica hay tres puertas: detrás de una hay un auto y
                detrás de las otras dos, cabras. El concursante elige una puerta;
                el anfitrión, que conoce lo que hay detrás de todas, abre
                deliberadamente una de las otras puertas y muestra una cabra.
              </p>
              <p>
                Quedan cerradas la puerta elegida y otra. El anfitrión ofrece la
                oportunidad de cambiar. ¿Mantener la elección o cambiar?
                Aunque parezca que cada puerta tiene ahora una probabilidad de
                1/2, las probabilidades no se reparten de nuevo por igual:
                depende de cómo se eligió y abrió la puerta.
              </p>
              <p>
                En 1990, Marilyn vos Savant respondió esta pregunta en su
                columna de <em>Parade</em>: cambiar da una probabilidad de ganar
                de 2/3. La respuesta provocó una controversia pública y una
                oleada de cartas de miles de lectores, incluidos académicos y
                matemáticos, que defendían que las dos puertas restantes debían
                tener probabilidad 1/2.
              </p>
            </div>
          </section>

          <section aria-labelledby="demostracion" className={sectionClass}>
            <p className="mb-2 text-sm font-semibold text-emerald-400">02 / La demostración</p>
            <h2 id="demostracion" className="mb-4 font-serif text-2xl font-semibold md:text-3xl">
              Probabilidad condicionada por la elección inicial
            </h2>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Sea <span className="font-mono text-foreground">Cᵢ</span> el
                evento de que el auto esté detrás de la puerta{" "}
                <span className="font-mono text-foreground">i</span>. Antes de
                jugar, todas las puertas son igualmente probables:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2">
                <LaTeXBlock>{String.raw`P(C_1)=P(C_2)=P(C_3)=\frac{1}{3}`}</LaTeXBlock>
              </div>
              <p>
                Sin pérdida de generalidad, supongamos que el concursante elige
                la puerta 1. Si mantiene su decisión, gana exactamente cuando
                la elección inicial era correcta:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2">
                <LaTeXBlock>{String.raw`P(\text{ganar al mantener})=P(C_1)=\frac{1}{3}`}</LaTeXBlock>
              </div>
              <p>
                En cambio, la estrategia de cambiar gana siempre que la elección
                inicial era incorrecta. Esa posibilidad abarca las dos puertas
                no elegidas. El anfitrión conoce la ubicación del auto, no abre
                la puerta elegida y revela una cabra; por tanto, de esas dos
                puertas no elegidas, la que queda cerrada es la del auto:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2">
                <LaTeXBlock>
                  {String.raw`P(C_2\cup C_3)=\frac{2}{3}\quad\Longrightarrow\quad P(\text{ganar al cambiar})=\frac{2}{3}`}
                </LaTeXBlock>
              </div>
              <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 text-foreground">
                <strong className="text-emerald-400">Conclusión:</strong>{" "}
                cambiar duplica la probabilidad de éxito: 2/3 frente a 1/3.
                La acción informativa del anfitrión no borra la probabilidad de
                la elección inicial; revela cuál de las puertas restantes se
                descarta.
              </p>
            </div>
          </section>

          <section aria-labelledby="erdos" className={sectionClass}>
            <p className="mb-2 text-sm font-semibold text-emerald-400">03 / La intuición puesta a prueba</p>
            <h2 id="erdos" className="mb-4 font-serif text-2xl font-semibold md:text-3xl">
              Paul Erdős y el poder de una simulación
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Paul Erdős, uno de los matemáticos más prolíficos del siglo XX,
                también encontró poco convincente la solución al principio.
                Según la anécdota recogida por Paul Hoffman en{" "}
                <em>The Man Who Loved Only Numbers</em> (publicado en español
                como <em>El hombre que solo amaba los números</em>), Erdős
                defendió inicialmente la respuesta de 50/50.
              </p>
              <p>
                Las explicaciones teóricas y los árboles de casos no bastaron
                para convencerlo. La evidencia que finalmente aceptó llegó de
                su amigo y colaborador Ronald Graham: una simulación por
                computadora de muchas partidas, que mostró que cambiar ganaba
                aproximadamente dos de cada tres veces.
              </p>
            </div>
          </section>

          <section aria-labelledby="simulador" className="space-y-5">
            <div className="max-w-3xl">
              <p className="mb-2 text-sm font-semibold text-emerald-400">04 / Compruébalo</p>
              <h2 id="simulador" className="mb-3 font-serif text-2xl font-semibold md:text-3xl">
                Simulación de Monte Carlo
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Al igual que Erdős, compruébalo empíricamente mediante
                simulación de Monte Carlo. Ejecuta miles de partidas y compara
                los resultados observados con las probabilidades teóricas.
              </p>
            </div>
            <MontyHallSimulator />
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
