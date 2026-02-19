"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight, 
  Check, 
  Server, 
  Shield, 
  Globe, 
  Zap, 
  Building2, 
  Cloud,
  Database,
  BarChart3,
  CreditCard,
  Users,
  Lock,
  ChevronRight,
  Play,
  Sparkles
} from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"
import { InteractiveCloudDemo } from "@/components/interactive-cloud-demo"
import { CaseStudiesCarousel } from "@/components/case-studies-carousel"
import { RotatingText } from "@/components/rotating-text"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()
  const [activeProduct, setActiveProduct] = useState(0)
  const productsSectionRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)

  // Core Products with purple theme gradients
  const products = [
    {
      id: "stackbill",
      name: "StackBill",
      tagline: "Cloud Management Platform",
      description: "Complete cloud billing, self-service portal, and resource management for service providers.",
      features: ["Automated Billing", "Self-Service Portal", "Multi-tenant", "White-Label Ready"],
      color: "from-violet-600 to-purple-700",
      href: "/platform/stackbill"
    },
    {
      id: "stackwatch",
      name: "StackWatch",
      tagline: "Observability Platform",
      description: "Enterprise monitoring, alerting, and analytics for your entire cloud infrastructure.",
      features: ["Real-time Monitoring", "Smart Alerts", "Custom Dashboards", "Log Analytics"],
      color: "from-purple-600 to-indigo-700",
      href: "/platform/stackwatch"
    },
    {
      id: "stackobject",
      name: "StackObject",
      tagline: "Object Storage",
      description: "S3-compatible object storage with high performance and data sovereignty.",
      features: ["S3 Compatible", "High Durability", "Scalable", "Cost Effective"],
      color: "from-indigo-600 to-violet-700",
      href: "/platform/stackobject"
    },
    {
      id: "stackvault",
      name: "StackVault",
      tagline: "Backup & Disaster Recovery",
      description: "Enterprise-grade backup and disaster recovery solution with automated protection policies.",
      features: ["Automated Backups", "Disaster Recovery", "Point-in-Time Restore", "Geo-Replication"],
      color: "from-fuchsia-600 to-purple-700",
      href: "/platform/stackvault"
    },
    {
      id: "tars",
      name: "TARS",
      tagline: "AI Operations Assistant",
      description: "AI-powered automation for intelligent cloud operations and support.",
      features: ["AI Automation", "Predictive Scaling", "Smart Support", "Cost Optimization"],
      color: "from-purple-600 to-pink-600",
      href: "/platform/tars"
    }
  ]

  // Handle scroll navigation for products section
  const handleProductScroll = useCallback((e: WheelEvent) => {
    const section = productsSectionRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()
    const isInView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5

    if (isInView && !isScrollingRef.current) {
      e.preventDefault()
      isScrollingRef.current = true

      if (e.deltaY > 0) {
        setActiveProduct((prev) => (prev < products.length - 1 ? prev + 1 : prev))
      } else {
        setActiveProduct((prev) => (prev > 0 ? prev - 1 : prev))
      }

      setTimeout(() => {
        isScrollingRef.current = false
      }, 400)
    }
  }, [products.length])

  useEffect(() => {
    const section = productsSectionRef.current
    if (!section) return

    section.addEventListener('wheel', handleProductScroll, { passive: false })
    return () => {
      section.removeEventListener('wheel', handleProductScroll)
    }
  }, [handleProductScroll])

  // Solutions by industry
  const solutions = [
    {
      icon: Building2,
      title: "Service Providers",
      description: "Launch and scale cloud services under your brand with complete control.",
      href: "/solutions/service-providers"
    },
    {
      icon: Server,
      title: "Data Centers",
      description: "Transform infrastructure into a profitable cloud business.",
      href: "/solutions/data-centers"
    },
    {
      icon: Globe,
      title: "Enterprises",
      description: "Build sovereign private clouds with full data control.",
      href: "/solutions/enterprise"
    },
    {
      icon: Shield,
      title: "Government",
      description: "Secure, compliant infrastructure for public sector.",
      href: "/solutions/government"
    }
  ]

  // Key differentiators
  const differentiators = [
    { stat: "70%", label: "Lower TCO" },
    { stat: "100%", label: "Data Sovereignty" },
    { stat: "24/7", label: "Expert Support" },
    { stat: "0", label: "Vendor Lock-in" }
  ]

  // Customer logos
  const customers = [
    { name: "Kalaam KEMS", logo: "/images/client-9.png" },
    { name: "Coloasia", logo: "/images/client-6.png" },
    { name: "AFRANET", logo: "/images/client-5.png" },
    { name: "Data Hub", logo: "/images/client-7.png" },
    { name: "Appranix", logo: "/images/client-10.png" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">

      {/* Hero Section */}
      <section className="pt-10 pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-3 text-foreground leading-tight">
              A Unified Platform for{' '}
              <RotatingText />
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-5 max-w-2xl mx-auto">
              The complete sovereign cloud platform that enables service providers to launch, operate, and monetize cloud services—without hyperscaler dependency.
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

      {/* What We Do */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/20 dark:to-transparent" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight mb-6">
              One Platform.
              <br />
              <span className="text-muted-foreground">Complete Control.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Design, operate, and monetize sovereign cloud services - from infrastructure to revenue - using a single unified platform.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/15 via-violet-500/10 to-indigo-500/15 rounded-3xl blur-2xl pointer-events-none" aria-hidden="true" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10 aspect-[16/9] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-6">
                  {["StackBill", "StackWatch", "StackObject", "StackVault", "TARS AI", "Integrations"].map((item) => (
                    <div key={item} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                      <span className="text-white text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-sm font-light">Unified Sovereign Cloud Platform Architecture</p>
              </div>
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

            <div className="flex flex-wrap justify-center items-center gap-12" role="list" aria-label="Trusted customers">
              {customers.map((customer) => (
                <div key={customer.name} role="listitem">
                  <img
                    src={customer.logo || "/placeholder.svg"}
                    alt={`${customer.name} logo`}
                    className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - with scroll */}
      <section id="products" ref={productsSectionRef} className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-20">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight mb-6">
              Modular Products.
              <br />
              <span className="text-muted-foreground">Unified Platform.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Choose the components you need. Scale as you grow.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-72 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-3 lg:p-4">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  aria-pressed={activeProduct === index}
                  aria-label={`View ${product.name} - ${product.tagline}`}
                  className={`flex-shrink-0 lg:flex-shrink text-left transition-all px-4 py-3 rounded-xl ${
                    activeProduct === index 
                      ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/20" 
                      : "hover:bg-white/50 dark:hover:bg-white/10 text-foreground/60 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold opacity-60" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-semibold whitespace-nowrap">{product.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Product Card */}
            <div className="flex-1 w-full h-[450px] lg:h-[500px] relative">
              {/* Custom TARS Card */}
              {products[activeProduct].id === "tars" ? (
                <div className="bg-purple-100 dark:bg-purple-950/40 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-purple-500/10 transition-all duration-500">
                  {/* Blurred circle decoration - bottom right */}
                  <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-300/60 dark:bg-purple-700/40 rounded-full blur-2xl" />
                  {/* Subtle top-right accent */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-200/40 dark:bg-purple-800/20 rounded-full blur-xl" />

                  {/* Top area - AI circular icon */}
                  <div className="relative z-10">
                    <div className="w-48 h-48 relative mb-8">
                      {/* Circular arrangement of dots */}
                      {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 30) * (Math.PI / 180)
                        const radius = 70
                        const x = 96 + radius * Math.cos(angle - Math.PI / 2)
                        const y = 96 + radius * Math.sin(angle - Math.PI / 2)
                        const size = i % 3 === 0 ? 16 : i % 2 === 0 ? 14 : 12
                        return (
                          <div
                            key={i}
                            className="absolute bg-purple-700 dark:bg-purple-300 rounded-sm"
                            style={{
                              width: `${size}px`,
                              height: `${size}px`,
                              left: `${x - size / 2}px`,
                              top: `${y - size / 2}px`,
                              transform: `rotate(${i * 30 + 15}deg)`,
                            }}
                          />
                        )
                      })}
                    </div>
                  </div>

                  {/* Bottom area - Text content */}
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                      Say hello to TARS
                    </h3>
                    <p className="text-lg text-purple-700 dark:text-purple-300 max-w-md leading-relaxed font-light">
                      Your AI-powered cloud operations assistant. Automate tasks, predict issues, and optimize costs with intelligent automation.
                    </p>
                    <Button 
                      size="lg" 
                      className="mt-6 bg-purple-700 hover:bg-purple-800 dark:bg-purple-300 dark:hover:bg-purple-200 dark:text-purple-950 text-white rounded-full px-8" 
                      asChild
                    >
                      <Link href="/platform/tars">
                        Meet TARS <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : products[activeProduct].id === "stackvault" ? (
                <div className="bg-[#fdf6ee] dark:bg-amber-950/30 rounded-3xl p-8 md:p-12 h-full transition-all duration-500 relative overflow-hidden shadow-2xl shadow-amber-500/10">
                  <div className="grid md:grid-cols-2 gap-8 h-full">
                    {/* Left - Icon and headline */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <Shield className="w-14 h-14 text-[#2d5016] dark:text-emerald-400 mb-8" strokeWidth={1.5} />
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2d5016] dark:text-emerald-100 leading-tight">
                          Enterprise-grade backup for the infrastructure your business depends on
                        </h3>
                      </div>
                      <Button 
                        size="lg" 
                        className="mt-8 bg-[#2d5016] hover:bg-[#1e3a0e] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-full px-8 w-fit" 
                        asChild
                      >
                        <Link href="/platform/stackvault">
                          Explore StackVault <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>

                    {/* Right - Feature groups with checkmarks */}
                    <div className="flex flex-col gap-8">
                      {/* Group 1 */}
                      <div>
                        <h4 className="text-lg font-bold text-[#2d3a2d] dark:text-emerald-100 mb-4">Resilient Protection</h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#2d5016] dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-[#3d4a3d] dark:text-emerald-200/80">Automated backup policies with customizable retention schedules</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#2d5016] dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-[#3d4a3d] dark:text-emerald-200/80">Geo-replicated snapshots across multiple data center regions</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#2d5016] dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-[#3d4a3d] dark:text-emerald-200/80">Point-in-time restore for VMs, volumes, and configurations</span>
                          </div>
                        </div>
                      </div>

                      {/* Group 2 */}
                      <div>
                        <h4 className="text-lg font-bold text-[#2d3a2d] dark:text-emerald-100 mb-4">Flexible Administration</h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#2d5016] dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-[#3d4a3d] dark:text-emerald-200/80">Role-based access controls with tenant-level backup management</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#2d5016] dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-[#3d4a3d] dark:text-emerald-200/80">Self-service restore portal for end customers</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#2d5016] dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-[#3d4a3d] dark:text-emerald-200/80">API-driven provisioning and automated disaster recovery orchestration</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#2d5016] dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-[#3d4a3d] dark:text-emerald-200/80">Immutable storage for ransomware-proof data protection</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : products[activeProduct].id === "stackwatch" ? (
                <div className="bg-white dark:bg-gray-900 rounded-3xl h-full transition-all duration-500 relative overflow-hidden shadow-2xl shadow-gray-500/10 border border-gray-200 dark:border-gray-700 flex flex-col">
                  {/* Top ~30% - Text area */}
                  <div className="px-8 md:px-12 pt-8 md:pt-10 pb-4 flex items-start justify-between gap-6">
                    <div className="max-w-xl">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                        {"Monitor everything. Miss nothing."}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        Full-stack infrastructure monitoring built for service providers. Deploy agents in minutes, track server health in real time, and deliver SLA-grade visibility to your customers with white-label dashboards.
                      </p>
                    </div>
                    <Button
                      size="lg"
                      className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 text-white rounded-full px-8 shrink-0"
                      asChild
                    >
                      <Link href="/platform/stackwatch">Learn more</Link>
                    </Button>
                  </div>

                  {/* Bottom ~70% - Image area */}
                  <div className="relative flex-1 min-h-0 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-10" />
                    <img
                      src="/images/stackwatch-configure-agent.png"
                      alt="StackWatch monitoring agent configuration interface"
                      className="w-full h-full object-cover object-top px-6 md:px-10"
                    />
                  </div>
                </div>
              ) : products[activeProduct].id === "stackobject" ? (
                <div className="bg-white dark:bg-gray-900 rounded-3xl h-full transition-all duration-500 relative overflow-hidden shadow-2xl shadow-gray-500/10 border border-gray-200 dark:border-gray-700 flex flex-col">
                  {/* Top ~70% - Image area */}
                  <div className="relative flex-1 min-h-0 overflow-hidden rounded-t-3xl">
                    <img
                      src="https://docs.stackbill.com/user-guide/add-on/object-storage/user-management/Image-08.JPG"
                      alt="StackObject S3-compatible object storage user management interface"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Gradient fade at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
                  </div>

                  {/* Bottom ~30% - Text overlap area */}
                  <div className="px-8 md:px-12 pb-8 md:pb-10 pt-2 flex items-end justify-between gap-6">
                    <div className="max-w-xl">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                        {"Don't just store data. Monetize it."}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        S3-compatible object storage built for service providers. Offer scalable, sovereign storage to your customers with built-in multi-tenancy, usage-based billing, and enterprise-grade durability.
                      </p>
                    </div>
                    <Button
                      size="lg"
                      className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 text-white rounded-full px-8 shrink-0"
                      asChild
                    >
                      <Link href="/platform/stackobject">Learn more</Link>
                    </Button>
                  </div>
                </div>
              ) : products[activeProduct].id === "stackbill" ? (
                <div className="bg-[#8B4513] dark:bg-[#6B3410] rounded-3xl h-full transition-all duration-500 relative overflow-hidden shadow-2xl shadow-amber-900/20 flex flex-col">
                  {/* Top section - Text and CTA */}
                  <div className="px-8 md:px-12 pt-8 md:pt-10 pb-4 relative z-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="max-w-lg">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                          Launch cloud services at enterprise speed
                        </h3>
                        <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                          Empower your customers with self-service cloud provisioning, automated billing, and white-label portals — built for service providers who need to monetize infrastructure fast.
                        </p>
                      </div>
                      <Button
                        size="lg"
                        className="bg-white text-[#8B4513] hover:bg-white/90 rounded-full px-6 font-medium shrink-0 shadow-lg"
                        asChild
                      >
                        <Link href="/platform/stackbill">Learn more</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Bottom section - Fanned perspective images */}
                  <div className="flex-1 relative mt-2 overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-4 px-6 md:px-10" style={{ perspective: '1200px' }}>
                      {[
                        { src: "https://images.ctfassets.net/wl95ljfippl8/4Fr1XcUcUftjM8HiSUrsD9/4fc96c45b67f44e263cbd9cbab975dac/App_Building_-_1.png?w=640&q=75&fm=webp&fit=fill", alt: "StackBill Cloud Portal - Self-service dashboard", z: 40, shift: "-translate-x-6" },
                        { src: "https://images.ctfassets.net/wl95ljfippl8/24xammcGqESMQVURsaHprx/8385841e92ff3f3d304efe33b909fd38/2.png?w=640&q=75&fm=webp&fit=fill", alt: "StackBill Automation - Provisioning workflows", z: 30, shift: "-translate-x-2" },
                        { src: "https://images.ctfassets.net/wl95ljfippl8/Krc7GAKNsCRKgJuYJPNX0/02ca604549d15adb679bdf66f493e8eb/3.png?w=640&q=75&fm=webp&fit=fill", alt: "StackBill Analytics - Usage and billing insights", z: 20, shift: "translate-x-2" },
                        { src: "https://images.ctfassets.net/wl95ljfippl8/3PaM159DRg0cUip1aacnOb/4d26f8544f86c341644050346b33b5f2/4.png?w=640&q=75&fm=webp&fit=fill", alt: "StackBill Billing - Revenue management", z: 10, shift: "translate-x-6" },
                      ].map((card, idx) => (
                        <div
                          key={idx}
                          className={`w-1/4 ${card.shift}`}
                          style={{
                            zIndex: card.z,
                            transform: `rotateY(${-15 + idx * 10}deg) rotateX(8deg)`,
                            transformOrigin: 'bottom center',
                          }}
                        >
                          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                            <img
                              src={card.src || "/placeholder.svg"}
                              alt={card.alt}
                              className="w-full h-auto"
                              crossOrigin="anonymous"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
              <div
                className={`bg-gradient-to-br ${products[activeProduct].color} rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between transition-all duration-500 relative overflow-hidden shadow-2xl shadow-purple-500/20`}
              >
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
                    <div>
                      <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-4">
                        {products[activeProduct].tagline}
                      </span>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {products[activeProduct].name}
                      </h3>
                      <p className="text-lg text-white/90 max-w-xl leading-relaxed font-light">
                        {products[activeProduct].description}
                      </p>
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 shrink-0 rounded-full px-8" 
                      asChild
                    >
                      <Link href={products[activeProduct].href}>Learn More</Link>
                    </Button>
                  </div>

                  {/* Features Grid */}
                  <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {products[activeProduct].features.map((feature, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                          <div className="w-8 h-8 rounded-lg bg-white/20 mb-3 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-sm text-white font-medium">{feature}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* StackOps - Professional Services */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Hero card - spans full width */}
            <div className="lg:col-span-12 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/15 rounded-full blur-[100px]" />
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="text-xs font-medium text-purple-300 tracking-wide uppercase">StackOps</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-5">
                    Managed Cloud
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Operations</span>
                  </h2>
                  <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
                    From architecture to ongoing operations, our certified Apache CloudStack experts accelerate your cloud journey.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 font-medium shadow-lg shrink-0 w-fit"
                  asChild
                >
                  <Link href="/stackops">
                    View All Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* CloudStack Consulting - tall left card */}
            <Link
              href="/services/cloudstack-consulting"
              className="lg:col-span-4 lg:row-span-2 group bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-800/30 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-700 min-h-[320px]"
            >
              <div className="text-center">
                <div className="w-11 h-11 rounded-xl bg-purple-600 flex items-center justify-center mb-6 mx-auto">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  CloudStack Consulting
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Expert guidance on architecture design, deployment strategies, high availability, and performance optimization for production CloudStack environments.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-purple-200 dark:bg-purple-800 border-2 border-purple-50 dark:border-purple-950/30 flex items-center justify-center text-[10px] font-bold text-purple-700 dark:text-purple-300">CS</div>
                  <div className="w-7 h-7 rounded-full bg-violet-200 dark:bg-violet-800 border-2 border-purple-50 dark:border-purple-950/30 flex items-center justify-center text-[10px] font-bold text-violet-700 dark:text-violet-300">HA</div>
                  <div className="w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-800 border-2 border-purple-50 dark:border-purple-950/30 flex items-center justify-center text-[10px] font-bold text-indigo-700 dark:text-indigo-300">BP</div>
                </div>
                <span className="text-xs text-muted-foreground">Apache Certified Experts</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-purple-600 group-hover:translate-x-1 transition-all ml-auto" />
              </div>
            </Link>

            {/* IaaS Design & Build - top right */}
            <Link
              href="/services/iaas-design"
              className="lg:col-span-4 group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-700"
            >
              <div className="text-center">
                <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center mb-6 mx-auto">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">IaaS Design & Build</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  End-to-end infrastructure deployment for public, private, and hybrid cloud, tailored to your revenue model.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-5">
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-[11px] font-medium text-muted-foreground rounded-md">Public</span>
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-[11px] font-medium text-muted-foreground rounded-md">Private</span>
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-[11px] font-medium text-muted-foreground rounded-md">Hybrid</span>
              </div>
            </Link>

            {/* VMware Migration - top right second */}
            <Link
              href="/services/vmware-migration"
              className="lg:col-span-4 group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-700"
            >
              <div className="text-center">
                <div className="w-11 h-11 rounded-xl bg-rose-600 flex items-center justify-center mb-6 mx-auto">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">VMware Migration</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Zero-downtime migration from VMware to CloudStack. Cut licensing costs while preserving workload continuity.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-5">
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-[11px] font-medium text-muted-foreground rounded-md">Zero Downtime</span>
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-[11px] font-medium text-muted-foreground rounded-md">Cost Savings</span>
              </div>
            </Link>

            {/* 24/7 Managed Support - bottom right, spans 2 cols */}
            <Link
              href="/services/managed-support"
              className="lg:col-span-8 group bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-white/90">24/7 Available</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Managed Support & Operations
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed max-w-lg">
                    Round-the-clock expert monitoring, incident response, and proactive infrastructure management so you can focus on growing your cloud business.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 md:gap-4 shrink-0">
                  {[
                    { value: "99.99%", label: "Uptime SLA" },
                    { value: "<15m", label: "Response Time" },
                    { value: "24/7", label: "Coverage" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-[11px] text-white/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Purple glow accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
              Built for Your Industry
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
              StackOrbit adapts to your specific requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group bg-white/5 backdrop-blur-xl hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-3xl p-8 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center mb-6 mx-auto group-hover:from-purple-500/30 group-hover:to-violet-600/30 transition-colors">
                    <Icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-center">{solution.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 font-light text-center">{solution.description}</p>
                  <span className="text-sm font-medium text-purple-400 inline-flex items-center group-hover:text-purple-300 mx-auto">
                    Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesCarousel />

      {/* Final CTA - Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-600/25 rounded-full blur-[100px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Ready to Build Your Cloud?
            </h2>
            <p className="text-base text-slate-400 mt-2 font-light">
              Get a personalized demo and see how StackOrbit can help you launch profitable cloud services.
            </p>
          </div>
          <div className="flex flex-row gap-3 shrink-0">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-white/90 font-medium px-8 rounded-full shadow-lg shadow-purple-500/20"
              asChild
            >
              <Link href="/contact">
                Schedule a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 px-8 rounded-full font-medium"
              asChild
            >
              <Link href="/platform">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  )
}
