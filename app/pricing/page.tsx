"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, ChevronRight, Home } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PricingPage() {
  const router = useRouter()

  const productLicenses = [
    {
      name: "OrbitFlex",
      description: "License Only",
      price: "$600",
      period: "per host/annum",
      highlights: [
        "Monthly/Yearly billing options",
        "Standard Product Support",
        "EULA & TOS compliance",
        "Minimum 5-host license",
      ],
      optional: ["StackOps Support", "Product Customization", "Custom SLA"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "OrbitManage",
      description: "Fully Managed",
      price: "Custom",
      period: "pricing",
      highlights: [
        "All OrbitFlex features included",
        "All or custom StackOps features",
        "Custom SLA for Support",
        "Minimum 5 host license",
        "24/7 Management & Support",
      ],
      optional: [],
      cta: "Contact Sales",
      featured: true,
    },
    {
      name: "OrbitInfinity",
      description: "Perpetual License",
      price: "Contact",
      period: "for pricing",
      highlights: [
        "One-time purchase",
        "Upscale support with new license",
        "20% license cost for upgrades",
        "Custom SLA for Support",
        "Minimum 10 host license",
      ],
      optional: [],
      cta: "Request Demo",
      featured: false,
    },
  ]

  const supportTiers = [
    {
      name: "OrbitAssist",
      title: "Standard Support",
      features: [
        "Business Hours (16x5)",
        "8 Hrs Response (SLA)",
        "48 Hrs Resolution Time",
        "HelpDesk Support Only",
        "Included Patching / Upgrade",
        "Standard Queue",
      ],
      icon: "🛟",
    },
    {
      name: "OrbitShield",
      title: "Premium Support",
      features: [
        "Business Hours (24x7)",
        "1 Hr Response (SLA)",
        "8Hrs Resolution Time",
        "HelpDesk/Chat Support",
        "Included Patching / Upgrade",
        "Premium Queue",
      ],
      icon: "🛡️",
    },
  ]

  const stackOpsServices = [
    {
      name: "ACS Deployment & Management",
      features: [
        "Deployment & Management",
        "ACS Managed Support (Hypervisor & Storage)",
        "VMWare Migration Support",
        "24x7 NOC Support",
        "Minimum 3 Hypervisor Nodes",
      ],
      pricing: ["$100 per host", "$10 per TB/month"],
    },
  ]

  const trainingProgram = {
    name: "Stack Academy",
    description: "Training & Certification",
    topics: ["ACS Training & Certification", "DevOps", "Java/Angular Development", "CEPH Storage Management"],
    pricing: "$10 per hour",
    minimum: "Minimum 3 participants",
  }

  const partnerProgram = {
    name: "StackOrbit Partner Program",
    benefits: [
      "Exclusive Partner Pricing",
      "StackOrbit Handles Lead Generation & Liaison",
      "Sell Under Your Brand",
      "Joint Go-To-Market Support",
      "Flexible Licensing Models",
      "25%-40% Discount for all services",
    ],
  }

  return (
    <main className="mt-[112px] min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <nav className="flex px-4 sm:px-6 lg:px-8 mb-8 pt-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <Home size={16} />
          Home
        </button>
        <ChevronRight size={16} className="mx-2 text-muted-foreground" />
        <span className="text-sm text-foreground">Pricing</span>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Choose Your StackOrbit Plan</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible subscription and perpetual licensing options for CloudStack-based cloud providers, MSPs, and
            enterprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* OrbitFlex Card */}
            <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-3xl font-bold mb-2">OrbitFlex</h3>
                <p className="text-muted-foreground mb-6">Self-Managed Cloud Management Suite</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">$XXX</div>
                  <p className="text-sm text-muted-foreground">Per Month</p>
                </div>
              </div>

              <Button className="w-full mb-8 bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold rounded-xl">
                Sign Up
              </Button>

              <div className="space-y-4 flex-grow">
                <ul className="space-y-3">
                  {[
                    "StackBill CMP – Full Access",
                    "StackWatch Monitoring",
                    "StackVault Backup & DR Add-on",
                    "1 Region",
                    "Up to 3 Zones",
                    "Unlimited VMs",
                    "White-Label Branding",
                    "Basic Reseller Support",
                    "Add-On Plugin Support",
                    "StackBill Managed Product Support",
                    "Free Deployment Assistance",
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check size={20} className="text-green-600" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* OrbitManage Card */}
            <div className="rounded-2xl border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10 p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">OrbitManage</h3>
                <p className="text-muted-foreground mb-6">Complete Managed Cloud Operations</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">Custom Pricing</div>
                  <p className="text-sm text-muted-foreground">Contact us for details</p>
                </div>
              </div>

              <Button className="w-full mb-8 bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold rounded-xl">
                Contact Us
              </Button>

              <div className="space-y-4 flex-grow">
                <ul className="space-y-3">
                  {[
                    "Everything in OrbitFlex",
                    "Multi-Region Support",
                    "Unlimited Zones",
                    "Unlimited Reseller Users",
                    "StackOps – Fully Managed Cloud Operations",
                    "24×7 Priority Dedicated Support (Orbit360 SLA)",
                    "Free Deployment & Ongoing Management",
                    "Unlimited Free Apps Marketplace",
                    "Unlimited Add-On Plugins",
                    "Architecture Advisory + Quarterly Reviews",
                    "Incident Response & Remediation",
                    "Proactive Cloud Optimization",
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check size={20} className="text-green-600" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* OrbitInfinity Card */}
            <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">OrbitInfinity</h3>
                <p className="text-muted-foreground mb-6">Perpetual License – Own Your Cloud Platform</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">One-Time</div>
                  <p className="text-sm text-muted-foreground">Purchase + Annual AMC</p>
                </div>
              </div>

              <Button className="w-full mb-8 bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold rounded-xl">
                Request Quote
              </Button>

              <div className="space-y-4 flex-grow">
                <ul className="space-y-3">
                  {[
                    "One-time perpetual license (no monthly subscription)",
                    "Minimum 10-host license requirement",
                    "AMC (Annual Maintenance Contract): 20% of license cost",
                    "Upscale requires new license purchase",
                    "Custom Support SLA based on AMC tier",
                    "Includes StackBill CMP perpetual license",
                    "Includes plugin support (StackWatch, StackVault) based on purchased bundle",
                    "Optional paid upgrades and enhancements",
                    "Deployment support included (one-time)",
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check size={20} className="text-green-600" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">OrbitFlex vs OrbitManage vs OrbitInfinity</h2>
            <p className="text-muted-foreground">Detailed feature comparison</p>
          </div>

          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50 border-b border-border">
                    <th className="text-left py-4 px-6 font-bold text-base">Feature / Capability</th>
                    <th className="text-center py-4 px-6 font-bold text-base">OrbitFlex</th>
                    <th className="text-center py-4 px-6 font-bold text-base">OrbitManage</th>
                    <th className="text-center py-4 px-6 font-bold text-base">OrbitInfinity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "License Model",
                      orbitFlex: "Subscription",
                      orbitManage: "Subscription + Managed Ops",
                      orbitInfinity: "Perpetual (One-Time)",
                    },
                    {
                      feature: "StackBill CMP",
                      orbitFlex: true,
                      orbitManage: true,
                      orbitInfinity: "✔️ Lifetime",
                    },
                    {
                      feature: "StackWatch",
                      orbitFlex: true,
                      orbitManage: true,
                      orbitInfinity: "Optional (License Add-on)",
                    },
                    {
                      feature: "StackVault",
                      orbitFlex: true,
                      orbitManage: true,
                      orbitInfinity: "Optional (License Add-on)",
                    },
                    {
                      feature: "Regions",
                      orbitFlex: "1",
                      orbitManage: "Multi-Region",
                      orbitInfinity: "Based on purchased license",
                    },
                    {
                      feature: "Zones",
                      orbitFlex: "Up to 3",
                      orbitManage: "Unlimited",
                      orbitInfinity: "Based on license tier",
                    },
                    { feature: "VMs", orbitFlex: "Unlimited", orbitManage: "Unlimited", orbitInfinity: "Unlimited" },
                    { feature: "Resellers", orbitFlex: "Basic", orbitManage: "Unlimited", orbitInfinity: "Optional" },
                    {
                      feature: "Plugins",
                      orbitFlex: "Add-ons",
                      orbitManage: "Unlimited Add-ons",
                      orbitInfinity: "Add-ons (licensed separately)",
                    },
                    {
                      feature: "Support Level",
                      orbitFlex: "Standard",
                      orbitManage: "24×7 Priority",
                      orbitInfinity: "Custom SLA via AMC",
                    },
                    {
                      feature: "Deployment",
                      orbitFlex: "Free",
                      orbitManage: "Free + Managed",
                      orbitInfinity: "Free initial deployment",
                    },
                    {
                      feature: "Cloud Operations",
                      orbitFlex: "Self-Managed",
                      orbitManage: "Fully Managed (StackOps)",
                      orbitInfinity: "Self-Managed",
                    },
                    {
                      feature: "Architecture Advisory",
                      orbitFlex: false,
                      orbitManage: true,
                      orbitInfinity: "Optional (AMC add-on)",
                    },
                    { feature: "Incident Response", orbitFlex: false, orbitManage: true, orbitInfinity: "Optional" },
                    { feature: "Optimization", orbitFlex: false, orbitManage: true, orbitInfinity: "Optional" },
                    { feature: "AMC", orbitFlex: "—", orbitManage: "—", orbitInfinity: "20% yearly" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card" : "bg-secondary/20"}`}>
                      <td className="py-4 px-6 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.orbitFlex === "boolean" ? (
                          row.orbitFlex ? (
                            <Check size={20} className="text-green-600 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-sm">{row.orbitFlex}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.orbitManage === "boolean" ? (
                          row.orbitManage ? (
                            <Check size={20} className="text-green-600 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-sm font-medium">{row.orbitManage}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.orbitInfinity === "boolean" ? (
                          row.orbitInfinity ? (
                            <Check size={20} className="text-green-600 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-sm">{row.orbitInfinity}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Support Options</h2>
            <p className="text-muted-foreground">Choose your support level</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {supportTiers.map((tier, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-8">
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-6">{tier.title}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Academy */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{trainingProgram.name}</h2>
            <p className="text-muted-foreground mb-8">{trainingProgram.description}</p>

            <div className="mb-8 inline-block">
              <div className="text-3xl font-bold text-accent mb-2">{trainingProgram.pricing}</div>
              <p className="text-sm text-muted-foreground">{trainingProgram.minimum}</p>
            </div>

            <div className="mb-8 grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {trainingProgram.topics.map((topic, i) => (
                <div key={i} className="px-4 py-2 bg-secondary rounded-lg text-sm">
                  {topic}
                </div>
              ))}
            </div>

            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Enroll in Stack Academy</Button>
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl border border-accent bg-accent/5 p-12">
            <h2 className="text-3xl font-bold mb-2">{partnerProgram.name}</h2>
            <p className="text-muted-foreground mb-8">Grow your business with StackOrbit</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {partnerProgram.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-3">
                  <Check size={20} className="text-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Become a Partner</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">Contact our sales team to discuss the best plan for your needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/try-stackbill">Try StackBill Free</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
