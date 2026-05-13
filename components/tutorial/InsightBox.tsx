import { AlertCircle, Lightbulb, Zap, Target } from "lucide-react"
import { ReactNode } from "react"

interface InsightBoxProps {
  type?: "insight" | "warning" | "critical" | "objective"
  title: string
  children: ReactNode
}

export function InsightBox({
  type = "insight",
  title,
  children,
}: InsightBoxProps) {
  const iconMap = {
    insight: <Lightbulb className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    critical: <Zap className="w-5 h-5" />,
    objective: <Target className="w-5 h-5" />,
  }

  const bgMap = {
    insight: "bg-emerald-500/5 border-emerald-500/20",
    warning: "bg-amber-500/5 border-amber-500/20",
    critical: "bg-red-500/5 border-red-500/20",
    objective: "bg-blue-500/5 border-blue-500/20",
  }

  const textMap = {
    insight: "text-emerald-400",
    warning: "text-amber-400",
    critical: "text-red-400",
    objective: "text-blue-400",
  }

  const labelMap = {
    insight: "Insight Técnico",
    warning: "⚠ Consideración",
    critical: "⚡ Crítico",
    objective: "🎯 Objetivo",
  }

  return (
    <div
      className={`${bgMap[type]} border rounded-2xl p-6 space-y-3 hover:border-current transition-colors duration-300`}
    >
      <div className="flex items-center gap-3">
        <div className={`${textMap[type]}`}>{iconMap[type]}</div>
        <h4 className={`text-xs font-bold uppercase tracking-[0.2em] ${textMap[type]}`}>
          {labelMap[type]}
        </h4>
      </div>

      <h5 className="text-emerald-400 text-lg font-serif font-medium">
        {title}
      </h5>

      <div className="text-zinc-400 text-sm leading-relaxed italic space-y-2">
        {children}
      </div>
    </div>
  )
}
