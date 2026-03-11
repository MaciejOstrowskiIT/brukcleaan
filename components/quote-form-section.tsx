"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { Phone, Send, CheckCircle, ImagePlus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
  "Mycie elewacji",
  "Mycie tarasów",
  "Mycie bram i ogrodzeń",
  "Mycie hal i obiektów",
  "Czyszczenie maszyn budowlanych",
  "Czyszczenie maszyn rolniczych",
  "Inne",
]

const MAX_PHOTOS = 5
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

export function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [photos, setPhotos] = useState<{ file: File; preview: string }[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const addPhotos = useCallback(
    (files: FileList | null) => {
      if (!files) return
      const newPhotos: { file: File; preview: string }[] = []
      for (const file of Array.from(files)) {
        if (!file.type.startsWith("image/")) continue
        if (file.size > MAX_FILE_SIZE) continue
        if (photos.length + newPhotos.length >= MAX_PHOTOS) break
        newPhotos.push({ file, preview: URL.createObjectURL(file) })
      }
      setPhotos((prev) => [...prev, ...newPhotos])
    },
    [photos.length]
  )

  const removePhoto = useCallback((index: number) => {
    setPhotos((prev) => {
      const updated = [...prev]
      URL.revokeObjectURL(updated[index].preview)
      updated.splice(index, 1)
      return updated
    })
  }, [])

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
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
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
                  className="w-full bg-blue-600 text-white hover:bg-blue-600/90 text-lg font-bold shadow-lg shadow-lime/20 sm:w-auto"
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
          <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-blue-600" />
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">

                      <Label htmlFor="service" className="text-sm text-primary-foreground/80">
                        Rodzaj usługi
                      </Label>
                      <Select name="service">
                        <SelectTrigger className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">
                          <SelectValue placeholder="Wybierz usługę" />
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

                      <Label htmlFor="service" className="text-sm text-primary-foreground/80">
                        Adres email *
                      </Label>
                      <Input
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="np. biuro@brukclean.com"
                        className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                      />
                    </div>

                  </div>

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

                {/* Photo upload */}
                <div className="flex flex-col gap-2">
                  <Label className="text-sm text-primary-foreground/80">
                    Zdjęcia powierzchni * (maks. {MAX_PHOTOS})
                  </Label>

                  {photos.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {photos.map((photo, i) => (
                        <div
                          key={photo.preview}
                          className="group relative h-20 w-20 overflow-hidden rounded-lg border border-primary-foreground/20"
                        >
                          <Image
                            src={photo.preview}
                            alt={`Zdjecie ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(i)}
                            className="absolute top-0.5 right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-graphite/80 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100"
                            aria-label={`Usun zdjecie ${i + 1}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {photos.length < MAX_PHOTOS && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground/50 transition-colors hover:border-blue-600/40 hover:text-blue-600"
                    >
                      <ImagePlus className="h-4 w-4" />
                      Dodaj zdjecia
                    </button>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="sr-only"
                    onChange={(e) => {
                      addPhotos(e.target.files)
                      e.target.value = ""
                    }}
                  />

                  <p className="text-sm text-primary-foreground/70">
                    JPG, PNG do 10 MB. Zdjęcia pomagają w dokładnej wycenie.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 text-white hover:bg-blue-600/90 font-bold"
                >
                  <Send className="mr-2 h-4 w-4" />
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
