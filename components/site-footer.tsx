import { Phone, Mail, MapPin, Clock } from "lucide-react"

const PHONE = "+48 726 628 743"
const EMAIL = "biuro@brukclean.com"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-graphite">
                <span className="text-sm font-bold text-blue-600">BC</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Bruk<span className="text-blue-600">Clean</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Profesjonalne mycie kostki brukowej, elewacji i podjazdów w Koninie
              i okolicach. Uczciwie, lokalnie, dokładnie.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground">Nawigacja</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {[
                { label: "Usługi", href: "#uslugi" },
                { label: "Realizacje", href: "#realizacje" },
                { label: "Cennik", href: "#cennik" },
                { label: "Opinie", href: "#opinie" },
                { label: "FAQ", href: "#faq" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground">Usługi</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {[
                "Mycie kostki brukowej",
                "Impregnacja kostki",
                "Mycie elewacji",
                "Czyszczenie dachów",
                "Usuwanie mchu",
                "Czyszczenie ogrodzeń",
              ].map((s) => (
                <li key={s} className="text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground">Kontakt</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-blue-600" />
                {PHONE}
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-blue-600" />
                {EMAIL}
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-blue-600" />
                Konin, Wielkopolska
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-blue-600" />
                Pon&ndash;Sob 8:00&ndash;18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} BrukClean. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            {/* TODO: Podmień na właściwe linki */}
            <a href="#" className="transition-colors hover:text-foreground">
              Polityka prywatności
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
