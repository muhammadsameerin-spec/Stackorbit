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
  Server,
  Shield,
  Zap,
  Settings,
  Globe,
  DollarSign,
  Clock,
  ExternalLink,
  Sparkles,
  Code,
  Key,
  Layers,
  RefreshCw,
  CreditCard,
  Wallet,
  Building2,
  Users,
  BarChart3,
  Lock,
  CheckCircle2,
  Banknote,
  Receipt,
  TrendingUp,
  MapPin,
} from "lucide-react"

export default function PaymentGatewayIntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeRegion, setActiveRegion] = useState("global")

  const paymentGateways = {
    global: [
      {
        name: "PayPal",
        description: "Global online payment system with PayPal balance, linked bank accounts, or cards",
        regions: ["Global"],
        color: "blue",
        features: ["International Payments", "Buyer Protection", "Recurring Billing"],
      },
      {
        name: "Stripe",
        description: "Developer-friendly payment processing with wide payment method support worldwide",
        regions: ["Global"],
        color: "purple",
        features: ["135+ Currencies", "Subscription Billing", "Custom Checkout"],
      },
    ],
    latam: [
      {
        name: "MercadoPago",
        description: "Leading payment gateway in Latin America, popular in Argentina, Mexico, and Brazil",
        regions: ["Argentina", "Mexico", "Brazil"],
        color: "yellow",
        features: ["Digital Wallets", "Installments", "Local Cards"],
      },
      {
        name: "Ebanx",
        description: "Payment processor for Latin American markets with local currency support",
        regions: ["Latin America"],
        color: "blue",
        features: ["Cash Payments", "Bank Transfers", "Local Methods"],
      },
      {
        name: "Mobbex",
        description: "Installment payments and local payment methods for Latin American countries",
        regions: ["Latin America"],
        color: "green",
        features: ["Installment Plans", "QR Payments", "Local Processing"],
      },
      {
        name: "Acqio",
        description: "Brazilian payment processing solution focused on local transactions",
        regions: ["Brazil"],
        color: "teal",
        features: ["PIX Support", "Boleto", "Local Cards"],
      },
    ],
    asia: [
      {
        name: "Razorpay",
        description: "Popular payment gateway in India supporting UPI, cards, and net banking",
        regions: ["India"],
        color: "blue",
        features: ["UPI Payments", "Net Banking", "EMI Options"],
      },
      {
        name: "Xendit",
        description: "Southeast Asia payment gateway for Indonesia and Philippines",
        regions: ["Indonesia", "Philippines"],
        color: "cyan",
        features: ["E-Wallets", "Bank Transfers", "Retail Outlets"],
      },
    ],
    emerging: [
      {
        name: "PayU",
        description: "Payment platform for emerging markets across Latin America, Europe, Africa, and India",
        regions: ["Emerging Markets"],
        color: "green",
        features: ["Multi-Region", "Local Methods", "Cross-Border"],
      },
    ],
    enterprise: [
      {
        name: "Manual Payment",
        description: "Offline payment recording for bank transfers and custom payment arrangements",
        regions: ["All Regions"],
        color: "gray",
        features: ["Bank Transfers", "Wire Payments", "Custom Terms"],
      },
      {
        name: "OnePG",
        description: "Flexible and customizable payment solution for tailored business requirements",
        regions: ["Custom"],
        color: "indigo",
        features: ["Custom Workflows", "API Integration", "White Label"],
      },
    ],
  }

  const allGateways = [
    ...paymentGateways.global,
    ...paymentGateways.latam,
    ...paymentGateways.asia,
    ...paymentGateways.emerging,
    ...paymentGateways.enterprise,
  ]

  const platformFeatures = [
    {
      icon: Globe,
      title: "11+ Payment Gateways",
      description: "Pre-integrated global and regional payment processors",
    },
    {
      icon: CreditCard,
      title: "Cards & Digital Wallets",
      description: "Accept Visa, Mastercard, AMEX, PayPal, and local wallets",
    },
    {
      icon: Banknote,
      title: "Bank Transfers & UPI",
      description: "Direct bank payments, UPI, PIX, and local methods",
    },
    {
      icon: RefreshCw,
      title: "Recurring Billing",
      description: "Automated subscription and recurring payment collection",
    },
    {
      icon: Receipt,
      title: "Auto Invoice Generation",
      description: "Automatic invoice creation and payment reconciliation",
    },
    {
      icon: Shield,
      title: "PCI DSS Compliant",
      description: "Secure payment processing with industry compliance",
    },
    {
      icon: DollarSign,
      title: "Multi-Currency Support",
      description: "Accept payments in 135+ currencies worldwide",
    },
    {
      icon: TrendingUp,
      title: "Usage-Based Billing",
      description: "Metered billing for cloud resource consumption",
    },
    {
      icon: Users,
      title: "Customer Wallet",
      description: "Pre-paid wallet system for customer credits",
    },
    {
      icon: BarChart3,
      title: "Payment Analytics",
      description: "Real-time payment tracking and revenue reports",
    },
    {
      icon: Lock,
      title: "Fraud Detection",
      description: "Built-in fraud screening and payment validation",
    },
    {
      icon: Settings,
      title: "Easy Configuration",
      description: "Simple admin portal setup for any gateway",
    },
  ]

  const features = [
    {
      icon: Globe,
      title: "Global Payment Coverage",
      description: "Accept payments from customers worldwide with 11+ pre-integrated payment gateways covering all major markets and regions.",
    },
    {
      icon: DollarSign,
      title: "Maximize Revenue Collection",
      description: "Reduce payment failures and increase conversion rates by offering customers their preferred local payment methods.",
    },
    {
      icon: RefreshCw,
      title: "Automated Billing Cycles",
      description: "Set up recurring billing, automatic renewals, and subscription management with seamless payment collection.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "PCI DSS compliant payment processing with built-in fraud detection, ensuring secure transactions for your customers.",
    },
    {
      icon: Receipt,
      title: "Unified Invoicing",
      description: "Automatic invoice generation, payment reconciliation, and financial reporting across all payment methods.",
    },
    {
      icon: Wallet,
      title: "Customer Wallet System",
      description: "Enable pre-paid customer wallets for credits, allowing flexible payment options and improved cash flow.",
    },
  ]

  const requirements = [
    {
      label: "Gateway Account",
      value: "Active Merchant Account",
      icon: "server",
      color: "purple",
      description: "Active merchant account with your chosen payment gateway provider",
    },
    {
      label: "StackBill Edition",
      value: "All Editions",
      icon: "crown",
      color: "blue",
      description: "Payment gateway integration available on all StackBill editions",
    },
    {
      label: "API Credentials",
      value: "API Keys Required",
      icon: "key",
      color: "green",
      description: "API keys and secrets from your payment gateway provider dashboard",
    },
    {
      label: "Configuration",
      value: "Admin Portal Setup",
      icon: "settings",
      color: "amber",
      description: "Configure gateway settings through StackBill admin portal",
    },
  ]

  const faqs = [
    {
      question: "How many payment gateways can I enable simultaneously?",
      answer: "You can enable multiple payment gateways simultaneously, allowing your customers to choose their preferred payment method. StackBill supports enabling all 11+ gateways at once, giving your customers maximum flexibility based on their region and preferences.",
    },
    {
      question: "How does recurring billing work with payment gateways?",
      answer: "StackBill automatically handles recurring billing cycles. When a subscription is due, the system attempts to charge the customer's saved payment method. If payment fails, automatic retry logic kicks in with configurable reminder emails.",
    },
    {
      question: "Can customers pay with different methods for different invoices?",
      answer: "Yes, customers can choose different payment methods for each transaction. They can pay one invoice with PayPal, another with a credit card via Stripe, and use local methods like UPI or PIX for regional payments.",
    },
    {
      question: "How are payment gateway fees handled?",
      answer: "Payment gateway fees are typically charged by the gateway provider directly to your merchant account. StackBill provides detailed reporting on all transactions so you can track fees and reconcile payments easily.",
    },
    {
      question: "Is there support for refunds and chargebacks?",
      answer: "Yes, StackBill supports processing refunds through the admin portal. The refund is initiated through the original payment gateway. Chargeback notifications from gateways can be configured to trigger alerts and account actions.",
    },
    {
      question: "Can I offer installment payments to customers?",
      answer: "Yes, with gateways like MercadoPago, Mobbex, and Razorpay that support installments, you can offer customers the option to pay in installments. The configuration is handled at the gateway level and reflected in StackBill checkout.",
    },
  ]

  const useCases = [
    {
      title: "Global Cloud Providers",
      description: "Serve customers worldwide with localized payment options. Accept payments in any currency and offer region-specific methods.",
      icon: Globe,
      color: "blue",
    },
    {
      title: "Regional MSPs",
      description: "Maximize payment collection in your region with local payment methods that customers trust and prefer.",
      icon: MapPin,
      color: "purple",
    },
    {
      title: "Enterprise Customers",
      description: "Offer bank transfers, PO-based payments, and custom billing terms for enterprise and government clients.",
      icon: Building2,
      color: "green",
    },
    {
      title: "Subscription Businesses",
      description: "Automate recurring revenue collection with subscription billing, automatic renewals, and payment retry logic.",
      icon: RefreshCw,
      color: "amber",
    },
  ]

  const regions = [
    { id: "global", label: "Global", count: 2 },
    { id: "latam", label: "Latin America", count: 4 },
    { id: "asia", label: "Asia Pacific", count: 2 },
    { id: "emerging", label: "Emerging Markets", count: 1 },
    { id: "enterprise", label: "Enterprise", count: 2 },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200 hover:border-blue-400" },
      purple: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200 hover:border-purple-400" },
      green: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200 hover:border-green-400" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200 hover:border-yellow-400" },
      cyan: { bg: "bg-cyan-100", text: "text-cyan-700", border: "border-cyan-200 hover:border-cyan-400" },
      teal: { bg: "bg-teal-100", text: "text-teal-700", border: "border-teal-200 hover:border-teal-400" },
      gray: { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200 hover:border-gray-400" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-700", border: "border-indigo-200 hover:border-indigo-400" },
    }
    return colors[color] || colors.blue
  }

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
                Payment Gateway<br />Integration
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Accept payments worldwide with 11+ pre-integrated gateways including PayPal, Stripe, Razorpay, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 rounded-full"
                  asChild
                >
                  <Link href="/contact">
                    Book a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 rounded-full bg-transparent"
                  asChild
                >
                  <Link href="https://docs-admin.stackbill.com/docs/admin/config-and-settings/payment-gatewat-config/all-payment-gateway-configuration" target="_blank">
                    View Docs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* Feature highlights */}
              <div className="flex gap-8 pt-8 border-t border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-white">11+</div>
                  <div className="text-xs text-slate-400">Gateways</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">135+</div>
                  <div className="text-xs text-slate-400">Currencies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">PCI DSS</div>
                  <div className="text-xs text-slate-400">Compliant</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Light Panel with Image */}
          <div className="bg-indigo-50 px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex items-center justify-center">
            <div className="relative">
              {/* Soft circular glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-indigo-100 rounded-full" />
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
                  <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Capabilities Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-background overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Layers className="w-3.5 h-3.5" />
              Platform Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Complete Payment Management
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to collect payments, manage subscriptions, and optimize revenue
            </p>
          </div>
        </div>

        {/* Scrolling Carousel Container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* First Row - Scrolling Left */}
          <div className="flex gap-5 mb-5 animate-scroll-left">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-5 shrink-0">
                {platformFeatures.slice(0, 6).map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-purple-100 hover:border-purple-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="flex gap-5 animate-scroll-right">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-5 shrink-0">
                {platformFeatures.slice(6, 12).map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-pink-100 hover:border-pink-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-pink-100 group-hover:bg-pink-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-pink-600" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Gateways by Region */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Globe className="w-3.5 h-3.5" />
              Supported Gateways
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              11+ Payment Gateways by Region
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Offer your customers their preferred payment methods based on their location
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeRegion === region.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white text-foreground border border-border hover:border-purple-300"
                }`}
              >
                {region.label}
                <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                  activeRegion === region.id ? "bg-white/20" : "bg-purple-100 text-purple-700"
                }`}>
                  {region.count}
                </span>
              </button>
            ))}
          </div>

          {/* Gateway Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentGateways[activeRegion as keyof typeof paymentGateways]?.map((gateway, index) => {
              const colors = getColorClasses(gateway.color)
              return (
                <Card
                  key={index}
                  className={`p-6 border-2 ${colors.border} hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                      <CreditCard className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{gateway.name}</h3>
                      <div className="flex flex-wrap gap-1">
                        {gateway.regions.map((region, idx) => (
                          <span key={idx} className="text-xs text-muted-foreground">
                            {region}{idx < gateway.regions.length - 1 ? "," : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{gateway.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {gateway.features.map((feature, idx) => (
                      <span key={idx} className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Button variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="https://docs-admin.stackbill.com/docs/admin/config-and-settings/payment-gatewat-config/all-payment-gateway-configuration" target="_blank">
                View All Gateway Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* B2B Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <DollarSign className="w-3.5 h-3.5" />
              For Service Providers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Why Multiple Payment Gateways Matter
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Increase conversion rates and reduce failed payments by offering local payment methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-border hover:border-green-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Coverage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-950 to-pink-950 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                <Globe className="w-3.5 h-3.5" />
                Global Payment Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                Accept Payments from Anywhere in the World
              </h2>
              <p className="text-purple-100/80 mb-8 leading-relaxed">
                With support for 135+ currencies and regional payment methods across Latin America, Asia Pacific, 
                Europe, Africa, and North America, you can serve customers globally without payment friction.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Regional Payment Leaders</h4>
                    <p className="text-sm text-purple-100/70">Razorpay for India, MercadoPago for LATAM, Xendit for Southeast Asia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Local Payment Methods</h4>
                    <p className="text-sm text-purple-100/70">UPI, PIX, Boleto, E-Wallets, Bank Transfers, Cash Payments</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Global Card Networks</h4>
                    <p className="text-sm text-purple-100/70">Visa, Mastercard, AMEX, Discover via PayPal and Stripe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/payment-global-coverage.jpg"
                  alt="Global Payment Coverage"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">11+</div>
                  <div className="text-xs text-purple-200">Payment Gateways</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">135+</div>
                  <div className="text-xs text-purple-200">Currencies</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs text-purple-200">Payment Methods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Users className="w-3.5 h-3.5" />
              Use Cases
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who Benefits from Payment Gateway Integration?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              const colorMap: Record<string, { bg: string; text: string; border: string }> = {
                blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200 hover:border-blue-400" },
                purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200 hover:border-purple-400" },
                green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200 hover:border-green-400" },
                amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200 hover:border-amber-400" },
              }
              const colors = colorMap[useCase.color]
              return (
                <Card
                  key={index}
                  className={`p-6 border-2 ${colors.border} hover:shadow-xl transition-all duration-300 group text-center`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Settings className="w-3.5 h-3.5" />
              Prerequisites
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What You Need to Get Started
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Simple setup process to enable payment gateways in your StackBill portal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {requirements.map((req, index) => {
              const colorClasses: Record<string, { bg: string; icon: string; border: string; badge: string; glow: string }> = {
                purple: {
                  bg: "bg-purple-50 group-hover:bg-purple-100",
                  icon: "text-purple-600",
                  border: "border-purple-200 hover:border-purple-400",
                  badge: "bg-purple-600 text-white",
                  glow: "group-hover:shadow-purple-200/50"
                },
                blue: {
                  bg: "bg-blue-50 group-hover:bg-blue-100",
                  icon: "text-blue-600",
                  border: "border-blue-200 hover:border-blue-400",
                  badge: "bg-blue-600 text-white",
                  glow: "group-hover:shadow-blue-200/50"
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
              const colors = colorClasses[req.color]
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-background rounded-2xl p-6 border-2 ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.glow} cursor-pointer overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg viewBox="0 0 100 100" fill="currentColor" className={colors.icon}>
                      <circle cx="80" cy="20" r="40" />
                    </svg>
                  </div>
                  
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 transition-colors`}>
                    {req.icon === "server" && <Server className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "crown" && <Sparkles className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "key" && <Key className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "settings" && <Settings className={`w-7 h-7 ${colors.icon}`} />}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {req.label}
                  </h3>
                  
                  <div className={`inline-flex items-center px-3 py-1.5 ${colors.badge} rounded-full text-sm font-semibold mb-4`}>
                    {req.value}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {req.description}
                  </p>
                  
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.badge} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              )
            })}
          </div>

          {/* Quick Check */}
          <div className="mt-10 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ready to accept payments globally?</h4>
                  <p className="text-sm text-muted-foreground">Our team can help you set up payment gateways</p>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6" asChild>
                <Link href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Start Accepting Payments Globally
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Enable 11+ payment gateways and offer your customers their preferred payment methods. 
            Increase conversion rates and expand your global reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8" asChild>
              <Link href="/contact">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 border-white/30 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="https://docs-admin.stackbill.com" target="_blank">
                View Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
