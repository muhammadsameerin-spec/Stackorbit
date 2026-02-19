import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { TARSChatWidget } from "@/components/tars-chat-widget"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Build Your Sovereign Cloud | StackOrbit",
  description: "Empowering businesses to build sovereign clouds — with open-source freedom and AI intelligence.",
  generator: "v0.app",
  keywords: [
    "sovereign cloud",
    "open-source cloud",
    "AI cloud management",
    "CMP",
    "ISPs",
    "MSPs",
    "CSPs",
    "enterprises",
  ],
  authors: [{ name: "StackOrbit.ai" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          {children}
          <TARSChatWidget />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
