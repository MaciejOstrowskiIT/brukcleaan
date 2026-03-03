"use client"

import {useState} from "react"
import {Phone, Send, CheckCircle} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const PHONE = "+48 726 628 743"
const PHONE_HREF = "tel:+48726628743"

const SERVICE_OPTIONS = [
  "Mycie kostki brukowej",
  "Impregnacja kostki",
  "Mycie elewacji",
  "Czyszczenie dachu",
  "Usuwanie mchu",
  "Czyszczenie ogrodzenia",
  "Inne",
]

export function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const newErrors: Record<string, string> = {}
    if (!data.get("name")) newErrors.name = "Podaj imię"
    if (!data.get("phone")) newErrors.phone = "Podaj numer telefonu"
    if (!data.get("city")) newErrors.city = "Podaj miejscowość"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    /* TODO: Podłącz wysyłkę formularza (API, email, etc.) */
    setSubmitted(true)
  }

  return (
    <section id="wycena" className="bg-graphite py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left – CTA */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-lime">
              Skontaktuj się
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Darmowa wycena
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/60">
              Wypełnij formularz lub zadzwoń &mdash; odpowiadamy najczęściej
              w ciągu kilku godzin. Wycena jest bezpłatna i niezobowiązująca.<br/>
              Wycena na miejscu możliwa po wcześniejszym uzgodnieniu.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a href={PHONE_HREF}>
                <Button
                  size="lg"
                  className="w-full bg-lime text-lime-foreground hover:bg-lime/90 text-lg font-bold shadow-lg shadow-lime/20 sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5"/>
                  Zadzwoń: {PHONE}
                </Button>
              </a>
              <p className="text-sm text-primary-foreground/40">
                biuro@brukclean.com &middot; Pon&ndash;Sob 8:00&ndash;18:00
              </p>
            </div>
          </div>

          {/* Right – Form */}
          <div
            className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-lime"/>
                <h3 className="text-xl font-bold text-primary-foreground">
                  Dziękujemy!
                </h3>
                <p className="mt-2 text-primary-foreground/60">
                  Twoje zgłoszenie zostało wysłane. Odezwiemy się najszybciej jak to możliwe.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="kontakt">
                <h3 className="text-lg font-bold text-primary-foreground">
                  Formularz wyceny
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-sm text-primary-foreground/80">
                      Imię *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jan"
                      className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400">{errors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone" className="text-sm text-primary-foreground/80">
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="600 000 000"
                      className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-400">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="city" className="text-sm text-primary-foreground/80">
                      Miejscowość *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Konin"
                      className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                    />
                    {errors.city && (
                      <span className="text-xs text-red-400">{errors.city}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="area" className="text-sm text-primary-foreground/80">
                      Powierzchnia (m²)
                    </Label>
                    <Input
                      id="area"
                      name="area"
                      type="number"
                      placeholder="np. 50"
                      className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="service" className="text-sm text-primary-foreground/80">
                    Rodzaj usługi
                  </Label>
                  <Select name="service">
                    <SelectTrigger
                      className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">
                      <SelectValue placeholder="Wybierz usługę"/>
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message" className="text-sm text-primary-foreground/80">
                    Wiadomość (opcjonalnie)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Opisz powierzchnię, dodaj szczegóły..."
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-lime text-lime-foreground hover:bg-lime/90 font-bold"
                >
                  <Send className="mr-2 h-4 w-4"/>
                  Wyślij zapytanie
                </Button>

                <p className="text-center text-xs text-primary-foreground/40">
                  Wysyłając formularz, wyrażasz zgodę na kontakt w celu przygotowania wyceny.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
