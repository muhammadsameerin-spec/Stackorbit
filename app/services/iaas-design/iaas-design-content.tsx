"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
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
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react"



// FAQ Data for SEO/AEO
const faqData = [
  {
    question: "What is IaaS Cloud Design and Build?",
    answer:
      "IaaS (Infrastructure-as-a-Service) Cloud Design and Build involves the complete planning, architecture, and implementation of cloud infrastructure. This includes designing compute, storage, and network resources that can be provisioned on-demand, enabling organizations to build scalable private or public cloud environments.",
  },
  {
    question: "How long does it take to build an IaaS cloud with CloudStack?",
    answer:
      "The timeline depends on the complexity and scale of your requirements. A basic private cloud can be deployed in 4-6 weeks, while larger enterprise deployments with complex networking and storage requirements typically take 8-12 weeks. Our phased approach ensures quality delivery at each stage.",
  },
  {
    question: "What hypervisors are supported for IaaS deployments?",
    answer:
      "Apache CloudStack supports multiple hypervisors including KVM (recommended for new deployments), VMware vSphere, XCP-ng, and Citrix Hypervisor. This flexibility allows you to choose based on your existing investments, licensing preferences, and technical requirements.",
  },
  {
    question: "Can you help with capacity planning for our cloud?",
    answer:
      "Yes, capacity planning is a critical part of our design process. We analyze your workload requirements, growth projections, and performance needs to determine optimal compute density, storage architecture, and network design. We also plan for over-provisioning scenarios to ensure consistent performance.",
  },
  {
    question: "Do you provide documentation and knowledge transfer?",
    answer:
      "Absolutely. We provide comprehensive as-built documentation, operational runbooks, and dedicated knowledge transfer sessions. Our goal is to ensure your in-house team can effectively manage and support your cloud infrastructure from day one.",
  },
  {
    question: "What storage solutions do you recommend for CloudStack?",
    answer:
      "We work with various storage solutions including Ceph (for software-defined storage), NetApp, Pure Storage, Dell EMC, and NFS/iSCSI-based solutions. The recommendation depends on your performance requirements, budget, and existing infrastructure investments.",
  },
]

// Design & Build Phases
// Key Capabilities
const capabilities = [
  {
    icon: Cloud,
    title: "Private Cloud",
    description: "Build secure, dedicated cloud infrastructure within your datacenter with complete control.",
  },
  {
    icon: Globe,
    title: "Public Cloud",
    description: "Launch cloud services for external customers with multi-tenant isolation and billing.",
  },
  {
    icon: Layers,
    title: "Hybrid Cloud",
    description: "Connect on-premises infrastructure with public cloud for optimal flexibility.",
  },
  {
    icon: Shield,
    title: "Sovereign Cloud",
    description: "Data residency compliant infrastructure for government and regulated industries.",
  },
]

// Technology expertise
const technologies = [
  { category: "Hypervisors", items: ["KVM", "VMware vSphere", "XCP-ng", "Citrix"] },
  { category: "Storage", items: ["Ceph", "NetApp", "Pure Storage", "Dell EMC", "NFS/iSCSI"] },
  { category: "Networking", items: ["OVS", "Tungsten Fabric", "NSX", "VxLAN", "VLAN"] },
  { category: "Hardware", items: ["Dell", "HPE", "Supermicro", "Lenovo", "Cisco UCS"] },
]

// Stats
const stats = [
  { value: "100+", label: "Clouds Built", icon: Cloud },
  { value: "50+", label: "Countries", icon: Globe },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "99.9%", label: "Uptime SLA", icon: Shield },
]

// Deployment Architectures Data
const deploymentArchitectures = [
  {
    id: "small-scale",
    number: "01",
    title: "Small-Scale Deployment",
    subtitle: "For Testing, Trials & POC",
    description: "Ideal for evaluating CloudStack capabilities. A simplified setup suitable for development, testing, and proof-of-concept deployments.",
    color: "#3B82F6",
    bgColor: "from-blue-50 to-blue-100",
    accentBg: "bg-blue-100",
    accentText: "text-blue-600",
    ctaExpertLink: "/contact?type=small-scale",
    ctaSpecLink: "/resources/hardware-specs/small-scale.pdf",
    keyPoints: [
      { icon: Server, label: "Single management server" },
      { icon: HardDrive, label: "Single NFS server (primary + secondary storage)" },
      { icon: Network, label: "Layer-2 switch architecture" },
      { icon: Shield, label: "Firewall with NAT mode" },
    ],
  },
  {
    id: "large-scale",
    number: "02",
    title: "Large-Scale Redundant Setup",
    subtitle: "For Production Multi-Pod Deployments",
    description: "Built for enterprise production environments. Includes redundancy, load balancing, and multiple pods for high availability and performance.",
    color: "#6366F1",
    bgColor: "from-indigo-50 to-indigo-100",
    accentBg: "bg-indigo-100",
    accentText: "text-indigo-600",
    ctaExpertLink: "/contact?type=large-scale",
    ctaSpecLink: "/resources/hardware-specs/large-scale.pdf",
    keyPoints: [
      { icon: Layers, label: "Layer-3 core switching with VRRP redundancy" },
      { icon: Network, label: "Multiple pods with L2 access switches" },
      { icon: BarChart3, label: "Management server cluster with load balancers" },
      { icon: HardDrive, label: "Separate storage network for optimization" },
    ],
  },
  {
    id: "multi-site",
    number: "03",
    title: "Multi-Site Deployment",
    subtitle: "For Distributed Data Centers & DR",
    description: "Designed for geographic distribution and disaster recovery. Enables multi-zone architectures with replication and failover capabilities.",
    color: "#9333EA",
    bgColor: "from-purple-50 to-purple-100",
    accentBg: "bg-purple-100",
    accentText: "text-purple-600",
    ctaExpertLink: "/contact?type=multi-site",
    ctaSpecLink: "/resources/hardware-specs/multi-site.pdf",
    keyPoints: [
      { icon: Globe, label: "Multi-zone architecture" },
      { icon: RefreshCw, label: "Primary/secondary management servers with replication" },
      { icon: Shield, label: "Site-to-site VPN capabilities" },
      { icon: Zap, label: "Geographic redundancy for resilience" },
    ],
  },
]

// Deployment Architectures Slider Component
function DeploymentArchitecturesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? deploymentArchitectures.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === deploymentArchitectures.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const currentArch = deploymentArchitectures[currentSlide]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            CloudStack <span className="text-blue-600">Deployment Architectures</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore three proven deployment patterns for different use cases, from development testing to enterprise production with geographic redundancy.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className={`rounded-3xl overflow-hidden min-h-[600px] lg:min-h-[650px] transition-all duration-500 flex flex-col`} style={{ backgroundColor: currentArch.color + "10" }}>
            {/* Architecture Slide */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full p-8 lg:p-14 flex-1">
              {/* Left - Content */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${currentArch.accentBg} flex items-center justify-center font-bold text-lg`} style={{ color: currentArch.color }}>
                    {currentArch.number}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Architecture</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{currentArch.title}</h3>
                <p className="text-lg font-semibold mb-4" style={{ color: currentArch.color }}>
                  {currentArch.subtitle}
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">{currentArch.description}</p>

                {/* Key Points */}
                <div className="space-y-3 mb-8">
                  {currentArch.keyPoints.map((point, idx) => {
                    const PointIcon = point.icon
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-md ${currentArch.accentBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <PointIcon className="w-3 h-3" style={{ color: currentArch.color }} />
                        </div>
                        <span className="text-sm text-foreground">{point.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4">
                  <Button
                    className="text-white hover:opacity-90 transition-opacity rounded-lg px-6 py-2.5 font-medium"
                    style={{ backgroundColor: currentArch.color }}
                    asChild
                  >
                    <Link href={currentArch.ctaExpertLink}>Talk to an Expert</Link>
                  </Button>
                  <Link
                    href={currentArch.ctaSpecLink}
                    className="text-sm font-medium transition-colors"
                    style={{ color: currentArch.color }}
                  >
                    Download Hardware Spec
                  </Link>
                </div>
              </div>

              {/* Right - Architecture Diagram */}
              <div className="hidden lg:flex items-center justify-center">
                {currentSlide === 0 && (
                  <svg viewBox="0 0 300 400" className="w-full h-full max-w-xs" style={{ filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))` }}>
                    {/* Simple stack for small-scale */}
                    <rect x="75" y="20" width="150" height="60" rx="8" fill={currentArch.color} opacity="0.2" stroke={currentArch.color} strokeWidth="2" />
                    <text x="150" y="55" textAnchor="middle" className="fill-foreground font-semibold text-sm">Management Server</text>

                    <line x1="150" y1="80" x2="150" y2="120" stroke={currentArch.color} strokeWidth="2" />

                    <rect x="50" y="120" width="200" height="60" rx="8" fill={currentArch.color} opacity="0.15" stroke={currentArch.color} strokeWidth="2" />
                    <text x="150" y="155" textAnchor="middle" className="fill-foreground font-semibold text-sm">Layer-2 Switch</text>

                    <line x1="150" y1="180" x2="150" y2="220" stroke={currentArch.color} strokeWidth="2" />

                    <g>
                      <rect x="20" y="220" width="80" height="60" rx="8" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="2" />
                      <text x="60" y="255" textAnchor="middle" className="fill-foreground font-semibold text-xs">NFS Storage</text>
                    </g>

                    <g>
                      <rect x="120" y="220" width="80" height="60" rx="8" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="2" />
                      <text x="160" y="250" textAnchor="middle" className="fill-foreground font-semibold text-xs">Compute</text>
                      <text x="160" y="265" textAnchor="middle" className="fill-foreground font-semibold text-xs">Nodes</text>
                    </g>

                    <g>
                      <rect x="220" y="220" width="60" height="60" rx="8" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="2" />
                      <text x="250" y="248" textAnchor="middle" className="fill-foreground font-semibold text-xs">Firewall</text>
                      <text x="250" y="263" textAnchor="middle" className="fill-foreground font-semibold text-xs">NAT</text>
                    </g>

                    <rect x="20" y="320" width="260" height="60" rx="8" fill={currentArch.color} opacity="0.08" stroke={currentArch.color} strokeWidth="2" strokeDasharray="4" />
                    <text x="150" y="355" textAnchor="middle" className="fill-muted-foreground font-semibold text-xs">Test & Development</text>
                  </svg>
                )}

                {currentSlide === 1 && (
                  <svg viewBox="0 0 300 400" className="w-full h-full max-w-xs" style={{ filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))` }}>
                    {/* Complex multi-pod for large-scale */}
                    <rect x="75" y="10" width="150" height="50" rx="8" fill={currentArch.color} opacity="0.2" stroke={currentArch.color} strokeWidth="2" />
                    <text x="150" y="40" textAnchor="middle" className="fill-foreground font-semibold text-sm">Management Cluster</text>

                    <line x1="150" y1="60" x2="150" y2="90" stroke={currentArch.color} strokeWidth="2" />

                    {/* Core Switch */}
                    <rect x="50" y="90" width="200" height="50" rx="8" fill={currentArch.color} opacity="0.15" stroke={currentArch.color} strokeWidth="2" />
                    <text x="150" y="120" textAnchor="middle" className="fill-foreground font-semibold text-sm">Layer-3 Core Switch (VRRP)</text>

                    {/* Pod 1 */}
                    <g>
                      <rect x="20" y="170" width="110" height="140" rx="8" fill={currentArch.color} opacity="0.05" stroke={currentArch.color} strokeWidth="2" strokeDasharray="4" />
                      <rect x="30" y="180" width="90" height="35" rx="6" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="1.5" />
                      <text x="75" y="203" textAnchor="middle" className="fill-foreground font-semibold text-xs">Access Switch</text>

                      <rect x="30" y="230" width="90" height="35" rx="6" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="1.5" />
                      <text x="75" y="256" textAnchor="middle" className="fill-foreground font-semibold text-xs">Hypervisors</text>

                      <line x1="75" y1="155" x2="75" y2="170" stroke={currentArch.color} strokeWidth="2" />
                      <text x="75" y="165" textAnchor="middle" className="fill-foreground font-semibold text-xs">Pod 1</text>
                    </g>

                    {/* Pod 2 */}
                    <g>
                      <rect x="170" y="170" width="110" height="140" rx="8" fill={currentArch.color} opacity="0.05" stroke={currentArch.color} strokeWidth="2" strokeDasharray="4" />
                      <rect x="180" y="180" width="90" height="35" rx="6" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="1.5" />
                      <text x="225" y="203" textAnchor="middle" className="fill-foreground font-semibold text-xs">Access Switch</text>

                      <rect x="180" y="230" width="90" height="35" rx="6" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="1.5" />
                      <text x="225" y="256" textAnchor="middle" className="fill-foreground font-semibold text-xs">Hypervisors</text>

                      <line x1="225" y1="155" x2="225" y2="170" stroke={currentArch.color} strokeWidth="2" />
                      <text x="225" y="165" textAnchor="middle" className="fill-foreground font-semibold text-xs">Pod 2</text>
                    </g>

                    <line x1="75" y1="130" x2="75" y2="170" stroke={currentArch.color} strokeWidth="2" />
                    <line x1="225" y1="130" x2="225" y2="170" stroke={currentArch.color} strokeWidth="2" />

                    <rect x="30" y="340" width="240" height="50" rx="8" fill={currentArch.color} opacity="0.08" stroke={currentArch.color} strokeWidth="2" strokeDasharray="4" />
                    <text x="150" y="365" textAnchor="middle" className="fill-muted-foreground font-semibold text-xs">Production Environment</text>
                  </svg>
                )}

                {currentSlide === 2 && (
                  <svg viewBox="0 0 300 400" className="w-full h-full max-w-xs" style={{ filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))` }}>
                    {/* Multi-site for geographic distribution */}
                    {/* Primary Site */}
                    <g>
                      <rect x="10" y="20" width="120" height="150" rx="8" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="2" />
                      <text x="70" y="45" textAnchor="middle" className="fill-foreground font-semibold text-sm">Primary Site</text>

                      <rect x="25" y="60" width="90" height="35" rx="6" fill={currentArch.color} opacity="0.15" stroke={currentArch.color} strokeWidth="1.5" />
                      <text x="70" y="83" textAnchor="middle" className="fill-foreground font-semibold text-xs">Mgmt Server</text>

                      <rect x="25" y="110" width="90" height="35" rx="6" fill={currentArch.color} opacity="0.15" stroke={currentArch.color} strokeWidth="1.5" />
                      <text x="70" y="133" textAnchor="middle" className="fill-foreground font-semibold text-xs">MySQL</text>
                    </g>

                    {/* Secondary Site */}
                    <g>
                      <rect x="170" y="20" width="120" height="150" rx="8" fill={currentArch.color} opacity="0.05" stroke={currentArch.color} strokeWidth="2" strokeDasharray="4" />
                      <text x="230" y="45" textAnchor="middle" className="fill-foreground font-semibold text-sm">Secondary Site</text>

                      <rect x="185" y="60" width="90" height="35" rx="6" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="1.5" />
                      <text x="230" y="83" textAnchor="middle" className="fill-foreground font-semibold text-xs">Standby Mgmt</text>

                      <rect x="185" y="110" width="90" height="35" rx="6" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="1.5" />
                      <text x="230" y="133" textAnchor="middle" className="fill-foreground font-semibold text-xs">MySQL Replica</text>
                    </g>

                    {/* Replication Arrow */}
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill={currentArch.color} />
                      </marker>
                    </defs>
                    <line x1="130" y1="128" x2="170" y2="128" stroke={currentArch.color} strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5" />
                    <text x="150" y="115" textAnchor="middle" className="fill-foreground font-semibold text-xs">Replication</text>

                    {/* VPN Connection */}
                    <line x1="70" y1="190" x2="230" y2="190" stroke={currentArch.color} strokeWidth="2" strokeDasharray="5" />
                    <text x="150" y="210" textAnchor="middle" className="fill-foreground font-semibold text-xs">Site-to-Site VPN</text>

                    {/* Zones */}
                    <rect x="20" y="240" width="260" height="130" rx="8" fill={currentArch.color} opacity="0.05" stroke={currentArch.color} strokeWidth="2" strokeDasharray="4" />
                    <text x="150" y="265" textAnchor="middle" className="fill-foreground font-semibold text-sm">Multi-Zone Architecture</text>

                    <rect x="40" y="285" width="80" height="50" rx="6" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="1.5" />
                    <text x="80" y="315" textAnchor="middle" className="fill-foreground font-semibold text-xs">Zone 1</text>

                    <rect x="140" y="285" width="80" height="50" rx="6" fill={currentArch.color} opacity="0.1" stroke={currentArch.color} strokeWidth="1.5" />
                    <text x="180" y="315" textAnchor="middle" className="fill-foreground font-semibold text-xs">Zone 2</text>

                    <rect x="240" y="285" width="30" height="50" rx="6" fill={currentArch.color} opacity="0.08" stroke={currentArch.color} strokeWidth="1.5" />
                    <text x="255" y="315" textAnchor="middle" className="fill-foreground font-semibold text-xs">...</text>
                  </svg>
                )}
              </div>

            {/* Navigation Buttons - Inside Container */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
              {/* Left Navigation */}
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center pointer-events-auto group"
                aria-label="Previous architecture"
              >
                <ChevronLeft className="w-6 h-6 transition-transform group-hover:scale-110" style={{ color: currentArch.color }} />
              </button>

              {/* Right Navigation */}
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center pointer-events-auto group"
                aria-label="Next architecture"
              >
                <ChevronRightIcon className="w-6 h-6 transition-transform group-hover:scale-110" style={{ color: currentArch.color }} />
              </button>
            </div>
          </div>

          {/* Navigation Controls - Pagination and Counter */}
          <div className="flex flex-col items-center gap-4 mt-6">
            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {deploymentArchitectures.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? "w-8 h-3"
                      : "w-3 h-3 opacity-40 hover:opacity-60"
                  }`}
                  style={{ backgroundColor: currentArch.color }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-sm text-muted-foreground font-medium">
              <span style={{ color: currentArch.color }}>Architecture {currentSlide + 1}</span> of {deploymentArchitectures.length}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

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

export default function IaaSDesignBuildPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // Structured Data for SEO/AEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "StackOps - IaaS Cloud Design & Build",
    provider: {
      "@type": "Organization",
      name: "StackOrbit",
      url: "https://stackorbit.com",
    },
    description:
      "Design and implementation of IaaS cloud infrastructures for private and public cloud implementations using Apache CloudStack.",
    serviceType: "Cloud Infrastructure Design and Build",
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

      {/* Hero Section - Featured Story Design */}
      <section className="relative pt-8 overflow-hidden px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="group relative grid lg:grid-cols-2 gap-0 bg-slate-900 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            {/* Left - Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  StackOps Services
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 text-balance">
                  IaaS Cloud Design & Build
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Design and implement scalable IaaS cloud infrastructure for private, public, or hybrid deployments using Apache CloudStack.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Build Your Cloud <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <div className="text-sm text-slate-400">
                  <span className="block text-white font-bold text-xl">4-12 weeks</span>
                  Typical Timeline
                </div>
              </div>
            </div>
            {/* Right - Image */}
            <div className="relative min-h-[300px] lg:min-h-0 bg-gradient-to-br from-emerald-50 to-teal-50">
              <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-64 h-64 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl" />
                  </div>
                  <img
                    src="https://www.stackbill.com/assets/images/sb-img/cloudstack-as-a-service.png"
                    alt="IaaS Cloud Design and Build"
                    className="relative w-64 h-64 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Build Any Type of <span className="text-blue-600">Cloud</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need a private cloud, public cloud platform, or hybrid infrastructure, we design and build
              solutions tailored to your requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-background border-2 border-border/50 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[700px]">
            <div className="py-20 px-8 lg:px-12 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-foreground">
                Deep Expertise in <span className="text-blue-600">Cloud Technologies</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                We work with a range of networking, storage, and compute technologies ideally suited for building
                scalable cloud infrastructures. Our vendor-agnostic approach ensures you get the best solution for your
                needs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {technologies.map((tech, idx) => {
                  // Map tech categories to relevant icons
                  const categoryIcons: Record<string, any> = {
                    "Hypervisors": Cpu,
                    "Storage": Database,
                    "Networking": Network,
                    "Hardware": Server,
                  }
                  const IconComponent = categoryIcons[tech.category] || Cpu
                  
                  return (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className="w-6 h-6 text-muted-foreground/40" />
                        <h4 className="font-semibold text-foreground">{tech.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item, i) => (
                          <span key={i} className="px-3 py-1.5 bg-slate-100 text-xs text-muted-foreground/60 rounded-md">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl" />
              <div className="relative">
                <img
                  src="https://www.stackbill.com/assets/images/sb-img/cloudstack-iaas-design.svg"
                  alt="CloudStack IaaS Design - Technology Stack"
                  className="w-full h-full max-w-full object-contain py-12 px-8 drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(59, 130, 246, 0.2)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Architectures Slider */}
      <DeploymentArchitecturesSlider />

      {/* StackBill Integration Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 md:p-14">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Monetize Your Cloud with StackBill
                </h3>
                <p className="text-blue-100 text-sm md:text-base max-w-2xl">
                  Complete billing, metering, and customer management for your CloudStack deployment.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-lg" asChild>
                  <Link href="/platform/stackbill">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">Common questions about IaaS cloud design and build services</p>
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

      {/* CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                Ready to Build Your Cloud?
              </h2>
              <p className="text-slate-300 text-sm">
                Get in touch with our cloud architects specialized in building large-scale IaaS clouds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button
                size="sm"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-lg"
                asChild
              >
                <Link href="/contact">
                  Contact Architects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border border-slate-600 text-white hover:bg-slate-800 rounded-lg"
                asChild
              >
                <Link href="/services/cloudstack-consulting">
                  All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
