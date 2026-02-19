"use client"

import { StackBillNavigation } from "@/components/stackbill-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Monitor,
  Server,
  Package,
  Database,
  Code,
  ShoppingCart,
  Layers,
  Boxes,
  FileText,
  Video,
  Activity,
} from "lucide-react"

export default function MarketplacePage() {
  const features = [
    {
      title: "Build your own app marketplace with 100+ free pre-build apps.",
      icon: Package,
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Single click any app stack deployment in a minute",
      icon: Layers,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Integrated Windows License Manager with auto activation.",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Request for any custom apps requirements.",
      icon: Code,
      gradient: "from-pink-500 to-rose-600",
    },
  ]

  const categories = [
    { name: "Linux OS", icon: Server },
    { name: "Windows OS", icon: Monitor },
    { name: "Business Apps", icon: ShoppingCart },
    { name: "Content Management Systems", icon: FileText },
    { name: "Database", icon: Database },
    { name: "Developer Tools", icon: Code },
    { name: "eCommerce", icon: ShoppingCart },
    { name: "Frameworks", icon: Layers },
    { name: "Hosting Panels", icon: Boxes },
    { name: "Media", icon: Video },
    { name: "Monitoring", icon: Activity },
  ]

  const featuredApps = [
    {
      name: "OwnCloud + Ubuntu 22.04 LTS",
      category: "Content Management",
      description: "Self-hosted file sync and share solution",
      image: "/owncloud-file-sync-platform.jpg",
    },
    {
      name: "Rocket.Chat + Ubuntu 20.04 LTS",
      category: "Communication",
      description: "Open source team chat and collaboration",
      image: "/rocket-chat-communication-platform.jpg",
    },
    {
      name: "FileCloud + Ubuntu 20.04 LTS",
      category: "Storage",
      description: "Enterprise file sharing and sync",
      image: "/filecloud-storage-solution.jpg",
    },
    {
      name: "Nextcloud + Ubuntu 22.04 LTS",
      category: "Productivity",
      description: "Self-hosted productivity platform",
      image: "/nextcloud-productivity-suite.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StackBillNavigation />

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-indigo-200/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold mb-3 leading-tight text-gray-900">StackBill MarketPlace</h1>
              <h2 className="text-base sm:text-lg font-semibold mb-4 text-purple-600">
                Apps that cover all aspects of your growing business
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Say goodbye to the hassle of managing multiple OS and apps for different tasks. StackBill Marketplace
                offers a comprehensive suite of tools that cover all aspects of your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2 text-sm rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
                >
                  Book a Demo
                </Link>
                <Link
                  href="#categories"
                  className="inline-flex items-center px-5 py-2 text-sm rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://www.stackbill.com/assets/images/sb-img/stackbill-marketplace.svg"
                alt="StackBill Marketplace Apps"
                className="w-full h-[400px] max-w-md mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-purple-200 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-800 leading-relaxed">{feature.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-10 text-gray-900">Marketplace App Categories</h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Category Navigation */}
            <div className="lg:w-56 flex-shrink-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-3 py-2 rounded-lg font-medium text-xs transition-all ${
                      category.name === "Content Management Systems"
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - App Cards */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* MediaWiki Card */}
                <Card className="overflow-hidden border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="h-40 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 rounded-full blur-sm opacity-80" />
                        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 rounded-full" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">MediaWiki</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-sm mb-2 text-gray-900">MediaWiki + Ubuntu 22.04 LTS</h4>
                    <div className="inline-block px-2 py-0.5 bg-purple-100 rounded-full text-xs text-purple-700 mb-2">
                      Content Management Systems
                    </div>
                    <p className="text-muted-foreground text-xs mb-3">
                      MediaWiki Stack On Ubuntu 22.04 LTS Market Place
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-purple-600 font-medium text-xs hover:text-purple-700"
                    >
                      View More <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>

                {/* Laravel Card */}
                <Card className="overflow-hidden border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="h-40 bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" viewBox="0 0 50 52" fill="none">
                        <path
                          d="M49.626 11.564a.809.809 0 0 1-.028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.077.06.028.029.048.062.072.094.017.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
                          fill="#FF2D20"
                        />
                      </svg>
                      <h3 className="text-lg font-bold text-red-600">Laravel</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-sm mb-2 text-gray-900">Laravel-lemp + Ubuntu Server 22.04 LTS</h4>
                    <div className="inline-block px-2 py-0.5 bg-purple-100 rounded-full text-xs text-purple-700 mb-2">
                      Content Management Systems
                    </div>
                    <p className="text-muted-foreground text-xs mb-3">Laravel-lemp Stack On Ubuntu Server 22.04 LTS</p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-purple-600 font-medium text-xs hover:text-purple-700"
                    >
                      View More <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Featured Marketplace Items</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Deploy pre-configured apps and stacks instantly
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredApps.map((app, index) => (
              <Card
                key={index}
                className="border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gray-100">
                  <Image src={app.image || "/placeholder.svg"} alt={app.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <div className="text-xs font-medium text-purple-600 mb-1">{app.category}</div>
                  <h3 className="font-semibold text-sm mb-1 text-gray-900 text-balance">{app.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{app.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-purple-600 text-xs font-medium hover:text-purple-700"
                  >
                    View More <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features List */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">Simplified Apps Manager</h2>

              <div className="space-y-4">
                {[
                  "Simplified management console for adding and updating new OS templates & apps.",
                  "Setup your own private marketplace for each customer of your choice.",
                  "Easy upgrade for all apps with no or minimal downtime.",
                  "Easy License Management: meter and bill for your apps for both Windows & Linux apps by per core or one time.",
                  "Built your own apps and manage your own GitHub private hub by connected with StackBill.",
                  "Separate App marketplace management for Reseller including licence management.",
                  "Comprehensive integration with third party apps via a 100% compatible Cloudstack API",
                ].map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm group"
                >
                  Access GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side - Dashboard Image */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <Image
                  src="/images/simplified-apps-manager-dashboard-full.png"
                  alt="Simplified Apps Manager Dashboard"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-10 text-gray-900">What Our Customers Say</h2>

          <Card className="border border-purple-100 bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-gray-700 mb-4 leading-relaxed italic">
                "StackBill Marketplace has transformed how we deploy applications. The one-click deployment saves us
                hours of configuration time, and the integrated license management makes billing seamless."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">John Doe</div>
                  <div className="text-xs text-muted-foreground">CTO, CloudTech Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Ready to Transform Your App Deployment?</h2>
              <p className="text-sm text-purple-100 mb-6 max-w-2xl mx-auto">
                Get started with StackBill Marketplace today and experience the power of one-click app deployment.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2 text-sm rounded-full bg-white text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-200"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2 text-sm rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors duration-200"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
