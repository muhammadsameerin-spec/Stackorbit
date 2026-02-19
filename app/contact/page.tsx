"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Headphones, Globe, FileText, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    designation: "",
    email: "",
    phone: "",
    industry: "",
    companySize: "",
    country: "",
    requirements: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form after success
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        designation: "",
        email: "",
        phone: "",
        industry: "",
        companySize: "",
        country: "",
        requirements: "",
      })
      setSubmitStatus("idle")
    }, 3000)
  }

  const quickLinks = [
    {
      icon: Headphones,
      title: "Support Portal",
      description: "Login to the portal to submit your ticket",
      href: "/support",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Global Locations",
      description: "View our global office locations",
      href: "#locations",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FileText,
      title: "StackOrbit Docs",
      description: "Visit our documentation page",
      href: "/platform/stackbill/docs",
      color: "from-orange-500 to-red-600",
    },
  ]

  const customers = [
    { name: "BRAS Cloud", logo: "/bras-cloud-logo.jpg" },
    { name: "Optidata", logo: "/optidata-logo.jpg" },
    { name: "Teamsun", logo: "/teamsun-logo.jpg" },
    { name: "UST Global", logo: "/ust-global-logo.jpg" },
    { name: "Afranet", logo: "/afranet-logo.jpg" },
    { name: "Coloasia", logo: "/coloasia-logo.jpg" },
    { name: "Datahub", logo: "/datahub-logo.jpg" },
    { name: "KEMS", logo: "/kems-logo.jpg" },
    { name: "Appranix", logo: "/appranix-logo.jpg" },
  ]

  const industries = [
    "Telecom",
    "Government",
    "Colocation",
    "Data Center",
    "Universities",
    "Web / Cloud Hosting Providers",
    "Enterprises",
    "Private Cloud User",
    "Others",
  ]

  const companySizes = [
    "1-10 Employees",
    "11-50 Employees",
    "51-200 Employees",
    "201-500 Employees",
    "501-1,000 Employees",
    "1,001-5,000 Employees",
    "5,001+ Employees",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Talk</h1>
            <p className="text-lg text-gray-600 mb-2">
              To speak to a representative now, call{" "}
              <a href="tel:+18885001070" className="text-primary font-semibold hover:underline">
                (+1 888) 500 1070
              </a>{" "}
              (Toll Free)
            </p>
            <p className="text-gray-600">or fill out the form below</p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4`}
                >
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Customer Logos */}
        <section className="mb-16 overflow-hidden">
          <p className="text-center text-gray-600 mb-8">Join the companies around the world building with StackOrbit</p>
          <div className="relative">
            <div className="flex animate-marquee">
              {[...customers, ...customers].map((customer, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    width={120}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Office Locations */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact StackOrbit</h2>

              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Company Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                      <Input
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder="CTO"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Industry <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                      <Select
                        value={formData.companySize}
                        onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Requirements <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      required
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="Tell us about your cloud infrastructure needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              )}
            </div>

            {/* Office Locations */}
            <div className="space-y-6" id="locations">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>

              {/* India Office */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🇮🇳</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">StackOrbit Private Limited</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span>
                          1136 Jayyseeli Plazaa,
                          <br />
                          Dr. Radhakrishnan road, Gandhipuram,
                          <br />
                          Coimbatore, Tamil Nadu,
                          <br />
                          India - 641012
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href="tel:+18885001070" className="hover:text-primary">
                          +1 888 500 1070 (Toll Free)
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href="mailto:sales@stackorbit.ai" className="hover:text-primary">
                          sales@stackorbit.ai
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* US Office */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">StackOrbit LLC</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span>
                          27475 Pamplona Ln,
                          <br />
                          Novi, MI 48374
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href="tel:+18885001070" className="hover:text-primary">
                          +1 888 500 1070 (Toll Free)
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href="mailto:sales@stackorbit.ai" className="hover:text-primary">
                          sales@stackorbit.ai
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map or Additional Info */}
              <div className="bg-gradient-to-br from-primary/5 to-purple-50 rounded-2xl border border-primary/20 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  Our global support team is available 24/7 to help you with any questions or issues.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/support">
                      <Headphones className="w-4 h-4 mr-2" />
                      Support Portal
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/platform/stackbill/docs">
                      <FileText className="w-4 h-4 mr-2" />
                      Documentation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
