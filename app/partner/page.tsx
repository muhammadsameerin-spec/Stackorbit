"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  TrendingUp,
  Zap,
  Globe,
  Users,
  Code,
  Briefcase,
  ChevronRight,
  Home,
  Lightbulb,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function PartnerPage() {
  const router = useRouter()

  const whyPartner = [
    {
      icon: TrendingUp,
      title: "Grow Revenue Faster",
      description: "Offer Cloud, AI, and Billing services with attractive margins.",
    },
    {
      icon: Globe,
      title: "White-Label Ready",
      description: "Sell under your brand with full customization.",
    },
    {
      icon: Code,
      title: "API-Driven Automation",
      description: "Integrate with existing systems effortlessly.",
    },
    {
      icon: Users,
      title: "24×7 Engineering Support",
      description: "Priority access for partners.",
    },
  ]

  const partnerTiers = [
    {
      tier: "Registered Partner",
      subtitle: "Starter Tier",
      features: ["Basic onboarding", "Standard margin structure", "Access to sales & marketing kits"],
    },
    {
      tier: "Select Partner",
      subtitle: "Growth Tier",
      features: ["Higher margins", "Priority support", "Joint webinars & GTM campaigns", "Training & certification"],
      highlighted: true,
    },
    {
      tier: "Premier Partner",
      subtitle: "Elite Tier",
      features: [
        "Maximum revenue share",
        "Dedicated partner manager",
        "Co-branding opportunities",
        "Early access to features",
        "Priority engineering escalation",
      ],
    },
  ]

  const benefits = [
    "Recurring Revenue Opportunities",
    "Access to AI-powered products (TARS, Anavsan, RecoveryVault)",
    "White-label Cloud Billing Platform",
    "Marketing & Sales Resources",
    "Technical Training & Documentation",
    "Joint GTM Strategy",
    "Partner Success Dashboard",
  ]

  const partnerTypes = [
    {
      icon: Globe,
      name: "Cloud Service Providers (CSPs)",
      tagline: "Scale your cloud offerings globally",
    },
    {
      icon: Briefcase,
      name: "Data Centers",
      tagline: "Monetize your infrastructure",
    },
    {
      icon: Users,
      name: "Hosting and MSPs",
      tagline: "Add managed cloud services",
    },
    {
      icon: Code,
      name: "System Integrators",
      tagline: "Deliver integrated solutions",
    },
    {
      icon: Lightbulb,
      name: "FinOps Consultants",
      tagline: "Help clients optimize costs",
    },
    {
      icon: Zap,
      name: "AI Solution Providers",
      tagline: "Combine AI with cloud",
    },
  ]

  const workflow = [
    {
      step: "1",
      title: "Apply Online",
      description: "Submit your application and business details",
    },
    {
      step: "2",
      title: "Get Approved & Onboarded",
      description: "Our team reviews and prepares your partnership",
    },
    {
      step: "3",
      title: "Access Partner Portal",
      description: "Get resources, tools, and documentation",
    },
    {
      step: "4",
      title: "Start Selling & Scaling",
      description: "Begin offering StackOrbit to your customers",
    },
  ]

  const testimonials = [
    {
      quote: "StackOrbit helped us launch our cloud services 4× faster.",
      author: "CEO, Cloud Provider",
    },
    {
      quote: "The white-label capabilities gave us a complete competitive advantage.",
      author: "Director, Hosting Company",
    },
    {
      quote: "Best partnership experience - their support team is exceptional.",
      author: "VP, System Integrator",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="mt-[112px] px-4 sm:px-6 lg:px-8 py-4 border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Home size={16} className="cursor-pointer hover:text-foreground" onClick={() => router.push("/")} />
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">Partner</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex gap-3 justify-center mb-4 flex-wrap">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium">
                Trusted by Cloud Providers
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium">
                CSPs & MSPs
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium">
                Hosting Companies
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">
              Partner With <span className="text-accent">StackOrbit</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Accelerate your business with Cloud, AI, FinOps and Billing solutions that scale globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Become a Partner <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <Link href="#benefits">View Program Benefits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With StackOrbit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With StackOrbit</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock new revenue streams and accelerate your growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Tiers</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right partnership level for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerTiers.map((tier) => (
              <Card
                key={tier.tier}
                className={`border-border/50 transition-all ${
                  tier.highlighted ? "border-accent bg-accent/5 shadow-lg md:scale-105" : ""
                }`}
              >
                <CardContent className="pt-8">
                  {tier.highlighted && (
                    <div className="mb-4 inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{tier.subtitle}</p>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Becoming a StackOrbit Partner</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4 bg-white rounded-lg p-6 border border-border/50">
                <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-base text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Partner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Can Partner With Us?</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We work with all types of cloud and technology providers
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((type) => {
              const Icon = type.icon
              return (
                <Card key={type.name} className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{type.name}</h3>
                    <p className="text-sm text-muted-foreground">{type.tagline}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Workflow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in 4 Simple Steps</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
                {idx < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-border" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-border/50">
                <CardContent className="pt-8">
                  <p className="text-base text-muted-foreground mb-6 italic leading-relaxed text-pretty">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-sm">– {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Let's Grow Together.</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the fastest-growing ecosystem for Cloud, Billing, and AI innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" asChild>
              <Link href="/contact">
                Apply for Partnership <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/contact">Contact Partner Team</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Have questions?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Contact our Partner Success Team
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
