import type { Metadata } from "next"
import IaaSDesignContent from "./iaas-design-content"

export const metadata: Metadata = {
  title: "IaaS Cloud Design & Build Services | StackOps by StackOrbit",
  description:
    "Expert IaaS cloud design and implementation services with Apache CloudStack. Build scalable private and public cloud infrastructure with StackOps consulting.",
  keywords:
    "IaaS design, cloud infrastructure, Apache CloudStack, private cloud, public cloud, cloud architecture, StackOps, StackOrbit",
  openGraph: {
    title: "IaaS Cloud Design & Build | StackOps",
    description: "Design and implementation of IaaS cloud infrastructures for private and public cloud deployments",
    type: "website",
  },
}

export default function IaaSDesignPage() {
  return <IaaSDesignContent />
}
