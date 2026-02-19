"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "Rakuten Taps StackOrbit to Build Cloud-Native Euro Bank",
    subtitle: "Why StackOrbit? Cloud on-demand and compliant, and truly minimal management.",
    image: "/placeholder.svg",
  },
  {
    title: "Leading Telecom Provider Launches Sovereign Cloud Platform",
    subtitle: "Full infrastructure control, multi-region deployment, and complete data sovereignty.",
    image: "/placeholder.svg",
  },
]

export function CaseStudiesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" aria-label="Customer case studies">
      <div className="container mx-auto max-w-7xl">
        <div className="relative" role="region" aria-roledescription="carousel" aria-label="Case studies carousel">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
            aria-label="Next case study"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center px-16">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance leading-tight">
                  {caseStudies[currentSlide].title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8">{caseStudies[currentSlide].subtitle}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#6366f1] hover:bg-[#5558e3] text-white font-medium rounded-full px-8"
                  asChild
                >
                  <Link href="/resources/case-studies">See How They Did It</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:bg-gray-50 rounded-full px-8 font-medium bg-transparent"
                  asChild
                >
                  <Link href="/resources/case-studies">All Case Studies</Link>
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={caseStudies[currentSlide].image || "/placeholder.svg"}
                  alt={caseStudies[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#6366f1]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
