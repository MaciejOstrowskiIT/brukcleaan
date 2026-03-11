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
    q: "Czy można myć kostkę zimą?",
    a: "Nie. Mycie ciśnieniowe wykonujemy od marca do listopada. Przy temperaturze poniżej 5°C woda może zamarzać, co utrudnia pracę i pogarsza efekt.",
  },
  {
    q: "Czy warto impregnować kostkę po myciu?",
    a: "Tak, warto zaimpregnować kostkę brukową po umyciu. Zabieg ten tworzy hydrofobową powłokę, która chroni przed wnikaniem wilgoci (zmniejszając ryzyko pękania zimą), tłuszczami, olejami oraz plamami. Dodatkowo impregnacja ogranicza porastanie mchem i chwastami, zapobiega blaknięciu koloru, ułatwia czyszczenie oraz utrwala efekt czystej nawierzchni na lata.",
  },
  {
    q: "Jaki jest zasięg dojazdu?",
    a: "Działamy w Koninie i okolicach do ok. 30 km — czyli m.in. Stare Miasto, Golina, Rychwał, Ślesin, Kazimierz Biskupi. Dojazd w tym zakresie jest bezpłatny. Powyżej 30 km dojazd jest odpłatny.",
  },
  {
    q: "Czy usuwacie plamy oleju z kostki?",
    a: "Tak, stosujemy specjalne środki do odtłuszczania. Skuteczność zależy od głębokości wniknięcia oleju. Świeże plamy usuwamy niemal w 100%.",
  },
  {
    q: "Ile kosztuje wycena?",
    a: "Wycena jest zawsze bezpłatna i niezobowiązująca. Wystarczy zadzwonić lub wypełnić formularz wraz ze zdjęciami — odpowiadamy najczęściej w ciągu kilku godzin.",
  },
  {
    q: "Czy muszę być w domu podczas mycia?",
    a: "Nie zawsze. Obecność właściciela jest wskazana podczas oględzin i wyceny. Do realizacji usługi potrzebujemy jedynie dostępu do powierzchni oraz źródła wody. Po zakończeniu prac kontaktujemy się telefonicznie.",  },
  {
    q: "Jakich myjek używacie?",
    a: "Korzystamy z wydajnych myjek spalinowych oraz myjki gorącowodnej, co pozwala nam skutecznie usuwać nawet trudne zabrudzenia. Pracujemy również z dodatkowymi urządzeniami, takimi jak talerze do mycia kostki czy odkurzacz do zbierania zanieczyszczeń po myciu, dzięki czemu usługa jest dokładniejsza i bardziej efektywna.",
  },
  {
    q: "Czy po myciu powierzchnia jest śliska?",
    a: "Tak, bezpośrednio po myciu kostka może być śliska. Prosimy o ostrożność i nieużywanie powierzchni przez ok. 2–4 godziny. Pełne schnięcie trwa 24–48h, zależnie od warunków pogodowych.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            FAQ
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Najczęściej zadawane pytania
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-md font-bold text-foreground hover:text-blue-600 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-md leading-relaxed text-shadow-black">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
