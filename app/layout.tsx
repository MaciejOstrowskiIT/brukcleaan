import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: 'BrukClean - Mycie kostki brukowej Konin | Profesjonalne czyszczenie',
  description:
    'Profesjonalne mycie kostki brukowej, czyszczenie podjazdów, tarasów i elewacji w Koninie i okolicach. Szybki termin, bezpieczna chemia, darmowa wycena. Zadzwoń!',
  keywords: [
    'mycie kostki brukowej Konin',
    'czyszczenie kostki brukowej',
    'mycie ciśnieniowe Konin',
    'czyszczenie podjazdów',
    'impregnacja kostki brukowej',
    'mycie elewacji Konin',
    'usuwanie mchu',
    'BrukClean',
  ],
  openGraph: {
    title: 'BrukClean - Mycie kostki brukowej Konin',
    description:
      'Profesjonalne mycie kostki brukowej, podjazdów, tarasów i elewacji. Konin i okolice do 30 km.',
    type: 'website',
    locale: 'pl_PL',
    /* TODO: Podmień na właściwy URL */
    url: 'https://brukclean.pl',
  },
  robots: 'index, follow',
}

export const viewport = {
  themeColor: '#2d3142',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Schema.org LocalBusiness – TODO: uzupełnij dane */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'BrukClean',
              description:
                'Profesjonalne mycie kostki brukowej, czyszczenie podjazdów, tarasów i elewacji w Koninie i okolicach.',
              telephone: '+48 726 628 743',
              email: 'kontakt@brukclean.pl',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Konin',
                addressRegion: 'Wielkopolska',
                addressCountry: 'PL',
              },
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: { '@type': 'GeoCoordinates', latitude: 52.22, longitude: 18.25 },
                geoRadius: '30000',
              },
              openingHours: 'Mo-Sa 08:00-18:00',
              /* TODO: Podmień na właściwy URL */
              url: 'https://brukclean.pl',
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
