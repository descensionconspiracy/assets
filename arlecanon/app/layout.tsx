import type React from "react"
import type { Metadata } from "next"
import { Alice, Alegreya, Vollkorn } from "next/font/google"
import "./globals.css"

// Load Alice font for main titles
const alice = Alice({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alice",
})

// Load Alegreya font for quotes and subtexts
const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
})

// Load Vollkorn font for all other text
const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-vollkorn",
})

export const metadata: Metadata = {
  title: "THE KNAVE | Fourth of the Fatui Harbingers",
  description: "Where potential is nurtured under the Father's guidance.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${alice.variable} ${alegreya.variable} ${vollkorn.variable} font-body`}>{children}</body>
    </html>
  )
}
