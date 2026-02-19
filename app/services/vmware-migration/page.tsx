import type { Metadata } from "next"
import VMwareMigrationPage from "./vmware-migration-content"

export const metadata: Metadata = {
  title: "VMware to Apache CloudStack Migration | StackOps by StackOrbit",
  description:
    "Expert VMware to Apache CloudStack migration services. Reduce TCO by up to 70%, eliminate vendor lock-in, and gain open-source freedom. Free TCO assessment available.",
  keywords:
    "VMware migration, Apache CloudStack, VMware alternative, vSphere migration, KVM hypervisor, cloud migration, StackOps, StackOrbit, Broadcom VMware",
  openGraph: {
    title: "VMware to CloudStack Migration | Reduce TCO by 70%",
    description:
      "Migrate your vSphere environment to Apache CloudStack. Expert migration services with proven methodology and 99.9% success rate.",
    type: "website",
    url: "https://stackorbit.com/services/vmware-migration",
  },
  twitter: {
    card: "summary_large_image",
    title: "VMware to CloudStack Migration | StackOps",
    description: "Break free from VMware licensing. Migrate to open-source Apache CloudStack with expert support.",
  },
  alternates: {
    canonical: "https://stackorbit.com/services/vmware-migration",
  },
}

export default function Page() {
  return <VMwareMigrationPage />
}
