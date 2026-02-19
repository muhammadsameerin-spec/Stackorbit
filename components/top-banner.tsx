"use client"

import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { useState } from "react"

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 w-full bg-accent text-accent-foreground py-2.5 px-4 relative z-[60]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-center">Discover top use cases to activate agentic AI for your customers :</span>
          <Link href="/extensions/tars" className="font-medium hover:underline inline-flex items-center gap-1 group">
            Explore TARS
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close banner"
      >
        <X size={16} />
      </button>
    </div>
  )
}
