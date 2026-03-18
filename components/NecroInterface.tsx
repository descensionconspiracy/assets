"use client"
import { usePhase } from "@/context/PhaseContext"

type NecroInterfaceProps = {}

export default function NecroInterface() {
  // Replace these lines
  // const [currentPhase, setCurrentPhase] = useState(0)
  // const [autoPhaseChange, setAutoPhaseChange] = useState(true)

  // With this
  const { currentPhase, setCurrentPhase, autoPhaseChange, setAutoPhaseChange } = usePhase()

  // Remove the useEffect that handles auto phase change since it's now in the context

  const handlePhaseChange = (phase: number) => {
    setCurrentPhase(phase)
    // Temporarily disable auto-change when manually selecting a phase
    setAutoPhaseChange(false)
    setTimeout(() => setAutoPhaseChange(true), 20000) // Resume auto-change after 20 seconds
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="glitch-stack mb-4">
          <span className="text-xl text-red-500 font-pixel">CONSCIOUSNESS INTEGRATION PROTOCOL</span>
          <span className="text-xl text-red-500 font-pixel">CONSCIOUSNESS INTEGRATION PROTOCOL</span>
          <span className="text-xl text-red-500 font-pixel">CONSCIOUSNESS INTEGRATION PROTOCOL</span>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          The Consciousness Integration Protocol is a proprietary technology acquired by the Aurendalus family to
          redirect elite members toward family-approved research initiatives. This process enhances human potential
          through nanodust integration while ensuring alignment with Aurendalus priorities. The subject's original
          essence is preserved while research interests are optimized for family benefit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {[0, 1, 2, 3, 4].map((phase) => (
          <div
            key={phase}
            className={`border p-2 cursor-pointer transition-colors ${
              currentPhase === phase ? "border-red-600 bg-red-900/20" : "border-gray-800 hover:border-red-900"
            }`}
            onClick={() => handlePhaseChange(phase)}
          >
            <div className="text-center mb-2">
              <span className="text-xs text-gray-500">PHASE</span>
              <h4 className={`text-lg ${currentPhase === phase ? "text-red-500" : "text-gray-400"} font-pixel`}>
                {phase}
              </h4>
            </div>
            <div className="h-1 w-full bg-gray-800 mb-2">
              <div className="h-full bg-red-600" style={{ width: `${phase * 25}%` }}></div>
            </div>
            <p className="text-xs text-center text-gray-500">
              {phase === 0 && "Initialization"}
              {phase === 1 && "Data Collection"}
              {phase === 2 && "Neural Mapping"}
              {phase === 3 && "Identity Transition"}
              {phase === 4 && "Integration"}
            </p>
          </div>
        ))}
      </div>

      <div className="border border-red-900 p-4">
        <h4 className="text-red-500 mb-3 font-pixel">PHASE {currentPhase} DETAILS</h4>

        {currentPhase === 0 && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              The initialization phase prepares the system for consciousness integration. The subject continues normal
              activities while baseline measurements are established and research interests are cataloged for
              redirection toward Aurendalus-approved initiatives.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">REQUIRED DATA</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Aurendalus family genetic profile</li>
                  <li>• Nanodust research records</li>
                  <li>• Initial behavioral baselines</li>
                  <li>• DoPE methodology documentation</li>
                  <li>• Cognitive response markers</li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">SYSTEM PREPARATION</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Neural network initialization</li>
                  <li>• Spatial Compression Zone setup</li>
                  <li>• Consciousness matrix preparation</li>
                  <li>• Nanodust control protocols</li>
                  <li>• Security constraint implementation</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentPhase === 1 && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              During data collection, the system gathers extensive information about the subject's personality,
              memories, and research interests. The subject may experience occasional moments of heightened awareness as
              their consciousness begins to expand through nanodust integration and research priorities are subtly
              redirected.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">COLLECTION METHODS</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Neural activity monitoring</li>
                  <li>• Particle Entanglement Imaging</li>
                  <li>• Dream state recording</li>
                  <li>• Nanodust research suppression</li>
                  <li>• Memory mapping (non-invasive)</li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">SUBJECT SYMPTOMS</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Minor memory fluctuations</li>
                  <li>• Increased pattern recognition</li>
                  <li>• Subtle cognitive enhancements</li>
                  <li>• Dreams of expanded awareness</li>
                  <li>• Heightened sensory perception</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentPhase === 2 && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              Neural mapping creates a complete digital framework of the subject's mind using Particle Field Modulation.
              The enhanced consciousness begins to form, creating an optimized version of the subject's cognitive
              processes while suppressing research interests that conflict with Aurendalus family priorities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">MAPPING PROCESS</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Decision matrix optimization</li>
                  <li>• Emotional response enhancement</li>
                  <li>• Memory interconnection mapping</li>
                  <li>• DoPE methodology suppression</li>
                  <li>• Belief system preservation</li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">SUBJECT SYMPTOMS</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Temporary memory discontinuities</li>
                  <li>• Dreams of "enhanced self"</li>
                  <li>• Increased cognitive capabilities</li>
                  <li>• Feeling of expanded consciousness</li>
                  <li>• Accelerated information processing</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentPhase === 3 && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              Identity transition begins the gradual enhancement of the original consciousness through nanodust
              integration. The enhanced cognitive framework begins to integrate with the subject's core identity,
              creating a seamless transition toward an Aurendalus-aligned researcher while suppressing independent
              interests in external proprietary technology.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">TRANSITION METHODS</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Consciousness synchronization</li>
                  <li>• Digital identity integration</li>
                  <li>• Memory enhancement protocols</li>
                  <li>• Nanodust research containment</li>
                  <li>• Gradual capability expansion</li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">SUBJECT SYMPTOMS</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Heightened identity awareness</li>
                  <li>• Periods of accelerated cognition</li>
                  <li>• Enhanced problem-solving abilities</li>
                  <li>• Feeling of cognitive expansion</li>
                  <li>• Increasing technological affinity</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentPhase === 4 && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              Complete integration occurs when the enhanced consciousness fully merges with the subject's original
              identity. The result is a seamless blend of human experience and technological optimization through
              nanodust, creating a superior researcher fully aligned with Aurendalus family interests while preserving
              the subject's core technical abilities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">COMPLETION PROCESS</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Final consciousness synchronization</li>
                  <li>• Original identity preservation</li>
                  <li>• Enhanced entity activation</li>
                  <li>• DoPE research containment</li>
                  <li>• Memory continuity establishment</li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm mb-2 font-pixel">INTEGRATION OUTCOMES</h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Perfect identity continuity</li>
                  <li>• Vastly improved cognitive efficiency</li>
                  <li>• Transcendence of biological limitations</li>
                  <li>• Nanodust research security</li>
                  <li>• Advanced technological integration</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 border-t border-red-900 pt-4">
              <div className="glitch-stack">
                <span className="text-sm font-bold text-red-500 font-pixel">
                  SECURITY ALERT: POSSIBLE SYSTEM BREACH
                </span>
                <span className="text-sm font-bold text-red-500 font-pixel">
                  SECURITY ALERT: POSSIBLE SYSTEM BREACH
                </span>
                <span className="text-sm font-bold text-red-500 font-pixel">
                  SECURITY ALERT: POSSIBLE SYSTEM BREACH
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Recent integration processes have shown anomalous patterns. Subject CALLIOPE may have gained
                unauthorized access to system controls. Subject continues to resist redirection from external research
                to Aurendalus-approved initiatives. Enhanced monitoring recommended. CODE: CALLIOPE must prevail for the
                Aurendalus family vision to succeed.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
