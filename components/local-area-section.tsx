import { MapPin } from "lucide-react"

const AREAS = [
  "Konin",
  "Stare Miasto",
  "Golina",
  "Rychwał",
  "Ślesin",
  "Kazimierz Biskupi",
  "Kleczew",
  "Skulsk",
  "Wilczyn",
  "Kramsk",
  "Grodziec",
  "Rzgów",
]

export function LocalAreaSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Zasięg działania
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mycie kostki brukowej &mdash; Konin i okolice
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Obsługujemy Konin oraz miejscowości w promieniu ok. 30 km. Dojazd
              w tym zakresie jest bezpłatny. Jeśli jesteś dalej &mdash; napisz,
              na pewno się dogadamy!
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  <MapPin className="h-3.5 w-3.5 text-blue-600" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="overflow-hidden rounded-xl border border-border">
            {/* TODO: Podmień src na właściwy embed Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78104.5736476!2d18.17!3d52.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a5a63f59ac9a7%3A0x5f28ee8deebcf81e!2sKonin!5e0!3m2!1spl!2spl!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - BrukClean Konin"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
