"use client"

import { useState } from "react"

interface BookCoverProps {
  src: string
  title: string
}

export function BookCover({ src, title }: BookCoverProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative mx-auto flex h-[240px] w-[160px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-zinc-900 px-4 text-center text-xs text-zinc-500 shadow-lg shadow-black/30 md:mx-0">
      {hasError && <span>Cover unavailable</span>}
      {!hasError && (
        <img
          src={src}
          alt={`Portada de ${title}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full rounded-lg object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}
