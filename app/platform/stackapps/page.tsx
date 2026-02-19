"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Zap,
  Globe,
  Shield,
  Layers,
  BarChart3,
  Lock,
  Home,
  ChevronRight,
  Package,
  Brain,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function StackAppsPage() {
  const router = useRouter()

  const addOns = [
    {
      icon: Globe,
      title: "DNS Integrations",
      description: "GoDaddy, Cloudflare, Route53, Namecheap",
      details: "Automate domain provisioning, map DNS records, and integrate with VM deployment.",
    },
    {
      icon: Package,
      title: "Helpdesk & Support Desk",
      description: "Freshdesk, Zendesk, Zoho Desk",
      details: "Auto-create support tickets from StackOrbit events.",
    },
    {
      icon: Lock,
      title: "Authentication & Identity",
      description: "LDAP, Active Directory, OAuth, SSO",
      details: "Seamless login experience for enterprises & MSPs.",
    },
    {
      icon: BarChart3,
      title: "Monitoring & Observability",
      description: "Prometheus, Grafana, Stackwatch extensions",
      details: "Push metrics or logs to external dashboards.",
    },
    {
      icon: Zap,
      title: "Billing & Financial Apps",
      description: "Payment gateways, tax engines, usage exports",
      details: "Extend StackBill billing flows with finance automation.",
    },
    {
      icon: Layers,
      title: "Backup, DR & Storage Add-Ons",
      description: "Object storage connectors & DR plugins",
      details: "Snapshot orchestration and disaster recovery automation.",
    },
  ]

  const trendingAddOns = [
    "AI-enhanced VM sizing assistants",
    "Incident automation bots",
    "Multi-cloud cost analytics exporters",
    "Kubernetes operator integration",
    "Observability pipelines (OTLP/Prometheus)",
    "Privacy-preserving storage connectors",
  ]

  const benefits = [
    "Extend your CMP with one-click add-ons",
    "Integrate DNS, helpdesk, authentication, monitoring & billing tools seamlessly",
    "Connect 3rd-party services without complex configuration",
    "Build custom add-ons via open API architecture",
    "Enable marketplace-driven revenue streams",
    "Enhance user experience with familiar tools",
    "Reduce operational overhead via automation plugins",
    "Create a sovereign cloud ecosystem with zero vendor lock-in",
  ]

  const securityPoints = [
    "All add-ons run within your sovereign cloud",
    "Zero external data leakage",
    "Role-based access control",
    "Logged & auditable actions",
    "API rate-limiting & isolation",
    "Verified add-ons under strict review policies",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="mt-[112px] px-4 sm:px-6 lg:px-8 py-4 border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Home size={16} className="cursor-pointer hover:text-foreground" onClick={() => router.push("/")} />
            <ChevronRight size={16} />
            <Link href="/platform" className="hover:text-foreground">
              Platform
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">StackApps</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">
              StackApps – <span className="text-accent">Add-Ons, Integrations & Cloud Extensions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">
              Extend Your Cloud. Integrate Anything. Build Your Own Ecosystem.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              StackApps is the integrations and add-on marketplace for StackOrbit CMP. Enable DNS providers, helpdesk
              systems, backup tools, monitoring agents, authentication platforms, and automation plugins — all with one
              click. Build a flexible, connected, sovereign cloud ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base w-full sm:w-auto"
                asChild
              >
                <Link href="#addons">
                  Explore Add-Ons <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <Link href="#partner">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is StackApps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What is StackApps?</h2>
          <Card className="border-border/50">
            <CardContent className="pt-8 pb-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                StackApps is a unified marketplace that brings external services, automation plugins, DNS providers,
                billing extensions, monitoring agents, and cloud-native tools directly into StackOrbit CMP. Designed for
                ISPs, MSPs, CSPs, and enterprises, it lets you enhance your cloud with ready-to-use integrations or
                build your own custom add-ons.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why StackApps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Cloud Providers Choose StackApps</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <p className="text-base text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Add-Ons Grid */}
      <section id="addons" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Add-Ons & Integrations</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover pre-built integrations ready to connect with your cloud infrastructure
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon) => {
              const Icon = addon.icon
              return (
                <Card key={addon.title} className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{addon.title}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{addon.description}</p>
                    <p className="text-sm text-muted-foreground text-pretty">{addon.details}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Build Your Own */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Custom Add-Ons with Open APIs</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              StackApps provides developers and partners with a fully documented API and plugin framework. Create custom
              integrations, bring your own services, or build commercial plugins for the StackOrbit Partner Marketplace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Developer-friendly API",
              "Clear documentation",
              "Sandbox environment",
              "Marketplace listing support",
              "Monetize your add-on",
            ].map((feature) => (
              <div key={feature} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <span className="text-base text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/docs/developer">
                Developer Docs <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Add-Ons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Add-Ons for 2025</h2>
          </div>

          <Card className="border-border/50">
            <CardContent className="pt-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {trendingAddOns.map((addon) => (
                  <div key={addon} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Brain className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-base text-muted-foreground">{addon}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partner Marketplace */}
      <section id="partner" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Marketplace Opportunities</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Service providers, software vendors, and SaaS platforms can publish their tools on the StackApps Marketplace
            — reaching ISPs, MSPs, CSPs, and enterprise cloud operators worldwide.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              "White-label compatible",
              "Revenue-sharing opportunities",
              "Access to thousands of cloud users",
              "Joint go-to-market support",
              "Certified integration badge",
            ].map((item) => (
              <div key={item} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <span className="text-base text-muted-foreground text-left">{item}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/contact">
              Become a StackApps Partner <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure, Trusted, Governed Integrations</h2>
          </div>

          <Card className="border-border/50 bg-white">
            <CardContent className="pt-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {securityPoints.map((point) => (
                  <div key={point} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                        <Shield className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Simple, Add-On Based Pricing</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold mb-4">Free Add-Ons</h3>
                <ul className="space-y-3">
                  {["Built-in DNS providers", "Monitoring exporters", "Basic automation plugins"].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-white">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold mb-4">Paid Add-Ons</h3>
                <ul className="space-y-3">
                  {[
                    "Premium integrations (helpdesk, advanced DNS, storage)",
                    "Authentication systems",
                    "Commercial partner apps",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/contact">Contact Sales for Add-On Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-balance">
            Extend Your Cloud with StackApps
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Add integrations, automate workflows, and build your cloud ecosystem — all inside StackOrbit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" asChild>
              <Link href="#addons">
                Explore StackApps <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/docs/developer">Developer Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
