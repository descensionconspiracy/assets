import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ACHERON',
  description: 'a character sheet for ACHERON, from HONKAI: STAR RAIL.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head><meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.bosenmori.lat/" />
            <meta property="twitter:title" content="ACHERON" />
            <meta property="twitter:description" content="a character sheet for ACHERON, from HONKAI: STAR RAIL." />
            <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" /></head>
      <body>{children}</body>
    </html>
  )
}
