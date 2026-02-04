import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Notaris PPAT Bandung Antapani Arcamanik | Yuliany Idawati, S.H.',
  description: 'Notaris PPAT terpercaya di Bandung, Antapani, Arcamanik. Layanan notaris, akta tanah, pendirian PT/CV, wasiat di Bandung Timur. Konsultasi gratis.',
  keywords: [
    'notaris bandung',
    'ppat bandung', 
    'notaris antapani',
    'ppat antapani',
    'notaris arcamanik',
    'ppat arcamanik',
    'notaris bandung timur',
    'akta tanah bandung',
    'pendirian pt bandung',
    'wasiat bandung',
    'yuliani idawati',
    'notaris terdekat'
  ],
  authors: [{ name: 'Yuliani Idawati, S.H., Sp.N.' }],
  creator: 'Yuliani Idawati, S.H., Sp.N.',
  publisher: 'Kantor Notaris Yuliani Idawati',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://notaris-yuliany.com',
    siteName: 'Notaris PPAT Yuliani Idawati',
    title: 'Notaris PPAT Bandung Antapani Arcamanik | Yuliani Idawati, S.H., Sp.N.',
    description: 'Notaris PPAT terpercaya di Bandung, Antapani, Arcamanik. Layanan notaris, akta tanah, pendirian PT/CV, wasiat di Bandung Timur. Konsultasi gratis.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Notaris PPAT Yuliani Idawati Bandung',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notaris PPAT Bandung Antapani Arcamanik | Yuliany Idawati, S.H., Sp.N.',
    description: 'Notaris PPAT terpercaya di Bandung, Antapani, Arcamanik. Layanan notaris, akta tanah, pendirian PT/CV.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://notaris-yuliany.com',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Kantor Notaris Yuliani Idawati, S.H., Sp.N.",
              "description": "Notaris PPAT terpercaya di Bandung, Antapani, Arcamanik. Melayani akta tanah, pendirian perusahaan, wasiat dan layanan notaris lainnya.",
              "url": "https://notaris-yuliany.com",
              "telephone": "+62-22-1234567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jalan Antapani",
                "addressLocality": "Bandung",
                "addressRegion": "Jawa Barat",
                "postalCode": "40291",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.914744,
                "longitude": 107.614952
              },
              "areaServed": ["Bandung", "Antapani", "Arcamanik", "Bandung Timur"],
              "serviceType": ["Notaris", "PPAT", "NPAK"],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 08:00-17:00",
              "founder": {
                "@type": "Person",
                "name": "Yuliani Idawati, S.H., Sp.N.",
                "jobTitle": "Notaris PPAT"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
