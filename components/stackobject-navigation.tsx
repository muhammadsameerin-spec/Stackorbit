"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

export function StackObjectNavigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: "Overview", href: "/platform/stackobject" },
    { label: "Features", href: "/platform/stackobject/features" },
    { label: "Docs", href: "/platform/stackobject/docs" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/platform/stackobject") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="relative z-40">
      {/* Main StackOrbit Navigation - Reusing the full Navigation component */}
      <Navigation />

      {/* StackObject Sub-Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-14">
            {/* StackObject Logo */}
            <Link href="/platform/stackobject" className="flex items-center flex-shrink-0 gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">StackObject</span>
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
                      : "text-blue-700 hover:text-blue-900"
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
                      : "text-blue-700 hover:text-blue-900 hover:bg-blue-50"
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
