import {
  Droplets,
  ShieldCheck,
  Building2,
  Home,
  Leaf,
  Fence,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const SERVICES = [
  {
    icon: Droplets,
    title: "Mycie kostki brukowej",
    desc: "Profesjonalne czyszczenie ciśnieniowe podjazdów, chodników i parkingów. Usuwamy brud, plamy i naloty.",
  },
  {
    icon: ShieldCheck,
    title: "Impregnacja kostki",
    desc: "Zabezpieczamy kostkę przed wilgocią, mchem i przebarwieniami. Dłuższy efekt czystości.",
  },
  {
    icon: Building2,
    title: "Mycie elewacji",
    desc: "Delikatne, ale skuteczne czyszczenie fasad budynków. Bezpieczne dla tynku i farby.",
  },
  {
    icon: Home,
    title: "Czyszczenie dachów",
    desc: "Usuwanie porostów, mchu i zabrudzeń z dachówki i blachy. Opcjonalna impregnacja.",
  },
  {
    icon: Leaf,
    title: "Usuwanie mchu i porostów",
    desc: "Skuteczna biocydowa metoda eliminacji mchu z kostki, murów i dachów.",
  },
  {
    icon: Fence,
    title: "Czyszczenie ogrodzeń",
    desc: "Mycie ogrodzeń betonowych, metalowych i drewnianych. Przywracamy świeży wygląd.",
  },
]

export function ServicesSection() {
  return (
    <section id="uslugi" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-lime">
            Oferta
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Usługi mycia i czyszczenia
          </h2>
          <p className="mt-3 text-muted-foreground">
            Kompleksowe usługi czyszczenia powierzchni wokół Twojego domu i firmy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Card
              key={s.title}
              className="group border-border bg-card transition-shadow hover:shadow-lg hover:shadow-lime/5"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 transition-colors group-hover:bg-lime/20">
                  <s.icon className="h-6 w-6 text-lime" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
