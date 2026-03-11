import { Check, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const PRICES = [
  {
    service: "Mycie kostki brukowej",
    price: "od 10 zł/m²",
    includes: ["Mycie ciśnieniowe", "Usuwanie brudu i nalotów", "Usuwanie mchów"],
    popular: true,
  },
  {
    service: "Impregnacja",
    price: "od 15 zł/m²",
    includes: ["Nałożenie impregnatu", "Ochrona przed zabrudzeniami", "Efekt na lata"],
    popular: false,
  },
  {
    service: "Mycie elewacji",
    price: "od 15 zł/m²",
    includes: ["Bezpieczne mycie niskim ciśnieniem", "Mycie ciepłą wodą", "Zabezpieczenie elementów wrażliwych"],
    popular: false,
  },
  // {
  //   service: "Usuwanie mchu",
  //   price: "od 10 zł/m²",
  //   includes: ["Aplikacja biocydu", "Mechaniczne usuwanie", "Profilaktyka"],
  //   popular: false,
  // },
]

export function PricingSection() {
  return (
    <section id="cennik" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Cennik
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Orientacyjne ceny usług
          </h2>
          <p className="mt-3 text-muted-foreground">
            Finalna cena zależy od stopnia zabrudzenia, rodzaju powierzchni i metrażu.
            Wycena zawsze gratis!
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRICES.map((p) => (
            <Card
              key={p.service}
              className={`relative border-border bg-card transition-shadow hover:shadow-lg ${
                p.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-md font-bold text-white">
                  Najpopularniejsze
                </div>
              )}
              <CardContent className="flex flex-col p-6">
                <h3 className="text-base font-semibold text-card-foreground">{p.service}</h3>
                <p className="mt-2 text-2xl font-extrabold text-foreground">{p.price}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-blue-600" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <a href="#wycena" className="mt-6">
                  <Button
                    variant={p.popular ? "default" : "outline"}
                    className={`w-full ${
                      p.popular
                        ? "bg-blue-600 text-white hover:bg-blue-400/90"
                        : "border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    Zapytaj o cenę
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-2 rounded-xl bg-card p-4 text-sm text-muted-foreground shadow-sm">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
          <p>
            Podane ceny mają charakter orientacyjny. Ostateczna wycena jest zawsze
            indywidualna i zależy od stanu powierzchni, dostępności oraz metrażu.
            <strong className="text-foreground"> Wycena jest bezpłatna i niezobowiązująca.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
