"use client"

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Check, CheckCircle2, Cloud, Server, Shield, Globe, Zap, Building2, Users, Clock, Award, ChevronRight, ChevronDown, Cpu, HardDrive, Network, BarChart3, Headphones, FileText, Target, Layers, RefreshCw, MonitorCheck, Cog, Type as type, type LucideIcon, Plus, Minus, Sparkles } from "lucide-react"
import { CaseStudiesCarousel } from "@/components/case-studies-carousel"

// FAQ Data for SEO/AEO
const faqData = [
  {
    question: "What is Apache CloudStack?",
    answer:
      "Apache CloudStack is an open-source cloud computing platform that provides a turnkey solution for deploying and managing large networks of virtual machines. It includes compute orchestration, Network-as-a-Service, user and account management, a native API, resource accounting, and a first-class user interface.",
  },
  {
    question: "Why choose StackOps for CloudStack consulting?",
    answer:
      "StackOps combines deep expertise in Apache CloudStack with extensive experience in building clouds using various storage, network, compute, and hypervisor technologies. We have successfully delivered 100+ CloudStack deployments globally and provide end-to-end support from design to 24/7 managed services.",
  },
  {
    question: "Can you help migrate from VMware to CloudStack?",
    answer:
      "Yes, we specialize in VMware to Apache CloudStack migrations. Our proven methodology includes workload assessment, migration planning, infrastructure design with KVM hypervisor, automated migration execution, and comprehensive post-migration support.",
  },
  {
    question: "What hypervisors does CloudStack support?",
    answer:
      "Apache CloudStack supports multiple hypervisors including KVM, VMware vSphere, XCP-ng, and Citrix Hypervisor. This flexibility allows organizations to choose the hypervisor that best fits their requirements or even use multiple hypervisors in the same deployment.",
  },
  {
    question: "Do you provide 24/7 support for CloudStack?",
    answer:
      "Yes, StackOps provides 24/7/365 fully managed support services for CloudStack infrastructure. Our certified support teams handle CloudStack, hypervisor, storage, and network management with customized SLAs to meet your organization's needs.",
  },
]

// Service offerings
// Stats
const stats = [
  { value: "100+", label: "CloudStack Deployments", icon: Cloud },
  { value: "50+", label: "Countries Served", icon: Globe },
  { value: "24/7", label: "Global Support", icon: Headphones },
  { value: "10+", label: "Years Experience", icon: Award },
]

// Why CloudStack benefits
const cloudstackBenefits = [
  "Simplified management console for multi-zones, compute, storage and network services",
  "Setup your public/private & hybrid cloud with hardware of your choice",
  "Easy upgrade for all system components with no or minimal downtime",
  "Easy billing integration with platforms like StackBill",
  "Built-in advanced monitoring metrics support for Prometheus, Grafana & Zabbix",
  "Multi-provider integration with SDS & SDN solutions",
  "100% compatible CloudStack API for third-party integrations",
]

// FAQ Accordion Component
function FAQAccordion({ faq, isOpen, onToggle }: { faq: typeof faqData[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-blue-300 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 shadow-lg shadow-blue-100/50"
          : "border-border/50 hover:border-blue-200 bg-background"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left transition-colors"
      >
        <h3 className={`text-lg font-semibold pr-4 ${isOpen ? "text-blue-700" : "text-foreground"}`}>
          {faq.question}
        </h3>
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-blue-600 text-white rotate-180" : "bg-blue-100 text-blue-600"
          }`}
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function CloudStackConsultingPage() {
  const [activeReason, setActiveReason] = useState(0)

  const consultingBenefits = [
    {
      number: "01",
      title: "Strategic Planning",
      subtitle: "Design Your Cloud Architecture",
      description:
        "Our cloud architects work with you to design a robust, scalable IaaS infrastructure tailored to your business requirements. We assess your current environment, define deployment strategies, and create a roadmap for cloud transformation aligned with your goals.",
      bgColor: "#dbeafe",
      accentColor: "#1e40af",
      cta: "Start Planning",
      ctaLink: "/contact",
    },
    {
      number: "02",
      title: "Implementation",
      subtitle: "Build Your CloudStack Cloud",
      description:
        "From infrastructure setup to cluster configuration, we handle the complete deployment of Apache CloudStack. Our experts ensure optimal performance, high availability, and security best practices throughout the implementation process.",
      bgColor: "#dcfce7",
      accentColor: "#15803d",
      cta: "Begin Setup",
      ctaLink: "/contact",
    },
    {
      number: "03",
      title: "Optimization",
      subtitle: "Maximize Performance & ROI",
      description:
        "We optimize your CloudStack environment for peak performance, cost efficiency, and resource utilization. Our team provides tuning recommendations, capacity planning, and efficiency improvements to maximize your cloud investment.",
      bgColor: "#fef3c7",
      accentColor: "#92400e",
      cta: "Optimize Now",
      ctaLink: "/contact",
    },
    {
      number: "04",
      title: "Support",
      subtitle: "24/7 Expert Guidance",
      description:
        "Get continuous support from our CloudStack experts. We provide troubleshooting, performance monitoring, security updates, and operational guidance to keep your cloud infrastructure running smoothly at all times.",
      bgColor: "#fecaca",
      accentColor: "#991b1b",
      cta: "Get Support",
      ctaLink: "/contact",
    },
  ]
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // Structured Data for SEO/AEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "StackOps - Apache CloudStack Consulting",
    provider: {
      "@type": "Organization",
      name: "StackOrbit",
      url: "https://stackorbit.com",
    },
    description:
      "Expert consulting services for Apache CloudStack including IaaS design, implementation, VMware migration, and 24/7 managed support.",
    serviceType: "Cloud Infrastructure Consulting",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CloudStack Consulting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Apache CloudStack Consulting",
            description: "Expert consulting for designing and building complex cloud infrastructure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IaaS Design & Build",
            description: "Design and implementation of IaaS cloud for private and public cloud",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VMware to CloudStack Migration",
            description: "Migrate vSphere environments to Apache CloudStack and KVM",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Managed Support",
            description: "Fully managed support services for CloudStack infrastructure",
          },
        },
      ],
    },
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
                  Apache CloudStack Consulting
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Design, build, and optimize your cloud infrastructure with expert CloudStack consulting. From architecture to 24/7 managed support.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Get Consulting <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <div className="text-sm text-slate-400">
                  <span className="block text-white font-bold text-xl">100+</span>
                  Deployments
                </div>
              </div>
            </div>
            {/* Right - Image */}
            <div className="relative min-h-[300px] lg:min-h-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl" />
                  </div>
                  <img
                    src="https://www.stackbill.com/assets/images/sb-img/cloudstack-as-a-service.png"
                    alt="CloudStack Consulting"
                    className="relative w-64 h-64 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ready to go cloud platform */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <BarChart3 className="w-16 h-16 text-rose-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Ready to go cloud platform</h3>
            </div>

            {/* Cloudstack without the hassle */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Cog className="w-16 h-16 text-rose-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Cloudstack without the hassle</h3>
            </div>

            {/* Affordable per hypervisor licensing model */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-16 h-16 text-rose-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Affordable per hypervisor licensing model</h3>
            </div>

            {/* 24/7 Technical Support Included */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle2 className="w-16 h-16 text-rose-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">24/7 Technical Support Included</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Opensource Cloud Services */}
      <section className="px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left - Architecture SVG */}
            <div className="flex justify-center items-center min-h-[600px] lg:min-h-[700px]">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/build-your-opensource.svg"
                alt="Infrastructure Integrations - Apache CloudStack architecture with Multi Hypervisor support"
                className="w-full h-full max-w-full object-contain py-12"
              />
            </div>

            {/* Right - Services Checklist */}
            <div className="py-20 px-8 lg:px-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-foreground mb-6">
                Build Your Opensource Cloud Services with us
              </h2>

              <ul className="space-y-4">
                {[
                  {
                    title: "IAAS Design & Build",
                    description: "Design and implementation of IaaS cloud infrastructures for private and public cloud implementations",
                  },
                  {
                    title: "VMWare Migration",
                    description: "Migrate your existing vSphere environment to a robust IaaS cloud environment based on Apache CloudStack and KVM",
                  },
                  {
                    title: "Hypervisor of your choice",
                    description: "Freedom to choose your hypervisor (KVM/XCP_NG/VMware) of your choice",
                  },
                  {
                    title: "Network & Storage",
                    description: "Use any storage devices or endpoints (NFS/CEPH/iSCSI) to enable storage services for your cloud.",
                  },
                  {
                    title: "Disaster recover as a Service (DR-as-a-S)",
                    description: "Build a strong DR strategies consist of disaster recovery plans (DR plans), business continuity plans (BCPs) and incident response plans (IRPs).",
                  },
                  {
                    title: "24/7/365 SLA Support",
                    description: "We offer 24/7/365 SLA-based support for your entire CloudStack Infrastructure.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground text-base mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 font-semibold mt-5 transition-colors"
              >
                Download Hardware Requirement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Modern Tabbed Benefits */}
      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-card/50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">How We Engage with Our Customers</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Our proven consulting engagement model transforms your infrastructure challenges into a thriving cloud business
            </p>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
            {/* Left - Tab Navigation */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {consultingBenefits.map((benefit, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReason(index)}
                  className={`flex-shrink-0 text-left p-4 lg:p-5 rounded-xl transition-all duration-300 ${
                    activeReason === index
                      ? "bg-background shadow-lg border-2 border-primary"
                      : "bg-background/50 hover:bg-background hover:shadow-md border border-border/50"
                  }`}
                >
                  <div className={`text-2xl font-bold mb-1 ${activeReason === index ? 'text-primary' : 'text-muted-foreground/40'}`}>{benefit.number}</div>
                  <h3 className={`text-base font-semibold ${activeReason === index ? 'text-foreground' : 'text-muted-foreground'}`}>{benefit.title}</h3>
                </button>
              ))}
            </div>

            {/* Right - Content Display */}
            <div className="relative">
              {consultingBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`${activeReason === index ? "block" : "hidden"} transition-all duration-300`}
                >
                  <div className={`rounded-2xl lg:rounded-3xl min-h-[400px] lg:min-h-[480px] relative overflow-hidden flex flex-col`} style={{ backgroundColor: benefit.bgColor }}>
                    <div className="flex items-start justify-between p-8 lg:p-10">
                      <div className="max-w-lg">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{benefit.subtitle}</h3>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{benefit.description}</p>
                      </div>
                      <Button 
                        size="lg" 
                        className="text-white hover:opacity-90 rounded-full px-6 shrink-0 ml-6"
                        style={{ backgroundColor: benefit.accentColor }}
                        asChild
                      >
                        <Link href={benefit.ctaLink}>{benefit.cta}</Link>
                      </Button>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4 px-8 lg:px-10 pb-8 lg:pb-10">
                      {/* Left visual - CloudStack architecture diagram */}
                      <div className="relative flex flex-col items-center justify-center gap-6">
                        <div className="relative w-40 h-32">
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-lg" style={{ backgroundColor: `${benefit.accentColor}30` }} />
                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 rounded-lg" style={{ backgroundColor: `${benefit.accentColor}50` }} />
                          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-6 rounded-lg" style={{ backgroundColor: `${benefit.accentColor}70` }} />
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full" style={{ backgroundColor: benefit.accentColor }} />
                        </div>
                        <div className="relative w-24 h-24">
                          {[...Array(12)].map((_, i) => (
                            <div 
                              key={i} 
                              className="absolute w-3 h-3 rounded-full" 
                              style={{ 
                                backgroundColor: benefit.accentColor,
                                top: `${50 - 40 * Math.cos((2 * Math.PI * i) / 12)}%`, 
                                left: `${50 + 40 * Math.sin((2 * Math.PI * i) / 12)}%`, 
                                opacity: 0.3 + (i / 12) * 0.7 
                              }} 
                            />
                          ))}
                        </div>
                      </div>
                      {/* Right side - insights card */}
                      <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${benefit.accentColor}20` }}>
                            <Cloud className="w-4 h-4" style={{ color: benefit.accentColor }} />
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">CloudStack Status</span>
                        </div>
                        <div className="rounded-lg p-3 mb-3" style={{ backgroundColor: `${benefit.accentColor}10` }}>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-semibold text-gray-900 text-sm">Engagement Stage</span>
                            <span className="text-xs text-gray-500 font-medium" style={{ color: benefit.accentColor }}>Active</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 mb-3">
                          <Zap className="w-4 h-4 mt-0.5 shrink-0" style={{ color: benefit.accentColor }} />
                          <div>
                            <span className="text-xs font-medium text-gray-700">Key Focus:</span>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {benefit.number === "01" && "Define architecture, assess infrastructure needs, create implementation roadmap"}
                              {benefit.number === "02" && "Deploy CloudStack, configure zones, establish security and performance baselines"}
                              {benefit.number === "03" && "Tune performance, optimize resource pools, implement best practices"}
                              {benefit.number === "04" && "Provide 24/7 monitoring, troubleshooting, and operational support"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Apache Cloudstack */}
      <section className="px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left - Features List */}
            <div className="py-20 px-8 lg:px-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-foreground mb-8">Why Apache Cloudstack®?</h2>

              <ul className="space-y-4 mb-8">
                {[
                  "Simplified management console for multi-zones, compute, storage and network services.",
                  "Setup your public/private & Hybrid cloud with hardware of your choice.",
                  "Easy upgrade for all system components with no or minimal downtime.",
                  "Easy billing integration: meter and bill for your cloud resources with popular cloud billing platforms such as StackBill.",
                  "Built-in advanced monitoring metrics support for monitoring third parties like Prometheus, Grafana & Zabbix.",
                  "Multi-provider integration with SDS(Software Defined Storage) & SDN(Software Defined Network)",
                  "Comprehensive integration with third party solutions via a 100% compatible Cloudstack API",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                View Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right - SVG Image */}
            <div className="relative flex justify-center items-center min-h-[600px] lg:min-h-[700px]">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/why-apache-cloudstack.svg"
                alt="Why Apache CloudStack benefits"
                className="w-full h-full max-w-full object-contain py-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <CaseStudiesCarousel />
      </section>

      {/* StackBill B2B Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Monetize Your CloudStack Infrastructure
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Transform your CloudStack infrastructure into a profitable B2B cloud business with StackBill
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                className="bg-white text-blue-600 hover:bg-white/90 font-semibold rounded-full px-6"
                asChild
              >
                <Link href="/platform/stackbill">
                  Explore StackBill <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 rounded-full px-6 bg-transparent"
                asChild
              >
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expandable Accordion */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Common questions about Apache CloudStack consulting services</p>
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

      <Footer />
    </div>
  )
}
