import { ReactNode } from "react"

interface OutputSectionProps {
  children?: ReactNode
  imageUrl?: string
  imageAlt?: string
  caption?: string
  type?: "image" | "table" | "metric"
  aspectRatio?: "video" | "square" | "auto"
}

export function OutputSection({
  children,
  imageUrl,
  imageAlt = "Output visualization",
  caption,
  type = "image",
  aspectRatio = "video",
}: OutputSectionProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  }

  return (
    <div className="space-y-3">
      {/* Image Output */}
      {imageUrl && (
        <div
          className={`${aspectClasses[aspectRatio]} bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden group hover:border-emerald-500/30 transition-all duration-300`}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
          />
        </div>
      )}

      {/* Table/Metric Output */}
      {children && type === "table" && (
        <div className="bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden">
          <div className="overflow-x-auto p-4">{children}</div>
        </div>
      )}

      {/* Metric Cards Output */}
      {children && type === "metric" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
      )}

      {/* Caption */}
      {caption && (
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest text-center">
          {caption}
        </p>
      )}
    </div>
  )
}

/**
 * Metric Card Component para usar dentro de OutputSection
 * Ejemplo:
 * <OutputSection type="metric">
 *   <MetricCard label="AUC-ROC" value="0.94" />
 *   <MetricCard label="Accuracy" value="93.4%" />
 * </OutputSection>
 */
export function MetricCard({
  label,
  value,
  unit = "",
}: {
  label: string
  value: string | number
  unit?: string
}) {
  return (
    <div className="bg-zinc-900/50 border border-emerald-500/10 rounded-xl p-4 hover:border-emerald-500/30 transition-colors">
      <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
        {label}
      </p>
      <p className="text-3xl font-serif font-semibold text-emerald-400">
        {value}
        {unit && <span className="text-lg ml-1">{unit}</span>}
      </p>
    </div>
  )
}
