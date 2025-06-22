"use client"

import Image from "next/image"

interface CharacterImageProps {
  spoilersRevealed: boolean
  onToggleSpoilers: () => void
}

export default function CharacterImage({ spoilersRevealed, onToggleSpoilers }: CharacterImageProps) {
  return (
    <div
      className="w-full h-full aspect-square cursor-pointer transition-all duration-300 hover:scale-105 relative"
      onClick={onToggleSpoilers}
    >
      <div className="w-full h-full relative overflow-hidden border border-[#b21919]">
        <Image
          src={
            spoilersRevealed
              ? "https://cdn.imgchest.com/files/7bwckodm357.jpg"
              : "https://cdn.imgchest.com/files/49zc2aml5wy.png"
          }
          alt="Acheron"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
          priority
        />
      </div>
    </div>
  )
}
