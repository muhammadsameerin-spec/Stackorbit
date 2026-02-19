"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  ArrowRight,
  Check,
  Server,
  Cpu,
  HardDrive,
  Network,
  Shield,
  Zap,
  Settings,
  Globe,
  DollarSign,
  Clock,
  ExternalLink,
  Sparkles,
  Code,
  Key,
  Layers,
  RefreshCw,
  Activity,
  Box,
  Container,
  GitBranch,
  Lock,
  Users,
  BarChart3,
  Cloud,
  Database,
  Play,
  Gauge,
  Monitor,
  Brain,
  Boxes,
  CircuitBoard,
  Workflow,
  Palette,
} from "lucide-react"

export default function GPUIntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeVendor, setActiveVendor] = useState("nvidia")

  const features = [
    {
      icon: Users,
      title: "Self-Service GPU Portal",
      description:
        "Enable your customers to provision GPU-backed instances on-demand through a complete self-service portal with real-time availability.",
    },
    {
      icon: DollarSign,
      title: "GPU Usage-Based Billing",
      description:
        "Monetize GPU workloads with granular metering. Track GPU allocation by time, type, and tenant with automatic chargeback and invoicing.",
    },
    {
      icon: Layers,
      title: "GPU Service Offerings",
      description:
        "Create differentiated GPU compute offerings - from entry-level inference to high-end training clusters - each with custom pricing.",
    },
    {
      icon: Gauge,
      title: "Resource Limits & Quotas",
      description:
        "Enforce GPU limits at Account, Domain, and Project levels. Prevent resource hoarding and ensure fair allocation across tenants.",
    },
    {
      icon: BarChart3,
      title: "GPU Utilization Analytics",
      description:
        "Monitor GPU usage across your infrastructure. Identify underutilized resources and optimize placement for maximum efficiency.",
    },
    {
      icon: Shield,
      title: "Multi-Tenant Isolation",
      description:
        "Complete tenant isolation for GPU resources. Each customer's GPU workloads are securely separated at the hardware level.",
    },
  ]

  const platformFeatures = [
    {
      icon: Cpu,
      title: "Auto GPU Discovery",
      description: "Automatic detection of GPU devices on KVM hosts",
    },
    {
      icon: Boxes,
      title: "GPU Grouping",
      description: "Classify GPUs by vendor, type, or performance tier",
    },
    {
      icon: Monitor,
      title: "Passthrough Mode",
      description: "Dedicated GPU assignment to single instance",
    },
    {
      icon: Layers,
      title: "vGPU Partitioning",
      description: "Share single GPU across multiple instances",
    },
    {
      icon: Settings,
      title: "GPU Service Offerings",
      description: "Link GPUs to compute offerings for self-service",
    },
    {
      icon: Container,
      title: "Kubernetes GPU Support",
      description: "GPU-backed CKS clusters for ML workloads",
    },
    {
      icon: BarChart3,
      title: "Usage Metering",
      description: "Full GPU allocation lifecycle tracking",
    },
    {
      icon: Shield,
      title: "Quota Management",
      description: "Account, Domain, and Project level limits",
    },
    {
      icon: Brain,
      title: "AI/ML Optimized",
      description: "Purpose-built for machine learning workloads",
    },
    {
      icon: Palette,
      title: "VDI Ready",
      description: "Virtual desktop infrastructure support",
    },
    {
      icon: Workflow,
      title: "Render Farms",
      description: "High-performance graphics rendering",
    },
    {
      icon: CircuitBoard,
      title: "HPC Workloads",
      description: "Scientific computing and simulations",
    },
  ]

  const gpuVendors = {
    nvidia: {
      name: "NVIDIA",
      logo: "/images/nvidia-logo.svg",
      color: "green",
      description: "Industry-leading GPUs for AI, ML, and professional graphics workloads",
      models: [
        { series: "Data Center", models: ["L2", "L4", "L20", "L40", "L40S", "A2", "A10", "A16", "A40", "T4", "V100"] },
        { series: "Professional", models: ["RTX 6000 Ada", "RTX 5880 Ada", "RTX 5000 Ada", "RTX A6000", "RTX A5500", "RTX A5000"] },
        { series: "Blackwell", models: ["RTX PRO 6000 Blackwell Server Edition"] },
        { series: "Legacy", models: ["M10", "RTX 8000", "RTX 6000 Passive"] },
      ],
      features: [
        "GPU Passthrough (Dedicated)",
        "vGPU Partitioning (Shared)",
        "CUDA Toolkit 13.0 Support",
        "AI Enterprise Compatible",
      ],
    },
    amd: {
      name: "AMD",
      logo: "/images/amd-logo.svg",
      color: "red",
      description: "High-performance GPUs for compute and visualization workloads",
      models: [
        { series: "Instinct", models: ["MI300X", "MI300A", "MI250X", "MI210", "MI100"] },
        { series: "Radeon Pro", models: ["W7900", "W7800", "W6800", "V620", "V520"] },
      ],
      features: [
        "GPU Passthrough Support",
        "ROCm Software Stack",
        "OpenCL Compute",
        "Professional Visualization",
      ],
    },
    intel: {
      name: "Intel",
      logo: "/images/intel-logo.svg", 
      color: "blue",
      description: "Flexible GPU solutions for edge AI and media processing",
      models: [
        { series: "Data Center GPU", models: ["Max 1550", "Max 1100", "Flex 170", "Flex 140"] },
        { series: "Arc Pro", models: ["A60", "A50", "A40", "A30M"] },
      ],
      features: [
        "SR-IOV Virtualization",
        "oneAPI Support",
        "Media Encoding/Decoding",
        "Edge AI Inference",
      ],
    },
  }

  const requirements = [
    {
      label: "CloudStack Version",
      value: "4.21+",
      icon: "server",
      color: "green",
      description: "Apache CloudStack 4.21 introduces native GPU resource support with passthrough and vGPU capabilities",
    },
    {
      label: "StackBill Edition",
      value: "Premium or Enterprise",
      icon: "crown",
      color: "purple",
      description: "GPU-as-a-Service with billing integration is available on Premium and Enterprise plans",
    },
    {
      label: "Hypervisor",
      value: "KVM (Technical Preview)",
      icon: "code",
      color: "cyan",
      description: "GPU support currently available for KVM-based environments with automatic device discovery",
    },
    {
      label: "GPU Hardware",
      value: "NVIDIA / AMD / Intel",
      icon: "key",
      color: "amber",
      description: "Compatible GPU hardware with appropriate drivers installed on KVM hosts",
    },
  ]

  const faqs = [
    {
      question: "What GPU deployment modes are supported?",
      answer:
        "CloudStack 4.21 supports two GPU deployment modes: Passthrough (dedicated) where a GPU is exclusively assigned to a single instance, and vGPU (partitioned) where a single physical GPU is shared across multiple instances. The mode depends on your GPU hardware capabilities and use case requirements.",
    },
    {
      question: "How are GPUs discovered and managed?",
      answer:
        "CloudStack automatically discovers GPU devices on supported KVM hosts. Administrators can then group and classify GPUs by vendor or type, create GPU-backed Service Offerings, and set quota limits at Account, Domain, and Project levels. End users select GPU offerings when deploying instances.",
    },
    {
      question: "Can customers use GPUs with Kubernetes clusters?",
      answer:
        "Yes, GPU-backed Service Offerings can be used with CloudStack Kubernetes Service (CKS). This enables customers to deploy GPU-accelerated Kubernetes clusters for machine learning training, inference, and other GPU-intensive containerized workloads.",
    },
    {
      question: "How is GPU usage billed?",
      answer:
        "StackBill provides granular GPU usage tracking and billing. GPU allocation is metered throughout the full lifecycle - from provisioning to termination. Custom pricing can be set per GPU type, and usage is automatically included in tenant invoices with detailed breakdowns.",
    },
    {
      question: "What NVIDIA vGPU profiles are supported?",
      answer:
        "CloudStack supports NVIDIA vGPU software for partitioning GPUs across multiple VMs. Supported GPUs include L-series (L2, L4, L20, L40, L40S), A-series (A2, A10, A16, A40), T4, V100, and professional RTX cards. Note: C-series vGPU types require NVIDIA AI Enterprise licensing.",
    },
    {
      question: "Is multi-tenancy supported for GPU resources?",
      answer:
        "Absolutely. GPU resources are fully integrated with CloudStack's multi-tenant architecture. Each tenant's GPU allocations are isolated, quota limits are enforced per Account/Domain/Project, and usage is tracked separately for billing and chargeback purposes.",
    },
  ]

  const useCases = [
    {
      title: "AI/ML Training & Inference",
      description: "Offer GPU compute for machine learning model training and real-time inference workloads.",
      icon: Brain,
      color: "green",
    },
    {
      title: "Virtual Desktop (VDI)",
      description: "Deliver GPU-accelerated virtual desktops for CAD, design, and professional applications.",
      icon: Monitor,
      color: "purple",
    },
    {
      title: "Rendering & Visualization",
      description: "Enable render farms and 3D visualization workloads for media and entertainment customers.",
      icon: Palette,
      color: "cyan",
    },
    {
      title: "Scientific Computing (HPC)",
      description: "Support high-performance computing for research, simulations, and data analytics.",
      icon: CircuitBoard,
      color: "amber",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Split Two-Tone Design */}
      <section className="relative pt-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Left - Dark Panel */}
          <div className="bg-slate-900 px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex items-center">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">
                Platform Integration
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                GPU-as-a-Service
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Offer GPU-accelerated workloads for AI/ML, VDI, and HPC with native GPU support and usage-based billing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 rounded-full"
                  asChild
                >
                  <Link href="/contact">
                    Book a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 rounded-full bg-transparent"
                  asChild
                >
                  <Link href="https://shapeblue.com/cloudstack-4-21-deep-dive" target="_blank">
                    View Docs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* Feature highlights */}
              <div className="flex gap-8 pt-8 border-t border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-white">NVIDIA</div>
                  <div className="text-xs text-slate-400">AMD / Intel</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">vGPU</div>
                  <div className="text-xs text-slate-400">Passthrough</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">CS 4.21</div>
                  <div className="text-xs text-slate-400">Native Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Light Panel with Image */}
          <div className="bg-green-50 px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex items-center justify-center">
            <div className="relative">
              {/* Soft circular glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-green-100 rounded-full" />
              </div>
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-white rounded-full shadow-xl flex items-center justify-center p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-3xl text-slate-400">+</span>
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Capabilities Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-background overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Layers className="w-3.5 h-3.5" />
              Platform Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Enterprise-Grade GPU Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Native GPU orchestration powered by Apache CloudStack 4.21 with StackBill monetization
            </p>
          </div>
        </div>

        {/* Scrolling Carousel Container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* First Row - Scrolling Left */}
          <div className="flex gap-5 mb-5 animate-scroll-left">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-5 shrink-0">
                {platformFeatures.slice(0, 6).map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-green-100 hover:border-green-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="flex gap-5 animate-scroll-right">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-5 shrink-0">
                {platformFeatures.slice(6, 12).map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Vendor Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <CircuitBoard className="w-3.5 h-3.5" />
              Hardware Compatibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Supported GPU Vendors & Models
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CloudStack 4.21 supports major GPU vendors for passthrough and vGPU deployments
            </p>
          </div>

          {/* Vendor Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            {Object.entries(gpuVendors).map(([key, vendor]) => (
              <button
                key={key}
                onClick={() => setActiveVendor(key)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeVendor === key
                    ? key === "nvidia"
                      ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                      : key === "amd"
                      ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                      : "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {vendor.name}
              </button>
            ))}
          </div>

          {/* Vendor Content */}
          {Object.entries(gpuVendors).map(([key, vendor]) => (
            <div
              key={key}
              className={`${activeVendor === key ? "block" : "hidden"}`}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Models */}
                <div>
                  <Card className={`p-6 border-2 ${
                    key === "nvidia" ? "border-green-200" : key === "amd" ? "border-red-200" : "border-blue-200"
                  }`}>
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Cpu className={`w-5 h-5 ${
                        key === "nvidia" ? "text-green-600" : key === "amd" ? "text-red-600" : "text-blue-600"
                      }`} />
                      Supported GPU Models
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">{vendor.description}</p>
                    
                    <div className="space-y-4">
                      {vendor.models.map((series, idx) => (
                        <div key={idx}>
                          <h4 className={`text-sm font-semibold mb-2 ${
                            key === "nvidia" ? "text-green-700" : key === "amd" ? "text-red-700" : "text-blue-700"
                          }`}>
                            {series.series}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {series.models.map((model, mIdx) => (
                              <span
                                key={mIdx}
                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                  key === "nvidia"
                                    ? "bg-green-100 text-green-700"
                                    : key === "amd"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-blue-100 text-blue-700"
                                }`}
                              >
                                {model}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Right: Features */}
                <div>
                  <Card className={`p-6 border-2 ${
                    key === "nvidia" ? "border-green-200" : key === "amd" ? "border-red-200" : "border-blue-200"
                  } h-full`}>
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Settings className={`w-5 h-5 ${
                        key === "nvidia" ? "text-green-600" : key === "amd" ? "text-red-600" : "text-blue-600"
                      }`} />
                      Supported Features
                    </h3>
                    
                    <div className="space-y-3">
                      {vendor.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            key === "nvidia"
                              ? "bg-green-100"
                              : key === "amd"
                              ? "bg-red-100"
                              : "bg-blue-100"
                          }`}>
                            <Check className={`w-4 h-4 ${
                              key === "nvidia" ? "text-green-600" : key === "amd" ? "text-red-600" : "text-blue-600"
                            }`} />
                          </div>
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Deployment Modes */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Deployment Modes</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className={`p-3 rounded-lg text-center ${
                          key === "nvidia" ? "bg-green-50" : key === "amd" ? "bg-red-50" : "bg-blue-50"
                        }`}>
                          <Monitor className={`w-5 h-5 mx-auto mb-1 ${
                            key === "nvidia" ? "text-green-600" : key === "amd" ? "text-red-600" : "text-blue-600"
                          }`} />
                          <p className="text-xs font-semibold text-foreground">Passthrough</p>
                          <p className="text-xs text-muted-foreground">Dedicated GPU</p>
                        </div>
                        <div className={`p-3 rounded-lg text-center ${
                          key === "nvidia" ? "bg-green-50" : key === "amd" ? "bg-red-50" : "bg-blue-50"
                        }`}>
                          <Layers className={`w-5 h-5 mx-auto mb-1 ${
                            key === "nvidia" ? "text-green-600" : key === "amd" ? "text-red-600" : "text-blue-600"
                          }`} />
                          <p className="text-xs font-semibold text-foreground">vGPU</p>
                          <p className="text-xs text-muted-foreground">Shared GPU</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B2B Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <DollarSign className="w-3.5 h-3.5" />
              For Service Providers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Monetize GPU Workloads with StackBill
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Turn your GPU infrastructure into a revenue-generating service with complete billing integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-border hover:border-amber-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-amber-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* GPU Modes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-green-950 to-emerald-950 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 text-green-300 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Layers className="w-3.5 h-3.5" />
              Deployment Modes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Passthrough vs vGPU
            </h2>
            <p className="text-green-100/80 max-w-2xl mx-auto">
              Choose the right GPU deployment mode based on your workload requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Passthrough */}
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">GPU Passthrough</h3>
              <p className="text-green-100/70 mb-6">
                Dedicated GPU assignment where the entire physical GPU is exclusively assigned to a single instance for maximum performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-100/80">Full GPU resources to single VM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-100/80">Maximum performance for AI training</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-100/80">Ideal for HPC and rendering</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-100/80">Direct hardware access</span>
                </li>
              </ul>
            </div>

            {/* vGPU */}
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">vGPU Partitioning</h3>
              <p className="text-emerald-100/70 mb-6">
                Single physical GPU partitioned for use by multiple instances, enabling efficient resource sharing and higher density.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-100/80">Share GPU across multiple VMs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-100/80">Higher density, lower cost per VM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-100/80">Ideal for VDI and inference</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-100/80">NVIDIA vGPU software support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Zap className="w-3.5 h-3.5" />
              Use Cases
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who Benefits from GPU-as-a-Service?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enable diverse GPU workloads for different customer segments
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              const colorClasses = {
                green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200 hover:border-green-400" },
                purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200 hover:border-purple-400" },
                cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200 hover:border-cyan-400" },
                amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200 hover:border-amber-400" },
              }
              const colors = colorClasses[useCase.color as keyof typeof colorClasses]
              
              return (
                <Card
                  key={index}
                  className={`p-6 border-2 ${colors.border} hover:shadow-lg transition-all duration-300 text-center group`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Settings className="w-3.5 h-3.5" />
              Prerequisites
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What are the requirements?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ensure your environment meets these requirements before enabling GPU-as-a-Service
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {requirements.map((req, index) => {
              const colorClasses = {
                green: {
                  bg: "bg-green-50 group-hover:bg-green-100",
                  icon: "text-green-600",
                  border: "border-green-200 hover:border-green-400",
                  badge: "bg-green-600 text-white",
                  glow: "group-hover:shadow-green-200/50"
                },
                purple: {
                  bg: "bg-purple-50 group-hover:bg-purple-100",
                  icon: "text-purple-600",
                  border: "border-purple-200 hover:border-purple-400",
                  badge: "bg-purple-600 text-white",
                  glow: "group-hover:shadow-purple-200/50"
                },
                cyan: {
                  bg: "bg-cyan-50 group-hover:bg-cyan-100",
                  icon: "text-cyan-600",
                  border: "border-cyan-200 hover:border-cyan-400",
                  badge: "bg-cyan-600 text-white",
                  glow: "group-hover:shadow-cyan-200/50"
                },
                amber: {
                  bg: "bg-amber-50 group-hover:bg-amber-100",
                  icon: "text-amber-600",
                  border: "border-amber-200 hover:border-amber-400",
                  badge: "bg-amber-600 text-white",
                  glow: "group-hover:shadow-amber-200/50"
                },
              }
              const colors = colorClasses[req.color as keyof typeof colorClasses]
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-background rounded-2xl p-6 border-2 ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.glow} cursor-pointer overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg viewBox="0 0 100 100" fill="currentColor" className={colors.icon}>
                      <circle cx="80" cy="20" r="40" />
                    </svg>
                  </div>
                  
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 transition-colors`}>
                    {req.icon === "server" && <Server className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "crown" && <Sparkles className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "code" && <Code className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "key" && <Cpu className={`w-7 h-7 ${colors.icon}`} />}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {req.label}
                  </h3>
                  
                  <div className={`inline-flex items-center px-3 py-1.5 ${colors.badge} rounded-full text-sm font-semibold mb-4`}>
                    {req.value}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {req.description}
                  </p>
                  
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.badge} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              )
            })}
          </div>

          <div className="mt-10 bg-gradient-to-r from-green-50 via-emerald-50 to-cyan-50 rounded-2xl p-6 border border-green-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ready to enable GPU-as-a-Service?</h4>
                  <p className="text-sm text-muted-foreground">Our team can help you plan your GPU deployment</p>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6" asChild>
                <Link href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Offer GPU-as-a-Service?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Enable AI/ML, VDI, and HPC workloads for your customers with CloudStack's native GPU support and StackBill's monetization capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8 font-semibold"
              asChild
            >
              <Link href="/contact">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
              asChild
            >
              <Link href="https://docs.cloudstack.apache.org" target="_blank">
                CloudStack Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
