import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    q: "Ile trwa mycie kostki brukowej?",
    a: "Czas zależy od powierzchni i stopnia zabrudzenia. Standardowy podjazd (30–50 m²) zajmuje nam ok. 3–5 godzin. Przy większych zleceniach wracamy kolejnego dnia.",
  },
  {
    q: "Czy mycie ciśnieniowe niszczy fugę?",
    a: "Nie, jeśli wykonuje je profesjonalista. Stosujemy odpowiednie ciśnienie i dysze, które skutecznie czyszczą, ale nie uszkadzają fugi ani kostki.",
  },
  {
    q: "Czy można myć kostkę zimą?",
    a: "Mycie ciśnieniowe wykonujemy od marca do listopada. Przy temperaturze poniżej 5°C woda może zamarzać, co utrudnia pracę i pogarsza efekt.",
  },
  {
    q: "Czy warto impregnować kostkę po myciu?",
    a: "Zdecydowanie tak. Impregnacja chroni kostkę przed ponownym wrastaniem mchu, plamami oleju i wnikaniem wilgoci. Efekt utrzymuje się 2–4 lata.",
  },
  {
    q: "Jaki jest zasięg dojazdu?",
    a: "Działamy w Koninie i okolicach do ok. 30 km — czyli m.in. Stare Miasto, Golina, Rychwał, Ślesin, Kazimierz Biskupi. Dojazd w tym zakresie jest bezpłatny.",
  },
  {
    q: "Czy usuwacie plamy oleju z kostki?",
    a: "Tak, stosujemy specjalne środki do odtłuszczania. Skuteczność zależy od głębokości wniknięcia oleju. Świeże plamy usuwamy niemal w 100%.",
  },
  {
    q: "Ile kosztuje wycena?",
    a: "Wycena jest zawsze bezpłatna i niezobowiązująca. Wystarczy zadzwonić lub wypełnić formularz — odpowiadamy najczęściej w ciągu kilku godzin.",
  },
  {
    q: "Czy muszę być w domu podczas mycia?",
    a: "Nie koniecznie. Wystarczy, że zapewnisz dostęp do powierzchni i źródła wody. Po zakończeniu pracy kontaktujemy się telefonicznie.",
  },
  {
    q: "Jakich myjek używacie?",
    a: "Pracujemy na profesjonalnych myjkach ciśnieniowych z regulacją ciśnienia (do 250 bar). Dobieramy dysze i parametry do rodzaju powierzchni.",
  },
  {
    q: "Czy po myciu powierzchnia jest śliska?",
    a: "Tak, bezpośrednio po myciu kostka może być śliska. Prosimy o ostrożność i nieużywanie powierzchni przez ok. 2–4 godziny. Pełne schnięcie trwa 24–48h.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-lime">
            FAQ
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Najczęściej zadawane pytania
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-lime hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
