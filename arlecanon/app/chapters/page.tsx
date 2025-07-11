"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, Info } from "lucide-react"

export default function ChaptersPage() {
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null)

  const chapters = [
    {
      id: "hearth",
      title: "THE HOUSE OF THE HEARTH",
      description: "Fontaine's most secretive institution",
      quote: "A sanctuary for the abandoned, a forge for the Fatui",
    },
    {
      id: "father",
      title: "THE FATHER",
      description: "Arlecchino's rise to power",
      quote: "From orphan to Harbinger, a path paved in blood",
    },
    {
      id: "journal",
      title: "FATHER'S JOURNAL",
      description: "Personal reflections",
      quote: "The children must be stronger than I was",
    },
    {
      id: "rules",
      title: "RULES OF THE HEARTH",
      description: "Order and discipline",
      quote: "Remember the names and stories of your siblings",
    },
    {
      id: "agenda",
      title: "FATHER'S AGENDA",
      description: "Diplomatic obligations",
      quote: "Public smiles mask private purposes",
    },
    {
      id: "testimonials",
      title: "TESTIMONIALS",
      description: "The children speak",
      quote: "The hearthfire keeps us warm",
    },
    {
      id: "connections",
      title: "CONNECTIONS",
      description: "Allies and adversaries",
      quote: "Trust few, observe all, prepare always",
    },
    {
      id: "credits",
      title: "CREDITS & RULES",
      description: "Image sources & roleplay guidelines",
      quote: "Where potential is nurtured under the Father's guidance",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-center bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black"></div>
        <div className="absolute inset-0 bg-diagonal-pattern opacity-30"></div>
      </div>

      <header className="z-10 p-4 md:p-6 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-crimson transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display text-sm tracking-wider">RETURN</span>
        </Link>

        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-white/70 hover:text-crimson transition-colors"
        >
          <span className="font-display text-sm tracking-wider">PROFILE</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </header>

      <main className="z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <h1 className="main-title mb-8 text-center">ARCHIVES</h1>

          <div className="space-y-4">
            {chapters.map((chapter) => (
              <Link key={chapter.id} href={`/chapters/${chapter.id}`}>
                <motion.div
                  className="border border-crimson/30 hover:border-crimson p-4 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setHoveredChapter(chapter.id)}
                  onMouseLeave={() => setHoveredChapter(null)}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-display text-xl text-white group-hover:text-crimson transition-colors">
                        {chapter.title}
                      </h2>
                      <p className="text-white/60 text-sm mt-1 font-quote">{chapter.description}</p>
                    </div>
                    <div className="text-crimson">
                      {chapter.id === "credits" ? <Info className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </div>

                  {hoveredChapter === chapter.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 pt-3 border-t border-crimson/20"
                    >
                      <p className="text-white/40 text-sm italic font-quote">{chapter.quote}</p>
                    </motion.div>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
