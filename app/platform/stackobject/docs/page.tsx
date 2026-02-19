"use client"

import { StackObjectNavigation } from "@/components/stackobject-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ArrowRight, Book, FileText, Code, Terminal } from "lucide-react"

export default function StackObjectDocsPage() {
  const docSections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Quick start guides and initial setup instructions",
      links: [
        { label: "Introduction to StackObject", href: "#" },
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
        { label: "Object Storage Operations", href: "#" },
        { label: "Block Storage Management", href: "#" },
        { label: "File Storage Setup", href: "#" },
        { label: "Access Control & Security", href: "#" },
      ]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation and examples",
      links: [
        { label: "S3 API Reference", href: "#" },
        { label: "REST API Endpoints", href: "#" },
        { label: "SDK Documentation", href: "#" },
        { label: "Code Examples", href: "#" },
      ]
    },
    {
      icon: Terminal,
      title: "Administration",
      description: "System administration and maintenance guides",
      links: [
        { label: "Cluster Management", href: "#" },
        { label: "Performance Tuning", href: "#" },
        { label: "Backup & Recovery", href: "#" },
        { label: "Troubleshooting", href: "#" },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StackObjectNavigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full mb-6">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Documentation
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 leading-tight">
            StackObject <span className="text-blue-700">Documentation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Everything you need to deploy, configure, and manage your StackObject storage infrastructure.
          </p>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 gap-8">
            {docSections.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href}
                          className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center gap-1"
                        >
                          {link.label}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* External Docs Link */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Need More Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Visit our comprehensive documentation portal for detailed guides, tutorials, and API references.
          </p>
          <Button
            size="lg"
            className="bg-blue-700 text-white hover:bg-blue-800 rounded-full px-8"
            asChild
          >
            <Link href="https://docs.stackbill.com" target="_blank" rel="noopener noreferrer">
              Visit Documentation Portal
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
