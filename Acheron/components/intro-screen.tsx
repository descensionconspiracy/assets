"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

interface IntroScreenProps {
  onEnter: (verse: "shadow" | "ghost") => void
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative overflow-hidden font-['D-DIN']">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-[10px]"
          style={{
            backgroundImage: "url('https://cdn.imgchest.com/files/7lxcppod2r7.png')",
          }}
        />
        <div
          className="absolute inset-0 opacity-50 bg-repeat"
          style={{
            backgroundImage: "url('https://cdn.imgchest.com/files/7lxcpam98b7.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Enhanced floating particles effect */}
      <div className="fixed inset-0 z-5">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 animate-pulse ${
              i % 3 === 0
                ? "w-1 h-1 bg-[#7c5cff]"
                : i % 3 === 1
                  ? "w-0.5 h-0.5 bg-[#b21919]"
                  : "w-1.5 h-1.5 bg-[#e1af8e]"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl font-bold text-[#b21919] mb-2 tracking-wider drop-shadow-lg font-['D-DIN'] animate-pulse">
              ACHERON
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#7c5cff] to-transparent mx-auto mb-4 animate-pulse" />
          </div>

          <p className="text-lg md:text-xl text-gray-300 italic mb-2 opacity-90 font-['D-DIN'] transition-all duration-500">
            <span className="text-[#b21919] transition-colors duration-300">Self-Annihilator</span> •{" "}
            <span className="text-[#7c5cff] transition-colors duration-300">Emanator of Nihility</span>
          </p>
          <p className="text-sm md:text-base text-gray-400 opacity-80 font-['D-DIN'] transition-all duration-500">
            "A wanderer who has lost her past to the{" "}
            <span className="text-[#b21919] transition-colors duration-300">Shadow of IX</span>"
          </p>
        </div>

        {/* Character Portrait */}
        <div className="relative mb-12 group">
          <div className="w-[85vw] max-w-sm aspect-square relative">
            {/* Enhanced outer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c5cff]/20 via-transparent to-[#b21919]/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#e1af8e]/10 via-transparent to-[#7c5cff]/10 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-1000 opacity-50" />

            {/* Main portrait container */}
            <div className="relative w-full h-full border-2 border-[#b21919] bg-black/60 backdrop-blur-sm overflow-hidden group-hover:border-[#7c5cff] transition-all duration-500">
              <Image
                src="https://cdn.imgchest.com/files/49zc2aml5wy.png"
                alt="Acheron"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500" />

              {/* Animated decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#7c5cff] group-hover:border-[#b21919] transition-all duration-500 group-hover:w-12 group-hover:h-12" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#7c5cff] group-hover:border-[#b21919] transition-all duration-500 group-hover:w-12 group-hover:h-12" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#7c5cff] group-hover:border-[#b21919] transition-all duration-500 group-hover:w-12 group-hover:h-12" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#7c5cff] group-hover:border-[#b21919] transition-all duration-500 group-hover:w-12 group-hover:h-12" />
            </div>
          </div>
        </div>

        {/* Verse Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            onClick={() => onEnter("shadow")}
            className="relative bg-transparent border-2 border-[#b21919] text-white hover:bg-[#b21919]/20 hover:border-[#7c5cff] hover:text-white transition-all duration-500 px-8 py-4 text-base font-semibold tracking-wider group overflow-hidden font-['D-DIN'] hover:scale-105"
          >
            {/* Enhanced button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#b21919]/0 via-[#b21919]/10 to-[#b21919]/0 group-hover:via-[#7c5cff]/20 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#7c5cff]/0 via-transparent to-[#7c5cff]/0 group-hover:via-[#b21919]/10 transition-all duration-700" />

            <span className="relative z-10 flex items-center">HIGH FANTASY/HOYOVERSE</span>
          </Button>

          <Button
            onClick={() => onEnter("ghost")}
            className="relative bg-transparent border-2 border-[#7c5cff] text-white hover:bg-[#7c5cff]/20 hover:border-[#b21919] hover:text-white transition-all duration-500 px-8 py-4 text-base font-semibold tracking-wider group overflow-hidden font-['D-DIN'] hover:scale-105"
          >
            {/* Enhanced button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c5cff]/0 via-[#7c5cff]/10 to-[#7c5cff]/0 group-hover:via-[#b21919]/20 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#b21919]/0 via-transparent to-[#b21919]/0 group-hover:via-[#7c5cff]/10 transition-all duration-700" />

            <span className="relative z-10 flex items-center">LOW FANTASY/SPN/URBAN</span>
          </Button>
        </div>

        <div className="max-w-3xl text-center relative">
          <div className="relative min-h-[60px] flex items-center justify-center">
            <div className="text-gray-300 italic leading-relaxed text-base md:text-lg font-['D-DIN'] relative z-10">
              <a
                className="meicolor group-hover:text-[#b21919] transition-all duration-500 hover:opacity-80"
                href="https://www.aniroleplay.com/status_stream.php?member_id=638522"
              >
                Or cross the stream of the Acheron River.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
