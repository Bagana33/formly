import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"

const orderLink =
  process.env.NEXT_PUBLIC_GOOGLE_FORMS_LINK ||
  "https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"

const footerLinks = [
  {
    title: "Үйлчилгээ",
    links: [
      { href: "/#included", label: "Юу багтах вэ" },
      { href: "/#process", label: "Яаж ажилладаг вэ" },
      { href: "/pricing", label: "Үнийн багц" },
    ],
  },
  {
    title: "Formly",
    links: [
      { href: "/work", label: "Хийсэн сайтууд" },
      { href: "/faq", label: "Түгээмэл асуулт" },
      { href: "/contact", label: "Холбоо барих" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-[#091116]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-primary/40 bg-white/5 shadow-[0_0_18px_rgba(23,190,187,0.18)]">
                <Image src="/formly-logo.png" alt="Formly лого" fill sizes="40px" className="object-contain p-1" />
              </div>
              <div>
                <span className="block text-xl font-semibold tracking-tight text-white">Formly</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Done-for-you websites</span>
              </div>
            </Link>

            <h2 className="mt-7 max-w-xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Та бизнесээ тайлбарлана. Бид сайтыг тань хийж, бэлэн хүлээлгэн өгнө.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              Бүтэц, дизайн, хөгжүүлэлт, mobile хувилбар, form, SEO, домэйн холболт болон нээлтийг нэг дор хариуцна.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Сайтаа захиалах
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://m.me/961702760355484"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-primary/35 hover:bg-white/[0.04]"
              >
                <MessageCircle className="h-4 w-4" />
                Messenger
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-slate-500 transition hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Formly. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p>Монголын жижиг, дунд бизнесүүдэд зориулсан бэлэн вебсайт үйлчилгээ.</p>
        </div>
      </div>
    </footer>
  )
}
