"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-primary/50 shadow-[0_0_14px_rgba(23,190,187,0.28)] bg-white/5">
              <Image src="/formly-logo.png" alt="Formly лого" fill sizes="36px" className="object-contain p-1" priority />
            </div>
            <span className="text-xl font-serif font-medium tracking-wide text-white">Formly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-300">
            <Link href="/process" className="hover:text-primary transition-colors">
              Процесс
            </Link>
            <Link href="/work" className="hover:text-primary transition-colors">
              Ажлууд
            </Link>
            <Link href="/pricing" className="hover:text-primary transition-colors">
              Үнэ
            </Link>
            <Link href="/faq" className="hover:text-accent transition-colors">
              Асуултууд
              </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href={process.env.NEXT_PUBLIC_GOOGLE_FORMS_LINK || "https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 rounded-full overflow-hidden text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/45 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#2F3E46] opacity-100 group-hover:brightness-110 transition-all"></div>
              <span className="relative z-10 font-bold tracking-wide text-white">Захиалах</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Цэс хаах" : "Цэс нээх"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col gap-2">
              <Link href="/process" className="px-2 py-2 text-sm font-medium text-slate-300 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Процесс
              </Link>
              <Link href="/work" className="px-2 py-2 text-sm font-medium text-slate-300 hover:text-secondary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Ажлууд
              </Link>
              <Link href="/pricing" className="px-2 py-2 text-sm font-medium text-slate-300 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Үнэ
              </Link>
              <Link href="/faq" className="px-2 py-2 text-sm font-medium text-slate-300 hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Асуултууд
                </Link>
              <Link
                href={process.env.NEXT_PUBLIC_GOOGLE_FORMS_LINK || "https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#0b1a1f] bg-primary rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Захиалах
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  )
}
