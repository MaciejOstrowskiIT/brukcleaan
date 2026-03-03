"use client"

import { useState } from "react"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image";

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
                className="h-7 bg-lime text-lime-foreground hover:bg-lime/90 text-xs font-semibold"
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

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card">
            <SheetTitle className="text-lg font-bold text-foreground">
              Bruk<span className="text-lime">Clean</span>
            </SheetTitle>
            <nav className="mt-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-lime"
                >
                  {link.label}
                </a>
              ))}
              <a href="#wycena" onClick={() => setOpen(false)}>
                <Button className="mt-4 w-full bg-lime text-lime-foreground hover:bg-lime/90 font-semibold">
                  Darmowa wycena
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
