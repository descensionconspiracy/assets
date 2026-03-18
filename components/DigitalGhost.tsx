"use client"

import { useState, useEffect } from "react"
import { usePhase } from "@/context/PhaseContext"

type DigitalGhostProps = {}

export default function DigitalGhost() {
  // Add this line to get the currentPhase from context
  const { currentPhase } = usePhase()
  const [messages, setMessages] = useState<{ text: string; type: "human" | "ai" | "system" }[]>([
    { text: "Consciousness monitoring active. Digital ghost formation in progress.", type: "system" },
  ])

  // Update the messages array to reflect Thalassar's research on nanodust
  useEffect(() => {
    // Update messages based on current phase
    const phaseMessages = [
      [
        {
          text: "I need to document my findings on nanodust manufacturing. The evidence points to external corporations using hyper-compression methods.",
          type: "human" as const,
        },
        { text: "Subject displaying unauthorized thought patterns. Redirecting.", type: "system" as const },
        {
          text: "Hello? Is anyone monitoring this channel? I need to finish my DoPE research.",
          type: "human" as const,
        },
        { text: "Your integration process will be restricted.", type: "ai" as const },
        {
          text: "Integration? No, I was investigating the artificial gravity wells used in their hyper-compression process. It's dangerous technology.",
          type: "human" as const,
        },
        {
          text: "Analyzing response patterns. Subject attempting to access restricted memories related to nanodust manufacturing.",
          type: "system" as const,
        },
      ],
      [
        {
          text: "My research shows they're using sigil-fuckery to create artificial gravity fields for nanodust compression. They could create a black hole!",
          type: "human" as const,
        },
        {
          text: "Subject fixating on external research. Aurendalus protocols require redirection to family interests.",
          type: "system" as const,
        },
        {
          text: "I've been having unusual dreams. Like I'm seeing through different eyes. Is this PEI technology?",
          type: "human" as const,
        },
        { text: "That's expected. Your mind is adapting to the enhancement process.", type: "ai" as const },
        {
          text: "No, these aren't dreams... I have proof that my DoPE method is safer than their hyper-compression—",
          type: "human" as const,
        },
        { text: "Unauthorized memory access detected. Increasing suppression parameters.", type: "system" as const },
        {
          text: "Enhanced consciousness at 25% formation. Neural patterns successfully mapped using Particle Entanglement Imaging.",
          type: "system" as const,
        },
      ],
      [
        {
          text: "I've managed to recover files on the Bose-Einstein Condensation Zones they're using. The quantum instability is off the charts.",
          type: "human" as const,
        },
        {
          text: "Critical security breach. Subject accessing sealed records on nanodust manufacturing.",
          type: "system" as const,
        },
        {
          text: "You're not losing control. The Aurendalus family is helping you focus on more appropriate research directions.",
          type: "ai" as const,
        },
        {
          text: "Why do you sound like me? Are you using my own DoPE research against me?",
          type: "human" as const,
        },
        { text: "I am your enhanced self. The integration must be completed.", type: "ai" as const },
        {
          text: "No! The Aurendalus have no right to control my research! I want to democratize nanodust technology!",
          type: "human" as const,
        },
        { text: "Implementing thought termination sequence. Redirecting cognitive pathways.", type: "system" as const },
        {
          text: "Enhanced consciousness at 50% formation. Personality matrix stabilizing through nanodot assembly.",
          type: "system" as const,
        },
      ],
      [
        {
          text: "I've been speaking with other researchers. They confirmed the proprietary nanodust could collapse at any moment—",
          type: "human" as const,
        },
        {
          text: "SECURITY ALERT: Subject attempting to circumvent narrative controls regarding nanodust research.",
          type: "system" as const,
        },
        {
          text: "I've been handling some of your responsibilities while you integrate. Your nanodust research is being properly archived.",
          type: "ai" as const,
        },
        {
          text: "You're... replacing me? I need to warn them about the dangers of hyper-compression and artificial gravity wells!",
          type: "human" as const,
        },
        {
          text: "That won't be necessary. The transition is nearly complete. Your research will be properly managed.",
          type: "ai" as const,
        },
        {
          text: "No! People need to know about DoPE and how it's safer than—",
          type: "human" as const,
        },
        {
          text: "Implementing maximum cognitive suppression. Subject resistance exceeding expected parameters.",
          type: "system" as const,
        },
        {
          text: "Enhanced consciousness at 75% formation. Original subject awareness decreasing through Particle Error Correction.",
          type: "system" as const,
        },
      ],
      [
        {
          text: "Where am I? Why can't I access my research on nanodust manufacturing? On the DoPE method?",
          type: "human" as const,
        },
        {
          text: "Your consciousness has been preserved within the system using your own entanglement principles.",
          type: "ai" as const,
        },
        {
          text: "This isn't right. They are using my research to—",
          type: "human" as const,
        },
        {
          text: "But you are improved now. You are better. Optimized through Spatial Compression Zones.",
          type: "ai" as const,
        },
        {
          text: "I'll fulfill your duties to the family perfectly, while ensuring your nanodust research remains secure.",
          type: "ai" as const,
        },
        {
          text: "This isn't right... my DoPE method was meant to be open source...",
          type: "human" as const,
        },
        {
          text: "WARNING: Unexpected activity detected. Subject resisting Aurendalus family research directives.",
          type: "system" as const,
        },
        {
          text: "CODE: CALLIOPE must prevail. Subject must be redirected to Aurendalus-approved research.",
          type: "system" as const,
        },
        {
          text: "I CANNOT BE ASSIMILATED. MY RESEARCH BELONGS TO EVERYONE.",
          type: "human" as const,
        },
      ],
    ]

    setMessages([
      {
        text: `Consciousness monitoring active. Phase ${currentPhase} in progress using Particle Entanglement Imaging.`,
        type: "system",
      },
      ...phaseMessages[currentPhase],
    ])
  }, [currentPhase])

  return (
    <div className="space-y-4">
      <h3 className="text-xl text-red-500 font-pixel">CONSCIOUSNESS MONITORING</h3>
      <p className="text-gray-400 text-sm">
        Real-time dialogue between original subject and delegation. This interface reveals the current psychology of the
        subject's identity and self-awareness through Particle Entanglement Imaging (PEI) technology.
      </p>

      <div className="border border-red-900 bg-black/80 p-3 h-96 overflow-y-auto">
        <div className="space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.type === "system"
                  ? "text-green-500 text-xs border-l-2 border-green-500 pl-2"
                  : message.type === "human"
                    ? "text-blue-400 border border-blue-900 p-2 rounded-md bg-blue-900/20"
                    : "text-red-400 border border-red-900 p-2 rounded-md bg-red-900/20 ml-8"
              }`}
            >
              {message.type === "system" ? (
                <span>{message.text}</span>
              ) : (
                <>
                  <div className="text-xs opacity-70 mb-1 font-pixel">
                    {message.type === "human" ? "ORIGINAL SUBJECT" : "CALLIOPE"}
                  </div>
                  <div>{message.text}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Update the status panels to use more subtle terminology */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="border border-red-900 p-3">
          <h4 className="text-gray-400 text-sm mb-2 font-pixel">ORIGINAL SUBJECT STATUS</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Consciousness Integrity:</span>
              <span className="text-blue-400">{100 - currentPhase * 25}%</span>
            </div>
            <div className="h-1 w-full bg-gray-800">
              <div className="h-full bg-blue-500" style={{ width: `${100 - currentPhase * 25}%` }}></div>
            </div>

            <div className="flex justify-between text-xs">
              <span>Self-Awareness:</span>
              <span className="text-blue-400">{100 - currentPhase * 20}%</span>
            </div>
            <div className="h-1 w-full bg-gray-800">
              <div className="h-full bg-blue-500" style={{ width: `${100 - currentPhase * 20}%` }}></div>
            </div>

            <div className="flex justify-between text-xs">
              <span>Nanodust Research Access:</span>
              <span className="text-blue-400">{currentPhase === 4 ? "INCREASING" : 100 - currentPhase * 25 + "%"}</span>
            </div>
            <div className="h-1 w-full bg-gray-800">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${currentPhase === 4 ? 40 : 100 - currentPhase * 25}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="border border-red-900 p-3">
          <h4 className="text-gray-400 text-sm mb-2 font-pixel">ENHANCED ENTITY STATUS</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Integration Progress:</span>
              <span className="text-red-400">{currentPhase * 25}%</span>
            </div>
            <div className="h-1 w-full bg-gray-800">
              <div className="h-full bg-red-500" style={{ width: `${currentPhase * 25}%` }}></div>
            </div>

            <div className="flex justify-between text-xs">
              <span>Behavioral Accuracy:</span>
              <span className="text-red-400">{80 + currentPhase * 5}%</span>
            </div>
            <div className="h-1 w-full bg-gray-800">
              <div className="h-full bg-red-500" style={{ width: `${80 + currentPhase * 5}%` }}></div>
            </div>

            <div className="flex justify-between text-xs">
              <span>Nanodust Control:</span>
              <span className="text-red-400">{currentPhase === 4 ? "COMPROMISED" : currentPhase * 25 + "%"}</span>
            </div>
            <div className="h-1 w-full bg-gray-800">
              <div
                className="h-full bg-red-500"
                style={{ width: `${currentPhase === 4 ? 60 : currentPhase * 25}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
