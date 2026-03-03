import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    name: "Anna K.",
    location: "Konin",
    rating: 5,
    text: "Podjazd wygląda jak nowy! Panowie przyjechali na czas, byli bardzo dokładni. Polecam każdemu.",
  },
  {
    name: "Marek W.",
    location: "Stare Miasto",
    rating: 5,
    text: "Kostka była cała zielona od mchu. Po myciu nie do poznania. Impregnacja na koniec to świetny pomysł.",
  },
  {
    name: "Katarzyna L.",
    location: "Golina",
    rating: 5,
    text: "Profesjonalna obsługa od A do Z. Wycena dokładna, termin dotrzymany, efekt powalający.",
  },
  {
    name: "Tomasz P.",
    location: "Ślesin",
    rating: 4,
    text: "Bardzo dobry kontakt i uczciwa cena. Elewacja domu odzyskała dawny blask. Na pewno wrócę.",
  },
  {
    name: "Ewa M.",
    location: "Rychwał",
    rating: 5,
    text: "Szybka wycena, szybka realizacja. Chodnik i ogrodzenie wyglądają fantastycznie. Gorąco polecam!",
  },
  {
    name: "Piotr S.",
    location: "Kazimierz Biskupi",
    rating: 5,
    text: "Obawiałem się o fugę, ale panowie wiedzieli co robią. Kostka czysta, fuga cała. Super robota!",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-lime text-lime" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="opinie" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-lime">
            Opinie klientów
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Co mówią nasi klienci
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-muted-foreground">
            <StarRating rating={5} />
            <span className="text-sm font-semibold text-foreground">4.95/5</span>
            <span className="text-sm">na podstawie 47 opinii</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="border-border bg-card">
              <CardContent className="p-6">
                <StarRating rating={t.rating} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/10 text-sm font-bold text-lime">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
