"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type PhaseContextType = {
  currentPhase: number
  setCurrentPhase: (phase: number) => void
  autoPhaseChange: boolean
  setAutoPhaseChange: (auto: boolean) => void
  startPhaseChanges: boolean
  setStartPhaseChanges: (start: boolean) => void
}

const PhaseContext = createContext<PhaseContextType | undefined>(undefined)

export function PhaseProvider({ children }: { children: React.ReactNode }) {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [autoPhaseChange, setAutoPhaseChange] = useState(true)
  const [startPhaseChanges, setStartPhaseChanges] = useState(false)

  useEffect(() => {
    let phaseInterval: NodeJS.Timeout | null = null

    if (autoPhaseChange && startPhaseChanges) {
      phaseInterval = setInterval(() => {
        setCurrentPhase((prevPhase) => {
          const nextPhase = (prevPhase + 1) % 5 // Loop from 0 to 4
          return nextPhase
        })
      }, 10000) // Change phase every 10 seconds
    }

    return () => {
      if (phaseInterval) clearInterval(phaseInterval)
    }
  }, [autoPhaseChange, startPhaseChanges])

  return (
    <PhaseContext.Provider
      value={{
        currentPhase,
        setCurrentPhase,
        autoPhaseChange,
        setAutoPhaseChange,
        startPhaseChanges,
        setStartPhaseChanges,
      }}
    >
      {children}
    </PhaseContext.Provider>
  )
}

export function usePhase() {
  const context = useContext(PhaseContext)
  if (context === undefined) {
    throw new Error("usePhase must be used within a PhaseProvider")
  }
  return context
}
