"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SupportMatrixTabs } from "@/components/support-matrix-tabs"
import { SupportMatrixSection } from "@/components/support-matrix-section"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Check, Clock, Shield, Globe, Zap, Users, Award, ChevronRight, Headphones, FileText, Plus, Minus, Sparkles, CheckCircle2, Phone, MessageCircle, Server, HardDrive, RefreshCw, Settings, AlertTriangle, LifeBuoy, BadgeCheck, Timer, PhoneCall, Mail, MessageSquare, Clock3, Layers, Database, Network, Monitor, Type as type, type LucideIcon } from "lucide-react"

// FAQ Data for SEO/AEO
const faqData = [
  {
    question: "What is included in the 24/7 Managed Support service?",
    answer:
      "Our 24/7 Managed Support includes round-the-clock monitoring, incident response, CloudStack administration, hypervisor management, storage management, performance optimization, security patching, backup management, and direct access to certified CloudStack engineers via phone, chat, and helpdesk.",
  },
  {
    question: "What SLA response times can I expect?",
    answer:
      "We offer customizable SLA tiers. Critical issues (P1) receive immediate response within 15 minutes with continuous work until resolution. High priority (P2) issues receive response within 1 hour, Medium (P3) within 4 hours, and Low (P4) within 8 hours. All SLAs are backed by service credits.",
  },
  {
    question: "Do you support third-party vendor components?",
    answer:
      "Yes, our 360-degree coverage includes support for third-party components in your cloud infrastructure including storage vendors (NetApp, Dell EMC, Pure Storage), networking equipment (Cisco, Juniper), and other integrated systems. We act as a single point of contact for your entire infrastructure.",
  },
  {
    question: "Can you assist with migrations while providing support?",
    answer:
      "Absolutely. Our support includes P2C (Physical to Cloud), V2C (Virtual to Cloud), and C2C (Cloud to Cloud) migration assistance based on your workload priorities. This ensures minimal disruption during migrations while maintaining production support.",
  },
  {
    question: "Is there a dedicated team for my organization?",
    answer:
      "Yes, enterprise customers receive a dedicated support pod with named engineers who become familiar with your infrastructure. This ensures faster resolution times and personalized service. All team members are certified CloudStack professionals.",
  },
  {
    question: "Do you provide NDA and customized SLA agreements?",
    answer:
      "Yes, we provide customized SLA agreements tailored to your organization's specific requirements, along with NDA protection for sensitive infrastructure details. Our legal team works with yours to ensure compliance with your corporate policies.",
  },
]

// Support Features from the image
const supportFeatures = [
  {
    icon: Clock,
    title: "24x7x365 Premium Support",
    description: "Premium support services for CloudStack, Hypervisor & Storage management available around the clock, every day of the year.",
    highlight: "Never miss critical issues",
  },
  {
    icon: BadgeCheck,
    title: "Certified Engineering Teams",
    description: "Support and Engineering teams dealing exclusively with CloudStack infrastructure, ensuring deep expertise.",
    highlight: "CloudStack specialists only",
  },
  {
    icon: RefreshCw,
    title: "Migration Assistance",
    description: "P2C, V2C, C2C migration assists based on the workload priority, ensuring smooth transitions.",
    highlight: "Physical, Virtual & Cloud",
  },
  {
    icon: Globe,
    title: "360 Degree Coverage",
    description: "Complete coverage on your entire Cloud infrastructure including third party vendor support coordination.",
    highlight: "End-to-end infrastructure",
  },
  {
    icon: Headphones,
    title: "Multi-Channel Access",
    description: "Anytime access to support team by phone, chat & helpdesk desk manned 24/7 for immediate assistance.",
    highlight: "Phone, Chat & Helpdesk",
  },
  {
    icon: FileText,
    title: "Customized SLA & NDA",
    description: "Tailored SLA agreements and NDA protection customized specifically for your organization's requirements.",
    highlight: "Your terms, guaranteed",
  },
]

// SLA Tiers
const slaTiers = [
  {
    priority: "P1",
    name: "Critical",
    description: "Production system down",
    response: "15 min",
    resolution: "4 hours",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    priority: "P2",
    name: "High",
    description: "Major feature impaired",
    response: "1 hour",
    resolution: "8 hours",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    priority: "P3",
    name: "Medium",
    description: "Minor feature impaired",
    response: "4 hours",
    resolution: "24 hours",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    priority: "P4",
    name: "Low",
    description: "General inquiry",
    response: "8 hours",
    resolution: "72 hours",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
]

// Support Channels
const supportChannels = [
  {
    icon: PhoneCall,
    title: "Phone Support",
    description: "Direct line to senior engineers",
    availability: "24/7/365",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant messaging support",
    availability: "24/7/365",
  },
  {
    icon: Mail,
    title: "Email & Ticketing",
    description: "Detailed issue tracking",
    availability: "24/7/365",
  },
  {
    icon: Monitor,
    title: "Remote Access",
    description: "Secure screen sharing",
    availability: "On Request",
  },
]

// What We Support
const supportScope = [
  {
    category: "CloudStack Management",
    icon: Server,
    items: ["Zone & Pod management", "Host lifecycle", "Template management", "Network configuration", "System VM health"],
  },
  {
    category: "Hypervisor Support",
    icon: Layers,
    items: ["KVM administration", "VMware vSphere", "XCP-ng management", "Performance tuning", "Security patching"],
  },
  {
    category: "Storage Management",
    icon: Database,
    items: ["Primary storage", "Secondary storage", "Ceph clusters", "NFS/iSCSI mounts", "Capacity planning"],
  },
  {
    category: "Network Operations",
    icon: Network,
    items: ["Virtual networking", "Load balancers", "VPN configuration", "Firewall rules", "Traffic analysis"],
  },
]

// Stats
const stats = [
  { value: "15min", label: "P1 Response", icon: Timer },
  { value: "99.9%", label: "Uptime SLA", icon: Shield },
  { value: "24/7", label: "Availability", icon: Clock3 },
  { value: "100+", label: "Clients Supported", icon: Users },
]

// FAQ Accordion Component
function FAQAccordion({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqData)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-blue-300 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 shadow-lg shadow-blue-100/50"
          : "border-border/50 hover:border-blue-200 bg-background"
      }`}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between p-6 text-left transition-colors">
        <h3 className={`text-lg font-semibold pr-4 ${isOpen ? "text-blue-700" : "text-foreground"}`}>{faq.question}</h3>
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-blue-600 text-white rotate-180" : "bg-blue-100 text-blue-600"
          }`}
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function ManagedSupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // Structured Data for SEO/AEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "StackOps - Fully Managed 24/7 Support",
    provider: {
      "@type": "Organization",
      name: "StackOrbit",
      url: "https://stackorbit.com",
    },
    description:
      "24x7x365 premium managed support services for Apache CloudStack, hypervisor, and storage infrastructure with certified engineering teams.",
    serviceType: "Managed IT Support Services",
    areaServed: "Worldwide",
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <Navigation />

      {/* Hero Section - Featured Story Design */}
      <section className="relative pt-8 overflow-hidden px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="group relative grid lg:grid-cols-2 gap-0 bg-slate-900 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            {/* Left - Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  StackOps Services
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 text-balance">
                  24/7 Managed Support
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Enterprise-grade managed support for your Apache CloudStack infrastructure with certified engineers available around the clock.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Get Support <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <div className="text-sm text-slate-400">
                  <span className="block text-white font-bold text-xl">24/7/365</span>
                  Always Ready
                </div>
              </div>
            </div>
            {/* Right - Image */}
            <div className="relative min-h-[300px] lg:min-h-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl" />
                  </div>
                  <img
                    src="https://www.stackbill.com/assets/images/sb-img/cloudstack-as-a-service.png"
                    alt="24/7 Managed Support"
                    className="relative w-64 h-64 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Support Coverage - Single Unified Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-slate-900">
              The Only Global<br />Provider of CloudStack<br />Support Services
            </h2>
            <p className="text-slate-600 leading-relaxed text-base mb-6">
              StackOps provides 2nd – 4th line remote CloudStack Infrastructure Support Service of your entire CloudStack infrastructure. All of our engineers are experts in CloudStack.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              StackOps is the global provider of support services to Apache CloudStack™. With us you benefit from:
            </p>
          </div>

          {/* Unified Features Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              {/* 8 Feature Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Feature 1 */}
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                    <BadgeCheck className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Professional, enterprise-grade support</h4>
                  <p className="text-xs text-slate-600">for Open-Source Apache CloudStack™</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                    <Award className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Provided by StackOps</h4>
                  <p className="text-xs text-slate-600">– the leading independent integrator of Apache CloudStack™</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                    <Clock className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">24x7x365</h4>
                  <p className="text-xs text-slate-600">Follow the Sun support</p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                    <Users className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Global Support and Engineering teams</h4>
                  <p className="text-xs text-slate-600">dealing exclusively with CloudStack infrastructure</p>
                </div>

                {/* Feature 5 */}
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                    <Globe className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Supports your entire</h4>
                  <p className="text-xs text-slate-600">Cloud infrastructure</p>
                </div>

                {/* Feature 6 */}
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Access by phone, email</h4>
                  <p className="text-xs text-slate-600">or web-portal</p>
                </div>

                {/* Feature 7 */}
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                    <Shield className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">The best CloudStack</h4>
                  <p className="text-xs text-slate-600">SLA available</p>
                </div>

                {/* Feature 8 */}
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                    <Zap className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Instant Guru:</h4>
                  <p className="text-xs text-slate-600">to speak to CloudStack experts fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Matrix Section - Comprehensive */}
      <SupportMatrixSection />

      {/* Apache CloudStack Hardware Support Matrix - Tabbed Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          {/* Header - Centered */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Apache CloudStack – Hardware Support Matrix (2026)
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Comprehensive infrastructure compatibility overview for hypervisors, compute, GPU, storage, and networking supported by Apache CloudStack deployments.
            </p>
          </div>

          {/* Tab Navigation */}
          <SupportMatrixTabs />
        </div>
      </section>

      {/* What We Support */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Settings className="w-4 h-4 text-blue-300" />
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Support Scope</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              What We <span className="text-blue-400">Support</span>
            </h2>
            <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
              360-degree coverage across your entire cloud infrastructure stack
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportScope.map((scope, idx) => {
              const Icon = scope.icon
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{scope.category}</h3>
                  <ul className="space-y-2">
                    {scope.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* StackBill Integration Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <Image
                  src="https://www.stackbill.com/assets/images/sb-img/stackbill-icon.png"
                  alt="StackBill"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Monetize Your Support Services</h3>
                <p className="text-blue-100 max-w-lg">
                  Combine StackBill with managed support to offer billable support tiers, 
                  track SLA compliance, and automate support ticket billing.
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 rounded-full shadow-xl whitespace-nowrap"
              asChild
            >
              <Link href="/platform">
                Explore StackBill
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our managed support services
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <FAQAccordion
                key={idx}
                faq={faq}
                isOpen={openFaqIndex === idx}
                onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                Ready for Peace of Mind?
              </h2>
              <p className="text-slate-300 text-sm">
                Get a customized support proposal from our certified CloudStack experts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button
                size="sm"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-2xl"
                asChild
              >
                <Link href="/contact">
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border border-slate-600 text-white hover:bg-slate-800 rounded-2xl"
                asChild
              >
                <Link href="/stackops">
                  All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
