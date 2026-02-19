"use client"

// StackWatch Features Page
import { StackWatchNavigation } from "@/components/stackwatch-navigation"
import { Footer } from "@/components/footer"
import { TARSChatWidget } from "@/components/tars-chat-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  Server,
  Bell,
  LineChart,
  RefreshCw,
  Eye,
  Clock,
  Layers
} from "lucide-react"

export default function StackWatchFeaturesPage() {
  const alertingFeatures = [
    {
      icon: Bell,
      title: "Multi-Channel Alerts",
      description: "Email, Slack, PagerDuty, webhook integrations for instant notifications"
    },
    {
      icon: LineChart,
      title: "Threshold-Based Alerts",
      description: "Configure custom thresholds for any metric with flexible alerting rules"
    },
    {
      icon: Eye,
      title: "AI-Powered Detection",
      description: "Machine learning models identify anomalies before they become critical"
    },
    {
      icon: RefreshCw,
      title: "Auto-Remediation",
      description: "Trigger automated workflows to resolve issues without manual intervention"
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StackWatchNavigation />

      {/* Alerting & Automation - First Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Intelligent Alerting & Automation
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Stay ahead of issues with AI-powered anomaly detection and automated remediation workflows that keep your infrastructure healthy.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {alertingFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-700/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-emerald-800" size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <Card className="border-border/50 bg-gradient-to-br from-emerald-700 to-green-800 text-white p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium">System Status: Healthy</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-80">CPU Usage</span>
                      <span className="font-medium">42%</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[42%] h-full bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-80">Memory Usage</span>
                      <span className="font-medium">67%</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[67%] h-full bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-80">Disk I/O</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[28%] h-full bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/20 flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span className="opacity-80">Last updated: 2 seconds ago</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* StackWatch Core Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">StackWatch Core Features</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Features Text */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-700/10 flex items-center justify-center">
                  <span className="text-emerald-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Unified visibility across cloud and VMs</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get real-time visibility across hosts, clusters, networks, storage, and customer VMs. Lightweight agents for Linux and Windows enable deep monitoring without impacting workloads—giving operators and customers clear, actionable insights.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-700/10 flex items-center justify-center">
                  <span className="text-emerald-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Monitoring-as-a-Service for Customers</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Offer monitoring as a value-added cloud service. Customers can enable VM monitoring on demand, access dashboards, and receive alerts—while providers retain centralized control and governance.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-700/10 flex items-center justify-center">
                  <span className="text-emerald-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Built-In Monetization with StackBill</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seamlessly convert monitoring into revenue with StackBill integration. Define pricing per VM, metric, or usage, and automatically bill customers based on actual monitoring consumption.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Video */}
            <div className="relative">
              <Card className="border-border/50 bg-card overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://docs.stackbill.com/docs/interactive-video/Instance/create-a-windows-vm/"
                    title="StackWatch Interactive Demo"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-4 bg-gradient-to-r from-emerald-50 to-green-50">
                  <p className="text-sm text-emerald-800 font-medium text-center">
                    Interactive Demo: Create a Windows VM with Monitoring
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Centralized Infrastructure & Log Intelligence */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-gradient-to-br from-emerald-50 to-green-50 p-6">
                <img
                  src="https://www.stackbill.com/assets/images/sb-img/cloud-infrastructure-monitoring.svg"
                  alt="Cloud Infrastructure Monitoring"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-700/10 rounded-full mb-4">
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Built for Cloud Operators and Platform Administrators
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Centralized Infrastructure & Log Intelligence
              </h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                StackWatch Insights provides centralized visibility into the health, performance, and capacity of your cloud infrastructure. Purpose-built for Apache CloudStack environments, it helps operators detect issues early and operate at scale with confidence.
              </p>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-700/10 flex items-center justify-center">
                    <Server className="text-emerald-800" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">Deep Infrastructure Monitoring</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitor compute, storage, and networking components across Apache CloudStack, KVM, Ceph, and custom switches from a single operational view with real-time metrics and alerts.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-700/10 flex items-center justify-center">
                    <LineChart className="text-emerald-800" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">Advanced Metrics & Log Analytics</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Powered by a Prometheus and Grafana-based observability stack, StackWatch delivers high-resolution metrics, historical trends, and centralized log analysis for faster troubleshooting.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-700/10 flex items-center justify-center">
                    <Layers className="text-emerald-800" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">Customizable & Extensible Observability</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Extend monitoring to custom services and hardware using configurable exporters. StackWatch adapts to your architecture without forcing rigid monitoring models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All in one Integrated Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <span className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-4 block">
                Ready to use
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
                All in one Integrated Solution
              </h2>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                Stackwatch is an all in one solution that provides features that helps the users with auto-discovery of errors, automated healing of crashes, event logging, server request management and so on.
              </p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                you can use Email, slack, Whatsapp or ay other third party Messenger to get alerts about your server through our server Monitoring System
              </p>
              <Link 
                href="/platform/stackwatch/docs" 
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
              >
                See all integration
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://www.stackbill.com/assets/images/sb-img/monitoring-all-in-one-integration.svg"
                  alt="All in one Integrated Solution"
                  className="w-full h-auto"
                />
              </div>
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
                src="/placeholder.svg"
                alt="StackWatch Dashboard showing monitoring metrics and alerts"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right - Product Cards */}
            <div className="space-y-4">
              {/* StackBill Card */}
              <a
                href="/platform/stackbill"
                className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="12" width="32" height="24" rx="2" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
                    <rect x="12" y="16" width="10" height="6" rx="1" fill="#FECACA" />
                    <rect x="12" y="24" width="24" height="2" rx="1" fill="#DC2626" />
                    <rect x="12" y="28" width="18" height="2" rx="1" fill="#FECACA" />
                    <circle cx="34" cy="19" r="5" fill="#DC2626" />
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
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    StackBill
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Unified CMP for building and operating self-service public cloud with billing.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all"
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
                className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
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
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    StackObject
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Highly available S3-compatible object storage with Ceph-backed durability.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all"
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
                className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
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
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    StackVault
                  </h3>
                  <p className="text-gray-600 text-sm">
                    CEPH-based backup, disaster recovery, and cloud storage services.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all"
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-700 to-green-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Monitor Smarter?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get complete visibility into your cloud infrastructure with StackWatch's AI-powered monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-gray-100 rounded-full px-8"
              asChild
            >
              <Link href="/contact">
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
              asChild
            >
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <TARSChatWidget />
    </div>
  )
}
