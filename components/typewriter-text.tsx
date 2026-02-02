"use client"

import { useEffect, useState } from "react"

const TEXTS = ["Тогтвортой", "Хурдан", "Итгэл төрүүлнэ"]

export function TypewriterText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout
    const currentText = TEXTS[currentTextIndex]

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, 50)
      } else {
        typingTimeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
      }
    } else if (displayedText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
      }, 30)
    } else {
      const nextIndex = (currentTextIndex + 1) % TEXTS.length
      setCurrentTextIndex(nextIndex)
      setIsTyping(true)
    }

    return () => {
      if (typingTimeout) clearTimeout(typingTimeout)
    }
  }, [displayedText, isTyping, currentTextIndex])

  return (
    <>
      {displayedText}
      <span className="inline-block w-0.5 h-[1em] bg-slate-300 ml-1 animate-[blink_1s_infinite]"></span>
    </>
  )
}
