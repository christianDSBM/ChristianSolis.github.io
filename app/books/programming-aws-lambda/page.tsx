import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Programming AWS Lambda: capítulo 1 | Christian Solís",
  description:
    "Reseña del primer capítulo de Programming AWS Lambda, de John Chapin y Mike Roberts.",
}

export default function ProgrammingAwsLambdaReviewPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <Link
          href="/books"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-sky-500 dark:hover:text-sky-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a libros
        </Link>

        <header className="mb-10 max-w-3xl">
          <Badge
            variant="outline"
            className="mb-4 border-sky-500/30 bg-sky-500/5 px-3 py-1 text-sky-600 dark:text-sky-300"
          >
            Reseña de lectura
          </Badge>
          <h1 className="mb-3 font-serif text-4xl font-semibold tracking-tight text-foreground dark:text-white md:text-5xl">
            Programming AWS Lambda
          </h1>
          <p className="text-zinc-500">John Chapin y Mike Roberts · Capítulo 1</p>
        </header>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="prose prose-neutral max-w-3xl leading-relaxed dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-a:text-fuchsia-600 prose-a:underline-offset-4 dark:prose-a:text-fuchsia-300">
          <h2>
            Capítulo 1: Introducción a Serverless, Amazon Web Services (AWS) y
            AWS Lambda
          </h2>

          <p>
            En este capítulo, titulado “Introducción a Serverless, Amazon Web
            Services (AWS) y AWS Lambda”, se comienza con un repaso de las
            distintas etapas por las que ha pasado la computación, en particular
            de cómo ha cambiado la forma de desarrollar y operar aplicaciones.
            De la descripción que hacen Chapin y Roberts destacan tres grandes
            etapas: On-Premises, Compute as a Service y Serverless.
          </p>

          <p>
            Para alguien como yo, que en octubre de 2026 no tengo mucha
            familiaridad con el desarrollo de software, fue un capítulo que
            tuve que leer y releer. El paseo histórico es conciso, pero aun así
            tiene mucho contenido.
          </p>

          <p>
            En cada etapa, los autores mencionan las ventajas frente a la
            anterior en términos de las responsabilidades que recaen en el
            programador o la compañía. Para no hacer mucho spoiler, en
            On-Premises se es responsable de prácticamente todo: el suministro
            eléctrico, la conexión a internet, la ubicación física de los
            servidores y su mantenimiento, entre otras cosas.
          </p>

          <p>
            En la siguiente etapa, Compute as a Service, incluyen tres
            categorías: Infrastructure as a Service (IaaS), Platform as a
            Service (PaaS) y Container as a Service (CaaS). IaaS permite
            aprovisionar recursos de infraestructura, como máquinas virtuales;
            por ejemplo, Amazon Elastic Compute Cloud (EC2). Amazon Simple
            Storage Service (S3), en cambio, es un servicio de almacenamiento
            de objetos en la nube, no un ejemplo directo de IaaS.
          </p>

          <p>
            En PaaS se abstrae parte de la gestión de la plataforma, como la
            administración del sistema operativo (SO), sus actualizaciones y
            su monitoreo. Con CaaS se reduce la carga de administrar la
            infraestructura subyacente y se delegan tareas relacionadas con el
            ciclo de vida y la orquestación de los contenedores, así como su
            escalado. Las responsabilidades exactas dependen del servicio.
          </p>

          <p>
            Acá quiero hacer un pequeño paréntesis. Pensemos en una compañía
            que necesita ejecutar dos aplicaciones, cada una en un SO distinto.
            Antes de la virtualización, podía necesitar un servidor físico para
            cada sistema. Con la virtualización, es posible ejecutar varias
            máquinas virtuales —cada una con su propio SO— en una misma máquina
            física. Los contenedores, por otro lado, aíslan la ejecución de una
            aplicación y sus dependencias, pero comparten el núcleo del SO del
            anfitrión.
          </p>

          <p>
            John Loubser (2021), en su libro{" "}
            <Link href="/books#software-engineering-for-absolute-beginners">
              <em>Software Engineering for Absolute Beginners</em>
            </Link>
            , explica que las máquinas virtuales ofrecen un aislamiento más
            completo porque representan sistemas completos; por eso suelen
            requerir más recursos y tardar más en iniciarse. Los contenedores,
            al compartir el núcleo del SO, son más ligeros: permiten ejecutar
            más instancias en una misma máquina y ponerlas en marcha o detenerlas
            rápidamente.
          </p>

          <p>
            Finalmente, se llega a Serverless, un modelo en el que el proveedor
            gestiona los servidores por nosotros. Eso no significa que no haya
            servidores, sino que la abstracción hace que no tengamos que
            administrarlos directamente. El libro aborda distintas definiciones
            de Serverless y presenta dos enfoques: Backend as a Service (BaaS)
            y Function as a Service (FaaS).
          </p>

          <p>
            No me gustaría detenerme en las definiciones de esta reseña:
            distintos autores las explican de maneras diferentes. Por ejemplo,
            Andreas y Michael Wittig lo hacen en <em>Amazon Web Services in
            Action</em> (2023), donde también citan a Prakash y Basha en la
            primera edición de <em>Practical Serverless Applications with
            AWS</em>. Prefiero no definir aquí qué es FaaS, para que quien tenga
            interés pueda descubrirlo por su cuenta y, de paso, conocer AWS
            Lambda.
          </p>

          <p>
            La otra parte que destacaría de este primer capítulo son los dos
            ejemplos de aplicaciones que usan Lambda: una API (interfaz de
            programación de aplicaciones) web y el procesamiento de archivos.
            En el primer caso, el ejemplo organiza la API con funciones Lambda
            asociadas a las operaciones de sus endpoints, que usan el protocolo
            de transferencia de hipertexto (HTTP). En el segundo, una función
            Lambda se activa cada vez que se carga un archivo en un bucket de
            S3.
          </p>
          </div>

          <aside className="order-first mx-auto w-full max-w-[220px] lg:sticky lg:top-28 lg:order-last lg:mx-0 lg:max-w-none">
            <img
              src="https://chris-dsbm-site-assets.s3.mx-central-1.amazonaws.com/ChapinAndRoberts2020.webp"
              alt="Portada de Programming AWS Lambda, de John Chapin y Mike Roberts"
              className="w-full rounded-lg shadow-xl shadow-black/25"
            />
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  )
}
