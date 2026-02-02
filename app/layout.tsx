import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

import { Inter, Playfair_Display } from "next/font/google"

// Initialize fonts
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ["300","400","500","600"],
  variable: '--font-inter',
  display: "swap",
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ["400","500","600","700"],
  style: ["normal", "italic"],
  variable: '--font-playfair',
  display: "swap",
})


export const metadata: Metadata = {
  title: {
    default: "Formly - 3 хоногт захиалга авчирдаг веб сайт",
    template: "%s | Formly",
  },
  description:
    "Монголын жижиг, дунд бизнесүүдэд зориулсан вэб сайт хийх үйлчилгээ. 3 хоногт бэлэн, Mobile-first, Үнэ 450,000₮-с эхэлнэ.",
  generator: "v0.app",
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

export const viewport: Viewport = {
  themeColor: "#17BEBB",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
