import Link from "next/link"

const quickLinks = [
  { href: "/process", label: "Процесс" },
  { href: "/work", label: "Ажлууд" },
  { href: "/pricing", label: "Холбоос" },
  { href: "/contact", label: "Ажлын байр" },
]

const pricingLinks = [
  { href: "/pricing", label: "Багцууд" },
  { href: "/work", label: "Блог" },
  { href: "/pricing", label: "Хөнгөлөлт" },
  { href: "/contact", label: "Демо авах" },
]

const aboutLinks = [
  { href: "/contact", label: "Нийгмийн сүлжээ" },
  { href: "/contact", label: "Холбоо барих" },
]

export function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded border border-primary/50 flex items-center justify-center text-primary font-serif font-bold italic shadow-[0_0_10px_rgba(0,255,170,0.3)]">
                F
              </div>
              <span className="text-xl font-serif text-white">Formly</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs mb-8 font-light">
              Амбицтай брэндүүдэд хурдан, өндөр чанартай дижитал шийдлүүд өгдөг.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/20 transition-all"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-accent hover:bg-accent/20 transition-all"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/20 transition-all"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-serif mb-6">Холбоос</h4>
            <ul className="space-y-3 text-sm font-light text-slate-400">
              {quickLinks.map((link, index) => (
                <li key={`nav-${index}-${link.href}`}>
                  <Link href={link.href} className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div>
            <h4 className="text-white font-serif mb-6">Үнэ</h4>
            <ul className="space-y-3 text-sm font-light text-slate-400">
              {pricingLinks.map((link, index) => (
                <li key={`pricing-${index}-${link.href}`}>
                  <Link href={link.href} className="hover:text-secondary hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-serif mb-6">Бидний тухай</h4>
            <ul className="space-y-3 text-sm font-light text-slate-400">
              {aboutLinks.map((link, index) => (
                <li key={`about-${index}-${link.href}`}>
                  <Link href={link.href} className="hover:text-accent hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-light">
          <p>Formly - Vibrant Aurora v6</p>
          <p>© 2023 Formly. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  )
}
