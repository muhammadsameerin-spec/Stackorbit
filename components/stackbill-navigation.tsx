"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export function StackBillNavigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: "Overview", href: "/platform/stackbill" },
    { label: "Features", href: "/platform/stackbill/features" },
    { label: "Integration", href: "/platform/stackbill/integration" },
    { label: "App Marketplace", href: "/platform/stackbill/marketplace" },
    { label: "Pricing", href: "/platform/stackbill/pricing" },
    { label: "Docs", href: "/platform/stackbill/docs" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/platform/stackbill") {
      return pathname === "/platform/stackbill"
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="relative z-40">
      {/* Main StackOrbit Navigation - Reusing the full Navigation component */}
      <Navigation />

      {/* StackBill Sub-Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-14">
            {/* StackBill Logo */}
            <Link href="/platform/stackbill" className="flex items-center flex-shrink-0">
              <span className="text-lg font-bold text-foreground tracking-tight">Stack<span className="text-red-500">Bill</span></span>
            </Link>

            {/* Right-aligned Menu Items */}
            <div className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? "text-gray-500"
                      : "text-purple-700 hover:text-purple-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block py-3 px-3 text-sm font-medium rounded-lg transition-colors ${
                    isActiveLink(item.href)
                      ? "text-gray-500 bg-gray-50"
                      : "text-purple-700 hover:text-purple-900 hover:bg-purple-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
