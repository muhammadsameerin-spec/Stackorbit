import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Server,
  Database,
  Network,
  CreditCard,
  Bot,
  Cloud,
  Shield,
  Zap,
  Lock,
  Globe,
  Users,
  BarChart3,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PlatformPage() {
  const features = [
    {
      icon: Server,
      title: "Infrastructure as a Service",
      description:
        "Apache CloudStack-based public cloud management portal with pay-as-you-go pricing model for compute resources.",
    },
    {
      icon: Cloud,
      title: "One Unified Platform",
      description: "Manage datacenters, clouds, and the edge as a single entity from one comprehensive platform.",
    },
    {
      icon: Database,
      title: "Database as a Service",
      description:
        "Fully automated database provisioning, scaling, and management with powerful 3rd-party integrations.",
    },
    {
      icon: BarChart3,
      title: "Monitoring as a Service",
      description: "Complete visibility of cloud infrastructure with real-time monitoring using a pay-as-you-go model.",
    },
    {
      icon: Network,
      title: "Kubernetes as a Service",
      description: "Provision, scale, and manage Kubernetes clusters in minutes with enterprise-grade orchestration.",
    },
    {
      icon: CreditCard,
      title: "Automated Billing",
      description: "Comprehensive billing and invoicing system with flexible pricing models and payment gateways.",
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Intelligent automation for resource optimization, predictive scaling, and cost management.",
    },
    {
      icon: Zap,
      title: "Anything-as-a-Service (XaaS)",
      description: "Integrate with any third-party provider through APIs and offer anything as a service to customers.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built-in security features with role-based access control, encryption, and compliance tools.",
    },
    {
      icon: Lock,
      title: "Sovereign Cloud Control",
      description: "Complete data sovereignty with on-premise deployment options and full ownership of infrastructure.",
    },
    {
      icon: Globe,
      title: "Multi-Datacenter Support",
      description: "Manage multiple datacenters and regions seamlessly with unified control and orchestration.",
    },
    {
      icon: Users,
      title: "White-Label Ready",
      description: "Full white-labeling capabilities for service providers to brand the platform as their own.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-36 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Complete Cloud Platform
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
            A modular, extensible cloud platform that delivers complete lifecycle management across compute, storage,
            networking, billing, and AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Get a Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent w-full sm:w-auto"
              asChild
            >
              <Link href="/extensions">Explore Extensions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Full-Stack Cloud Platform for Your Business
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              StackOrbit.ai powers service providers with an industry-leading cloud platform to deliver public and
              anything-as-a-service offerings that drive growth and successful business outcomes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* B2B/B2C Section */}
      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Supercharge Your B2C & B2B Business</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 text-pretty">
                StackOrbit.ai is the fastest way to build, modernize, and sell your public cloud resources to B2C and
                B2B customers.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 text-pretty">
                With our Reseller capabilities, you can offer a complete B2B business model with white-labeling
                services—either sharing your existing resources or dedicating hosts and clusters to your customers.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "Open Source" },
                { value: "24/7", label: "Support" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "∞", label: "Scalability" },
              ].map((stat) => (
                <Card key={stat.label} className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Cloud Business?</h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-8 text-pretty">
            Deploy StackOrbit.ai on your infrastructure and start delivering sovereign cloud services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
