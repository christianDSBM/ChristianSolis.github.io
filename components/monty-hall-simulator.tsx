"use client"

import { useState } from "react"
import { LoaderCircle, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const endpoint =
  "https://ua2ykewrdp3mlfxjeyqntk7wjm0flzdn.lambda-url.us-east-1.on.aws/"
const presets = [50, 100, 500, 1_000, 10_000, 100_000]

interface StrategyResult {
  victorias: number
  derrotas: number
  proporcionGanadas: number
  probabilidadTeorica: number
}

interface SimulationResult {
  totalExperimentos: number
  estrategiaMantener: StrategyResult
  estrategiaCambiar: StrategyResult
  conclusion: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function isStrategyResult(value: unknown): value is StrategyResult {
  return (
    isRecord(value) &&
    typeof value.victorias === "number" &&
    typeof value.derrotas === "number" &&
    typeof value.proporcionGanadas === "number" &&
    typeof value.probabilidadTeorica === "number"
  )
}

function isSimulationResult(value: unknown): value is SimulationResult {
  return (
    isRecord(value) &&
    typeof value.totalExperimentos === "number" &&
    isStrategyResult(value.estrategiaMantener) &&
    isStrategyResult(value.estrategiaCambiar) &&
    typeof value.conclusion === "string"
  )
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("es-MX").format(value)
}

function formatPercent(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

function StrategyCard({
  title,
  result,
  highlighted = false,
}: {
  title: string
  result: StrategyResult
  highlighted?: boolean
}) {
  const accent = highlighted ? "text-emerald-400" : "text-zinc-200"
  const barColor = highlighted ? "bg-emerald-500" : "bg-zinc-400"

  return (
    <section
      className={`rounded-xl border p-5 ${
        highlighted
          ? "border-emerald-500/30 bg-emerald-500/[0.04]"
          : "border-zinc-800 bg-zinc-900/70"
      }`}
    >
      <h3 className={`mb-5 font-semibold ${accent}`}>{title}</h3>
      <dl className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-zinc-500">Victorias</dt>
          <dd className="mt-1 text-xl font-semibold text-foreground">
            {formatNumber(result.victorias)}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">Derrotas</dt>
          <dd className="mt-1 text-xl font-semibold text-foreground">
            {formatNumber(result.derrotas)}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">Proporción empírica</dt>
          <dd className={`mt-1 font-semibold ${accent}`}>
            {formatPercent(result.proporcionGanadas)}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">Probabilidad teórica</dt>
          <dd className="mt-1 font-mono text-zinc-300">
            {formatPercent(result.probabilidadTeorica)}
          </dd>
        </div>
      </dl>
      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs text-zinc-500">
          <span>Proporción de victorias</span>
          <span>{formatPercent(result.proporcionGanadas)}</span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-zinc-800"
          role="progressbar"
          aria-label={`Victorias con estrategia: ${title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={result.proporcionGanadas * 100}
        >
          <div
            className={`h-full rounded-full transition-all duration-700 ${barColor}`}
            style={{
              width: `${Math.min(Math.max(result.proporcionGanadas * 100, 0), 100)}%`,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export function MontyHallSimulator() {
  const [experiments, setExperiments] = useState(presets[3])
  const [result, setResult] = useState<SimulationResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function runSimulation() {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ experimentos: experiments }),
      })

      if (!response.ok) {
        throw new Error(`El servicio respondió con el estado ${response.status}.`)
      }

      const data: unknown = await response.json()
      if (!isSimulationResult(data)) {
        throw new Error("El servicio devolvió una respuesta con formato inesperado.")
      }

      setResult(data)
    } catch (cause) {
      setResult(null)
      setError(
        cause instanceof TypeError
          ? "No se pudo conectar con el simulador. Revisa tu conexión e inténtalo de nuevo."
          : cause instanceof SyntaxError
            ? "El simulador devolvió una respuesta que no se pudo leer. Inténtalo de nuevo más tarde."
          : cause instanceof Error
            ? cause.message
            : "Ocurrió un error inesperado al ejecutar la simulación.",
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 md:p-7">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <fieldset className="min-w-0">
          <legend className="mb-3 text-sm font-medium text-zinc-300">
            Número de experimentos
          </legend>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setExperiments(preset)}
                aria-pressed={experiments === preset}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  experiments === preset
                    ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                    : "border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {formatNumber(preset)}
              </button>
            ))}
          </div>
        </fieldset>
        <Button
          type="button"
          onClick={runSimulation}
          disabled={loading}
          className="h-11 shrink-0 bg-emerald-600 px-5 font-semibold text-white hover:bg-emerald-500"
        >
          {loading ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              Ejecutando…
            </>
          ) : (
            <>
              <Play className="size-4" aria-hidden="true" />
              Ejecutar simulación
            </>
          )}
        </Button>
      </div>

      {error && (
        <p
          role="alert"
          className="mb-5 rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-300"
        >
          {error}
        </p>
      )}

      {loading && (
        <p className="mb-5 text-sm text-zinc-400" role="status" aria-live="polite">
          Simulando {formatNumber(experiments)} partidas…
        </p>
      )}

      {result && (
        <div aria-live="polite">
          <p className="mb-4 text-sm text-zinc-500">
            Resultados de {formatNumber(result.totalExperimentos)} experimentos
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <StrategyCard
              title="Mantener la decisión inicial"
              result={result.estrategiaMantener}
            />
            <StrategyCard
              title="Cambiar de puerta"
              result={result.estrategiaCambiar}
              highlighted
            />
          </div>
          <p className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm leading-relaxed text-emerald-200">
            {result.conclusion}
          </p>
        </div>
      )}
    </div>
  )
}
