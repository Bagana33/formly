"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-primary flex items-center justify-center text-primary font-serif font-bold italic relative overflow-hidden group shadow-[0_0_15px_rgba(0,255,170,0.4)]">
              <div className="absolute inset-0 bg-primary/20"></div>
              F
            </div>
            <span className="text-xl font-serif font-medium tracking-wide text-white">Formly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-300">
            <Link href="/process" className="hover:text-primary transition-colors hover:shadow-[0_0_10px_rgba(0,255,170,0.5)] hover:shadow-primary/50">
              Процесс
            </Link>
            <Link href="/work" className="hover:text-secondary transition-colors">
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
            <Link href="/admin" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Нэвтрэх
            </Link>
            <Link
              href="https://m.me/961702760355484"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 rounded-full overflow-hidden text-sm font-medium text-white shadow-lg shadow-primary/30 transition-all hover:shadow-primary/60 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 group-hover:brightness-110 transition-all"></div>
              <span className="relative z-10 font-bold tracking-wide text-black/80">Эхлүүлэх</span>
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
                href="https://m.me/961702760355484"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-primary rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Эхлүүлэх
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  )
}
