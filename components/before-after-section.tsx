"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"

const GALLERY_ITEMS = [
  {
    id: 1,
    label: "Kostka brukowa - podjazd",
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
  },
  {
    id: 2,
    label: "Kostka brukowa - chodnik",
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
  },
  {
    id: 3,
    label: "Kostka brukowa - taras",
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
  },
]

function BeforeAfterSlider({ item }: { item: (typeof GALLERY_ITEMS)[number] }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-col-resize select-none overflow-hidden bg-muted"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        role="slider"
        aria-label={`Porownanie przed i po: ${item.label}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2))
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2))
        }}
      >
        {/* "After" layer -- clean paving photo, full background */}
        <Image
          src={item.after}
          alt={`${item.label} - po czyszczeniu`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* "Before" layer -- dirty paving photo, clipped from left */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.label} - przed czyszczeniem`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-20 rounded-md bg-graphite/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
          Przed
        </span>
        <span className="absolute top-3 right-3 z-20 rounded-md bg-lime/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-lime-foreground">
          Po
        </span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-card"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-card bg-graphite shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary-foreground">
              <path
                d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <p className="text-sm font-semibold text-foreground">{item.label}</p>
      </div>
    </div>
  )
}

export function BeforeAfterSection() {
  return (
    <section id="realizacje" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-lime">
            Nasze realizacje
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Efekty Przed i Po
          </h2>
          <p className="mt-3 text-muted-foreground">
            Przesuń suwak i przekonaj się, jaką różnicę robi profesjonalne mycie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
