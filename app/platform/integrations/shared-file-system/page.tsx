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
  Lock,
  Users,
  BarChart3,
  Cloud,
  Database,
  Gauge,
  Share2,
  Scale,
  FolderSync,
  FileText,
  MonitorUp,
  Maximize2,
  Link2,
} from "lucide-react"

export default function SharedFileSystemPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    {
      icon: Users,
      title: "Multi-Instance Access",
      description:
        "Allow multiple compute instances to mount and access the same file system simultaneously with NFS protocol support.",
    },
    {
      icon: DollarSign,
      title: "Pay-Per-GB Pricing",
      description:
        "Offer flexible storage pricing based on actual consumption. Define cost per GB and let customers pay only for what they use.",
    },
    {
      icon: Scale,
      title: "Elastic Scalability",
      description:
        "Scale storage capacity up or down without downtime. Define minimum and maximum disk sizes to match customer needs.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Enterprise-grade NFS performance for demanding workloads including databases, analytics, and content management systems.",
    },
    {
      icon: Shield,
      title: "Data Protection",
      description:
        "Built-in redundancy and data protection. Integrate with backup policies for comprehensive disaster recovery.",
    },
    {
      icon: Settings,
      title: "Self-Service Portal",
      description:
        "Empower customers to provision, resize, and manage shared file systems through an intuitive self-service interface.",
    },
  ]

  const platformFeatures = [
    {
      icon: Share2,
      title: "NFS Protocol Support",
      description: "Industry-standard NFS for seamless integration",
    },
    {
      icon: MonitorUp,
      title: "Live Resize",
      description: "Expand storage capacity without unmounting",
    },
    {
      icon: Layers,
      title: "Multi-Zone Support",
      description: "Deploy across multiple availability zones",
    },
    {
      icon: Lock,
      title: "Access Controls",
      description: "Fine-grained permissions and network isolation",
    },
    {
      icon: Gauge,
      title: "Performance Tiers",
      description: "Multiple storage tiers for different workloads",
    },
    {
      icon: Database,
      title: "Shared Storage Type",
      description: "Optimized for concurrent multi-instance access",
    },
    {
      icon: BarChart3,
      title: "Usage Monitoring",
      description: "Real-time capacity and IOPS monitoring",
    },
    {
      icon: DollarSign,
      title: "Flexible Billing",
      description: "Hourly, monthly, or custom billing cycles",
    },
    {
      icon: FolderSync,
      title: "Data Sync",
      description: "Consistent data across all connected instances",
    },
    {
      icon: Server,
      title: "Compute Integration",
      description: "Seamless mount to any VM or instance",
    },
    {
      icon: FileText,
      title: "File-Level Access",
      description: "Standard file system operations support",
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Automated health checks and alerting",
    },
  ]

  const requirements = [
    {
      label: "Storage Backend",
      value: "NFS/Shared Storage",
      icon: "server",
      color: "teal",
      description: "Configure shared storage backend with NFS support in your CloudStack environment",
    },
    {
      label: "StackBill Edition",
      value: "All Editions",
      icon: "crown",
      color: "purple",
      description: "Shared File Service is available across all StackBill editions",
    },
    {
      label: "Network Setup",
      value: "Private Network",
      icon: "code",
      color: "blue",
      description: "Isolated network for secure file system access between instances",
    },
    {
      label: "Compute Offering",
      value: "SFS-Optimized",
      icon: "key",
      color: "green",
      description: "Create dedicated compute offerings optimized for SFS workloads",
    },
  ]

  const faqs = [
    {
      question: "How do customers create a Shared File System?",
      answer:
        "Customers can create a Shared File System with a few clicks from the StackBill user portal. They select the desired storage size, availability zone, and mount the file system to their compute instances using the NFS protocol.",
    },
    {
      question: "Can multiple VMs access the same file system?",
      answer:
        "Yes, that's the primary use case. Multiple compute instances can mount and access the same Shared File System simultaneously, enabling shared storage scenarios like web farms, content management, and distributed applications.",
    },
    {
      question: "How is SFS usage billed?",
      answer:
        "StackBill provides usage-based billing for Shared File Systems. Administrators configure cost per GB, and customers are billed based on their provisioned storage capacity. Both hourly and monthly billing models are supported.",
    },
    {
      question: "Can customers resize their file systems?",
      answer:
        "Yes, customers can expand their Shared File Systems without unmounting or service interruption. The storage offerings define minimum and maximum sizes, giving customers flexibility to scale within those bounds.",
    },
    {
      question: "What workloads are best suited for SFS?",
      answer:
        "SFS is ideal for web server farms sharing content, CMS platforms, development environments with shared code repositories, big data analytics requiring shared datasets, and any application needing concurrent file access from multiple instances.",
    },
    {
      question: "Is data protected in SFS?",
      answer:
        "Yes, the underlying storage infrastructure provides redundancy. Additionally, SFS integrates with StackBill's backup policies, allowing customers to schedule snapshots and implement disaster recovery strategies.",
    },
  ]

  const useCases = [
    {
      title: "Web Server Farms",
      description: "Share web content, assets, and configuration across multiple web servers for consistent delivery.",
      icon: Globe,
      color: "teal",
    },
    {
      title: "Content Management",
      description: "Store and serve media files, documents, and digital assets from a central location to multiple applications.",
      icon: FileText,
      color: "purple",
    },
    {
      title: "Development Teams",
      description: "Shared code repositories, build artifacts, and development environments for collaborative teams.",
      icon: Code,
      color: "blue",
    },
    {
      title: "Big Data & Analytics",
      description: "Share large datasets across compute clusters for distributed processing and analytics workloads.",
      icon: BarChart3,
      color: "green",
    },
  ]

  const setupSteps = [
    {
      step: "01",
      title: "Create Compute Offering",
      description: "Configure SFS-optimized compute offerings with CPU, memory, and storage specifications for each zone.",
    },
    {
      step: "02",
      title: "Create Storage Offering",
      description: "Define storage offerings with minimum/maximum sizes and cost per GB pricing for customer billing.",
    },
    {
      step: "03",
      title: "Enable SFS Service",
      description: "Activate the SFS add-on in StackBill admin portal to make the service available to customers.",
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
                Shared File System
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Offer fully managed NFS-based shared storage. Enable multiple compute instances to access the same file system with elastic scalability.
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
                  <Link href="https://docs-admin.stackbill.com/docs/admin/add-ons/sfs-service" target="_blank">
                    View Docs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* Feature highlights */}
              <div className="flex gap-8 pt-8 border-t border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-white">NFS</div>
                  <div className="text-xs text-slate-400">Protocol</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Elastic</div>
                  <div className="text-xs text-slate-400">Scalability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Pay/GB</div>
                  <div className="text-xs text-slate-400">Pricing</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Light Panel with Image */}
          <div className="bg-teal-50 px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex items-center justify-center">
            <div className="relative">
              {/* Soft circular glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-teal-100 rounded-full" />
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
                  <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center">
                    <Share2 className="w-10 h-10 text-white" />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Layers className="w-3.5 h-3.5" />
              Platform Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Enterprise-Grade Shared Storage Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to offer production-ready Shared File Systems to your customers
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
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-teal-100 hover:border-teal-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-teal-600" />
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

      {/* B2B Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <DollarSign className="w-3.5 h-3.5" />
              For Service Providers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Why Offer Shared File Systems?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Add a high-demand storage service to your cloud portfolio with flexible pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-border hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Multi-Access & Elastic Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                <Link2 className="w-3.5 h-3.5" />
                Multi-Instance Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                One File System, Multiple Instances
              </h2>
              <p className="text-teal-100/80 mb-8 leading-relaxed">
                Unlike block storage that attaches to a single VM, Shared File Systems allow multiple compute instances 
                to mount and access the same storage simultaneously. Perfect for web farms, shared content, and collaborative workloads.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Concurrent Read/Write</h4>
                    <p className="text-sm text-teal-100/70">Multiple instances can read and write to the same files with NFS locking support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Maximize2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Online Expansion</h4>
                    <p className="text-sm text-teal-100/70">Grow storage capacity on-demand without unmounting or service interruption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Usage-Based Billing</h4>
                    <p className="text-sm text-teal-100/70">Customers pay per GB consumed with transparent metering and billing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/placeholder.svg"
                  alt="Multi-Instance Shared File Access"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-4 shadow-xl flex gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-xs text-teal-100">Concurrent Mounts</p>
                </div>
                <div className="text-center border-l border-white/20 pl-8">
                  <p className="text-2xl font-bold text-white">PB</p>
                  <p className="text-xs text-teal-100">Scale Capacity</p>
                </div>
                <div className="text-center border-l border-white/20 pl-8">
                  <p className="text-2xl font-bold text-white">99.9%</p>
                  <p className="text-xs text-teal-100">Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Zap className="w-3.5 h-3.5" />
              Use Cases
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who Benefits from Shared File Systems?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              const colorClasses = {
                teal: "border-teal-200 hover:border-teal-400 bg-teal-50/50",
                purple: "border-purple-200 hover:border-purple-400 bg-purple-50/50",
                blue: "border-blue-200 hover:border-blue-400 bg-blue-50/50",
                green: "border-green-200 hover:border-green-400 bg-green-50/50",
              }
              const iconColors = {
                teal: "bg-teal-100 text-teal-600",
                purple: "bg-purple-100 text-purple-600",
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
              }
              return (
                <Card
                  key={index}
                  className={`p-6 border-2 ${colorClasses[useCase.color as keyof typeof colorClasses]} hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`w-12 h-12 ${iconColors[useCase.color as keyof typeof iconColors]} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Settings className="w-3.5 h-3.5" />
              Admin Setup
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Three Steps to Enable SFS
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Configure Shared File Service in your StackBill environment with this simple workflow
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-emerald-200 to-green-200 -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {setupSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white border-4 border-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-teal-600">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section - Interactive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Settings className="w-3.5 h-3.5" />
              Prerequisites
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What are the requirements?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ensure your environment meets these requirements before enabling SFS
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {requirements.map((req, index) => {
              const colorClasses = {
                teal: {
                  bg: "bg-teal-50 group-hover:bg-teal-100",
                  icon: "text-teal-600",
                  border: "border-teal-200 hover:border-teal-400",
                  badge: "bg-teal-600 text-white",
                  glow: "group-hover:shadow-teal-200/50"
                },
                purple: {
                  bg: "bg-purple-50 group-hover:bg-purple-100",
                  icon: "text-purple-600",
                  border: "border-purple-200 hover:border-purple-400",
                  badge: "bg-purple-600 text-white",
                  glow: "group-hover:shadow-purple-200/50"
                },
                blue: {
                  bg: "bg-blue-50 group-hover:bg-blue-100",
                  icon: "text-blue-600",
                  border: "border-blue-200 hover:border-blue-400",
                  badge: "bg-blue-600 text-white",
                  glow: "group-hover:shadow-blue-200/50"
                },
                green: {
                  bg: "bg-green-50 group-hover:bg-green-100",
                  icon: "text-green-600",
                  border: "border-green-200 hover:border-green-400",
                  badge: "bg-green-600 text-white",
                  glow: "group-hover:shadow-green-200/50"
                },
              }
              const colors = colorClasses[req.color as keyof typeof colorClasses]
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-background rounded-2xl p-6 border-2 ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.glow} cursor-pointer overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg viewBox="0 0 100 100" fill="currentColor" className={colors.icon}>
                      <circle cx="80" cy="20" r="40" />
                    </svg>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 transition-colors`}>
                    {req.icon === "server" && <Server className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "crown" && <Sparkles className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "code" && <Network className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "key" && <Cpu className={`w-7 h-7 ${colors.icon}`} />}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {req.label}
                  </h3>
                  
                  {/* Value Badge */}
                  <div className={`inline-flex items-center px-3 py-1.5 ${colors.badge} rounded-full text-sm font-semibold mb-4`}>
                    {req.value}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {req.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.badge} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              )
            })}
          </div>

          {/* Quick Check */}
          <div className="mt-10 bg-gradient-to-r from-teal-50 via-emerald-50 to-green-50 rounded-2xl p-6 border border-teal-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ready to enable SFS?</h4>
                  <p className="text-sm text-muted-foreground">Our team can help configure your environment</p>
                </div>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6" asChild>
                <Link href="/contact">
                  Contact Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden bg-background hover:border-teal-200 transition-colors"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Offer Shared File Systems?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Add enterprise-grade shared storage to your cloud portfolio. Contact us to enable SFS for your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
              asChild
            >
              <Link href="https://docs-admin.stackbill.com/docs/admin/add-ons/sfs-service" target="_blank">
                Read the Docs
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
