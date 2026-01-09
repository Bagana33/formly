import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/section"
import { CheckCircle, XCircle, MessageCircle, ArrowRight, LayoutDashboard, Wand2, MessageSquare, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Үйлчилгээ",
  description: "Formly-ийн вэб сайт хийх үйлчилгээний дэлгэрэнгүй мэдээлэл. Танай бизнест тохируулсан вэб шийдэл.",
}

const serviceSystem = [
  {
    title: "UX бүтэц",
    description: "Үйлчилгээний урсгал, CTA, micro-proof-оо тодорхойлно",
    icon: LayoutDashboard,
  },
  {
    title: "UI + copy",
    description: "Өнгө, фонт, бичвэрийг танай брэндэд тааруулна",
    icon: Wand2,
  },
  {
    title: "Messenger + Form",
    description: "Нэг товчоор холбогдох сувгууд, analytics-тай",
    icon: MessageSquare,
  },
  {
    title: "Нээлтийн бэлэн байдал",
    description: "Mobile-first код, HTTPS, хурд, зааварчилгаа",
    icon: ShieldCheck,
  },
]

const included = [
  "Responsive дизайн (гар утас, таблет, компьютер)",
  "Хурдан ачаалалт",
  "SEO оновчлол",
  "Messenger холболт",
  "Contact form (Messenger + Email)",
  "SSL сертификат (https)",
  "Google Analytics холболт",
  "Social media холбоосууд",
  "Нээлтийн дараах дэмжлэг",
]

const customizations = [
  "Танай бизнесийн өнгө, брэнд",
  "Үйлчилгээний танилцуулга",
  "Ажлын жишээ / портфолио",
  "Үнийн хуудас",
  "Түгээмэл асуултууд",
  "Холбоо барих хуудас",
  "Багийн танилцуулга",
  "Процесс / ажиллах дараалал",
]

const notIncluded = [
  "Домэйн нэр (жишээ: yoursite.mn)",
  "Хостинг төлбөр",
  "Контент бичлэг (текст, зураг)",
  "Лого дизайн",
  "Онлайн төлбөрийн систем",
  "E-commerce функц",
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Formly үйлчилгээ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">3 хоногт захиалга авчирдаг систем</h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Зөв UX бүтэц, брэндтэй нийцсэн UI, Messenger + Form холболтыг нэг багцад шийднэ.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Танай бизнест тохируулж · 3 хоногт бэлэн</p>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Системчилсэн үйлчилгээ</h2>
          <p className="mt-4 text-muted-foreground">Захиалга авчрах бүтцийг эхнээс нь төлөвлөж, бүх холболтыг нэг дор шийднэ</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceSystem.map((item) => (
            <div key={item.title} className="p-6 rounded-xl surface flex flex-col gap-3">
              <item.icon className="h-6 w-6 text-secondary" />
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Build */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Юу багтдаг вэ?</h2>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Танай бизнест тохируулна</h2>
            <ul className="space-y-4">
              {customizations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Not Included */}
      <Section className="bg-muted/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Багтдаггүй зүйлс</h2>
          <p className="text-muted-foreground text-center mb-8">
            Эдгээр зүйлсийг тусад нь авах шаардлагатай. Бид зөвлөгөө өгч, тохируулахад туслана.
          </p>
          <ul className="space-y-4">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-muted-foreground">Нууц төлбөр байхгүй · Албадсан багц байхгүй</p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Эхлүүлэхэд бэлэн үү?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Үнэгүй зөвлөгөө авч, танай бизнест яг юу хэрэгтэйг тодорхойлъё.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://m.me/formly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary bg-cta rounded-lg shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Messenger-ээр бичих
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-primary-foreground border-2 border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 transition-all"
            >
              Үнэгүй зөвлөгөө авах
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
