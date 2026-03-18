import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Mono, Press_Start_2P } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
// Add the PhaseProvider to the layout to make it available throughout the app
// Import the PhaseProvider
import { PhaseProvider } from "@/context/PhaseContext"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
})

const pressStart2P = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
})

// Update metadata to reflect new project name

export const metadata: Metadata = {
  title: "CODE: ANANKE - Consciousness Integration",
  description: "Aurendalus Family Initiative",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Wrap the children with the PhaseProvider
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${pressStart2P.variable} font-mono`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PhaseProvider>{children}</PhaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
