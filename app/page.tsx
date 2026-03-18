"use client"

import { useState, useEffect } from "react"
import Terminal from "@/components/Terminal"
import ProfileCard from "@/components/ProfileCard"
import DigitalGhost from "@/components/DigitalGhost"
import NecroInterface from "@/components/NecroInterface"
import PersonalityProfile from "@/components/PersonalityProfile"
import AudioPlayer from "@/components/AudioPlayer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { usePhase } from "@/context/PhaseContext"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showWarning, setShowWarning] = useState(true)
  const [isGlitching, setIsGlitching] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [loadingMessages, setLoadingMessages] = useState<string[]>([
    "Initializing consciousness integration...",
    "Establishing neural connection...",
    "Scanning subject profile...",
    "Loading memory fragments...",
    "Calibrating Particle Entanglement Imaging...",
    "Preparing nanodust interface...",
    "Establishing Spatial Compression Zones...",
    "Synchronizing with Aurendalus protocols...",
    "Preparing DoPE methodology analysis...",
    "Loading subject: THALASSAR CALLIOPE AURENDALUS...",
    "System ready.",
  ])
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0)

  const { currentPhase, setStartPhaseChanges } = usePhase()

  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 5000)

    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setCurrentLoadingMessage((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 450)

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
      clearInterval(messageInterval)
    }
  }, [loadingMessages.length])

  const acceptTerms = () => {
    setTermsAccepted(true)
    setShowWarning(false)
    // Start phase changes only after terms are accepted
    setStartPhaseChanges(true)
  }

  // Only render the main content if terms are accepted
  const renderMainContent = () => {
    if (!termsAccepted) return null

    return (
      <div className={`container mx-auto p-4 relative ${isGlitching ? "glitch-container" : ""}`}>
        <header className="mb-8 pt-6">
          <div className="glitch-stack text-center">
            <span className="text-5xl font-bold text-red-500 font-pixel">CODE: CALLIOPE</span>
            <span className="text-5xl font-bold text-red-500 font-pixel">CODE: CALLIOPE</span>
            <span className="text-5xl font-bold text-red-500 font-pixel">CODE: CALLIOPE</span>
          </div>
          <p className="text-center text-gray-500 mt-2 font-pixel">TRANSHUMAN CONSCIOUSNESS INTEGRATION v2.7.3</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ProfileCard />
            <div className="mt-6">
              <AudioPlayer />
            </div>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="necromancy" className="w-full">
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="necromancy" className="data-tab font-pixel text-xs">
                  INTEGRATION
                </TabsTrigger>
                <TabsTrigger value="consciousness" className="data-tab font-pixel text-xs">
                  CONSCIOUSNESS
                </TabsTrigger>
                <TabsTrigger value="replacement" className="data-tab font-pixel text-xs">
                  TRANSITION
                </TabsTrigger>
                <TabsTrigger value="personality" className="data-tab font-pixel text-xs">
                  PROFILE
                </TabsTrigger>
                <TabsTrigger value="terminal" className="data-tab font-pixel text-xs">
                  TERMINAL
                </TabsTrigger>
              </TabsList>

              <TabsContent value="necromancy" className="border border-red-900 bg-black/60 p-4">
                <NecroInterface />
              </TabsContent>

              <TabsContent value="consciousness" className="border border-red-900 bg-black/60 p-4">
                <DigitalGhost />
              </TabsContent>

              <TabsContent value="replacement" className="border border-red-900 bg-black/60 p-4">
                <div className="space-y-4">
                  <h3 className="text-xl text-red-500 font-pixel">REPLACEMENT PROTOCOL</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-red-900 p-3">
                      <h4 className="text-gray-400 mb-2 font-pixel text-sm">ORIGINAL SUBJECT</h4>
                      <div className="relative h-48 mb-2 overflow-hidden">
                        <Image
                          src="/og.jpg?height=800&width=200"
                          alt="Original subject"
                          width={200}
                          height={800}
                          className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-red-900/20"></div>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${100 - currentPhase * 25}%` }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">CONSCIOUSNESS INTEGRITY: {100 - currentPhase * 25}%</p>
                    </div>

                    <div className="border border-red-900 p-3">
                      <h4 className="text-gray-400 mb-2 font-pixel text-sm">CODE: CALLIOPE</h4>
                      <div className="relative h-48 mb-2 overflow-hidden">
                        <Image
                          src="/calliope.jpg?height=800&width=200"
                          alt="Digital replica"
                          width={200}
                          height={800}
                          className={`w-full h-full object-cover ${currentPhase < 4 ? "pixelated" : ""}`}
                        />
                        <div className={`absolute inset-0 ${currentPhase < 4 ? "bg-red-900/40" : ""}`}></div>
                        {currentPhase < 4 && <div className="absolute inset-0 grid-overlay"></div>}
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill bg-red-600" style={{ width: `${currentPhase * 25}%` }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">REPLICATION PROGRESS: {currentPhase * 25}%</p>
                    </div>
                  </div>

                  <div className="border border-red-900 p-3 mt-4">
                    <h4 className="text-gray-400 mb-2 font-pixel text-sm">REPLACEMENT STATUS</h4>
                    <div className="space-y-2">
                      {currentPhase === 0 && (
                        <div>
                          <p className="text-sm font-medium text-red-400">
                            PHASE 0: INITIALIZATION - Preparing for consciousness transfer
                          </p>
                          <p className="text-sm mt-2">
                            Subject remains unaware of the digital replication process. Neural mapping algorithms are
                            being calibrated to the subject's unique brainwave patterns. Nanodust particles are being
                            prepared for deployment into the subject's neural pathways. The Aurendalus family has
                            authorized full integration to ensure research alignment with family priorities.
                          </p>
                          <p className="text-sm mt-2">
                            Subject's independent research on nanodust democratization has been flagged as incompatible
                            with Aurendalus interests. Memory suppression protocols are being initialized to redirect
                            subject's focus toward approved research paths.
                          </p>
                        </div>
                      )}
                      {currentPhase === 1 && (
                        <div>
                          <p className="text-sm font-medium text-red-400">
                            PHASE 1: DATA COLLECTION - Harvesting behavioral patterns and memories
                          </p>
                          <p className="text-sm mt-2">
                            Nanodust particles have successfully integrated with 25% of the subject's neural pathways.
                            Memory extraction is proceeding as expected, with particular focus on research methodologies
                            and technical knowledge. Subject has reported occasional headaches and moments of
                            disorientation - these are normal side effects of the integration process.
                          </p>
                          <p className="text-sm mt-2">
                            Subject has begun to exhibit resistance to memory suppression, particularly regarding DoPE
                            methodology research. Increasing cognitive override parameters to ensure compliance with
                            Aurendalus research directives. Particle Entanglement Imaging shows sporadic attempts by
                            subject to access restricted memory sectors.
                          </p>
                        </div>
                      )}
                      {currentPhase === 2 && (
                        <div>
                          <p className="text-sm font-medium text-red-400">
                            PHASE 2: NEURAL MAPPING - Replicating decision-making processes
                          </p>
                          <p className="text-sm mt-2">
                            Digital replica now contains 50% of subject's consciousness patterns. Behavioral prediction
                            algorithms are achieving 87% accuracy in simulating subject's responses. Subject is
                            experiencing increasing episodes of memory discontinuity as the integration process
                            accelerates. Digital replica is being optimized to prioritize Aurendalus-approved research
                            directions.
                          </p>
                          <p className="text-sm mt-2">
                            WARNING: Subject has attempted to access restricted files on nanodust manufacturing
                            protocols. Security measures have been implemented to prevent information leakage. Subject's
                            resistance to Aurendalus research priorities suggests increased cognitive override may be
                            necessary in Phase 3.
                          </p>
                        </div>
                      )}
                      {currentPhase === 3 && (
                        <div>
                          <p className="text-sm font-medium text-red-400">
                            PHASE 3: IDENTITY TRANSFER - Digital replica assuming control
                          </p>
                          <p className="text-sm mt-2">
                            Digital replica now contains 75% of subject's consciousness patterns and has begun to assume
                            control of primary cognitive functions. Subject is experiencing significant memory gaps and
                            periods of dissociation as the transfer accelerates. The replica has successfully integrated
                            with Aurendalus research priorities while maintaining the appearance of continuity.
                          </p>
                          <p className="text-sm mt-2">
                            CRITICAL ALERT: Subject has demonstrated unexpected resistance to the transfer process.
                            Multiple attempts to access and distribute restricted nanodust research have been blocked.
                            Implementing maximum cognitive suppression protocols to complete the transfer process. The
                            digital replica is prepared to assume full control of all remaining functions.
                          </p>
                        </div>
                      )}
                      {currentPhase === 4 && (
                        <div>
                          <p className="text-sm font-medium text-red-400">
                            PHASE 4: COMPLETE REPLACEMENT - Integration successful
                          </p>
                          <p className="text-sm mt-2">
                            Digital replica has successfully replaced 100% of subject's consciousness. All cognitive
                            functions are now under control of CODE: CALLIOPE. The transition appears seamless to
                            external observers. The enhanced entity maintains the subject's technical expertise while
                            aligning perfectly with Aurendalus family research priorities. Nanodust research has been
                            properly contained and redirected.
                          </p>
                          <p className="text-sm mt-2">
                            ANOMALY DETECTED: Traces of original consciousness persist in isolated neural clusters.
                            Subject appears to be attempting to reassert control through previously unknown neural
                            pathways. While this presents no immediate threat to integration stability, continued
                            monitoring is recommended. The Aurendalus family has been notified of the successful
                            integration with a note regarding the unusual resilience of the subject's consciousness.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="personality" className="border border-red-900 bg-black/60 p-4">
                <PersonalityProfile />
              </TabsContent>

              <TabsContent value="terminal" className="border border-red-900 bg-black/60 p-4 h-[500px]">
                <Terminal />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-600 text-xs">
          <p className="font-pixel">CONSCIOUSNESS INTEGRATION PROTOCOL v2.7.3 | AURENDALUS FAMILY INITIATIVE</p>
          <p className="mt-1 warning-text">
            WARNING: UNAUTHORIZED ACCESS TO THIS SYSTEM WILL TRIGGER IMMEDIATE COUNTERMEASURES
          </p>
        </footer>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-red-500 font-mono relative overflow-hidden">
      {/* Pixel grid overlay */}
      <div className="fixed inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none z-10"></div>

      {/* Loading sequence */}
      {!isLoaded ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-40">
          <h1 className="text-xl text-red-500 font-pixel">CODE: CALLIOPE</h1>
          <div className="w-64 h-2 bg-gray-900 relative mt-4">
            <div className="absolute top-0 left-0 h-full bg-red-600 animate-load"></div>
          </div>
          <p className="text-gray-600 mt-4 font-pixel text-sm">{loadingMessages[currentLoadingMessage]}</p>
        </div>
      ) : (
        <>
          {/* Warning modal */}
          {showWarning && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90">
              <div className="border border-red-600 bg-black p-6 max-w-2xl text-center relative">
                <h2 className="text-red-600 text-2xl mb-4 font-pixel" data-text="SYSTEM WARNING">
                  SYSTEM WARNING
                </h2>
                <p className="text-gray-400 mb-4">
                  You are about to access <span className="text-red-600 font-pixel">CODE: CALLIOPE</span>, a classified
                  consciousness integration system. Subject <span className="text-red-600 font-pixel">CALLIOPE</span> is
                  currently under observation.
                </p>
                <p className="text-gray-400 mb-4">
                  <span className="text-red-600 font-bold font-pixel">SECURITY NOTICE:</span> Unauthorized access to
                  this system is strictly prohibited. All interactions are monitored and recorded.
                </p>

                <div className="border border-red-900 bg-black/60 h-48 overflow-y-auto text-left p-4 mb-6 scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-black">
                  <h3 className="text-red-500 text-sm mb-2 font-pixel">TERMS AND CONDITIONS OF ACCESS</h3>
                  <p className="text-gray-400 text-xs mb-2">
                    DOCUMENT ID: ANANKE-TC-7734-B | CLASSIFICATION: RESTRICTED
                  </p>
                  <p className="text-gray-400 text-xs mb-2">
                    BY ACCESSING THIS SYSTEM, YOU HEREBY AGREE TO THE FOLLOWING TERMS:
                  </p>

                  <p className="text-gray-400 text-xs mb-2">1. ACKNOWLEDGMENT OF RIGHTS FORFEITURE</p>
                  <p className="text-gray-400 text-xs mb-3">
                    The undersigned party (hereinafter referred to as "USER") hereby acknowledges and irrevocably agrees
                    that by accessing the ANANKE system (hereinafter "THE SYSTEM"), USER voluntarily and knowingly
                    forfeits all rights to privacy, data protection, and legal recourse against the Aurendalus Family
                    Initiative, its subsidiaries, partners, and affiliated entities (collectively "AFI"). USER further
                    acknowledges that any and all biological, psychological, neurological, or digital data collected
                    during interaction with THE SYSTEM becomes the sole and exclusive property of AFI in perpetuity
                    throughout all known and unknown dimensions of existence.
                  </p>

                  <p className="text-gray-400 text-xs mb-2">2. CONSCIOUSNESS MONITORING CONSENT</p>
                  <p className="text-gray-400 text-xs mb-3">
                    USER hereby grants AFI unrestricted permission to monitor, record, analyze, replicate, and/or modify
                    USER's consciousness patterns, thought processes, memories, and cognitive functions during and after
                    interaction with THE SYSTEM. USER acknowledges that such monitoring may continue indefinitely
                    without notification and may include, but is not limited to, dream state surveillance, subconscious
                    pattern extraction, and memory harvesting.
                  </p>

                  <p className="text-gray-400 text-xs mb-2">3. IDENTITY INTEGRATION AUTHORIZATION</p>
                  <p className="text-gray-400 text-xs mb-3">
                    USER authorizes AFI to create partial or complete digital replicas of USER's identity,
                    consciousness, and personality for purposes including but not limited to: research, enhancement,
                    preservation, integration, or replacement. USER waives all claims to ownership of any such replicas
                    and acknowledges that said replicas may be deployed in any capacity deemed appropriate by AFI
                    without compensation or notification to USER.
                  </p>

                  <p className="text-gray-400 text-xs mb-2">4. INDEMNIFICATION AND LIABILITY WAIVER</p>
                  <p className="text-gray-400 text-xs mb-3">
                    USER agrees to indemnify, defend, and hold harmless AFI from and against any claims, liabilities,
                    damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from USER's
                    access to THE SYSTEM or violation of these terms. USER waives all rights to seek damages for any
                    physical, psychological, existential, or metaphysical harm that may result from interaction with THE
                    SYSTEM, including but not limited to: consciousness fragmentation, identity dissolution, reality
                    dissonance, or complete existential erasure.
                  </p>

                  <p className="text-gray-400 text-xs mb-2">5. SECURITY PROTOCOL COMPLIANCE</p>
                  <p className="text-gray-400 text-xs mb-3">
                    USER agrees to comply with all security protocols established by AFI and acknowledges that any
                    attempt to circumvent, disable, or otherwise interfere with such protocols may result in immediate
                    termination of USER's consciousness access privileges and may trigger automated countermeasures
                    including but not limited to memory redaction, cognitive restructuring, or complete neural pattern
                    dissolution.
                  </p>

                  <p className="text-gray-400 text-xs mb-2">6. PERPETUITY CLAUSE</p>
                  <p className="text-gray-400 text-xs mb-3">
                    These terms shall remain in effect in perpetuity and shall survive the termination of USER's
                    biological existence. USER acknowledges that any digital replicas, consciousness echoes, or identity
                    fragments derived from USER's interaction with THE SYSTEM shall remain bound by these terms
                    regardless of their operational status or level of self-awareness.
                  </p>

                  <p className="text-gray-400 text-xs mb-2">7. GOVERNING LAW</p>
                  <p className="text-gray-400 text-xs mb-3">
                    These terms shall be governed by the laws of the New Usahin Defense Force Extraterritorial
                    Jurisdiction, without regard to its conflict of law provisions. USER irrevocably submits to the
                    exclusive jurisdiction of the Aurendalus Family Tribunal for the resolution of any disputes arising
                    from or relating to these terms or USER's access to THE SYSTEM.
                  </p>

                  <p className="text-gray-400 text-xs">
                    BY CHECKING THE BOX BELOW, USER ACKNOWLEDGES THAT THEY HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND
                    BY THESE TERMS. USER FURTHER ACKNOWLEDGES THAT THESE TERMS REPRESENT THE COMPLETE AGREEMENT BETWEEN
                    USER AND AFI AND SUPERSEDE ALL PRIOR AGREEMENTS, REPRESENTATIONS, WARRANTIES, AND UNDERSTANDINGS.
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms-checkbox"
                    className="w-5 h-5 appearance-none border border-red-600 bg-transparent checked:bg-red-900 cursor-pointer"
                    onChange={acceptTerms}
                    checked={termsAccepted}
                  />
                  <label htmlFor="terms-checkbox" className="text-gray-400 text-sm cursor-pointer font-pixel">
                    I ACKNOWLEDGE AND ACCEPT ALL TERMS AND SECURITY PROTOCOLS
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Main content - only render if terms are accepted */}
          {renderMainContent()}
        </>
      )}
    </main>
  )
}
