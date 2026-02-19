"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Check, Code, Database, Settings, Award, Zap, Home, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function StackAcademyPage() {
  const router = useRouter()

  const courses = [
    {
      icon: Database,
      title: "Apache CloudStack – Training & Certification",
      description: "Comprehensive CloudStack mastery program",
      features: [
        "Cloud architecture fundamentals",
        "CloudStack installation & operations",
        "Networking, VR, hypervisors (KVM/XCP-ng)",
        "Automation & troubleshooting",
        "Perfect for ISPs, MSPs & CSPs",
      ],
    },
    {
      icon: Settings,
      title: "DevOps Fundamentals",
      description: "Modern DevOps practices and tooling",
      features: ["CI/CD pipelines", "Kubernetes basics", "GitOps & IaC (Terraform/Ansible)", "Monitoring & automation"],
    },
    {
      icon: Code,
      title: "Java & Angular Full-Stack Development",
      description: "Enterprise web application development",
      features: ["Modern web development", "Enterprise app building", "APIs & integrations"],
    },
    {
      icon: Zap,
      title: "Python Development for Cloud",
      description: "Python for cloud infrastructure",
      features: ["Python basics → advanced", "Automation scripting", "Cloud orchestration"],
    },
    {
      icon: Database,
      title: "Ceph Storage Management",
      description: "Enterprise storage solutions",
      features: ["Cluster design", "OSD/mon management", "Performance tuning", "Disaster recovery & scaling"],
    },
    {
      icon: Zap,
      title: "AIOps & Intelligent Automation",
      description: "AI-driven cloud operations",
      features: ["AI-driven operations", "Observability", "Anomaly detection", "Automation workflows"],
    },
  ]

  const certifications = [
    {
      title: "CloudStack Engineer Certification",
      description: "For cloud operations, network engineering & MSP teams.",
      icon: Award,
    },
    {
      title: "Storage & Ceph Engineer Certification",
      description: "For storage architects, cloud providers & datacenter admins.",
      icon: Award,
    },
    {
      title: "DevOps Engineer Certification",
      description: "For automation, CI/CD & cloud-native engineering.",
      icon: Award,
    },
  ]

  const learningFormats = [
    "Live instructor-led online sessions",
    "In-person corporate workshops",
    "Project-based learning",
    "Hands-on labs",
    "Certificate of completion",
    "Private training for teams",
  ]

  const whyChoose = [
    "Courses created by real CloudStack experts",
    "Designed for ISPs, MSPs, CSPs & enterprise teams",
    "Hands-on learning with real production examples",
    "Certification backed by StackOrbit",
    "Affordable pricing — pay only for what you learn",
    "Global instructor availability",
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
            <Link href="/platform" className="hover:text-foreground">
              Platform
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">Stack Academy</span>
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">
              Stack Academy – <span className="text-accent">Professional Training & Certification</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium">
              Master CloudStack, DevOps, Ceph, and Modern Cloud Engineering
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Stack Academy provides industry-focused training programs designed for cloud engineers, MSPs, ISPs, CSPs,
              and enterprises who want to master Apache CloudStack, DevOps, storage, automation, and full-stack
              development. Learn from certified experts with real production experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Enroll Now <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <Link href="#courses">Download Syllabus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Stack Academy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your Cloud Engineering Learning Hub</h2>
          <Card className="border-border/50">
            <CardContent className="pt-8 pb-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty mb-4">
                Stack Academy is the official training and certification arm of StackOrbit. We offer hands-on programs
                covering CloudStack, DevOps, software development, and storage engineering. Our instructors have deep
                real-world experience managing large-scale cloud environments, migrations, and enterprise deployments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Courses Offered</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed for cloud professionals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <Card key={course.title} className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{course.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4">{course.description}</p>
                    <ul className="space-y-2">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-xs sm:text-sm text-muted-foreground">
                          <Check className="h-3 w-3 text-accent flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Training Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Flexible Learning Formats</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {learningFormats.map((format) => (
              <div key={format} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <p className="text-base text-muted-foreground">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certification Paths</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Industry-recognized certifications backed by StackOrbit
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <Card key={cert.title} className="border-border/50 hover:border-accent/50 transition-colors bg-white">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground text-center text-pretty">{cert.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Simple, Transparent Pricing</h2>

          <Card className="border-border/50 bg-white mb-6">
            <CardContent className="pt-12 pb-12">
              <div className="text-5xl font-bold text-accent mb-2">$10</div>
              <p className="text-lg text-muted-foreground mb-6">per hour for all training programs</p>
              <p className="text-muted-foreground mb-2">Volume & enterprise packages available</p>
              <p className="text-muted-foreground mb-6">Custom training available for organizations</p>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">Contact Training Team</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Stack Academy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Stack Academy?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyChoose.map((reason) => (
              <div key={reason} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <p className="text-base text-muted-foreground">{reason}</p>
              </div>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-balance">
            Start Your Cloud Engineering Journey Today
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn from certified experts and build real-world cloud skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" asChild>
              <Link href="/contact">
                Enroll Now <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/contact">Talk to an Instructor</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
