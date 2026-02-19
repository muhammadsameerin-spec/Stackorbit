"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

export function StackWatchNavigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: "Overview", href: "/platform/stackwatch" },
    { label: "Features", href: "/platform/stackwatch/features" },
    { label: "Docs", href: "/platform/stackwatch/docs" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/platform/stackwatch") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="relative z-40">
      {/* Main StackOrbit Navigation - Reusing the full Navigation component */}
      <Navigation />

      {/* StackWatch Sub-Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-14">
            {/* StackWatch Logo */}
            <Link href="/platform/stackwatch" className="flex items-center flex-shrink-0 gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Stackwatch</span>
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
                      : "text-emerald-700 hover:text-emerald-900"
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
                      : "text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50"
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
