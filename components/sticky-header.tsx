"use client"

import {useState} from "react"
import Image from "next/image"
import {Phone, Menu, X, ChevronRight} from "lucide-react"
import {Button} from "@/components/ui/button"

const NAV_LINKS = [
  {label: "Realizacje", href: "#realizacje"},
  {label: "Usługi", href: "#uslugi"},
  {label: "Jak pracujemy", href: "#jak-pracujemy"},
  {label: "Cennik", href: "#cennik"},
  {label: "FAQ", href: "#faq"},
]

const PHONE = "+48 726 628 743"
const PHONE_HREF = "tel:+48726628743"

export function StickyHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-md">
        <div className="bg-graphite text-primary-foreground">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
            <span className="hidden items-center gap-1.5 sm:flex">
              <Phone className="h-3.5 w-3.5"/>
              {PHONE}
            </span>

            <span className="text-xs text-primary-foreground/70 sm:text-sm">
              Pon&ndash;Sob 8:00&ndash;18:00
            </span>

            <a href={PHONE_HREF}>
              <Button
                size="sm"
                className="h-8 bg-blue-600 text-xs font-semibold hover:bg-blue-600"
              >
                <Phone className="mr-1 h-3.5 w-3.5"/>
                Zadzwoń
              </Button>
            </a>
          </div>
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
          <a href="#" className="relative block h-9 w-32 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="BrukClean"
              width={116}
              height={116}
              className="object-contain"
              loading="eager"
              fetchPriority="high"
            />
          </a>

          <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[15px] font-medium text-foreground transition-colors hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#wycena">
              <Button className="font-semibold bg-blue-600 hover:bg-blue-500/90 text-white">
                Darmowa wycena
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon-lg"
            className="h-12 w-12 sm:h-11 sm:w-11 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[90] bg-black/45 backdrop-blur-[2px] lg:hidden"
            onClick={() => setOpen(false)}
          />

          <aside
            className="fixed right-0 top-0 z-[100] h-full w-[86%] max-w-sm border-l border-white/10 bg-[#2d3142] text-white shadow-2xl lg:hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="relative h-8 w-28">
                <Image
                  src="/images/logo.jpg"
                  alt="BrukClean"
                  fill
                  className="object-contain object-left"
                  sizes="112px"
                />
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
                aria-label="Zamknij menu"
              >
                <X className="h-5 w-5"/>
              </button>
            </div>

            <nav className="flex flex-col px-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-60"/>
                </a>
              ))}
            </nav>

            <div className="mt-2 px-4">
              <a href="#wycena" onClick={() => setOpen(false)}>
                <Button className="h-12 w-full bg-blue-600 text-base font-bold text-white hover:bg-blue-600/90">
                  Darmowa wycena
                </Button>
              </a>
            </div>

            <div className="px-4 pt-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white transition-colors hover:bg-white/5 hover:text-white"
              >
                <Phone className="h-4 w-4"/>
                {PHONE}
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  )
}