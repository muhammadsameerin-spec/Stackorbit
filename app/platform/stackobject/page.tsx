"use client"

import { StackObjectNavigation } from "@/components/stackobject-navigation"
import { S3UseCasesCarousel } from "@/components/s3-usecases-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ArrowRight, Database, Shield, Layers } from "lucide-react"

export default function StackObjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <StackObjectNavigation />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full mb-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Enterprise Storage Platform
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-tight">
                Block.File.<span className="text-blue-600">Object</span> Storage
              </h1>
              <p className="text-lg sm:text-xl font-medium text-foreground/80 mb-4">
                High-Performance Storage for Public Cloud Service Providers
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Scalable S3 storage powered by opensource CEPH for object, block and file type storage on your cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold px-6 rounded-full"
                  asChild
                >
                  <Link href="/platform/stackobject/features">Explore StackObject</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600/20 hover:bg-blue-500/5 px-6 rounded-full bg-transparent"
                  asChild
                >
                  <Link href="/contact">Try StackObject</Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground px-4" asChild>
                  <Link href="/platform/stackobject/docs" className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    View Docs
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="https://www.stackbill.com/assets/images/sb-img/high-performance-storage.svg"
                  alt="High-Performance Cloud Storage with Block, File, and Object capabilities"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How StackObject Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How StackObject makes it easy to operate and sell?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simple, scalable, and monetizable object storage—powered by Ceph and delivered through StackBill.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Feature 1 - Tame Unstructured Data */}
            <div className="group">
              <Card className="relative border border-border/50 bg-background rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/20 transition-all duration-300 h-full p-6">
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-xl bg-blue-500/10">
                    <Database className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">Tame Unstructured Data at Scale</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Object storage built for massive, unstructured data growth. Scale seamlessly from terabytes to petabytes across regions while managing everything from a single platform.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Feature 2 - S3 Storage as a Service */}
            <div className="group">
              <Card className="relative border border-border/50 bg-background rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/20 transition-all duration-300 h-full p-6">
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-xl bg-indigo-500/10">
                    <Layers className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">Offer S3 Storage as a Cloud Service</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Expose a fully S3-compatible object storage service to customers within minutes. Create buckets, access keys, quotas, and policies directly from the StackBill platform.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Feature 3 - Security & Compliance */}
            <div className="group">
              <Card className="relative border border-border/50 bg-background rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/20 transition-all duration-300 h-full p-6">
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-xl bg-emerald-500/10">
                    <Shield className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">Built for Security, Compliance, and Trust</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Protect customer data with encryption, replication, versioning, immutability (WORM), and access controls. Designed for enterprise and regulated workloads.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization with StackObject Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Monetization with StackObject
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
              Turn your storage infrastructure into a profitable cloud service
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left Side - Interactive Video (60%) */}
            <div className="relative lg:col-span-3">
              <div className="bg-card rounded-2xl shadow-xl shadow-blue-500/5 border border-border/50 overflow-hidden">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0aPTOwKgW4M2RSIFNZdEMF%2FObject-storage%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26page-id%3D0%253A1%26scaling%3Dscale-down%26node-id%3D3-2%26starting-point-node-id%3D3%253A2"
                  title="StackObject Interactive Demo"
                  className="w-full aspect-[4/3] border-0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right Side - Features (40%) */}
            <div className="space-y-8 lg:col-span-2">
              {/* Feature 1 */}
              <div className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Multi-Tenant & Reseller-Ready
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Offer object storage across multiple tenants, projects, and resellers with full pricing control. Define custom margins, quotas, and pricing rules per customer or partner.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Monetize Storage Across Use Cases
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Charge customers for backups, archives, media assets, AI datasets, and application storage—using the same StackObject platform.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Provider Control Without Lock-In
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Run StackObject on your own infrastructure with full control over pricing, data locality, and margins. No hyperscaler dependencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S3 Compatibility & Use Cases */}
      <S3UseCasesCarousel />

      {/* Deployment & Data Ownership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Deployment & Data Ownership
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-purple-600 mb-4">
                Your Infrastructure. Your Data. Your Business.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                StackObject is deployed on your own infrastructure—on-premises, in your data centers, or across multiple regions—giving service providers full ownership of data, operations, and margins. There is no dependency on hyperscalers or external storage services.
              </p>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      Built for Sovereign and Regulated Cloud Environments
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Meet data residency, compliance, and sovereignty requirements by keeping customer data exactly where it belongs.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      Flexible Deployment Models
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Deploy StackObject as a dedicated cluster or as part of a converged cloud architecture. Scale independently with zero service disruption.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      No Vendor Lock-In
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Powered by open-source Ceph and standard S3 APIs, ensuring long-term flexibility and freedom to evolve.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      Designed for Provider Ownership
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      From hardware to data to customer relationships, StackObject keeps ownership firmly with the service provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/simplified-deployment-at-management.svg"
                alt="Simplified Deployment & Management"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Storage Infrastructure?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get started with StackObject and experience enterprise-grade storage at cloud-native scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 font-semibold"
              asChild
            >
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-700 rounded-full px-8 bg-transparent"
              asChild
            >
              <Link href="/platform/stackobject/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
