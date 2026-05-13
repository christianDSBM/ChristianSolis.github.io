import { ReactNode } from "react"

interface TutorialStepProps {
  stepNumber: number
  title: string
  icon: ReactNode
  children: ReactNode
}

/**
 * TutorialStep agrupa:
 * 1. Encabezado con icono, número y título
 * 2. Contenido flexible (ConceptSection, CodeBlock, OutputSection, InsightBox)
 *
 * Uso:
 * <TutorialStep stepNumber={1} title="El Riesgo de Default" icon={<ShieldAlert />}>
 *   <ConceptSection>...</ConceptSection>
 *   <CodeBlock code="..." />
 *   <OutputSection imageUrl="..." />
 *   <InsightBox>...</InsightBox>
 * </TutorialStep>
 */
export function TutorialStep({
  stepNumber,
  title,
  icon,
  children,
}: TutorialStepProps) {
  return (
    <section id={`step-${stepNumber}`} className="scroll-mt-32 space-y-8">
      {/* Encabezado */}
      <div className="flex items-center gap-4 text-emerald-500">
        <div className="w-8 h-8">{icon}</div>
        <h2 className="text-3xl font-serif font-medium text-white">
          {String(stepNumber).padStart(2, "0")}. {title}
        </h2>
      </div>

      {/* Contenido flexible */}
      <div className="space-y-8">{children}</div>
    </section>
  )
}
