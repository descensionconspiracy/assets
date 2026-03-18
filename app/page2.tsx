"use client"

import { useState, useEffect } from "react"
import ProfileCard from "@/components/ProfileCard"
import AudioPlayer from "@/components/AudioPlayer"
import { Tabs, TabsList } from "@/components/ui/tabs"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showWarning, setShowWarning] = useState(true)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    // Glitch effect at random intervals
    const glitchInterval = setInterval(
      () => {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      },
      Math.random() * 10000 + 5000,
    )

    return () => {
      clearTimeout(timer)
      clearInterval(glitchInterval)
    }
  }, [])

  const handlePhaseChange = (phase: number) => {
    setCurrentPhase(phase)
  }

  const acceptTerms = () => {
    setTermsAccepted(true)
    setShowWarning(false)
  }

  // Only render the main content if terms are accepted
  const renderMainContent = () => {
    if (!termsAccepted) return null

    return (
      <div className={`container mx-auto p-4 relative ${isGlitching ? "glitch-container" : ""}`}>
        <header className="mb-8 pt-6">
          <div className="glitch-stack text-center">
            <span className="text-5xl font-bold text-red-500 font-pixel">CODE: ANANKE</span>
            <span className="text-5xl font-bold text-red-500 font-pixel">CODE: ANANKE</span>
            <span className="text-5xl font-bold text-red-500 font-pixel">CODE: ANANKE</span>
          </div>
          <p className="text-center text-gray-500 mt-2 font-pixel">TRANSHUMAN CONSCIOUSNESS INTEGRATION v2.7.3</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ProfileCard currentPhase={currentPhase} />
            <div className="mt-6">
              <AudioPlayer />
            </div>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="necromancy" className="w-full">
              <TabsList className="gri\
\
