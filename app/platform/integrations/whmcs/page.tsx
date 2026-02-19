"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  ArrowRight,
  Check,
  FileText,
  CreditCard,
  Users,
  RefreshCw,
  Shield,
  Zap,
  Settings,
  Globe,
  DollarSign,
  Clock,
  Link2,
  ExternalLink,
  Server,
  Sparkles,
  Code,
  Key,
} from "lucide-react"

export default function WHMCSIntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    {
      icon: FileText,
      title: "Unified Invoice Management",
      description:
        "Automatically sync invoices between StackBill CMP and WHMCS. All billing data flows seamlessly, eliminating manual entry and reducing errors.",
    },
    {
      icon: CreditCard,
      title: "External Payment Processing",
      description:
        "Leverage WHMCS's extensive payment gateway support including PayPal, Stripe, and 100+ other processors for flexible payment options.",
    },
    {
      icon: Users,
      title: "Customer Account Sync",
      description:
        "Keep customer accounts synchronized across both platforms. User registration, profile updates, and account status changes reflect instantly.",
    },
    {
      icon: RefreshCw,
      title: "Automated Billing Cycles",
      description:
        "Configure recurring billing, subscription management, and automated payment reminders through WHMCS's proven billing automation.",
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description:
        "Utilize WHMCS's built-in fraud protection modules to screen orders and protect your business from fraudulent transactions.",
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description:
        "Offer services in multiple currencies with automatic conversion rates, making it easy to serve a global customer base.",
    },
  ]

  const capabilities = [
    {
      title: "Invoice Synchronization",
      items: [
        "Real-time invoice generation",
        "Automatic payment reconciliation",
        "Credit note management",
        "Tax calculation support",
      ],
    },
    {
      title: "Customer Management",
      items: [
        "Single sign-on capability",
        "Profile synchronization",
        "Account suspension/activation",
        "Contact information sync",
      ],
    },
    {
      title: "Product & Service Mapping",
      items: [
        "Map CMP resources to WHMCS products",
        "Usage-based billing integration",
        "Addon and upgrade support",
        "Custom configurable options",
      ],
    },
    {
      title: "Automation & Workflows",
      items: [
        "Provisioning automation",
        "Suspension on non-payment",
        "Termination workflows",
        "Welcome email triggers",
      ],
    },
  ]

const requirements = [
  { 
    label: "WHMCS Version", 
    value: "8.0 or higher",
    icon: "server",
    color: "blue",
    description: "Ensure your WHMCS installation is updated to version 8.0 or later for full compatibility"
  },
  { 
    label: "StackBill Edition", 
    value: "Premium or Enterprise",
    icon: "crown",
    color: "purple",
    description: "WHMCS integration is available on Premium and Enterprise plans"
  },
  { 
    label: "PHP Version", 
    value: "7.4+ (8.0 recommended)",
    icon: "code",
    color: "green",
    description: "PHP 8.0+ recommended for optimal performance and security"
  },
  { 
    label: "API Access", 
    value: "WHMCS API credentials required",
    icon: "key",
    color: "amber",
    description: "Generate API Identifier and Secret from WHMCS Admin > Setup > Staff Management > API Credentials"
  },
]

  const faqs = [
    {
      question: "How do I enable WHMCS billing integration?",
      answer:
        "Login to the admin portal, navigate to Config > CMP Config > Feature Configuration > Billing tab. Toggle the 'Enable WHMCS Billing' option. Once enabled, configure your WHMCS API credentials in the integration settings.",
    },
    {
      question: "Can I use both StackBill native billing and WHMCS simultaneously?",
      answer:
        "When WHMCS billing is enabled, it becomes the primary billing system. StackBill's native billing features will be disabled to avoid conflicts. However, you can switch between systems as needed.",
    },
    {
      question: "What payment gateways are supported through WHMCS?",
      answer:
        "WHMCS supports 100+ payment gateways including PayPal, Stripe, Authorize.net, 2Checkout, Razorpay, and many regional payment processors. Any gateway configured in WHMCS will be available for your customers.",
    },
    {
      question: "How are cloud resources billed through WHMCS?",
      answer:
        "StackBill automatically tracks resource usage and sends billing data to WHMCS. You can configure products in WHMCS to match your compute, storage, and network offerings with usage-based or fixed pricing models.",
    },
    {
      question: "Is customer data synchronized between both platforms?",
      answer:
        "Yes, customer accounts, profiles, and contact information are kept in sync. When a customer registers or updates their profile in one system, the changes reflect in both StackBill and WHMCS.",
    },
    {
      question: "Can I customize invoices generated through WHMCS?",
      answer:
        "Absolutely. WHMCS provides extensive invoice customization options including branding, templates, tax configurations, and custom fields. All standard WHMCS customizations apply to StackBill-generated invoices.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Split Two-Tone Design */}
      <section className="relative pt-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Left - Dark Panel */}
          <div className="bg-slate-900 px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex items-center">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">
                Platform Integration
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                StackBill + WHMCS<br />
                Integration
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Connect StackBill with WHMCS for powerful billing automation and extensive payment gateway support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 rounded-full"
                  asChild
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 rounded-full bg-transparent"
                  asChild
                >
                  <Link href="https://docs-admin.stackbill.com/docs/admin/config-and-settings/cmp-config/feature-configuration/billing#enable-whmcs-billing" target="_blank">
                    View Docs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* Feature highlights */}
              <div className="flex gap-8 pt-8 border-t border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-xs text-slate-400">Payment Gateways</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Real-time</div>
                  <div className="text-xs text-slate-400">Invoice Sync</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">SSO</div>
                  <div className="text-xs text-slate-400">Enabled</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Light Panel with Image */}
          <div className="bg-sky-50 px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex items-center justify-center">
            <div className="relative">
              {/* Soft circular glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-sky-100 rounded-full" />
              </div>
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-white rounded-full shadow-xl flex items-center justify-center p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-3xl text-slate-400">+</span>
                  <div className="w-16 h-16 bg-[#1c6eff] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">W</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect StackBill + WHMCS - AWS Style Scrolling Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-background overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Connect StackBill + WHMCS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate billing, customer management, and automation across platforms
            </p>
          </div>
        </div>

        {/* Scrolling Carousel Container */}
        <div className="relative">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* First Row - Scrolling Left */}
          <div className="flex gap-6 mb-6 animate-scroll-left">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                <Card className="w-80 shrink-0 p-6 border-2 border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Billing</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Invoice Synchronization</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time invoice generation and automatic payment reconciliation between platforms.
                  </p>
                </Card>

                <Card className="w-80 shrink-0 p-6 border-2 border-purple-100 hover:border-purple-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Customers</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Customer Account Sync</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep customer profiles, contact info, and account status synchronized automatically.
                  </p>
                </Card>

                <Card className="w-80 shrink-0 p-6 border-2 border-green-100 hover:border-green-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Payments</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">100+ Payment Gateways</h3>
                  <p className="text-sm text-muted-foreground">
                    PayPal, Stripe, Razorpay, and 100+ payment processors ready to use.
                  </p>
                </Card>

                <Card className="w-80 shrink-0 p-6 border-2 border-amber-100 hover:border-amber-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">Automation</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Recurring Billing</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated subscription management, payment reminders, and billing cycles.
                  </p>
                </Card>
              </div>
            ))}
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="flex gap-6 animate-scroll-right">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                <Card className="w-80 shrink-0 p-6 border-2 border-red-100 hover:border-red-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Security</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Fraud Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Built-in fraud detection modules to screen orders and protect your revenue.
                  </p>
                </Card>

                <Card className="w-80 shrink-0 p-6 border-2 border-cyan-100 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-cyan-600" />
                    </div>
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">Global</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Multi-Currency</h3>
                  <p className="text-sm text-muted-foreground">
                    Serve global customers with automatic currency conversion and regional pricing.
                  </p>
                </Card>

                <Card className="w-80 shrink-0 p-6 border-2 border-indigo-100 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">Config</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Product Mapping</h3>
                  <p className="text-sm text-muted-foreground">
                    Map CMP resources to WHMCS products with usage-based billing support.
                  </p>
                </Card>

                <Card className="w-80 shrink-0 p-6 border-2 border-pink-100 hover:border-pink-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-pink-600" />
                    </div>
                    <span className="px-2 py-0.5 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">API</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">REST API Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Full API access for custom integrations and advanced automation workflows.
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Method Cards */}
        <div className="container mx-auto max-w-4xl mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50/50 to-background">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Recommended</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Direct API Integration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Native integration module with real-time sync and full feature support.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </Card>

            <Card className="p-6 border-2 border-border hover:border-purple-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Advanced</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Webhook Integration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Event-based integration for custom workflows and specific automation needs.
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="https://docs-admin.stackbill.com" target="_blank">View API Docs</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* What is WHMCS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
                About the Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                What is WHMCS?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                WHMCS (Web Host Manager Complete Solution) is the leading web hosting billing and automation platform 
                used by thousands of businesses worldwide. It provides comprehensive tools for billing, 
                support ticketing, domain management, and client management.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By integrating WHMCS with StackBill, you can leverage its battle-tested billing infrastructure 
                while maintaining the powerful cloud management capabilities of StackBill CMP.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <Image
                  src="/images/whmcs-billing-sync.jpg"
                  alt="WHMCS Billing Synchronization"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Key Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What Can You Do with StackBill + WHMCS?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The integration enables seamless billing operations, keeping your business running smoothly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Integration Capabilities
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Comprehensive features for complete billing automation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-blue-100">
                      <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section - Interactive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Settings className="w-3.5 h-3.5" />
              Prerequisites
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What are the requirements?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ensure your environment meets these requirements before setting up the integration
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {requirements.map((req, index) => {
              const colorClasses = {
                blue: {
                  bg: "bg-blue-50 group-hover:bg-blue-100",
                  icon: "text-blue-600",
                  border: "border-blue-200 hover:border-blue-400",
                  badge: "bg-blue-600 text-white",
                  glow: "group-hover:shadow-blue-200/50"
                },
                purple: {
                  bg: "bg-purple-50 group-hover:bg-purple-100",
                  icon: "text-purple-600",
                  border: "border-purple-200 hover:border-purple-400",
                  badge: "bg-purple-600 text-white",
                  glow: "group-hover:shadow-purple-200/50"
                },
                green: {
                  bg: "bg-green-50 group-hover:bg-green-100",
                  icon: "text-green-600",
                  border: "border-green-200 hover:border-green-400",
                  badge: "bg-green-600 text-white",
                  glow: "group-hover:shadow-green-200/50"
                },
                amber: {
                  bg: "bg-amber-50 group-hover:bg-amber-100",
                  icon: "text-amber-600",
                  border: "border-amber-200 hover:border-amber-400",
                  badge: "bg-amber-600 text-white",
                  glow: "group-hover:shadow-amber-200/50"
                },
              }
              const colors = colorClasses[req.color as keyof typeof colorClasses]
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-background rounded-2xl p-6 border-2 ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.glow} cursor-pointer overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg viewBox="0 0 100 100" fill="currentColor" className={colors.icon}>
                      <circle cx="80" cy="20" r="40" />
                    </svg>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 transition-colors`}>
                    {req.icon === "server" && <Server className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "crown" && <Sparkles className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "code" && <Code className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "key" && <Key className={`w-7 h-7 ${colors.icon}`} />}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {req.label}
                  </h3>
                  
                  {/* Value Badge */}
                  <div className={`inline-flex items-center px-3 py-1.5 ${colors.badge} rounded-full text-sm font-semibold mb-4`}>
                    {req.value}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {req.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.badge} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              )
            })}
          </div>

          {/* Quick Check */}
          <div className="mt-10 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ready to integrate?</h4>
                  <p className="text-sm text-muted-foreground">Our team can help verify your setup</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6" asChild>
                <Link href="/contact">
                  Contact Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Setup Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              How do you get started?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Enable Integration",
                description: "Navigate to Admin Portal > Config > Feature Configuration > Billing and enable WHMCS Billing.",
              },
              {
                step: "2",
                title: "Configure API",
                description: "Enter your WHMCS API credentials including API Identifier and Secret in the integration settings.",
              },
              {
                step: "3",
                title: "Map Products",
                description: "Create matching products in WHMCS for your StackBill compute, storage, and network offerings.",
              },
              {
                step: "4",
                title: "Test & Go Live",
                description: "Verify the integration with test transactions before enabling for production customers.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-xl p-6 border border-border h-full">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8" asChild>
              <Link href="https://docs-admin.stackbill.com/docs/admin/config-and-settings/cmp-config/feature-configuration/billing#enable-whmcs-billing" target="_blank">
                View Full Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="overflow-hidden border hover:border-blue-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openFaq === index ? "bg-blue-600" : "bg-blue-100"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-all duration-300 ${
                        openFaq === index ? "rotate-180 text-white" : "text-blue-600"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-foreground">Explore Related Integrations</h2>
            <Link
              href="/platform/stackbill/integration"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              Browse all integrations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Payment Gateways",
                description: "Stripe, PayPal, Razorpay and 100+ payment processors",
                href: "/platform/stackbill/integration",
              },
              {
                name: "PowerDNS",
                description: "Offer managed DNS services to your customers",
                href: "/platform/stackbill/integration",
              },
              {
                name: "Helpdesk",
                description: "Integrated support ticketing system",
                href: "/platform/stackbill/integration",
              },
            ].map((integration, index) => (
              <Link
                key={index}
                href={integration.href}
                className="group bg-background rounded-xl p-6 border border-border hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                <span className="text-sm font-medium text-blue-600 flex items-center gap-1">
                  View integration
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-10 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 border-0 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Integrate WHMCS?
              </h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Get started with StackBill + WHMCS integration today and streamline your billing operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8"
                  asChild
                >
                  <Link href="/contact">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
                  asChild
                >
                  <Link href="https://docs-admin.stackbill.com" target="_blank">
                    Read Documentation
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
