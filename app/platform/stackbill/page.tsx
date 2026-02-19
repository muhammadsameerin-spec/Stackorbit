"use client"

import { useRouter } from "next/navigation"

import { StackBillNavigation } from "@/components/stackbill-navigation"
import { Footer } from "@/components/footer"
import { TARSChatWidget } from "@/components/tars-chat-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Shield, Users, Zap, Activity, Server, Globe, Lock, Eye, TrendingUp, Layers } from "lucide-react"
import { useState } from "react"

export default function StackBillPage() {
  const [activeReason, setActiveReason] = useState(0)

  const benefits = [
    "Designed for ISPs, MSPs, CSPs & hosting companies",
    "Deep CloudStack API integration",
    "Scales to thousands of tenants",
    "Fully automated — reduces billing errors",
    "Works with StackOrbit CMP modules seamlessly",
    "Supports sovereign cloud deployments",
  ]

  const cloudstackItems = ["VM usage", "Volumes", "Networks", "IPs", "Templates", "VR components"]

  const securityPoints = [
    "Private deployment or on-prem installation",
    "Role-based access",
    "PCI-ready billing workflows",
    "Audit logs & customer history",
    "GDPR-friendly data handling",
  ]

  const reasons = [
    {
      number: "01",
      title: "Build Faster",
      subtitle: "Launch Your B2B Cloud Business",
      description:
        "Spin up a fully branded B2B cloud portal with tenant management, self-service provisioning, and automated billing — all integrated with Apache CloudStack. Go from infrastructure to revenue in weeks, not months.",
      gradient: "from-[#8B1538] to-[#C41E3A]",
      custom: true,
    },
    {
      number: "02",
      title: "Operate Smarter",
      subtitle: "Unified Cloud Operations Dashboard",
      description:
        "Monitor, manage, and automate your entire cloud infrastructure from a single pane of glass. StackBill combines real-time monitoring, automated alerts, and intelligent resource optimization to reduce manual effort and keep your cloud running at peak efficiency.",
      gradient: "from-[#1e40af] to-[#3b82f6]",
      custom: true,
      bgColor: "#bfdbfe",
      accentColor: "#1e40af",
      cta: "See how it works",
      ctaLink: "/platform/stackwatch",
    },
    {
      number: "03",
      title: "Scale Faster",
      subtitle: "Grow Revenue Without Limits",
      description:
        "Expand your cloud business across regions, zones, and customer segments without re-architecting. StackBill supports multi-tier reseller models, elastic resource pools, and automated capacity planning to help you scale from 10 to 10,000 tenants seamlessly.",
      gradient: "from-[#15803d] to-[#22c55e]",
      custom: true,
      bgColor: "#fef3c7",
      accentColor: "#92400e",
      cta: "Explore scaling",
      ctaLink: "/platform/stackbill/features",
    },
    {
      number: "04",
      title: "Govern with Confidence",
      subtitle: "Sovereign Control & Compliance",
      description:
        "Maintain full ownership of your data, pricing, and customer relationships. StackBill provides granular RBAC, audit trails, data residency controls, and compliance-ready infrastructure for sovereign cloud deployments trusted by governments and enterprises.",
      gradient: "from-[#92400e] to-[#d97706]",
      custom: true,
      bgColor: "#fce7f3",
      accentColor: "#9d174d",
      cta: "Learn more",
      ctaLink: "/platform/stackvault",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StackBillNavigation />

      <div>
        {/* Hero Section */}
        <section id="why-stackbill" className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Cloud Management Portal
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-tight">
                  StackBill <span className="text-primary">CMP</span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-foreground/80 mb-4">
                  Empowers service providers to run a profitable cloud business.
                </p>
                <div className="text-base text-muted-foreground mb-8 leading-relaxed space-y-3">
                  <p>
                    Deployed on your own infrastructure, it delivers self-service billing, reseller management, and
                    flexible usage-based pricing for anything-as-a-service.
                  </p>
                  <p>
                    Powered by open-source <strong className="text-foreground">Apache CloudStack®</strong>.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 items-start">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold px-6 rounded-full"
                    asChild
                  >
                    <Link href="/contact">Book a Demo</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/20 hover:bg-primary/5 px-6 rounded-full bg-transparent"
                    asChild
                  >
                    <Link href="/platform/stackbill/docs">Self-Guide Tour</Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground px-4" asChild>
                    <Link href="/resources/datasheet" className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Get Datasheet
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-200/50 w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg"
                    alt="StackBill Cloud Management Portal"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why StackBill Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">Why StackBill?</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Empowering service providers to monetize, manage, and scale cloud businesses with full control over infrastructure, customers, and revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Faster Go-to-Market */}
              <div className="group">
                <div className="relative border border-border/50 bg-background rounded-2xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 h-full p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-primary/10">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">Faster Go-to-Market</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Deploy a production-ready cloud billing and CMP layer integrated with Apache CloudStack and automation workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Unified Billing & Customer Lifecycle */}
              <div className="group">
                <div className="relative border border-border/50 bg-background rounded-2xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 h-full p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-emerald-500/10">
                      <BarChart3 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">Unified Billing & Customer Lifecycle</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Manage tenants, resellers, subscriptions, usage metering, payments, and reporting from a single control plane.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Control & Ownership */}
              <div className="group">
                <div className="relative border border-border/50 bg-background rounded-2xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 h-full p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-blue-500/10">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">Business Control & Ownership</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {'Operate under your own brand, pricing model, and infrastructure\u2014without dependency on hyperscalers.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simplifying Platform Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Simplifying How Cloud Platforms Are Built and Operated
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
                Deploy, run, and scale cloud platforms across on-premises and multi-region environments with unified
                infrastructure management, billing, automation, and AI-driven operations.
              </p>

              {/* SVG Diagram */}
              <div className="flex justify-center">
                <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="StackOrbit Platform Architecture - Build, Operate, Monetize"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platform Benefits - Build Faster */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-card/50">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">Cloud Platform Benefits</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Discover how StackOrbit transforms your cloud operations
              </p>
            </div>

            <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
              {/* Left - Tab Navigation */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {reasons.map((reason, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReason(index)}
                    className={`flex-shrink-0 text-left p-4 lg:p-5 rounded-xl transition-all duration-300 ${
                      activeReason === index
                        ? "bg-background shadow-lg border-2 border-primary"
                        : "bg-background/50 hover:bg-background hover:shadow-md border border-border/50"
                    }`}
                  >
                    <div className={`text-2xl font-bold mb-1 ${activeReason === index ? 'text-primary' : 'text-muted-foreground/40'}`}>{reason.number}</div>
                    <h3 className={`text-base font-semibold ${activeReason === index ? 'text-foreground' : 'text-muted-foreground'}`}>{reason.title}</h3>
                  </button>
                ))}
              </div>

              {/* Right - Content Display */}
              <div className="relative">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className={`${activeReason === index ? "block" : "hidden"} transition-all duration-300`}
                  >
                    {/* 01 - Build Faster (Green) */}
                    {index === 0 && (
                      <div className="bg-[#c6deb5] rounded-2xl lg:rounded-3xl min-h-[400px] lg:min-h-[480px] relative overflow-hidden flex flex-col">
                        <div className="flex items-start justify-between p-8 lg:p-10">
                          <div className="max-w-lg">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{reason.subtitle}</h3>
                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{reason.description}</p>
                          </div>
                          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 shrink-0 ml-6" asChild>
                            <Link href="/platform/stackbill/features">Try it now</Link>
                          </Button>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4 px-8 lg:px-10 pb-8 lg:pb-10">
                          <div className="relative flex flex-col items-center justify-center gap-6">
                            <div className="relative w-40 h-28">
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-5 bg-white/40 rounded-lg" />
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-36 h-5 bg-white/50 rounded-lg" />
                              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-36 h-5 bg-white/60 rounded-lg" />
                              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-20 border-2 border-[#2d5a3d] bg-gradient-to-br from-white/70 to-[#c6deb5]/30 rounded-lg rotate-[45deg] skew-x-[-10deg]" />
                            </div>
                            <div className="relative w-20 h-20">
                              {[...Array(10)].map((_, i) => (
                                <div key={i} className="absolute w-2.5 h-2.5 rounded-full bg-[#2d5a3d]" style={{ top: `${50 - 40 * Math.cos((2 * Math.PI * i) / 10)}%`, left: `${50 + 40 * Math.sin((2 * Math.PI * i) / 10)}%`, opacity: 0.3 + (i / 10) * 0.7 }} />
                              ))}
                            </div>
                          </div>
                          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 bg-[#c6deb5] rounded-lg flex items-center justify-center">
                                <Users className="w-4 h-4 text-[#2d5a3d]" />
                              </div>
                              <span className="font-semibold text-gray-900 text-sm">B2B Tenant Overview</span>
                            </div>
                            <div className="bg-[#f0f7eb] rounded-lg p-3 mb-3">
                              <div className="flex items-center gap-3 mb-1">
                                <span className="font-semibold text-gray-900 text-sm">Active Tenants</span>
                                <span className="text-xs text-gray-500">248 accounts</span>
                                <span className="text-xs text-green-600 font-medium">+18%</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 mb-3">
                              <Zap className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                              <div>
                                <span className="text-xs font-medium text-gray-700">Platform insight:</span>
                                <p className="text-xs text-gray-500 mt-0.5">Revenue growth driven by automated provisioning and self-service portal adoption across reseller channels.</p>
                              </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">billing</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">tenants</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">self-service</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 02 - Operate Smarter (Blue) */}
                    {index === 1 && (
                      <div className="bg-[#bfdbfe] rounded-2xl lg:rounded-3xl min-h-[400px] lg:min-h-[480px] relative overflow-hidden flex flex-col">
                        <div className="flex items-start justify-between p-8 lg:p-10">
                          <div className="max-w-lg">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{reason.subtitle}</h3>
                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{reason.description}</p>
                          </div>
                          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 shrink-0 ml-6" asChild>
                            <Link href="/platform/stackwatch">See how it works</Link>
                          </Button>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4 px-8 lg:px-10 pb-8 lg:pb-10">
                          <div className="relative flex flex-col items-center justify-center gap-5">
                            {/* Dashboard wireframe graphic */}
                            <div className="w-48 bg-white/70 rounded-xl p-4 shadow-sm border border-blue-200/50">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                              </div>
                              <div className="space-y-2">
                                <div className="flex gap-2">
                                  <div className="h-8 w-1/2 bg-blue-200/60 rounded" />
                                  <div className="h-8 w-1/2 bg-blue-300/40 rounded" />
                                </div>
                                <div className="h-3 w-full bg-blue-100 rounded" />
                                <div className="h-3 w-3/4 bg-blue-100 rounded" />
                              </div>
                            </div>
                            {/* Pulse indicator */}
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <div className="w-4 h-4 bg-[#1e40af] rounded-full" />
                                <div className="absolute inset-0 w-4 h-4 bg-[#1e40af]/40 rounded-full animate-ping" />
                              </div>
                              <span className="text-sm font-medium text-[#1e40af]">Systems Healthy</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Activity className="w-4 h-4 text-[#1e40af]" />
                              </div>
                              <span className="font-semibold text-gray-900 text-sm">Operations Center</span>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3 mb-3">
                              <div className="flex items-center gap-3 mb-1">
                                <span className="font-semibold text-gray-900 text-sm">Uptime</span>
                                <span className="text-xs text-gray-500">99.97% SLA</span>
                                <span className="text-xs text-blue-600 font-medium">30 days</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 mb-3">
                              <Eye className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                              <div>
                                <span className="text-xs font-medium text-gray-700">Automation insight:</span>
                                <p className="text-xs text-gray-500 mt-0.5">72% of alerts auto-resolved via StackWatch rules. Manual interventions down 45% this month.</p>
                              </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">monitoring</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">automation</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">alerts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 03 - Scale Faster (Amber/Warm) */}
                    {index === 2 && (
                      <div className="bg-[#fef3c7] rounded-2xl lg:rounded-3xl min-h-[400px] lg:min-h-[480px] relative overflow-hidden flex flex-col">
                        <div className="flex items-start justify-between p-8 lg:p-10">
                          <div className="max-w-lg">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{reason.subtitle}</h3>
                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{reason.description}</p>
                          </div>
                          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 shrink-0 ml-6" asChild>
                            <Link href="/platform/stackbill/features">Explore scaling</Link>
                          </Button>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4 px-8 lg:px-10 pb-8 lg:pb-10">
                          <div className="relative flex flex-col items-center justify-center gap-5">
                            {/* Growth bar chart graphic */}
                            <div className="flex items-end gap-3 h-32">
                              {[40, 55, 48, 70, 65, 85, 95].map((h, i) => (
                                <div key={i} className="w-5 rounded-t-md transition-all" style={{ height: `${h}%`, backgroundColor: i >= 5 ? '#92400e' : `rgba(146, 64, 14, ${0.2 + i * 0.1})` }} />
                              ))}
                            </div>
                            {/* Scale indicator */}
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-5 h-5 text-[#92400e]" />
                              <span className="text-sm font-medium text-[#92400e]">10x Growth Ready</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                <Globe className="w-4 h-4 text-[#92400e]" />
                              </div>
                              <span className="font-semibold text-gray-900 text-sm">Growth Dashboard</span>
                            </div>
                            <div className="bg-amber-50 rounded-lg p-3 mb-3">
                              <div className="flex items-center gap-3 mb-1">
                                <span className="font-semibold text-gray-900 text-sm">Resellers</span>
                                <span className="text-xs text-gray-500">42 active</span>
                                <span className="text-xs text-amber-700 font-medium">+32%</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 mb-3">
                              <TrendingUp className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                              <div>
                                <span className="text-xs font-medium text-gray-700">Scale insight:</span>
                                <p className="text-xs text-gray-500 mt-0.5">Multi-zone deployments up 60%. Reseller onboarding time reduced from 5 days to 4 hours with automation.</p>
                              </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">resellers</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">multi-zone</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">capacity</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 04 - Govern with Confidence (Pink) */}
                    {index === 3 && (
                      <div className="bg-[#fce7f3] rounded-2xl lg:rounded-3xl min-h-[400px] lg:min-h-[480px] relative overflow-hidden flex flex-col">
                        <div className="flex items-start justify-between p-8 lg:p-10">
                          <div className="max-w-lg">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{reason.subtitle}</h3>
                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{reason.description}</p>
                          </div>
                          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 shrink-0 ml-6" asChild>
                            <Link href="/platform/stackvault">Learn more</Link>
                          </Button>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4 px-8 lg:px-10 pb-8 lg:pb-10">
                          <div className="relative flex flex-col items-center justify-center gap-5">
                            {/* Shield + lock graphic */}
                            <div className="relative">
                              <div className="w-28 h-32 bg-white/60 rounded-2xl border-2 border-[#9d174d]/20 flex items-center justify-center shadow-sm">
                                <Shield className="w-14 h-14 text-[#9d174d]/70" />
                              </div>
                              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-pink-200">
                                <Lock className="w-4 h-4 text-[#9d174d]" />
                              </div>
                            </div>
                            {/* Compliance badges */}
                            <div className="flex gap-2">
                              <span className="text-xs px-3 py-1 bg-white/70 rounded-full border border-pink-200 text-[#9d174d] font-medium">RBAC</span>
                              <span className="text-xs px-3 py-1 bg-white/70 rounded-full border border-pink-200 text-[#9d174d] font-medium">Audit</span>
                              <span className="text-xs px-3 py-1 bg-white/70 rounded-full border border-pink-200 text-[#9d174d] font-medium">Sovereign</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                                <Lock className="w-4 h-4 text-[#9d174d]" />
                              </div>
                              <span className="font-semibold text-gray-900 text-sm">Governance Panel</span>
                            </div>
                            <div className="bg-pink-50 rounded-lg p-3 mb-3">
                              <div className="flex items-center gap-3 mb-1">
                                <span className="font-semibold text-gray-900 text-sm">Compliance</span>
                                <span className="text-xs text-gray-500">All checks passed</span>
                                <span className="text-xs text-green-600 font-medium">100%</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 mb-3">
                              <Shield className="w-4 h-4 text-pink-600 mt-0.5 shrink-0" />
                              <div>
                                <span className="text-xs font-medium text-gray-700">Security insight:</span>
                                <p className="text-xs text-gray-500 mt-0.5">All tenant data isolated with full RBAC enforcement. 156 audit events logged this week with zero policy violations.</p>
                              </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">compliance</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">data-residency</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">RBAC</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by Cloud Providers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Trusted by Cloud Providers Worldwide
              </h2>
              <p className="text-muted-foreground mb-10 font-light">
                Join the service providers who have transformed their cloud business.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-12">
                {[
                  { name: "Kalaam KEMS", logo: "/images/client-9.png" },
                  { name: "Coloasia", logo: "/images/client-6.png" },
                  { name: "AFRANET", logo: "/images/client-5.png" },
                  { name: "Data Hub", logo: "/images/client-7.png" },
                  { name: "Appranix", logo: "/images/client-10.png" },
                ].map((customer) => (
                  <img
                    key={customer.name}
                    src={customer.logo}
                    alt={customer.name}
                    className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Let's Get Started CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">Let's Get Started</h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                Ready to transform your cloud business? Choose how you'd like to begin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - Get a Demo */}
              <div className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[280px] hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <p className="text-white text-base md:text-lg font-medium mb-6 leading-relaxed">
                    We'll guide you through a live demo tailored to your specific needs.
                  </p>
                </div>
                <div className="relative z-10">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-purple-900 transition-all rounded-full px-6"
                    asChild
                  >
                    <Link href="/contact">Get a Demo</Link>
                  </Button>
                </div>
              </div>

              {/* Card 2 - Free Trial */}
              <div className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[280px] hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <p className="text-white text-base md:text-lg font-medium mb-6 leading-relaxed">
                    Take StackOrbit for a test drive through hybrid and multicloud environments.
                  </p>
                </div>
                <div className="relative z-10">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-purple-900 transition-all rounded-full px-6"
                    asChild
                  >
                    <Link href="/platform">Free Trial</Link>
                  </Button>
                </div>
              </div>

              {/* Card 3 - Let's Talk */}
              <div className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[280px] hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <p className="text-white text-base md:text-lg font-medium mb-6 leading-relaxed">
                    We'd be happy to start a conversation and answer any of your questions.
                  </p>
                </div>
                <div className="relative z-10">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-cyan-900 transition-all rounded-full px-6"
                    asChild
                  >
                    <Link href="/contact">Let's Talk</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <TARSChatWidget />
    </div>
  )
}
