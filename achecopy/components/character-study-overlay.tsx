"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CharacterStudyOverlayProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

export default function CharacterStudyOverlay({ isOpen, onClose, title, content }: CharacterStudyOverlayProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm font-['D-DIN']">
      <div className="min-w-[300px] fixed inset-4 bg-[#0f0f0f] border border-[#b21919] flex flex-col w-1/2 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#b21919] bg-[#0f0f0f]">
          <h2 className="text-lg font-semibold text-[#7c5cff] font-['D-DIN']">{title}</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-white hover:text-[#b21919] hover:bg-transparent"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          <div className="character-study-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      <style type="text/css">{`
        .character-study-content {
          font-family: 'D-DIN', sans-serif;
        }

        .character-study-content .acheron-body {
          display: flex;
          gap: 0;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .character-study-content .acheron-container {
          background-color: #0f0f0f;
          width: 100%;
        }

        .character-study-content .acheron-container span,
        .character-study-content .acheron-container div,
        .character-study-content .acheron-container p,
        .character-study-content .acheron-container td,
        .character-study-content .acheron-container tr td .text,
        .character-study-content .btext {
          font-family: 'D-DIN' !important;
          font-size: 14px;
          color: white;
          line-height: 120%;
        }

        .character-study-content div.acheron-container u {
          background-color: #7c5cff;
          text-decoration: none;
          color: white;
          padding: 1px 2px;
        }

        .character-study-content div.acheron-container s {
          color: #7c5cff;
          text-decoration: none;
        }

        .character-study-content div.acheron-container b,
        .character-study-content div.acheron-container strong {
          color: #b21919;
          font-weight: 400;
        }

        .character-study-content .acheron-post {
          text-align: justify;
          padding: 10px;
          padding-top: 5px;
          border-top: 1px solid #b21919;
        }

        .character-study-content .acheron-avatar {
          width: 100%;
          height: auto;
        }

        .character-study-content .acheron-header {
          line-height: 0;
          padding: 0;
          margin: 0;
          font-size: 0px;
        }

        .character-study-content .name {
          background: linear-gradient(to right, #6b3ab6, #d6c9d3, #b10000);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        .character-study-content .meicolor {
          background: linear-gradient(240deg, #6b3ab6, #d6c9d3, #b10000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: bold;
        }

        .character-study-content .acolor {
          color: #e1af8e !important;
        }

        .character-study-content .lesbian-gradient {
          background: linear-gradient(45deg, #D62900, #FF9B55, #FFFFFF, #D461A6, #A50062);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: bold;
        }

        /* Standardized link styling */
        .character-study-content a {
          color: #7c5cff;
          text-decoration: underline;
          transition: color 0.3s ease;
          font-family: 'D-DIN', sans-serif !important;
        }

        .character-study-content a:hover {
          color: #b21919;
          text-decoration: none;
        }

        .character-study-content a:visited {
          color: #9d7bff;
        }

        /* Profile specific styles for love chart */
        .character-study-content .profile-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #7c5cff;
          padding: 1px;
          font-family: 'D-DIN', sans-serif !important;
          color: white;
          line-height: 1.2;
        }

        .character-study-content .profile-content {
          background: #0f0f0f;
          padding: 20px;
          width: 100%;
          box-sizing: border-box;
        }

        .character-study-content .profile-content strong,
        .character-study-content .profile-content b {
          color: #b21919;
        }

        .character-study-content .profile-content div,
        .character-study-content .profile-content p {
          color: white;
          font-family: 'D-DIN', sans-serif !important;
          line-height: 1.2;
        }

        .character-study-content .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .character-study-content .header h1 {
          color: #7c5cff;
          font-size: 2em;
          margin: 0;
          font-family: 'D-DIN', sans-serif !important;
        }

        .character-study-content .top-section {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .character-study-content .basic-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .character-study-content .info-item {
          display: flex;
          flex-direction: column;
        }

        .character-study-content .label {
          color: #7c5cff;
          font-weight: bold;
          border-bottom: 1px solid #7c5cff;
          margin-bottom: 5px;
          font-family: 'D-DIN', sans-serif !important;
        }

        .character-study-content .avatar-section {
          text-align: center;
        }

        .character-study-content .avatar-section img {
          width: 100%;
          height: 100%;
          border: 2px solid #7c5cff;
          object-fit: cover;
        }

        .character-study-content .challenge-section {
          text-align: right;
        }

        .character-study-content .hearts {
          display: flex;
          justify-content: flex-end;
          gap: 5px;
          margin: 10px 0;
        }

        .character-study-content .heart {
          width: 20px;
          height: 20px;
          background-color: #7c5cff;
          clip-path: path('M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 Z');
        }

        .character-study-content .love-languages {
          margin-top: 20px;
        }

        .character-study-content .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .character-study-content .identity-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 30px 0;
        }

        .character-study-content .identity-section {
          border: 1px solid #7c5cff;
          padding: 15px;
        }

        .character-study-content .scale-item {
          display: flex;
          flex-direction: column;
          margin: 15px 0;
        }

        .character-study-content .scale-labels {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          font-family: 'D-DIN', sans-serif !important;
        }

        /* Fixed slider styling - non-interactive */
        .character-study-content .scale-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 5px;
          background: #2c2c2c;
          outline: none;
          opacity: 0.7;
          pointer-events: none; /* Disable interaction */
          cursor: default;
        }

        .character-study-content .scale-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 15px;
          background: #7c5cff;
          cursor: default;
          border-radius: 50%;
          pointer-events: none; /* Disable interaction */
        }

        .character-study-content .scale-slider::-moz-range-thumb {
          width: 15px;
          height: 15px;
          background: #7c5cff;
          cursor: default;
          border-radius: 50%;
          border: none;
          pointer-events: none; /* Disable interaction */
        }

        .character-study-content .bottom-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .character-study-content .gifts-section,
        .character-study-content .dates-section {
          display: flex;
          flex-direction: column;
        }

        .character-study-content .section-title {
          color: #7c5cff;
          font-weight: bold;
          text-align: center;
          margin-bottom: 15px;
          font-family: 'D-DIN', sans-serif !important;
        }

        .character-study-content .two-column-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .character-study-content .ideal-date-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .character-study-content .flags-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 30px 0;
        }

        .character-study-content .footer-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          text-align: center;
          margin-top: 30px;
          border-top: 1px solid #7c5cff;
          padding-top: 20px;
        }

        /* Fixed checkbox styling - non-interactive */
        .character-study-content .checkbox-container {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: default; /* Change from pointer to default */
          font-family: 'D-DIN', sans-serif !important;
          pointer-events: none; /* Disable interaction */
        }

        .character-study-content .love-languages .checkbox-container {
          font-size: 14px;
        }

        .character-study-content .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: default;
          height: 0;
          width: 0;
          pointer-events: none; /* Disable interaction */
        }

        .character-study-content .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: #2c2c2c;
          border: 1px solid #7c5cff;
          pointer-events: none; /* Disable interaction */
        }

        .character-study-content .checkbox-container input:checked~.checkmark {
          background-color: #7c5cff;
        }

        .character-study-content .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        .character-study-content .checkbox-container input:checked~.checkmark:after {
          display: block;
        }

        .character-study-content .checkbox-container .checkmark:after {
          left: 6px;
          top: 2px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }

        .character-study-content .ideal-date-item {
          display: flex;
          align-items: center;
          font-family: 'D-DIN', sans-serif !important;
        }

        .character-study-content .ideal-date-label {
          flex: 1;
        }

        .character-study-content .ideal-date-circles {
          display: flex;
          gap: 5px;
        }

        .character-study-content .circle {
          width: 15px;
          height: 15px;
          border: 1px solid #7c5cff;
          border-radius: 50%;
        }

        .character-study-content .circle.filled {
          background-color: #7c5cff;
        }

        .character-study-content .circle.half-filled {
          background: linear-gradient(to right, #7c5cff 50%, transparent 50%);
        }

        .character-study-content ul {
          padding-left: 20px;
        }

        .character-study-content li {
          font-family: 'D-DIN', sans-serif !important;
          color: white;
          line-height: 1.2;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .character-study-content .top-section {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .character-study-content .identity-sections {
            grid-template-columns: 1fr;
          }

          .character-study-content .bottom-sections {
            grid-template-columns: 1fr;
          }

          .character-study-content .flags-section {
            grid-template-columns: 1fr;
          }

          .character-study-content .footer-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
