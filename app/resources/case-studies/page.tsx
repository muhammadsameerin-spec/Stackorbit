"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Filter } from "lucide-react"
import Link from "next/link"

const categories = [
  "All Stories",
  "Telecom",
  "Datacenter",
  "Fintech",
  "Government",
  "Cloud Provider",
  "Education",
]

const caseStudies = [
  {
    title: "Rakuten Taps StackOrbit to Build Cloud-Native Euro Bank",
    description:
      "How Rakuten leveraged StackOrbit's cloud management platform to deploy a fully compliant, cloud-native banking infrastructure across Europe in under 6 months.",
    category: "Fintech",
    stat: "6 months to launch",
    image: "/images/case-study-fintech.jpg",
    featured: true,
  },
  {
    title: "Leading Telecom Provider Cuts Infrastructure Costs by 60%",
    description:
      "A major telecom provider migrated from VMware to Apache CloudStack with StackOrbit, achieving 60% cost reduction while maintaining 99.99% uptime across 3 regions.",
    category: "Telecom",
    stat: "60% cost reduction",
    image: "/images/case-study-telecom.jpg",
    featured: true,
  },
  {
    title: "BRASS Cloud Delivers Enterprise IaaS at Scale",
    description:
      "BRASS Cloud used StackBill's B2B tenant management and automated billing to grow from 50 to 500+ enterprise customers in 2 years, with zero platform downtime.",
    category: "Cloud Provider",
    stat: "10x customer growth",
    image: "/images/case-study-cloud-provider.jpg",
    featured: false,
  },
  {
    title: "ARSAT Builds Sovereign Cloud for Government Workloads",
    description:
      "Argentina's state-owned telecom ARSAT deployed a sovereign cloud platform with StackOrbit, ensuring full data residency compliance and serving 200+ government agencies.",
    category: "Government",
    stat: "200+ agencies served",
    image: "/images/case-study-government.jpg",
    featured: false,
  },
  {
    title: "Fibernetics Launches Canadian Public Cloud with StackBill",
    description:
      "Fibernetics chose Apache CloudStack with StackBill to deliver the most reliable and cost-effective public cloud service on the Canadian market, serving thousands of SMBs.",
    category: "Cloud Provider",
    stat: "99.97% SLA achieved",
    image: "/images/case-study-datacenter.jpg",
    featured: false,
  },
  {
    title: "National University Modernizes Research Computing Infrastructure",
    description:
      "A top-tier university replaced legacy virtualization with StackOrbit, enabling 3,000+ researchers to self-provision compute resources while reducing IT overhead by 45%.",
    category: "Education",
    stat: "45% IT overhead reduced",
    image: "/images/case-study-education.jpg",
    featured: false,
  },
]

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All Stories")
  const [showAll, setShowAll] = useState(false)

  const filteredStudies =
    activeCategory === "All Stories"
      ? caseStudies
      : caseStudies.filter((s) => s.category === activeCategory)

  const featuredStudy = caseStudies.find((s) => s.featured)
  const displayedStudies = showAll ? filteredStudies : filteredStudies.slice(0, 6)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[6.4rem] pb-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Customer Stories
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Inspiring stories, real StackOrbit customers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Discover how cloud providers, telecoms, and enterprises around the world use StackOrbit to build, monetize, and scale their cloud businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      {featuredStudy && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="container mx-auto max-w-7xl">
            <div className="group relative grid lg:grid-cols-2 gap-0 bg-slate-900 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
              {/* Left - Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Customer story
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 text-balance">
                    {featuredStudy.title}
                  </h2>
                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {featuredStudy.description}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 font-semibold"
                    asChild
                  >
                    <Link href="#">
                      Read now <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <div className="text-sm text-slate-400">
                    <span className="block text-white font-bold text-xl">{featuredStudy.stat}</span>
                    key result
                  </div>
                </div>
              </div>
              {/* Right - Image */}
              <div className="relative min-h-[300px] lg:min-h-0">
                <img
                  src={featuredStudy.image}
                  alt={featuredStudy.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent lg:block hidden" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trusted By Bar */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-12 py-8 border-y border-border/50">
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by cloud providers worldwide
            </span>
            {[
              { name: "Kalaam KEMS", logo: "/images/client-9.png" },
              { name: "Coloasia", logo: "/images/client-6.png" },
              { name: "AFRANET", logo: "/images/client-5.png" },
              { name: "Data Hub", logo: "/images/client-7.png" },
              { name: "Appranix", logo: "/images/client-10.png" },
            ].map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-7xl">
          {/* Category Filters */}
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setShowAll(false)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Case Study Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedStudies.map((study, index) => (
              <Link
                key={index}
                href="#"
                className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {study.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {study.stat}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          {filteredStudies.length > 6 && !showAll && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2"
                onClick={() => setShowAll(true)}
              >
                Load more in Customer Stories +
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-900 rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Ready to write your own success story?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Join the cloud providers and enterprises that have transformed their business with StackOrbit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 font-semibold"
                asChild
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-600 text-white hover:bg-slate-800 rounded-full px-8 font-semibold bg-transparent"
                asChild
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
