"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Download,
  DollarSign,
  Wrench,
  Package,
  Sparkles,
  Calculator,
  ChevronRight,
  ArrowRight,
  Upload,
  FileUp,
  FileSpreadsheet,
  FileText,
  CheckCircle2,
  Cpu,
  HardDrive,
  Clock,
  MessageSquare,
  FileDown,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function ROICalculatorPage() {
  const [datacenterLocation, setDatacenterLocation] = useState<"eu" | "usa">("usa")
  const [infrastructureStartingPoint, setInfrastructureStartingPoint] = useState<"scratch" | "existing">("scratch")
  const currencySymbol = datacenterLocation === "usa" ? "$" : "€"

  const [showBOMCalculator, setShowBOMCalculator] = useState(false)
  const [showTCOCalculator, setShowTCOCalculator] = useState(false) // Added state for TCO calculator visibility

  const [bomTCOCalculated, setBomTCOCalculated] = useState(false)
  const [showBOMResults, setShowBOMResults] = useState(false)

  // Infrastructure inputs
  const [numRegions, setNumRegions] = useState(1)
  const [numZones, setNumZones] = useState(1)
  const [storageType, setStorageType] = useState("local")
  const [totalStorage, setTotalStorage] = useState(3)
  const [cephObjectStorageSetup, setCephObjectStorageSetup] = useState(false)
  const [zoneHosts, setZoneHosts] = useState<number[]>([3])

  // GPU inputs
  const [gpuRequired, setGpuRequired] = useState(false)
  const [setupGPU, setSetupGPU] = useState(false)
  const [gpuType, setGpuType] = useState("gpu")
  const [numGPUs, setNumGPUs] = useState(1)

  // Platform & Licensing
  const [stackOrbitPlan, setStackOrbitPlan] = useState("OrbitManage")
  const [stackBillLicense, setStackBillLicense] = useState("subscription")

  // Support Plan
  const [supportPlan, setSupportPlan] = useState("OrbitAssist")

  // Add-ons
  const [addOns, setAddOns] = useState({
    stackWatch: false,
    stackVault: false,
    stackObject: false,
    marketplaceApps: false,
    tars: false,
    stackAcademy: false,
  })

  const [stackWatchNodes, setStackWatchNodes] = useState(3)
  const [stackVaultNodes, setStackVaultNodes] = useState(3)
  const [stackObjectNodes, setStackObjectNodes] = useState(3)
  const [marketplaceApps, setMarketplaceApps] = useState(50)
  const [tarsUsers, setTarsUsers] = useState(100)
  const [stackAcademyHours, setStackAcademyHours] = useState(10)

  // BOM Calculator States
  const [bomFile, setBomFile] = useState<File | null>(null)
  const [bomPlan, setBomPlan] = useState("OrbitManage")
  const [bomCpuRatio, setBomCpuRatio] = useState(4)
  const [bomStorageRatio, setBomStorageRatio] = useState(2)
  const [bomStorageTB, setBomStorageTB] = useState(250)
  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactMessage, setContactMessage] = useState("")
  const [bomAnalyzing, setBomAnalyzing] = useState(false)
  const [bomRecommendations, setBomRecommendations] = useState<string>("")
  const [bomError, setBomError] = useState<string>("")

  const [bomCostEstimates, setBomCostEstimates] = useState<{
    vmwareSoftware: number
    hypervisorHardware: number
    datacenterServices: number
  } | null>(null)

  const [tarsRecommendations, setTarsRecommendations] = useState<string[]>([]) // Changed to array
  const [isAnalyzing, setIsAnalyzing] = useState(false) // Added loading state

  const handleGenerateTCO = () => {
    if (bomFile && tarsRecommendations.length > 0 && bomCostEstimates) {
      setBomTCOCalculated(true)
      setShowBOMResults(true)
    }
  }

  useEffect(() => {
    if (stackOrbitPlan === "OrbitFlex" || stackOrbitPlan === "OrbitInfinity") {
      setSupportPlan("OrbitAssist")
    } else if (stackOrbitPlan === "OrbitManage") {
      setSupportPlan("OrbitShield")
    }
  }, [stackOrbitPlan])

  useEffect(() => {
    setZoneHosts((prev) => {
      const newArray = [...prev]
      while (newArray.length < numZones) {
        newArray.push(3)
      }
      while (newArray.length > numZones) {
        newArray.pop()
      }
      return newArray
    })
  }, [numZones])

  const totalHosts = zoneHosts.reduce((sum, hosts) => sum + hosts, 0)

  useEffect(() => {
    setStackWatchNodes(totalHosts)
  }, [totalHosts])

  useEffect(() => {
    setStackVaultNodes(totalHosts)
  }, [totalHosts])

  useEffect(() => {
    setStackObjectNodes(totalHosts)
  }, [totalHosts])

  // Email modal
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [email, setEmail] = useState("")
  const [contactMe, setContactMe] = useState(false)

  const tcoTermYears = 5

  // Cost calculations
  const hostCostPerNode = stackOrbitPlan === "OrbitManage" ? 199 : 99

  const oneTimeCosts: { [key: string]: number } = {}
  const monthlyRecurringCosts: { [key: string]: number } = {}
  const addOnCosts: { [key: string]: number } = {}

  // Region and Zone setup costs (one-time, only for new setup)
  if (infrastructureStartingPoint === "scratch") {
    const zoneSetupCost = stackOrbitPlan === "OrbitManage" ? 2500 : 500
    if (numRegions > 0) {
      oneTimeCosts["Region Setup"] = numRegions * 1000
    }
    if (numZones > 0) {
      oneTimeCosts["Zone Setup"] = numZones * zoneSetupCost
    }
  }

  // Hypervisor Hosts (monthly recurring)
  if (totalHosts > 0) {
    monthlyRecurringCosts[`Hypervisor Hosts (${totalHosts} nodes)`] = totalHosts * hostCostPerNode
  }

  // CEPH Storage
  if (storageType === "ceph" && totalStorage > 0) {
    oneTimeCosts["CEPH Storage Setup"] = totalStorage * 500
    monthlyRecurringCosts[`CEPH Storage (${totalStorage} hosts)`] = totalStorage * 50
  }

  // CEPH Object Storage Setup
  if (cephObjectStorageSetup && totalStorage > 0) {
    oneTimeCosts["CEPH Object Storage Setup"] = totalStorage * 300
  }

  // StackWatch (AddOn)
  if (addOns.stackWatch && stackWatchNodes > 0) {
    addOnCosts[`StackWatch (${stackWatchNodes} nodes)`] = stackWatchNodes * 20
  }

  // StackVault (AddOn)
  if (addOns.stackVault && stackVaultNodes > 0) {
    addOnCosts[`StackVault (${stackVaultNodes} nodes)`] = stackVaultNodes * 50
  }

  // StackObject (AddOn)
  if (addOns.stackObject && stackObjectNodes > 0) {
    addOnCosts[`StackObject (${stackObjectNodes} hosts)`] = stackObjectNodes * 20
  }

  // Marketplace Apps (one-time only)
  if (addOns.marketplaceApps) {
    oneTimeCosts[`Marketplace Apps (${marketplaceApps} apps)`] = marketplaceApps * 10
  }

  // TARS (AddOn)
  if (addOns.tars && tarsUsers > 0) {
    addOnCosts[`TARS (${tarsUsers} users)`] = tarsUsers * 0.5
  }

  // Stack Academy (one-time only)
  if (addOns.stackAcademy) {
    oneTimeCosts[`Stack Academy (${stackAcademyHours} hours)`] = (stackAcademyHours / 10) * 500
  }

  // GPU Costs
  if (gpuRequired && numGPUs > 0) {
    const gpuMonthlyCost = gpuType === "gpu" ? 199 : 99
    addOnCosts[`GPU Servers (${numGPUs} servers)`] = numGPUs * gpuMonthlyCost

    if (setupGPU && gpuType === "gpu") {
      oneTimeCosts[`GPU Setup (${numGPUs} servers)`] = numGPUs * 199
    }
  }

  const totalOneTimeCost = Object.values(oneTimeCosts).reduce((sum, cost) => sum + cost, 0)
  const totalMonthlyRecurringCost = Object.values(monthlyRecurringCosts).reduce((sum, cost) => sum + cost, 0)
  const totalAddOnCost = Object.values(addOnCosts).reduce((sum, cost) => sum + cost, 0)
  const totalRecurringPerMonth = totalMonthlyRecurringCost + totalAddOnCost
  const totalCost = totalOneTimeCost + totalRecurringPerMonth

  const handleDownload = () => {
    alert(`Report will be sent to: ${email}`)
    setShowEmailModal(false)
  }

  const snapToNearestValue = (value: number, validValues: number[]) => {
    return validValues.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    })
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setBomFile(file)
    setIsAnalyzing(true)
    setTarsRecommendations([])
    setBomCostEstimates(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/analyze-bom", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setTarsRecommendations(data.recommendations || [])
        setBomCostEstimates(data.costEstimates || null)
        console.log("[v0] BOM analysis successful, cost estimates:", data.costEstimates)
      } else {
        setTarsRecommendations(["Failed to analyze BOM: " + (data.details || data.error)])
      }
    } catch (error) {
      console.error("[v0] Upload error:", error)
      setTarsRecommendations(["Error uploading file. Please try again."])
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      <main className="container mx-auto px-4 py-20 max-w-7xl relative">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Calculator className="w-4 h-4" />
            Interactive ROI Calculator
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Can I Build a Profitable Sovereign Cloud with StackOrbit?
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Use this ROI calculator to estimate the cost, revenue, and profitability of building a sovereign public
            cloud using StackOrbit's federated platform, StackBill CMP, and AI-assisted operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl hover:border-white/30 transition-all duration-500 relative overflow-hidden">
              {/* Gradient orbs for depth */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl opacity-50" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl opacity-50" />

              <div className="relative z-10 space-y-8">
                {/* Choose Your Currency */}
                <div>
                  <h2 className="text-sm font-bold mb-0.5 text-gray-900 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Choose Your Currency
                  </h2>
                  <p className="text-xs text-gray-600 mb-3 ml-3">(cost estimation)</p>

                  <div className="grid grid-cols-2 gap-3 max-w-md">
                    <button
                      onClick={() => setDatacenterLocation("eu")}
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 min-h-[100px] flex items-center justify-center backdrop-blur-sm ${
                        datacenterLocation === "eu"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl shadow-blue-500/30"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-10 rounded-lg overflow-hidden shadow-lg">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                            alt="EU Flag"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span
                          className={`text-sm font-bold ${datacenterLocation === "eu" ? "text-blue-600" : "text-gray-600"}`}
                        >
                          EURO
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => setDatacenterLocation("usa")}
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 min-h-[100px] flex items-center justify-center backdrop-blur-sm ${
                        datacenterLocation === "usa"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl shadow-blue-500/30"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-10 rounded-lg overflow-hidden shadow-lg">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                            alt="USA Flag"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span
                          className={`text-sm font-bold ${datacenterLocation === "usa" ? "text-blue-600" : "text-gray-600"}`}
                        >
                          USD
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Infrastructure Starting Point */}
                <div>
                  <h2 className="text-sm font-bold mb-0.5 text-gray-900 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Infrastructure Starting Point
                  </h2>
                  <p className="text-xs text-gray-600 mb-3 ml-3">Choose your deployment scenario</p>

                  <RadioGroup
                    value={infrastructureStartingPoint}
                    onValueChange={(value) => setInfrastructureStartingPoint(value as "scratch" | "existing")}
                    className="space-y-3"
                  >
                    <div
                      className={`relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                        infrastructureStartingPoint === "existing"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                      onClick={() => setInfrastructureStartingPoint("existing")}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value="existing" id="existing" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="existing" className="text-sm font-semibold text-gray-900 cursor-pointer">
                            Already Running CloudStack?
                          </Label>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            Enhance your existing CloudStack setup with StackOrbit's platform, licensing, and enterprise
                            support — no infrastructure changes required.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                        infrastructureStartingPoint === "scratch"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                      onClick={() => setInfrastructureStartingPoint("scratch")}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value="scratch" id="scratch" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="scratch" className="text-sm font-semibold text-gray-900 cursor-pointer">
                            Starting from Scratch
                          </Label>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            Get a fully deployed and managed CloudStack environment with StackOrbit license and premium
                            support — ready for production from day one.
                          </p>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Section 2: Platform Licensing & Support */}
            <div className="group bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl hover:border-white/30 transition-all duration-500 relative overflow-hidden">
              {/* Gradient orbs for depth */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl opacity-50" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl opacity-50" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1 text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Platform Licensing & Support
                  </h2>
                  <p className="text-sm text-gray-600 ml-3">Select your StackOrbit plan and support level</p>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block ml-3">StackOrbit Plan</Label>
                  <RadioGroup value={stackOrbitPlan} onValueChange={setStackOrbitPlan} className="space-y-3">
                    <div
                      className={`relative p-5 rounded-2xl border-2 transition-all backdrop-blur-sm ${
                        stackOrbitPlan === "OrbitFlex"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : infrastructureStartingPoint === "scratch"
                            ? "border-gray-300/30 bg-gray-50/40 opacity-60"
                            : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      } ${infrastructureStartingPoint === "scratch" ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem
                          value="OrbitFlex"
                          id="orbitflex"
                          disabled={infrastructureStartingPoint === "scratch"}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor="orbitflex"
                            className={`text-sm font-semibold ${infrastructureStartingPoint === "scratch" ? "text-gray-400 cursor-not-allowed" : "text-gray-900 cursor-pointer"}`}
                          >
                            OrbitFlex
                          </Label>
                          <p className="text-xs text-gray-600 mt-1">Pay-as-you-go (PayG) with Standard Support</p>
                        </div>
                      </div>
                      {infrastructureStartingPoint === "scratch" && (
                        <div className="mt-3 text-xs text-amber-700 bg-amber-50/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-amber-200/50 shadow-sm">
                          OrbitFlex is only available for existing CloudStack installations
                        </div>
                      )}
                    </div>

                    <div
                      className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                        stackOrbitPlan === "OrbitManage"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value="OrbitManage" id="orbitmanage" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="orbitmanage" className="text-sm font-semibold text-gray-900 cursor-pointer">
                            OrbitManage
                          </Label>
                          <p className="text-xs text-gray-600 mt-1">
                            Pay-as-you-go (PayG) with 24/7 Fully Managed Service
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                        stackOrbitPlan === "OrbitInfinity"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value="OrbitInfinity" id="orbitinfinity" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="orbitinfinity" className="text-sm font-semibold text-gray-900 cursor-pointer">
                            OrbitInfinity
                          </Label>
                          <p className="text-xs text-gray-600 mt-1">
                            One-time perpetual license (AMC: 20% of license cost)
                          </p>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block ml-3">Support Plan</Label>
                  <RadioGroup value={supportPlan} onValueChange={setSupportPlan} className="space-y-3">
                    <div
                      className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                        supportPlan === "OrbitAssist"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value="OrbitAssist" id="orbitassist" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="orbitassist" className="text-sm font-semibold text-gray-900 cursor-pointer">
                            OrbitAssist
                          </Label>
                          <p className="text-xs text-gray-600 mt-1">Standard Product Support</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                        supportPlan === "OrbitShield"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value="OrbitShield" id="orbitshield" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="orbitshield" className="text-sm font-semibold text-gray-900 cursor-pointer">
                            OrbitShield
                          </Label>
                          <p className="text-xs text-gray-600 mt-1">24×7 Priority Dedicated Support with SLA</p>
                        </div>
                      </div>
                      {stackOrbitPlan === "OrbitManage" && (
                        <div className="mt-3 text-xs text-blue-700 bg-blue-50/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-200/50 shadow-sm">
                          OrbitShield is included with OrbitManage
                        </div>
                      )}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Section 3: Infrastructure Inputs */}
            <div className="group bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl hover:border-white/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1 text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Infrastructure Inputs
                  </h2>
                  <p className="text-sm text-gray-600 ml-3">Define your cloud infrastructure requirements</p>
                </div>

                {/* Region and Zone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2 block ml-3">Region</Label>
                    <p className="text-xs text-gray-600 mb-3 ml-3">Choose the number of Region</p>
                    <div className="flex items-center gap-3 px-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setNumRegions(Math.max(1, numRegions - 1))}
                        className="h-10 w-10 rounded-full border-gray-300/50 bg-white/60 hover:bg-white/80"
                      >
                        -
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-2xl font-bold text-gray-900">{numRegions}</div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setNumRegions(Math.min(10, numRegions + 1))}
                        className="h-10 w-10 rounded-full border-gray-300/50 bg-white/60 hover:bg-white/80"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2 block ml-3">Zone(s)</Label>
                    <p className="text-xs text-gray-600 mb-3 ml-3">Choose the number of Zone</p>
                    <div className="flex items-center gap-3 px-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setNumZones(Math.max(1, numZones - 1))}
                        className="h-10 w-10 rounded-full border-gray-300/50 bg-white/60 hover:bg-white/80"
                      >
                        -
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-2xl font-bold text-gray-900">{numZones}</div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setNumZones(Math.min(10, numZones + 1))}
                        className="h-10 w-10 rounded-full border-gray-300/50 bg-white/60 hover:bg-white/80"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Hypervisor Hosts per Zone */}
                <div className="space-y-4">
                  {zoneHosts.map((hosts, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs font-medium text-gray-700 ml-3">
                          Number of Hypervisor Hosts {numZones > 1 ? `(Zone ${index + 1})` : ""}
                        </Label>
                        <span className="text-sm font-bold text-blue-600 mr-3">{hosts} Nodes</span>
                      </div>
                      <Slider
                        value={[hosts]}
                        onValueChange={(value) => {
                          const newZoneHosts = [...zoneHosts]
                          newZoneHosts[index] = value[0]
                          setZoneHosts(newZoneHosts)
                        }}
                        min={3}
                        max={100}
                        step={1}
                        className="py-4 px-3"
                      />
                      <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                        <span>3 Nodes (Min)</span>
                        <span>100 Nodes (Max)</span>
                      </div>
                    </div>
                  ))}

                  {numZones > 1 && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50/70 to-purple-50/70 rounded-xl border border-blue-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-700">Total Across All Zones:</span>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">{totalHosts} nodes</div>
                          <div className="text-xs text-gray-600">
                            {currencySymbol}
                            {(totalHosts * hostCostPerNode).toLocaleString()}/mo
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Storage Type */}
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block ml-3">Storage Type</Label>
                  <RadioGroup value={storageType} onValueChange={setStorageType} className="space-y-3">
                    <div
                      className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                        storageType === "local"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="local" id="local-storage" />
                        <Label htmlFor="local-storage" className="text-sm font-semibold text-gray-900 cursor-pointer">
                          Local Storage
                        </Label>
                      </div>
                    </div>

                    <div
                      className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                        storageType === "enterprise"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="enterprise" id="enterprise-storage" />
                        <Label
                          htmlFor="enterprise-storage"
                          className="text-sm font-semibold text-gray-900 cursor-pointer"
                        >
                          Enterprise Storage (NAS/SAN)
                        </Label>
                      </div>
                    </div>

                    <div
                      className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                        storageType === "ceph"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                          : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="ceph" id="ceph-storage" />
                        <Label htmlFor="ceph-storage" className="text-sm font-semibold text-gray-900 cursor-pointer">
                          CEPH (Software Defined Storage)
                        </Label>
                      </div>
                      {storageType === "ceph" && (
                        <div className="mt-4 space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <Label className="text-xs font-medium text-gray-700 ml-3">Number of CEPH Hosts</Label>
                              <span className="text-sm font-bold text-purple-600 mr-3">{totalStorage} hosts</span>
                            </div>
                            <Slider
                              value={[totalStorage]}
                              onValueChange={(value) => setTotalStorage(value[0])}
                              min={3}
                              max={30}
                              step={1}
                              className="py-4 px-3"
                            />
                            <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                              <span>3 hosts (Min)</span>
                              <span>30 hosts (Max)</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-purple-50/70 rounded-lg border border-purple-200/50 backdrop-blur-sm">
                            <Checkbox
                              id="ceph-object-storage"
                              checked={cephObjectStorageSetup}
                              onCheckedChange={(checked) => setCephObjectStorageSetup(checked as boolean)}
                            />
                            <Label htmlFor="ceph-object-storage" className="text-xs font-medium text-gray-700">
                              Setup New SDS for Object Storage
                            </Label>
                          </div>
                        </div>
                      )}
                    </div>
                  </RadioGroup>

                  {storageType === "ceph" && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-purple-50/70 to-blue-50/70 rounded-xl border border-purple-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-700">Total CEPH Storage Cluster:</span>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-600">{totalStorage} hosts</div>
                          <div className="text-xs text-gray-600">
                            Setup: {currencySymbol}
                            {(totalStorage * 500).toLocaleString()} | Monthly: {currencySymbol}
                            {(totalStorage * 50).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 4: Optional Add-Ons */}
            <div className="group bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl hover:border-white/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1 text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Optional Add-Ons
                  </h2>
                  <p className="text-sm text-gray-600 ml-3">Enhance your cloud with additional services</p>
                </div>

                {/* StackWatch */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="stackwatch"
                      checked={addOns.stackWatch}
                      onCheckedChange={(checked) => setAddOns({ ...addOns, stackWatch: checked as boolean })}
                    />
                    <div className="flex-1">
                      <Label htmlFor="stackwatch" className="text-sm font-semibold text-gray-900 cursor-pointer">
                        StackWatch
                      </Label>
                      <p className="text-xs text-gray-600">Advance Monitoring & Alerting System</p>
                    </div>
                  </div>
                  {addOns.stackWatch && (
                    <div className="ml-8 p-4 bg-gradient-to-r from-blue-50/70 to-cyan-50/70 rounded-xl border border-blue-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs font-medium text-gray-700 ml-3">Number of Hypervisor Nodes</Label>
                        <span className="text-sm font-bold text-blue-600 mr-3">{stackWatchNodes} nodes</span>
                      </div>
                      <div className="relative px-3">
                        <div className="relative py-4">
                          <div className="relative h-1.5 w-full rounded-full bg-gray-300 overflow-hidden">
                            {/* Grey portion from min to base */}
                            <div
                              className="absolute h-full bg-gray-300"
                              style={{
                                left: 0,
                                width: `${((totalHosts - 3) / 97) * 100}%`,
                              }}
                            />
                            {/* Blue portion from base to current value */}
                            <div
                              className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600"
                              style={{
                                left: `${((totalHosts - 3) / 97) * 100}%`,
                                width: `${((stackWatchNodes - totalHosts) / 97) * 100}%`,
                              }}
                            />
                          </div>
                          <input
                            type="range"
                            min={3}
                            max={100}
                            step={1}
                            value={stackWatchNodes}
                            onChange={(e) => {
                              const value = Number.parseInt(e.target.value)
                              if (value >= totalHosts) {
                                setStackWatchNodes(value)
                              }
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 shadow-lg pointer-events-none"
                            style={{
                              left: `calc(${((stackWatchNodes - 3) / 97) * 100}% - 8px)`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                        <span>Min: 3</span>
                        <span>Base: {totalHosts}</span>
                        <span>Max: 100</span>
                      </div>
                      <div className="text-xs text-gray-600 px-3 mt-2">
                        Cost: {currencySymbol}
                        {(stackWatchNodes * 20).toLocaleString()}/mo
                      </div>
                    </div>
                  )}
                </div>

                {/* StackVault */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="stackvault"
                      checked={addOns.stackVault}
                      onCheckedChange={(checked) => setAddOns({ ...addOns, stackVault: checked as boolean })}
                    />
                    <div className="flex-1">
                      <Label htmlFor="stackvault" className="text-sm font-semibold text-gray-900 cursor-pointer">
                        StackVault
                      </Label>
                      <p className="text-xs text-gray-600">
                        DR-as-a-Service, required CEPH for primary & secondary storage
                      </p>
                    </div>
                  </div>
                  {addOns.stackVault && (
                    <div className="ml-8 p-4 bg-gradient-to-r from-purple-50/70 to-pink-50/70 rounded-xl border border-purple-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs font-medium text-gray-700 ml-3">Number of Hypervisor Nodes</Label>
                        <span className="text-sm font-bold text-purple-600 mr-3">{stackVaultNodes} nodes</span>
                      </div>
                      <div className="relative px-3">
                        <div className="relative py-4">
                          <div className="relative h-1.5 w-full rounded-full bg-gray-300 overflow-hidden">
                            {/* Grey portion from min to base */}
                            <div
                              className="absolute h-full bg-gray-300"
                              style={{
                                left: 0,
                                width: `${((totalHosts - 3) / 97) * 100}%`,
                              }}
                            />
                            {/* Purple portion from base to current value */}
                            <div
                              className="absolute h-full bg-gradient-to-r from-purple-500 to-purple-600"
                              style={{
                                left: `${((totalHosts - 3) / 97) * 100}%`,
                                width: `${((stackVaultNodes - totalHosts) / 97) * 100}%`,
                              }}
                            />
                          </div>
                          <input
                            type="range"
                            min={3}
                            max={100}
                            step={1}
                            value={stackVaultNodes}
                            onChange={(e) => {
                              const value = Number.parseInt(e.target.value)
                              if (value >= totalHosts) {
                                setStackVaultNodes(value)
                              }
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-purple-600 shadow-lg pointer-events-none"
                            style={{
                              left: `calc(${((stackVaultNodes - 3) / 97) * 100}% - 8px)`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                        <span>Min: 3</span>
                        <span>Base: {totalHosts}</span>
                        <span>Max: 100</span>
                      </div>
                      <div className="text-xs text-gray-600 px-3 mt-2">
                        Cost: {currencySymbol}
                        {(stackVaultNodes * 50).toLocaleString()}/mo
                      </div>
                    </div>
                  )}
                </div>

                {/* StackObject */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="stackobject"
                      checked={addOns.stackObject}
                      onCheckedChange={(checked) => setAddOns({ ...addOns, stackObject: checked as boolean })}
                    />
                    <div className="flex-1">
                      <Label htmlFor="stackobject" className="text-sm font-semibold text-gray-900 cursor-pointer">
                        StackObject
                      </Label>
                      <p className="text-xs text-gray-600">S3 compatible storage, required CEPH storage</p>
                    </div>
                  </div>
                  {addOns.stackObject && (
                    <div className="ml-8 p-4 bg-gradient-to-r from-green-50/70 to-emerald-50/70 rounded-xl border border-green-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs font-medium text-gray-700 ml-3">Number of Hypervisor Nodes</Label>
                        <span className="text-sm font-bold text-green-600 mr-3">{stackObjectNodes} nodes</span>
                      </div>
                      <div className="relative px-3">
                        <div className="relative py-4">
                          <div className="relative h-1.5 w-full rounded-full bg-gray-300 overflow-hidden">
                            <div
                              className="absolute h-full bg-gray-300"
                              style={{
                                left: 0,
                                width: `${((totalHosts - 3) / 97) * 100}%`,
                              }}
                            />
                            <div
                              className="absolute h-full bg-gradient-to-r from-green-500 to-emerald-500"
                              style={{
                                left: `${((totalHosts - 3) / 97) * 100}%`,
                                width: `${((stackObjectNodes - totalHosts) / 97) * 100}%`,
                              }}
                            />
                          </div>
                          <input
                            type="range"
                            min={3}
                            max={100}
                            step={1}
                            value={stackObjectNodes}
                            onChange={(e) => {
                              const value = Number.parseInt(e.target.value)
                              if (value >= totalHosts) {
                                setStackObjectNodes(value)
                              }
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-green-600 shadow-lg pointer-events-none"
                            style={{
                              left: `calc(${((stackObjectNodes - 3) / 97) * 100}% - 8px)`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                        <span>Min: 3</span>
                        <span>Base: {totalHosts}</span>
                        <span>Max: 100</span>
                      </div>
                      <div className="text-xs text-gray-600 px-3 mt-2">
                        Cost: {currencySymbol}
                        {(stackObjectNodes * 20).toLocaleString()}/mo
                      </div>
                    </div>
                  )}
                </div>

                {/* MarketPlace Apps */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="marketplace"
                      checked={addOns.marketplaceApps}
                      onCheckedChange={(checked) => setAddOns({ ...addOns, marketplaceApps: checked as boolean })}
                    />
                    <div className="flex-1">
                      <Label htmlFor="marketplace" className="text-sm font-semibold text-gray-900 cursor-pointer">
                        MarketPlace Apps
                      </Label>
                      <p className="text-xs text-gray-600">One-click deployment apps for Linux and windows</p>
                    </div>
                  </div>
                  {addOns.marketplaceApps && (
                    <div className="ml-8 p-4 bg-gradient-to-r from-orange-50/70 to-amber-50/70 rounded-xl border border-orange-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs font-medium text-gray-700 ml-3">Number of Apps</Label>
                        <span className="text-sm font-bold text-orange-600 mr-3">{marketplaceApps} apps</span>
                      </div>
                      <Slider
                        value={[marketplaceApps]}
                        onValueChange={(value) => {
                          const validValues = [50, 100, 150, 200, 250]
                          const snapped = snapToNearestValue(value[0], validValues)
                          setMarketplaceApps(snapped)
                        }}
                        min={50}
                        max={250}
                        step={50}
                        className="py-4 px-3"
                      />
                      <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                        <span>50 Apps</span>
                        <span>250 Apps</span>
                      </div>
                      <div className="text-xs text-gray-600 px-3 mt-2">
                        One-time Cost: {currencySymbol}
                        {(marketplaceApps * 10).toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>

                {/* TARS */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="tars"
                      checked={addOns.tars}
                      onCheckedChange={(checked) => setAddOns({ ...addOns, tars: checked as boolean })}
                    />
                    <div className="flex-1">
                      <Label htmlFor="tars" className="text-sm font-semibold text-gray-900 cursor-pointer">
                        TARS
                      </Label>
                      <p className="text-xs text-gray-600">Agentic AI (SRE Co-pilot)</p>
                    </div>
                  </div>
                  {addOns.tars && (
                    <div className="ml-8 p-4 bg-gradient-to-r from-indigo-50/70 to-blue-50/70 rounded-xl border border-indigo-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs font-medium text-gray-700 ml-3">Number of Users</Label>
                        <span className="text-sm font-bold text-indigo-600 mr-3">{tarsUsers} users</span>
                      </div>
                      <Slider
                        value={[tarsUsers]}
                        onValueChange={(value) => {
                          const validValues = [100, 250, 500, 750, 1000]
                          const snapped = snapToNearestValue(value[0], validValues)
                          setTarsUsers(snapped)
                        }}
                        min={100}
                        max={1000}
                        step={1}
                        className="py-4 px-3"
                      />
                      <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                        <span>100 Users</span>
                        <span>1000 Users</span>
                      </div>
                      <div className="text-xs text-gray-600 px-3 mt-2">
                        Cost: {currencySymbol}
                        {(tarsUsers * 0.5).toLocaleString()}/mo
                      </div>
                    </div>
                  )}
                </div>

                {/* Stack Academy */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="stackacademy"
                      checked={addOns.stackAcademy}
                      onCheckedChange={(checked) => setAddOns({ ...addOns, stackAcademy: checked as boolean })}
                    />
                    <div className="flex-1">
                      <Label htmlFor="stackacademy" className="text-sm font-semibold text-gray-900 cursor-pointer">
                        Stack Academy
                      </Label>
                      <p className="text-xs text-gray-600">Training and certification programs</p>
                    </div>
                  </div>
                  {addOns.stackAcademy && (
                    <div className="ml-8 p-4 bg-gradient-to-r from-teal-50/70 to-cyan-50/70 rounded-xl border border-teal-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs font-medium text-gray-700 ml-3">Training Hours</Label>
                        <span className="text-sm font-bold text-teal-600 mr-3">{stackAcademyHours} hours</span>
                      </div>
                      <Slider
                        value={[stackAcademyHours]}
                        onValueChange={(value) => {
                          const validValues = [10, 25, 50, 100]
                          const snapped = snapToNearestValue(value[0], validValues)
                          setStackAcademyHours(snapped)
                        }}
                        min={10}
                        max={100}
                        step={1}
                        className="py-4 px-3"
                      />
                      <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                        <span>10 Hrs</span>
                        <span>100 Hrs</span>
                      </div>
                      <div className="text-xs text-gray-600 px-3 mt-2">
                        One-time Cost: {currencySymbol}
                        {((stackAcademyHours / 10) * 500).toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>

                {/* Optional Add-Ons Summary */}
                {(addOns.stackWatch || addOns.stackVault || addOns.stackObject || addOns.tars) && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50/70 via-purple-50/70 to-pink-50/70 rounded-xl border border-blue-200/50 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Selected Add-Ons Summary</h3>
                    <div className="space-y-2">
                      {addOns.stackWatch && (
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">StackWatch ({stackWatchNodes} nodes)</span>
                          <span className="font-semibold text-blue-600">
                            {currencySymbol}
                            {(stackWatchNodes * 20).toLocaleString()}/mo
                          </span>
                        </div>
                      )}
                      {addOns.stackVault && (
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">StackVault ({stackVaultNodes} nodes)</span>
                          <span className="font-semibold text-purple-600">
                            {currencySymbol}
                            {(stackVaultNodes * 50).toLocaleString()}/mo
                          </span>
                        </div>
                      )}
                      {addOns.stackObject && (
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">StackObject ({stackObjectNodes} hosts)</span>
                          <span className="font-semibold text-green-600">
                            {currencySymbol}
                            {(stackObjectNodes * 20).toLocaleString()}/mo
                          </span>
                        </div>
                      )}
                      {addOns.tars && (
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">TARS ({tarsUsers} users)</span>
                          <span className="font-semibold text-indigo-600">
                            {currencySymbol}
                            {(tarsUsers * 0.5).toLocaleString()}/mo
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Section 5: GPU & AI Inference Services */}
            <div className="group bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl hover:border-white/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1 text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    GPU & AI Inference Services
                  </h2>
                  <p className="text-sm text-gray-600 ml-3">Add GPU servers for AI/ML workloads</p>
                </div>

                <div className="flex items-center gap-3 px-3">
                  <Checkbox
                    id="gpu-required"
                    checked={gpuRequired}
                    onCheckedChange={(checked) => setGpuRequired(checked as boolean)}
                  />
                  <Label htmlFor="gpu-required" className="text-sm font-semibold text-gray-900 cursor-pointer">
                    Enable GPU Services
                  </Label>
                </div>

                {gpuRequired && (
                  <div className="space-y-6 pl-3">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="setup-gpu"
                        checked={setupGPU}
                        onCheckedChange={(checked) => setSetupGPU(checked as boolean)}
                      />
                      <Label htmlFor="setup-gpu" className="text-sm font-medium text-gray-700 cursor-pointer">
                        Do you want to Setup GPU?
                      </Label>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-3 block ml-3">GPU Type</Label>
                      <RadioGroup value={gpuType} onValueChange={setGpuType} className="space-y-3">
                        <div
                          className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                            gpuType === "gpu"
                              ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                              : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="gpu" id="standard-gpu" />
                            <div className="flex-1">
                              <Label
                                htmlFor="standard-gpu"
                                className="text-sm font-semibold text-gray-900 cursor-pointer"
                              >
                                GPU - Standard
                              </Label>
                              <p className="text-xs text-gray-600 mt-1">
                                $199 per server/mo {setupGPU && "+ $199 setup fee per server"}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-sm ${
                            gpuType === "edge-gpu"
                              ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/80 shadow-xl shadow-blue-500/20"
                              : "border-gray-300/50 bg-white/60 hover:border-blue-400/50 hover:bg-white/80"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="edge-gpu" id="edge-gpu" />
                            <div className="flex-1">
                              <Label htmlFor="edge-gpu" className="text-sm font-semibold text-gray-900 cursor-pointer">
                                Edge GPU
                              </Label>
                              <p className="text-xs text-gray-600 mt-1">$99 per server/mo</p>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm font-semibold text-gray-700 ml-3">Number of GPU Servers</Label>
                        <span className="text-sm font-bold text-blue-600 mr-3">{numGPUs} servers</span>
                      </div>
                      <Slider
                        value={[numGPUs]}
                        onValueChange={(value) => setNumGPUs(value[0])}
                        min={1}
                        max={100}
                        step={1}
                        className="py-4 px-3"
                      />
                      <div className="flex justify-between text-xs text-gray-500 px-3 mt-1">
                        <span>1 server</span>
                        <span>100 servers</span>
                      </div>
                    </div>

                    {/* GPU Summary */}
                    <div className="p-4 bg-gradient-to-r from-blue-50/70 to-purple-50/70 rounded-xl border border-blue-200/50 backdrop-blur-sm">
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">GPU Services Summary</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">GPU Type:</span>
                          <span className="font-semibold">{gpuType === "gpu" ? "Standard GPU" : "Edge GPU"}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Number of Servers:</span>
                          <span className="font-semibold">{numGPUs} servers</span>
                        </div>
                        {setupGPU && gpuType === "gpu" && (
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-600">Setup Fee:</span>
                            <span className="font-semibold text-orange-600">
                              {currencySymbol}
                              {(numGPUs * 199).toLocaleString()}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Monthly Cost:</span>
                          <span className="font-semibold text-blue-600">
                            {currencySymbol}
                            {(numGPUs * (gpuType === "gpu" ? 199 : 99)).toLocaleString()}/mo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cost Summary - Sticky Sidebar - Only shows for main calculator sections */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 text-white shadow-2xl backdrop-blur-lg border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold">Cost Summary</h2>
              </div>

              <div className="space-y-6">
                {/* Total Cost */}
                <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <div className="text-sm text-white/80 mb-2">Total Cost</div>
                  <div className="text-3xl font-bold">
                    {currencySymbol}
                    {totalCost.toLocaleString()}
                  </div>
                </div>

                {/* Recurring Cost Per Month */}
                <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-sm font-semibold">Recurring Cost Per Month</span>
                    </div>
                    <span className="text-xl font-bold">
                      {currencySymbol}
                      {totalRecurringPerMonth.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-white/70 mb-3">Monthly + AddOns</div>
                  {Object.entries(monthlyRecurringCosts).length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-white/20">
                      {Object.entries(monthlyRecurringCosts).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-white/80">{key}</span>
                          <span className="font-semibold">
                            {currencySymbol}
                            {value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* One-time Setup Cost */}
                <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-5 h-5" />
                      <span className="text-sm font-semibold">One-time Setup Cost</span>
                    </div>
                    <span className="text-xl font-bold">
                      {currencySymbol}
                      {totalOneTimeCost.toLocaleString()}
                    </span>
                  </div>
                  {Object.entries(oneTimeCosts).length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-white/20">
                      {Object.entries(oneTimeCosts).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-white/80">{key}</span>
                          <span className="font-semibold">
                            {currencySymbol}
                            {value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* AddOns */}
                <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Package className="w-5 h-5" />
                      <span className="text-sm font-semibold">AddOns</span>
                    </div>
                    <span className="text-xl font-bold">
                      {currencySymbol}
                      {totalAddOnCost.toLocaleString()}
                    </span>
                  </div>
                  {Object.entries(addOnCosts).length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-white/20">
                      {Object.entries(addOnCosts).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-white/80">{key}</span>
                          <span className="font-semibold">
                            {currencySymbol}
                            {value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Download Button */}
                <Button
                  onClick={() => setShowEmailModal(true)}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 h-12 rounded-xl font-semibold shadow-lg transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Estimation
                </Button>

                <div className="p-4 bg-white/5 backdrop-blur-lg rounded-xl text-xs text-white/70 leading-relaxed">
                  <Sparkles className="w-4 h-4 mb-2 text-yellow-300" />
                  <p>
                    Estimated total cost of running your cloud with StackOrbit over {tcoTermYears} years based on your
                    current selections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 relative z-10">
          {/* BOM Calculator Opt-in */}
          {!showTCOCalculator && (
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 border border-blue-200 p-12 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 shadow-lg shadow-blue-500/30">
                  <Calculator className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Want a More Detailed TCO Analysis?</h3>

                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                  Upload your hardware Bill of Materials (BOM) and get AI-powered recommendations for optimizing your
                  infrastructure costs, capacity planning, and ROI projections with StackOrbit.
                </p>

                <Button
                  onClick={() => {
                    setShowTCOCalculator(true) // Trigger TCO calculator visibility
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-2xl font-semibold text-base shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Try BOM TCO Calculator
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* BOM Calculator Section (now full width without Cost Summary) */}
          {showTCOCalculator && (
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">BOM-Based TCO Estimator</h2>
                  <p className="text-xs text-gray-600">
                    Upload your hardware BOM and get an AI-powered TCO estimate with StackOrbit.
                  </p>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <span className="text-xs font-medium text-gray-700">Upload BOM</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <span className="text-xs font-medium text-gray-700">StackOrbit Software</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <span className="text-xs font-medium text-gray-500">TCO Period</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </div>
                  <span className="text-xs font-medium text-gray-500">Results</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Column: Upload BOM + TARS */}
                <div className="space-y-6">
                  {/* Upload BOM */}
                  <div className="p-6 border-2 border-dashed border-gray-300/50 rounded-2xl hover:border-blue-400/50 transition-colors backdrop-blur-sm bg-white/50">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">1</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Upload Your Hardware BOM</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center py-8 mb-4">
                      <FileUp className="w-12 h-12 text-blue-500 mb-3" />
                      <p className="text-xs text-gray-600 mb-3 text-center">Drag & drop BOM file here or</p>
                      <label htmlFor="bom-upload">
                        <Button variant="default" size="sm" className="cursor-pointer" asChild>
                          <span>
                            <Upload className="w-4 h-4 mr-2" />
                            Browse Files
                          </span>
                        </Button>
                        <input
                          id="bom-upload"
                          type="file"
                          accept=".xlsx,.xls,.csv,.pdf"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {bomFile && (
                      <div className="mb-4 p-3 bg-blue-50/70 border border-blue-200/50 rounded-lg backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-medium text-blue-900">{bomFile.name}</span>
                        </div>
                      </div>
                    )}

                    {bomError && (
                      <div className="mb-4 p-3 bg-red-50/70 border border-red-200/50 rounded-lg backdrop-blur-sm">
                        <p className="text-xs text-red-700">{bomError}</p>
                      </div>
                    )}

                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <FileSpreadsheet className="w-3 h-3 text-green-600" />
                        <span>Excel (.xlsx, .xls) • CSV</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <FileText className="w-3 h-3 text-red-600" />
                        <span>PDF</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      Upload your Bill of Materials including servers, storage, networking, GPUs, and quantities.
                    </p>
                  </div>

                  {/* TARS Recommendations */}
                  <div className="p-6 bg-gradient-to-br from-purple-50/70 to-blue-50/70 rounded-2xl border border-purple-200/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">3</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">TARS Recommendations</h3>
                    </div>

                    {isAnalyzing ? (
                      <div className="flex flex-col items-center justify-center py-8">
                        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-3" />
                        <p className="text-xs text-gray-600">Analyzing your BOM with AI...</p>
                      </div>
                    ) : tarsRecommendations.length > 0 ? (
                      <div className="space-y-3">
                        {tarsRecommendations.map((recommendation, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-gray-700 leading-relaxed">{recommendation}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Sparkles className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">Upload a BOM file to get AI-powered recommendations</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Middle Column: StackOrbit Package */}
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-purple-50/70 to-blue-50/70 rounded-2xl border border-purple-200/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">2</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Selected StackOrbit Package</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 p-3 bg-white/70 rounded-lg border border-blue-300/50 backdrop-blur-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {stackOrbitPlan === "OrbitFlex" && "OrbitFlex"}
                            {stackOrbitPlan === "OrbitManage" && "OrbitManage"}
                            {stackOrbitPlan === "OrbitInfinity" && "OrbitInfinity"}
                          </div>
                          <div className="text-xs text-gray-600">
                            {stackOrbitPlan === "OrbitFlex" && "(Pay-as-you-go)"}
                            {stackOrbitPlan === "OrbitManage" && "(Fully Managed)"}
                            {stackOrbitPlan === "OrbitInfinity" && "(Perpetual License)"}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Support Level:</span>
                          <span className="font-medium">{supportPlan}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Hosts Count:</span>
                          <span className="font-medium">{totalHosts}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Monthly OpEx:</span>
                          <span className="font-semibold">${totalRecurringPerMonth.toLocaleString()} / month</span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 p-3 bg-blue-50/70 rounded-lg border border-blue-200/50 backdrop-blur-sm">
                        Software OpEx is already calculated based on your previous selections.
                      </p>

                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleGenerateTCO}
                        disabled={!bomFile || !tarsRecommendations.length || isAnalyzing}
                      >
                        {isAnalyzing ? "Analyzing BOM..." : "Generate TCO Estimate"}
                      </Button>
                    </div>

                    <div className={`mt-6 space-y-4 ${!showBOMResults ? "opacity-40 pointer-events-none" : ""}`}>
                      <div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <div className="flex items-center gap-2">
                            <Cpu className="w-3 h-3" />
                            <span className="text-gray-600">CPU Overprovision Ratio:</span>
                          </div>
                          <span className="font-semibold">1:4</span>
                        </div>
                        <Slider value={[50]} className="mb-2" />
                        <div className="text-xs text-gray-600 text-center">X Cores ; Y vCPUs</div>
                      </div>

                      <div>
                        <Label className="text-xs font-medium text-gray-700 mb-2 block">BOM Overall Capacity</Label>
                        <Slider value={[50]} className="mb-2" />
                        <div className="text-xs text-gray-600 text-center">X Cores ; Y vCPUs</div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <div className="flex items-center gap-2">
                            <HardDrive className="w-3 h-3" />
                            <span className="text-gray-600">Storage:</span>
                          </div>
                          <span className="font-semibold">250 TB</span>
                        </div>
                        <Slider value={[50]} className="mb-2" />
                        <div className="text-xs text-gray-500 text-right">500 TB (1 PB)</div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent">
                          <FileDown className="w-3 h-3 mr-1" />
                          Download PDF
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent">
                          <FileSpreadsheet className="w-3 h-3 mr-1" />
                          Export Excel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: CapEx/OpEx + Results Summary */}
                <div className={`space-y-6 ${!showBOMResults ? "opacity-40 pointer-events-none" : ""}`}>
                  {/* CapEx and OpEx Chart */}
                  <div className="p-6 bg-white/50 rounded-2xl border border-gray-200/50 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">CapEx and OpEx</h3>
                    <p className="text-xs text-blue-600 mb-4">TCO breakdown</p>

                    {/* Pie Chart Placeholder */}
                    <div className="relative w-full h-64 mb-4">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Server Hardware - 47.2% */}
                        <path
                          d="M 100 100 L 100 0 A 100 100 0 0 1 198 140 Z"
                          fill="#3b82f6"
                          stroke="white"
                          strokeWidth="2"
                        />
                        {/* VMware Software - 23.7% */}
                        <path
                          d="M 100 100 L 198 140 A 100 100 0 0 1 30 170 Z"
                          fill="#f97316"
                          stroke="white"
                          strokeWidth="2"
                        />
                        {/* Software Licensing - 19.8% */}
                        <path
                          d="M 100 100 L 30 170 A 100 100 0 0 1 2 60 Z"
                          fill="#10b981"
                          stroke="white"
                          strokeWidth="2"
                        />
                        {/* Networking Hardware - 8.1% */}
                        <path
                          d="M 100 100 L 2 60 A 100 100 0 0 1 50 5 Z"
                          fill="#1f2937"
                          stroke="white"
                          strokeWidth="2"
                        />
                        {/* Datacenter Services - 1.2% */}
                        <path
                          d="M 100 100 L 50 5 A 100 100 0 0 1 100 0 Z"
                          fill="#ef4444"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Legend */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-500" />
                          <span className="text-gray-700">Server Hardware</span>
                        </div>
                        <span className="font-semibold">$141,904 (47.2%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-orange-500" />
                          <span className="text-gray-700">VMware Software</span>
                        </div>
                        <span className="font-semibold">$27,180 (23.7%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                          <span className="text-gray-700">Software Licensing</span>
                        </div>
                        <span className="font-semibold">$27,180 (19.8%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <span className="text-gray-700">Datacenter Services</span>
                        </div>
                        <span className="font-semibold">$18,000 (1.5%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Results Summary */}
                  <div className="p-6 bg-white/50 rounded-2xl border border-gray-200/50 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Results Summary</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Hardware Cost (One-Time)</span>
                        <span className="font-semibold">$132,500</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Software OpEx (Monthly)</span>
                        <span className="font-semibold">$995</span>
                      </div>
                      <div className="flex items-center justify-between text-xs border-t border-gray-200 pt-2">
                        <span className="text-gray-700 font-medium">3-Year Software Cost</span>
                        <span className="font-semibold">$35,820</span>
                      </div>
                      <div className="flex items-center justify-between text-xs py-2 bg-blue-50 px-3 rounded-lg">
                        <span className="text-blue-900 font-semibold">Total 3-Year TCO</span>
                        <span className="font-bold text-blue-600">$168,320</span>
                      </div>
                      <div className="flex items-center justify-between text-xs border-t border-gray-200 pt-2">
                        <span className="text-gray-700 font-medium">5-Year Software Cost</span>
                        <span className="font-semibold">$59,700</span>
                      </div>
                      <div className="flex items-center justify-between text-xs py-2 bg-purple-50 px-3 rounded-lg">
                        <span className="text-purple-900 font-semibold">Total 5-Year TCO</span>
                        <span className="font-bold text-purple-600">$192,200</span>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-900">Break-Even</span>
                          <span className="text-2xl font-bold text-green-600">9.2 months</span>
                        </div>
                        <p className="text-xs text-gray-500">(Based on 70% utilization)</p>
                      </div>

                      <div className="space-y-3 mt-4">
                        <div>
                          <div className="flex items-center justify-between text-xs mb-2">
                            <div className="flex items-center gap-2">
                              <Cpu className="w-3 h-3" />
                              <span className="text-gray-600">CPU</span>
                            </div>
                            <span className="font-semibold">1:4</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600" style={{ width: "25%" }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-xs mb-2">
                            <div className="flex items-center gap-2">
                              <HardDrive className="w-3 h-3" />
                              <span className="text-gray-600">Storage</span>
                            </div>
                            <span className="font-semibold">1:2</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-600" style={{ width: "50%" }} />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Usable: 250 TB ; Max: 500 TB (1 PB)</p>
                        </div>

                        <div className="pt-3 border-t border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-green-600" />
                            <div>
                              <div className="text-xs font-semibold text-gray-900">Break-Even: 9.2 months</div>
                              <div className="text-xs text-gray-500">(Based on 70% utilization)</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="p-6 bg-white/50 rounded-2xl border border-gray-200/50 backdrop-blur-sm">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Ask for your specification!</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="What is your name? *"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="text-xs"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="What is your business e-mail address? *"
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="text-xs"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="What is your phone number?"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="text-xs"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Please leave your message here and one of our representatives will be in touch with you in the near future"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full min-h-[80px] px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Talk to our Expert
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
