import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  Shield,
  Users,
  Key,
  Lock,
  Server,
  Network,
  Database,
  Check,
  Building2,
  UserCog,
  UsersRound,
  Code2,
  Fingerprint,
  Globe,
  ShieldCheck,
  Eye,
  AlertTriangle
} from "lucide-react"

export default function GovernanceSecurityPage() {
  const rbacCards = [
    {
      icon: UserCog,
      title: "Admin RBAC – Platform-Level Governance",
      description: "Control every aspect of the cloud platform with fine-grained administrative roles. Admin RBAC allows providers to define exactly who can manage infrastructure, billing, users, services, and policies.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      points: [
        "Full control over cloud resources and services",
        "Granular permission assignment per role",
        "Secure separation of operational responsibilities",
        "Centralized governance for large teams"
      ]
    },
    {
      icon: UsersRound,
      title: "Tenant & User RBAC – Secure Self-Service",
      description: "Empower tenants with controlled self-service access. User RBAC allows providers and resellers to define permissions for tenant admins and end users—ensuring customers only access what they are authorized to manage.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      points: [
        "Role-based permissions per tenant",
        "User-level access to services and resources",
        "Secure multi-tenant isolation",
        "Ideal for enterprise and regulated customers"
      ]
    },
    {
      icon: Building2,
      title: "Reseller RBAC – Delegated Control Without Risk",
      description: "Enable partners to manage their customers independently while maintaining provider-level control. Reseller RBAC supports delegated administration with enforced boundaries for pricing, users, and services.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      points: [
        "Scoped access for resellers",
        "Customer and user management per reseller",
        "Provider-controlled limits and policies",
        "Secure multi-tier B2B cloud models"
      ]
    }
  ]

  const apiPrivileges = [
    "Role-based API permissions",
    "Secure automation and integrations",
    "Prevent privilege escalation",
    "Ideal for DevOps and platform automation"
  ]

  const identityFeatures = [
    { icon: Shield, text: "RBAC-driven identity enforcement" },
    { icon: Users, text: "Secure user lifecycle management" },
    { icon: Server, text: "Support for centralized authentication (LDAP / AD)" },
    { icon: Key, text: "Multi-factor authentication (2FA / MFA)" },
    { icon: AlertTriangle, text: "Quotas and limits per account, domain, or tenant" }
  ]

  const isolationDomains = [
    {
      icon: Network,
      title: "Network Isolation",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      points: [
        "Stateful security groups (L3/L4 firewall)",
        "VLAN / VXLAN-based tenant isolation",
        "Site-to-site and remote access VPN",
        "Private gateways and dedicated connectivity"
      ]
    },
    {
      icon: Server,
      title: "Compute Isolation",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      points: [
        "KVM host hardening and SELinux",
        "Anti-affinity for physical workload separation",
        "Dedicated compute clusters or pods",
        "Resource quotas and limits"
      ]
    },
    {
      icon: Database,
      title: "Data Protection",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      points: [
        "Encryption at rest and in transit",
        "Secure volume sanitization",
        "Snapshots and recovery policies",
        "Immutable storage options (where applicable)"
      ]
    }
  ]

  const compliancePoints = [
    "Supports ISO 27001-aligned security controls",
    "GDPR and data privacy ready",
    "Data residency and sovereign cloud deployments",
    "No external control planes or hyperscaler dependencies"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-red-50 via-background to-orange-50/30">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full mb-6">
              <Shield className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                Governance & Security
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-foreground leading-tight">
              Governance & Security<br />
              <span className="text-red-600">Built for Cloud Providers</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-medium text-foreground/80 mb-4">
              Granular access control, tenant isolation, and provider-grade governance—designed for multi-tenant cloud businesses.
            </p>
            
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              StackOrbit delivers a comprehensive governance and security framework that enables cloud providers to securely manage administrators, resellers, tenants, and end users—while maintaining full control over infrastructure, access, and operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700 font-semibold px-8 rounded-full"
                asChild
              >
                <Link href="/contact">
                  Explore Security Architecture
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-600/20 hover:bg-red-500/5 px-8 rounded-full bg-transparent"
                asChild
              >
                <Link href="/contact">Talk to a Platform Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Access Control (RBAC) Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 rounded-full mb-4">
              <Key className="w-4 h-4 text-red-600" />
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                Access Control
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Fine-Grained Access Control Across the Cloud Stack
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              StackOrbit uses a hierarchical RBAC model to enforce strict separation of responsibilities across platform administrators, resellers, tenants, and end users. Permissions are centrally managed and consistently enforced across UI and API layers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rbacCards.map((card) => {
              const Icon = card.icon
              return (
                <Card 
                  key={card.title} 
                  className="border-border/50 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${card.color}`} />
                  <CardContent className="pt-6 pb-8 px-6">
                    <div className={`w-14 h-14 mb-5 ${card.bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${card.textColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-red-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {card.description}
                    </p>
                    <ul className="space-y-2.5">
                      {card.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${card.textColor}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* API Privileges & Identity Management */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* API Privileges */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 rounded-full mb-4">
                <Code2 className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  API Security
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                Secure API-Level Governance
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                All actions within StackOrbit are governed by API-level privileges. Access tokens and API keys inherit RBAC permissions, ensuring programmatic access is as secure and controlled as the UI.
              </p>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <ul className="space-y-4">
                  {apiPrivileges.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-foreground font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Identity & Access Management */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full mb-4">
                <Fingerprint className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Identity Management
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                Enterprise-Ready Identity Management
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Comprehensive identity lifecycle management with enterprise authentication integration and multi-factor security.
              </p>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <ul className="space-y-4">
                  {identityFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-foreground font-medium">{feature.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Isolation & Hardening */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-red-950 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-4">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Infrastructure Security
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Infrastructure Isolation by Design
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              StackOrbit enforces strict isolation at the compute, network, and data layers—ensuring tenant workloads remain fully segregated and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {isolationDomains.map((domain) => {
              const Icon = domain.icon
              return (
                <div 
                  key={domain.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-14 h-14 mb-5 bg-gradient-to-br ${domain.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {domain.title}
                  </h3>
                  <ul className="space-y-3">
                    {domain.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Sovereign Readiness */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Compliance Ready
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Compliance-Ready and Sovereign by Design
              </h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                StackOrbit is designed to meet the security and compliance requirements of regulated industries and sovereign cloud deployments.
              </p>
              
              <ul className="space-y-4">
                {compliancePoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-foreground font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50 p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
                    <Globe className="w-8 h-8 text-emerald-600 mb-3" />
                    <h4 className="font-bold text-foreground mb-1">Data Residency</h4>
                    <p className="text-xs text-muted-foreground">Keep data within geographic boundaries</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
                    <Shield className="w-8 h-8 text-emerald-600 mb-3" />
                    <h4 className="font-bold text-foreground mb-1">ISO 27001</h4>
                    <p className="text-xs text-muted-foreground">Aligned security controls</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
                    <Lock className="w-8 h-8 text-emerald-600 mb-3" />
                    <h4 className="font-bold text-foreground mb-1">GDPR Ready</h4>
                    <p className="text-xs text-muted-foreground">Data privacy compliance</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
                    <Eye className="w-8 h-8 text-emerald-600 mb-3" />
                    <h4 className="font-bold text-foreground mb-1">No Dependencies</h4>
                    <p className="text-xs text-muted-foreground">Full provider ownership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500/5 via-background to-orange-500/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Govern Cloud Platforms with Confidence
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you're operating a public cloud, managed services platform, or enterprise cloud environment, StackOrbit provides the governance and security controls required to scale safely and compliantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700 font-semibold px-8 rounded-full"
              asChild
            >
              <Link href="/contact">
                Explore Security Architecture
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-600/20 hover:bg-red-500/5 px-8 rounded-full bg-transparent"
              asChild
            >
              <Link href="/contact">Talk to a Platform Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
