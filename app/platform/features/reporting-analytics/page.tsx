import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Users,
  Server,
  Wallet,
  Check,
  Download,
  Filter,
  Calendar,
  Search,
  RefreshCw,
  PieChart,
  LineChart,
  Clock,
  Target
} from "lucide-react"

export default function ReportingAnalyticsPage() {
  const reportTypes = [
    {
      icon: FileText,
      title: "Invoice Reports",
      subtitle: "Billing & Payment Tracking",
      description: "Manage customer invoices with complete visibility into payment status, billing history, and transaction records. Support for both prepaid and postpaid billing models.",
      highlights: [
        "Filter by client, status, or month",
        "Download as PDF or Excel",
        "Mark payments and cancel invoices"
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Usage Summary Reports",
      subtitle: "Aggregated Resource Consumption",
      description: "Get a comprehensive view of service and resource usage across all customers or specific clients. Track usage patterns and optimize service plans accordingly.",
      highlights: [
        "Aggregated and detailed views",
        "Custom date range selection",
        "Multi-format export options"
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Users,
      title: "Client Usage Summary",
      subtitle: "Per-Customer Resource Tracking",
      description: "Monitor individual client resource consumption including storage, bandwidth, compute, and more. Essential for accurate billing and resource allocation management.",
      highlights: [
        "Client-level breakdown",
        "Period-based reporting",
        "PDF and Excel downloads"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Server,
      title: "Resource Usage Reports",
      subtitle: "Real-Time Infrastructure Insights",
      description: "Track compute, storage, and network consumption across all users in real-time. Identify resource-heavy accounts and optimize infrastructure performance.",
      highlights: [
        "Current and historical views",
        "First-day-of-month snapshots",
        "Resource-type breakdown"
      ],
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Wallet,
      title: "Cost & Expense Reports",
      subtitle: "Financial Analytics & Projections",
      description: "Analyze profitability with detailed cost breakdowns, expense projections, and credit balance tracking. Predict when clients may need top-ups or attention.",
      highlights: [
        "Expense projection analysis",
        "Credit days remaining alerts",
        "Usage spend vs balance tracking"
      ],
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: PieChart,
      title: "Revenue Analytics",
      subtitle: "Business Performance Metrics",
      description: "Understand your cloud business performance with revenue trends, customer growth metrics, and profitability analysis across all service offerings.",
      highlights: [
        "Revenue trend analysis",
        "Customer growth tracking",
        "Service-wise profitability"
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ]

  const keyFeatures = [
    {
      icon: Filter,
      title: "Advanced Filtering",
      description: "Filter reports by client, status, date range, and resource type for precise data extraction"
    },
    {
      icon: Download,
      title: "Multi-Format Export",
      description: "Download reports in PDF for sharing or XLSX for further analysis in spreadsheets"
    },
    {
      icon: Calendar,
      title: "Custom Date Ranges",
      description: "Generate reports for any time period—daily, weekly, monthly, or custom ranges"
    },
    {
      icon: Search,
      title: "Quick Search",
      description: "Find specific invoices or usage records instantly with powerful search capabilities"
    },
    {
      icon: RefreshCw,
      title: "Real-Time Data",
      description: "Access up-to-the-minute usage and billing data with one-click refresh"
    },
    {
      icon: Clock,
      title: "Scheduled Reports",
      description: "Automate report generation and delivery on a recurring schedule"
    }
  ]

  const useCases = [
    {
      title: "Monthly Billing Reviews",
      description: "Generate comprehensive invoice reports to review all customer payments, identify overdue accounts, and track revenue trends month-over-month.",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Resource Optimization",
      description: "Analyze resource usage patterns to identify underutilized or overprovisioned resources, enabling better capacity planning and cost optimization.",
      icon: Server,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Customer Account Health",
      description: "Monitor credit balances and expense projections to proactively reach out to customers before they run out of credit or face service disruptions.",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Financial Audits",
      description: "Download detailed billing and expense reports in Excel format for integration with accounting systems and compliance audits.",
      icon: Wallet,
      color: "from-amber-500 to-amber-600"
    }
  ]

  const reportWorkflow = [
    {
      step: "1",
      title: "Select Report Type",
      description: "Choose from invoice, usage, resource, or expense reports"
    },
    {
      step: "2",
      title: "Apply Filters",
      description: "Filter by client, date range, status, or resource type"
    },
    {
      step: "3",
      title: "Generate Report",
      description: "Click generate to create your customized report instantly"
    },
    {
      step: "4",
      title: "Download & Share",
      description: "Export as PDF or Excel for analysis and distribution"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 via-background to-orange-50/30">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full mb-6">
                <BarChart3 className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                  Platform Features
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                Reporting & Analytics<br />
                <span className="text-amber-600">for Cloud Providers</span>
              </h1>
              
              <p className="text-base md:text-lg font-medium text-foreground/80 mb-6">
                Clear insights in just a few clicks. Track usage, billing, and business performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 text-white hover:bg-amber-700 font-semibold px-8 rounded-full"
                  asChild
                >
                  <Link href="/contact">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-600/20 hover:bg-amber-50 px-8 rounded-full bg-transparent"
                  asChild
                >
                  <Link href="https://docs-admin.stackbill.com/docs/admin/reports/introduction" target="_blank">
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/10 p-4 border border-slate-100">
                <img 
                  src="https://www.stackbill.com/assets/images/sb-img/high-performance-compute.svg" 
                  alt="Reporting & Analytics Dashboard"
                  className="w-full max-w-lg h-[320px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Types Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Comprehensive Report Suite
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Five specialized report types designed to give you complete visibility into every aspect of your cloud business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((report) => {
              const Icon = report.icon
              return (
                <Card 
                  key={report.title} 
                  className="border-border/50 hover:border-amber-500/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${report.bgColor} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${report.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-amber-600 transition-colors">
                          {report.title}
                        </h3>
                        <p className="text-sm text-amber-600/80 font-medium">{report.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {report.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          {highlight}
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

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Powerful Reporting Features
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built-in tools that make report generation fast, flexible, and actionable
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-amber-500/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Report Generation Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-950 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
              <Target className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Simple Workflow
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Generate Reports in 4 Simple Steps
            </h2>
            <p className="text-base text-white/80 max-w-2xl mx-auto">
              No complex configurations. Get the insights you need in just a few clicks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportWorkflow.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector */}
                {index < reportWorkflow.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/20 z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-400">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">5+</div>
              <div className="text-white/70">Report Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">2</div>
              <div className="text-white/70">Export Formats (PDF, Excel)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">&lt;30s</div>
              <div className="text-white/70">Report Generation Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              B2B Use Cases
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              How cloud providers use StackOrbit reports to drive business decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Card 
                  key={useCase.title}
                  className="border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className={`w-full sm:w-2 sm:h-auto h-2 bg-gradient-to-r sm:bg-gradient-to-b ${useCase.color}`} />
                      <div className="p-6 flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-bold text-foreground group-hover:text-amber-600 transition-colors">
                            {useCase.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Value Props for B2B */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 rounded-full mb-6">
                <LineChart className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                  Business Intelligence
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Data-Driven Cloud Business Management
              </h2>
              
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Make informed decisions with comprehensive analytics. StackOrbit reports help you understand customer behavior, optimize resource allocation, and maximize profitability.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Identify high-value customers and usage patterns",
                  "Predict revenue and manage cash flow",
                  "Optimize resource allocation and reduce waste",
                  "Ensure accurate billing and reduce disputes",
                  "Support compliance audits with detailed records"
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/50 p-8">
                <div className="space-y-4">
                  {/* Mock Report Card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-foreground">Monthly Revenue</span>
                      <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12.5%</span>
                    </div>
                    <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-foreground">Active Customers</span>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">248</span>
                    </div>
                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-foreground">Resource Utilization</span>
                      <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">67%</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get Complete Visibility Into Your Cloud Business
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Start making data-driven decisions with comprehensive reporting and analytics built for cloud service providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 text-white hover:bg-amber-700 font-semibold px-8 rounded-full"
              asChild
            >
              <Link href="/contact">
                Schedule a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-600/20 hover:bg-amber-50 px-8 rounded-full bg-transparent"
              asChild
            >
              <Link href="/platform/stackbill">Explore StackBill</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
