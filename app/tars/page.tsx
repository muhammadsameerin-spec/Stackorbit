import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Zap, Brain, Activity, Cpu, AlertTriangle, ArrowRight, Check, Network } from "lucide-react"

export default function TARSPage() {
  const capabilities = [
    {
      icon: Brain,
      title: "AI Infrastructure Assistant",
      description:
        "Understands CloudStack topology and responds to natural language queries. Provides actionable insights and commands for intelligent decision-making.",
    },
    {
      icon: AlertTriangle,
      title: "Automated Troubleshooting",
      description:
        "VM diagnostics, VR restarts, template checks, and policy validations. Automatically identifies and resolves issues before they impact operations.",
    },
    {
      icon: Activity,
      title: "Predictive Intelligence",
      description:
        "Works with StackWatch to detect anomalies, predict failures, and enable capacity planning. Stay ahead of issues with AI-powered forecasting.",
    },
    {
      icon: Zap,
      title: "Agentic Workflow Automation",
      description:
        "Auto-scaling, auto-healing, backup verification, and billing automation. Streamline operations with intelligent agent-driven workflows.",
    },
    {
      icon: Network,
      title: "Multi-Channel Access",
      description:
        "Access TARS via StackOrbit UI, API/CLI, chat-style assistant, and helpdesk integrations. Work the way you want, seamlessly across all platforms.",
    },
    {
      icon: Cpu,
      title: "Native CloudStack Integration",
      description:
        "Built for Apache CloudStack. Understands zones, pods, clusters, hosts, hypervisors, networks, and more with deep platform knowledge.",
    },
  ]

  const securityFeatures = [
    "On-prem or private deployment",
    "Token-secured API interactions",
    "Role-based access control",
    "Air-gapped deployment option",
    "No data leaves your cloud",
    "Encryption for prompts & responses",
  ]

  const highlights = [
    { value: "100%", label: "CloudStack Native" },
    { value: "24/7", label: "AI Automation" },
    { value: "Real-Time", label: "Intelligence" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-sm font-medium text-accent">Agentic AI Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              TARS – <span className="text-accent">Agentic AI</span> for Cloud Providers
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-2 font-medium">Automate. Assist. Accelerate.</p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              TARS is StackOrbit's Agentic AI platform designed to automate cloud operations, assist support teams, and
              deliver real-time intelligence across CloudStack environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Book a Demo <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <Link href="/extensions">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-16">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">{highlight.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is TARS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is TARS?</h2>
          </div>
          <Card className="border-border/50">
            <CardContent className="pt-8 pb-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                TARS is an intelligent AI co-pilot for ISPs, MSPs, CSPs, and enterprises. It integrates with StackOrbit
                CMP, Apache CloudStack APIs, StackBill billing, StackWatch monitoring, and StackVault backups to
                automate tasks, generate insights, and enhance support workflows. Built natively for CloudStack, TARS
                understands your infrastructure deeply and acts as a true operational partner.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Capabilities</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Six core capabilities that transform your cloud operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon
              return (
                <Card key={capability.title} className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CloudStack Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Apache CloudStack</h2>
            <div className="bg-white border border-border/50 rounded-xl p-8 sm:p-12">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
                TARS natively understands CloudStack zones, pods, clusters, hosts, hypervisors, VRs, networks, ACLs,
                templates, volumes, alerts, logs, and billing data. This is not a generic AI — it is engineered
                specifically for CloudStack-driven clouds.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Zones & Pods",
                  "Hosts",
                  "Hypervisors",
                  "Networks",
                  "Templates",
                  "Volumes",
                  "Alerts",
                  "Billing Data",
                ].map((item) => (
                  <span key={item} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Your data, your control. TARS respects sovereignty.
            </p>
          </div>

          <Card className="border-border/50 bg-white">
            <CardContent className="pt-8">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {securityFeatures.map((feature) => (
                  <div key={feature} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Simple, Transparent Pricing</h2>

          <Card className="border-border/50 bg-white mb-6">
            <CardContent className="pt-12 pb-12">
              <div className="mb-8">
                <p className="text-base sm:text-lg text-muted-foreground mb-4">Choose your pricing model:</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="border-2 border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Per Host</h3>
                    <p className="text-3xl font-bold text-accent mb-2">$10</p>
                    <p className="text-sm text-muted-foreground">per host / month</p>
                  </div>
                  <div className="border-2 border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Per Interaction</h3>
                    <p className="text-3xl font-bold text-accent mb-2">$0.50</p>
                    <p className="text-sm text-muted-foreground">per 1,000 AI interactions (API mode)</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Volume discounts available for partners. TARS is available as an optional add-on module for StackOrbit
                CMP.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-balance">
            Bring AI to Your Cloud Operations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let TARS automate, assist, and elevate your cloud platform to new heights of efficiency and intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" asChild>
              <Link href="/contact">
                Book a Demo <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/contact">Talk to an Engineer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
