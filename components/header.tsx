"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"

const orderLink =
  process.env.NEXT_PUBLIC_GOOGLE_FORMS_LINK ||
  "https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"

const navigation = [
  { href: "/#included", label: "Юу багтах вэ" },
  { href: "/#process", label: "Яаж ажилладаг вэ" },
  { href: "/work", label: "Хийсэн сайтууд" },
  { href: "/pricing", label: "Үнэ" },
  { href: "/faq", label: "Асуулт" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/8 bg-[#0c151a]/88 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-primary/40 bg-white/5 shadow-[0_0_18px_rgba(23,190,187,0.2)]">
              <Image src="/formly-logo.png" alt="Formly лого" fill sizes="40px" className="object-contain p-1" priority />
            </div>
            <div>
              <span className="block text-xl font-semibold tracking-tight text-white">Formly</span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:block">Done-for-you websites</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center md:flex">
            <Link
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_35px_-18px_rgba(23,190,187,.9)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Сайтаа захиалах
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-300 transition hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Цэс хаах" : "Цэс нээх"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/8 pb-5 pt-3 md:hidden">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Сайтаа захиалах
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
