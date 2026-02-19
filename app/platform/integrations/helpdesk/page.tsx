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
  Settings,
  Globe,
  DollarSign,
  ExternalLink,
  Sparkles,
  Code,
  Key,
  Layers,
  RefreshCw,
  Users,
  BarChart3,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Search,
  FolderTree,
  FileText,
  Headphones,
  Clock,
  TrendingDown,
  Shield,
  Zap,
  Layout,
  Tag,
  Link2,
  List,
  Menu,
  Edit3,
  Trash2,
  PlusCircle,
  CheckCircle,
  Building2,
  UserCheck,
  HeartHandshake,
} from "lucide-react"

export default function HelpdeskIntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("categories")

  const features = [
    {
      icon: Users,
      title: "Self-Service Support Portal",
      description:
        "Empower your B2B customers with a comprehensive self-service portal where they can find answers, tutorials, and guides without contacting support.",
    },
    {
      icon: TrendingDown,
      title: "Reduce Support Tickets",
      description:
        "Minimize support workload by up to 60% with well-organized FAQs, troubleshooting guides, and searchable knowledge base articles.",
    },
    {
      icon: FolderTree,
      title: "Hierarchical Organization",
      description:
        "Organize content with Categories, Subcategories, and Resource sections for intuitive navigation and quick access to relevant information.",
    },
    {
      icon: Search,
      title: "Powerful Search",
      description:
        "Enable customers to quickly find solutions with full-text search across all help center content, articles, and FAQs.",
    },
    {
      icon: HeartHandshake,
      title: "Improve Customer Satisfaction",
      description:
        "Deliver instant answers 24/7. Customers get faster resolutions leading to higher satisfaction scores and reduced churn.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Track popular articles, search queries, and support patterns to continuously improve your knowledge base content.",
    },
  ]

  const platformFeatures = [
    {
      icon: FolderTree,
      title: "Category Management",
      description: "Create and organize top-level categories with custom images",
    },
    {
      icon: Layers,
      title: "Subcategory Support",
      description: "Nest subcategories under categories for detailed organization",
    },
    {
      icon: FileText,
      title: "Resource Categories",
      description: "Group resources in LIST or MENU format for flexible display",
    },
    {
      icon: Link2,
      title: "Custom URL Routing",
      description: "Define custom URLs for each subcategory and resource",
    },
    {
      icon: Search,
      title: "Full-Text Search",
      description: "Searchable content across all help center articles",
    },
    {
      icon: Layout,
      title: "Portal Integration",
      description: "Seamlessly integrated into the customer user portal",
    },
    {
      icon: Edit3,
      title: "Easy Content Editing",
      description: "Update articles and categories with simple admin interface",
    },
    {
      icon: Tag,
      title: "Resource Grouping",
      description: "Group related subcategories together for better navigation",
    },
    {
      icon: Globe,
      title: "Multi-Language Ready",
      description: "Support for multiple languages in help center content",
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Control which content is visible to different customer tiers",
    },
    {
      icon: RefreshCw,
      title: "Real-Time Updates",
      description: "Changes reflect immediately in the user portal",
    },
    {
      icon: BarChart3,
      title: "Usage Analytics",
      description: "Track article views and search patterns",
    },
  ]

  const requirements = [
    {
      label: "StackBill Version",
      value: "3.0+",
      icon: "server",
      color: "orange",
      description: "StackBill CMP version 3.0 or higher with Help Center module enabled",
    },
    {
      label: "StackBill Edition",
      value: "All Editions",
      icon: "crown",
      color: "purple",
      description: "Help Center is available on Starter, Premium, and Enterprise plans",
    },
    {
      label: "Content Format",
      value: "Rich Text / HTML",
      icon: "code",
      color: "blue",
      description: "Support for rich text formatting, images, and embedded media",
    },
    {
      label: "Admin Access",
      value: "Help Module Permission",
      icon: "key",
      color: "green",
      description: "Admin users need Help module permission to manage content",
    },
  ]

  const faqs = [
    {
      question: "How do I create a new help center category?",
      answer:
        "Navigate to Admin Portal > Help > Category tab and click 'Add Category'. Enter a descriptive name (e.g., 'Getting Started', 'Billing & Payments') and upload a representative image. Click 'Add' to save, and the category will immediately appear in the user portal.",
    },
    {
      question: "What's the difference between Categories, Subcategories, and Resources?",
      answer:
        "Categories are top-level groupings (e.g., 'Billing'). Subcategories sit under categories for more specific topics (e.g., 'Payment Methods'). Resource Categories and Subcategories provide even more granular organization with LIST or MENU display formats for detailed content.",
    },
    {
      question: "Can customers search across all help content?",
      answer:
        "Yes, the Help Center includes full-text search functionality. Customers can search across all categories, subcategories, and articles to quickly find relevant information without browsing through the hierarchy.",
    },
    {
      question: "How do I organize resources in LIST vs MENU format?",
      answer:
        "LIST format displays resources in a simple scannable list - ideal for FAQs and quick references. MENU format provides a structured navigation menu - better for detailed documentation with multiple sections. Choose based on your content type.",
    },
    {
      question: "Can I customize URLs for help center content?",
      answer:
        "Yes, when creating subcategories and resources, you can define custom URLs. This allows you to link to specific pages, external documentation, or video tutorials while maintaining organized navigation.",
    },
    {
      question: "How does the Help Center reduce support tickets?",
      answer:
        "By providing 24/7 self-service access to FAQs, guides, and troubleshooting articles, customers can resolve common issues independently. Well-organized content with good search typically reduces support tickets by 40-60%.",
    },
  ]

  const useCases = [
    {
      title: "Cloud Service Providers",
      description: "Provide comprehensive documentation for VM management, networking, storage, and billing to reduce support load.",
      icon: Building2,
      color: "orange",
    },
    {
      title: "MSPs & Resellers",
      description: "Create branded help centers for your customers with customized content tailored to your service offerings.",
      icon: Users,
      color: "purple",
    },
    {
      title: "Enterprise IT",
      description: "Build internal knowledge bases for IT self-service, reducing helpdesk tickets and improving employee productivity.",
      icon: Server,
      color: "blue",
    },
    {
      title: "SaaS Platforms",
      description: "Onboard users faster with getting-started guides, feature tutorials, and best practices documentation.",
      icon: Zap,
      color: "green",
    },
  ]

  const contentStructure = [
    {
      level: "Categories",
      description: "Top-level groupings like 'Getting Started', 'Billing', 'Troubleshooting'",
      icon: FolderTree,
      color: "orange",
      features: ["Custom images", "Descriptive names", "Auto-publish to portal"],
    },
    {
      level: "Subcategories",
      description: "Nested topics under categories with custom URL routing",
      icon: Layers,
      color: "amber",
      features: ["Parent category link", "Custom URLs", "Flexible navigation"],
    },
    {
      level: "Resource Categories",
      description: "Organized resources in LIST or MENU display format",
      icon: List,
      color: "yellow",
      features: ["LIST or MENU format", "Title & description", "Grouped content"],
    },
    {
      level: "Resource Subcategories",
      description: "Granular resource organization with group assignments",
      icon: FileText,
      color: "lime",
      features: ["URL routing", "Group names", "Detailed organization"],
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
                Built-in Help Center
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Reduce support tickets with a self-service Help Center. Organize FAQs, guides, and tutorials in a searchable knowledge base.
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
                  <Link href="https://docs-admin.stackbill.com/docs/admin/help/helpcenter-configuration" target="_blank">
                    View Docs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* Feature highlights */}
              <div className="flex gap-8 pt-8 border-t border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-white">-60%</div>
                  <div className="text-xs text-slate-400">Support Tickets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-slate-400">Self-Service</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Search</div>
                  <div className="text-xs text-slate-400">Full-Text</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Light Panel with Image */}
          <div className="bg-orange-50 px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex items-center justify-center">
            <div className="relative">
              {/* Soft circular glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-orange-100 rounded-full" />
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
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Headphones className="w-10 h-10 text-white" />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Layers className="w-3.5 h-3.5" />
              Platform Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Comprehensive Help Center Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and manage a world-class customer self-service portal
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
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-orange-100 hover:border-orange-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-orange-600" />
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
                    <Card key={index} className="w-72 shrink-0 p-5 border-2 border-amber-100 hover:border-amber-400 hover:shadow-lg transition-all duration-300 bg-white group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-100 group-hover:bg-amber-200 rounded-lg flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-amber-600" />
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

      {/* Content Structure Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <FolderTree className="w-3.5 h-3.5" />
              Content Organization
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Hierarchical Content Structure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Organize your help content in a logical hierarchy for intuitive customer navigation
            </p>
          </div>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-amber-300 to-lime-300 hidden lg:block" />
            
            <div className="space-y-8">
              {contentStructure.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0
                return (
                  <div key={index} className={`flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <Card className={`p-6 border-2 border-${item.color}-200 hover:border-${item.color}-400 hover:shadow-xl transition-all duration-300 inline-block w-full lg:w-auto lg:max-w-md`}>
                        <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                          <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-6 h-6 text-${item.color}-600`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">{item.level}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                            <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                              {item.features.map((feature, fIndex) => (
                                <span key={fIndex} className="px-2 py-1 bg-muted text-xs font-medium rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                    
                    {/* Center dot */}
                    <div className="hidden lg:flex w-8 h-8 bg-white rounded-full border-4 border-orange-300 flex-shrink-0 z-10" />
                    
                    <div className="flex-1 hidden lg:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* B2B Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <DollarSign className="w-3.5 h-3.5" />
              For Service Providers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Why Build a Self-Service Help Center?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reduce operational costs while improving customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-border hover:border-purple-300 hover:shadow-xl transition-all duration-300 group bg-white"
                >
                  <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Self-Service Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-orange-950 to-amber-950 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                <UserCheck className="w-3.5 h-3.5" />
                Customer Empowerment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                24/7 Self-Service Excellence
              </h2>
              <p className="text-orange-100/80 mb-8 leading-relaxed">
                Your customers expect instant answers. A well-organized Help Center empowers them to find solutions 
                independently, reducing wait times and improving satisfaction scores.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Instant Resolution</h4>
                    <p className="text-sm text-orange-100/70">Customers find answers in seconds, not hours. No waiting for support responses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Reduced Support Costs</h4>
                    <p className="text-sm text-orange-100/70">Cut support ticket volume by 40-60% with comprehensive self-service content.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Build Trust</h4>
                    <p className="text-sm text-orange-100/70">Demonstrate commitment to customer success with readily available resources.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl p-8 border border-white/10">
                <Image
                  src="/images/helpdesk-self-service.jpg"
                  alt="Self-Service Help Center"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Stats overlay */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <p className="text-2xl font-bold text-orange-400">60%</p>
                    <p className="text-xs text-orange-100/70">Less Tickets</p>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <p className="text-2xl font-bold text-amber-400">24/7</p>
                    <p className="text-xs text-orange-100/70">Availability</p>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-400">95%</p>
                    <p className="text-xs text-orange-100/70">Satisfaction</p>
                  </div>
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Users className="w-3.5 h-3.5" />
              Use Cases
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who Benefits from Help Center?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Organizations of all sizes leverage self-service support
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              const colorClasses = {
                orange: "border-orange-200 hover:border-orange-400 bg-orange-50",
                purple: "border-purple-200 hover:border-purple-400 bg-purple-50",
                blue: "border-blue-200 hover:border-blue-400 bg-blue-50",
                green: "border-green-200 hover:border-green-400 bg-green-50",
              }
              const iconColors = {
                orange: "bg-orange-100 text-orange-600",
                purple: "bg-purple-100 text-purple-600",
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
              }
              return (
                <Card
                  key={index}
                  className={`p-6 border-2 ${colorClasses[useCase.color as keyof typeof colorClasses]} hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 ${iconColors[useCase.color as keyof typeof iconColors]} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Settings className="w-3.5 h-3.5" />
              Prerequisites
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What are the requirements?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Simple requirements to get started with Help Center
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {requirements.map((req, index) => {
              const colorClasses = {
                orange: {
                  bg: "bg-orange-50 group-hover:bg-orange-100",
                  icon: "text-orange-600",
                  border: "border-orange-200 hover:border-orange-400",
                  badge: "bg-orange-600 text-white",
                  glow: "group-hover:shadow-orange-200/50"
                },
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
              }
              const colors = colorClasses[req.color as keyof typeof colorClasses]
              
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
                    {req.icon === "code" && <Code className={`w-7 h-7 ${colors.icon}`} />}
                    {req.icon === "key" && <Key className={`w-7 h-7 ${colors.icon}`} />}
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
          <div className="mt-10 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ready to build your Help Center?</h4>
                  <p className="text-sm text-muted-foreground">Start organizing your support content today</p>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6" asChild>
                <Link href="/contact">
                  Get Started
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
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 ${
                  openFaq === index ? "border-orange-300 shadow-lg" : "border-border hover:border-orange-200"
                }`}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Empower Customer Self-Service?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Build a comprehensive Help Center that reduces support tickets and improves customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-700 hover:bg-orange-50 rounded-full px-8 font-semibold"
              asChild
            >
              <Link href="/contact">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
              asChild
            >
              <Link href="https://docs-admin.stackbill.com/docs/admin/help/helpcenter-configuration" target="_blank">
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
