"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"

interface MoreInfoProps {
  children: React.ReactNode
  info: string
  className?: string
}

export default function MoreInfo({ children, info, className = "" }: MoreInfoProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 })
  const [popupClass, setPopupClass] = useState("")
  const moreInfoRef = useRef<HTMLSpanElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const calculatePosition = useCallback(() => {
    if (!moreInfoRef.current) return

    const rect = moreInfoRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const popupWidth = 250
    const popupHeight = viewportHeight > 150 ? viewportHeight * 0.3 : 100 // Estimated height

    let top = rect.top - viewportHeight * 1.3 - 10
    let left = rect.left + rect.width / 2

    // Adjust horizontal position if popup would go off screen
    if (left + popupWidth / 2 > viewportWidth - 20) {
      left = viewportWidth - popupWidth / 2 - 20
    }
    if (left - popupWidth / 2 < 20) {
      left = popupWidth / 2 + 20
    }

    // If popup would go above viewport, show it below
    let className = ""
    if (top < 20) {
      top = rect.bottom + 10
      className = "bottom"
    }

    setPopupPosition({ top, left })
    setPopupClass(className)
  }, [])

  const handleMouseEnter = useCallback(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    calculatePosition()
    setShowPopup(true)
  }, [calculatePosition])

  const handleMouseLeave = useCallback(() => {
    // Add a small delay before hiding to prevent flickering
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false)
    }, 100)
  }, [])

  useEffect(() => {
    const element = moreInfoRef.current
    if (!element) return

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    // Handle window resize
    const handleResize = () => {
      if (showPopup) {
        calculatePosition()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", handleResize)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [handleMouseEnter, handleMouseLeave, showPopup, calculatePosition])

  return (
    <>
      <span className={`more-info ${className}`} ref={moreInfoRef}>
        {children}
      </span>
      {showPopup && (
        <div
          className={`popup ${popupClass} ${showPopup ? "show" : ""}`}
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            transform: "translateX(-50%)",
          }}
          dangerouslySetInnerHTML={{ __html: info }}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
          }}
          onMouseLeave={() => {
            setShowPopup(false)
          }}
        />
      )}
    </>
  )
}
