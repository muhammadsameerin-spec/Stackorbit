"use client"

import { StackBillNavigation } from "@/components/stackbill-navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Link from "next/link"

export default function StackBillFeaturesPage() {
  const [activeTab, setActiveTab] = useState("public-cloud")

  const tabs = [
    { id: "public-cloud", label: "Public Cloud as a Service" },
    { id: "b2c-b2b", label: "Complete Self-Servicing Portal for B2C & B2B Business" },
    { id: "compute-storage", label: "High Performance Compute & Storage Solutions" },
    { id: "marketplace", label: "Application MarketPlace for VMs & Containers" },
    { id: "xaas", label: "Anything as a Service (XaaS)" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <StackBillNavigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Illustration */}
            <div className="order-2 lg:order-1">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/xaas-powered.svg"
                alt="XaaS powered cloud billing illustration"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Unify Your Cloud Billing & Monetization
              </h1>

              {/* Section 1 */}
              <div className="mb-5">
                <h2 className="text-base font-semibold text-purple-600 mb-2">
                  One Platform for Usage, Pricing, and Revenue
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  StackBill brings together usage metering, pricing, invoicing, and customer management into a single
                  cloud billing platform. Designed for service providers, it eliminates fragmented tools and manual
                  processes—making it easy to monetize cloud services with accuracy and confidence.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-5">
                <h2 className="text-base font-semibold text-purple-600 mb-2">Consolidate Billing Services</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unify usage tracking, subscription billing, pay-as-you-go pricing, and invoicing across compute,
                  storage, network, and add-on services. StackBill supports flexible pricing models and multi-tenant
                  billing, removing complexity from running a cloud business.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-6">
                <h2 className="text-base font-semibold text-purple-600 mb-2">Simplified Monetization Management</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Manage pricing, plans, customers, resellers, invoices from a single interface. With automated billing
                  cycles, real-time usage visibility, and seamless upgrades, StackBill reduces operational overhead
                  while improving billing accuracy.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/platform/stackbill"
                  className="inline-flex items-center px-5 py-2 text-sm rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
                >
                  Read product overview
                </Link>
                <Link
                  href="#product-features"
                  className="inline-flex items-center px-5 py-2 text-sm rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
                >
                  Explore billing features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* StackBill Banner Image Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <img
            src="https://www.stackbill.com/assets/images/sb-img/banner-with-button.svg"
            alt="StackBill Platform Banner"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Product Features Tabbed Section */}
      <section id="product-features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Product Features</h2>

          {/* Tabs Navigation */}
          <div className="mb-8 lg:mb-12 border-b border-gray-200">
            <div className="flex overflow-x-auto gap-4 lg:gap-8 justify-start pb-1 -mb-px scrollbar-thin scrollbar-thumb-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-4 px-2 text-xs sm:text-sm font-medium transition-colors duration-200 min-w-max lg:max-w-[280px] text-left whitespace-nowrap lg:whitespace-normal flex-shrink-0 ${
                    activeTab === tab.id ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span className="block leading-tight">{tab.label}</span>
                  {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"></div>}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-12">
            {activeTab === "public-cloud" && (
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left - Feature List (40%) */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Public Cloud as a Service</h2>
                  <ul className="space-y-6">
                    {[
                      {
                        title: "Self-service panels with white-labeling",
                        description: "Comprehensive UI platform for B2C & B2B Customers",
                      },
                      {
                        title: "Multi Region & Zone Support",
                        description: "Scale your cloud to any region/zone at any point of time",
                      },
                      {
                        title: "Hypervisor of your choice",
                        description: "Freedom to choose your hypervisor (KVM/XCP_NG/VMware)",
                      },
                      {
                        title: "Storage as a Service",
                        description:
                          "Use any storage devices or endpoints (NFS/CEPH/iSCSI) to offer storage as services.",
                      },
                      {
                        title: "Anything as a service",
                        description:
                          "Use our plugin architecture to connect with your favorite tools with APIs to offer business solution to your customers",
                      },
                      {
                        title: "DR as a Service (DRaaS)",
                        description: "Significantly lower TCO and risk, true high availability",
                      },
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-8 group text-sm"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FarkAcQoUnbJ5qkaQpd3l74%2FDashboard%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D8-327%26scaling%3Dscale-down"
                        title="StackBill Dashboard Interactive Demo"
                        frameBorder="0"
                        loading="lazy"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "b2c-b2b" && (
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left - Content (40%) */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Multitenancy to build B2C & B2B(Reseller) business.
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Complete Self-Service portal for end-user.",
                      "Custom branding for self-service portal (B2C).",
                      "Support for postpaid, prepaid & manual payment modes for tenant.",
                      "Custom domainname,invoice, payment gateway, cloud offering for Resellers(B2B).",
                      "Easy billing integration: meter and bill for your cloud resources with popular cloud billing platforms such as WHMCS, SAP.",
                      "Integrated Marketplace and Microsoft licence module support.",
                      "Multi Currency support for B2C & B2B business.",
                      "Multi Language support for end-users choice.",
                      "RBAC model for tenants",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-6 group text-sm"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Right - Interactive Video (60%) */}
                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FSDomEzDBfC5QTQm9XfovhT%2FInstance-Creation---Linux%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D118-345%26scaling%3Dscale-down"
                        title="StackBill Self-Service Portal Interactive Demo"
                        frameBorder="0"
                        loading="lazy"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "compute-storage" && (
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left - Content (40%) */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Build a high-performance compute with Software defined storage & network.
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Hypervisor of your choice (KVM/XCP_NG/VMWare).",
                      "CPU & Memory overcommitment.",
                      "GPU and vGPU support.",
                      "Live VM & storage migration.",
                      "Integrated VPC,Isolated & Shared Network support.",
                      "Support to CDN & Virtual Network Function(VNF).",
                      "Inbuild Firewall, VPN, Virtual Router Support.",
                      "Monitoring-as-a-Service for VM & application monitoring.",
                      "Block storage via iSCSI, NFS & Software Defined Storage(SDS)",
                      "Online Volume Resize for primary & Secondary disk.",
                      "Flexible Snapshot & Backup Policy.",
                      "Volume encryption & Flexible Storage QoS policy.",
                      "Amazon S3 compatible object storage with CEPH.",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-6 group text-sm"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Right - Interactive Video (60%) */}
                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0aPTOwKgW4M2RSIFNZdEMF%2FObject-storage%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26page-id%3D0%253A1%26scaling%3Dscale-down%26node-id%3D3-2%26starting-point-node-id%3D3%253A2"
                        title="StackBill Compute & Storage Interactive Demo"
                        frameBorder="0"
                        loading="lazy"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "marketplace" && (
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left - Content (40%) */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Deploy preconfigured apps and stacks in minutes
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "FREE 50+ apps that install automatically to public or private cloud.",
                      "Create your own private apps for your customers with super easy integration.",
                      "Chargeback the apps either per core or per instance recurring licence model.",
                      "Separate MarketPlace for Reseller users(B2B).",
                      "Marketplace for Kubernetes cluster with one click installation.",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-6 group text-sm"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Right - Interactive Video (60%) */}
                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://embed.figma.com/proto/L0ylD3oFtJTEhXUvk3YHoi/Apps-Overview?node-id=1-53&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A388&embed-host=share"
                        title="StackBill Application Marketplace Interactive Demo"
                        frameBorder="0"
                        loading="lazy"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "xaas" && (
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left - Content (40%) */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">StackBill XaaS feature</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    StackBill XaaS feature includes various types of IT services, giving you the flexibility to choose
                    what you need, based on your company's specific requirements.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Software-as-a-Service (SaaS)",
                      "Infrastructure-as-a-Service (IaaS)",
                      "Data-as-a-Service (DaaS)",
                      "Container-as-a-Service (CaaS)",
                      "Database-as-a-Service (DBaaS)",
                      "Kubernetes-as-a-Service (KaaS)",
                      "Monitoring-as-a-Service (MaaS)",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-6 group text-sm"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Right - Image (60%) */}
                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full flex items-center justify-center p-6" style={{ minHeight: '400px' }}>
                      <img
                        src="https://www.stackbill.com/assets/images/sb-img/anything-as-a-service.svg"
                        alt="Anything as a Service (XaaS)"
                        className="w-full h-auto max-h-[400px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Simplified Admin Ops Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Simplified Admin Ops
              </h2>
              
              <ul className="space-y-4">
                {[
                  "Single control plane to manage all your cloud offerings and 3rd party integrations.",
                  "Multi-tenant self-service portal for end-users with white labeling support.",
                  "Powerful Reseller features for complete B2B business.",
                  "Built-in advanced analytics and monitoring with an alerting system and enterprise overview dashboards powered by StackWatch.",
                  "Easy billing integration: meter and bill for your cloud resources with popular cloud billing platforms such as WHMCS, SAP.",
                  "Comprehensive integration with third party solutions via a 100% compatible Apache Cloudstack API.",
                  "Single-click update for all system components with Maintenance Mode for all services.",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-8 group text-sm"
              >
                View Demo
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/simplified-admin-ops.svg"
                alt="Simplified Admin Operations Dashboard"
                className="w-full max-w-xl h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Add-Ons CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Unlock more
                <br />
                with StackBill MarketPlace
              </h2>
              <a
                href="/platform/stackapps"
                className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
              >
                Explore Apps
              </a>
            </div>

            {/* Right - Image */}
            <div className="relative flex items-center justify-center">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/simplified-apps-manager.svg"
                alt="StackBill MarketPlace - Simplified Apps Manager"
                className="w-full h-auto max-h-[350px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">Related Solutions</h2>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Dashboard Screenshot */}
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <img
                src="/images/menu-filler.png"
                alt="StackBill Dashboard showing analytics, usage metrics, and billing overview"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right - Product Cards */}
            <div className="space-y-4">
              {/* StackWatch Card */}
              <a
                href="/platform/stackwatch"
                className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="12" width="32" height="24" rx="2" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" />
                    <rect x="12" y="16" width="10" height="6" rx="1" fill="#A5B4FC" />
                    <rect x="12" y="24" width="24" height="2" rx="1" fill="#6366F1" />
                    <rect x="12" y="28" width="18" height="2" rx="1" fill="#A5B4FC" />
                    <circle cx="34" cy="19" r="5" fill="#6366F1" />
                    <path
                      d="M32 19L33.5 20.5L36 18"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    StackWatch
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monitoring, observability, and AI-driven anomaly detection for cloud infrastructure.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* StackObject Card */}
              <a
                href="/platform/stackobject"
                className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="14" height="14" rx="2" fill="#E9D5FF" stroke="#9333EA" strokeWidth="2" />
                    <rect x="26" y="8" width="14" height="14" rx="2" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2" />
                    <rect x="8" y="26" width="14" height="14" rx="2" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2" />
                    <rect x="26" y="26" width="14" height="14" rx="2" fill="#E9D5FF" stroke="#9333EA" strokeWidth="2" />
                    <circle cx="24" cy="24" r="6" fill="#9333EA" />
                    <path
                      d="M22 24H26M24 22V26"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    StackObject
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Highly available S3-compatible object storage with Ceph-backed durability.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* StackVault Card */}
              <a
                href="/platform/stackvault"
                className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24 6L8 14V22C8 32.5 14.84 42.24 24 45C33.16 42.24 40 32.5 40 22V14L24 6Z"
                      fill="#CFFAFE"
                      stroke="#0891B2"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 24L22 28L30 20"
                      stroke="#0891B2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    StackVault
                  </h3>
                  <p className="text-gray-600 text-sm">
                    CEPH-based backup, disaster recovery, and cloud storage services.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
