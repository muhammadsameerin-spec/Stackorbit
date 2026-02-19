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
  Heart,
  Scale,
} from "lucide-react"

export default function KubernetesIntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("benefits")

  const features = [
    {
      icon: Users,
      title: "Complete Self-Service Portal",
      description:
        "Empower your B2B and B2C customers with a full self-service portal for Kubernetes cluster management, scaling, and monitoring.",
    },
    {
      icon: DollarSign,
      title: "Pay-Per-Use Pricing",
      description:
        "Offer flexible pay-per-use pricing models with automatic chargeback for compute, network, and storage resources consumed by clusters.",
    },
    {
      icon: Layers,
      title: "Customized K8s Templates",
      description:
        "Provide pre-configured Kubernetes cluster templates optimized for different workloads - from dev/test to production-grade deployments.",
    },
    {
      icon: RefreshCw,
      title: "Easy Version Upgrades",
      description:
        "Seamlessly upgrade Kubernetes versions with zero downtime. Manage multiple versions and let customers choose their preferred version.",
    },
    {
      icon: Heart,
      title: "Self-Healing Clusters",
      description:
        "ClusterAPI provides automatic self-healing when nodes fail, spawning new instances and rescheduling pods without manual intervention.",
    },
    {
      icon: Scale,
      title: "Auto-Scaling Workers",
      description:
        "Enable horizontal and vertical auto-scaling of worker nodes based on workload demands, optimizing cost and performance automatically.",
    },
  ]

  const platformFeatures = [
    {
      icon: Globe,
      title: "Kubernetes Web UI Dashboard",
      description: "Built-in web dashboard for cluster management and monitoring",
    },
    {
      icon: Lock,
      title: "Built-in SSL/TLS",
      description: "Automatic SSL certificates for protecting ingress network traffic",
    },
    {
      icon: Box,
      title: "HELM Package Manager",
      description: "Auto-install pre-configured solutions with the HELM package manager",
    },
    {
      icon: Network,
      title: "CNI Plugin (Weave)",
      description: "Overlay network support powered by Weave CNI plugin",
    },
    {
      icon: Shield,
      title: "Firewall & VPC Support",
      description: "Built-in firewall, VPC, and virtual router support",
    },
    {
      icon: HardDrive,
      title: "Block Storage (iSCSI/NFS/SDS)",
      description: "Flexible storage options including iSCSI, NFS, and Software Defined Storage",
    },
    {
      icon: Gauge,
      title: "Online Volume Resize",
      description: "Resize primary and secondary disks without downtime",
    },
    {
      icon: Database,
      title: "Snapshot & Backup",
      description: "Flexible snapshot and backup policies for data protection",
    },
    {
      icon: Activity,
      title: "Built-in Monitoring",
      description: "Integrated troubleshooting and performance monitoring",
    },
    {
      icon: Server,
      title: "HA Control Plane",
      description: "High availability control plane for production workloads",
    },
    {
      icon: Container,
      title: "Docker Hub Integration",
      description: "Seamless integration with Docker Hub for container images",
    },
    {
      icon: GitBranch,
      title: "ClusterAPI Support",
      description: "Infrastructure provisioning with ClusterAPI for self-healing",
    },
  ]

  const requirements = [
    {
      label: "CloudStack Version",
      value: "4.16+",
      icon: "server",
      color: "cyan",
      description: "Apache CloudStack 4.16 or higher with Kubernetes service enabled",
    },
    {
      label: "StackBill Edition",
      value: "Premium or Enterprise",
      icon: "crown",
      color: "purple",
      description: "Kubernetes-as-a-Service is available on Premium and Enterprise plans",
    },
    {
      label: "Kubernetes Versions",
      value: "1.24 - 1.29",
      icon: "code",
      color: "blue",
      description: "Support for multiple Kubernetes versions from 1.24 to 1.29",
    },
    {
      label: "Infrastructure",
      value: "Compute, Storage, Network",
      icon: "key",
      color: "green",
      description: "Sufficient compute, storage, and network resources in your CloudStack zones",
    },
  ]

  const faqs = [
    {
      question: "How do customers deploy a Kubernetes cluster?",
      answer:
        "Customers can deploy Kubernetes clusters with a single click from the StackBill portal. They select the desired Kubernetes version, cluster size, and resources. The platform automatically provisions the control plane and worker nodes with all required configurations.",
    },
    {
      question: "Can customers scale their clusters on-demand?",
      answer:
        "Yes, customers can easily scale worker nodes up or down based on their needs. Auto-scaling can also be enabled to automatically adjust cluster size based on workload demands, optimizing both performance and costs.",
    },
    {
      question: "How is Kubernetes usage billed?",
      answer:
        "StackBill provides granular usage-based billing for Kubernetes clusters. Charges include compute resources (vCPU, RAM), storage (persistent volumes), and network usage. Custom pricing models can be configured for B2B customers with volume discounts.",
    },
    {
      question: "What happens when a node fails?",
      answer:
        "ClusterAPI and MachineHealthCheck controllers continuously monitor cluster health. When a node fails, the system automatically provisions a new node, adds it to the cluster, and Kubernetes reschedules pods from the failed node - all without manual intervention.",
    },
    {
      question: "Can customers run multiple Kubernetes versions?",
      answer:
        "Yes, administrators can enable multiple Kubernetes versions in the marketplace. Customers can choose their preferred version when creating clusters and upgrade existing clusters to newer versions when ready.",
    },
    {
      question: "Is multi-tenancy supported?",
      answer:
        "Absolutely. Each customer's Kubernetes clusters are fully isolated with dedicated network namespaces, storage, and compute resources. RBAC ensures customers can only access their own clusters and resources.",
    },
  ]

  const useCases = [
    {
      title: "Startups & Digital Businesses",
      description: "Reduce operational complexity for startups needing container orchestration without dedicated DevOps teams.",
      icon: Zap,
      color: "blue",
    },
    {
      title: "ISVs (Independent Software Vendors)",
      description: "Offer managed Kubernetes to your software customers as part of your SaaS or platform offering.",
      icon: Code,
      color: "purple",
    },
    {
      title: "MSPs & Cloud Providers",
      description: "Add Kubernetes-as-a-Service to your portfolio with built-in billing, multi-tenancy, and self-service.",
      icon: Cloud,
      color: "cyan",
    },
    {
      title: "Enterprise IT Departments",
      description: "Provide internal teams with self-service Kubernetes clusters while maintaining governance and cost control.",
      icon: Server,
      color: "green",
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
                Kubernetes-as-a-Service
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Offer fully managed Kubernetes with self-healing clusters, auto-scaling, and complete self-service for your customers.
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
                  <Link href="https://docs-admin.stackbill.com/docs/admin/marketplace/kubernetes" target="_blank">
                    View Docs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* Feature highlights */}
              <div className="flex gap-8 pt-8 border-t border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-white">K8s 1.29</div>
                  <div className="text-xs text-slate-400">Latest Version</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Self-Healing</div>
                  <div className="text-xs text-slate-400">Clusters</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Auto-Scale</div>
                  <div className="text-xs text-slate-400">Workers</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Light Panel with Image */}
          <div className="bg-cyan-50 px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex items-center justify-center">
            <div className="relative">
              {/* Soft circular glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-cyan-100 rounded-full" />
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
                  <div className="w-16 h-16 bg-[#326CE5] rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 32 32" className="w-10 h-10 text-white" fill="currentColor">
                      <path d="M15.9.5a2 2 0 0 0-.8.2l-11 5.5a2 2 0 0 0-1.1 1.8v11a2 2 0 0 0 1.1 1.8l11 5.5a2 2 0 0 0 1.6 0l11-5.5a2 2 0 0 0 1.1-1.8V8a2 2 0 0 0-1.1-1.8l-11-5.5a2 2 0 0 0-.8-.2z"/>
                    </svg>
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Layers className="w-3.5 h-3.5" />
              Platform Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Enterprise-Grade Kubernetes Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to offer production-ready Kubernetes-as-a-Service to your customers
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
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-cyan-100 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-cyan-100 group-hover:bg-cyan-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-cyan-600" />
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
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-blue-600" />
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
              Why Offer Kubernetes-as-a-Service?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Add a high-margin service to your portfolio with minimal operational overhead
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

      {/* Self-Healing & Auto-Scaling Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-cyan-950 to-blue-950 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                <Heart className="w-3.5 h-3.5" />
                Self-Healing Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                Automatic Recovery with ClusterAPI
              </h2>
              <p className="text-cyan-100/80 mb-8 leading-relaxed">
                When a Kubernetes node fails, ClusterAPI automatically provisions new infrastructure on CloudStack. 
                The MachineHealthCheck controller monitors control plane and worker nodes, guaranteeing service integrity.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Continuous Health Monitoring</h4>
                    <p className="text-sm text-cyan-100/70">MachineHealthCheck controller monitors all nodes in real-time</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Automatic Node Replacement</h4>
                    <p className="text-sm text-cyan-100/70">Failed nodes are automatically replaced with new instances</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Pod Rescheduling</h4>
                    <p className="text-sm text-cyan-100/70">Kubernetes reschedules pods from failed nodes automatically</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/kubernetes-self-healing.jpg"
                  alt="Kubernetes Self-Healing Architecture"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-white">99.9%</p>
                    <p className="text-xs text-cyan-200">Uptime SLA</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">&lt;60s</p>
                    <p className="text-xs text-cyan-200">Recovery Time</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Zero</p>
                    <p className="text-xs text-cyan-200">Manual Intervention</p>
                  </div>
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Users className="w-3.5 h-3.5" />
              Target Audience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who Benefits from KaaS?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kubernetes-as-a-Service is designed for organizations that want container orchestration without the operational burden
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              const colorClasses = {
                blue: "border-blue-200 hover:border-blue-400 bg-gradient-to-br from-blue-50/50 to-transparent",
                purple: "border-purple-200 hover:border-purple-400 bg-gradient-to-br from-purple-50/50 to-transparent",
                cyan: "border-cyan-200 hover:border-cyan-400 bg-gradient-to-br from-cyan-50/50 to-transparent",
                green: "border-green-200 hover:border-green-400 bg-gradient-to-br from-green-50/50 to-transparent",
              }
              const iconColors = {
                blue: "bg-blue-100 text-blue-600",
                purple: "bg-purple-100 text-purple-600",
                cyan: "bg-cyan-100 text-cyan-600",
                green: "bg-green-100 text-green-600",
              }
              return (
                <Card
                  key={index}
                  className={`p-6 border-2 ${colorClasses[useCase.color as keyof typeof colorClasses]} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${iconColors[useCase.color as keyof typeof iconColors]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section - Interactive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Settings className="w-3.5 h-3.5" />
              Prerequisites
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What You Need to Get Started
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ensure your environment meets these requirements before enabling Kubernetes-as-a-Service
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {requirements.map((req, index) => {
              const colorClasses = {
                cyan: {
                  bg: "bg-cyan-50 group-hover:bg-cyan-100",
                  icon: "text-cyan-600",
                  border: "border-cyan-200 hover:border-cyan-400",
                  badge: "bg-cyan-600 text-white",
                  glow: "group-hover:shadow-cyan-200/50",
                },
                purple: {
                  bg: "bg-purple-50 group-hover:bg-purple-100",
                  icon: "text-purple-600",
                  border: "border-purple-200 hover:border-purple-400",
                  badge: "bg-purple-600 text-white",
                  glow: "group-hover:shadow-purple-200/50",
                },
                blue: {
                  bg: "bg-blue-50 group-hover:bg-blue-100",
                  icon: "text-blue-600",
                  border: "border-blue-200 hover:border-blue-400",
                  badge: "bg-blue-600 text-white",
                  glow: "group-hover:shadow-blue-200/50",
                },
                green: {
                  bg: "bg-green-50 group-hover:bg-green-100",
                  icon: "text-green-600",
                  border: "border-green-200 hover:border-green-400",
                  badge: "bg-green-600 text-white",
                  glow: "group-hover:shadow-green-200/50",
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
                    {req.icon === "key" && <Layers className={`w-7 h-7 ${colors.icon}`} />}
                  </div>

                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {req.label}
                  </h3>

                  <div className={`inline-flex items-center px-3 py-1.5 ${colors.badge} rounded-full text-sm font-semibold mb-4`}>
                    {req.value}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{req.description}</p>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.badge} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              )
            })}
          </div>

          <div className="mt-10 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 rounded-2xl p-6 border border-cyan-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Play className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ready to enable Kubernetes?</h4>
                  <p className="text-sm text-muted-foreground">Our team can help you set up and configure KaaS</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full px-6" asChild>
                <Link href="/contact">
                  Schedule Setup Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-border rounded-xl overflow-hidden hover:border-cyan-200 transition-colors">
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Start Offering Kubernetes-as-a-Service Today
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Add a high-margin container orchestration service to your portfolio with StackBill's turnkey Kubernetes integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 rounded-full px-8" asChild>
              <Link href="/contact">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
              asChild
            >
              <Link href="https://docs-admin.stackbill.com/docs/admin/marketplace/kubernetes" target="_blank">
                Read Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
