import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
// import { ThemeProvider } from "../components/theme-provider"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ChatAI - Advanced Conversational AI",
  description: "Experience seamless conversations with our AI assistant",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

