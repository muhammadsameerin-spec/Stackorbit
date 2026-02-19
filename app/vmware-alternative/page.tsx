import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import {
  Cloud,
  Server,
  Cog,
  Monitor,
  Database,
  Shield,
  TrendingUp,
  Check,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function VMwareAlternativePage() {
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
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  A Practical Alternative to VMware for{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Modern Cloud Platforms
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  StackOrbit helps organizations move away from VMware-centric cloud stacks by delivering
                  enterprise-grade cloud platforms built on Apache CloudStack—combined with expert services, operations,
                  and billing solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                    asChild
                  >
                    <Link href="#contact">Talk to an Expert</Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 h-12 rounded-full transition-all hover:scale-105"
                    asChild
                  >
                    <Link href="/platform">Explore CloudStack Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Rethinking VMware */}
          <section className="py-16 relative">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Organizations Are Rethinking VMware
              </h2>
              <p className="text-lg text-gray-600">
                Many organizations are now looking for open, scalable, and cost-predictable cloud platforms that give
                them long-term control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Rising licensing costs", icon: TrendingUp },
                { title: "Limited flexibility and vendor lock-in", icon: Shield },
                { title: "Complex operations at scale", icon: Cog },
                { title: "Challenges building sovereign or public clouds", icon: Cloud },
                { title: "High cost of long-term ownership", icon: Database },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all"
                  >
                    <div className="p-3 bg-red-50 rounded-xl flex-shrink-0">
                      <Icon className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Apache CloudStack with StackOrbit */}
          <section className="py-16 relative">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm text-blue-700 mb-6">
                <Sparkles size={16} className="text-blue-500" />
                Core Solution
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Apache CloudStack, Delivered and Operated by StackOrbit
              </h2>
              <p className="text-lg text-gray-600">
                StackOrbit provides a complete set of services around Apache CloudStack—from architecture and migration
                to day-2 operations—helping organizations build production-ready cloud platforms without vendor lock-in.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">StackOrbit CloudStack Services (StackOps)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Server,
                    title: "CloudStack Architecture & Design",
                    description:
                      "Design scalable private, public, or sovereign cloud architectures tailored to your requirements.",
                  },
                  {
                    icon: ArrowRight,
                    title: "VMware to CloudStack Migration",
                    description:
                      "Structured migration of workloads, networking, and storage from VMware-based environments.",
                  },
                  {
                    icon: Cog,
                    title: "CloudStack Deployment & Automation",
                    description: "End-to-end deployment using best practices for compute, storage, and networking.",
                  },
                  {
                    icon: Monitor,
                    title: "Day-2 Operations & Managed Services",
                    description: "Ongoing monitoring, upgrades, troubleshooting, and operational support.",
                  },
                  {
                    icon: Database,
                    title: "Ceph-Based Storage Design & Management",
                    description: "Primary, secondary, and object storage built on Ceph with per-TB cost efficiency.",
                  },
                  {
                    icon: Shield,
                    title: "Sovereign Cloud Enablement",
                    description: "Data control, regional compliance, and infrastructure independence.",
                  },
                ].map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={index}
                      className="group relative p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-blue-300 transition-all"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="p-3 bg-blue-50 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="text-blue-600" size={24} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Why CloudStack Over VMware */}
          <section className="py-16 relative">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Apache CloudStack Over VMware</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Open-source and vendor-neutral",
                "Designed for cloud service providers",
                "Proven at public cloud scale",
                "Native multi-tenant architecture",
                "Strong API-driven automation",
                "Predictable infrastructure costs",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-xl"
                >
                  <Check className="text-blue-600 flex-shrink-0" size={20} />
                  <span className="text-gray-900 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Migration Approach */}
          <section className="py-16 relative overflow-hidden">
            {/* Gradient Orbs for depth */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="mb-16 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Migration Approach</h2>
                <p className="text-lg text-gray-600 font-light">
                  A structured 6-step process to transition from VMware to StackOrbit
                </p>
              </div>

              {/* Desktop Flowchart - Horizontal */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Steps Container */}
                  <div className="grid grid-cols-3 gap-8">
                    {[
                      { step: 1, title: "Assessment & Planning", color: "from-blue-500 to-cyan-500" },
                      { step: 2, title: "CloudStack Deployment", color: "from-purple-500 to-pink-500" },
                      { step: 3, title: "Workload Migration", color: "from-emerald-500 to-teal-500" },
                      { step: 4, title: "Storage & Network", color: "from-orange-500 to-red-500" },
                      { step: 5, title: "Billing Enablement", color: "from-indigo-500 to-blue-500" },
                      { step: 6, title: "Operations & Optimization", color: "from-pink-500 to-rose-500" },
                    ].map((item, index) => (
                      <div key={item.step} className="relative">
                        {/* Glass Card */}
                        <div className="group relative overflow-hidden">
                          <div className="relative p-8 bg-white border-2 border-gray-200 rounded-3xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 h-full">
                            {/* Gradient overlay on hover */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                            />

                            <div className="relative z-10 text-center">
                              {/* Step Number with Gradient */}
                              <div
                                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                              >
                                {item.step}
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 leading-snug">{item.title}</h3>
                            </div>
                          </div>
                        </div>

                        {/* Arrow connecting steps (except last one in each row) */}
                        {index % 3 !== 2 && (
                          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                            <svg width="64" height="32" viewBox="0 0 64 32" className="text-blue-400">
                              <path
                                d="M0 16 L48 16 M48 16 L40 8 M48 16 L40 24"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}

                        {/* Arrow connecting rows */}
                        {index === 2 && (
                          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                            <svg width="32" height="48" viewBox="0 0 32 48" className="text-blue-400">
                              <path
                                d="M16 0 L16 32 M16 32 L8 24 M16 32 L24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet View - Vertical */}
              <div className="lg:hidden space-y-4">
                {[
                  { step: 1, title: "Assessment & architecture planning", color: "from-blue-500 to-cyan-500" },
                  { step: 2, title: "CloudStack platform deployment", color: "from-purple-500 to-pink-500" },
                  { step: 3, title: "VMware workload migration", color: "from-emerald-500 to-teal-500" },
                  {
                    step: 4,
                    title: "Storage & networking integration",
                    color: "from-orange-500 to-red-500",
                  },
                  { step: 5, title: "Billing and service enablement", color: "from-indigo-500 to-blue-500" },
                  { step: 6, title: "Ongoing operations & optimization", color: "from-pink-500 to-rose-500" },
                ].map((item, index) => (
                  <div key={item.step} className="relative">
                    <div className="group relative overflow-hidden">
                      <div className="relative p-6 bg-white border-2 border-gray-200 rounded-2xl hover:shadow-xl hover:border-blue-300 transition-all duration-500">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                        />

                        <div className="relative z-10 flex items-center gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                          >
                            {item.step}
                          </div>
                          <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Vertical Arrow */}
                    {index < 5 && (
                      <div className="flex justify-center py-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
                          <path
                            d="M12 4 L12 20 M12 20 L8 16 M12 20 L16 16"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why StackOrbit */}
          <section className="py-16 relative">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why StackOrbit</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Deep Apache CloudStack expertise",
                "Federated platform approach",
                "Open-source-first philosophy",
                "AI-assisted operations",
                "Flexible licensing models",
                "Proven cloud delivery experience",
              ].map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all"
                >
                  <Check className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-900 font-medium">{reason}</span>
                </div>
              ))}
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

      {/* Final CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden mt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Move Beyond VMware?</h2>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Explore how StackOrbit can help you build, operate, and monetize cloud platforms using Apache CloudStack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 h-12 rounded-full shadow-lg transition-all hover:scale-105"
                asChild
              >
                <Link href="#contact">
                  Talk to a CloudStack Expert
                  <ChevronRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-8 h-12 rounded-full transition-all hover:scale-105"
                asChild
              >
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
