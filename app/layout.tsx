import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://formly.business"),
  title: {
    default: "Formly — Таны сайтыг бүрэн хийж, бэлэн хүлээлгэн өгнө",
    template: "%s | Formly",
  },
  description:
    "Formly таны бизнесийн вебсайтын бүтэц, дизайн, хөгжүүлэлт, mobile хувилбар, form, SEO, домэйн холболт болон нээлтийг бүрэн хийж, ашиглахад бэлэн хүлээлгэн өгнө.",
  keywords: [
    "вебсайт хийлгэх",
    "веб сайт хийх үйлчилгээ",
    "жижиг бизнесийн сайт",
    "Formly",
    "Монгол веб сайт",
    "онлайн захиалгын сайт",
  ],
  authors: [{ name: "Formly" }],
  creator: "Formly",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Formly — Таны сайтыг бүрэн хийж, бэлэн хүлээлгэн өгнө",
    description:
      "Та бизнесээ тайлбарлана. Formly бүтэц, дизайн, хөгжүүлэлт, домэйн холболт болон нээлтийг бүрэн хариуцна.",
    url: "https://formly.business",
    siteName: "Formly",
    locale: "mn_MN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formly — Бэлэн вебсайт үйлчилгээ",
    description: "Та мэдээллээ өг. Бид сайтыг тань бүрэн хийж, бэлэн хүлээлгэн өгнө.",
  },
}

export const viewport: Viewport = {
  themeColor: "#17BEBB",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
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
