"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Database, Activity, Bot, Server, Globe, ShoppingBag, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const scenarios = [
  {
    prompt: "Launch a full-stack cloud platform—on your infrastructure, on your terms.",
    focus: "Public Cloud / Sovereign Cloud",
    title: "Sovereign Cloud Platform",
    image: "https://www.stackbill.com/assets/images/sb-img/stackbill-dashboard.svg",
    regions: [
      { name: "EU-Central", zones: "3 zones", status: "active", color: "green" },
      { name: "Asia-Pacific", zones: "2 zones", status: "active", color: "green" },
      { name: "Middle East", zones: "2 zones", status: "deploying", color: "yellow" },
    ],
    stats: [
      { value: "156", label: "Compute Hosts" },
      { value: "3.2 PB", label: "Storage" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "2,840", label: "VMs Active" },
    ],
    activities: [
      {
        status: "green",
        title: "Data sovereignty compliance verified",
        desc: "All regions meet local regulations",
        time: "1m ago",
      },
      {
        status: "blue",
        title: "Multi-region billing activated",
        desc: "Currency localization enabled",
        time: "3m ago",
      },
      { status: "purple", title: "Edge locations deployed", desc: "Low-latency access for all zones", time: "6m ago" },
    ],
  },
  {
    prompt: "From rack to revenue, StackOrbit runs your cloud end-to-end.",
    focus: "Public Cloud / Multi-Region",
    title: "Multi-Region B2B Cloud",
    regions: [
      { name: "US-East", zones: "4 zones", status: "active", color: "green" },
      { name: "US-West", zones: "3 zones", status: "active", color: "green" },
      { name: "Canada", zones: "2 zones", status: "active", color: "green" },
    ],
    stats: [
      { value: "248", label: "Compute Hosts" },
      { value: "5.8 PB", label: "Storage" },
      { value: "99.9%", label: "Uptime" },
      { value: "4,120", label: "VMs Active" },
    ],
    activities: [
      { status: "green", title: "Auto-scaling enabled", desc: "Dynamic resource allocation active", time: "2m ago" },
      { status: "blue", title: "B2B portal launched", desc: "Self-service provisioning for customers", time: "5m ago" },
      { status: "purple", title: "API gateway deployed", desc: "Unified access across all regions", time: "8m ago" },
    ],
  },
  {
    prompt: "Deliver anything-as-a-service from a single cloud platform.",
    focus: "Public Cloud / Marketplace",
    title: "IaaS Marketplace Platform",
    regions: [
      { name: "Global North", zones: "5 zones", status: "active", color: "green" },
      { name: "Global South", zones: "3 zones", status: "active", color: "green" },
      { name: "Edge Network", zones: "8 zones", status: "active", color: "green" },
    ],
    stats: [
      { value: "320", label: "Compute Hosts" },
      { value: "7.5 PB", label: "Storage" },
      { value: "250+", label: "Marketplace Apps" },
      { value: "6,890", label: "VMs Active" },
    ],
    activities: [
      { status: "green", title: "App marketplace live", desc: "One-click deployment for 250+ apps", time: "1m ago" },
      { status: "blue", title: "Revenue tracking enabled", desc: "Real-time billing and analytics", time: "4m ago" },
      { status: "purple", title: "Partner API activated", desc: "Third-party app integration ready", time: "7m ago" },
    ],
  },
  {
    prompt: "StackOps: Managed cloud operations built for service providers.",
    focus: "Enterprise / Private Cloud",
    title: "Enterprise Private Cloud",
    regions: [
      { name: "On-Premises DC", zones: "2 zones", status: "active", color: "green" },
      { name: "DR Site", zones: "1 zone", status: "active", color: "green" },
      { name: "Edge Locations", zones: "3 zones", status: "active", color: "green" },
    ],
    stats: [
      { value: "96", label: "Compute Hosts" },
      { value: "2.1 PB", label: "Storage" },
      { value: "100%", label: "Data Control" },
      { value: "1,580", label: "VMs Active" },
    ],
    activities: [
      {
        status: "green",
        title: "TARS AI assistant activated",
        desc: "Automated operations and monitoring",
        time: "2m ago",
      },
      { status: "blue", title: "Disaster recovery configured", desc: "Automatic failover to DR site", time: "5m ago" },
      { status: "purple", title: "Compliance audit passed", desc: "ISO 27001 and SOC 2 certified", time: "9m ago" },
    ],
  },
]

export function InteractiveCloudDemo() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const scenario = scenarios[currentScenario]

  // Typing animation - sequential flow
  useEffect(() => {
    const targetText = scenario.prompt
    let charIndex = 0
    let cancelled = false
    const cleanups: Array<ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>> = []

    // Reset state for this scenario
    setTypedText("")
    setIsTyping(true)
    setShowContent(false)

    // Step 1: Type the text character by character
    const typingInterval = setInterval(() => {
      if (cancelled) return
      charIndex++
      if (charIndex <= targetText.length) {
        setTypedText(targetText.slice(0, charIndex))
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)

        // Step 2: Show content after a brief pause
        const showTimer = setTimeout(() => {
          if (cancelled) return
          setShowContent(true)

          // Step 3: Hold content visible, then move to next
          const holdTimer = setTimeout(() => {
            if (cancelled) return
            setShowContent(false)

            const nextTimer = setTimeout(() => {
              if (cancelled) return
              setCurrentScenario((prev) => (prev + 1) % scenarios.length)
            }, 600)
            cleanups.push(nextTimer)
          }, 5000)
          cleanups.push(holdTimer)
        }, 400)
        cleanups.push(showTimer)
      }
    }, 30)
    cleanups.push(typingInterval)

    return () => {
      cancelled = true
      cleanups.forEach((id) => {
        if (typeof id === "number") {
          clearTimeout(id)
          clearInterval(id)
        }
      })
    }
    // Only re-run when scenario changes
  }, [currentScenario])

  const getIcon = () => {
    switch (currentScenario) {
      case 0:
        return <Globe className="text-accent" size={20} />
      case 1:
        return <Server className="text-accent" size={20} />
      case 2:
        return <ShoppingBag className="text-accent" size={20} />
      case 3:
        return <Building2 className="text-accent" size={20} />
      default:
        return <Globe className="text-accent" size={20} />
    }
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" aria-label="Interactive cloud platform demo">
      <div className="container mx-auto flex justify-center" style={{ maxWidth: '1400px' }}>
        <div className="relative bg-gradient-to-br from-[#0A2E3E] to-[#143D52] rounded-3xl p-6 md:p-8 overflow-hidden w-[78%]" style={{ maxHeight: '764px' }}>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-5">
            {/* Prompt Input with Typing Animation */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-3 md:p-4 max-w-3xl mx-auto">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">{getIcon()}</div>
                  <div className="flex-1">
                    <div className="text-base md:text-lg text-gray-800 font-medium min-h-[48px] flex items-center">
                      {typedText}
                      {isTyping && <span className="inline-block w-0.5 h-5 bg-accent ml-1 animate-pulse" />}
                    </div>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gray-900 rounded-full flex items-center justify-center" aria-hidden="true">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Interface Mockup with Transition */}
            <div
              className={`max-w-6xl mx-auto transition-all duration-700 ${
                showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Show image for first scenario - full size without frame */}
              {scenario.image ? (
                <div className="relative h-[350px] sm:h-[400px] md:h-[440px]">
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/10 to-purple-500/20 rounded-3xl blur-2xl pointer-events-none" />
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                    <img 
                      src={scenario.image || "/placeholder.svg"} 
                      alt={scenario.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                  {/* App Header */}
                  <div className="bg-gray-800/80 border-b border-white/10 px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex gap-1.5 sm:gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-white font-semibold text-xs sm:text-base truncate">{scenario.title}</span>
                    </div>
                    <span className="bg-accent text-white text-xs sm:text-sm px-2 sm:px-4 py-1 rounded-md font-medium" aria-hidden="true">
                      Deploy Now
                    </span>
                  </div>

                  {/* App Content */}
                  <div className="flex flex-col md:flex-row">
                    {/* Sidebar - Hidden on mobile */}
                    <div className="hidden md:block w-64 bg-gray-900/50 border-r border-white/10 p-6 space-y-6">
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Infrastructure</div>
                        <div className="space-y-1">
                          <div className="px-3 py-2 rounded-lg bg-accent/20 text-white text-sm font-medium">
                            Regions & Zones
                          </div>
                          <div className="px-3 py-2 rounded-lg text-gray-400 text-sm hover:bg-white/5">Compute Hosts</div>
                          <div className="px-3 py-2 rounded-lg text-gray-400 text-sm hover:bg-white/5">Storage Pools</div>
                          <div className="px-3 py-2 rounded-lg text-gray-400 text-sm hover:bg-white/5">
                            Network Config
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Management</div>
                        <div className="space-y-1">
                          <div className="px-3 py-2 rounded-lg text-gray-400 text-sm hover:bg-white/5 flex items-center gap-2">
                            <Database size={16} />
                            StackBill
                          </div>
                          <div className="px-3 py-2 rounded-lg text-gray-400 text-sm hover:bg-white/5 flex items-center gap-2">
                            <Activity size={16} />
                            StackWatch
                          </div>
                          <div className="px-3 py-2 rounded-lg text-gray-400 text-sm hover:bg-white/5 flex items-center gap-2">
                            <Bot size={16} />
                            TARS AI
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                      {/* Region Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                        {scenario.regions.map((region, idx) => (
                          <div
                            key={idx}
                            className={`bg-gradient-to-br ${
                              region.color === "green"
                                ? "from-accent/20 to-accent/5 border-accent/30"
                                : region.color === "yellow"
                                  ? "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30"
                                  : "from-primary/20 to-primary/5 border-primary/30"
                            } border rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-500`}
                          >
                            <div className="flex items-center gap-2 mb-1 sm:mb-2">
                              <div
                                className={`w-2 h-2 rounded-full ${region.color === "green" ? "bg-green-500" : "bg-yellow-500"}`}
                              />
                              <span className="text-white font-medium text-xs sm:text-sm">{region.name}</span>
                            </div>
                            <div className="text-gray-400 text-[10px] sm:text-xs">{region.zones}</div>
                          </div>
                        ))}
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                        {scenario.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 transition-all duration-500"
                          >
                            <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-[10px] sm:text-xs text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Activity Feed */}
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
                        <div className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">Recent Activity</div>
                        {scenario.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm transition-all duration-500">
                            <div
                              className={`w-2 h-2 rounded-full mt-1 sm:mt-1.5 flex-shrink-0 ${
                                activity.status === "green"
                                  ? "bg-green-500"
                                  : activity.status === "blue"
                                    ? "bg-accent"
                                    : "bg-purple-500"
                              }`}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-white text-xs sm:text-sm truncate">{activity.title}</div>
                              <div className="text-gray-400 text-[10px] sm:text-xs truncate">{activity.desc}</div>
                            </div>
                            <div className="text-gray-400 text-[10px] sm:text-xs flex-shrink-0">{activity.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                            )}
            </div>

            {/* Scenario Indicators */}
            <div className="flex justify-center gap-2">
              {scenarios.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setShowContent(false)
                    setIsTyping(true)
                    setTypedText("")
                    setCurrentScenario(idx)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentScenario ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to scenario ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
