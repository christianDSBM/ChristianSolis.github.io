interface SectionHeaderProps {
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <div className="mb-12" id={id}>
      <div className="flex items-center gap-4 mb-3">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
