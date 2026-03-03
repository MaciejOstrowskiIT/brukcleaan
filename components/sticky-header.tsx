"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Jak pracujemy", href: "#jak-pracujemy" },
  { label: "Cennik", href: "#cennik" },
  { label: "Opinie", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
]

const PHONE = "+48 726 628 743"
const PHONE_HREF = "tel:+48726628743"

export function StickyHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-md">
        {/* Top utility bar */}
        <div className="bg-graphite text-primary-foreground">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <span className="hidden items-center gap-1.5 sm:flex">
            <Phone className="h-3.5 w-3.5" />
            {PHONE}
          </span>
            <span className="text-primary-foreground/70 text-xs sm:text-sm">
            Pon&ndash;Sob 8:00&ndash;18:00
          </span>
            <div className="flex items-center gap-2">
              <a href={PHONE_HREF}>
                <Button
                  size="sm"
                  className="h-7 bg-blue-500 text-shadow-white hover:bg-blue-600 text-xs font-semibold"
                >
                  <Phone className="mr-1 h-3 w-3" />
                  Zadzwoń
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#" className="relative block h-9 w-32">
            <Image
              src="/images/logo.jpg"
              alt="BrukClean"
              fill
              className="object-contain"
              sizes="128px"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#wycena" className="hidden lg:block">
            <Button className="bg-lime text-lime-foreground hover:bg-lime/90 font-semibold">
              Darmowa wycena
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </a>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Zamknij menu" : "Otworz menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

      </header>

      {/* Fullscreen mobile overlay -- rendered outside header to avoid backdrop-blur containment */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col lg:hidden"
          style={{ backgroundColor: "#2d3142" }}
        >
          {/* Close bar */}
          <div className="flex items-center justify-between px-6 py-5">
            <div className="relative h-9 w-32">
              <Image
                src="/images/logo.jpg"
                alt="BrukClean"
                fill
                className="object-contain object-left"
                sizes="128px"
              />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
              aria-label="Zamknij menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Centered navigation */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-3 px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full max-w-xs rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center text-lg font-medium text-white transition-colors hover:border-[#84cc16]/40 hover:bg-[#84cc16]/10 hover:text-[#84cc16]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#wycena"
              onClick={() => setOpen(false)}
              className="mt-2 w-full max-w-xs"
            >
              <button
                type="button"
                className="h-14 w-full rounded-xl bg-[#84cc16] text-lg font-bold text-[#1a2e05] shadow-lg transition-colors hover:bg-[#84cc16]/90"
              >
                Darmowa wycena
              </button>
            </a>
          </nav>

          {/* Bottom phone */}
          <div className="px-6 pb-8 text-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-[#84cc16]"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">{PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
