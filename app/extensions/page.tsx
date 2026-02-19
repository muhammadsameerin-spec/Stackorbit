import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Database, Activity, Shield, Bot, Zap, Server, ArrowRight } from "lucide-react"

export default function ModulesPage() {
  const modules = [
    {
      name: "StackBill",
      tagline: "Billing & Chargeback Engine",
      description: "Automates billing, invoicing, and usage metering for cloud and container workloads.",
      icon: Database,
      href: "/modules/stackbill",
      features: [
        "Supports reseller & end-user billing models",
        "Pay-per-use, subscription, and hybrid pricing",
        "Integration with payment gateways and accounting tools",
        "Automated invoicing and chargeback workflows",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "StackWatch",
      tagline: "Monitoring & AI-Powered Anomaly Detection",
      description: "Unified observability layer for cloud infrastructure with predictive analytics.",
      icon: Activity,
      href: "/modules/stackwatch",
      features: [
        "Prometheus & Grafana-based telemetry",
        "LSTM/AI-driven anomaly detection",
        "Automated alerts & self-healing workflows",
        "Real-time infrastructure visibility",
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      name: "StackVault",
      tagline: "Backup & Disaster Recovery",
      description: "Comprehensive protection for compute, storage, and object data.",
      icon: Shield,
      href: "/modules/stackvault",
      features: [
        "Snapshot-based backups",
        "Cross-region DR",
        "Policy-driven scheduling and recovery",
        "Automated backup verification",
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      name: "TARS",
      tagline: "Agentic AI Services",
      description: "An AI automation layer for intelligent decision-making and user interaction.",
      icon: Bot,
      href: "/modules/tars",
      features: [
        "Agentic AI framework for cloud automation",
        "Natural language interfaces for admins & users",
        "Integrations with Ollama, Bedrock, and custom AI pipelines",
        "Intelligent workflow optimization",
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      name: "StackApps",
      tagline: "Add-On Integrations Ecosystem",
      description: "An extension marketplace and integration hub.",
      icon: Zap,
      href: "/modules/stackapps",
      features: [
        "Plugins for DNS, helpdesk, email, monitoring tools",
        "REST API-based integration SDK",
        "Support for custom enterprise modules",
        "Extensible marketplace architecture",
      ],
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      name: "StackOps",
      tagline: "Cloud Deployment & Management Services",
      description: "Comprehensive cloud deployment and management capabilities.",
      icon: Server,
      href: "/modules/stackops",
      features: [
        "Apache CloudStack consulting services",
        "Cloud migration services",
        "Dev/AIOps services",
        "Hypervisor/storage management",
      ],
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-sm font-medium text-accent">Modular & Extensible</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">A modular, extensible cloud platform</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            That delivers complete lifecycle management across compute, storage, networking, billing, and AI automation.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <Card key={module.name} className="p-8 border-border/50 hover:border-accent/50 transition-all group">
                  <div className="grid md:grid-cols-[auto_1fr] gap-6">
                    {/* Icon & Name */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <div className={`w-16 h-16 rounded-xl ${module.bgColor} flex items-center justify-center`}>
                        <Icon className={module.color} size={32} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{module.name}</h2>
                          <p className="text-lg text-accent mb-3">{module.tagline}</p>
                          <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                        </div>
                        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
                          <Link href={module.href}>
                            Learn More <ArrowRight className="ml-2" size={16} />
                          </Link>
                        </Button>
                      </div>

                      {/* Features */}
                      <div className="grid sm:grid-cols-2 gap-3 mt-4">
                        {module.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${module.bgColor} mt-2 shrink-0`} />
                            <span className="text-sm text-foreground/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to explore our modules?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Each module is designed to work seamlessly together or independently, giving you the flexibility to build
            your perfect cloud platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/contact">
                Contact Sales <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/platform">View Platform Overview</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
