"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Building2, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Check,
  Server,
  Database,
  BarChart3,
  Users,
  DollarSign,
  Zap,
  Lock,
  Cloud,
  ChevronDown
} from "lucide-react"
import { TARSChatWidget } from "@/components/tars-chat-widget"

export default function WhatWeDoPage() {
  const [activeShift, setActiveShift] = useState(0)
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const industryShifts = [
    {
      id: "sovereign",
      title: "Sovereign Cloud is Essential",
      subtitle: "Data residency and digital sovereignty are non-negotiable",
      description: "Governments and enterprises demand full control over where data resides, who can access it, and how it's governed. StackOrbit enables service providers to offer truly sovereign cloud services—deployed on local infrastructure, compliant with regional regulations, and free from foreign jurisdiction.",
      stats: [
        { label: "Countries with data localization laws", value: "100+" },
        { label: "Enterprises requiring sovereignty", value: "78%" },
        { label: "Growth in sovereign cloud demand", value: "340%" },
      ],
      icon: Shield,
      gradient: "from-purple-600 to-indigo-700",
    },
    {
      id: "opensource",
      title: "Open Source is the Future",
      subtitle: "Avoid proprietary lock-in with battle-tested foundations",
      description: "The world's largest clouds are built on open source. StackOrbit leverages Apache CloudStack, Ceph, and Kubernetes—proven technologies powering millions of workloads globally. No licensing fees, no vendor lock-in, and full transparency in how your infrastructure operates.",
      stats: [
        { label: "Cost reduction vs. proprietary", value: "60%" },
        { label: "CloudStack clouds worldwide", value: "50K+" },
        { label: "Ceph storage deployed", value: "1EB+" },
      ],
      icon: Globe,
      gradient: "from-emerald-600 to-teal-700",
    },
    {
      id: "b2b",
      title: "B2B Cloud is a Business",
      subtitle: "Service providers need tools to monetize, not just operate",
      description: "Running cloud infrastructure isn't enough—you need to turn it into a profitable business. StackOrbit includes built-in billing, multi-tenant management, reseller hierarchies, subscription models, and customer self-service. Transform infrastructure into recurring revenue.",
      stats: [
        { label: "Revenue increase potential", value: "45%" },
        { label: "Billing automation rate", value: "100%" },
        { label: "Customer onboarding time", value: "< 5min" },
      ],
      icon: Building2,
      gradient: "from-blue-600 to-cyan-700",
    },
  ]

  const caseStudies = [
    {
      title: "Rakuten Taps StackOrbit to Build Cloud-Native Euro Bank",
      subtitle: "Why StackOrbit? Cloud on-demand and compliant, and truly minimal management.",
      industry: "Financial Services",
      region: "Europe",
      image: "/professional-businesswoman-working-at-modern-offic.jpg",
    },
    {
      title: "Leading Telecom Provider Launches Sovereign Cloud Platform",
      subtitle: "Full infrastructure control, multi-region deployment, and complete data sovereignty.",
      industry: "Telecommunications",
      region: "Middle East",
      image: "/modern-data-center-server-room-cloud-infrastructur.jpg",
    },
    {
      title: "Government Agency Deploys Private Cloud for Citizen Services",
      subtitle: "Secure, compliant, and locally managed cloud infrastructure for public services.",
      industry: "Government",
      region: "Asia Pacific",
      image: "/images/menu-filler.png",
    },
  ]

  const technologyPartners = [
    { name: "Apache CloudStack", logo: "/images/cloudstack-logo.png", description: "Open-source cloud computing platform" },
    { name: "Ceph", logo: "/images/ceph-logo.png", description: "Distributed storage system" },
    { name: "Kubernetes", logo: "/images/kubernetes-logo.png", description: "Container orchestration" },
    { name: "Linux Foundation", logo: "/images/linux-logo.png", description: "Open source ecosystem" },
  ]

  const roiMetrics = [
    { 
      icon: DollarSign, 
      value: "60%", 
      label: "Infrastructure Cost Reduction",
      description: "Compared to hyperscaler alternatives"
    },
    { 
      icon: Zap, 
      value: "10x", 
      label: "Faster Time to Market",
      description: "Launch new cloud services in days, not months"
    },
    { 
      icon: Users, 
      value: "100%", 
      label: "Customer Ownership",
      description: "Direct relationships, no intermediaries"
    },
    { 
      icon: BarChart3, 
      value: "45%", 
      label: "Margin Improvement",
      description: "Through automation and self-service"
    },
  ]

  const faqs = [
    {
      question: "What is StackOrbit and who is it for?",
      answer: "StackOrbit is a complete cloud management platform designed for service providers, ISPs, MSPs, and enterprises who want to build, operate, and monetize their own cloud infrastructure. It's ideal for organizations seeking sovereignty, control, and the ability to offer cloud services as a business."
    },
    {
      question: "How is StackOrbit different from hyperscalers like AWS or Azure?",
      answer: "Unlike hyperscalers, StackOrbit runs on YOUR infrastructure—giving you complete data sovereignty, no vendor lock-in, full margin control, and direct customer relationships. You keep 100% of customer revenue instead of paying per-resource fees to cloud giants."
    },
    {
      question: "What open-source technologies does StackOrbit use?",
      answer: "StackOrbit is built on proven open-source foundations: Apache CloudStack for compute orchestration, Ceph for distributed storage (block, file, and object), and Kubernetes for container workloads. This eliminates licensing costs and ensures long-term flexibility."
    },
    {
      question: "Can I migrate from VMware to StackOrbit?",
      answer: "Yes. StackOrbit provides a complete VMware alternative with live migration tools, KVM-based virtualization, and full feature parity for enterprise workloads. Many customers have successfully migrated from VMware to achieve 60%+ cost savings."
    },
    {
      question: "How does StackOrbit handle billing and monetization?",
      answer: "StackBill, our integrated CMP, includes complete billing automation: usage metering, invoice generation, subscription management, reseller hierarchies, and multiple payment gateways. Turn any infrastructure into a profitable cloud business."
    },
    {
      question: "What kind of support and deployment options are available?",
      answer: "StackOrbit offers flexible deployment: on-premises, in your data center, or hybrid configurations. We provide 24/7 support, professional services for deployment and migration, and comprehensive training for your team."
    },
  ]

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              One Platform.<br />
              <span className="text-primary">Complete Cloud.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Build, operate, and monetize sovereign cloud infrastructure with the only platform designed for service providers who want complete ownership of their cloud business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 rounded-full"
                asChild
              >
                <Link href="/platform">
                  Explore the Platform
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base font-semibold px-8 border-2 bg-transparent"
                asChild
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Shift Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              The Rules Have Changed
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The cloud landscape is shifting. Service providers who adapt will thrive—those who don't will be left behind.
            </p>
          </div>

          {/* Shift Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industryShifts.map((shift, index) => {
              const Icon = shift.icon
              return (
                <button
                  key={shift.id}
                  onClick={() => setActiveShift(index)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeShift === index
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {shift.title.split(" ").slice(0, 2).join(" ")}
                </button>
              )
            })}
          </div>

          {/* Shift Content */}
          <div className={`bg-gradient-to-br ${industryShifts[activeShift].gradient} rounded-3xl p-8 md:p-12 text-white relative overflow-hidden transition-all duration-500`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    {industryShifts[activeShift].title}
                  </h3>
                  <p className="text-lg text-white/90 font-medium mb-4">
                    {industryShifts[activeShift].subtitle}
                  </p>
                  <p className="text-base text-white/80 leading-relaxed mb-8">
                    {industryShifts[activeShift].description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 rounded-full"
                    asChild
                  >
                    <Link href="/platform/features/sovereign-cloud">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {industryShifts[activeShift].stats.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                      <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities - CMP + AI Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              The Complete Cloud Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              StackBill CMP and TARS AI work together to deliver intelligent, automated cloud management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* StackBill CMP Card */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">StackBill CMP</h3>
                    <p className="text-sm text-muted-foreground">Cloud Management Platform</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The unified platform for building and operating self-service public, private, and hybrid clouds with integrated billing, multi-tenancy, and complete infrastructure orchestration.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Multi-tenant cloud orchestration",
                    "Integrated billing & subscriptions",
                    "Self-service customer portal",
                    "Reseller & partner management",
                    "Usage metering & chargeback",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full" asChild>
                  <Link href="/platform/stackbill">
                    Explore StackBill
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* TARS AI Card */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">TARS AI</h3>
                    <p className="text-sm text-muted-foreground">AI-Powered Cloud Assistant</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The intelligent AI assistant that automates cloud operations, provides instant support, and helps both providers and customers get more from their cloud infrastructure.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Natural language cloud management",
                    "Automated incident response",
                    "Intelligent resource optimization",
                    "24/7 customer support automation",
                    "Predictive analytics & insights",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full" asChild>
                  <Link href="/platform/tars">
                    Meet TARS
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Modules */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">StackWatch</h4>
                <p className="text-sm text-muted-foreground">Unified monitoring & observability</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">StackObject</h4>
                <p className="text-sm text-muted-foreground">S3-compatible object storage</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-cyan-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">StackVault</h4>
                <p className="text-sm text-muted-foreground">Backup & disaster recovery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI / Business Value Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              The Business Value of Ownership
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              When you own your cloud infrastructure, you control your margins, your customers, and your future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-white">{metric.value}</div>
                  <div className="font-semibold text-white mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              asChild
            >
              <Link href="/roi-calculator">
                Calculate Your ROI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Case Studies Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Customer Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how service providers worldwide are building profitable cloud businesses with StackOrbit
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevCaseStudy}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border/50 bg-background hover:bg-card flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextCaseStudy}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border/50 bg-background hover:bg-card flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Next case study"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center px-16">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {caseStudies[currentCaseStudy].industry}
                  </span>
                  <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-semibold rounded-full">
                    {caseStudies[currentCaseStudy].region}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {caseStudies[currentCaseStudy].title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {caseStudies[currentCaseStudy].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                    asChild
                  >
                    <Link href="/resources/case-studies">Read Full Story</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 bg-transparent"
                    asChild
                  >
                    <Link href="/resources/case-studies">All Case Studies</Link>
                  </Button>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card shadow-xl">
                  <img
                    src={caseStudies[currentCaseStudy].image || "/placeholder.svg"}
                    alt={caseStudies[currentCaseStudy].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-10">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCaseStudy(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCaseStudy
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Built on Proven Open Source
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              StackOrbit leverages the world's most trusted open-source technologies—no proprietary lock-in, no licensing fees
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CloudStack */}
            <Card className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Cloud className="w-16 h-16 text-orange-500" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Apache CloudStack</h4>
                <p className="text-sm text-muted-foreground">Open-source cloud computing platform powering 50K+ clouds worldwide</p>
              </CardContent>
            </Card>

            {/* Ceph */}
            <Card className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Database className="w-16 h-16 text-red-500" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Ceph Storage</h4>
                <p className="text-sm text-muted-foreground">Distributed storage system for block, file, and object storage</p>
              </CardContent>
            </Card>

            {/* Kubernetes */}
            <Card className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Server className="w-16 h-16 text-blue-500" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Kubernetes</h4>
                <p className="text-sm text-muted-foreground">Container orchestration for cloud-native applications</p>
              </CardContent>
            </Card>

            {/* Linux */}
            <Card className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-yellow-500" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Linux Foundation</h4>
                <p className="text-sm text-muted-foreground">The open source ecosystem powering the modern world</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about StackOrbit and building your cloud business
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border/50 rounded-2xl overflow-hidden bg-card/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-card/80 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Cloud Business?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join service providers worldwide who are building profitable, sovereign cloud platforms with StackOrbit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 rounded-full font-semibold px-8"
              asChild
            >
              <Link href="/contact">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold px-8 bg-transparent"
              asChild
            >
              <Link href="/platform">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <TARSChatWidget />
    </div>
  )
}
