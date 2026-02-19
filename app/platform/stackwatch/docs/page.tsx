"use client"

import { StackWatchNavigation } from "@/components/stackwatch-navigation"
import { Footer } from "@/components/footer"
import { TARSChatWidget } from "@/components/tars-chat-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowRight, 
  Book, 
  Code, 
  Download,
  ExternalLink,
  FileText,
  Play,
  Rocket,
  Settings,
  Terminal,
  Video,
  Search,
  ChevronRight
} from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function StackWatchDocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started")
  const searchParams = useSearchParams()

  const docSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Rocket,
      description: "Quick start guide to set up StackWatch monitoring",
      articles: [
        { title: "Installation Guide", href: "#installation" },
        { title: "Initial Configuration", href: "#configuration" },
        { title: "Connecting Your Infrastructure", href: "#connecting" },
        { title: "First Dashboard Setup", href: "#dashboard" },
      ]
    },
    {
      id: "configuration",
      title: "Configuration",
      icon: Settings,
      description: "Detailed configuration options and settings",
      articles: [
        { title: "Agent Configuration", href: "#agent-config" },
        { title: "Metric Collection Settings", href: "#metric-settings" },
        { title: "Alert Rules & Thresholds", href: "#alert-rules" },
        { title: "Integration Setup", href: "#integrations" },
      ]
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: Code,
      description: "Complete API documentation for developers",
      articles: [
        { title: "Authentication", href: "#api-auth" },
        { title: "Metrics API", href: "#metrics-api" },
        { title: "Alerts API", href: "#alerts-api" },
        { title: "Webhooks", href: "#webhooks" },
      ]
    },
    {
      id: "tutorials",
      title: "Tutorials",
      icon: Video,
      description: "Step-by-step guides and video walkthroughs",
      articles: [
        { title: "Setting Up Custom Dashboards", href: "#custom-dashboards" },
        { title: "Creating Alert Workflows", href: "#alert-workflows" },
        { title: "Capacity Planning Guide", href: "#capacity-planning" },
        { title: "Multi-Cloud Monitoring", href: "#multi-cloud" },
      ]
    },
  ]

  const quickLinks = [
    {
      icon: Download,
      title: "Download Agent",
      description: "Get the latest StackWatch monitoring agent",
      href: "#download"
    },
    {
      icon: Terminal,
      title: "CLI Reference",
      description: "Command line interface documentation",
      href: "#cli"
    },
    {
      icon: FileText,
      title: "Release Notes",
      description: "Latest updates and changelog",
      href: "#releases"
    },
    {
      icon: ExternalLink,
      title: "Community Forum",
      description: "Join the StackWatch community",
      href: "#community"
    },
  ]

  const videoTutorials = [
    {
      title: "StackWatch Quick Start",
      duration: "5:32",
      thumbnail: "Getting started with StackWatch monitoring"
    },
    {
      title: "Setting Up Alerts",
      duration: "8:15",
      thumbnail: "Configure intelligent alerting rules"
    },
    {
      title: "Custom Dashboards",
      duration: "12:45",
      thumbnail: "Build powerful visualization dashboards"
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StackWatchNavigation />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-100/50 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-700/10 rounded-full mb-6">
              <Book className="w-4 h-4 text-emerald-800" />
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Documentation
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-tight">
              StackWatch <span className="text-emerald-800">Documentation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything you need to set up, configure, and get the most out of StackWatch cloud monitoring.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border/50 bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/50 hover:border-emerald-700/30 hover:bg-emerald-100/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-700/10 flex items-center justify-center group-hover:bg-emerald-700/20 transition-colors">
                    <Icon className="text-emerald-800" size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{link.title}</h3>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Documentation Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:sticky lg:top-20 lg:h-fit">
              <nav className="space-y-2">
                {docSections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                        activeSection === section.id
                          ? "bg-emerald-700/10 text-emerald-900 border border-emerald-700/20"
                          : "hover:bg-gray-100 text-muted-foreground"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium text-sm">{section.title}</span>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Content Area */}
            <div>
              {docSections.map((section) => (
                <div
                  key={section.id}
                  className={activeSection === section.id ? "block" : "hidden"}
                >
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{section.title}</h2>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.articles.map((article) => (
                      <Card key={article.title} className="border-border/50 hover:border-emerald-700/30 hover:shadow-md transition-all cursor-pointer group">
                        <CardContent className="p-5">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-foreground group-hover:text-emerald-800 transition-colors">
                              {article.title}
                            </h3>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-800 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Video Tutorials</h2>
            <p className="text-muted-foreground">Learn StackWatch through step-by-step video guides</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTutorials.map((video) => (
              <Card key={video.title} className="border-border/50 overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-emerald-700 to-green-800 relative flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-medium text-white bg-black/50 px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.thumbnail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-border/50 bg-gradient-to-br from-emerald-100/50 to-green-100/30 overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                Need Help?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the most out of StackWatch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-emerald-800 text-white hover:bg-emerald-900 rounded-full px-6"
                  asChild
                >
                  <Link href="/contact">
                    Contact Support <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-800/20 hover:bg-emerald-800/5 rounded-full px-6 bg-transparent"
                  asChild
                >
                  <Link href="#community">Join Community</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <TARSChatWidget />
    </div>
  )
}
