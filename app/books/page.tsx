import type { Metadata } from "next"
import { ArrowRight, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { BookCover } from "@/components/book-cover"

export const metadata: Metadata = {
  title: "Books | Christian Solís",
  description: "Libros que estoy leyendo, reseñas breves y aprendizajes sobre cloud y software.",
}

const books = [
  {
    title: "Programming AWS Lambda",
    authors: "John Chapin, Mike Roberts",
    isbn: "9781492041054",
    cover: "https://chris-dsbm-site-assets.s3.mx-central-1.amazonaws.com/ChapinAndRoberts2020.webp",
    tags: ["AWS", "Serverless", "Java"],
    reviewHref: "/books/programming-aws-lambda",
    summary:
      "Guía práctica para diseñar y desplegar aplicaciones serverless en Java usando AWS Lambda.",
    insight:
      "El diseño de funciones Lambda requiere pensar en límites de ejecución, arranques en frío y dependencias desde el inicio.",
  },
  {
    title: "AWS Cookbook",
    authors: "John Culkin, Mike Zazon",
    isbn: "9781492092605",
    cover: "https://chris-dsbm-site-assets.s3.mx-central-1.amazonaws.com/CulkinAndZazon2021.webp",
    tags: ["AWS", "Architecture", "Cloud Recipes"],
    summary:
      "Recetas prácticas y soluciones paso a paso para resolver problemas comunes de infraestructura y despliegue en AWS.",
    insight:
      "Los ejemplos concretos ayudan a convertir servicios aislados en soluciones operativas repetibles.",
  },
  {
    title: "Practical Serverless Applications with AWS",
    authors: "Apoorva Prakash, Shaik Inthiyaz Basha",
    isbn: "9798868812545",
    cover: "https://chris-dsbm-site-assets.s3.mx-central-1.amazonaws.com/PrakashAndBasha2025.webp",
    tags: ["Serverless", "Cloud", "FaaS"],
    summary:
      "Desarrollo end-to-end de aplicaciones orientadas a eventos y arquitecturas serverless escalables.",
    insight:
      "La separación clara de responsabilidades y la integración orientada a eventos minimizan el acoplamiento en sistemas en la nube.",
  },
  {
    title: "Serverless Architectures on AWS",
    authors: "Peter Sbarski, Yan Cui, Ajay Nair",
    isbn: "9781617293825",
    cover: "https://chris-dsbm-site-assets.s3.mx-central-1.amazonaws.com/Sbarski2022.webp",
    tags: ["Architecture", "Event-Driven", "Microservices"],
    summary:
      "Patrones de diseño, orquestación, optimización de costos y mejores prácticas en arquitecturas basadas en eventos.",
    insight:
      "Diseñar para la idempotencia y la tolerancia a fallos es el pilar central al coordinar microservicios serverless distribuidos.",
  },
  {
    title: "Amazon Web Services in Action",
    authors: "Andreas Wittig, Michael Wittig",
    isbn: "9781617299285",
    cover: "https://chris-dsbm-site-assets.s3.mx-central-1.amazonaws.com/WittigAndWittig2023.webp",
    tags: ["Cloud Computing", "AWS Core", "Infrastructure"],
    summary:
      "Fundamentos y conceptos avanzados de computación, redes, seguridad y almacenamiento en AWS.",
    insight:
      "Tratar la infraestructura como código ejecutable garantiza entornos reproducibles, auditables y resilientes.",
  },
]

export default function BooksPage() {
  return (
    <main className="books-page-background min-h-screen">
      <Navigation />

      <section className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <header className="max-w-3xl mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-sky-500/30 bg-sky-500/5 px-3 py-1 text-sky-600 dark:text-sky-300"
          >
            Reading log
          </Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-5 text-foreground dark:text-white tracking-tight">
            Books <span className="text-sky-600 dark:text-sky-300">&amp; Notes</span>
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-zinc-400">
            <p>
              En México tenemos un dicho: «Dime con quién andas y te diré quién
              eres». A mí me gusta esta adaptación: «Dime qué lees y te diré
              quién eres». Con esto en mente, quise integrar en mi página web un
              apartado donde comparto algunos libros que ya terminé de leer o
              que estoy leyendo.
            </p>
            <p>
              Además de ser una forma de conocerme, creo que este apartado es
              valioso porque me servirá para recomendar lecturas a amigos o
              conocidos y, además, para llevar un registro de mis lecturas.
            </p>
            <p>
              En las tarjetas que ya cuentan con reseña encontrarás un enlace
              para leerla. Pido disculpas de antemano: la mayoría de los libros
              que presento aquí todavía no tienen reseña. Espero ir agregándolas
              poco a poco, de acuerdo con mis tiempos y ocupaciones.
            </p>
          </div>
        </header>

        <div className="space-y-6">
          {books.map((book) => (
            <Card
              key={book.isbn}
              className="group relative overflow-hidden border-sky-500/15 bg-card/90 p-5 backdrop-blur-sm transition-all duration-500 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.12)] dark:bg-slate-900/80 md:p-6"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                <BookCover src={book.cover} title={book.title} />

                <div className="min-w-0 flex-1 space-y-4">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-sky-500 dark:text-white dark:group-hover:text-sky-300">
                      {book.title}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500">{book.authors}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {book.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-sky-500/20 bg-sky-500/5 text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    {book.summary}
                  </p>

                  <div className="flex gap-3 rounded-lg border border-fuchsia-500/15 bg-fuchsia-500/5 px-4 py-3 transition-colors group-hover:border-fuchsia-500/30">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-500 dark:text-fuchsia-300" />
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-fuchsia-600/80 dark:text-fuchsia-300/80">
                        Deep Tech Insight
                      </p>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        {book.insight}
                      </p>
                    </div>
                  </div>

                  {book.reviewHref && (
                    <Link
                      href={book.reviewHref}
                      className="inline-flex items-center gap-2 pt-1 text-xs font-bold text-zinc-500 transition-colors hover:text-fuchsia-600 dark:hover:text-fuchsia-300"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      <span>LEER RESEÑA DEL CAPÍTULO 1</span>
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card
          id="software-engineering-for-absolute-beginners"
          className="mt-12 border-fuchsia-500/15 bg-card/90 p-6 backdrop-blur-sm dark:bg-slate-900/80"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-fuchsia-600/80 dark:text-fuchsia-300/80">
            Lectura mencionada
          </p>
          <h2 className="font-serif text-xl font-semibold text-foreground dark:text-white">
            Software Engineering for Absolute Beginners
          </h2>
          <p className="mt-1 text-sm text-zinc-500">John Loubser (2021)</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
            Una introducción a conceptos de ingeniería de software. En la reseña
            de Chapin y Roberts retomo su explicación de las diferencias entre
            virtualización y contenedores.
          </p>
        </Card>
      </section>

      <Footer />
    </main>
  )
}
