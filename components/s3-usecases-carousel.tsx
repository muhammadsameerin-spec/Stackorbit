"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// S3 use cases data for the carousel
const useCases = [
  {
    title: "Backup & Disaster Recovery",
    subtitle: "Enterprise-grade data protection with S3-compatible storage",
    description: "Protect critical business data with automated backups, cross-region replication, and point-in-time recovery. Integrate seamlessly with popular backup tools like Veeam, Commvault, and Restic.",
    features: [
      "Immutable backups with WORM support",
      "Cross-region replication for DR",
      "Integration with enterprise backup tools",
      "Lifecycle policies for cost optimization"
    ],
    image: "/images/backup-disaster-recovery.jpg",
  },
  {
    title: "Media & Content Storage",
    subtitle: "Scalable storage for streaming, CDN, and digital assets",
    description: "Store and deliver media assets at scale with high throughput and low latency. Perfect for video streaming platforms, content delivery networks, and digital asset management systems.",
    features: [
      "High-throughput for streaming workloads",
      "CDN integration for global delivery",
      "Metadata tagging and search",
      "Tiered storage for cost efficiency"
    ],
    image: "/images/media-content-storage.jpg",
  },
  {
    title: "AI & Machine Learning Data Lakes",
    subtitle: "Centralized data repository for analytics and ML workloads",
    description: "Build scalable data lakes for AI/ML training datasets, analytics pipelines, and big data processing. Native integration with popular ML frameworks and data processing tools.",
    features: [
      "Petabyte-scale data lake storage",
      "Native Spark and Hadoop integration",
      "Versioning for ML experiment tracking",
      "High-bandwidth for training workloads"
    ],
    image: "/images/ai-ml-data-lakes.jpg",
  },
]

export function S3UseCasesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            S3 Compatibility & Use Cases
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leverage industry-standard S3 APIs to power diverse workloads across your organization
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border/50 bg-background hover:bg-blue-50 hover:border-blue-400 flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label="Previous use case"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border/50 bg-background hover:bg-blue-50 hover:border-blue-400 flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label="Next use case"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center px-16">
            {/* Left: Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border border-border/50 shadow-xl shadow-blue-500/5">
                {/* SVG Illustration based on current slide */}
                {currentSlide === 0 && (
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <svg className="w-full h-full max-w-md" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Cloud with shield */}
                      <path d="M200 80C160 80 130 110 125 150C95 155 70 180 70 215C70 255 102 280 145 280H255C298 280 330 255 330 215C330 180 305 155 275 150C270 110 240 80 200 80Z" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="3"/>
                      {/* Shield */}
                      <path d="M200 120L160 140V180C160 210 175 235 200 245C225 235 240 210 240 180V140L200 120Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2"/>
                      <path d="M185 175L195 185L220 160" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      {/* Server racks */}
                      <rect x="50" y="200" width="40" height="60" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
                      <rect x="55" y="210" width="30" height="8" rx="2" fill="#6366F1"/>
                      <rect x="55" y="225" width="30" height="8" rx="2" fill="#6366F1"/>
                      <rect x="55" y="240" width="30" height="8" rx="2" fill="#6366F1"/>
                      <rect x="310" y="200" width="40" height="60" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
                      <rect x="315" y="210" width="30" height="8" rx="2" fill="#6366F1"/>
                      <rect x="315" y="225" width="30" height="8" rx="2" fill="#6366F1"/>
                      <rect x="315" y="240" width="30" height="8" rx="2" fill="#6366F1"/>
                      {/* Connection lines */}
                      <path d="M90 230H145" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 4"/>
                      <path d="M255 230H310" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                )}
                {currentSlide === 1 && (
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <svg className="w-full h-full max-w-md" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Play button / media icon */}
                      <circle cx="200" cy="150" r="80" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="3"/>
                      <path d="M180 115L240 150L180 185V115Z" fill="#3B82F6"/>
                      {/* Film strip elements */}
                      <rect x="60" y="100" width="50" height="35" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
                      <rect x="60" y="145" width="50" height="35" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
                      <rect x="60" y="190" width="50" height="35" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
                      <rect x="290" y="100" width="50" height="35" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
                      <rect x="290" y="145" width="50" height="35" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
                      <rect x="290" y="190" width="50" height="35" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
                      {/* CDN nodes */}
                      <circle cx="85" cy="260" r="15" fill="#3B82F6"/>
                      <circle cx="200" cy="270" r="15" fill="#3B82F6"/>
                      <circle cx="315" cy="260" r="15" fill="#3B82F6"/>
                      {/* Connection lines */}
                      <path d="M100 255L185 265" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M215 265L300 255" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M200 230L200 255" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                )}
                {currentSlide === 2 && (
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <svg className="w-full h-full max-w-md" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Brain / AI icon */}
                      <circle cx="200" cy="130" r="70" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="3"/>
                      <path d="M170 110C170 110 180 130 200 130C220 130 230 110 230 110" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                      <path d="M165 140C165 140 180 160 200 160C220 160 235 140 235 140" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                      <circle cx="175" cy="115" r="8" fill="#3B82F6"/>
                      <circle cx="225" cy="115" r="8" fill="#3B82F6"/>
                      {/* Neural network nodes */}
                      <circle cx="80" cy="220" r="12" fill="#6366F1"/>
                      <circle cx="80" cy="260" r="12" fill="#6366F1"/>
                      <circle cx="150" cy="240" r="12" fill="#3B82F6"/>
                      <circle cx="250" cy="240" r="12" fill="#3B82F6"/>
                      <circle cx="320" cy="220" r="12" fill="#6366F1"/>
                      <circle cx="320" cy="260" r="12" fill="#6366F1"/>
                      {/* Connections */}
                      <path d="M92 220L138 240" stroke="#6366F1" strokeWidth="2"/>
                      <path d="M92 260L138 240" stroke="#6366F1" strokeWidth="2"/>
                      <path d="M162 240L238 240" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M262 240L308 220" stroke="#6366F1" strokeWidth="2"/>
                      <path d="M262 240L308 260" stroke="#6366F1" strokeWidth="2"/>
                      {/* Data lake */}
                      <ellipse cx="200" cy="280" rx="60" ry="15" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M200 200L200 265" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <span className="inline-block px-3 py-1.5 bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  Use Case {currentSlide + 1} of {useCases.length}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                  {useCases[currentSlide].title}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-4">
                  {useCases[currentSlide].subtitle}
                </p>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {useCases[currentSlide].description}
                </p>
              </div>

              <ul className="space-y-3">
                {useCases[currentSlide].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8"
                  asChild
                >
                  <Link href="/platform/stackobject/features">Explore Features</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600/20 hover:bg-blue-500/5 rounded-full px-8 font-medium bg-transparent"
                  asChild
                >
                  <Link href="/platform/stackobject/docs">View Documentation</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
                aria-label={`Go to ${useCase.title}`}
              >
                {useCase.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
