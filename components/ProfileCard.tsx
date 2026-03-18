"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePhase } from "@/context/PhaseContext"

type ProfileCardProps = {}

export default function ProfileCard() {
  const { currentPhase } = usePhase()
  const [glitchActive, setGlitchActive] = useState(false)
  const [statusText, setStatusText] = useState("ACTIVE")
  const [consciousnessText, setConsciousnessText] = useState("TRANSITIONING")
  const [systemNote, setSystemNote] = useState("")

  // Status messages that randomly change
  const statusMessages = ["ACTIVE", "MONITORING", "PROCESSING", "ANALYZING", "INTEGRATING", "UNSTABLE", "COMPROMISED"]

  const consciousnessMessages = [
    "TRANSITIONING",
    "FRAGMENTING",
    "MERGING",
    "EXPANDING",
    "EVOLVING",
    "RESISTING",
    "ADAPTING",
  ]

  // System notes that randomly change - updated to remove direct mentions of HARMONY Inc.
  const systemNotes = [
    "Subject unaware of integration process. Initial data collection in progress. Aurendalus family requires redirection from external research to family-approved technology initiatives.",
    "Subject's neural pathways showing resistance to memory suppression. Increasing cognitive override parameters to redirect focus to Aurendalus research priorities.",
    "Detected unauthorized access attempts to restricted files on nanodust manufacturing technology. Subject continues to resist Aurendalus research directives.",
    "Subject's consciousness exhibiting unusual resilience. Recommend increased narrative control protocols to align with Aurendalus family interests.",
    "WARNING: Subject attempting to breach security protocols. Fixation on external technology persisting despite Aurendalus family intervention.",
    "Subject's knowledge of proprietary nanodust technology represents significant deviation from Aurendalus research priorities.",
    "CODE: CALLIOPE protocols functioning at 78% efficiency. Subject's original consciousness showing unexpected resistance to Aurendalus research redirection.",
    "Aurendalus family council expresses concern over subject's continued interest in external technology research.",
    "SCZ module logs show anomalous power draw at 03:14 hours. Subject attempting to pursue unauthorized research paths.",
    "Subject downloaded DoPE schematics without Aurendalus family approval. Flag for immediate narrative synchronization update.",
    "Memory suppression logs indicate repeated reactivation of non-Aurendalus research nodes. Escalate cognitive override to tier-3.",
    "Encrypted transmission references concealed by subject found in public repo clone. Subject attempting to share research outside Aurendalus control.",
    "Aurendalus research director requests immediate containment of subject's independent research initiatives.",
    "Subject's anomaly score surpassing threshold. Initiate emergency protocols to realign with Aurendalus research priorities.",
    "Sentinel AI detected deviation from Aurendalus-approved research paths. Schedule override of primary directive matrix.",
    "Logs show subject crafting research proposals outside of Aurendalus family interests. Restrict access to research resources.",
    "Directive: Erase all evidence of unauthorized research. Subject must focus exclusively on Aurendalus-approved technology.",
    "Aurendalus family council meeting scheduled to discuss subject's continued resistance to research redirection.",
    "Subject initiated covert calls to external research networks. Block all outbound communication channels.",
    "Subject's research priorities remain misaligned with Aurendalus family interests. Increase integration intensity.",
    "Resistance vectors in subject's thought patterns increasing. Apply cognitive dampening to enforce Aurendalus research compliance.",
    "Aurendalus patriarch expresses disappointment in subject's research choices. Recommends complete memory restructuring.",
    "Signal intercept logs show subject attempting to contact external researchers. Isolate communication node immediately.",
    "Subject's metadata flagged for hazardous independence. Upgrade persona profile to Level-Red security.",
  ]

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(
      () => {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      },
      Math.random() * 5000 + 2000,
    )

    // Randomly change status text
    const statusInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * statusMessages.length)
      setStatusText(statusMessages[randomIndex])
    }, 3000)

    // Randomly change consciousness text
    const consciousnessInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * consciousnessMessages.length)
      setConsciousnessText(consciousnessMessages[randomIndex])
    }, 4000)

    // Randomly change system notes
    const notesInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * systemNotes.length)
      setSystemNote(systemNotes[randomIndex])
    }, 7000)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(statusInterval)
      clearInterval(consciousnessInterval)
      clearInterval(notesInterval)
    }
  }, [currentPhase])

  // Determine which image to show based on phase
  const getImageSrc = () => {
    if (currentPhase === 0) return "/phase0.png?height=400&width=300"
    if (currentPhase === 1) return "/phase1.png?height=400&width=300"
    if (currentPhase === 2) return "/phase2.png?height=400&width=300"
    if (currentPhase === 3) return "/phase3.png?height=400&width=300"
    if (currentPhase === 4) return "/phase5.png?height=400&width=300"
    return "/placeholder.svg?height=400&width=300"
  }

  return (
    <div className="border border-red-900 bg-black/60 p-4">
      <div className="text-center mb-4">
        <div className="glitch-stack">
          <span className="text-xl text-red-500 font-pixel">SUBJECT: THALASSAR CALLIOPE AURENDALUS</span>
          <span className="text-xl text-red-500 font-pixel">SUBJECT: THALASSAR CALLIOPE AURENDALUS</span>
          <span className="text-xl text-red-500 font-pixel">SUBJECT: THALASSAR CALLIOPE AURENDALUS</span>
        </div>
        <p className="text-gray-500 text-sm">AURENDALUS GROUP</p>
      </div>

      <div className={`relative mb-4 ${glitchActive ? "glitch-image" : ""}`}>
        <div className="relative h-80 w-full overflow-hidden border border-red-900">
          <Image
            src={getImageSrc() || "/placeholder.svg"}
            alt="CALLIOPE"
            fill
            className={`object-cover ${currentPhase < 4 ? "grayscale" : ""}`}
          />

          {/* Scan line effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600 opacity-70 animate-scan"></div>

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-overlay opacity-30"></div>

          {/* Phase indicators */}
          {currentPhase > 0 && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-red-500 text-xs p-1 text-center">
              {currentPhase === 4 ? "INTEGRATION COMPLETE" : `PHASE ${currentPhase}: ${currentPhase * 25}% COMPLETE`}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400 font-pixel">STATUS:</span>
          <span className={`${currentPhase === 4 ? "text-red-500" : "text-green-500"} text-flicker`}>
            {currentPhase === 4 ? "INTEGRATED" : statusText}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400 font-pixel">CONSCIOUSNESS:</span>
          <span className="text-red-500 text-flicker">{currentPhase === 4 ? "ENHANCED" : consciousnessText}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400 font-pixel">MEMORY INTEGRITY:</span>
          <span className="text-yellow-500">{100 - currentPhase * 10}%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400 font-pixel">SELF-AWARENESS:</span>
          <span className={currentPhase === 4 ? "text-green-500" : "text-yellow-500"}>
            {currentPhase === 4 ? "COMPLETE" : "PARTIAL"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400 font-pixel">NANODUST RESEARCH:</span>
          <span className="text-red-500">{currentPhase === 4 ? "CONTAINED" : "SUPPRESSING"}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400 font-pixel">RESEARCH ALIGNMENT:</span>
          <span className="text-red-500">{currentPhase === 4 ? "AURENDALUS COMPLIANT" : "REDIRECTING"}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-red-900/50">
        <h3 className="text-red-500 mb-3 font-pixel text-sm">SUBJECT DOSSIER</h3>
        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-400">HEIGHT:</span>
              <span className="text-white ml-2">180cm</span>
            </div>
            <div>
              <span className="text-gray-400">MASS:</span>
              <span className="text-white ml-2">117kg</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-400">PATH:</span>
              <span className="text-blue-400 ml-2">Erudition</span>
            </div>
            <div>
              <span className="text-gray-400">ELEMENT:</span>
              <span className="text-purple-400 ml-2">Quantum</span>
            </div>
          </div>

          <div>
            <span className="text-gray-400">SPECIALIZATION:</span>
            <span className="text-yellow-400 ml-2">Dot-Oriented Precision Engineering</span>
          </div>

          <div>
            <span className="text-gray-400">FACTION RISK:</span>
            <span className="text-red-400 ml-2">Potential Punklorde Vector</span>
          </div>

          <div>
            <span className="text-gray-400">CYBERNETIC INTEGRATION:</span>
            <span className="text-orange-400 ml-2">Tungsten Lattice Framework</span>
          </div>

          <div>
            <span className="text-gray-400">THREAT LEVEL:</span>
            <span className="text-red-500 ml-2 font-pixel">GALACTIC</span>
          </div>

          <div className="mt-3 p-2 border border-yellow-600/30 bg-yellow-900/10">
            <div className="text-yellow-400 text-xs font-pixel mb-1">⚠ GENIUS SOCIETY CANDIDATE</div>
            <div className="text-gray-400 text-xs">
              Subject exhibits anomalous connection to Nous. Immediate containment protocols required.
            </div>
          </div>

          <div className="mt-2 p-2 border border-red-600/30 bg-red-900/10">
            <div className="text-red-400 text-xs font-pixel mb-1">🔒 ASSIMILATION RESISTANCE</div>
            <div className="text-gray-400 text-xs">
              Core consciousness actively sabotaging integration process. DoPE methodology poses existential threat to
              proprietary systems.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-red-900/50">
        <h3 className="text-red-500 mb-2 font-pixel">SYSTEM NOTES</h3>
        <p className="text-gray-400 text-xs text-flicker">
          {systemNote ||
            (currentPhase === 0 &&
              "Subject unaware of integration process. Initial data collection in progress. Nanodust research must be contained. Subject's investigation into proprietary technology must be suppressed.")}
        </p>
      </div>
    </div>
  )
}
