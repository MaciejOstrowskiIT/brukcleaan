import { ClipboardList, Eye, Droplets, Sparkles, ShieldCheck } from "lucide-react"

const STEPS = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Wycena i oględziny",
    desc: "Bezpłatna wizyta lub wycena na podstawie zdjęć. Określamy zakres prac i cenę.",
  },
  {
    icon: Eye,
    num: "02",
    title: "Przygotowanie",
    desc: "Zabezpieczamy rośliny, elewację i elementy wrażliwe. Nanosząc środek czyszczący.",
  },
  {
    icon: Droplets,
    num: "03",
    title: "Mycie ciśnieniowe",
    desc: "Profesjonalnymi urządzeniami usuwamy brud, mech i naloty. Regulujemy ciśnienie do rodzaju powierzchni.",
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Dopracowanie detali",
    desc: "Ręczne doczyszczanie krawędzi, fugowania i trudno dostępnych miejsc.",
  },
  {
    icon: ShieldCheck,
    num: "05",
    title: "Impregnacja (opcjonalnie)",
    desc: "Nakładamy środek ochronny, który wydłuża efekt czystości i chroni przed mchem.",
  },
]

export function ProcessSection() {
  return (
    <section id="jak-pracujemy" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-lime">
            Proces
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Jak pracujemy
          </h2>
          <p className="mt-3 text-muted-foreground">
            Od wyceny do efektu końcowego &mdash; przejrzysty proces w 5 krokach.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connecting line (desktop) */}
          <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step) => (
              <div key={step.num} className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-lime bg-card shadow-sm">
                  <step.icon className="h-7 w-7 text-lime" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-lime">
                  Krok {step.num}
                </span>
                <h3 className="mt-1 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
