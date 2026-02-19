"use client"

import { useState } from "react"
import { Check, AlertCircle, Zap } from "lucide-react"

export function SupportMatrixTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { label: "Hypervisor", id: "hypervisor" },
    { label: "CPU & GPU", id: "cpu-gpu" },
    { label: "Storage", id: "storage" },
    { label: "Network", id: "network" },
    { label: "Multi-Zone & HA", id: "ha" },
  ]

  return (
    <div>
      {/* Tab Navigation - Center Aligned, Modern */}
      <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-2xl whitespace-nowrap ${
              activeTab === idx
                ? "bg-purple-600 text-white shadow-md hover:bg-purple-700"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {activeTab === 0 && <HypervisorTab />}
        {activeTab === 1 && <CPUGPUTab />}
        {activeTab === 2 && <StorageTab />}
        {activeTab === 3 && <NetworkTab />}
        {activeTab === 4 && <HATab />}
      </div>
    </div>
  )
}

// Tab 1: Hypervisor Support
function HypervisorTab() {
  const data = [
    {
      name: "KVM (Primary & Recommended)",
      supported: true,
      notes: "Native integration, production-grade",
    },
    {
      name: "VMware vSphere",
      supported: true,
      notes: "Enterprise deployments supported",
    },
    {
      name: "XenServer / XCP-ng",
      supported: true,
      notes: "Community & production use",
    },
    {
      name: "Hyper-V",
      supported: "limited",
      notes: "Legacy / limited feature support",
    },
    {
      name: "Bare Metal",
      supported: true,
      notes: "Supported via CloudStack provisioning",
    },
  ]

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-75 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Hypervisor</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50 transition-all duration-200 group"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {row.name}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    {row.supported === true && (
                      <>
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-emerald-700 text-xs font-semibold">Supported</span>
                      </>
                    )}
                    {row.supported === "limited" && (
                      <>
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="text-amber-700 text-xs font-semibold">Limited</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 bg-slate-50 rounded-lg p-4 flex gap-3 border border-slate-200">
        <Zap className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">Apache CloudStack is hypervisor-agnostic,</span> with KVM as the recommended production standard.
        </p>
      </div>
    </div>
  )
}

// Tab 2: CPU & GPU Support
function CPUGPUTab() {
  const cpuData = [
    { hardware: "Intel Xeon (Scalable, Platinum, Gold)", supported: true, notes: "Fully supported" },
    { hardware: "AMD EPYC", supported: true, notes: "Fully supported" },
    { hardware: "ARM (Experimental)", supported: "partial", notes: "Community support only" },
  ]

  const gpuData = [
    { hardware: "NVIDIA A100 / H100", supported: true, notes: "Passthrough & vGPU supported" },
    { hardware: "NVIDIA L40 / L4", supported: true, notes: "AI & inference ready" },
    { hardware: "NVIDIA RTX / T4", supported: true, notes: "vGPU & passthrough" },
    { hardware: "AMD GPU", supported: "limited", notes: "Passthrough only" },
  ]

  return (
    <div className="animate-fadeIn">
      <div className="space-y-8">
        {/* CPU Section */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-4">CPU Support</h3>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-75 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Supported Hardware</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cpuData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-all duration-200 group">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.hardware}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        {row.supported === true && (
                          <>
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-emerald-700 text-xs font-semibold">Supported</span>
                          </>
                        )}
                        {row.supported === "partial" && (
                          <>
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                            <span className="text-amber-700 text-xs font-semibold">Partial</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* GPU Section */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-4">GPU Support</h3>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-75 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Supported Hardware</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {gpuData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-all duration-200 group">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.hardware}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        {row.supported === true && (
                          <>
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-emerald-700 text-xs font-semibold">Supported</span>
                          </>
                        )}
                        {row.supported === "limited" && (
                          <>
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                            <span className="text-amber-700 text-xs font-semibold">Limited</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-slate-50 rounded-lg p-4 flex gap-3 border border-slate-200">
        <Zap className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">GPU support</span> depends on hypervisor capabilities and NVIDIA licensing (vGPU where applicable).
        </p>
      </div>
    </div>
  )
}

// Tab 3: Storage Support
function StorageTab() {
  const data = [
    { category: "Primary Storage", technology: "Local Storage", support: true, notes: "Host-based" },
    { category: "", technology: "NFS", support: true, notes: "Widely used" },
    { category: "", technology: "iSCSI", support: true, notes: "Enterprise deployments" },
    { category: "", technology: "Ceph RBD", support: true, notes: "Highly recommended for scale" },
    { category: "Object Storage", technology: "Ceph RGW (S3 compatible)", support: true, notes: "Native integration" },
    { category: "", technology: "S3 Compatible", support: true, notes: "External object storage supported" },
    { category: "Backup / Secondary", technology: "NFS Secondary Storage", support: true, notes: "Templates & snapshots" },
    { category: "", technology: "S3 Secondary Storage", support: true, notes: "Backup integration" },
  ]

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-75 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Storage Type</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Technology</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Support Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-all duration-200 group">
                <td className="px-6 py-4 text-sm font-medium text-slate-600">
                  {row.category && <span className="text-slate-900">{row.category}</span>}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.technology}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-emerald-700 text-xs font-semibold">Supported</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 bg-slate-50 rounded-lg p-4 flex gap-3 border border-slate-200">
        <Zap className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">Ceph is recommended</span> for scalable, distributed cloud storage environments.
        </p>
      </div>
    </div>
  )
}

// Tab 4: Network Support
function NetworkTab() {
  const data = [
    { component: "VLAN", supported: true, notes: "L2 isolation" },
    { component: "VXLAN", supported: true, notes: "Overlay networking" },
    { component: "Security Groups", supported: true, notes: "L3/L4 firewall" },
    { component: "Virtual Routers", supported: true, notes: "Native service routers" },
    { component: "Juniper SRX", supported: true, notes: "Physical firewall integration" },
    { component: "Cisco ASA", supported: true, notes: "Enterprise integration" },
    { component: "SDN (Nuage, Tungsten, etc.)", supported: true, notes: "Plugin-based" },
  ]

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-75 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Network Component</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-all duration-200 group">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.component}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-emerald-700 text-xs font-semibold">Supported</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 bg-slate-50 rounded-lg p-4 flex gap-3 border border-slate-200">
        <Zap className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">CloudStack supports</span> both virtual and physical network appliances for enterprise-grade deployments.
        </p>
      </div>
    </div>
  )
}

// Tab 5: Multi-Zone & HA Support
function HATab() {
  const data = [
    { feature: "Multi-Zone Deployment", supported: true, description: "Multiple zones per region" },
    { feature: "Multi-Region Architecture", supported: true, description: "Federation supported" },
    { feature: "HA for Management Server", supported: true, description: "Active/Active configuration" },
    { feature: "Host HA", supported: true, description: "Automatic VM restart" },
    { feature: "Storage Replication", supported: true, description: "Depends on backend storage" },
    { feature: "Disaster Recovery", supported: true, description: "Cross-zone & cross-region" },
  ]

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-75 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Feature</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-widest">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-all duration-200 group">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.feature}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-emerald-700 text-xs font-semibold">Supported</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 bg-slate-50 rounded-lg p-4 flex gap-3 border border-slate-200">
        <Zap className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">Designed for ISP, MSP, Enterprise, and Sovereign Cloud</span> environments requiring high availability and geographic isolation.
        </p>
      </div>
    </div>
  )
}
