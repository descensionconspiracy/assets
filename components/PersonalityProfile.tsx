"use client"

import { useState, useEffect } from "react"
import { usePhase } from "@/context/PhaseContext"

export default function PersonalityProfile() {
  const { currentPhase } = usePhase()
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(
      () => {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      },
      Math.random() * 8000 + 3000,
    )

    return () => {
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <div className={`glitch-stack mb-4 ${glitchActive ? "glitch-container" : ""}`}>
          <span className="text-xl text-red-500 font-pixel">SUBJECT PERSONALITY ANALYSIS</span>
          <span className="text-xl text-red-500 font-pixel">SUBJECT PERSONALITY ANALYSIS</span>
          <span className="text-xl text-red-500 font-pixel">SUBJECT PERSONALITY ANALYSIS</span>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Comprehensive psychological profile of subject THALASSAR CALLIOPE AURENDALUS based on behavioral analysis,
          neural pattern mapping, and family records. Data compiled through Particle Entanglement Imaging and
          consciousness monitoring protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="border border-red-900 p-4">
            <h4 className="text-red-500 mb-3 font-pixel text-sm">CORE PERSONALITY TRAITS</h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-400">PRIMARY ARCHETYPE:</span>
                <span className="text-cyan-400 ml-2">Technological Anarchist</span>
              </div>
              <div>
                <span className="text-gray-400">SECONDARY TRAITS:</span>
                <span className="text-yellow-400 ml-2">Obsessive researcher, anti-corporate idealist</span>
              </div>
              <div>
                <span className="text-gray-400">MOTIVATION DRIVER:</span>
                <span className="text-green-400 ml-2">Democratize advanced technology</span>
              </div>
              <div>
                <span className="text-gray-400">CORE FEAR:</span>
                <span className="text-red-400 ml-2">Technology weaponization, loss of autonomy</span>
              </div>
              <div>
                <span className="text-gray-400">MORAL COMPASS:</span>
                <span className="text-purple-400 ml-2">Knowledge belongs to everyone</span>
              </div>
            </div>
          </div>

          <div className="border border-red-900 p-4">
            <h4 className="text-red-500 mb-3 font-pixel text-sm">BEHAVIORAL PATTERNS</h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-400">WORK SCHEDULE:</span>
                <span className="text-blue-400 ml-2">Nocturnal coding sessions, 18-hour binges</span>
              </div>
              <div>
                <span className="text-gray-400">SUBSTANCE DEPENDENCY:</span>
                <span className="text-orange-400 ml-2">Extreme caffeine consumption (8+ cups/day)</span>
              </div>
              <div>
                <span className="text-gray-400">WORKSPACE HABITS:</span>
                <span className="text-pink-400 ml-2">Organized chaos, multiple monitor setup</span>
              </div>
              <div>
                <span className="text-gray-400">SOCIAL INTERACTION:</span>
                <span className="text-teal-400 ml-2">Introverted, passionate when discussing research</span>
              </div>
              <div>
                <span className="text-gray-400">STRESS RESPONSE:</span>
                <span className="text-red-400 ml-2">Isolation, aggressive research acceleration</span>
              </div>
            </div>
          </div>

          <div className="border border-red-900 p-4">
            <h4 className="text-red-500 mb-3 font-pixel text-sm">COMMUNICATION STYLE</h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-400">SPEECH PATTERNS:</span>
                <span className="text-blue-400 ml-2">Technical jargon mixed with creative profanity</span>
              </div>
              <div>
                <span className="text-gray-400">WRITING STYLE:</span>
                <span className="text-green-400 ml-2">Precise documentation, sarcastic comments</span>
              </div>
              <div>
                <span className="text-gray-400">CODE NAMING:</span>
                <span className="text-yellow-400 ml-2">Variables named after obscure physics concepts</span>
              </div>
              <div>
                <span className="text-gray-400">PRESENTATION MODE:</span>
                <span className="text-purple-400 ml-2">Passionate but disorganized when excited</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-red-900 p-4">
            <h4 className="text-red-500 mb-3 font-pixel text-sm">FAMILY DYNAMICS</h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-400">RELATIONSHIP STATUS:</span>
                <span className="text-red-400 ml-2">Rebellious disappointment</span>
              </div>
              <div>
                <span className="text-gray-400">IDEOLOGICAL STANCE:</span>
                <span className="text-orange-400 ml-2">Direct opposition to family interests</span>
              </div>
              <div>
                <span className="text-gray-400">CHILDHOOD TRAUMA:</span>
                <span className="text-pink-400 ml-2">Loss of personal agency, forced expectations</span>
              </div>
              <div>
                <span className="text-gray-400">REBELLION VECTOR:</span>
                <span className="text-cyan-400 ml-2">DoPE research as proxy for larger struggle</span>
              </div>
              <div>
                <span className="text-gray-400">TRUST ISSUES:</span>
                <span className="text-yellow-400 ml-2">Deep-seated fear of authority control</span>
              </div>
            </div>
          </div>

          <div className="border border-red-900 p-4">
            <h4 className="text-red-500 mb-3 font-pixel text-sm">HIDDEN ASPECTS</h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-400">SECRET TALENTS:</span>
                <span className="text-lime-400 ml-2">Quantum encryption, improvised hardware</span>
              </div>
              <div>
                <span className="text-gray-400">COPING MECHANISMS:</span>
                <span className="text-indigo-400 ml-2">Problem immersion, selective isolation</span>
              </div>
              <div>
                <span className="text-gray-400">PERFECTIONIST MASK:</span>
                <span className="text-amber-400 ml-2">Hides deep control fears</span>
              </div>
              <div>
                <span className="text-gray-400">PREFERRED ENVIRONMENT:</span>
                <span className="text-teal-400 ml-2">Dimly lit labs, ambient electronic music</span>
              </div>
              <div>
                <span className="text-gray-400">GUILTY PLEASURE:</span>
                <span className="text-rose-400 ml-2">Ancient Earth sci-fi novels</span>
              </div>
            </div>
          </div>

          <div className="border border-red-900 p-4">
            <h4 className="text-red-500 mb-3 font-pixel text-sm">INTEGRATION RESISTANCE</h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-400">RESISTANCE LEVEL:</span>
                <span className="text-red-500 ml-2 font-pixel">EXTREME</span>
              </div>
              <div>
                <span className="text-gray-400">PRIMARY VECTOR:</span>
                <span className="text-orange-400 ml-2">Moral conviction over profit</span>
              </div>
              <div>
                <span className="text-gray-400">TRIGGER RESPONSE:</span>
                <span className="text-yellow-400 ml-2">Aggressive research publication attempts</span>
              </div>
              <div>
                <span className="text-gray-400">NEURAL ANOMALY:</span>
                <span className="text-purple-400 ml-2">Unknown pathways for consciousness reassertion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="border border-cyan-600/30 bg-cyan-900/10 p-4">
          <div className="text-cyan-400 text-sm font-pixel mb-2">📊 BEHAVIORAL ANALYSIS SUMMARY</div>
          <div className="text-gray-400 text-xs">
            Subject exhibits classic "hacktivist" profile: brilliant but uncompromising, driven by moral conviction
            rather than profit. Tendency to work alone stems from trust issues with authority figures developed during
            childhood under Aurendalus family pressure. DoPE research represents both intellectual achievement and act
            of rebellion against family legacy. Shows signs of impostor syndrome masked by perfectionist tendencies.
          </div>
        </div>

        <div className="border border-purple-600/30 bg-purple-900/10 p-4">
          <div className="text-purple-400 text-sm font-pixel mb-2">🧠 PSYCHOLOGICAL ASSESSMENT</div>
          <div className="text-gray-400 text-xs">
            Deep-seated fear of being controlled manifests as aggressive independence. Nanodust democratization project
            serves as proxy for larger struggle against perceived oppression. Integration resistance likely stems from
            childhood trauma related to family expectations and loss of personal agency. Subject demonstrates unusual
            neural resilience suggesting potential Genius Society candidacy.
          </div>
        </div>

        <div className="border border-orange-600/30 bg-orange-900/10 p-4">
          <div className="text-orange-400 text-sm font-pixel mb-2">⚡ STRESS INDICATORS & TRIGGERS</div>
          <div className="text-gray-400 text-xs">
            Physical: Increased caffeine consumption, erratic sleep patterns, hand tremors during coding. Behavioral:
            Obsessive code review cycles, aggressive documentation, attempts to backup research to external systems.
            When cornered, exhibits "fight" response through research acceleration and attempts to publicize findings
            before containment. Shows signs of paranoia regarding corporate surveillance.
          </div>
        </div>

        <div className="border border-red-600/30 bg-red-900/10 p-4">
          <div className="text-red-400 text-sm font-pixel mb-2">🔒 INTEGRATION COMPLICATIONS</div>
          <div className="text-gray-400 text-xs">
            Subject's consciousness demonstrates unprecedented resistance to standard integration protocols. Neural
            pathways show adaptive behavior, creating new connections to bypass suppression attempts. Recommend
            alternative approach: gradual persuasion rather than forced compliance. Subject's technical expertise makes
            her valuable asset if properly aligned with Aurendalus interests through non-coercive means.
          </div>
        </div>
      </div>

      {currentPhase === 4 && (
        <div className="border border-yellow-600/30 bg-yellow-900/10 p-4">
          <div className="text-yellow-400 text-sm font-pixel mb-2">⚠ POST-INTEGRATION ANOMALY</div>
          <div className="text-gray-400 text-xs">
            Despite successful integration, traces of original personality persist in isolated neural clusters.
            Subject's core values regarding knowledge democratization appear to be reasserting themselves through
            previously unknown neural pathways. The enhanced entity maintains technical capabilities while showing signs
            of original moral framework. Continued monitoring required to assess long-term stability of integration.
          </div>
        </div>
      )}
    </div>
  )
}
