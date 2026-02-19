"use client"

import { StackObjectNavigation } from "@/components/stackobject-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function StackObjectFeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <StackObjectNavigation />

      {/* Storage Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-foreground leading-tight">
              Storage integration with StackBill is a proven solution<br className="hidden md:block" /> across many use cases
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              StackBill with CloudStack supports different storage integrations through its pluggable storage framework, allowing seamless integration with various storage systems and technologies for versatile data management and storage options.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* All-In-One Card */}
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://www.stackbill.com/assets/images/sb-img/storage-all-in-one.svg"
                  alt="All-In-One Storage"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">All-In-One</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reduced management overhead with simplified pricing options without minimum commitment levels.
              </p>
            </div>

            {/* Enterprise IT Card */}
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://www.stackbill.com/assets/images/sb-img/storage-enterprice-it.svg"
                  alt="Enterprise IT Storage"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Enterprise IT</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Simplify storage management across multiple clusters and zones across multiple datacenter with DR capabilities
              </p>
            </div>

            {/* Storage Plugins Card */}
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://www.stackbill.com/assets/images/sb-img/srotage-plugins.svg"
                  alt="Storage Plugins"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Storage Plugins</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Choose your own storage hardware of your choice from different vendor through pluggable storage framework
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Storage Solution for ISVs, MSPs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
                Complete storage solution for ISVs, MSPs, and service providers
              </h2>

              <div className="space-y-8">
                {/* Volume & Blocks */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      <span className="text-red-500">Volume & Blocks:</span> Create your block storage with thin/thick-provisioned, resizable, and storage data striped over multiple volumes in a storage cluster.
                    </h3>
                  </div>
                </div>

                {/* Network File Storage */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      <span className="text-red-500">Network File Storage:</span> Stackbill Network File System provides a simple, scalable, fully managed, elastic NFS file system for your compute instances at scale. Powered by Open Source CEPH SDS.
                    </h3>
                  </div>
                </div>

                {/* Object Storage (S3) */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      <span className="text-red-500">Object Storage (S3):</span> Offer cost-efficient S3 storage that offers the best price-performance for running data workloads on premises. Powered by Open Source CEPH S3 Storage.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Architecture Diagram */}
            <div className="relative">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/complete-storage-solution-for-isvs.svg"
                alt="Complete Storage Solution Architecture - CEPH Storage Cluster with Object, Block, and File Storage"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Object Storage Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
                Object Storage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                S3-Compatible Object Storage
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Fully S3-compatible object storage that integrates seamlessly with your existing applications, tools, and workflows. Store and retrieve any amount of data with industry-standard APIs.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">AWS S3 API Compatible</h4>
                    <p className="text-xs text-gray-600">Use existing S3 tools and SDKs without modification</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Bucket Policies & ACLs</h4>
                    <p className="text-xs text-gray-600">Fine-grained access control for secure data management</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Versioning & Lifecycle</h4>
                    <p className="text-xs text-gray-600">Object versioning and automated lifecycle management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium">Storage Cluster: Healthy</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-2xl font-bold">99.99%</p>
                      <p className="text-xs opacity-80">Uptime SLA</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-2xl font-bold">11 9s</p>
                      <p className="text-xs opacity-80">Durability</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-2xl font-bold">&lt;10ms</p>
                      <p className="text-xs opacity-80">Latency</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-2xl font-bold">PB+</p>
                      <p className="text-xs opacity-80">Scale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block Storage Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/high-performance-storage.svg"
                alt="Block Storage Architecture"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
                Block Storage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                High-Performance Block Storage
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Enterprise-grade block storage optimized for databases, virtual machines, and performance-critical workloads. Achieve consistent low-latency I/O with Ceph RBD.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Thin Provisioning</h4>
                    <p className="text-xs text-gray-600">Efficient storage allocation that grows with your needs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Snapshots & Clones</h4>
                    <p className="text-xs text-gray-600">Point-in-time snapshots and instant volume cloning</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Live Migration</h4>
                    <p className="text-xs text-gray-600">Move volumes between nodes without downtime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your storage infrastructure with StackObject.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8"
              asChild
            >
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
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
