"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Check,
  Cloud,
  Server,
  Shield,
  Globe,
  Zap,
  Building2,
  Users,
  Clock,
  Award,
  ChevronRight,
  ChevronDown,
  Cpu,
  HardDrive,
  Network,
  BarChart3,
  Headphones,
  FileText,
  Target,
  Layers,
  RefreshCw,
  MonitorCheck,
  Cog,
  Plus,
  Minus,
  Sparkles,
  CheckCircle2,
  Settings,
  Database,
  BookOpen,
  DollarSign,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  ArrowRightLeft,
  Lock,
  Unlock,
  Calculator,
  PieChart,
  Activity,
  Play,
  CircleDot,
} from "lucide-react"

// FAQ Data for SEO/AEO
const faqData = [
  {
    question: "Why should we migrate from VMware to Apache CloudStack?",
    answer:
      "Following Broadcom's acquisition of VMware, many organizations face significant licensing cost increases, bundled product requirements, and long-term uncertainty. Apache CloudStack offers a mature, open-source alternative with no licensing costs, multi-hypervisor support, and a vibrant community ensuring long-term stability and innovation.",
  },
  {
    question: "How much can we save by migrating to CloudStack?",
    answer:
      "Organizations typically see 40-70% reduction in total cost of ownership over 3-5 years. This includes elimination of VMware licensing fees, reduced vendor lock-in costs, and more efficient resource utilization. Our TCO assessment provides a detailed breakdown specific to your environment.",
  },
  {
    question: "What is the typical migration timeline?",
    answer:
      "Migration timelines vary based on environment size and complexity. Small deployments (under 50 VMs) typically complete in 4-6 weeks. Medium deployments (50-200 VMs) take 8-12 weeks. Large enterprise migrations (200+ VMs) are phased over 3-6 months to minimize risk and ensure business continuity.",
  },
  {
    question: "Will there be downtime during migration?",
    answer:
      "We use a phased migration approach that minimizes downtime. Most workloads experience only minutes of downtime during the final cutover. Critical workloads can be migrated during maintenance windows, and we support live migration for many scenarios using CloudStack 4.19+ automation tools.",
  },
  {
    question: "What happens to our existing VMware investments?",
    answer:
      "CloudStack supports VMware ESXi as a hypervisor, allowing a gradual transition. You can run hybrid environments during migration, reuse existing hardware, and convert VMware VMs to KVM format. Our migration tools handle VMDK to QCOW2 conversion automatically.",
  },
  {
    question: "Is Apache CloudStack production-ready for enterprise use?",
    answer:
      "Absolutely. Apache CloudStack powers some of the world's largest cloud deployments, including clouds with millions of VMs. It's used by major telcos, service providers, and enterprises globally. The project has been in active development since 2010 with regular releases and a strong community.",
  },
]

// Migration Phases
const migrationPhases = [
  {
    phase: "01",
    title: "Discovery & Assessment",
    description:
      "Comprehensive analysis of your VMware environment including VMs, storage, networking, and dependencies.",
    icon: Target,
    color: "from-blue-600 to-indigo-600",
    bgColor: "#d4e4f7",
    duration: "1-2 weeks",
    items: [
      "VMware infrastructure audit",
      "VM inventory and profiling",
      "Dependency mapping",
      "Risk assessment",
    ],
  },
  {
    phase: "02",
    title: "Migration Design",
    description:
      "Architecture design illustrating placement and interaction of components in your new CloudStack environment.",
    icon: Cog,
    color: "from-cyan-600 to-blue-500",
    bgColor: "#d4ecf9",
    duration: "1-2 weeks",
    items: [
      "Network topology design",
      "Storage architecture planning",
      "KVM host configuration",
      "CloudStack zone design",
    ],
  },
  {
    phase: "03",
    title: "Environment Build",
    description:
      "Deploy and configure Apache CloudStack with KVM hosts, preparing the target environment for migration.",
    icon: Server,
    color: "from-purple-600 to-violet-600",
    bgColor: "#e7d4f7",
    duration: "2-3 weeks",
    items: [
      "CloudStack deployment",
      "KVM host installation",
      "Network configuration",
      "Storage integration",
    ],
  },
  {
    phase: "04",
    title: "Pilot Migration",
    description:
      "Migrate non-critical workloads first to validate the process and build confidence.",
    icon: Play,
    color: "from-pink-600 to-rose-600",
    bgColor: "#f7d4e0",
    duration: "1-2 weeks",
    items: [
      "Test VM migrations",
      "Validate conversion process",
      "Performance testing",
      "Runbook refinement",
    ],
  },
  {
    phase: "05",
    title: "Production Migration",
    description:
      "Systematic migration of production workloads using CloudStack 4.19+ automated migration tools.",
    icon: ArrowRightLeft,
    color: "from-emerald-500 to-teal-500",
    bgColor: "#d4f7e4",
    duration: "2-8 weeks",
    items: [
      "Phased VM migration",
      "VMDK to QCOW2 conversion",
      "Application validation",
      "Cutover coordination",
    ],
  },
  {
    phase: "06",
    title: "Optimization & Handover",
    description:
      "Performance tuning, documentation, and knowledge transfer to ensure your team is self-sufficient.",
    icon: Award,
    color: "from-amber-500 to-orange-500",
    bgColor: "#f7ead4",
    duration: "1-2 weeks",
    items: [
      "Performance optimization",
      "Documentation delivery",
      "Team training",
      "Support transition",
    ],
  },
]

// Why Migrate Benefits
const whyMigrate = [
  {
    icon: DollarSign,
    title: "Eliminate Licensing Costs",
    description: "No per-socket, per-VM, or per-feature licensing. CloudStack is 100% free and open-source.",
    metric: "Up to 70%",
    metricLabel: "Cost Reduction",
  },
  {
    icon: Unlock,
    title: "Escape Vendor Lock-in",
    description: "Open-source platform with multi-hypervisor support ensures you're never locked to a single vendor.",
    metric: "100%",
    metricLabel: "Open Source",
  },
  {
    icon: Shield,
    title: "Long-term Stability",
    description: "Active Apache community with 2 major releases per year. No acquisition uncertainty.",
    metric: "14+ Years",
    metricLabel: "Project Maturity",
  },
  {
    icon: TrendingUp,
    title: "Predictable Costs",
    description: "No surprise licensing changes or forced bundling. Plan your IT budget with confidence.",
    metric: "Zero",
    metricLabel: "License Fees",
  },
]

// TCO Comparison Data
const tcoComparison = [
  { category: "Licensing (3-year)", vmware: 100, cloudstack: 0 },
  { category: "Support & Maintenance", vmware: 80, cloudstack: 40 },
  { category: "Training & Skills", vmware: 30, cloudstack: 25 },
  { category: "Hardware Overhead", vmware: 50, cloudstack: 35 },
]

// Technical capabilities
const technicalCapabilities = [
  {
    category: "Migration Tools",
    items: ["CloudStack 4.19+ virt-v2v integration", "Automated VMDK conversion", "Bulk migration support", "Live migration capability"],
  },
  {
    category: "Hypervisor Support",
    items: ["KVM (recommended)", "VMware ESXi", "XCP-ng", "Citrix Hypervisor"],
  },
  {
    category: "Storage Compatibility",
    items: ["VMFS to NFS/iSCSI", "Ceph integration", "Local storage", "SAN/NAS support"],
  },
  {
    category: "Network Migration",
    items: ["VLAN preservation", "IP address retention", "Security groups", "VPC migration"],
  },
]

// Stats
const stats = [
  { value: "500+", label: "VMs Migrated", icon: Server },
  { value: "70%", label: "Avg Cost Savings", icon: TrendingDown },
  { value: "99.9%", label: "Success Rate", icon: CheckCircle2 },
  { value: "24/7", label: "Migration Support", icon: Headphones },
]

// FAQ Accordion Component
function FAQAccordion({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqData)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-blue-300 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 shadow-lg shadow-blue-100/50"
          : "border-border/50 hover:border-blue-200 bg-background"
      }`}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between p-6 text-left transition-colors">
        <h3 className={`text-lg font-semibold pr-4 ${isOpen ? "text-blue-700" : "text-foreground"}`}>{faq.question}</h3>
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-blue-600 text-white rotate-180" : "bg-blue-100 text-blue-600"
          }`}
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

// Animated Counter Component
function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(target.replace(/[^0-9]/g, "")) || 0

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [numericValue])

  if (target.includes("+")) return <>{count}+{suffix}</>
  if (target.includes("%")) return <>{count}%{suffix}</>
  return <>{count}{suffix}</>
}

export default function VMwareMigrationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [activePhase, setActivePhase] = useState(0)

  // Structured Data for SEO/AEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "StackOps - VMware to Apache CloudStack Migration",
    provider: {
      "@type": "Organization",
      name: "StackOrbit",
      url: "https://stackorbit.com",
    },
    description:
      "Expert VMware to Apache CloudStack migration services. Reduce costs by up to 70% while gaining open-source freedom and long-term stability.",
    serviceType: "Cloud Migration Services",
    areaServed: "Worldwide",
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <Navigation />

      {/* Hero Section - Split Two-Tone Design */}
      <section className="relative pt-8 overflow-hidden">
        <div className="group relative grid lg:grid-cols-2 gap-0 bg-slate-900 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          {/* Left - Content */}
          <div className="p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                StackOps Services
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 text-balance">
                VMware to CloudStack Migration
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Migrate your vSphere environment to Apache CloudStack and KVM. Our proven methodology reduces migration risk while delivering TCO savings of up to 70%.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 font-semibold"
                asChild
              >
                <Link href="/contact">
                  Start Migration <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <div className="text-sm text-slate-400">
                <span className="block text-white font-bold text-xl">70%</span>
                TCO savings
              </div>
            </div>
          </div>
          {/* Right - Image */}
          <div className="relative min-h-[300px] lg:min-h-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl" />
                </div>
                <img
                  src="https://www.stackbill.com/assets/images/sb-img/cloudstack-as-a-service.png"
                  alt="VMware to CloudStack Migration"
                  className="relative w-64 h-64 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Migrate Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <TrendingDown className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Why Migrate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Strategic Benefits of <span className="text-blue-600">Migration</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Broadcom's acquisition has created uncertainty. Organizations are proactively evaluating open-source alternatives 
              that offer cost savings, freedom, and long-term stability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMigrate.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={idx}
                  className="group relative overflow-hidden border-2 border-border/50 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="pt-4 border-t border-border/50">
                      <div className="text-2xl font-bold text-blue-600">{benefit.metric}</div>
                      <div className="text-xs text-muted-foreground">{benefit.metricLabel}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Total Cost of Ownership - Modern Compact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Total Cost of Ownership
            </h2>
            <p className="text-base text-blue-100 max-w-2xl mx-auto">
              3-year comparison: VMware vs Apache CloudStack
            </p>
          </div>

          {/* Main Comparison - Split View */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* VMware */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-white">VMware</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-blue-200 text-sm">Licensing</span>
                  <span className="text-xl font-bold text-white">$120K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-blue-200 text-sm">Infrastructure</span>
                  <span className="text-xl font-bold text-white">$80K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-blue-200 text-sm">Support</span>
                  <span className="text-xl font-bold text-white">$60K</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-2" />
                <div className="flex justify-between items-baseline">
                  <span className="text-blue-100 font-semibold text-sm">Total</span>
                  <span className="text-2xl font-bold text-blue-400">$260K</span>
                </div>
              </div>
            </div>

            {/* CloudStack */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/40 hover:border-emerald-300/60 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold text-white">CloudStack</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-emerald-200 text-sm">Licensing</span>
                  <span className="text-xl font-bold text-white">$0K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-emerald-200 text-sm">Infrastructure</span>
                  <span className="text-xl font-bold text-white">$50K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-emerald-200 text-sm">Support</span>
                  <span className="text-xl font-bold text-white">$50K</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent my-2" />
                <div className="flex justify-between items-baseline">
                  <span className="text-emerald-100 font-semibold text-sm">Total</span>
                  <span className="text-2xl font-bold text-emerald-300">$100K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Metrics */}
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center hover:bg-white/10 transition-all">
              <div className="text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">You Save</div>
              <div className="text-3xl font-bold text-emerald-400">$160K</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center hover:bg-white/10 transition-all">
              <div className="text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">Cost Reduction</div>
              <div className="text-3xl font-bold text-emerald-400">62%</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center hover:bg-white/10 transition-all">
              <div className="text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">ROI Period</div>
              <div className="text-3xl font-bold text-emerald-400">1.6yr</div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process - Interactive Timeline */}
      <section id="migration-process" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Proven <span className="text-blue-600">Migration Framework</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures minimal disruption while maximizing the success of your VMware to CloudStack migration.
            </p>
          </div>

          {/* Tab Navigation and Content Display */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
            {/* Left - Tab Navigation */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {migrationPhases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`flex-shrink-0 text-left p-4 lg:p-5 rounded-xl transition-all duration-300 ${
                    activePhase === index
                      ? "bg-background shadow-lg border-2 border-blue-400"
                      : "bg-background/50 hover:bg-background hover:shadow-md border border-border/50"
                  }`}
                >
                  <div className={`text-2xl font-bold mb-1 ${activePhase === index ? 'text-blue-600' : 'text-muted-foreground/40'}`}>{phase.phase}</div>
                  <h3 className={`text-base font-semibold line-clamp-2 ${activePhase === index ? 'text-foreground' : 'text-muted-foreground'}`}>{phase.title}</h3>
                </button>
              ))}
            </div>

            {/* Right - Content Display */}
            <div className="relative">
              {migrationPhases.map((phase, index) => (
                activePhase === index && (
                  <div
                    key={index}
                    className="rounded-2xl lg:rounded-3xl min-h-[500px] lg:min-h-[580px] relative overflow-hidden flex flex-col transition-all duration-300"
                    style={{ backgroundColor: phase.bgColor }}
                  >
                    <div className="flex items-start justify-between p-8 lg:p-10">
                      <div className="max-w-lg">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Phase {phase.phase}</span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1 mb-3">{phase.title}</h3>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{phase.description}</p>
                      </div>
                      <Button 
                        size="lg" 
                        className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 shrink-0 ml-6" 
                        asChild
                      >
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4 px-8 lg:px-10 pb-8 lg:pb-10">
                      {/* Left - Icon Visualization */}
                      <div className="flex flex-col items-center justify-center gap-8">
                        <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                          {(() => {
                            const Icon = phase.icon
                            return <Icon className="w-16 h-16 text-gray-700" />
                          })()}
                        </div>
                        <div className="space-y-2 w-full">
                          <div className="flex justify-center">
                            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</span>
                          </div>
                          <div className="text-center text-lg font-bold text-gray-900">{phase.duration}</div>
                        </div>
                      </div>

                      {/* Right - Checklist Items */}
                      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                        <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Key Activities</h4>
                        <div className="space-y-3">
                          {phase.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br mt-1 flex-shrink-0 flex items-center justify-center" style={{ backgroundImage: `linear-gradient(135deg, ${phase.color})` }}>
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm text-gray-700 leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Phase Progress Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              {migrationPhases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    activePhase === idx
                      ? "w-10 h-3 bg-blue-600"
                      : "w-3 h-3 bg-blue-200 hover:bg-blue-300"
                  }`}
                  aria-label={`Go to phase ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-blue-300" />
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Enterprise-Grade <span className="text-blue-400">Migration Tools</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Leverage CloudStack 4.19+ native migration tools and our expertise for seamless VMware to KVM transitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-4">{cap.category}</h3>
                <ul className="space-y-3">
                  {cap.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CircleDot className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* StackBill Integration Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                <Image src="/stackbill-logo.png" alt="StackBill" width={60} height={60} className="object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Monetize Your New Cloud with StackBill
                </h3>
                <p className="text-blue-100 max-w-xl">
                  Complete your migration with StackBill - the cloud management and billing platform designed for 
                  Apache CloudStack. Offer self-service, automate billing, and start generating revenue from day one.
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 rounded-full shadow-xl whitespace-nowrap"
              asChild
            >
              <Link href="/platform/stackbill">
                Explore StackBill
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about VMware to CloudStack migration
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <FAQAccordion
                key={idx}
                faq={faq}
                isOpen={openFaqIndex === idx}
                onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Start Your Migration</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Break Free from VMware?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a free TCO assessment and migration roadmap. Our CloudStack experts will help you plan 
            a smooth transition with minimal disruption.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-10 py-6 rounded-full text-lg shadow-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Assessment
                <Calculator className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 rounded-full text-lg bg-transparent"
              asChild
            >
              <Link href="/services/cloudstack-consulting">
                View All StackOps Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
