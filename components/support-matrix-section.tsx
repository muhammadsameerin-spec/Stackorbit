"use client"

import { useState } from "react"
import { Clock, CheckCircle2, Users, AlertTriangle, Shield } from "lucide-react"

const SLA_DATA = {
  incidents: [
    {
      severity: "P1",
      label: "Highest",
      color: "bg-red-500",
      borderColor: "border-red-200",
      bgLight: "bg-red-50",
      initialResponse: "30 minutes",
      resolutionTime: "3 hours",
      targetResolution: "12 hours",
      description: "Apache CloudStack infra or Stackbill portal unavailable, mission-critical application function completely unavailable",
    },
    {
      severity: "P2",
      label: "High",
      color: "bg-orange-500",
      borderColor: "border-orange-200",
      bgLight: "bg-orange-50",
      initialResponse: "4 hours",
      resolutionTime: "1 day",
      targetResolution: "2 days",
      description: "Critical application function unavailable but workaround exists, component down, security incident",
    },
    {
      severity: "P3",
      label: "Medium",
      color: "bg-yellow-500",
      borderColor: "border-yellow-200",
      bgLight: "bg-yellow-50",
      initialResponse: "24 hours",
      resolutionTime: "2 days",
      targetResolution: "3 days",
      description: "Performance degraded, data integrity issue, some non-critical functionalities not working, minor security issues",
    },
  ],
}

export function SupportMatrixSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Enterprise Support Matrix
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Industry-leading SLAs with dedicated technical support, rapid response times, and comprehensive service coverage for your Apache CloudStack infrastructure.
          </p>
        </div>

        {/* Three Pillars - TRM, Versions, SLA */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Pillar 1: TRM */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-all duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Dedicated TRM</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Senior technician assigned as your Technical Relationship Manager with deep understanding of your infrastructure, notified for every incident.
              </p>
            </div>
          </div>

          {/* Pillar 2: Supported Versions */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-all duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Supported Versions</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We support any Apache CloudStack version, with proactive maintenance and product patching for versions in our Support Matrix.
              </p>
            </div>
          </div>

          {/* Pillar 3: SLA Commitment */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-all duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">SLA Guarantees</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Guaranteed response and resolution plan times across all severity levels, with transparent communication and escalation paths.
              </p>
            </div>
          </div>
        </div>

        {/* SLA Details Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Service Level Agreements by Incident Severity
          </h3>

          {/* Modern Table */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-75 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-widest">Severity</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-widest">Description</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase tracking-widest">Initial Response</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase tracking-widest">Resolution Plan</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase tracking-widest">Target Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SLA_DATA.incidents.map((sla, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors duration-200">
                    {/* Severity Badge */}
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-2xl ${sla.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {sla.severity}
                        </div>
                        <span className="font-semibold text-slate-900">{sla.label}</span>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="px-6 py-6">
                      <p className="text-sm text-slate-600 leading-relaxed">{sla.description}</p>
                    </td>

                    {/* Initial Response */}
                    <td className="px-6 py-6 text-center">
                      <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 inline-block min-w-32">
                        <p className="text-base font-bold text-slate-900">{sla.initialResponse}</p>
                        <p className="text-xs text-slate-500 mt-1">Guaranteed</p>
                      </div>
                    </td>

                    {/* Resolution Time */}
                    <td className="px-6 py-6 text-center">
                      <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 inline-block min-w-32">
                        <p className="text-base font-bold text-slate-900">{sla.resolutionTime}</p>
                        <p className="text-xs text-slate-500 mt-1">Guaranteed</p>
                      </div>
                    </td>

                    {/* Target Resolution */}
                    <td className="px-6 py-6 text-center">
                      <div className="bg-purple-50 rounded-2xl p-3 border border-purple-200 inline-block min-w-32">
                        <p className="text-base font-bold text-slate-900">{sla.targetResolution}</p>
                        <p className="text-xs text-slate-600 mt-1">Best Effort</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              <span className="text-slate-600"><span className="font-semibold">Guaranteed</span> - SLA commitment we stand behind</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-300"></div>
              <span className="text-slate-600"><span className="font-semibold">Best Effort</span> - Our target resolution goal</span>
            </div>
          </div>
        </div>

        {/* Key Info Box */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6 sm:p-8">
          <div className="flex gap-4">
            <Shield className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">SLA Commitment</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                We guarantee both <span className="font-semibold">Initial Response Time</span> and <span className="font-semibold">Resolution Plan Time</span>. While we aspire to meet Target Resolution times, actual resolution depends on issue complexity and your feedback. All timeframes are based on incident severity as mutually validated between our support team and your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
