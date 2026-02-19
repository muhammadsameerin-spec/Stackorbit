"use client"

import { StackVaultNavigation } from "@/components/stackvault-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ArrowRight, Book, FileText, Code, Terminal } from "lucide-react"

export default function StackVaultDocsPage() {
  const docSections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Quick start guides and initial setup instructions",
      links: [
        { label: "Introduction to StackVault", href: "#" },
        { label: "System Requirements", href: "#" },
        { label: "Installation Guide", href: "#" },
        { label: "First Steps", href: "#" },
      ]
    },
    {
      icon: FileText,
      title: "User Guides",
      description: "Comprehensive guides for daily operations",
      links: [
        { label: "DR Policy Configuration", href: "#" },
        { label: "Replication Management", href: "#" },
        { label: "Failover & Failback", href: "#" },
        { label: "RPO/RTO Monitoring", href: "#" },
      ]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation for developers",
      links: [
        { label: "REST API Overview", href: "#" },
        { label: "Authentication", href: "#" },
        { label: "DR Policy Endpoints", href: "#" },
        { label: "Recovery Operations", href: "#" },
      ]
    },
    {
      icon: Terminal,
      title: "Advanced Topics",
      description: "Deep dives into advanced configurations",
      links: [
        { label: "Multi-Site Replication", href: "#" },
        { label: "Snapshot Scheduling", href: "#" },
        { label: "Tenant Isolation & Security", href: "#" },
        { label: "Compliance & Audit Logs", href: "#" },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StackVaultNavigation />

      {/* Docs Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-b border-border/30">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            StackVault Documentation
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to configure, manage, and operate disaster recovery services with StackVault.
          </p>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
                    <p className="text-xs text-muted-foreground">{section.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center gap-2 py-2 px-3 text-sm text-muted-foreground hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
            Need help getting started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team is ready to assist with setup, configuration, and best practices for your DR deployment.
          </p>
          <Button size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8" asChild>
            <Link href="/contact">
              Contact Support <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
