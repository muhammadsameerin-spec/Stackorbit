"use client"

import { StackWatchNavigation } from "@/components/stackwatch-navigation"
import { Footer } from "@/components/footer"
import { TARSChatWidget } from "@/components/tars-chat-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Activity, AlertCircle, BarChart3, Play, Server, LayoutDashboard, Bell, ChevronRight } from "lucide-react"

export default function StackWatchPage() {
  return (
    <div className="min-h-screen bg-background">
      <StackWatchNavigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-700/10 border border-emerald-400 rounded-full mb-6">
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Cloud Health Insights
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-tight">
                StackWatch <span className="text-emerald-800">Monitoring</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 mb-4 font-medium">
                Monitoring for Cloud Users. Intelligence for Cloud Operators.
              </p>
              <div className="text-base text-muted-foreground mb-3 leading-relaxed space-y-3">
                <p>
                  StackWatch gives cloud service providers real-time visibility into their infrastructure while enabling Monitoring-as-a-Service for customer virtual machines. Providers gain centralized insights across compute, storage, and network resources, while end users access simple, self-service VM monitoring.
                </p>
                <p>
                  With flexible pricing models—per VM, per device, or by usage—StackWatch turns cloud monitoring into a monetizable service, helping providers reduce operational risk, improve uptime, and generate recurring revenue.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-start mt-8">
                <Button
                  size="lg"
                  className="bg-emerald-800 text-white hover:bg-emerald-900 rounded-full px-6"
                  asChild
                >
                  <Link href="/platform/stackwatch/features">Explore StackWatch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground px-4"
                  asChild
                >
                  <Link href="/resources/datasheet" className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Download Solution Brief
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Monitoring Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <img
                  src="https://www.stackbill.com/assets/images/sb-img/cloud-infrastructure-monitoring.svg"
                  alt="Cloud Infrastructure Monitoring"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why StackWatch */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Why StackWatch?</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">
            StackWatch gives cloud users and service providers real-time visibility into workloads and infrastructure—combining VM-level monitoring with platform-wide operational intelligence.
          </p>
          
          {/* Value Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-background hover:border-emerald-700/30 hover:shadow-lg hover:shadow-emerald-700/5 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-700/10 flex items-center justify-center mb-4 mx-auto">
                  <Activity className="text-emerald-800" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Self-Service VM Monitoring</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Empower users to track their own VM performance, resource usage, and health metrics in real time.</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-background hover:border-emerald-700/30 hover:shadow-lg hover:shadow-emerald-700/5 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-700/10 flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="text-emerald-800" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Operator-Level Cloud Insights</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Gain full visibility across hosts, clusters, and zones to optimize capacity and ensure platform stability.</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-background hover:border-emerald-700/30 hover:shadow-lg hover:shadow-emerald-700/5 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-700/10 flex items-center justify-center mb-4 mx-auto">
                  <AlertCircle className="text-emerald-800" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Proactive Alerts & Anomalies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Detect issues before they escalate with AI-driven anomaly detection and customizable alert thresholds.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simplifying Cloud Monitoring */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Simplifying How Cloud Environments Are Monitored and Operated</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Monitor your virtual machines and applications with self-service, real-time insights while cloud operators maintain full infrastructure visibility.
          </p>
          
          {/* StackWatch Infographic */}
          <div className="flex justify-center">
            <img 
              src="/images/stackwatch-infographic.png" 
              alt="StackWatch monitoring architecture showing VM Monitoring, Cloud Operations, and Intelligent Alerts" 
              className="w-full max-w-4xl rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* How StackWatch Works - Infographic Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">How StackWatch Works</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From workload monitoring to cloud-wide operational intelligence.
            </p>
          </div>

          {/* Infographic Flow */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-[100px] left-[16%] right-[16%] h-1 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-400 rounded-full" />
            
            {/* Steps Container */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Step 1 - Agent */}
              <div className="relative flex flex-col items-center text-center group">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-emerald-700/30">
                    1
                  </div>
                </div>
                
                {/* Icon Circle */}
                <div className="relative z-10 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-2xl shadow-emerald-700/30 group-hover:scale-105 transition-transform duration-300 mb-6">
                  <div className="w-[120px] h-[120px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Server className="w-12 h-12 text-white" />
                  </div>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-500/50 animate-pulse" />
                </div>
                
                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200 w-full max-w-[280px] hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Lightweight VM Agent</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Install on Linux or Windows VMs to collect real-time CPU, memory, disk & network metrics.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-900 text-xs font-medium rounded-full">Linux</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-900 text-xs font-medium rounded-full">Windows</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-900 text-xs font-medium rounded-full">Low Overhead</span>
                  </div>
                </div>
                
                {/* Arrow - Mobile */}
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center rotate-90">
                    <ChevronRight className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
              </div>
              
              {/* Step 2 - Platform */}
              <div className="relative flex flex-col items-center text-center group">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-8 h-8 rounded-full bg-green-700 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-green-700/30">
                    2
                  </div>
                </div>
                
                {/* Icon Circle */}
                <div className="relative z-10 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-green-600 to-cyan-600 flex items-center justify-center shadow-2xl shadow-green-700/30 group-hover:scale-105 transition-transform duration-300 mb-6">
                  <div className="w-[120px] h-[120px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <LayoutDashboard className="w-12 h-12 text-white" />
                  </div>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-green-500/50 animate-pulse" />
                </div>
                
                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-200 w-full max-w-[280px] hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Centralized Platform</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    All metrics flow into StackWatch for aggregation, correlation & analysis across VMs, clusters & zones.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-2 py-1 bg-green-100 text-green-900 text-xs font-medium rounded-full">Dashboards</span>
                    <span className="px-2 py-1 bg-green-100 text-green-900 text-xs font-medium rounded-full">Multi-tenant</span>
                    <span className="px-2 py-1 bg-green-100 text-green-900 text-xs font-medium rounded-full">CloudStack</span>
                  </div>
                </div>
                
                {/* Arrow - Mobile */}
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center rotate-90">
                    <ChevronRight className="w-6 h-6 text-green-700" />
                  </div>
                </div>
              </div>
              
              {/* Step 3 - Insights */}
              <div className="relative flex flex-col items-center text-center group">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    3
                  </div>
                </div>
                
                {/* Icon Circle */}
                <div className="relative z-10 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-300 mb-6">
                  <div className="w-[120px] h-[120px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Bell className="w-12 h-12 text-white" />
                  </div>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-300/50 animate-pulse" />
                </div>
                
                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 w-full max-w-[280px] hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Insights & Alerts</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Transform metrics into actionable insights with intelligent alerts & AI-powered anomaly detection.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Real-time</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">AI Alerts</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Anomalies</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 p-6 sm:p-8 shadow-xl shadow-emerald-700/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left - Title & Info */}
              <div className="text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Flexible Add-On Pricing</h2>
                <p className="text-white/80 text-sm">
                  Volume discounts available for large-scale deployments
                </p>
              </div>
              
              {/* Center - Price */}
              <div className="flex items-baseline gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="text-3xl sm:text-4xl font-bold text-white">$10</span>
                <span className="text-white/80 text-sm">per host / month</span>
              </div>
              
              {/* Right - CTA */}
              <div className="text-center md:text-right">
                <p className="text-white/70 text-xs mb-2">Add to any StackOrbit license or bundle</p>
                <Button 
                  size="sm" 
                  className="bg-white text-emerald-900 hover:bg-gray-100 rounded-full px-5"
                  asChild
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-800 to-green-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Monitor Smarter?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Give your sovereign cloud full visibility — without vendor lock-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-gray-100 rounded-full px-8"
              asChild
            >
              <Link href="/contact">
                Try StackWatch <ArrowRight className="ml-2 w-4 h-4" />
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
