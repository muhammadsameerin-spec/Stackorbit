"use client"

import { StackVaultNavigation } from "@/components/stackvault-navigation"
import { CaseStudiesCarousel } from "@/components/case-studies-carousel"
import { Footer } from "@/components/footer"
import { TARSChatWidget } from "@/components/tars-chat-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Shield,
  RotateCcw,
  CheckCircle2,
} from "lucide-react"

export default function StackVaultPage() {
  const featureCards = [
    {
      title: "Flexible deployment models",
      description:
        "Offer your customer to choose the right deployment model of their choice, whether on a self-managed model or with managed service offerings.",
      image: "https://www.stackbill.com/assets/images/sb-img/disaster-flexible-deployment.svg",
    },
    {
      title: "Simplified Management",
      description:
        "Automate your recovery plans and define protection plans through a unified management control panel.",
      image: "https://www.stackbill.com/assets/images/sb-img/disaster-simplified-managment.svg",
    },
    {
      title: "Failover and failback with reliability",
      description: "Ensure compliance with non-disruptive and granular test failovers.",
      image: "https://www.stackbill.com/assets/images/sb-img/disaster-failback.svg",
    },
  ]

  const drStrategyPoints = [
    {
      title: "Validate your DR plan with test failovers.",
      description:
        "Uncover potential gaps, provide hands-on training for IT teams, and verify the recovery objectives can be achieved with your DR strategy.",
    },
    {
      title: "Targeted and Efficient DR with Failover Granularity",
      description:
        "Customize your DR strategy to failover specific entities as needed and configure multiple recovery plans to handle different scenarios.",
    },
    {
      title: "Peace of Mind with Non-Disruptive DR Testing",
      description:
        "Confidently perform compliance testing and system validation without impacting your ongoing operations, ensuring continuous business functionality.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StackVaultNavigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-700/10 border border-blue-400 rounded-full mb-6">
                <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
                  DR-as-a-Service Plugin
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-tight text-balance">
                StackOrbit DR-as-a-Service{" "}
                <span className="text-blue-700">Plugin</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 mb-4 font-medium">
                On-demand disaster recovery on your terms
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Reliable orchestration and automated recovery, simplify failovers and failbacks with recover sites of
                your choice. Powered by Opensource CEPH storage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <Button
                  size="lg"
                  className="bg-blue-700 text-white hover:bg-blue-800 rounded-full px-6"
                  asChild
                >
                  <Link href="/contact">
                    Book a Demo <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 border-blue-300 text-blue-700 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/contact">Try Stackbill</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/disaster-on-demand-disaster.svg"
                alt="StackOrbit DR-as-a-Service Plugin"
                className="w-full max-w-[480px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <Card
                key={index}
                className="border border-border/50 hover:shadow-lg transition-shadow rounded-xl overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="p-6 flex justify-center bg-slate-50">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-40 w-auto object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DR Strategy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/dr-strategy.svg"
                alt="DR Strategy deployment models"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-balance">
                A DR strategy with various deployment models based on the customer{"'"}s preferences
              </h2>
              <div className="space-y-6">
                {drStrategyPoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center">
                        <CheckCircle2 size={18} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesCarousel />

      {/* Flexible Add-On Pricing Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-[#1a6b3c] via-[#1e8a4e] to-[#2a9d5c] rounded-2xl px-8 sm:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left - Title & Subtitle */}
            <div className="text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Flexible Add-On Pricing</h3>
              <p className="text-white/80 text-sm sm:text-base">Volume discounts available for large-scale deployments</p>
            </div>

            {/* Center - Price Box */}
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-5 text-center shrink-0">
              <span className="text-4xl sm:text-5xl font-bold text-white">$50</span>
              <span className="text-white/90 text-base sm:text-lg ml-2">per hypervisor / month</span>
            </div>

            {/* Right - CTA */}
            <div className="text-center lg:text-right shrink-0">
              <p className="text-white/80 text-sm italic mb-3">Add to any StackOrbit license or bundle</p>
              <Button
                size="lg"
                className="bg-white text-[#1a6b3c] hover:bg-white/90 rounded-full px-8 font-semibold"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-balance">
            Try StackBill on your Infrastructure today
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Free 15 day trial on our hosted infrastructure</h3>
                <p className="text-sm text-white/70 mb-4">
                  Test drive StackBill for 15 days for free in our hosted cloud.
                </p>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full text-sm"
                  asChild
                >
                  <Link href="/contact">Get Your Hosted Trial</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Free 30 day trial on your infrastructure</h3>
                <p className="text-sm text-white/70 mb-4">
                  Try a POC (Proof of Concept) of StackBill in your hardware for FREE 30 days.
                </p>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full text-sm"
                  asChild
                >
                  <Link href="/contact">Get Your Free License</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Need help to choose the right hardwares?</h3>
                <p className="text-sm text-white/70 mb-4">
                  Get in touch with our technical experts to choose the right hardware for your cloud for FREE.
                </p>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full text-sm"
                  asChild
                >
                  <Link href="/contact">Connect With Our Team</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <TARSChatWidget />
    </div>
  )
}
