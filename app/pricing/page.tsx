import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { CheckCircle, MessageCircle, Clock, Smartphone, TrendingUp, ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Үнэ",
  description: "Formly-ийн вэб сайт хийх үйлчилгээний үнэ. Үнэ 450,000₮-с эхэлнэ. 3 хоногт бэлэн.",
}

const plans = [
  {
    name: "Starter",
    price: "450,000",
    unit: "₮",
    description: "Эхлэхэд тохиромжтой",
    popular: true,
    features: ["1–3 хуудас", "Messenger + Form", "Mobile-first UX", "Дотооддоо засах заавар"],
  },
  {
    name: "Growth",
    price: "750,000",
    unit: "₮",
    description: "Илүү дэлгэрэнгүй",
    features: ["6–8 хуудас", "Work / FAQ / Process хуудас", "UX бичиглэл", "14 хоногийн дэмжлэг"],
  },
  {
    name: "Care",
    price: "120,000",
    unit: "₮ / сар",
    description: "Тогтмол арчилгаа",
    features: ["Сар бүрийн арчилгаа", "Контент шинэчлэл", "Жижиг хөгжүүлэлт", "Сар бүрийн тайлан"],
  },
]

const assurances = ["Нууц төлбөр байхгүй", "Дараа нь өргөтгөнө", "Албадсан багц байхгүй"]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Үнэ ба сонголт</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">3 багц, дарамтгүй сонголт</h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">Үнэ 450,000₮-с эхэлнэ. Starter багц хамгийн их сонгогддог.</p>
        </div>
      </Section>

      {/* Trust Band */}
      <Section className="pt-0">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">3 хоногт бэлэн</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Smartphone className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">Mobile-first</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">Дараа нь өргөтгөнө</span>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl ${
                plan.popular ? "surface border border-cta ring-2 ring-cta/20" : "surface"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground px-4">
                  Хамгийн их сонгогддог
                </Badge>
              )}
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-cta">{plan.price}</span>
                <span className="text-muted-foreground">{plan.unit}</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg transition-all ${
                  plan.popular
                    ? "btn-cta text-cta-foreground bg-cta shadow-lg"
                    : "text-foreground bg-secondary/20 hover:bg-secondary/30"
                }`}
              >
                Захиалах
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {assurances.map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-secondary" />
              {item}
            </span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Асуух зүйл байна уу?</h2>
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
          </div>
        </div>
      </Section>
    </>
  )
}
