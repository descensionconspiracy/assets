"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, ChevronUp, ChevronDown } from "lucide-react"

const tracks = [
  {
    id: 1,
    name: "DEATH CONTRACT",
    src: "https://github.com/descensionconspiracy/assets/raw/refs/heads/main/pitter-patter.mp3",
  },
  {
    id: 2,
    name: "YOUR COLOUR",
    src: "https://github.com/descensionconspiracy/assets/raw/refs/heads/main/acheron.mp3",
  },
]

interface AudioPlayerProps {
  autoPlay?: boolean
}

export default function AudioPlayer({ autoPlay = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [currentTrack, setCurrentTrack] = useState(0) // Start with track 1 (index 0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const hasAutoPlayed = useRef(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsExpanded(true) // Always expanded on desktop
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set initial track to track 1
    audio.src = tracks[0].src
    audio.volume = volume

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      updateProgressBar()
    }

    const updateDuration = () => {
      setDuration(audio.duration)

      // Auto-play when duration is loaded and autoPlay is enabled
      if (autoPlay && !hasAutoPlayed.current && audio.duration > 0) {
        hasAutoPlayed.current = true
        audio.play().catch((error) => {
          console.log("Auto-play prevented by browser:", error)
        })
      }
    }

    const handleEnded = () => {
      // Automatically cycle to next track
      const nextTrack = (currentTrack + 1) % tracks.length
      playTrack(nextTrack)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
    }
  }, [currentTrack, autoPlay, volume])

  const updateProgressBar = () => {
    const audio = audioRef.current
    const progress = document.querySelector(".progress") as HTMLElement
    if (!audio || !progress) return

    const percentage = (audio.currentTime / audio.duration) * 100
    progress.style.width = `${percentage}%`
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch((error) => {
        console.log("Play prevented:", error)
      })
    }
  }

  const playTrack = (trackIndex: number) => {
    const audio = audioRef.current
    if (!audio) return

    setCurrentTrack(trackIndex)
    audio.src = tracks[trackIndex].src
    audio.load()
    audio.play().catch((error) => {
      console.log("Play prevented:", error)
    })
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    const progressContainer = progressRef.current
    if (!audio || !progressContainer) return

    const rect = progressContainer.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width
    audio.currentTime = clickPosition * audio.duration
    updateProgressBar()
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!audioRef.current) {
      const newVolume = Number.parseFloat(e.target.value)
      setVolume(newVolume)
      audioRef.current.volume = newVolume
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const toggleExpanded = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div
      className={`bg-black/95 border border-[#b21919] max-w-3xl mx-auto transition-all duration-300 ${isMobile && !isExpanded ? "pb-0" : ""}`}
    >
      {/* Player Header */}
      <div
        className={`flex items-center justify-between p-4 ${isMobile ? "cursor-pointer" : "cursor-default"}`}
        onClick={toggleExpanded}
      >
        <span className="font-semibold font-['D-DIN']">{tracks[currentTrack].name}</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400 font-['D-DIN']">{formatTime(currentTime)}</span>
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#b21919]"
              onClick={(e) => {
                e.stopPropagation()
                toggleExpanded()
              }}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </Button>
          )}
        </div>
      </div>

      {/* Progress Bar - Always visible */}
      <div className="px-4 pb-2">
        <div className="progress-container" ref={progressRef} onClick={handleProgressClick}>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}></div>
          </div>
        </div>
      </div>

      {/* Player Content - Collapsible on mobile */}
      <div className={`${isExpanded || !isMobile ? "block" : "hidden"} p-4 pt-0`}>
        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-[#b21919] hover:bg-[#7c5cff] flex items-center justify-center text-white border-none cursor-pointer transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" style={{ marginLeft: isPlaying ? 0 : 1 }}>
              {isPlaying ? (
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
              ) : (
                <path d="M8 5v14l11-7z" fill="currentColor" />
              )}
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-[#7c5cff]/70 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #7c5cff 0%, #7c5cff ${volume * 100}%, rgba(255, 255, 255, 0.1) ${volume * 100}%, rgba(255, 255, 255, 0.1) 100%)`,
              }}
            />
          </div>
        </div>

        {/* Track List */}
        <div className="space-y-2 mt-4 border-t border-white/10 pt-4">
          <div className="text-xs text-gray-400 mb-2 font-['D-DIN'] uppercase tracking-wider"></div>
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`flex items-center gap-3 p-2 cursor-pointer rounded transition-colors font-['D-DIN'] ${
                index === currentTrack ? "text-[#b21919] bg-white/5" : "hover:bg-white/10"
              }`}
              onClick={() => playTrack(index)}
            >
              <span className="text-sm opacity-50 w-6">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-sm">{track.name}</span>
              {index === currentTrack && isPlaying && (
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1 h-3 bg-[#b21919] animate-pulse"></div>
                  <div className="w-1 h-2 bg-[#b21919] animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-1 h-4 bg-[#b21919] animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <audio ref={audioRef} preload="metadata" />
    </div>
  )
}
