import type { Metadata } from "next"
import ManagedSupportPage from "./managed-support-content"

export const metadata: Metadata = {
  title: "Fully Managed 24/7 Support Services | StackOps by StackOrbit",
  description:
    "24x7x365 premium managed support for Apache CloudStack infrastructure. Certified engineers, customized SLAs, and 360-degree coverage including third-party vendor support.",
  keywords:
    "managed support, 24/7 support, CloudStack support, infrastructure management, SLA support, StackOps, StackOrbit, cloud support services",
  openGraph: {
    title: "Fully Managed 24/7 Support | StackOps",
    description:
      "Enterprise-grade managed support services for Apache CloudStack with certified engineers available around the clock.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fully Managed 24/7 Support | StackOps",
    description:
      "Enterprise-grade managed support services for Apache CloudStack with certified engineers available around the clock.",
  },
}

export default function Page() {
  return <ManagedSupportPage />
}
