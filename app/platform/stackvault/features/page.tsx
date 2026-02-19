"use client"

import { StackVaultNavigation } from "@/components/stackvault-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ArrowRight, Shield, Server, RotateCcw, Clock, Globe, Database, CheckCircle2 } from "lucide-react"

export default function StackVaultFeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <StackVaultNavigation />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-foreground leading-tight">
              Disaster Recovery Features Built for<br className="hidden md:block" /> Cloud Service Providers
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              StackVault provides a comprehensive DR-as-a-Service plugin for Apache CloudStack, enabling automated failover, flexible replication, and enterprise-grade business continuity for your tenants.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: RotateCcw,
                title: "Automated Failover & Failback",
                description: "One-click failover to secondary sites with automated failback when primary infrastructure recovers. Minimize downtime with orchestrated recovery workflows.",
                color: "text-emerald-600",
                bg: "bg-emerald-100",
              },
              {
                icon: Clock,
                title: "RPO & RTO Management",
                description: "Define granular Recovery Point Objectives and Recovery Time Objectives per tenant or workload. Meet SLA commitments with measurable DR targets.",
                color: "text-blue-600",
                bg: "bg-blue-100",
              },
              {
                icon: Globe,
                title: "Multi-Site Replication",
                description: "Replicate workloads across geographically distributed zones and data centers. Support active-passive and active-active DR topologies.",
                color: "text-purple-600",
                bg: "bg-purple-100",
              },
              {
                icon: Database,
                title: "Snapshot-Based Recovery",
                description: "Leverage incremental and full snapshots for point-in-time recovery. Efficiently manage storage with deduplication and compression.",
                color: "text-amber-600",
                bg: "bg-amber-100",
              },
              {
                icon: Shield,
                title: "Tenant Isolation & Security",
                description: "Complete DR policy isolation between tenants with encrypted replication channels. Ensure data sovereignty and compliance across recovery sites.",
                color: "text-rose-600",
                bg: "bg-rose-100",
              },
              {
                icon: Server,
                title: "CloudStack Native Integration",
                description: "Deep integration with Apache CloudStack APIs for VM, volume, and network replication. No third-party agents required on guest VMs.",
                color: "text-indigo-600",
                bg: "bg-indigo-100",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DR Workflow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How StackVault DR Works
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A streamlined disaster recovery workflow designed for cloud service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Configure", desc: "Define DR policies, RPO/RTO targets, and replication schedules per tenant." },
              { step: "02", title: "Replicate", desc: "Automated replication of VMs, volumes, and configurations to secondary sites." },
              { step: "03", title: "Monitor", desc: "Real-time replication health monitoring with alerts and compliance reporting." },
              { step: "04", title: "Recover", desc: "One-click failover with orchestrated recovery and automated failback." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-emerald-700">{item.step}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                Flexible Deployment Models
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                StackVault supports multiple deployment topologies to match your infrastructure strategy and compliance requirements.
              </p>
              <div className="space-y-4">
                {[
                  "On-premises to on-premises DR replication",
                  "On-premises to remote colocation failover",
                  "Cross-zone replication within the same region",
                  "Multi-region DR for geographic redundancy",
                  "Hybrid deployment with mixed hypervisors",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/simplified-deployment-at-management.svg"
                alt="Flexible Deployment Models"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to offer DR-as-a-Service?
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Enable disaster recovery for your tenants with StackVault. Contact us for a demo or start your evaluation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50 rounded-full px-8" asChild>
              <Link href="/contact">
                Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8" asChild>
              <Link href="/platform/stackvault/docs">
                Read the Docs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
