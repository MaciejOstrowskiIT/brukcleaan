import Image from "next/image"
import { Phone, Clock, MapPin, ShieldCheck, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const BENEFITS = [
  { icon: Clock, label: "Szybki termin", desc: "Realizacja nawet w 48h" },
  { icon: MapPin, label: "Konin + okolice", desc: "Dojazd do 30 km gratis" },
  // { icon: ShieldCheck, label: "Bezpieczna chemia", desc: "Ochrona roślin i fugi" },
]

const PHONE_HREF = "tel:+48726628743"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-graphite" id="hero">
      {/* Background photo */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        preload
        className="object-cover object-center opacity-30"
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-graphite/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground drop-shadow-lg sm:text-5xl lg:text-6xl">
            Mycie ciśnieniowe{" "}
            <span className="text-blue-400 ">Konin</span> i okolice
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80 drop-shadow-sm">
            Przywracamy blask Twojej kostce, podjazdowi i tarasowi. Profesjonalny
            sprzęt, bezpieczna chemia i gwarancja dokładności. Wycena gratis
            &mdash; zadzwoń lub wypełnij formularz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={PHONE_HREF}>
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-600/90 text-base font-bold shadow-lg shadow-blue/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń teraz
              </Button>
            </a>
            <a href="#wycena">
              <Button
                size="lg"
                className="border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 text-base font-semibold"
              >
                Wycena
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Benefits mini-cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16">
          {BENEFITS.map((b) => (
            <div
              key={b.label}
              className="flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-graphite/60 p-5 backdrop-blur-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/15">
                <b.icon className="h-5 w-5 text-blue-200" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">{b.label}</p>
                <p className="text-sm text-primary-foreground/60">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
