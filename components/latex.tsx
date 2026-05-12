"use client"

import { useEffect, useRef } from "react"
import katex from "katex"

interface LaTeXProps {
  children: string
  display?: boolean
  className?: string
}

export function LaTeX({ children, display = false, className = "" }: LaTeXProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      })
    }
  }, [children, display])

  return (
    <span
      ref={ref}
      className={`${display ? "block my-4 text-center" : "inline"} ${className}`}
    />
  )
}

interface LaTeXBlockProps {
  children: string
  className?: string
}

export function LaTeXBlock({ children, className = "" }: LaTeXBlockProps) {
  return <LaTeX display className={className}>{children}</LaTeX>
}
