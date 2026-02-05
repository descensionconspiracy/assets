"use client"

import { useState } from "react"
import IntroScreen from "@/components/intro-screen"
import ProfilePage from "@/components/profile-page"

export default function Home() {
  const [currentView, setCurrentView] = useState<"intro" | "profile">("intro")

  const handleEnter = () => {
    setCurrentView("profile")
  }

  const handleBackToIntro = () => {
    setCurrentView("intro")
  }

  if (currentView === "profile") {
    return <ProfilePage onBack={handleBackToIntro} />
  }

  return <IntroScreen onEnter={handleEnter} />
}
