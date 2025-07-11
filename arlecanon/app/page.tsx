"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  const [poemIndex, setPoemIndex] = useState(0)

  const poems = [
    "She gathered the orphans into her hearth,\nand to the wretched, she gave purpose.\nThey called her FATHER, for no other name\ncould truly capture her essence.",
    "We are children with no kin,\nthe petty servants on whom no light shines.\nIn our left hand is the shield that protects our home,\nand our right wields the sword that is the will of the polar star.",
    "The fourth's visage was both life and ruination,\nher limbs bore scars of her making,\nand her shadow stretched long across the earth,\nshielding us from a searing illumination.",
  ]

  useEffect(() => {
    const poemInterval = setInterval(() => {
      setPoemIndex((prev) => (prev + 1) % poems.length)
    }, 8000)

    return () => {
      clearInterval(poemInterval)
    }
  }, [poems.length])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-center bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black"></div>
        <div className="absolute inset-0 bg-diagonal-pattern opacity-30"></div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center px-4 py-8 text-center max-w-md">
        {
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="mb-6">
            <h1 className="main-title mb-2">THE KNAVE</h1>
            <p className="font-quote text-white/60 italic text-sm md:text-base">
              Fourth of the Fatui Harbingers, the Father of the House of the Hearth
            </p>
          </motion.div>
        }

        {
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="my-8"
          >
            <div className="relative w-96 h-96 md:w-96 md:h-96 mx-auto">
              <Image
                src="/images/arlecchino.jpg"
                alt="Arlecchino, Father of the House of Hearth"
                fill
                className="object-cover transition-all duration-700 border border-crimson/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
          </motion.div>
        }

        {
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/profile"
              className="group inline-flex items-center gap-2 text-white/70 hover:text-crimson border border-crimson/30 hover:border-crimson px-6 py-3 transition-all duration-300"
            >
              <span className="font-display tracking-wider">VIEW PROFILE</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/chapters"
              className="group inline-flex items-center gap-2 text-white/70 hover:text-crimson border border-crimson/30 hover:border-crimson px-6 py-3 transition-all duration-300"
            >
              <span className="font-display tracking-wider">ENTER THE HEARTH</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        }

        {
          <motion.div
            key={poemIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-12 max-w-xs text-center h-32"
          >
            <p className="font-quote text-white/40 text-sm italic leading-relaxed whitespace-pre-line">
              {poems[poemIndex]}
            </p>
          </motion.div>
        }
      </div>
    </div>
  )
}
