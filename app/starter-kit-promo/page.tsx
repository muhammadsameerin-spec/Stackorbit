import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Sparkles, ShoppingBag, Puzzle, BotMessageSquare, Rocket, Check, X, ChevronRight } from "lucide-react"

export default function StarterKitPromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-7xl lg:flex lg:gap-8 lg:items-start">
        {/* Main Content */}
        <div className="flex-1 lg:max-w-4xl">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-28 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="relative z-10">
              <div className="text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm text-blue-700">
                  <Sparkles size={16} className="text-blue-500" />
                  Starter Kit for Cloud Providers
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  Launch Your Sovereign Public Cloud with{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    StackOrbit Starter Kit
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Everything you need to build, operate, and monetize a sovereign public cloud using open platforms and
                  AI-assisted operations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                    asChild
                  >
                    <Link href="#contact">Get the Starter Kit</Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 h-12 rounded-full transition-all hover:scale-105"
                    asChild
                  >
                    <Link href="#contact">Request a Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-16 relative">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
              <p className="text-lg text-gray-600">Complete platform to launch your cloud business</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: ShoppingBag,
                  title: "StackBill CMP",
                  description: "Cloud management and billing platform",
                },
                {
                  icon: Puzzle,
                  title: "Marketplace & Extensions",
                  description: "Monitoring, backup, and app marketplace",
                },
                {
                  icon: BotMessageSquare,
                  title: "TARS AI Operations",
                  description: "AI-assisted SRE co-pilot",
                },
                {
                  icon: Rocket,
                  title: "Deployment Support",
                  description: "Guided setup and onboarding",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="group relative">
                    <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-blue-300 transition-all h-full">
                      <div className="p-3 bg-gray-50 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="text-gray-700" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <X className="text-red-600" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Traditional Approach</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Long deployment timelines",
                    "Fragmented billing and tools",
                    "Limited cost visibility",
                    "Hard to monetize services",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Check className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">StackOrbit Starter Kit</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Faster time to market",
                    "Unified billing and CMP",
                    "Built-in cost visibility",
                    "Ready for monetization",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-900">
                      <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Contact Form */}
        <aside className="lg:w-96 lg:sticky lg:top-24 mt-8 lg:mt-24">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">GET A QUOTE</h3>
            <p className="text-sm text-gray-600 mb-6">
              Our team will follow up with a tailored demo, promo discount and the next steps
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input id="firstName" placeholder="" required className="w-full" />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Input id="lastName" placeholder="" required className="w-full" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <Input id="email" type="email" placeholder="" required className="w-full" />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm text-gray-700 mb-1">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <Input id="jobTitle" placeholder="" required className="w-full" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-1">
                  Company <span className="text-red-500">*</span>
                </label>
                <Input id="company" placeholder="" required className="w-full" />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm text-gray-700 mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  required
                  className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="IN">India</option>
                  <option value="SG">Singapore</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="" className="w-full" />
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm text-gray-700 mb-1">
                  Share your requirements and expectations
                </label>
                <Textarea id="requirements" placeholder="" rows={4} className="w-full resize-none" />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input type="checkbox" id="consent" className="mt-1" />
                <label htmlFor="consent" className="text-xs text-gray-600">
                  I would like to receive news about StackOrbit products and upcoming events. I understand that I can
                  opt out at any time. I agree to the{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/cookie-policy" className="text-blue-600 hover:underline">
                    Cookie Policy
                  </Link>
                  .
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-md font-semibold"
              >
                SEND REQUEST
              </Button>
            </form>
          </div>
        </aside>
      </div>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 relative bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden mt-20"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Launch Your Sovereign Cloud?</h2>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Get started with StackOrbit Starter Kit. Flexible subscription or perpetual license options available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 h-12 rounded-full shadow-lg transition-all hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Get Started
                  <ChevronRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-8 h-12 rounded-full transition-all hover:scale-105"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
