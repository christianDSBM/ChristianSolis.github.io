"use client"

import { useEffect, useMemo, useState } from "react"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { LoaderCircle } from "lucide-react"

const endpoint =
  "https://nla7bqlsqnhi5nptnju3z427da0nrchd.lambda-url.us-east-1.on.aws/"
const lambdaOptions = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

interface PoissonTerm {
  etiqueta: string
  n: number
  p: number
  distanciaTV: number
  cotaLeCam: number
  probabilidades: number[]
}

interface PoissonResponse {
  lambda: number
  kMax: number
  poisson: number[]
  sucesion: PoissonTerm[]
}

interface ChartPoint {
  k: number
  binomial: number
  poisson: number
  error: number
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function isFiniteNonnegative(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0
}

function isProbabilityArray(value: unknown): value is number[] {
  return (
    Array.isArray(value) &&
    value.every((probability) => isFiniteNonnegative(probability) && probability <= 1)
  )
}

function isPoissonTerm(value: unknown, kMax: number): value is PoissonTerm {
  return (
    isRecord(value) &&
    typeof value.etiqueta === "string" &&
    typeof value.n === "number" &&
    Number.isInteger(value.n) &&
    value.n > 0 &&
    isFiniteNonnegative(value.p) &&
    value.p <= 1 &&
    isFiniteNonnegative(value.distanciaTV) &&
    isFiniteNonnegative(value.cotaLeCam) &&
    isProbabilityArray(value.probabilidades) &&
    value.probabilidades.length > kMax
  )
}

function isPoissonResponse(value: unknown, expectedLambda: number): value is PoissonResponse {
  if (!isRecord(value)) return false

  const { lambda: responseLambda, kMax, poisson, sucesion } = value
  if (
    responseLambda !== expectedLambda ||
    typeof kMax !== "number" ||
    !Number.isInteger(kMax) ||
    kMax < 0 ||
    kMax > 1_000 ||
    !isProbabilityArray(poisson) ||
    poisson.length <= kMax ||
    !Array.isArray(sucesion) ||
    sucesion.length !== 6
  ) {
    return false
  }

  return sucesion.every((term) => isPoissonTerm(term, kMax))
}

function isChartPoint(value: unknown): value is ChartPoint {
  return (
    isRecord(value) &&
    typeof value.k === "number" &&
    typeof value.binomial === "number" &&
    typeof value.poisson === "number" &&
    typeof value.error === "number"
  )
}

function formatNumber(
  value: number,
  maximumFractionDigits = 4,
  minimumFractionDigits = 0,
) {
  return new Intl.NumberFormat("es-MX", {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value)
}

export function PoissonSimulator() {
  const [lambda, setLambda] = useState(4)
  const [response, setResponse] = useState<PoissonResponse | null>(null)
  const [activeTermIndex, setActiveTermIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [requestVersion, setRequestVersion] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadDistribution() {
      setLoading(true)
      setError(null)
      setResponse(null)

      try {
        const result = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lambda }),
          signal: controller.signal,
        })

        if (!result.ok) {
          throw new Error(`El servicio respondió con el estado ${result.status}.`)
        }

        const data: unknown = await result.json()
        if (!isPoissonResponse(data, lambda)) {
          throw new Error(
            "El servicio devolvió datos incompletos o con un formato inesperado.",
          )
        }

        setResponse(data)
        setActiveTermIndex(0)
      } catch (cause) {
        if (controller.signal.aborted) return

        setResponse(null)
        setError(
          cause instanceof TypeError
            ? "No se pudo conectar con el laboratorio. Revisa tu conexión e inténtalo de nuevo."
            : cause instanceof SyntaxError
              ? "El laboratorio devolvió una respuesta que no se pudo leer. Inténtalo de nuevo más tarde."
              : cause instanceof Error
                ? cause.message
                : "Ocurrió un error inesperado al cargar las distribuciones.",
        )
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    void loadDistribution()
    return () => controller.abort()
  }, [lambda, requestVersion])

  const activeTerm = response?.sucesion[activeTermIndex]
  const chartData = useMemo<ChartPoint[]>(() => {
    if (!response || !activeTerm) return []

    return Array.from({ length: response.kMax + 1 }, (_, k) => {
      const binomial = activeTerm.probabilidades[k] ?? 0
      const poisson = response.poisson[k] ?? 0
      return {
        k,
        binomial,
        poisson,
        error: Math.abs(binomial - poisson),
      }
    })
  }, [activeTerm, response])

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 md:p-7">
      <fieldset className="mb-6">
        <legend className="mb-3 text-sm font-medium text-zinc-300">
          Parámetro de tasa <span className="font-mono text-emerald-400">λ</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {lambdaOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLambda(option)}
              aria-pressed={lambda === option}
              disabled={loading && lambda === option}
              className={`rounded-lg border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-wait ${
                lambda === option
                  ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              λ = {option}
            </button>
          ))}
        </div>
      </fieldset>

      {loading && (
        <p
          className="flex items-center gap-2 py-8 text-sm text-zinc-400"
          role="status"
          aria-live="polite"
        >
          <LoaderCircle className="size-4 animate-spin text-emerald-400" aria-hidden="true" />
          Cargando distribuciones para λ = {lambda}…
        </p>
      )}

      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <p role="alert" className="text-sm text-red-300">
            {error}
          </p>
          <button
            type="button"
            onClick={() => setRequestVersion((version) => version + 1)}
            className="mt-3 text-sm font-medium text-red-200 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Reintentar
          </button>
        </div>
      )}

      {response && activeTerm && (
        <div aria-live="polite">
          <fieldset className="mb-6">
            <legend className="mb-3 text-sm font-medium text-zinc-300">
              Término de la sucesión Binomial
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {response.sucesion.map((term, index) => (
                <button
                  key={`${term.etiqueta}-${term.n}`}
                  type="button"
                  onClick={() => setActiveTermIndex(index)}
                  aria-pressed={activeTermIndex === index}
                  className={`rounded-lg border px-3 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    activeTermIndex === index
                      ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                      : "border-zinc-800 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <span className="block font-mono text-sm">{term.etiqueta}</span>
                  <span className="mt-1 block text-xs text-zinc-500">n = {term.n}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard label="Ensayos (n)" value={formatNumber(activeTerm.n, 0)} />
            <MetricCard
              label="Probabilidad (pₙ)"
              value={formatNumber(activeTerm.p, 4, 4)}
            />
            <MetricCard label="Tasa (λ)" value={formatNumber(response.lambda, 0)} />
            <MetricCard
              label="Distancia TV"
              value={formatNumber(activeTerm.distanciaTV, 6)}
              highlighted
            />
            <MetricCard
              label="Cota de Le Cam (λ²/n)"
              value={formatNumber(activeTerm.cotaLeCam, 6)}
            />
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-3 sm:p-5">
            <div className="mb-4">
              <h3 className="font-semibold text-zinc-200">
                Masa de probabilidad por valor de k
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Compara {activeTerm.etiqueta} (Binomial) con Poisson(λ = {response.lambda}).
                Selecciona o enfoca un punto para consultar las probabilidades y su error.
              </p>
            </div>
            <div className="h-[320px] w-full" role="img" aria-label={`Gráfica de las distribuciones ${activeTerm.etiqueta} y Poisson con lambda ${response.lambda}`}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={chartData}
                  margin={{ top: 8, right: 12, left: 0, bottom: 8 }}
                >
                  <CartesianGrid stroke="#27272a" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="k"
                    stroke="#71717a"
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                    label={{
                      value: "k",
                      position: "insideBottom",
                      offset: -4,
                      fill: "#a1a1aa",
                    }}
                  />
                  <YAxis
                    stroke="#71717a"
                    tick={{ fill: "#a1a1aa", fontSize: 11 }}
                    tickFormatter={(value: number) => formatNumber(value, 3)}
                    width={52}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(161, 161, 170, 0.08)" }}
                    content={({ active, payload, label }) => {
                      if (!active || !payload?.length) return null
                      const point = payload[0]?.payload
                      if (!isChartPoint(point)) return null

                      return (
                        <div className="rounded-lg border border-zinc-700 bg-zinc-950 p-3 text-xs shadow-xl">
                          <p className="mb-2 font-semibold text-zinc-200">k = {label}</p>
                          <p className="text-zinc-300">
                            P({activeTerm.etiqueta} = k):{" "}
                            <span className="font-mono">{formatNumber(point.binomial, 6)}</span>
                          </p>
                          <p className="mt-1 text-emerald-400">
                            P(Poisson = k):{" "}
                            <span className="font-mono">{formatNumber(point.poisson, 6)}</span>
                          </p>
                          <p className="mt-1 text-zinc-400">
                            Error absoluto:{" "}
                            <span className="font-mono">{formatNumber(point.error, 6)}</span>
                          </p>
                        </div>
                      )
                    }}
                  />
                  <Legend
                    wrapperStyle={{ color: "#a1a1aa", fontSize: 12, paddingTop: 8 }}
                  />
                  <Bar
                    dataKey="binomial"
                    name={`${activeTerm.etiqueta} (Binomial)`}
                    fill="#71717a"
                    radius={[3, 3, 0, 0]}
                    maxBarSize={34}
                  />
                  <Line
                    type="monotone"
                    dataKey="poisson"
                    name={`Poisson(λ = ${response.lambda})`}
                    stroke="#34d399"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: "#34d399", strokeWidth: 0 }}
                    activeDot={{ r: 5 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500">
              <span>Variación total d<sub>TV</sub>: {formatNumber(activeTerm.distanciaTV, 6)}</span>
              <span>Cota λ²/n: {formatNumber(activeTerm.cotaLeCam, 6)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function MetricCard({
  label,
  value,
  highlighted = false,
}: {
  label: string
  value: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlighted
          ? "border-emerald-500/30 bg-emerald-500/[0.05]"
          : "border-zinc-800 bg-zinc-900/70"
      }`}
    >
      <p className="text-xs text-zinc-500">{label}</p>
      <p
        className={`mt-2 font-mono text-lg font-semibold ${
          highlighted ? "text-emerald-400" : "text-zinc-200"
        }`}
      >
        {value}
      </p>
    </div>
  )
}
