"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  
  const footerSections = {
    platform: {
      title: "Platform",
      links: [
        { href: "/platform/stackbill", label: "StackBill" },
        { href: "/platform/stackwatch", label: "StackWatch" },
        { href: "/platform/stackobject", label: "StackObject" },
        { href: "/platform/stackvault", label: "StackVault" },
        { href: "/platform/tars", label: "TARS AI" },
        { href: "/platform/integrations", label: "Integrations" },
        { href: "/platform/features/sovereign-cloud", label: "Platform Features" },
      ],
    },
    services: {
      title: "Services",
      links: [
        { href: "/services/cloudstack-consulting", label: "CloudStack Consulting" },
        { href: "/services/iaas-design", label: "IaaS Design & Build" },
        { href: "/services/vmware-migration", label: "VMware Migration" },
        { href: "/services/managed-support", label: "24/7 Managed Support" },
        { href: "/stackops", label: "StackOps Services" },
      ],
    },

    resources: {
      title: "Resources",
      links: [
        { href: "/resources/deployment-guide", label: "Documentation" },
        { href: "/resources/blog", label: "Blog" },
        { href: "/resources/case-studies", label: "Case Studies" },
        { href: "/resources/videos", label: "Videos" },
        { href: "/resources/api-documentation", label: "API Reference" },
        { href: "/pricing", label: "Pricing" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/careers", label: "Careers" },
        { href: "/platform/stack-academy", label: "Stack Academy" },
        { href: "/legal", label: "Legal" },
      ],
    },
  }

  return (
    <footer className="border-t border-border/40 bg-slate-50 dark:bg-slate-950">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src="/stackorbit-logo.png"
                alt="StackOrbit Logo"
                width={160}
                height={40}
                className="h-9 w-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <Link 
                href="https://github.com/stackorbit" 
                target="_blank"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <Github size={18} />
              </Link>
              <Link 
                href="https://twitter.com/stackorbit" 
                target="_blank"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <Twitter size={18} />
              </Link>
              <Link 
                href="https://linkedin.com/company/stackorbit" 
                target="_blank"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <Linkedin size={18} />
              </Link>
              <Link 
                href="https://youtube.com/@stackorbit" 
                target="_blank"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <Youtube size={18} />
              </Link>
            </div>

            {/* Certifications */}
            <div className="pt-4 border-t border-border/30">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Certifications</p>
              <img 
                src="https://www.stackbill.com/assets/images/sb-img/certificate.png" 
                alt="Certifications - NASSCOM Certified Member, ISO 27001, ISO 9001:2015"
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">{footerSections.platform.title}</h3>
            <ul className="space-y-2.5">
              {footerSections.platform.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">{footerSections.services.title}</h3>
            <ul className="space-y-2.5">
              {footerSections.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">{footerSections.resources.title}</h3>
            <ul className="space-y-2.5">
              {footerSections.resources.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">{footerSections.company.title}</h3>
            <ul className="space-y-2.5">
              {footerSections.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              StackOrbit © 2015-2026. {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="/legal/sla" className="text-muted-foreground hover:text-foreground transition-colors">
                SLA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
