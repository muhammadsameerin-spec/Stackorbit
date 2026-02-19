"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Server, Building2, Network } from "lucide-react"
import { useState } from "react"
import { TARSChatWidget } from "@/components/tars-chat-widget"
import { InteractiveCloudDemo } from "@/components/interactive-cloud-demo"
import { CaseStudiesCarousel } from "@/components/case-studies-carousel"
import { useLanguage } from "@/contexts/language-context"

export default function Home2Page() {
  const { t } = useLanguage()
  const [activeUseCase, setActiveUseCase] = useState(0)

  const useCases = [
    {
      number: t('solutions.isp.number'),
      title: t('solutions.isp.title'),
      subtitle: t('solutions.isp.subtitle'),
      description: t('solutions.isp.description'),
      gradient: "from-[#8B3A3A] to-[#6B2C2C]",
    },
    {
      number: t('solutions.msp.number'),
      title: t('solutions.msp.title'),
      subtitle: t('solutions.msp.subtitle'),
      description: t('solutions.msp.description'),
      gradient: "from-[#3A5A8B] to-[#2C4A6B]",
    },
    {
      number: t('solutions.enterprise.number'),
      title: t('solutions.enterprise.title'),
      subtitle: t('solutions.enterprise.subtitle'),
      description: t('solutions.enterprise.description'),
      gradient: "from-[#5A8B3A] to-[#4A6B2C]",
    },
    {
      number: t('solutions.government.number'),
      title: t('solutions.government.title'),
      subtitle: t('solutions.government.subtitle'),
      description: t('solutions.government.description'),
      gradient: "from-[#8B5A3A] to-[#6B4A2C]",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-10 pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-3 text-foreground leading-tight">
              {t('hero.title').split('Sovereign Clouds')[0]}
              <span className="text-primary">Sovereign Clouds</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-5 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-2">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold px-6 rounded-full"
                asChild
              >
                <Link href="/platform">{t('hero.cta.primary')}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-sm font-semibold px-6 border-2 bg-transparent"
                asChild
              >
                <Link href="/contact">{t('hero.cta.secondary')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Demo Section */}
      <InteractiveCloudDemo />

      {/* Customer Logo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('demo.title')}</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {t('metadata.description')}
            </p>
          </div>

          {/* Scrolling Logo Marquee */}
          <div className="relative mt-12">
            <div className="flex animate-marquee">
              <div className="flex items-center gap-16 pr-16 shrink-0">
                <img src="/images/client-9.png" alt="Kalaam KEMS" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="/images/client-6.png" alt="Coloasia" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="/images/client-5.png" alt="AFRANET" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="/images/client-7.png" alt="Data Hub" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="/images/client-10.png" alt="Appranix" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
              <div className="flex items-center gap-16 pr-16 shrink-0">
                <img src="/images/client-9.png" alt="Kalaam KEMS" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="/images/client-6.png" alt="Coloasia" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="/images/client-5.png" alt="AFRANET" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="/images/client-7.png" alt="Data Hub" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="/images/client-10.png" alt="Appranix" className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
              {t('solutions.title')}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="w-full lg:w-80 flex flex-row lg:flex-col gap-2 lg:gap-4 overflow-x-auto pb-2 lg:pb-0">
              {useCases.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveUseCase(index)}
                  className={`flex-shrink-0 lg:flex-shrink text-left transition-all px-3 py-2 lg:px-0 lg:py-0 rounded-lg lg:rounded-none ${
                    activeUseCase === index ? "opacity-100 bg-primary/10 lg:bg-transparent" : "opacity-40 hover:opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <span className="text-sm lg:text-lg font-bold">{useCase.number}</span>
                    <span className="text-sm lg:text-lg font-medium whitespace-nowrap">{useCase.title}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex-1 w-full min-h-[400px] lg:min-h-[500px]">
              <div
                className={`bg-gradient-to-br ${useCases[activeUseCase].gradient} rounded-2xl lg:rounded-3xl p-5 sm:p-8 md:p-12 h-full flex flex-col justify-between transition-all duration-500 relative overflow-hidden`}
              >
                <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6 lg:mb-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4 text-balance">
                        {useCases[activeUseCase].subtitle}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl text-balance leading-relaxed">
                        {useCases[activeUseCase].description}
                      </p>
                    </div>
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shrink-0 w-full sm:w-auto" asChild>
                      <Link href="/solutions">{t('navigation.learnMore')}</Link>
                    </Button>
                  </div>

                  <div className="mt-6 lg:mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 min-h-[150px] lg:min-h-[200px]">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
                      <div className="bg-white/10 border border-white/20 rounded-lg p-3 lg:p-4">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-white/20 mb-2 lg:mb-3" />
                        <div className="h-2 lg:h-3 bg-white/20 rounded mb-1.5 lg:mb-2" />
                        <div className="h-1.5 lg:h-2 bg-white/10 rounded w-3/4" />
                      </div>
                      <div className="bg-white/10 border border-white/20 rounded-lg p-3 lg:p-4">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-white/20 mb-2 lg:mb-3" />
                        <div className="h-2 lg:h-3 bg-white/20 rounded mb-1.5 lg:mb-2" />
                        <div className="h-1.5 lg:h-2 bg-white/10 rounded w-3/4" />
                      </div>
                      <div className="bg-white/10 border border-white/20 rounded-lg p-3 lg:p-4 hidden md:block">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-white/20 mb-2 lg:mb-3" />
                        <div className="h-2 lg:h-3 bg-white/20 rounded mb-1.5 lg:mb-2" />
                        <div className="h-1.5 lg:h-2 bg-white/10 rounded w-3/4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <CaseStudiesCarousel />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{t('cta.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-purple-700 via-purple-800 to-purple-950 p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="relative z-10">
                <p className="text-white text-base md:text-lg font-medium mb-8 leading-relaxed">
                  {t('cta.description')}
                </p>
              </div>
              <div className="relative z-10">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-purple-900 transition-all" asChild>
                  <Link href="/contact">{t('navigation.bookDemo')}</Link>
                </Button>
              </div>
            </div>

            <div className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="relative z-10">
                <p className="text-white text-base md:text-lg font-medium mb-8 leading-relaxed">
                  {t('cta.description')}
                </p>
              </div>
              <div className="relative z-10">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-purple-900 transition-all" asChild>
                  <Link href="/platform">{t('cta.button')}</Link>
                </Button>
              </div>
            </div>

            <div className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-teal-700 via-cyan-700 to-blue-800 p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="relative z-10">
                <p className="text-white text-base md:text-lg font-medium mb-8 leading-relaxed">
                  {t('cta.description')}
                </p>
              </div>
              <div className="relative z-10">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-cyan-900 transition-all" asChild>
                  <Link href="/contact">{t('navigation.contactUs')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <TARSChatWidget />
    </div>
  )
}
