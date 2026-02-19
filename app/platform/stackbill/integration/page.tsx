"use client"

import { useState } from "react"
import { StackBillNavigation } from "@/components/stackbill-navigation"
import { Footer } from "@/components/footer"
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const integrations = [
    {
      name: "5cents CDN",
      category: "CDN",
      image: "/5cents-cdn-logo-blue.jpg",
      description: "Integration with 5centsCDN service provider with instant DNS and CDN activation.",
      href: "#",
    },
    {
      name: "CEPH",
      category: "CRM",
      image: "/ceph-storage-logo-red.jpg",
      description: "Offer Block, File & Object Storage with popular opensource CEPH system.",
      href: "#",
    },
    {
      name: "WHMCS",
      category: "External Billing",
      image: "/whmcs-logo-blue.jpg",
      description: "Integrate with your existing WHMCS to manage the payment and invoice system externally.",
      href: "#",
    },
    {
      name: "Several9s",
      category: "DB-as-a-Service",
      image: "/several9s-database-logo.jpg",
      description: "Run your database ops in your own hardware to offer solutions like AWS RDS.",
      href: "#",
    },
    {
      name: "PowerDNS",
      category: "DNS",
      image: "/powerdns-logo-blue.jpg",
      description:
        "Offer your customers to manage their own DNS service by integrating the opensource PowerDNS solutions.",
      href: "#",
    },
    {
      name: "Kubernetes",
      category: "K8S-as-a-Service",
      image: "/kubernetes-logo-blue-wheel.jpg",
      description:
        "Enable your customers with single click Kubernetes cluster management with instant scalability on worker nodes.",
      href: "#",
    },
    {
      name: "StackWatch.io",
      category: "Monitoring-as-a-Service",
      image: "/monitoring-dashboard-logo-purple.jpg",
      description: "Enable pay-per-use device based monitoring for your customers with StackWatch integration.",
      href: "/platform/stackwatch",
    },
    {
      name: "Payment Gateway",
      category: "3rd Party Payment Gateway",
      image: "/payment-gateway-credit-card-logo.jpg",
      description:
        "Enable the available payment gateway system (Stripe, Paypal etc) or request us for new integration.",
      href: "#",
    },
    {
      name: "Helpdesk",
      category: "Customer Support Manager",
      image: "/helpdesk-support-ticket-logo.jpg",
      description: "Enable the integrated helpdesk system to manage your customer queries.",
      href: "#",
    },
  ]

  const faqs = [
    {
      question: "How is StackBill licensed?",
      answer:
        "StackBill is licensed on a per-hypervisor basis (Physical Nodes) without limitation on the number of virtual machines, physical/virtual cores, storage limits or amount of physical RAM. The license includes the other required physical components/servers like Management hosts (Apache CloudStack) and any storage devices.",
    },
    {
      question: "How many license keys will a customer get when they purchase StackBill Editions?",
      answer:
        "StackBill license keys can be downloaded / purchased for any of editions (STANDARD / PREMIUM / ENTERPRISE) editions. Please find our feature comparison table for more details description.",
    },
    {
      question: "What is the difference between Standard, Premium & Enterprise Editions?",
      answer:
        "StackBill offers three types of Editions for different types of customer sizes and requirements. Standard Edition is suitable for startups and small companies. Premium Edition is suitable for SMEs and large organizations who want to offer next level of public cloud services. Enterprise Edition is for large organizations who want to build customized public cloud solutions with unlimited features.",
    },
    {
      question: "Do you offer any discounts for hypervisor nodes?",
      answer:
        "Yes, you can upgrade the StackBill edition at any point of time to enjoy the add-on features. However for any downgrade required our team can help you to downgrade your plan.",
    },
    {
      question: "What happens if the license expires?",
      answer:
        "StackBill offers a grace-period time of 7 days to renew the license. If the license expires after the grace period, StackBill will automatically lock the end users logins and all the billing / charge-back functions will be stopped. You can renew the license even after the grace-period to reactivate the portal.",
    },
    {
      question: "Can I uninstall StackBill? Will that have any effect on my infrastructure running Apache CloudStack?",
      answer:
        "You can uninstall StackBill at any point of time (please refer our uninstall guide for more information). Uninstalling StackBill will not have any effect on infrastructure running with Apache CloudStack. You will still be able to manage the infrastructure using Apache CloudStack.",
    },
    {
      question: "Do you charge for StackBill & Apache CloudStack Setup?",
      answer:
        "Our STANDARD Edition deployment is self-serviced (please refer our installation guide for more details). We can help you with any customized deployment of StackBill for free on both the Premium/Enterprise Edition. We do charge for Apache CloudStack installation & setup.",
    },
    {
      question: "How can I get connected with StackBill support to report an issue?",
      answer:
        "Once you sign up with us, you will be provided with a help-desk login which is manned by our 24/7 support team.",
    },
    {
      question: "Can I upgrade / downgrade my license edition / hosts?",
      answer:
        "Yes, you can upgrade or downgrade your edition at any point of time. You can also upgrade / downgrade your physical hypervisor count through our license server.",
    },
    {
      question: "Do you support custom payment gateway integrations?",
      answer:
        "We do have the list of common payment gateway integrations with StackBill. However if you like to integrate with any of your preferred vendor, we can do that for free with any of our licensed versions.",
    },
  ]

  const trialOptions = [
    {
      icon: "🖥️",
      title: "Free 15 day trial on our hosted infrastructure",
      description: "Test drive StackBill for 15 days for free in our hosted cloud.",
      buttonText: "Get Your Hosted Trial",
      href: "/contact",
    },
    {
      icon: "🔧",
      title: "Free 30 day trial on your infrastructure",
      description: "Try a POC (Proof of Concept) of StackBill in your hardware for FREE 30 days.",
      buttonText: "Get Your Free License",
      href: "/contact",
    },
    {
      icon: "💡",
      title: "Need help to choose the right hardware?",
      description: "Get in touch with our technical experts to choose the right hardware for your cloud for FREE.",
      buttonText: "Connect With Our Team",
      href: "/contact",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-purple-50/30 to-white">
      <StackBillNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-40 left-10 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl" />

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-4">
            EXTEND YOUR PLATFORM
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
            Integrations
          </h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            StackBill CMP offers anything-as-a-service with a wide range of third-party solutions, through its REST API
            integration. Looking for any customize integration?{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline font-medium">
              click here
            </Link>
          </p>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-200 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Category Badge */}
                  <span className="text-xs font-semibold text-purple-700 bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1.5 rounded-full mb-4">
                    {integration.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {integration.name}
                  </h3>

                  {/* Icon/Image */}
                  <div className="w-20 h-20 mb-4 relative p-2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                    <Image
                      src={integration.image || "/placeholder.svg"}
                      alt={integration.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{integration.description}</p>

                  {/* Explore Link */}
                  <Link
                    href={integration.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group-hover:gap-3"
                  >
                    Explore
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 rounded-2xl p-8 md:p-10 shadow-xl shadow-purple-500/20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Looking for custom integration?</h3>
                  <p className="text-purple-100 text-sm">
                    Our team can help you integrate with any third-party solution
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Frequently asked questions</h2>
            <p className="text-gray-600">Frequently asked question about StackBill Licensing and customization.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-purple-50/50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-900 pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === index ? "bg-purple-600" : ""}`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-all duration-300 ${
                        openFaq === index ? "rotate-180 text-white" : "text-purple-600"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
