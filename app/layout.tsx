import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'EventProd — Event Productions by Rustam Tsodikov',
  description: 'Internationale Event-, Marketing- und Kreativagentur für hochwertige Erlebnisse, starke Markenauftritte und Messen weltweit.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/eventprod-favicon.png', sizes: '128x128', type: 'image/png' }],
    shortcut: '/eventprod-favicon.png',
    apple: '/eventprod-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollReveal />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
