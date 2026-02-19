import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  Globe,
  Server,
  Database,
  Network,
  HardDrive,
  Cpu,
  Shield,
  Check,
  Layers,
  MapPin,
  Boxes,
  Zap,
  Settings,
  Cloud,
  Lock,
  BarChart3
} from "lucide-react"

export default function MultiRegionCloudPage() {
  const architectureHierarchy = [
    {
      level: "Region",
      icon: Globe,
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      description: "Geographically separated deployment with independent management servers",
      features: [
        "Independent CloudStack management",
        "Cross-region account portability",
        "Disaster recovery across regions",
        "Data sovereignty compliance"
      ]
    },
    {
      level: "Zone",
      icon: MapPin,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      description: "Isolated infrastructure within a region—typically a data center or availability zone",
      features: [
        "Physical isolation for fault tolerance",
        "Independent power and network",
        "Zone-level resource allocation",
        "High availability deployments"
      ]
    },
    {
      level: "Pod",
      icon: Boxes,
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      description: "Logical grouping of hosts and storage within a zone—usually a rack or set of racks",
      features: [
        "Layer 2 network isolation",
        "Shared primary storage",
        "Simplified network management",
        "Scalable infrastructure units"
      ]
    },
    {
      level: "Cluster",
      icon: Server,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      description: "Group of hosts sharing compute and storage resources with live migration support",
      features: [
        "Homogeneous hypervisor hosts",
        "Shared primary storage access",
        "VM live migration within cluster",
        "Resource pooling and balancing"
      ]
    }
  ]

  const offerIsolations = [
    {
      icon: Cpu,
      title: "Compute Isolation",
      description: "Isolate compute offerings by zone to provide region-specific VM configurations, pricing, and resource allocation.",
      capabilities: [
        "Zone-specific compute offerings",
        "Custom CPU/RAM configurations per region",
        "Dedicated compute pools per zone",
        "Performance tier isolation"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: HardDrive,
      title: "Storage Isolation",
      description: "Define storage offerings per zone with different performance tiers, pricing, and data locality requirements.",
      capabilities: [
        "Zone-level storage policies",
        "SSD/HDD tiering per region",
        "Data residency compliance",
        "Storage performance guarantees"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Network,
      title: "Network Isolation",
      description: "Create network offerings specific to zones with isolated VLANs, IP ranges, and connectivity options.",
      capabilities: [
        "Zone-specific network offerings",
        "Isolated VLAN management",
        "Regional IP address pools",
        "VPN and connectivity per zone"
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Database,
      title: "Service Isolation",
      description: "Control which services and add-ons are available in each zone for compliance and business requirements.",
      capabilities: [
        "Zone-specific service catalogs",
        "Regional marketplace offerings",
        "Compliance-driven availability",
        "Custom service bundles per region"
      ],
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ]

  const stackBillFeatures = [
    {
      icon: BarChart3,
      title: "Zone-Based Pricing",
      description: "Set different pricing for compute, storage, and network resources based on zone or region to reflect local costs and market conditions."
    },
    {
      icon: Layers,
      title: "Multi-Zone Service Catalog",
      description: "Create service catalogs that span multiple zones, allowing customers to deploy resources where they need them most."
    },
    {
      icon: Shield,
      title: "Zone-Level Quotas",
      description: "Define resource quotas per zone for tenants and resellers, ensuring fair usage and preventing resource exhaustion."
    },
    {
      icon: Settings,
      title: "Cross-Zone Billing",
      description: "Unified billing across all zones and regions with detailed usage breakdowns by location for transparent invoicing."
    }
  ]

  const useCases = [
    {
      title: "Sovereign Cloud Deployments",
      description: "Deploy cloud resources in specific regions to meet data residency and compliance requirements for regulated industries.",
      icon: Lock
    },
    {
      title: "Disaster Recovery",
      description: "Enable DR strategies with resources distributed across multiple zones and regions for business continuity.",
      icon: Shield
    },
    {
      title: "Edge Computing",
      description: "Extend cloud services to edge locations with zone-level deployments closer to end users for reduced latency.",
      icon: Zap
    },
    {
      title: "Global Cloud Services",
      description: "Offer cloud services across multiple geographies with centralized management and region-specific customization.",
      icon: Globe
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-emerald-50 via-background to-blue-50/30">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full mb-6">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                  Multi-Region Cloud
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                Operate Cloud Across<br />
                <span className="text-emerald-600">Regions and Zones</span>
              </h1>
              
              <p className="text-base md:text-lg font-medium text-foreground/80 mb-6">
                Deploy and scale cloud infrastructure across multiple data centers with centralized control.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold px-8 rounded-full"
                  asChild
                >
                  <Link href="/platform">
                    Explore Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-600/20 hover:bg-emerald-500/5 px-8 rounded-full bg-transparent"
                  asChild
                >
                  <Link href="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-xl shadow-emerald-500/10 p-4 border border-slate-100">
                <img 
                  src="https://stackbill.com/assets/images/sb-img/flow-chart-2.svg" 
                  alt="Multi-Region Cloud Architecture Flow Chart"
                  className="w-full max-w-lg h-[320px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CloudStack Multi-Zone Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full mb-4">
              <Cloud className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                Powered by Apache CloudStack
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Multi-Zone Architecture
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A hierarchical infrastructure model that enables scalable, fault-tolerant, and geographically distributed cloud deployments
            </p>
          </div>

          {/* Architecture Hierarchy Visual */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 via-emerald-200 to-amber-200 hidden lg:block" style={{ transform: 'translateX(-50%)' }} />
            
            <div className="space-y-8">
              {architectureHierarchy.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0
                
                return (
                  <div 
                    key={item.level}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
                  >
                    {/* Content Card */}
                    <div className={`${isEven ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}`}>
                      <Card className={`border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300`}>
                        <CardContent className="pt-6 pb-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`w-7 h-7 ${item.textColor}`} />
                            </div>
                            <div className="flex-1">
                              <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2`}>
                                {item.level}
                              </div>
                              <p className="text-sm text-muted-foreground mb-4">
                                {item.description}
                              </p>
                              <ul className="space-y-2">
                                {item.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                                    <Check className={`w-4 h-4 ${item.textColor} flex-shrink-0`} />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Level indicator for desktop */}
                    <div className={`hidden lg:flex items-center justify-center ${isEven ? 'lg:order-2' : ''}`}>
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* StackBill Offer Isolation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full mb-4">
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                StackBill Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Offer Isolation by Zone
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              StackBill extends CloudStack's multi-zone architecture with powerful offer isolation—allowing providers to customize compute, storage, network, and services per zone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerIsolations.map((isolation) => {
              const Icon = isolation.icon
              return (
                <Card 
                  key={isolation.title}
                  className="border-border/50 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 ${isolation.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${isolation.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-emerald-600 transition-colors">
                          {isolation.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {isolation.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {isolation.capabilities.map((capability, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                              <div className={`w-1.5 h-1.5 rounded-full ${isolation.bgColor} ${isolation.color.replace('text-', 'bg-')}`} />
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* StackBill Multi-Zone Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
                <BarChart3 className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Monetization
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Zone-Aware Billing<br />& Service Management
              </h2>
              
              <p className="text-base text-white/80 mb-8 leading-relaxed">
                StackBill's billing engine understands your multi-zone architecture, enabling location-based pricing, quotas, and service availability that reflect real-world infrastructure costs and compliance needs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {stackBillFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-emerald-400" />
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Visual: Multi-Zone Map */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-2">Global Zone Distribution</h3>
                  <p className="text-sm text-white/60">Manage resources across regions</p>
                </div>
                
                {/* Simplified world map visual */}
                <div className="relative h-48 bg-white/5 rounded-xl overflow-hidden">
                  {/* Map placeholder with zone indicators */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-8 w-full px-8">
                      {/* Zone 1 - Americas */}
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-purple-500/30 rounded-full flex items-center justify-center border-2 border-purple-400">
                          <MapPin className="w-5 h-5 text-purple-300" />
                        </div>
                        <p className="text-xs text-white/70">Zone US</p>
                        <p className="text-[10px] text-emerald-400">12 Hosts</p>
                      </div>
                      
                      {/* Zone 2 - Europe */}
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-blue-500/30 rounded-full flex items-center justify-center border-2 border-blue-400">
                          <MapPin className="w-5 h-5 text-blue-300" />
                        </div>
                        <p className="text-xs text-white/70">Zone EU</p>
                        <p className="text-[10px] text-emerald-400">8 Hosts</p>
                      </div>
                      
                      {/* Zone 3 - Asia */}
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-emerald-500/30 rounded-full flex items-center justify-center border-2 border-emerald-400">
                          <MapPin className="w-5 h-5 text-emerald-300" />
                        </div>
                        <p className="text-xs text-white/70">Zone APAC</p>
                        <p className="text-[10px] text-emerald-400">6 Hosts</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">3</p>
                    <p className="text-xs text-white/60">Regions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">9</p>
                    <p className="text-xs text-white/60">Zones</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">26</p>
                    <p className="text-xs text-white/60">Hosts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Multi-Region Use Cases
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leverage multi-zone architecture for diverse business and technical requirements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Card 
                  key={useCase.title}
                  className="border-border/50 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 group text-center"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 mx-auto mb-4 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                      <Icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-emerald-600 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500/5 via-background to-blue-500/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Scale Your Cloud Across Regions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you're building a global cloud platform, meeting data sovereignty requirements, or enabling disaster recovery, StackOrbit's multi-region architecture gives you the flexibility to deploy anywhere with centralized control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold px-8 rounded-full"
              asChild
            >
              <Link href="/contact">
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600/20 hover:bg-emerald-500/5 px-8 rounded-full bg-transparent"
              asChild
            >
              <Link href="/platform">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
