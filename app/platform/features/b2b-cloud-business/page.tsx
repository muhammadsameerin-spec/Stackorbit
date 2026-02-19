import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Rocket,
  TrendingUp,
  Building2,
  Palette,
  CreditCard,
  Settings,
  Plug,
  ShoppingBag,
  Globe,
  Shield,
  Check,
  ChevronRight
} from "lucide-react"

export default function B2BCloudBusinessPage() {
  const whyStackOrbitCards = [
    {
      icon: Building2,
      title: "Reseller-First Architecture",
      description: "Designed from the ground up for B2B cloud models, StackOrbit supports multi-level resellers, partner pricing, and delegated operations without compromising provider control."
    },
    {
      icon: Rocket,
      title: "Faster Partner Onboarding",
      description: "Launch new resellers quickly with ready-to-use portals, pricing templates, and automated billing—no custom development required."
    },
    {
      icon: TrendingUp,
      title: "Predictable Revenue Growth",
      description: "Enable partners to sell more while StackBill ensures accurate usage metering, billing, and revenue visibility across all tenants."
    }
  ]

  const resellerCapabilities = [
    {
      icon: Users,
      title: "Complete Self-Service Portal (B2C)",
      description: "Provide resellers and their customers with a full self-service portal to manage cloud resources, services, invoices, and usage."
    },
    {
      icon: Palette,
      title: "White-Label Branding for Partners",
      description: "Allow resellers to customize branding, logos, domains, and portal appearance—offering cloud services under their own identity."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Models",
      description: "Support prepaid, postpaid, and manual payment modes per tenant, enabling region-specific and business-specific billing workflows."
    },
    {
      icon: Settings,
      title: "Reseller-Level Customization (B2B)",
      description: "Enable custom domains, invoices, payment gateways, pricing models, and cloud offerings at the reseller level."
    },
    {
      icon: Plug,
      title: "Easy Billing Integration",
      description: "Integrate seamlessly with popular billing and ERP platforms such as WHMCS, SAP, and other cloud billing systems."
    },
    {
      icon: ShoppingBag,
      title: "Integrated Marketplace & Licensing",
      description: "Offer marketplace add-ons, software licenses, and Microsoft licensing as part of reseller cloud offerings."
    },
    {
      icon: Globe,
      title: "Multi-Currency & Multi-Language Support",
      description: "Support global B2B operations with multi-currency billing and multi-language portals for resellers and customers."
    },
    {
      icon: Shield,
      title: "Role-Based Access Control (RBAC)",
      description: "Control access at provider, reseller, and tenant levels using a robust RBAC model for secure delegated administration."
    }
  ]

  const resellerFlow = [
    {
      role: "Provider",
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      items: [
        "Defines services, pricing, and policies",
        "Maintains platform control and governance",
        "Sets reseller margins and quotas"
      ]
    },
    {
      role: "Reseller",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      items: [
        "White-labels cloud services",
        "Sets customer pricing and offerings",
        "Manages billing and relationships"
      ]
    },
    {
      role: "End Customer",
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      items: [
        "Uses self-service portal",
        "Consumes cloud services",
        "Receives usage-based invoices"
      ]
    }
  ]

  const governancePoints = [
    "Multi-tenant, multi-reseller architecture",
    "Centralized governance and reporting",
    "Revenue visibility across all partners",
    "Secure isolation between tenants"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-background to-purple-50/30">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  B2B Cloud Business
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                Build and Scale a B2B Cloud<br />
                <span className="text-blue-600">Business with Resellers</span>
              </h1>
              
              <p className="text-base md:text-lg font-medium text-foreground/80 mb-6">
                Empower partners to sell cloud services under their own brand—while you stay in control.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 rounded-full"
                  asChild
                >
                  <Link href="/platform/stackbill">
                    Explore Reseller Features
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600/20 hover:bg-blue-500/5 px-8 rounded-full bg-transparent"
                  asChild
                >
                  <Link href="/contact">Talk to a Partner Expert</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-xl shadow-blue-500/10 p-4 border border-slate-100">
                <img 
                  src="https://stackbill.com/assets/images/sb-img/flow-chart-1.svg" 
                  alt="B2B Cloud Business Flow Chart"
                  className="w-full max-w-lg h-[320px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why StackOrbit for B2B Cloud Business */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why StackOrbit for B2B Cloud Business
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Purpose-built for service providers who want to grow through channel partners and resellers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyStackOrbitCards.map((card) => {
              const Icon = card.icon
              return (
                <Card 
                  key={card.title} 
                  className="border-border/50 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group text-center"
                >
                  <CardContent className="pt-8 pb-8 px-6">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Reseller Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full mb-4">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Powered by StackBill
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Core Reseller Capabilities
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to run a multi-tier B2B cloud business with partners and resellers
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resellerCapabilities.map((capability) => {
              const Icon = capability.icon
              return (
                <Card 
                  key={capability.title} 
                  className="border-border/50 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 mb-4 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How the Reseller Model Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How the Reseller Model Works
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A clear, scalable flow from provider to end customer through your partner network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Flow arrows for desktop */}
            <div className="hidden md:flex absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-border/50">
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="hidden md:flex absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-border/50">
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </div>
            </div>

            {resellerFlow.map((step, index) => (
              <Card 
                key={step.role} 
                className="border-border/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${step.color}`} />
                <CardContent className="pt-6 pb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${step.bgColor} rounded-full mb-4`}>
                    <span className={`text-xs font-bold uppercase tracking-wider ${step.textColor}`}>
                      {index === 0 ? "Step 1" : index === 1 ? "Step 2" : "Step 3"}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.role}
                  </h3>
                  
                  <ul className="space-y-3">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${step.textColor}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Built for B2B Scale & Governance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Enterprise Grade
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Grow Through Partners—<br />Without Losing Control
              </h2>
              
              <p className="text-base text-white/80 mb-8 leading-relaxed">
                StackOrbit's multi-tenant architecture ensures complete isolation between partners while giving you centralized visibility into revenue, usage, and performance across your entire reseller network.
              </p>
              
              <ul className="space-y-4">
                {governancePoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-300" />
                    </div>
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-2">Revenue Visibility</h3>
                  <p className="text-sm text-white/60">Real-time insights across all partners</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/80">Partner Revenue</span>
                      <span className="text-sm font-semibold text-emerald-400">+45%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/80">Active Resellers</span>
                      <span className="text-sm font-semibold text-blue-400">128</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/80">End Customers</span>
                      <span className="text-sm font-semibold text-purple-400">2,450+</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Built For
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              StackOrbit's B2B cloud platform serves the needs of diverse service providers
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Internet Service Providers (ISPs)",
              "Managed Service Providers (MSPs)",
              "Cloud Service Providers (CSPs)",
              "System Integrators",
              "Hosting Providers",
              "Cloud Resellers"
            ].map((audience) => (
              <div 
                key={audience}
                className="px-6 py-3 bg-card border border-border/50 rounded-full text-sm font-medium text-foreground hover:border-blue-500/30 hover:bg-blue-50/50 transition-all duration-300"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/5 via-background to-purple-500/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Launch a Partner-Driven Cloud Business
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you're expanding through resellers, enabling MSPs, or building a multi-tier cloud ecosystem, StackOrbit gives you the platform to grow faster—with confidence and control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 rounded-full"
              asChild
            >
              <Link href="/partner">
                Become a StackOrbit Partner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600/20 hover:bg-blue-500/5 px-8 rounded-full bg-transparent"
              asChild
            >
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
