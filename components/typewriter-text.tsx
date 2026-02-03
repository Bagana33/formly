"use client"

import { useEffect, useState } from "react"

const TEXTS = ["Тогтвортой", "Хурдан", "Итгэл төрүүлнэ"]

export function TypewriterText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")

    const update = () => setPrefersReducedMotion(media.matches)
    update()
    if (media.addEventListener) {
      media.addEventListener("change", update)
      return () => media.removeEventListener("change", update)
    }
    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return
    const onVisibility = () => setIsVisible(document.visibilityState === "visible")
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  useEffect(() => {
    const reduceMotion = prefersReducedMotion || !isVisible
    if (reduceMotion) {
      setDisplayedText(TEXTS[0])
      return
    }

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
  }, [displayedText, isTyping, currentTextIndex, prefersReducedMotion, isVisible])

  return (
    <>
      {displayedText}
      <span className="inline-block w-0.5 h-[1em] bg-slate-300 ml-1 animate-[blink_1s_infinite]"></span>
    </>
  )
}
