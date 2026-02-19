import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Server, Cloud, Settings, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function StackOpsPage() {
  const services = [
    {
      title: "Apache CloudStack Consulting",
      description: "Expert guidance on CloudStack deployment, optimization, and best practices.",
      icon: Cloud,
    },
    {
      title: "Cloud Migration Services",
      description: "Seamless migration from legacy infrastructure to modern cloud platforms.",
      icon: Server,
    },
    {
      title: "Dev/AIOps Services",
      description: "Automated operations powered by AI for efficient cloud management.",
      icon: Settings,
    },
    {
      title: "Hypervisor & Storage Management",
      description: "Expert management of KVM, VMware, and enterprise storage solutions.",
      icon: Users,
    },
  ]

  const benefits = [
    "Expert team with 10+ years of cloud experience",
    "24/7 support and monitoring",
    "Custom solutions tailored to your business",
    "Proven track record with enterprise clients",
    "Open-source first approach",
    "Cost-effective deployment strategies",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-sm font-medium text-accent">Professional Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">StackOps</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Cloud Deployment & Management Services for enterprise-grade infrastructure.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cloud management services to help you build, deploy, and scale your infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="p-6 border-border/50 hover:border-accent/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose StackOps?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team brings deep expertise in cloud infrastructure, helping businesses transition to sovereign
                cloud solutions with confidence.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts help you build and manage your sovereign cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/contact">
                Contact Sales <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/platform">View Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
