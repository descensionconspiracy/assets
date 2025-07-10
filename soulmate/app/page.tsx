"use client"

import { useState } from "react"
import IntroScreen from "@/components/intro-screen"
import ProfilePage from "@/components/profile-page"

export default function Home() {
  const [currentView, setCurrentView] = useState<"intro" | "profile">("intro")
  const [selectedVerse, setSelectedVerse] = useState<"shadow" | "ghost">("shadow")

  const handleEnterVerse = (verse: "shadow" | "ghost") => {
    setSelectedVerse(verse)
    setCurrentView("profile")
  }

  const handleBackToIntro = () => {
    setCurrentView("intro")
  }

  if (currentView === "profile") {
    return <ProfilePage onBack={handleBackToIntro} verse={selectedVerse} />
  }

  return <IntroScreen onEnter={handleEnterVerse} />
}
