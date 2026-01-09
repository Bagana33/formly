import Link from "next/link"
import { MessageCircle, Mail, ArrowRight } from "lucide-react"

const quickLinks = [
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/work", label: "Ажлууд" },
  { href: "/pricing", label: "Үнэ" },
  { href: "/process", label: "Процесс" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Холбоо барих" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-lg font-medium text-primary-foreground/90">3 хоногт захиалга авчирдаг веб сайт</p>
          <Link
            href="https://m.me/formly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary bg-cta rounded-lg shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Messenger-ээр бичих
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-secondary">
              Formly
            </Link>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Монголын жижиг, дунд бизнесүүдэд зориулсан мэргэжлийн вэб сайт.
            </p>
            {/* Trust micro-copy */}
            <p className="mt-3 text-xs text-primary-foreground/50">Системтэй UX · Ил тод үнэ</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground mb-4">Холбоосууд</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground mb-4">Холбоо барих</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="https://m.me/formly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-cta transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Messenger
              </Link>
              <Link
                href="mailto:hello@formly.mn"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@formly.mn
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Formly. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  )
}
