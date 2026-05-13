import { ReactNode } from "react"

interface ConceptSectionProps {
  icon?: ReactNode
  title: string
  children: ReactNode
  variant?: "default" | "highlight"
}

export function ConceptSection({
  icon,
  title,
  children,
  variant = "default",
}: ConceptSectionProps) {
  const isHighlight = variant === "highlight"

  return (
    <div
      className={`space-y-4 ${
        isHighlight
          ? "bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8"
          : ""
      }`}
    >
      {icon && (
        <div className="flex items-center gap-3">
          <div className="text-emerald-500">{icon}</div>
          <h3 className="text-2xl font-serif font-medium text-white">
            {title}
          </h3>
        </div>
      )}
      {!icon && (
        <h3 className="text-xl font-serif font-medium text-white">{title}</h3>
      )}

      <div className="text-zinc-400 leading-relaxed space-y-3 text-lg">
        {children}
      </div>
    </div>
  )
}
