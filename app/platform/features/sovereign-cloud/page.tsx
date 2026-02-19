import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  Building2, 
  Eye, 
  Box, 
  Vault, 
  Sparkles,
  Shield,
  Globe,
  Server,
  Check,
  CreditCard
} from "lucide-react"

export default function SovereignCloudPlatformPage() {
  const platformFeatures = [
    {
      icon: CreditCard,
      title: "StackBill",
      subtitle: "Monetization & Billing Engine",
      description: "Turn cloud infrastructure into a profitable business. StackBill enables usage-based billing, subscriptions, reseller pricing, and automated invoicing across compute, storage, networking, and add-on services—at cloud scale.",
      highlights: [
        "Usage-based and subscription billing",
        "Multi-tenant & reseller-ready",
        "Automated invoicing and revenue accuracy"
      ],
      color: "text-red-500",
      bgColor: "bg-red-50",
      href: "/platform/stackbill"
    },
    {
      icon: Eye,
      title: "StackWatch",
      subtitle: "Monitoring & Cloud Intelligence",
      description: "Operate cloud platforms with confidence. StackWatch delivers real-time VM monitoring for customers and infrastructure-level insights for operators, including capacity, health, and anomaly detection.",
      highlights: [
        "VM-level monitoring for end users",
        "Infrastructure & log monitoring for operators",
        "AI-driven alerts and insights"
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      href: "/platform/stackwatch"
    },
    {
      icon: Box,
      title: "StackObject",
      subtitle: "Object Storage as a Service",
      description: "Offer S3-compatible object storage using your own infrastructure. Powered by Ceph and integrated with StackBill, StackObject enables scalable, secure, and fully billable storage services.",
      highlights: [
        "S3-compatible APIs",
        "Usage-based storage monetization",
        "Enterprise security and data durability"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      href: "/platform/stackobject"
    },
    {
      icon: Vault,
      title: "StackVault",
      subtitle: "Backup & Disaster Recovery",
      description: "Deliver backup and DR as a cloud service. StackVault enables providers to protect customer workloads with policy-based backups, replication, and recovery—fully integrated into the platform.",
      highlights: [
        "Backup-as-a-Service and DRaaS",
        "Policy-driven protection",
        "Billable recovery services"
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      href: "/platform/stackvault"
    },
    {
      icon: Sparkles,
      title: "TARS",
      subtitle: "AI-Driven Operations & Automation",
      description: "TARS brings agentic AI to cloud operations. It analyzes metrics, logs, and usage data to provide recommendations, automate workflows, and support intelligent decision-making across the platform.",
      highlights: [
        "AI-assisted operations",
        "Capacity and cost optimization",
        "Automated actions and recommendations"
      ],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      href: "/platform/tars",
      badge: "Beta"
    }
  ]

  const ownershipPoints = [
    "Sovereign and compliant by design",
    "White-label ready",
    "Open-source foundation (Apache CloudStack, Ceph, Kubernetes)",
    "Provider-owned revenue and customer relationships"
  ]

  const lifecycleSteps = [
    {
      phase: "BUILD",
      color: "from-purple-600 to-purple-700",
      items: [
        "CloudStack-based infrastructure",
        "Compute, storage, networking"
      ]
    },
    {
      phase: "OPERATE",
      color: "from-emerald-600 to-emerald-700",
      items: [
        "StackWatch monitoring",
        "TARS automation",
        "StackVault protection"
      ]
    },
    {
      phase: "MONETIZE",
      color: "from-amber-500 to-amber-600",
      items: [
        "StackBill billing",
        "StackObject storage services",
        "Marketplace add-ons"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50 via-background to-indigo-50/30">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Platform Features
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Sovereign Cloud Platform<br />
              <span className="text-primary">for Service Providers</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-medium text-foreground/80 mb-8">
              Build, operate, and monetize cloud services on your own infrastructure—without hyperscaler lock-in.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full"
                asChild
              >
                <Link href="/platform">
                  Explore Platform Features
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/20 hover:bg-primary/5 px-8 rounded-full bg-transparent"
                asChild
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>

            {/* Dashboard Image */}
            <div className="flex justify-center">
              <img 
                src="https://www.stackbill.com/assets/images/sb-img/stackbill-dashboard.svg" 
                alt="StackBill Dashboard"
                className="w-full max-w-4xl h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes StackOrbit a Sovereign Cloud Platform */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Makes StackOrbit a Sovereign Cloud Platform
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A complete suite of integrated modules designed for service providers to build, operate, and monetize cloud services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card 
                  key={feature.title} 
                  className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${feature.bgColor} p-3 rounded-xl flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          {feature.badge && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-white">
                              {feature.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-primary/80 font-medium">{feature.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2 mb-4">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={feature.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Built for Provider Ownership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Provider Ownership
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Your Infrastructure. Your Data. Your Rules.
              </h2>
              
              <p className="text-base text-white/80 mb-8 leading-relaxed">
                StackOrbit runs entirely on provider-owned infrastructure—on-premises or in private data centers—ensuring full control over data locality, compliance, pricing, and margins. No hyperscaler dependency. No vendor lock-in.
              </p>
              
              <ul className="space-y-4">
                {ownershipPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              {/* Illustration placeholder */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Server className="w-10 h-10 mx-auto mb-3 text-purple-300" />
                    <p className="text-sm font-medium">Your Infrastructure</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Shield className="w-10 h-10 mx-auto mb-3 text-indigo-300" />
                    <p className="text-sm font-medium">Your Data</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Globe className="w-10 h-10 mx-auto mb-3 text-blue-300" />
                    <p className="text-sm font-medium">Your Control</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <CreditCard className="w-10 h-10 mx-auto mb-3 text-amber-300" />
                    <p className="text-sm font-medium">Your Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Cloud Lifecycle */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              End-to-End Cloud Lifecycle
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              StackOrbit supports the complete cloud lifecycle—from infrastructure provisioning to revenue generation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {lifecycleSteps.map((step, index) => (
              <div key={step.phase} className="relative">
                {/* Connector line */}
                {index < lifecycleSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
                )}
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full mb-6`}>
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {step.phase}
                    </span>
                  </div>
                  
                  <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          
          {/* Flow Arrow */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="text-sm font-medium">Complete Platform</span>
              <ArrowRight className="w-5 h-5" />
              <span className="text-sm font-medium">Profitable Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-indigo-500/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Build a Profitable Sovereign Cloud Platform
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you're launching a public cloud, expanding managed services, or modernizing private cloud offerings, StackOrbit gives you the platform to scale with control and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full"
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
              className="border-2 border-primary/20 hover:bg-primary/5 px-8 rounded-full bg-transparent"
              asChild
            >
              <Link href="/contact">Talk to StackOrbit</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
