interface CodeBlockProps {
  code: string
  language?: string
  description?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  code,
  language = "python",
  description,
  showLineNumbers = false,
}: CodeBlockProps) {
  const lines = code.split("\n")

  return (
    <div className="space-y-3">
      {description && (
        <p className="text-sm text-zinc-400 italic">{description}</p>
      )}

      <div className="bg-zinc-950 rounded-xl border border-white/5 overflow-hidden group hover:border-emerald-500/20 transition-colors duration-300">
        {/* Header */}
        <div className="flex items-center justify-between bg-zinc-900/50 px-4 py-3 border-b border-white/5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            {language}
          </span>
          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="text-[12px] text-zinc-500 hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100"
            title="Copy code"
          >
            Copy
          </button>
        </div>

        {/* Code */}
        <div className="p-4 overflow-x-auto">
          <pre className="font-mono text-sm text-emerald-400/90 whitespace-pre-wrap break-words">
            {lines.map((line, i) => (
              <div key={i} className="flex gap-3">
                {showLineNumbers && (
                  <span className="inline-block w-8 text-zinc-600 select-none text-right">
                    {i + 1}
                  </span>
                )}
                <code>{line}</code>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  )
}
