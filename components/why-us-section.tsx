import {
  Wrench,
  Award,
  Clock,
  Leaf,
  Target,
  AlertTriangle,
} from "lucide-react"

const REASONS = [
  {
    icon: Wrench,
    title: "Profesjonalny sprzęt",
    desc: "Korzystamy z myjek ciśnieniowych renomowanych marek z regulacją ciśnienia.",
  },
  {
    icon: Award,
    title: "Doświadczenie",
    desc: "Setki umytych metrów kwadratowych. Znamy każdy rodzaj kostki i zabrudzenia.",
  },
  {
    icon: Clock,
    title: "Terminowość",
    desc: "Umawiamy konkretny termin i go dotrzymujemy. Szanujemy Twój czas.",
  },
  {
    icon: Leaf,
    title: "Zabezpieczenie otoczenia",
    desc: "Chronimy rośliny, elewację i elementy wrażliwe przed uszkodzeniem.",
  },
  {
    icon: Target,
    title: "Dokładność",
    desc: "Nie zostawiamy niedokończonej pracy. Doczyszczamy każdy detal.",
  },
]

export function WhyUsSection() {
  return (
    <section className="bg-graphite py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">
            Zaufaj profesjonalistom
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Dlaczego BrukClean?
          </h2>
          <p className="mt-3 text-primary-foreground/60">
            Łączymy lokalne podejście z profesjonalnym podejściem do każdego zlecenia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/15">
                <r.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/60">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Safety warning card */}
          <div className="flex items-start gap-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-500/20">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">Ważne informacje</h3>
              <p className="mt-1 text-sm leading-relaxed text-primary-foreground/60">
                Po myciu powierzchnia może być śliska przez kilka godzin.
                Pełne schnięcie trwa 24&ndash;48h w zależności od pogody.
                Prosimy o ostrożność.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
