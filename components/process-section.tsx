import { ClipboardList, Eye, Droplets, Sparkles, ShieldCheck } from "lucide-react"

const STEPS = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Wycena i oględziny",
    desc: "Oferujemy bezpłatną wycenę na miejscu lub na podstawie zdjęć. Ustalamy zakres prac i podajemy cenę.",
  },
  {
    icon: Eye,
    num: "02",
    title: "Przygotowanie powierzchni",
    desc: "Przed rozpoczęciem prac zabezpieczamy rośliny oraz inne wrażliwe elementy otoczenia.",
  },
  {
    icon: Droplets,
    num: "03",
    title: "Mycie ciśnieniowe",
    desc: "Dokładnie usuwamy brud, mech i osady, dobierając odpowiednie ciśnienie do rodzaju czyszczonej powierzchni.",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Impregnacja (opcjonalnie)",
    desc: "Nakładamy środek ochronny, który wydłuża efekt czystości i chroni przed mchem.",
  },
  {
    icon: Sparkles,
    num: "05",
    title: "Dopracowanie detali",
    desc: "Na koniec dbamy o estetyczne wykończenie, a w przypadku kostki brukowej uzupełniamy wypłukane spoiny.",
  },
]

export function ProcessSection() {
  return (
    <section id="jak-pracujemy" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
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
                <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-600 bg-card shadow-sm">
                  <step.icon className="h-7 w-7 text-blue-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
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
