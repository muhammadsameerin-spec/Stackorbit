import { StackBillNavigation } from "@/components/stackbill-navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  BookOpen,
  FileText,
  Settings,
  Users,
  Code,
  Plug,
  Bell,
  Rocket,
  Server,
  Box,
  Database,
  Network,
  ShoppingCart,
  HelpCircle,
  MessageSquare,
  ExternalLink,
  Search,
  ChevronRight,
  Sparkles,
  Play,
  Monitor,
  HardDrive,
  Camera,
  Key,
  Globe,
  CreditCard,
  Headphones,
  Building,
} from "lucide-react"

export default function StackBillDocsPage() {
  const interactiveVideos = [
    {
      category: "Dashboard",
      icon: Monitor,
      videos: [{ title: "Dashboard Overview", description: "Get an overview of your dashboard features." }],
    },
    {
      category: "Instance",
      icon: Server,
      videos: [
        { title: "Create a Windows VM", description: "Step-by-step guide to launching a Windows virtual machine." },
        { title: "Create a Linux VM", description: "How to launch a Linux virtual machine." },
        { title: "Instance Summary", description: "View and understand your instance details." },
        { title: "Instance Resize", description: "Resize your virtual machine as needed." },
        { title: "VM Scheduler", description: "Automate VM operations with scheduling." },
        { title: "Delete a VM", description: "Safely remove a virtual machine." },
      ],
    },
    {
      category: "Kubernetes",
      icon: Box,
      videos: [
        { title: "Create a Kubernetes Cluster", description: "Deploy a new Kubernetes cluster." },
        { title: "Cluster Summary", description: "Overview of your Kubernetes clusters." },
      ],
    },
    {
      category: "Volume",
      icon: HardDrive,
      videos: [
        { title: "Add Volume", description: "Attach additional storage to your instances." },
        { title: "Upload Volume", description: "Upload a new storage volume." },
        { title: "Attach / Detach Volume", description: "Manage volume attachments for your VMs." },
        { title: "Resize Volume", description: "Increase or decrease your storage size." },
        { title: "Download Volume", description: "Download your storage volume data." },
        { title: "Volume Snapshot", description: "Create and manage volume snapshots." },
        { title: "Recurring Snapshot", description: "Automate snapshot creation for volumes." },
        { title: "Create Template", description: "Create a reusable template from a volume." },
      ],
    },
    {
      category: "VM Snapshot",
      icon: Camera,
      videos: [
        { title: "Add VM Snapshot", description: "Create a snapshot of your VM state." },
        { title: "Revert VM Snapshot", description: "Restore your VM to a previous snapshot." },
        { title: "Delete VM Snapshot", description: "Delete a VM snapshot you no longer need." },
      ],
    },
    {
      category: "SSH Key Manager",
      icon: Key,
      videos: [
        { title: "Add SSH Key", description: "Add a new SSH key for secure access." },
        { title: "Upload SSH Key", description: "Upload an existing SSH key." },
        { title: "Download SSH Key", description: "Download your SSH key for backup." },
        { title: "Delete SSH Key", description: "Remove an SSH key from your account." },
      ],
    },
    {
      category: "Network",
      icon: Network,
      videos: [
        { title: "Create an Isolated Network", description: "Set up a private, isolated network for your VMs." },
        { title: "Egress Rule", description: "Define outbound traffic rules from your network." },
        { title: "Public IP", description: "Acquire and assign public IP addresses to your VMs." },
        { title: "Firewall", description: "Create firewall rules to control traffic." },
        { title: "Port Forwarding", description: "Redirect traffic from public to private ports." },
        { title: "Load Balancer", description: "Distribute traffic across multiple VMs." },
      ],
    },
    {
      category: "VPC",
      icon: Globe,
      videos: [
        { title: "Create a VPC Network", description: "Build a Virtual Private Cloud with custom IP ranges." },
        { title: "Add Network Tier", description: "Extend your VPC by adding tiers for workloads." },
        { title: "ACL (Access Control List)", description: "Set access rules between network tiers." },
        { title: "Public IP Address", description: "Allocate public IPs within your VPC." },
      ],
    },
    {
      category: "Apps Marketplace",
      icon: ShoppingCart,
      videos: [
        { title: "Overview", description: "Browse available templates and pre-configured apps." },
        { title: "My Images & ISO", description: "Manage your uploaded VM images and ISO files." },
      ],
    },
    {
      category: "Billing",
      icon: CreditCard,
      videos: [
        { title: "Overview", description: "Summary of billing account and payment status." },
        { title: "Cost Explorer", description: "Analyze your cloud spending trends." },
        { title: "Saving Plans", description: "Optimize and reduce your cloud costs." },
        { title: "Invoices", description: "View and download billing invoices." },
        { title: "Reports", description: "Generate detailed billing and usage reports." },
      ],
    },
    {
      category: "Support Center",
      icon: Headphones,
      videos: [{ title: "Support Center", description: "Access help resources and submit support requests." }],
    },
    {
      category: "Company",
      icon: Building,
      videos: [
        { title: "Profile", description: "View and update your profile information." },
        { title: "Role Privileges", description: "Manage user roles and access privileges." },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <StackBillNavigation />

      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-xs text-purple-700 mb-4">
              <Sparkles size={14} className="text-purple-500" />
              Comprehensive Documentation Portal
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">StackBill Documentation</h1>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-light">
              Product, deployment, and management documentation for StackBill CMP — including installation, user guides,
              admin setup, APIs, plugins, and release notes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 h-12 text-sm font-semibold rounded-full shadow-lg shadow-purple-500/20 transition-all hover:scale-105"
                asChild
              >
                <Link href="#docs">Explore Docs Portal</Link>
              </Button>
              <Button
                size="lg"
                className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-6 h-12 text-sm font-semibold rounded-full transition-all hover:scale-105"
                asChild
              >
                <Link href="https://clients.stackbill.com/" target="_blank" rel="noopener noreferrer">
                  Contact Support
                  <ExternalLink className="ml-2" size={14} />
                </Link>
              </Button>
            </div>

            {/* Search Bar */}
            <div className="pt-6 max-w-xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search documentation..."
                    className="pl-12 h-12 text-sm border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-300 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="py-16 relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Core Documentation</h2>
            <p className="text-sm text-gray-600 font-light">Essential guides to get you started</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: BookOpen,
                title: "Installation Guide",
                description: "Complete installation and setup instructions for StackBill CMP",
                href: "https://docs.stackbill.com",
                gradient: "from-purple-500/20 to-indigo-500/20",
              },
              {
                icon: FileText,
                title: "User Guide",
                description: "End-user documentation for managing cloud resources",
                href: "https://docs.stackbill.com",
                gradient: "from-indigo-500/20 to-purple-500/20",
              },
              {
                icon: Settings,
                title: "Admin Guide",
                description: "Administrator configuration and management guide",
                href: "https://docs.stackbill.com",
                gradient: "from-emerald-500/20 to-teal-500/20",
              },
              {
                icon: Users,
                title: "Reseller Manager",
                description: "Multi-tenant reseller configuration and operations",
                href: "https://docs.stackbill.com",
                gradient: "from-orange-500/20 to-red-500/20",
              },
              {
                icon: Code,
                title: "API Guide",
                description: "API reference, endpoints, and integration examples",
                href: "https://docs.stackbill.com",
                gradient: "from-cyan-500/20 to-blue-500/20",
              },
              {
                icon: Plug,
                title: "Plugin Guide",
                description: "Plugin architecture and integration documentation",
                href: "https://docs.stackbill.com",
                gradient: "from-pink-500/20 to-rose-500/20",
              },
              {
                icon: Bell,
                title: "Release Notes",
                description: "Version history, updates, and bug fixes",
                href: "https://docs.stackbill.com",
                gradient: "from-yellow-500/20 to-amber-500/20",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                >
                  <div className="relative p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 transition-all duration-500 h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    />

                    <div className="relative z-10">
                      <div className="p-2 bg-gray-50 rounded-xl inline-block mb-4 group-hover:scale-110 group-hover:bg-white transition-transform duration-500">
                        <Icon className="text-gray-700" size={22} />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.description}</p>
                      <div className="flex items-center gap-2 text-purple-600 text-xs font-medium">
                        Read more
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 relative bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-xs text-purple-700 mb-4">
              <Play size={12} className="text-purple-500" />
              Step-by-step Video Guides
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Interactive Video</h2>
            <p className="text-sm text-gray-600 font-light">
              Follow along with interactive video tutorials to learn all major features of the platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {interactiveVideos.map((group, groupIndex) => {
              const GroupIcon = group.icon
              return (
                <div
                  key={groupIndex}
                  className="group p-5 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-white hover:shadow-lg hover:border-purple-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <GroupIcon className="text-purple-600" size={18} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{group.category}</h3>
                    <span className="ml-auto text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
                      {group.videos.length}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {group.videos.map((video, videoIndex) => (
                      <li key={videoIndex}>
                        <Link
                          href="https://docs.stackbill.com/docs/interactive-video/getting-started"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors group/item"
                        >
                          <Play size={12} className="text-purple-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-medium text-gray-800 group-hover/item:text-purple-700 transition-colors">
                              {video.title}
                            </span>
                            <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{video.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Quick Reads</h2>
            <p className="text-sm text-gray-600 font-light">Step-by-step walkthroughs for managing cloud resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Rocket, title: "Getting Started", description: "Dashboard & navigation basics", color: "purple" },
              { icon: FileText, title: "Billing", description: "Cost explorer & invoices", color: "indigo" },
              { icon: Server, title: "Compute", description: "VM creation & management", color: "cyan" },
              { icon: Database, title: "Storage", description: "Volumes & snapshots", color: "orange" },
              { icon: Box, title: "Kubernetes", description: "Cluster management", color: "purple" },
              { icon: ShoppingCart, title: "Marketplace", description: "App deployment", color: "emerald" },
              { icon: Network, title: "Networking", description: "VPC & load balancer", color: "indigo" },
              { icon: HelpCircle, title: "Support", description: "Help & tickets", color: "pink" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={index}
                  href="https://docs.stackbill.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-purple-300 transition-all duration-300"
                >
                  <div className="p-2 bg-gray-50 rounded-lg inline-block mb-3 group-hover:scale-110 group-hover:bg-purple-50 transition-all duration-300">
                    <Icon className="text-gray-700 group-hover:text-purple-600" size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 relative bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Need Assistance?</h2>
            <p className="text-sm text-gray-600 font-light">Our support team is here to help you succeed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: HelpCircle,
                title: "Contact Support",
                description: "Submit a ticket and get a response within 24 hours",
                href: "https://clients.stackbill.com/",
                gradient: "from-purple-500/20 to-indigo-500/20",
              },
              {
                icon: BookOpen,
                title: "Help Center",
                description: "Browse guides, tutorials, and FAQs",
                href: "https://docs.stackbill.com",
                gradient: "from-emerald-500/20 to-teal-500/20",
              },
              {
                icon: MessageSquare,
                title: "Community",
                description: "Connect with users and share experiences",
                href: "https://docs.stackbill.com",
                gradient: "from-indigo-500/20 to-purple-500/20",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                >
                  <div className="relative p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-white hover:shadow-xl hover:border-purple-300 transition-all duration-500 text-center h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    />

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:border-purple-300 transition-all duration-500">
                        <Icon className="text-gray-700 group-hover:text-purple-600" size={28} />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
