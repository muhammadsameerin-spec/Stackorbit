"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, Users, Globe, Shield, Rocket } from "lucide-react"

export default function CompanyPage() {
  const values = [
    {
      icon: Target,
      title: "Customer-First Innovation",
      description: "We build products that solve real problems for cloud service providers and enterprises.",
    },
    {
      icon: Shield,
      title: "Open Source Commitment",
      description: "We believe in sovereignty, transparency, and the power of open-source technology.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Empowering cloud providers worldwide to deliver better services to their customers.",
    },
  ]

  const team = [
    {
      name: "Leadership Team",
      role: "Guiding StackOrbit's Vision",
      description: "Experienced leaders from cloud infrastructure, enterprise software, and AI domains.",
    },
    {
      name: "Engineering",
      role: "Building the Future",
      description: "World-class engineers passionate about cloud technology and automation.",
    },
    {
      name: "Customer Success",
      role: "Your Partners in Growth",
      description: "Dedicated professionals ensuring your cloud business thrives with StackOrbit.",
    },
  ]

  const milestones = [
    { year: "2012", event: "Founded with a vision to transform cloud infrastructure management" },
    { year: "2015", event: "Launched first cloud management platform for Apache CloudStack" },
    { year: "2018", event: "Expanded globally with customers across 20+ countries" },
    { year: "2022", event: "Introduced TARS - Agentic AI for cloud automation" },
    { year: "2024", event: "Launched StackOrbit unified platform with 1000+ deployments worldwide" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="mt-[112px] pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Building the Future of <span className="text-accent">Sovereign Cloud</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            StackOrbit empowers ISPs, MSPs, CSPs, and enterprises to build, manage, and monetize cloud infrastructure
            with open-source freedom and AI intelligence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
          <Card className="border-border/50">
            <CardContent className="pt-8 pb-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                StackOrbit was born from a deep understanding of the infrastructure domain and a vision to transform how
                businesses build and manage cloud services. Since our early ventures into cloud technology, we've been
                committed to creating solutions that combine enterprise-grade reliability with open-source freedom.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Today, StackOrbit powers cloud providers worldwide with a comprehensive platform that includes billing,
                monitoring, backup, AI automation, and complete lifecycle management — all built on Apache CloudStack
                and designed for sovereign cloud deployments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">One Team, Many Talents</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our diverse team brings together expertise in cloud infrastructure, AI, enterprise software, and customer
            success.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="border-border/50">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Users className="text-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm text-accent mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-base text-muted-foreground leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Trusted by Cloud Providers Worldwide</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Leading ISPs, MSPs, and enterprises rely on StackOrbit to power their cloud infrastructure and deliver
            exceptional services to their customers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="w-32 h-24 bg-white border border-border/50 rounded-lg flex items-center justify-center"
              >
                <div className="text-muted-foreground text-xs">Customer {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-border/50 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="pt-12 pb-12 text-center">
              <Rocket className="mx-auto mb-6 text-accent" size={48} />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're actively hiring talented individuals across engineering, product, customer success, and more. Help
                us build the future of sovereign cloud.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/careers">
                  View Open Positions <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Cloud Business?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of cloud providers worldwide who trust StackOrbit to power their infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" asChild>
              <Link href="/contact">
                Request a Demo <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/platform">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
