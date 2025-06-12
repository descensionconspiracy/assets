"use client"

import { useState } from "react"
import IntroScreen from "@/components/intro-screen"
import ProfilePage from "@/components/profile-page"

export default function Home() {
  const [showProfile, setShowProfile] = useState(false)

  if (showProfile) {
    return <ProfilePage onBack={() => setShowProfile(false)} />
  }

  return <IntroScreen onEnter={() => setShowProfile(true)} />
}
