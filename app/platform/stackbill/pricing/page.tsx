"use client"

import { StackBillNavigation } from "@/components/stackbill-navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, X, Sparkles, Star } from "lucide-react"
import { useState } from "react"

export default function StackBillPricingPage() {
  const [activeTab, setActiveTab] = useState("Core")

  const plans = [
    {
      name: "OrbitFlex",
      price: "$299 (3 Hosts)",
      period: "/mo/yr",
      cta: "Sign-Up",
      ctaLink: "/contact",
      features: [
        "StackBill CMP – Full Access",
        "StackWatch Monitoring",
        "1 Region",
        "Up to 3 Zones",
        "Unlimited VMs",
        "White-Label Branding",
        "Reseller Plugin (Free upto 2)",
        "100+ FREE Marketplace Apps",
        "AddOns Plugin Integration",
        "OrbitAssist Standard Support",
      ],
      highlighted: false,
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      name: "OrbitManage",
      price: "Custom Pricing",
      period: "/mo/yr",
      cta: "Contact Us",
      ctaLink: "/contact",
      features: [
        "Everything in OrbitFlex",
        "StackOps – Fully Managed Cloud Operations",
        "Proactive Cloud Optimization",
        "Multi-Region Support",
        "Unlimited Zones",
        "Architecture Advisory + Quarterly Reviews",
        "Incident Response & Remediation",
        "Reseller Plugin (Free upto 10)",
        "Unlimited Free Apps Marketplace",
        "24×7 Priority Dedicated Support (Orbit360 SLA)",
      ],
      highlighted: true,
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      name: "OrbitInfinity",
      price: "One-Time",
      period: "(20% AMC)",
      cta: "Request-a-quote",
      ctaLink: "/contact",
      features: [
        "One-time perpetual license (no monthly subscription)",
        "Minimum 10-host license requirement",
        "AMC (Annual Maintenance Contract): 20% of license cost",
        "Upscale requires new license purchase",
        "Custom Support SLA based on AMC tier",
        "Includes StackBill CMP perpetual license",
        "Includes plugin support (StackWatch, StackVault) based on purchased bundle",
        "Optional paid upgrades and enhancements",
        "Deployment support included (one-time)",
        "OrbitAssist Standard Support",
      ],
      highlighted: false,
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
  ]

  const comparisonCategories = [
    {
      title: "Core",
      features: [
        {
          name: "License Model",
          orbitFlex: "Subscription",
          orbitManage: "Subscription + Managed Ops",
          orbitInfinity: "Perpetual (One-Time)",
        },
        { name: "On Prem Deployment", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "White Labeling", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Regions", orbitFlex: "1*", orbitManage: "Multi-Region*", orbitInfinity: "Multi-Region" },
        { name: "Zone", orbitFlex: "Up to 3*", orbitManage: "Unlimited", orbitInfinity: "Unlimited" },
        { name: "VMs", orbitFlex: "Unlimited", orbitManage: "Unlimited", orbitInfinity: "Unlimited" },
        { name: "Reseller Users", orbitFlex: "2", orbitManage: "Up to 5*", orbitInfinity: "Based on license tier" },
        {
          name: "Deployment",
          orbitFlex: "Free",
          orbitManage: "Free + Managed",
          orbitInfinity: "Free Initial Deployment",
        },
        {
          name: "Cloud Ops",
          orbitFlex: "Self – Managed",
          orbitManage: "Fully Managed (StackOps)",
          orbitInfinity: "Self-Managed",
        },
        { name: "Auto-scaling", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Advanced Networking", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "VPC Networking", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "API EndPoints", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        {
          name: "Theme Customization *",
          orbitFlex: "Yes(On-Demand)",
          orbitManage: "Yes(On-Demand)",
          orbitInfinity: "Yes(On-Demand)",
        },
        { name: "IAAC (OpenTofu)", orbitFlex: false, orbitManage: true, orbitInfinity: true },
        { name: "Architecture Advisory", orbitFlex: false, orbitManage: true, orbitInfinity: "Optional (AMC add-on)" },
        { name: "Incident Response", orbitFlex: false, orbitManage: true, orbitInfinity: "Optional" },
        { name: "AMC", orbitFlex: false, orbitManage: false, orbitInfinity: "20% Yearly" },
      ],
    },
    {
      title: "Billing Feature",
      features: [
        { name: "Complete Self Servicing", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Billing & Chargeback", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Post/Pre-paid/Manual Account Type", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Multi-Currency Support", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Multi-Tax Module", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Multi-Language Support *", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Quota Manager", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Budget Manager", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Savings Plan (Reserved Instance)", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Windows Licence Plugin", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Reporting", orbitFlex: true, orbitManage: "Custom Report", orbitInfinity: true },
        { name: "Invoice Customization", orbitFlex: false, orbitManage: true, orbitInfinity: true },
        { name: "Custom Payment gateway integration", orbitFlex: true, orbitManage: true, orbitInfinity: true },
      ],
    },
    {
      title: "Add-Ons",
      features: [
        { name: "StackWatch", orbitFlex: true, orbitManage: true, orbitInfinity: "Add-ons (licensed separately)" },
        {
          name: "StackVault*",
          orbitFlex: "Optional",
          orbitManage: "Optional",
          orbitInfinity: "Add-ons (licensed separately)",
        },
        {
          name: "StackObject*",
          orbitFlex: "Optional",
          orbitManage: "Optional",
          orbitInfinity: "Add-ons (licensed separately)",
        },
        {
          name: "TARS*",
          orbitFlex: "Optional",
          orbitManage: "Optional",
          orbitInfinity: "Add-ons (licensed separately)",
        },
        { name: "Cost Calculator", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "WHMCS Plugin", orbitFlex: true, orbitManage: true, orbitInfinity: true },
        { name: "Helpdesk", orbitFlex: true, orbitManage: true, orbitInfinity: true },
      ],
    },
    {
      title: "Support",
      features: [
        { name: "Default Plan", orbitFlex: "OrbitAssist", orbitManage: "OrbitShield", orbitInfinity: "OrbitAssist" },
        { name: "Time Zone", orbitFlex: "24/7", orbitManage: "24/7", orbitInfinity: "24/7" },
        {
          name: "Support Channel(s)",
          orbitFlex: "Email/ Helpdesk Only",
          orbitManage: "Helpdesk/Slack/Phone Support",
          orbitInfinity: "Email / Helpdesk Only",
        },
        {
          name: "Catastrophic Support Ticket (P1) *",
          orbitFlex: "Within 8 Hrs",
          orbitManage: "Within 2 hrs",
          orbitInfinity: "Within 8 Hrs",
        },
        {
          name: "Critical Support Ticket (P2) *",
          orbitFlex: "Within 12 Hrs",
          orbitManage: "Within 4 hrs",
          orbitInfinity: "Within 12 Hrs",
        },
        {
          name: "Important Support Ticket (P3)",
          orbitFlex: "Within 24 Hrs",
          orbitManage: "Within 6 hrs",
          orbitInfinity: "Within 24 hrs",
        },
        { name: "SLA & NDA", orbitFlex: "EULA & TOS", orbitManage: "Custom", orbitInfinity: "Custom" },
        { name: "Technical Account Manager", orbitFlex: false, orbitManage: "Optional", orbitInfinity: false },
        {
          name: "Technical Consulting",
          orbitFlex: "PAID",
          orbitManage: "Contextual to your use cases",
          orbitInfinity: "PAID",
        },
      ],
    },
  ]

  const renderCellValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mx-auto" />
      )
    }
    return <span className="text-sm text-gray-700">{value}</span>
  }

  const activeCategory = comparisonCategories.find((cat) => cat.title === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <StackBillNavigation />

      {/* Hero Section with Glassmorphism */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 mb-4">
              <Sparkles size={16} className="text-blue-500" />
              Flexible Pricing for Every Business
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Choose Your StackOrbit Plan</h1>

            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Flexible Pay-as-you-Go (PayG) subscription and perpetual licensing options for CloudStack-based cloud
              providers, MSPs, and enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans with Glass Cards */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="group relative overflow-visible">
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      <Star size={14} className="fill-white" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Glass card with gradient overlay on hover */}
                <div
                  className={`relative p-8 bg-white border rounded-3xl transition-all duration-500 h-full ${
                    plan.highlighted
                      ? "border-blue-300 shadow-xl shadow-blue-500/10"
                      : "border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{plan.name}</h3>
                    <div className="mb-8 text-center">
                      <div className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</div>
                      <div className="text-gray-600">{plan.period}</div>
                    </div>

                    <Button
                      className={`w-full mb-8 h-12 text-base font-semibold rounded-xl transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 hover:scale-105"
                          : "bg-gray-900 hover:bg-gray-800 text-white hover:scale-105"
                      }`}
                      asChild
                    >
                      <Link href={plan.ctaLink}>{plan.cta}</Link>
                    </Button>

                    <ul className="space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="p-0.5 bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table with Modern Design */}
      <section className="py-20 px-6 relative bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Feature Comparison</h2>
            <p className="text-xl text-gray-600 font-light">
              OrbitFlex vs OrbitManage vs OrbitInfinity - Detailed breakdown
            </p>
          </div>

          {/* Tab Navigation with Glassmorphism */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {comparisonCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveTab(category.title)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === category.title
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 hover:scale-105"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content with Glass Effect */}
          {activeCategory && (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
                      <th className="text-left py-5 px-6 font-semibold text-gray-900">Feature / Capability</th>
                      <th className="text-center py-5 px-6 font-semibold text-gray-900">OrbitFlex</th>
                      <th className="text-center py-5 px-6 font-semibold text-gray-900 bg-blue-50/50">OrbitManage</th>
                      <th className="text-center py-5 px-6 font-semibold text-gray-900">OrbitInfinity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCategory.features.map((feature, featureIndex) => (
                      <tr
                        key={featureIndex}
                        className={`border-b border-gray-100 transition-colors hover:bg-gray-50 ${
                          featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">{feature.name}</td>
                        <td className="py-4 px-6 text-center">{renderCellValue(feature.orbitFlex)}</td>
                        <td className="py-4 px-6 text-center bg-blue-50/30">{renderCellValue(feature.orbitManage)}</td>
                        <td className="py-4 px-6 text-center">{renderCellValue(feature.orbitInfinity)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator Section with Glassmorphism */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-sm text-emerald-700 mb-6">
              <Sparkles size={16} className="text-emerald-500" />
              Financial Planning Tool
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Cloud ROI</h2>
            <p className="text-xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
              Estimate your potential savings, revenue, and return on investment with StackOrbit's comprehensive ROI
              calculator. Make informed decisions with real-time cost projections.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">3-5 Years</div>
                <p className="text-sm text-gray-600">ROI Timeline</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">Multi-Region</div>
                <p className="text-sm text-gray-600">Scalability Options</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">USD & EUR</div>
                <p className="text-sm text-gray-600">Currency Support</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 h-14 text-base font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
              asChild
            >
              <Link href="/roi-calculator" target="_blank" rel="noopener noreferrer">
                Calculate Now →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
