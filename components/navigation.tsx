"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState, useRef } from "react"
import { Menu, X, ChevronDown, ChevronUp, Cable as Cube, Eye, Vault, Box, ChevronRight, Sparkles, Zap, Globe, Shield, BarChart3, ShoppingCart, Building2, Briefcase, Languages, Server, RefreshCw, Headphones, Cloud, Network, Database, Cpu, BookOpen, FileText, Video, Award, GraduationCap, Code, Users } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const platformProducts = [
  {
    name: "StackBill",
    description: "Monetization & billing engine for cloud services.",
    href: "/platform/stackbill",
    icon: Cube,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    name: "StackWatch",
    description: "Monitoring & intelligence for cloud operations.",
    href: "/platform/stackwatch",
    icon: Eye,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    name: "StackObject",
    description: "S3 object storage backed by Ceph durability.",
    href: "/platform/stackobject",
    icon: Box,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    name: "StackVault",
    description: "Backup, disaster recovery & cloud storage services.",
    href: "/platform/stackvault",
    icon: Vault,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    badge: "Beta",
  },
  {
    name: "TARS",
    description: "AI-powered cloud automation & anomaly detection.",
    href: "/platform/tars",
    icon: Sparkles,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    badge: "Beta",
  },
]

const platformFeatures = [
  {
    name: "Sovereign Cloud Platform",
    description: "Full control over data, infrastructure, and compliance.",
    icon: Building2,
    color: "text-purple-600",
    href: "/platform/features/sovereign-cloud",
  },
  {
    name: "B2B Cloud Business",
    description: "Built-in billing, resellers, subscriptions, and chargeback.",
    icon: Briefcase,
    color: "text-indigo-600",
    href: "/platform/features/b2b-cloud-business",
  },
  {
    name: "Multi-Region Cloud",
    description: "Operate across regions and zones with centralized control.",
    icon: Globe,
    color: "text-emerald-600",
    href: "/platform/features/multi-region-cloud",
  },
  {
    name: "Cloud Marketplace",
    description: "Offer value-added services and integrations to customers.",
    icon: ShoppingCart,
    color: "text-green-600",
    href: "/platform/stackbill/marketplace",
  },
  {
    name: "Governance & Security",
    description: "Role-based access, tenant isolation, and compliance controls.",
    icon: Shield,
    color: "text-red-600",
    href: "/platform/features/governance-security",
  },
  {
    name: "Reporting & Analytics",
    description: "Usage, cost, performance, and business insights.",
    icon: BarChart3,
    color: "text-amber-600",
    href: "/platform/features/reporting-analytics",
  },
]

const integrationItems = [
  {
    name: "WHMCS",
    description: "Integrate with your existing WHMCS.",
    icon: Zap,
    color: "text-blue-500",
    href: "/platform/integrations/whmcs",
  },
  {
    name: "Kubernetes",
    description: "Enable Kubernetes-as-a-Service for your customers.",
    icon: Box,
    color: "text-blue-600",
    href: "/platform/integrations/kubernetes",
  },
  {
    name: "Shared File System",
    description: "Enable AWS style EFS-as-a-Service.",
    icon: Box,
    color: "text-purple-500",
    href: "/platform/integrations/shared-file-system",
  },
  {
    name: "GPU",
    description: "Enable GPU-as-a-Service for your customers.",
    icon: Zap,
    color: "text-green-500",
    href: "/platform/integrations/gpu",
  },
  
  {
    name: "Payment Gateway",
    description: "Integrate with your preferred Payment Gateway.",
    icon: Shield,
    color: "text-indigo-500",
    href: "/platform/integrations/payment-gateway",
  },
  {
    name: "HelpDesk",
    description: "Enable integrated helpdesk system for your customers.",
    icon: Sparkles,
    color: "text-pink-500",
    href: "/platform/integrations/helpdesk",
  },
]

const platformTools = {
  name: "Integrations",
  description: "DNS, Helpdesk, Identity, Monitoring, and third-party services.",
  href: "/platform/integrations",
}

const servicesItems = [
  { 
    name: "Apache Cloudstack Consulting", 
    description: "Get an expert consulting for designing and building complex cloud with cloudstack.",
    href: "/services/cloudstack-consulting", 
    icon: Sparkles,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20"
  },
  { 
    name: "IAAS design & build with Cloudstack", 
    description: "Design and implementation of IaaS cloud for private & public cloud.",
    href: "/services/iaas-design", 
    icon: Building2,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  { 
    name: "VMware to Apache Cloudstack Migration", 
    description: "Migrate your vSphere environment to a robust Apache CloudStack and KVM",
    href: "/services/vmware-migration", 
    icon: RefreshCw,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20"
  },
  { 
    name: "Fully managed 24/7 support", 
    description: "Tailor made to Fully managed 24/7 support of your choice",
    href: "/services/managed-support", 
    icon: Headphones,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
]

const solutionsItems = {
  byUseCase: [
    { name: "VMware Alternative", description: "Escape licensing costs with open-source CloudStack infrastructure", href: "/solutions/vmware-alternative", icon: RefreshCw, color: "text-red-500", bgColor: "bg-red-50 dark:bg-red-950/20" },
    { name: "Infra as a Service", description: "Build and deliver scalable IaaS offerings to your customers", href: "/solutions/infra-as-a-service", icon: Server, color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
    { name: "Monitoring as a Service", description: "Offer comprehensive cloud monitoring capabilities", href: "/solutions/monitoring-as-a-service", icon: Eye, color: "text-purple-500", bgColor: "bg-purple-50 dark:bg-purple-950/20" },
    { name: "Kubernetes as a Service", description: "Deliver container orchestration at scale", href: "/solutions/kubernetes-as-a-service", icon: Box, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
    { name: "Digital Sovereignty", description: "Maintain complete control over data and compliance", href: "/solutions/digital-sovereignty", icon: Shield, color: "text-indigo-500", bgColor: "bg-indigo-50 dark:bg-indigo-950/20" },
    { name: "Edge Computing", description: "Deploy low-latency infrastructure at the edge", href: "/solutions/edge-computing", icon: Network, color: "text-emerald-500", bgColor: "bg-emerald-50 dark:bg-emerald-950/20" },
  ],
  byIndustry: [
    { name: "Cloud Service Provider", description: "Build and scale your public cloud business", href: "/solutions/cloud-service-provider", icon: Cloud, color: "text-sky-500", bgColor: "bg-sky-50 dark:bg-sky-950/20" },
    { name: "ISP & Telcos", description: "Monetize infrastructure with cloud services", href: "/solutions/isp-telcos", icon: Globe, color: "text-green-500", bgColor: "bg-green-50 dark:bg-green-950/20" },
    { name: "Datacenter", description: "Transform into a modern cloud provider", href: "/solutions/datacenter", icon: Database, color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-950/20" },
    { name: "Private Enterprise", description: "Build secure private cloud environments", href: "/solutions/private-enterprise", icon: Building2, color: "text-violet-500", bgColor: "bg-violet-50 dark:bg-violet-950/20" },
  ],
  featured: {
    label: "Customer Success",
    title: "60% Cost Reduction",
    description: "How a leading telecom provider migrated from VMware and reduced infrastructure costs by 60% with StackOrbit.",
    href: "/resources/case-studies",
    cta: "Read Case Study"
  }
}

const resourcesItems = {
  learn: [
    { name: "Blogs", description: "Latest insights on cloud infrastructure and technology", href: "/resources/blog", icon: BookOpen, color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
    { name: "Quick Reads", description: "Bite-sized articles and tutorials for busy professionals", href: "/resources/quick-reads", icon: Sparkles, color: "text-amber-500", bgColor: "bg-amber-50 dark:bg-amber-950/20" },
    { name: "Videos", description: "Product demos, webinars, and educational content", href: "/resources/videos", icon: Video, color: "text-red-500", bgColor: "bg-red-50 dark:bg-red-950/20" },
    { name: "Case Studies", description: "Real-world success stories from our customers", href: "/resources/case-studies", icon: Award, color: "text-emerald-500", bgColor: "bg-emerald-50 dark:bg-emerald-950/20" },
    { name: "Stack Academy", description: "Free training and certification programs", href: "/platform/stack-academy", icon: GraduationCap, color: "text-purple-500", bgColor: "bg-purple-50 dark:bg-purple-950/20" },
  ],
  documentation: [
    { name: "Deployment Guide", description: "Step-by-step installation and setup instructions", href: "/resources/deployment-guide", icon: Server, color: "text-indigo-500", bgColor: "bg-indigo-50 dark:bg-indigo-950/20" },
    { name: "User Guide", description: "Complete documentation for end users", href: "/resources/user-guide", icon: FileText, color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
    { name: "Admin Guide", description: "Advanced configuration and management", href: "/resources/admin-guide", icon: Shield, color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-950/20" },
    { name: "API Documentation", description: "REST API reference and integration guides", href: "/resources/api-documentation", icon: Code, color: "text-green-500", bgColor: "bg-green-50 dark:bg-green-950/20" },
    { name: "Reseller Guide", description: "Partner onboarding, pricing, and white-label setup", href: "/resources/reseller-guide", icon: Users, color: "text-pink-500", bgColor: "bg-pink-50 dark:bg-pink-950/20" },
  ],
  featured: {
    label: "Latest from Blog",
    title: "CloudStack vs VMware: 2026 Comparison",
    description: "A comprehensive analysis of total cost of ownership, features, and migration paths.",
    href: "/resources/blog",
    cta: "Read Article"
  }
}

const resourcesDocumentation = [
  { name: "Deployment Guide", description: "Step-by-step installation and setup instructions", href: "/resources/deployment-guide", icon: Box },
  { name: "User Guide", description: "Complete documentation for end users", href: "/resources/user-guide", icon: Eye },
  { name: "Admin Guide", description: "Advanced configuration and management", href: "/resources/admin-guide", icon: Shield },
  { name: "API Documentation", description: "REST API reference and integration guides", href: "/resources/api-documentation", icon: Zap },
]

const resourcesExplore = [
  { name: "Blogs", description: "Latest insights on cloud infrastructure and technology", href: "/resources/blog", icon: Sparkles },
  { name: "Quick Reads", description: "Bite-sized articles and tutorials for busy professionals", href: "/resources/quick-reads", icon: BarChart3 },
  { name: "Videos", description: "Product demos, webinars, and educational content", href: "/resources/videos", icon: Eye },
  { name: "Case Studies", description: "Real-world success stories from our customers", href: "/resources/case-studies", icon: Briefcase },
]

const resourcesSupport = [
  { name: "Stack Academy", description: "Free training and certification programs", href: "/platform/stack-academy", icon: Building2 },
  { name: "Support", description: "Get help from our team", href: "/support", icon: Shield },
  { name: "Community", description: "Join our community", href: "/community", icon: Globe },
]

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About Us" },
  { href: "/partner", label: "Partner" },
]

const locales = ['en', 'fr', 'es']; // Declare locales variable
const localeNames = {
  en: 'English',
  fr: 'French',
  es: 'Spanish',
}; // Declare localeNames variable

export function Navigation() {
  const { locale, setLocale, t, locales, localeNames } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false)
  const [platformFeaturesOpen, setPlatformFeaturesOpen] = useState(false)

  const [showPlatformFeatures, setShowPlatformFeatures] = useState(false)
  const [showIntegrations, setShowIntegrations] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)

  const currentLanguageName = localeNames[locale] || 'English'

  const platformTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const platformFeaturesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const integrationsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handlePlatformEnter = () => {
    if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current)
    setPlatformDropdownOpen(true)
  }

  const handlePlatformLeave = () => {
    platformTimeoutRef.current = setTimeout(() => {
      setPlatformDropdownOpen(false)
    }, 150)
  }

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
    setServicesDropdownOpen(true)
  }

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 150)
  }

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current)
    setSolutionsDropdownOpen(true)
  }

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false)
    }, 150)
  }

  const handleResourcesEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current)
    setResourcesDropdownOpen(true)
  }

  const handleResourcesLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false)
    }, 150)
  }

  const handlePlatformFeaturesEnter = () => {
    if (platformFeaturesTimeoutRef.current) clearTimeout(platformFeaturesTimeoutRef.current)
    if (integrationsTimeoutRef.current) clearTimeout(integrationsTimeoutRef.current)
    setShowIntegrations(false)
    setShowPlatformFeatures(true)
  }

  const handlePlatformFeaturesLeave = () => {
    platformFeaturesTimeoutRef.current = setTimeout(() => {
      setShowPlatformFeatures(false)
    }, 200)
  }

  const handleIntegrationsEnter = () => {
    if (integrationsTimeoutRef.current) clearTimeout(integrationsTimeoutRef.current)
    if (platformFeaturesTimeoutRef.current) clearTimeout(platformFeaturesTimeoutRef.current)
    setShowPlatformFeatures(false)
    setShowIntegrations(true)
  }

  const handleIntegrationsLeave = () => {
    integrationsTimeoutRef.current = setTimeout(() => {
      setShowIntegrations(false)
    }, 200)
  }

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale)
    setLanguageDropdownOpen(false)
  }

  const currentLocale = locale

  return (
    <>
      <div className="bg-gradient-to-r from-slate-50 to-purple-50/30 dark:from-slate-950 dark:to-purple-950/20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10">
            <div className="flex items-center gap-6 text-xs">
              <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                {t('navigation.support')}
              </Link>
              <Link href="/partner" className="text-muted-foreground hover:text-primary transition-colors">
                {t('navigation.partner')}
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                {t('navigation.contactUs')}
              </Link>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span>{currentLanguageName === 'English' ? 'English' : currentLanguageName.split(' ')[0]}</span>
                  {languageDropdownOpen ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>
                
                {languageDropdownOpen && (
                  <>
                    {/* Backdrop to close dropdown */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setLanguageDropdownOpen(false)}
                    />
                    
                    {/* Dropdown menu */}
                    <div className="absolute right-0 top-full mt-2 w-56 bg-background border border-purple-200/50 dark:border-purple-800/30 rounded-xl shadow-xl shadow-purple-500/5 z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            setLocale(loc)
                            setLanguageDropdownOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-purple-50 dark:hover:bg-purple-950/30 ${
                            locale === loc
                              ? "text-primary font-medium bg-purple-50/50 dark:bg-purple-950/20"
                              : "text-foreground"
                          }`}
                        >
                          {localeNames[loc]}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-background border-b border-border/40 sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/stackorbit-logo.png"
                alt="StackOrbit Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 flex-1">
              <div className="flex items-center gap-6">
                {/* Platform Dropdown */}
                <div onMouseEnter={handlePlatformEnter} onMouseLeave={handlePlatformLeave}>
                  <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 py-6">
                    {t('navigation.platform')}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${platformDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {platformDropdownOpen && (
                    <>
                    <div
                      className="absolute left-0 right-0 top-full z-40 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={handlePlatformEnter}
                      onMouseLeave={handlePlatformLeave}
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-background border border-purple-200/50 dark:border-purple-800/30 rounded-2xl shadow-2xl shadow-purple-500/5">
                          <div className="px-6 pb-6 pt-4">
                            <div className="grid grid-cols-[1fr_340px] gap-8">
                              <div className="space-y-3 max-h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                                {/* StackOrbit CMP Header */}
                                <div className="border-b border-purple-100 dark:border-purple-900/30 pb-2">
                                  <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-1.5">
                                    <span className="text-[9px] font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                                      PLATFORM & PRODUCTS
                                    </span>
                                  </div>
                                  <h3 className="text-base font-bold text-foreground">StackOrbit CMP</h3>
                                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                                    StackOrbit is a modular cloud platform that empower cloud service providers to build, operate, and scale sovereign cloud environments.
                                  </p>
                                </div>

                                {/* Core Platform Modules */}
                                <div className="space-y-0.5">
                                  <h4 className="text-xs font-semibold text-foreground mb-1">Core Platform Modules</h4>
                                  {platformProducts.map((product) => {
                                    const Icon = product.icon
                                    return (
                                      <Link
                                        key={product.href}
                                        href={product.href}
                                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200 group border border-transparent hover:border-purple-200/50 dark:hover:border-purple-800/30"
                                      >
                                        <div className={`${product.bgColor} p-1.5 rounded-md flex-shrink-0`}>
                                          <Icon className={`w-3.5 h-3.5 ${product.color}`} />
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2">
                                            <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                                              {product.name}
                                            </span>
                                            {product.badge && (
                                              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-white">
                                                {product.badge}
                                              </span>
                                            )}
                                          </div>
                                          <div className="text-[11px] text-muted-foreground leading-snug">
                                            {product.description}
                                          </div>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>

                                {/* Platform Features */}
                                <div className="pt-1">
                                  <div className="border-t border-purple-100 dark:border-purple-900/30 pt-3">
                                    <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-2">
                                      <span className="text-[9px] font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                                        PLATFORM FEATURES
                                      </span>
                                    </div>
                                    <div
                                      onMouseEnter={handlePlatformFeaturesEnter}
                                      onMouseLeave={handlePlatformFeaturesLeave}
                                    >
                                      <div className={`flex items-center justify-between p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-200 group cursor-pointer border ${showPlatformFeatures ? 'border-indigo-200/50 dark:border-indigo-800/30 bg-indigo-50 dark:bg-indigo-950/30' : 'border-transparent'}`}>
                                        <div>
                                          <span className={`font-semibold text-sm transition-colors ${showPlatformFeatures ? 'text-primary' : 'group-hover:text-primary'}`}>
                                            Platform Features
                                          </span>
                                          <div className="text-[11px] text-muted-foreground">
                                            Learn about automations, interfaces, and more
                                          </div>
                                        </div>
                                        <ChevronRight className={`w-3.5 h-3.5 transition-all flex-shrink-0 ml-2 ${showPlatformFeatures ? 'text-primary translate-x-1' : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'}`} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Tools Section */}
                                <div className="border-t border-purple-100 dark:border-purple-900/30 pt-3">
                                  <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-2">
                                    <span className="text-[9px] font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                      TOOLS
                                    </span>
                                  </div>
                                  <div
                                    onMouseEnter={handleIntegrationsEnter}
                                    onMouseLeave={handleIntegrationsLeave}
                                  >
                                    <div className={`flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200 group cursor-pointer border ${showIntegrations ? 'border-blue-200/50 dark:border-blue-800/30 bg-blue-50 dark:bg-blue-950/30' : 'border-transparent'}`}>
                                      <div>
                                        <span className={`font-semibold text-sm transition-colors ${showIntegrations ? 'text-primary' : 'group-hover:text-primary'}`}>
                                          {platformTools.name}
                                        </span>
                                        <div className="text-[11px] text-muted-foreground">
                                          {platformTools.description}
                                        </div>
                                      </div>
                                      <ChevronRight className={`w-3.5 h-3.5 transition-all flex-shrink-0 ml-2 ${showIntegrations ? 'text-primary translate-x-1' : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'}`} />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-xl p-6 flex flex-col border border-purple-100/50 dark:border-purple-800/30"
                                onMouseEnter={() => {
                                  // Clear any pending timeouts to keep the current submenu visible
                                  if (platformFeaturesTimeoutRef.current) clearTimeout(platformFeaturesTimeoutRef.current)
                                  if (integrationsTimeoutRef.current) clearTimeout(integrationsTimeoutRef.current)
                                }}
                                onMouseLeave={() => {
                                  // When leaving the right panel, start the timeout to hide submenus
                                  if (showPlatformFeatures) {
                                    handlePlatformFeaturesLeave()
                                  }
                                  if (showIntegrations) {
                                    handleIntegrationsLeave()
                                  }
                                }}
                              >
                                {showIntegrations ? (
                                  <div>
                                    <div className="border-b border-purple-200/50 dark:border-purple-800/30 pb-3 mb-4">
                                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                        <span className="text-[10px] font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                          INTEGRATIONS
                                        </span>
                                      </div>
                                    </div>
                                    <div className="space-y-1.5 max-h-[280px] overflow-y-auto">
                                      {integrationItems.map((integration) => {
                                        const Icon = integration.icon
                                        const content = (
                                          <>
                                            <div key={integration.name} className={`${integration.color} flex-shrink-0`}>
                                              <Icon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0" key={integration.name}>
                                              <div className="font-semibold text-sm group-hover:text-primary transition-colors">{integration.name}</div>
                                              <div className="text-[11px] text-muted-foreground leading-snug">
                                                {integration.description}
                                              </div>
                                            </div>
                                          </>
                                        )
                                        return integration.href ? (
                                          <Link
                                            key={integration.href}
                                            href={integration.href}
                                            className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors group"
                                          >
                                            {content}
                                          </Link>
                                        ) : (
                                          <div
                                            key={integration.name}
                                            className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors group"
                                          >
                                            {content}
                                          </div>
                                        )
                                      })}
                                    </div>
                                  </div>
                                ) : showPlatformFeatures ? (
                                  <div>
                                    <div className="border-b border-purple-200/50 dark:border-purple-800/30 pb-3 mb-4">
                                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                                        <span className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                                          PLATFORM FEATURES
                                        </span>
                                      </div>
                                    </div>
                                    <div className="space-y-1.5 max-h-[280px] overflow-y-auto">
                                      {platformFeatures.map((feature) => {
                                        const Icon = feature.icon
                                        return (
                                          <Link
                                            key={feature.href}
                                            href={feature.href}
                                            className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors group"
                                          >
                                            <div className={`${feature.color} flex-shrink-0`}>
                                              <Icon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0" key={feature.name}>
                                              <div className="font-semibold text-sm group-hover:text-primary transition-colors">{feature.name}</div>
                                              <div className="text-[11px] text-muted-foreground leading-snug">
                                                {feature.description}
                                              </div>
                                            </div>
                                          </Link>
                                        )
                                      })}
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <div>
                                      <h3 className="text-lg font-bold mb-2 text-foreground">
                                        What You Can Build with StackOrbit
                                      </h3>
                                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                                        Deploy and monetize your own cloud platform using StackOrbit's modular solution suite. Tap into <span className="font-semibold text-foreground">advanced billing, monitoring, object storage, backup, and AI automation</span>, all integrated in one unified platform.
                                      </p>
                                    </div>
                                    <div className="mb-4 rounded-xl overflow-hidden border border-purple-200/50 dark:border-purple-800/30 shadow-lg">
                                      <Image
                                        src="/images/menu-filler.png"
                                        alt="StackOrbit Platform Dashboard"
                                        width={400}
                                        height={200}
                                        className="w-full h-auto"
                                      />
                                    </div>
                                    <Link
                                      href="/platform"
                                      className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all text-sm font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 w-fit"
                                    >
                                      Explore the platform
                                    </Link>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
                  )}
                </div>

                <div onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
                  <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 py-6">
                    {t('navigation.services')}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {servicesDropdownOpen && (
                    <>
                    <div
                      className="absolute left-0 right-0 top-full z-40 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-background border border-purple-200/50 dark:border-purple-800/30 rounded-2xl shadow-2xl shadow-purple-500/5">
                          <div className="px-6 pb-6 pt-4">
                            {/* Header */}
                            <div className="mb-4">
                              <h3 className="text-base font-bold text-foreground">
                                <span className="text-purple-600 dark:text-purple-400 uppercase tracking-wide text-sm">STACKOPS</span>
                                {' – '}Managed Cloud Engineering
                              </h3>
                              <p className="text-[11px] text-muted-foreground mt-0.5">
                                24/7 Cloud Deployment, Migration & Operations for Apache CloudStack
                              </p>
                            </div>

                            <div className="grid grid-cols-[1fr_280px] gap-6">
                              {/* Left Side - Services List */}
                              <div className="space-y-3">
                                <Link href="/services/cloudstack-consulting" className="flex items-start gap-3 group p-2 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all">
                                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <Network className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <div>
                                    <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors block">Cloud Architecture & Design</span>
                                    <span className="text-[11px] text-muted-foreground leading-snug block mt-0.5">Design sovereign private & public cloud platforms using Apache CloudStack and KVM.</span>
                                  </div>
                                </Link>

                                <Link href="/services/iaas-design" className="flex items-start gap-3 group p-2 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all">
                                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <RefreshCw className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                  </div>
                                  <div>
                                    <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors block">IaaS Design & Build with CloudStack</span>
                                    <span className="text-[11px] text-muted-foreground leading-snug block mt-0.5">Design and implement scalable IaaS infrastructure powered by Apache CloudStack.</span>
                                  </div>
                                </Link>

                                <Link href="/services/vmware-migration" className="flex items-start gap-3 group p-2 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all">
                                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                  </div>
                                  <div>
                                    <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors block">VMware to Apache CloudStack Migration</span>
                                    <span className="text-[11px] text-muted-foreground leading-snug block mt-0.5">Seamlessly migrate your vSphere workloads to CloudStack with minimal downtime.</span>
                                  </div>
                                </Link>

                                <Link href="/services/managed-support" className="flex items-start gap-3 group p-2 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all">
                                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                  </div>
                                  <div>
                                    <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors block">24/7 Managed Cloud Operations</span>
                                    <span className="text-[11px] text-muted-foreground leading-snug block mt-0.5">{'Full L2/L3/L4 support, monitoring, patching, upgrades & performance optimization.'}</span>
                                  </div>
                                </Link>
                              </div>

                              {/* Right Side - Who Is This For */}
                              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-xl p-5 flex flex-col border border-purple-100/50 dark:border-purple-800/30">
                                <h4 className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-3">Who Is This For?</h4>
                                <ul className="space-y-2.5 flex-1">
                                  <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                                    <span className="text-xs text-foreground leading-snug">ISPs & Telcos launching cloud services</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                                    <span className="text-xs text-foreground leading-snug">Datacenters building public cloud</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                                    <span className="text-xs text-foreground leading-snug">Enterprises running private cloud</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                                    <span className="text-xs text-foreground leading-snug">Government sovereign deployments</span>
                                  </li>
                                </ul>
                                <Link
                                  href="/contact"
                                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg text-center transition-colors mt-4"
                                >
                                  Talk to a Cloud Architect
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
                  )}
                </div>

                <div onMouseEnter={handleSolutionsEnter} onMouseLeave={handleSolutionsLeave}>
                  <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 py-6">
                    Solutions
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${solutionsDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {solutionsDropdownOpen && (
                    <>
                    <div
                      className="absolute left-0 right-0 top-full z-40 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={handleSolutionsEnter}
                      onMouseLeave={handleSolutionsLeave}
                    >
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-background border border-purple-200/50 dark:border-purple-800/30 rounded-2xl shadow-2xl shadow-purple-500/5">
                          <div className="px-6 pb-6 pt-4">
                            <div className="grid grid-cols-[1fr_1fr_280px] gap-6">
                              {/* By Use Case */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                                    BY USE CASE
                                  </span>
                                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                                </div>
                                <div className="space-y-0.5">
                                  {solutionsItems.byUseCase.map((item) => {
                                    const Icon = item.icon
                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-200 group"
                                      >
                                        <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                          <Icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors block">
                                            {item.name}
                                          </span>
                                          <span className="text-[11px] text-muted-foreground leading-snug block">
                                            {item.description}
                                          </span>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>
                              </div>

                              {/* By Industry */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                                    BY INDUSTRY
                                  </span>
                                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                                </div>
                                <div className="space-y-0.5">
                                  {solutionsItems.byIndustry.map((item) => {
                                    const Icon = item.icon
                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-200 group"
                                      >
                                        <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                          <Icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors block">
                                            {item.name}
                                          </span>
                                          <span className="text-[11px] text-muted-foreground leading-snug block">
                                            {item.description}
                                          </span>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>

                                {/* View All Link */}
                                <Link
                                  href="/solutions"
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors mt-3 group"
                                >
                                  View all solutions
                                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>

                              {/* Featured Card */}
                              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 dark:from-slate-900/50 dark:to-purple-950/30 rounded-xl p-5 border border-slate-100 dark:border-slate-800">
                                <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">
                                  {solutionsItems.featured.label}
                                </span>
                                <h3 className="text-xl font-bold text-foreground mt-2 mb-2 leading-tight">
                                  {solutionsItems.featured.title}
                                </h3>
                                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                                  {solutionsItems.featured.description}
                                </p>
                                <Link
                                  href={solutionsItems.featured.href}
                                  className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-medium text-foreground bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                >
                                  {solutionsItems.featured.cta}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
                  )}
                </div>

                <div onMouseEnter={handleResourcesEnter} onMouseLeave={handleResourcesLeave}>
                  <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 py-6">
                    Resources
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${resourcesDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {resourcesDropdownOpen && (
                    <>
                    <div
                      className="absolute left-0 right-0 top-full z-40 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={handleResourcesEnter}
                      onMouseLeave={handleResourcesLeave}
                    >
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-background border border-purple-200/50 dark:border-purple-800/30 rounded-2xl shadow-2xl shadow-purple-500/5">
                          <div className="px-6 pb-6 pt-4">
                            <div className="grid grid-cols-[1fr_1fr_280px] gap-6">
                              {/* Learn & Explore */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                                    LEARN & EXPLORE
                                  </span>
                                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                                </div>
                                <div className="space-y-0.5">
                                  {resourcesItems.learn.map((item) => {
                                    const Icon = item.icon
                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-200 group"
                                      >
                                        <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                          <Icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors block">
                                            {item.name}
                                          </span>
                                          <span className="text-[11px] text-muted-foreground leading-snug block">
                                            {item.description}
                                          </span>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>
                              </div>

                              {/* Documentation */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                                    DOCUMENTATION
                                  </span>
                                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                                </div>
                                <div className="space-y-0.5">
                                  {resourcesItems.documentation.map((item) => {
                                    const Icon = item.icon
                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-200 group"
                                      >
                                        <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                          <Icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors block">
                                            {item.name}
                                          </span>
                                          <span className="text-[11px] text-muted-foreground leading-snug block">
                                            {item.description}
                                          </span>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>

                                {/* View All Link */}
                                <Link
                                  href="/resources"
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors mt-3 group"
                                >
                                  View all resources
                                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>

                              {/* Featured Card */}
                              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900/50 dark:to-blue-950/30 rounded-xl p-5 border border-slate-100 dark:border-slate-800">
                                <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
                                  {resourcesItems.featured.label}
                                </span>
                                <h3 className="text-xl font-bold text-foreground mt-2 mb-2 leading-tight">
                                  {resourcesItems.featured.title}
                                </h3>
                                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                                  {resourcesItems.featured.description}
                                </p>
                                <Link
                                  href={resourcesItems.featured.href}
                                  className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-medium text-foreground bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                >
                                  {resourcesItems.featured.cta}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
                  )}
                </div>

                {/* Company Dropdown */}
                <div className="relative group">
                  <Link
                    href="/company"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 py-6"
                  >
                    Company
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  
                  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 translate-y-1 group-hover:translate-y-0">
                    <div className="bg-background border border-purple-200/50 dark:border-purple-800/30 rounded-xl shadow-xl shadow-purple-500/5 py-2 min-w-[200px]">
                      <Link
                        href="/what-we-do"
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:text-primary transition-colors"
                      >
                        What We Do
                      </Link>
                      <Link
                        href="/company"
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:text-primary transition-colors"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/partner"
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:text-primary transition-colors"
                      >
                        Partner with Us
                      </Link>
                      <Link
                        href="/contact"
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:text-primary transition-colors"
                      >
                        ContactUs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <Link
                  href="https://app.stackbill.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-xl hover:border-primary hover:bg-purple-50 dark:hover:bg-purple-950/30"
                >
                  Login
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all text-sm font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  Request a demo
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/40">
              <div className="flex flex-col gap-4">
                {/* Platform & Products */}
                <div className="border-b border-border/40 pb-4">
                  <div className="text-sm font-medium mb-3">Platform & Products</div>
                  <div className="flex flex-col gap-3 pl-4">
                    {platformProducts.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="border-b border-border/40 pb-4">
                  <div className="text-sm font-medium mb-3">Services</div>
                  <div className="flex flex-col gap-3 pl-4">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div className="border-b border-border/40 pb-4">
                  <div className="text-sm font-medium mb-3">Solutions</div>
                  <div className="flex flex-col gap-3 pl-4">
                    {[
                      ...solutionsItems.keySolutions,
                      ...solutionsItems.cloud,
                      ...solutionsItems.ai,
                      ...solutionsItems.industry,
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="border-b border-border/40 pb-4">
                  <div className="text-sm font-medium mb-3">Resources</div>
                  <div className="flex flex-col gap-3 pl-4">
                    {[...resourcesDocumentation, ...resourcesExplore, ...resourcesSupport].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Company Section */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Company
                  </span>
                  <div className="space-y-1 pl-2">
                    <Link
                      href="/what-we-do"
                      className="block text-sm text-foreground hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      What We Do
                    </Link>
                    <Link
                      href="/company"
                      className="block text-sm text-foreground hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/partner"
                      className="block text-sm text-foreground hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Partner with Us
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-sm text-foreground hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      ContactUs
                    </Link>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="flex flex-col gap-3 mt-4">
                  <Link
                    href="https://app.stackbill.com"
                    className="text-sm text-center px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-xl hover:border-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
