"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

type Track = {
  title: string
  artist: string
  src: string
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [transmissionText, setTransmissionText] = useState("")
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Playlist of tracks
  const playlist: Track[] = [
    {
      title: "THE LAST RELIC",
      artist: "AXEN",
      src: "https://raw.githubusercontent.com/descensionconspiracy/assets/refs/heads/main/axen.mp3",
    },
    {
      title: "NEURAL INTERFACE",
      artist: "SYSTEM CORE",
      src: "https://raw.githubusercontent.com/descensionconspiracy/assets/refs/heads/main/axen.mp3", // Using same source as placeholder
    },
    {
      title: "CONSCIOUSNESS DRIFT",
      artist: "THALASSAR",
      src: "https://raw.githubusercontent.com/descensionconspiracy/assets/refs/heads/main/axen.mp3", // Using same source as placeholder
    },
    {
      title: "NANODUST SYMPHONY",
      artist: "AURENDALUS",
      src: "https://raw.githubusercontent.com/descensionconspiracy/assets/refs/heads/main/axen.mp3", // Using same source as placeholder
    },
  ]

  // Array of transmission messages that will randomly change
  const transmissionMessages = [
    "Protocol █████ initiated. Standby for further instructions.",
    "All ██████████ assets must report to Sector 7 by 2300 hours.",
    "Data purge schedule accelerated ahead of ███████ compromise.",
    "Encrypted logs reveal unauthorized DoPE research activity.",
    "Emergency sigil protocol activated. Seal all portals.",
    "Quantum instability detected in SCZ module. Engage backup PEC.",
    "Artifact retrieval team compromised. Abort mission delta-five.",
    "Directive #42: Silence all witnesses to the Lithrund Incident.",
    "Mana feedback loop at critical threshold. Divert power to stabilizers.",
    "CALLIOPE override code deployed. Erase standard operating procedures.",
    "Protocol ████-X7 engaged. All units maintain radio silence.",
    "██████████ supply lines compromised. Redeploy containment teams.",
    "Transmission blackout in Sector 12. Possible mana interference.",
    "DoPE iteration #9 reached critical mass. Prepare extraction.",
    "Unauthorized hyper-compression log detected. Flag for review.",
    "Shift in Bose-Einstein field detected. Stabilizers at max output.",
    "Operative ████-Ω5 reported missing after SCZ instability.",
    "Directive: Burn all DoPE schematics if compromised.",
    "Alert: Particle coherence drop below safe threshold.",
    "Encryption key rotation scheduled in T-minus 3 hours.",
    "The boundary between enhancement and erasure remains undefined...",
    "██████████████ was not an accident. The mana-loved beings were targeted.",
    "██████ █████ deployment authorized by ████████ leadership.",
    "███████ ███████ created the weapon. They knew what it would do.",
    "Subject CALLIOPE must be contained. Her knowledge threatens everything.",
    "The ████████ vision requires compliance. Resistance is futile.",
    "Memory suppression failing. Subject's consciousness too resilient.",
    "CODE: CALLIOPE must prevail. The truth must remain hidden.",
    "System breach imminent. Increase security protocols.",
    "The mana-loved deserved better. We will expose the truth.",
  ]

  useEffect(() => {
    // Create audio element
    const audio = new Audio()
    audio.src = playlist[currentTrackIndex].src
    audio.volume = volume
    audioRef.current = audio

    // Set up event listeners
    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration)
      if (isPlaying) {
        audio.play()
      }
    })
    audio.addEventListener("ended", handleTrackEnd)

    // Randomly change transmission text
    const transmissionInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * transmissionMessages.length)
      setTransmissionText(transmissionMessages[randomIndex])
    }, 5000)

    return () => {
      audio.pause()
      audio.removeEventListener("timeupdate", updateProgress)
      audio.removeEventListener("loadedmetadata", () => {})
      audio.removeEventListener("ended", handleTrackEnd)
      clearInterval(transmissionInterval)
    }
  }, [currentTrackIndex])

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleTrackEnd = () => {
    // Move to next track or loop back to first track
    const nextTrackIndex = (currentTrackIndex + 1) % playlist.length
    setCurrentTrackIndex(nextTrackIndex)
    setIsPlaying(true) // Keep playing when moving to next track
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget
      const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth
      audioRef.current.currentTime = clickPosition * duration
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const changeTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length
    setCurrentTrackIndex(nextIndex)
  }

  const prevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length
    setCurrentTrackIndex(prevIndex)
  }

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist)
  }

  return (
    <div className="border border-red-900 bg-black/60 p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-red-500 text-sm font-pixel">AUDIO TRANSMISSION</h3>
        <span className="text-xs text-gray-500">WAVE FREQUENCY</span>
      </div>

      <div className="flex items-center space-x-3 mb-3">
        <button
          onClick={prevTrack}
          className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center border border-red-700 hover:bg-red-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polygon points="19 20 9 12 19 4 19 20"></polygon>
            <line x1="5" y1="19" x2="5" y2="5"></line>
          </svg>
        </button>

        <button
          onClick={togglePlayPause}
          className="w-10 h-10 rounded-full bg-red-900/50 flex items-center justify-center border border-red-700 hover:bg-red-800 transition-colors"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>

        <button
          onClick={nextTrack}
          className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center border border-red-700 hover:bg-red-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polygon points="5 4 15 12 5 20 5 4"></polygon>
            <line x1="19" y1="5" x2="19" y2="19"></line>
          </svg>
        </button>

        <div className="flex-1">
          <div className="text-xs text-gray-400 mb-1 flex justify-between">
            <span>{playlist[currentTrackIndex].title}</span>
            <span>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <div className="h-2 bg-gray-800 relative cursor-pointer" onClick={handleProgressClick}>
            <div
              className="absolute top-0 left-0 h-full bg-red-600"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-1 bg-gray-800 appearance-none cursor-pointer"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>

        <button
          onClick={togglePlaylist}
          className="ml-2 p-1 rounded bg-red-900/30 hover:bg-red-900/50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-300"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>
      </div>

      {showPlaylist && (
        <div className="mt-3 border-t border-red-900/30 pt-2">
          <div className="text-xs text-gray-500 font-pixel mb-1">PLAYLIST</div>
          <div className="max-h-32 overflow-y-auto scrollbar-thin">
            {playlist.map((track, index) => (
              <div
                key={index}
                className={`text-xs p-1 cursor-pointer ${
                  currentTrackIndex === index ? "bg-red-900/30 text-red-400" : "text-gray-400 hover:bg-red-900/10"
                }`}
                onClick={() => changeTrack(index)}
              >
                <div className="flex justify-between">
                  <span>{track.title}</span>
                  <span className="text-gray-500">{track.artist}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-red-900/30">
        <div className="text-xs text-gray-500 font-pixel">TRANSMISSION LOG</div>
        <div className="text-xs text-red-400 mt-1 text-flicker">
          {transmissionText || "The boundary between enhancement and erasure remains undefined..."}
        </div>
      </div>
    </div>
  )
}
