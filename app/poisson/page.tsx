import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { LaTeXBlock } from "@/components/latex"
import { Navigation } from "@/components/navigation"
import { PoissonSimulator } from "@/components/poisson-simulator"

export const metadata: Metadata = {
  title: "El Teorema de Poisson | Christian Solís",
  description:
    "Explora la ley de los eventos raros, su demostración, la distancia de variación total y la convergencia Binomial-Poisson.",
}

const sectionClass =
  "rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8"

export default function PoissonPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <header className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Probabilidad · Convergencia en Distribución
          </p>
          <h1 className="mb-6 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            El Teorema de Poisson
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Cuando el número de ensayos crece hacia el infinito y la
            probabilidad de éxito se desvanece manteniendo una media constante,
            la distribución Binomial converge inevitablemente hacia la ley de
            Poisson.
          </p>
        </header>

        <div className="space-y-8">
          <section aria-labelledby="intuicion" className={sectionClass}>
            <p className="mb-2 text-sm font-semibold text-emerald-400">
              01 / La ley de los eventos raros
            </p>
            <h2
              id="intuicion"
              className="mb-4 font-serif text-2xl font-semibold md:text-3xl"
            >
              De ensayos repetidos a fenómenos discretos en el continuo
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                En 1837, Siméon Denis Poisson describió una ley que permite
                modelar el conteo de sucesos poco frecuentes. Imagina una gran
                cantidad de ensayos independientes: cada uno tiene una
                probabilidad muy pequeña de éxito, pero el número esperado de
                éxitos se mantiene estable.
              </p>
              <p>
                Al crecer el número de ensayos, calcular exactamente todos los
                coeficientes binomiales se vuelve innecesario. Si{" "}
                <span className="font-mono text-foreground">n → ∞</span>,{" "}
                <span className="font-mono text-foreground">pₙ → 0</span> y la
                tasa promedio <span className="font-mono text-foreground">λ = npₙ</span>{" "}
                permanece constante, la distribución Binomial se aproxima por
                una distribución determinada únicamente por λ.
              </p>
              <p>
                Esta aproximación aparece al contar llegadas de paquetes a un
                servidor, desintegraciones radiactivas en un intervalo de
                tiempo o mutaciones en una cadena de ADN. En cada caso hay
                muchas oportunidades de ocurrencia y cada evento individual es
                raro.
              </p>
            </div>
          </section>

          <section aria-labelledby="demostracion" className={sectionClass}>
            <p className="mb-2 text-sm font-semibold text-emerald-400">
              02 / La demostración formal
            </p>
            <h2
              id="demostracion"
              className="mb-4 font-serif text-2xl font-semibold md:text-3xl"
            >
              El límite analítico de la masa binomial
            </h2>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">Teorema.</strong> Para
                cada n, sea <span className="font-mono text-foreground">Xₙ ~ Bin(n, pₙ)</span>,
                con <span className="font-mono text-foreground">pₙ = λ/n</span>{" "}
                para n suficientemente grande y λ constante positiva. Para
                cualquier entero fijo k ≥ 0, la masa de probabilidad converge
                a la masa Poisson:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2">
                <LaTeXBlock>
                  {String.raw`\lim_{n\to\infty}P(X_n=k)=\frac{\lambda^k e^{-\lambda}}{k!}`}
                </LaTeXBlock>
              </div>

              <p>
                <strong className="text-foreground">1. Sustituimos</strong>{" "}
                la probabilidad de éxito por λ/n y expandimos el coeficiente
                binomial como un producto descendente:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2">
                <LaTeXBlock>
                  {String.raw`P(X_n=k)=\binom{n}{k}p_n^k(1-p_n)^{n-k}=\frac{n(n-1)\cdots(n-k+1)}{k!}\frac{\lambda^k}{n^k}\left(1-\frac{\lambda}{n}\right)^{n-k}`}
                </LaTeXBlock>
              </div>

              <p>
                <strong className="text-foreground">2. Reagrupamos</strong>{" "}
                los factores para separar los términos que dependen de n:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2">
                <LaTeXBlock>
                  {String.raw`P(X_n=k)=\frac{\lambda^k}{k!}\prod_{j=1}^{k-1}\left(1-\frac{j}{n}\right)\left(1-\frac{\lambda}{n}\right)^{-k}\left(1-\frac{\lambda}{n}\right)^n`}
                </LaTeXBlock>
              </div>

              <p>
                <strong className="text-foreground">3. Tomamos el límite.</strong>{" "}
                Como k es fijo, cada factor del producto finito tiende a 1.
                También{" "}
                <span className="font-mono text-foreground">
                  (1 − λ/n)<sup>−k</sup> → 1
                </span>
                , mientras que el límite exponencial fundamental da{" "}
                <span className="font-mono text-foreground">
                  (1 − λ/n)<sup>n</sup> → e<sup>−λ</sup>
                </span>
                . Por lo tanto:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2">
                <LaTeXBlock>
                  {String.raw`\lim_{n\to\infty}P(X_n=k)=\frac{\lambda^k}{k!}\cdot 1\cdot 1\cdot e^{-\lambda}=\frac{\lambda^k e^{-\lambda}}{k!}`}
                </LaTeXBlock>
              </div>
            </div>
          </section>

          <section aria-labelledby="metrica" className={sectionClass}>
            <p className="mb-2 text-sm font-semibold text-emerald-400">
              03 / Velocidad de convergencia y rigor métrico
            </p>
            <h2
              id="metrica"
              className="mb-4 font-serif text-2xl font-semibold md:text-3xl"
            >
              Distancia de Variación Total y Teorema de Le Cam
            </h2>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                La convergencia punto a punto describe el límite cuando n crece,
                pero para una cantidad finita de ensayos también interesa
                medir qué tan precisa es la aproximación. La distancia de
                variación total resume la discrepancia entre las dos
                distribuciones sobre todos los valores posibles:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2">
                <LaTeXBlock>
                  {String.raw`d_{\mathrm{TV}}(X_n,Y)=\frac{1}{2}\sum_{k=0}^{\infty}\left|P(X_n=k)-P(Y=k)\right|,\quad Y\sim\mathrm{Poisson}(\lambda)`}
                </LaTeXBlock>
              </div>
              <p>
                El teorema de Le Cam ofrece una cota explícita para la
                aproximación Poisson de una Binomial con parámetros n y λ/n.
                Para λ fijo, el error máximo decrece al menos a razón inversa
                de n:
              </p>
              <div className="overflow-x-auto rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                <LaTeXBlock>
                  {String.raw`d_{\mathrm{TV}}\bigl(\mathrm{Bin}(n,\lambda/n),\mathrm{Poisson}(\lambda)\bigr)\leq\frac{\lambda^2}{n}`}
                </LaTeXBlock>
              </div>
              <p>
                Así, aumentar n mientras se conserva la media λ reduce la
                discrepancia entre las distribuciones; la distancia tiende a
                cero.
              </p>
            </div>
          </section>

          <section aria-labelledby="laboratorio" className="space-y-5">
            <div className="max-w-3xl">
              <p className="mb-2 text-sm font-semibold text-emerald-400">
                04 / Laboratorio interactivo
              </p>
              <h2
                id="laboratorio"
                className="mb-3 font-serif text-2xl font-semibold md:text-3xl"
              >
                Visualización de la convergencia
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Explora empíricamente cómo la función de masa de probabilidad
                de la sucesión Xₙ se aproxima a la distribución límite de
                Poisson conforme n aumenta. Cambia λ para solicitar la familia
                correspondiente y alterna entre sus términos sin volver a
                consultar el servicio.
              </p>
            </div>
            <PoissonSimulator />
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
