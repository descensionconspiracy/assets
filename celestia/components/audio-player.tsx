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
  const [volume, setVolume] = useState(0.5)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const hasAutoPlayed = useRef(false)
  const shouldPlayNext = useRef(false)

  // Initial setup: listeners + responsive expand
  useEffect(() => {
    const audio = audioRef.current!

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      const progressEl = document.querySelector(".progress") as HTMLElement
      if (progressEl) {
        const percent = (audio.currentTime / audio.duration) * 100
        progressEl.style.width = `${percent}%`
      }
    }

    const onLoadedMeta = () => {
      setDuration(audio.duration)
      if (autoPlay && !hasAutoPlayed.current && audio.duration > 0) {
        hasAutoPlayed.current = true
        setIsPlaying(true)
        audio.play().catch(() => {})
      }
      // If we should play the next track after loading
      if (shouldPlayNext.current && audio.duration > 0) {
        shouldPlayNext.current = false
        setIsPlaying(true)
        audio.play().catch(() => {})
      }
    }

    const onEnded = () => {
      // Check if this is the last track
      if (currentTrack < tracks.length - 1) {
        // Move to next track and mark that it should play
        shouldPlayNext.current = true
        setCurrentTrack((prev) => prev + 1)
      } else {
        // Last track ended, restart from beginning
        shouldPlayNext.current = true
        setCurrentTrack(0)
      }
    }

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onLoadedMeta)
    audio.addEventListener("ended", onEnded)
    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setIsExpanded(true)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onLoadedMeta)
      audio.removeEventListener("ended", onEnded)
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      window.removeEventListener("resize", handleResize)
    }
  }, [autoPlay, currentTrack])

  // Switch track effect
  useEffect(() => {
    const audio = audioRef.current!
    audio.src = tracks[currentTrack].src
    audio.load()
    // Reset current time when switching tracks
    setCurrentTime(0)
  }, [currentTrack])

  // Volume effect
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current!
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number.parseFloat(e.target.value))
  }

  const playTrack = (index: number) => {
    shouldPlayNext.current = isPlaying // Maintain playing state when manually selecting
    setCurrentTrack(index)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current!
    const rect = progressRef.current!.getBoundingClientRect()
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration
  }

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${s.toString().padStart(2, "0")}`
  }

  const toggleExpanded = () => {
    if (isMobile) setIsExpanded((e) => !e)
  }

  return (
    <div
      className={`bg-black/95 border border-[#b21919] max-w-3xl mx-auto transition-all duration-300 ${isMobile && !isExpanded ? "pb-0" : ""}`}
    >
      <div
        className={`flex items-center justify-between p-4 ${isMobile ? "cursor-pointer" : ""}`}
        onClick={toggleExpanded}
      >
        <span className="font-semibold font-['D-DIN']">{tracks[currentTrack].name}</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400 font-['D-DIN']">{formatTime(currentTime)}</span>
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              className="text-white"
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

      <div className="px-4 pb-2" ref={progressRef} onClick={handleProgressClick}>
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }} />
          </div>
        </div>
      </div>

      <div className={`${isExpanded || !isMobile ? "block" : "hidden"} p-4 pt-0`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-[#b21919] hover:bg-[#7c5cff] flex items-center justify-center transition-colors duration-200"
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
            <div className="relative w-24">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider w-full h-1 bg-[#2c2c2c] rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #b21919 0%, #b21919 ${volume * 100}%, #2c2c2c ${volume * 100}%, #2c2c2c 100%)`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-4 border-t border-white/10 pt-4">
          {tracks.map((track, idx) => (
            <div
              key={track.id}
              className={`flex items-center gap-3 p-2 cursor-pointer rounded transition-colors duration-200 ${idx === currentTrack ? "text-[#b21919] bg-white/5" : "hover:bg-white/10"}`}
              onClick={() => playTrack(idx)}
            >
              <span className="text-sm opacity-50 w-6">{String(idx + 1).padStart(2, "0")}</span>
              <span className="text-sm">{track.name}</span>
              {idx === currentTrack && isPlaying && (
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1 h-3 bg-[#b21919] animate-pulse" />
                  <div className="w-1 h-2 bg-[#b21919] animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-1 h-4 bg-[#b21919] animate-pulse" style={{ animationDelay: "0.4s" }} />
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
