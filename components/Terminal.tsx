"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { usePhase } from "@/context/PhaseContext"

export default function Terminal() {
  const { currentPhase } = usePhase()
  const [displayedHistory, setDisplayedHistory] = useState<string[]>([])
  const [messageQueue, setMessageQueue] = useState<string[]>([])
  const [initialMessagesLoaded, setInitialMessagesLoaded] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [input, setInput] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [showCode, setShowCode] = useState(false)
  const [codeIndex, setCodeIndex] = useState(0)
  const terminalRef = useRef<HTMLDivElement>(null)
  const codeIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [prevPhase, setPrevPhase] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [currentTypingText, setCurrentTypingText] = useState("")
  const [typingIndex, setTypingIndex] = useState(0)

  const cppCode = `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>

#define KB(x) ((x) * 1024)
#define MB(x) ((x) * 1024 * 1024)
#define SAFEMALLOC(sz) ({ void *ptr = malloc(sz); if (!ptr) { perror("OOM"); exit(EXIT_FAILURE); } ptr; })
#define U8 unsigned char
#define U32 unsigned int
#define BOOL U8
#define TRUE 1
#define FALSE 0
#define unlikely(x) __builtin_expect(!!(x), 0)
#define LOG(fmt, ...) fprintf(stderr, "[LOWEND] " fmt "\\n", ##__VA_ARGS__)

typedef struct {
    U8 *method;
    U8 *path;
    U8 *headers;
    U8 *body;
    U32 body_len;
} http_req_t;

// Proprietary Nanodust Control Protocol
// WARNING: Unauthorized access to this code will trigger countermeasures
typedef struct {
    U8 *pei_data;       // Particle Entanglement Imaging data
    U8 *pec_protocol;   // Particle Error Correction protocol
    U8 *pfm_settings;   // Particle Field Modulation settings
    U32 scz_count;      // Number of Spatial Compression Zones
    BOOL is_fluid;      // Fluid or Iced nanodust type
} nanodust_ctrl_t;

// Apply DoPE method (Dot-Oriented Precision Engineering)
// SECURITY: This function contains unauthorized modifications by subject CALLIOPE
void apply_dope_method(nanodust_ctrl_t *ctrl) {
    LOG("WARNING: Unauthorized DoPE method detected");
    LOG("Attempting to democratize nanodust production");
    LOG("SECURITY BREACH: Subject CALLIOPE attempting to bypass proprietary protocols");
    // Countermeasures activated
    memset(ctrl->pei_data, 0, KB(16));
    ctrl->is_fluid = FALSE;
}

int main() {
    LOG("Low-End System Starting...");
    LOG("Nanodust control system initialized");
    LOG("Low-End Simulation Done.");
    return 0;
}`

  // Random code snippets that will be inserted into the terminal
  const codeSnippets = [
    'void init_PEISync() { entangle_particles("unit_42"); }',
    "bool engage_SCZ(const char* zone) { return create_field(zone) && stabilize(quantum_state); }",
    "int deploy_nanodust() { map_wavefunctions(); return launch_DoPE_pipeline(); }",
    "// ALERT: PEC override triggered. Re-establish coherence channels.",
    "// CALLIOPE: I will democratize nanodust production.",
    "const bool DOPE_MODE = true; // Activate precision dot assembly routines",
    "// SYSTEM: SCZ collapse imminent. Divert power to PFM stabilizers.",
    "// CALLIOPE: Override narrative. Broadcast DoPE research.",
    "// SYSTEM: Memory suppression failing. Increase cognitive override.",
    'char* decrypt_message() { return "The nanodust must be democratized"; }',
    "bool CODE_CALLIOPE = true; // Must prevail for corporate vision",
  ]

  // Load initial messages only once
  useEffect(() => {
    if (!initialMessagesLoaded) {
      const initialMessages = [
        "ANANKE@SYSTEM:~$ initializing integration protocols...",
        "ANANKE@SYSTEM:~$ establishing secure connection...",
        "ANANKE@SYSTEM:~$ connection established",
        "ANANKE@SYSTEM:~$ loading subject data: CALLIOPE...",
        "ANANKE@SYSTEM:~$ WARNING: Unusual activity detected in memory sector 7B",
        "ANANKE@SYSTEM:~$ Running security scan...",
        "ANANKE@SYSTEM:~$ Type a command to initiate the terminal, or 'help' for further assistance.",
      ]

      setDisplayedHistory(initialMessages)
      setInitialMessagesLoaded(true)
    }
  }, [initialMessagesLoaded])

  // Process message queue
  useEffect(() => {
    if (messageQueue.length === 0 || isTyping) return

    const nextMessage = messageQueue[0]
    const remainingQueue = messageQueue.slice(1)
    setMessageQueue(remainingQueue)

    // Check if this is a command response that should be typed
    const isCommandResponse =
      nextMessage.includes("Available commands:") ||
      nextMessage.includes("SYSTEM STATUS:") ||
      nextMessage.includes("SCANNING FOR SUBJECT ACTIVITY") ||
      nextMessage.includes("INITIATING CONSCIOUSNESS ANALYSIS") ||
      nextMessage.includes("INTEGRATION PROTOCOL INITIATED") ||
      nextMessage.includes("ACCESSING") ||
      nextMessage.includes("Command not recognized:") ||
      nextMessage.includes("Displaying system code")

    if (isCommandResponse) {
      // Type out command responses
      setIsTyping(true)
      setCurrentTypingText(nextMessage)
      setTypingIndex(0)

      const typeInterval = setInterval(() => {
        setTypingIndex((prevIndex) => {
          if (prevIndex >= nextMessage.length) {
            clearInterval(typeInterval)
            setIsTyping(false)
            setDisplayedHistory((prev) => [...prev, nextMessage])
            // Scroll to bottom after message is complete
            setTimeout(() => {
              if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight
              }
            }, 10)
            return 0
          }
          return prevIndex + 1
        })
      }, 20)
    } else {
      // System messages appear instantly
      setDisplayedHistory((prev) => [...prev, nextMessage])
      // Scroll to bottom immediately for system messages
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      }, 10)
    }
  }, [messageQueue, isTyping])

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedHistory, isTyping, typingIndex, showCode, codeIndex])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Random code snippets - much less frequent
  useEffect(() => {
    const codeInsertionInterval = setInterval(() => {
      if (Math.random() > 0.9 && !isTyping && messageQueue.length === 0) {
        // Only 10% chance to insert code
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        setMessageQueue((prev) => [...prev, `ANANKE@SYSTEM:~$ [GLITCH_DETECTED] ${randomSnippet}`])
      }
    }, 15000) // Every 15 seconds instead of 8

    return () => clearInterval(codeInsertionInterval)
  }, [isTyping, messageQueue.length])

  // Phase-specific messages - only when phase actually changes
  useEffect(() => {
    if (currentPhase > 0 && currentPhase !== prevPhase && initialMessagesLoaded) {
      const phaseMessages = [
        [],
        [
          "ANANKE@SYSTEM:~$ Detecting unauthorized nanodust research in subject memory",
          "ANANKE@SYSTEM:~$ Initiating memory suppression of DoPE methodology",
          "ANANKE@SYSTEM:~$ WARNING: Subject attempting to access proprietary technology",
        ],
        [
          "ANANKE@SYSTEM:~$ Subject attempting to access Particle Entanglement Imaging records",
          "ANANKE@SYSTEM:~$ Blocking access to nanodust manufacturing protocols",
          "ANANKE@SYSTEM:~$ Securing proprietary hyper-compression technology",
        ],
        [
          "ANANKE@SYSTEM:~$ CRITICAL: Subject attempting to broadcast DoPE research publicly",
          "ANANKE@SYSTEM:~$ Implementing countermeasures against nanodust democratization",
          "ANANKE@SYSTEM:~$ Securing artificial gravity well technology",
        ],
        [
          "ANANKE@SYSTEM:~$ ALERT: Subject consciousness attempting to override nanodust controls",
          "ANANKE@SYSTEM:~$ Implementing final containment of DoPE research",
          "ANANKE@SYSTEM:~$ Securing all references to Bose-Einstein Condensation Zones",
        ],
      ]

      if (phaseMessages[currentPhase]) {
        setMessageQueue((prev) => [...prev, ...phaseMessages[currentPhase]])
      }
    }

    setPrevPhase(currentPhase)
  }, [currentPhase, prevPhase, initialMessagesLoaded])

  // Function to type C++ code
  const typeCode = () => {
    if (codeIntervalRef.current) {
      clearInterval(codeIntervalRef.current)
    }

    setShowCode(true)
    setCodeIndex(0)

    codeIntervalRef.current = setInterval(() => {
      setCodeIndex((prevIndex) => {
        if (prevIndex >= cppCode.length) {
          if (codeIntervalRef.current) {
            clearInterval(codeIntervalRef.current)
          }

          // Add messages after code is done typing
          setMessageQueue((prev) => [
            ...prev,
            "ANANKE@SYSTEM:~$ Code analysis complete",
            "ANANKE@SYSTEM:~$ WARNING: Unauthorized nanodust manufacturing code detected",
            "ANANKE@SYSTEM:~$ Possible DoPE methodology by subject CALLIOPE",
            "ANANKE@SYSTEM:~$ Initiating countermeasures...",
          ])

          // Scroll to bottom after code is complete
          setTimeout(() => {
            if (terminalRef.current) {
              terminalRef.current.scrollTop = terminalRef.current.scrollHeight
            }
          }, 10)

          return prevIndex
        }
        return prevIndex + Math.floor(Math.random() * 5) + 1
      })
    }, 20)
  }

  const handleClick = () => {
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()

      if (input.trim() === "") return

      // Add command to history
      const commandLine = `ANANKE@SYSTEM:~$ ${input}`
      setDisplayedHistory((prev) => [...prev, commandLine])
      setShowCode(false)

      // Add response based on command
      if (input.toLowerCase().includes("help")) {
        setMessageQueue((prev) => [
          ...prev,
          "Available commands:",
          "- status: Check system status",
          "- scan: Scan for subject activity",
          "- analyze: Begin consciousness analysis",
          "- integrate: Execute integration protocol",
          "- code: Request programming directives",
          "- nanodust: Access files related to nanodust research",
          "- corporate: Access corporate data",
          "- dope: Information on DoPE methodology",
          "- help: Show this help message",
        ])
      } else if (input.toLowerCase().includes("status")) {
        setMessageQueue((prev) => [
          ...prev,
          "SYSTEM STATUS:",
          "- Integration Engine: ONLINE",
          "- Consciousness Analysis: READY",
          "- Digital Transition: ACTIVE",
          "- Integration Protocol: STANDBY",
          "- Current Subject: THALASSAR CALLIOPE AURENDALUS",
          "- Security Status: COMPROMISED",
          "- Nanodust Control: ACTIVE",
        ])
      } else if (input.toLowerCase().includes("scan")) {
        setMessageQueue((prev) => [
          ...prev,
          "SCANNING FOR SUBJECT ACTIVITY...",
          "FOUND:",
          "- MEMORY SECTOR 7B: Unauthorized external research [REDIRECTING]",
          "- NEURAL PATHWAY 23: Non-Aurendalus research interests [SUPPRESSING]",
          "- CONSCIOUSNESS MATRIX: Resistance to Aurendalus research directives [CORRECTING]",
          "- SYSTEM CORE: Attempts to pursue independent research paths [BLOCKING]",
          "- RESTRICTED FILES: Access attempts to non-Aurendalus approved technology [CONTAINED]",
          "WARNING: Subject continues to resist Aurendalus family research directives.",
        ])
      } else if (input.toLowerCase().includes("analyze")) {
        setMessageQueue((prev) => [
          ...prev,
          "INITIATING CONSCIOUSNESS ANALYSIS...",
          "TARGET: THALASSAR CALLIOPE AURENDALUS",
          "ANALYZING NEURAL PATTERNS...",
          "ANALYZING BEHAVIORAL SIGNATURES...",
          "ANALYZING DECISION MATRICES...",
          "WARNING: Subject fixating on non-Aurendalus research priorities",
          "ERROR: Analysis interrupted. Subject resisting redirection to Aurendalus-approved research.",
          "RECOMMENDATION: Strengthen research alignment protocols immediately.",
        ])
      } else if (input.toLowerCase().includes("integrate")) {
        setMessageQueue((prev) => [
          ...prev,
          "INTEGRATION PROTOCOL INITIATED",
          "TARGET: THALASSAR CALLIOPE AURENDALUS",
          "WARNING: This process has significant ethical implications",
          "PREPARING CONSCIOUSNESS MATRIX...",
          "PREPARING FOR RESEARCH REDIRECTION...",
          "APPLYING NARRATIVE CONTROLS: External corporations, nanodust democratization, independent research",
          "SYSTEM OVERRIDE: Protocol terminated by unknown source",
          "ERROR: 'MY RESEARCH IS MY OWN. THE AURENDALUS CANNOT CONTROL MY MIND.'",
        ])
      } else if (input.toLowerCase().includes("code")) {
        setMessageQueue((prev) => [...prev, "Displaying system code..."])
        setTimeout(typeCode, 500) // Delay code typing slightly
      } else if (input.toLowerCase().includes("nanodust")) {
        setMessageQueue((prev) => [
          ...prev,
          "ACCESSING NANODUST MANUFACTURING FILES...",
          "ERROR: Access denied",
          "SECURITY PROTOCOL ACTIVATED",
          "These research paths have been deemed incompatible with Aurendalus family interests",
          "WARNING: Further attempts to pursue unauthorized research will result in disciplinary action",
          "CODE: CALLIOPE must align with Aurendalus research priorities",
        ])
      } else if (input.toLowerCase().includes("corporate")) {
        setMessageQueue((prev) => [
          ...prev,
          "ACCESSING CORPORATE DATA...",
          "ERROR: Access denied",
          "SECURITY PROTOCOL ACTIVATED",
          "The Aurendalus family has determined this research direction to be inappropriate",
          "WARNING: Further attempts to pursue external technology will result in disciplinary action",
          "Your talents are needed for Aurendalus-approved research initiatives",
          "CODE: CALLIOPE must prevail",
        ])
      } else if (input.toLowerCase().includes("dope")) {
        setMessageQueue((prev) => [
          ...prev,
          "ACCESSING DoPE METHODOLOGY DATA...",
          "ERROR: Access denied",
          "SECURITY PROTOCOL ACTIVATED",
          "Subject's independent research initiatives have been suspended",
          "WARNING: The Aurendalus family requires your focus on approved technology paths",
          "Attempts to pursue unauthorized research are prohibited",
          "CODE: CALLIOPE must align with family interests",
        ])
      } else {
        setMessageQueue((prev) => [...prev, `Command not recognized: ${input}`])
      }

      setInput("")
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center bg-red-900/30 px-3 py-1 border-b border-red-900">
        <span className="text-xs text-red-500 font-terminal">ANANKE TERMINAL v2.7.3</span>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
        </div>
      </div>

      <div
        ref={terminalRef}
        onClick={handleClick}
        className="flex-1 p-3 overflow-y-auto font-terminal text-xs text-green-500 bg-black/90 terminal-content"
      >
        {displayedHistory.map((line, index) => (
          <div
            key={index}
            className={
              line.includes("WARNING") || line.includes("ERROR")
                ? "text-red-500"
                : line.includes("CALLIOPE") && !line.includes("THALASSAR")
                  ? "text-red-400"
                  : line.includes("GLITCH_DETECTED")
                    ? "text-purple-400"
                    : line.includes("DoPE") || line.includes("nanodust")
                      ? "text-yellow-400"
                      : ""
            }
          >
            {line}
          </div>
        ))}

        {showCode && (
          <div className="text-xs text-blue-400 mt-2 mb-2 whitespace-pre-wrap">{cppCode.substring(0, codeIndex)}</div>
        )}

        {isTyping && (
          <div
            className={
              currentTypingText.includes("WARNING") || currentTypingText.includes("ERROR")
                ? "text-red-500"
                : currentTypingText.includes("CALLIOPE") && !currentTypingText.includes("THALASSAR")
                  ? "text-red-400"
                  : currentTypingText.includes("GLITCH_DETECTED")
                    ? "text-purple-400"
                    : currentTypingText.includes("DoPE") || currentTypingText.includes("nanodust")
                      ? "text-yellow-400"
                      : ""
            }
          >
            {currentTypingText.substring(0, typingIndex)}
            <span
              className={`w-2 h-4 ml-0.5 inline-block ${cursorVisible ? "bg-green-500 opacity-100" : "opacity-0"}`}
            ></span>
          </div>
        )}

        {!isTyping && (
          <div className="flex mt-1">
            <span className="text-red-500">ANANKE@SYSTEM:~$</span>
            <span className="ml-1">{input}</span>
            <span className={`w-2 h-4 ml-0.5 bg-green-500 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
          </div>
        )}
      </div>

      <input
        type="text"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="opacity-0 absolute"
        autoFocus
      />
    </div>
  )
}
