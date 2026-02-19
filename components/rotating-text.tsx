"use client"

import { useState, useEffect, useRef } from "react"

const phrases = [
  "Public Cloud",
  "Scalable Cloud",
  "Sovereign Clouds",
]

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [fade, setFade] = useState<"in" | "out">("in")
  const sizerRef = useRef<HTMLSpanElement>(null)
  const [width, setWidth] = useState<number | undefined>(undefined)

  // Measure the widest phrase on mount and resize
  useEffect(() => {
    const measure = () => {
      if (sizerRef.current) {
        setWidth(sizerRef.current.offsetWidth)
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFade("out")
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % phrases.length
          setDisplayIndex(next)
          return next
        })
        setFade("in")
      }, 500)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hidden sizer: measures the longest phrase */}
      <span ref={sizerRef} className="invisible absolute whitespace-nowrap text-primary" aria-hidden="true">
        {phrases.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      {/* Fixed-width inline container */}
      <span
        className="inline-block text-left text-primary"
        style={{ width: width ? `${width}px` : "auto" }}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className={`inline-block transition-all duration-500 ease-in-out ${
            fade === "in"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
        >
          {phrases[displayIndex]}
        </span>
      </span>
    </>
  )
}
