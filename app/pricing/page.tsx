"use client"

import Link from "next/link"
import { CheckCircle, MessageCircle, Clock, Smartphone, TrendingUp, ArrowRight, Check, Sparkles } from "lucide-react"

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
    longDescription: "Энэ багц нь таны сайтыг нэг удаагийн бүтээгдэхүүн биш, байнга арчилгаатай, найдвартай ажилладаг систем байлгах зорилготой.",
    cardDescription: "Сайт эвдрэх вий гэж санаа зовохоо боль. Бид бүрэн хариуцна.",
    features: ["6–8 хуудас", "Work / FAQ / Process хуудас", "UX бичиглэл", "14 хоногийн дэмжлэг"],
  },
]

const assurances = ["Нууц төлбөр байхгүй", "Дараа нь өргөтгөнө", "Албадсан багц байхгүй"]

export default function PricingPage() {
  return (
    <>
      {/* Grain overlay and Aurora backgrounds */}
      <div className="grain-overlay"></div>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="aurora-bg"></div>
        <div className="aurora-bg-2"></div>
        </div>

      {/* Hero Section */}
      <section className="pt-36 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-7xl font-serif font-medium tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
            Үнэ ба <br />
            <span className="italic text-slate-300 font-light">Сонголт</span>{" "}
            <span className="text-gradient-aurora-vibrant font-semibold">Тодорхой</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Үнэ <span className="text-primary font-normal">450,000₮</span>-с эхэлнэ. <span className="text-primary font-normal">2 багц</span>, дарамтгүй сонголт. Starter багц хамгийн их сонгогддог.
          </p>

      {/* Trust Band */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">3 хоногт бэлэн</span>
          </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Smartphone className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Mobile-first</span>
          </div>
            <div className="flex items-center gap-2 text-slate-400">
              <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Дараа нь өргөтгөнө</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
                className={`glass-card group relative rounded-2xl p-8 flex flex-col border-t border-white/10 h-full ${
                  plan.popular ? "ring-2 ring-primary/30" : ""
              }`}
            >
              {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-xs tracking-widest uppercase border border-primary/30 z-20 whitespace-nowrap">
                    ХАМГИЙН ИХ СОНГОГДДОГ
                  </div>
              )}
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <Sparkles className="w-20 h-20 text-primary drop-shadow-[0_0_10px_rgba(0,255,170,0.5)]" />
                </div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors">{plan.name}</h3>
                    <p className="text-slate-400 text-sm font-light">{plan.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.unit}</span>
              </div>

                  {(plan as any).longDescription && (
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 font-light">
                      {(plan as any).longDescription}
                    </p>
                  )}
                  
                  {(plan as any).cardDescription && (
                    <p className="text-sm font-medium text-white italic border-l-2 border-primary pl-3 mb-6 py-2">
                      {(plan as any).cardDescription}
                    </p>
                  )}

                  <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg transition-all mt-auto ${
                  plan.popular
                        ? "bg-gradient-to-r from-primary to-secondary text-black font-bold shadow-lg shadow-primary/30 hover:scale-105"
                        : "text-white bg-white/10 hover:bg-white/20 border border-white/10"
                }`}
              >
                Захиалах
                <ArrowRight className="h-4 w-4" />
              </Link>
                </div>
            </div>
          ))}
        </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          {assurances.map((item) => (
            <span key={item} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
              {item}
            </span>
          ))}
        </div>
        </div>
      </section>

      {/* Monthly Service - Add-on */}
      <section className="py-24 bg-surface/30 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-4 border border-primary/20">
              Дагалдах үйлчилгээ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Сар бүрийн үйлчилгээ
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-medium">
              Энэ үйлчилгээ нь таны сайтыг нэг удаагийн бүтээгдэхүүн биш, байнга арчилгаатай, найдвартай ажилладаг систем байлгах зорилготой.
            </p>
          </div>

          <div className="glass-card group relative rounded-2xl p-8 border-t border-white/10 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-white">120,000</span>
                  <span className="text-slate-400">₮ / сар</span>
                </div>
                <p className="text-sm font-medium text-white italic border-l-2 border-primary pl-3 mb-8">
                  Сайт эвдрэх вий гэж санаа зовохоо боль. Бид бүрэн хариуцна.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Өдөр тутмын хяналт - Сайт асч байна уу, форм ажиллаж байна уу гэдгийг тогтмол шалгана</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Техникийн засвар, жижиг өөрчлөлт - Алдаа засах, текст, товч, холбоосын засвар</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Формын найдвартай ажиллагаа - Хэрэглэгчийн илгээсэн мэдээлэл алдагдахгүй, шуурхай засвар</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Аюулгүй байдал - Энгийн халдлага, спам-аас хамгаалах, эвдрэх эрсдэлийг багасгана</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Гүйцэтгэл ба хурд - Удаашрал, доголдол илэрвэл шалгаж сайжруулна</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Зөвлөгөө, дэмжлэг - &quot;Яаж сайжруулах вэ?&quot; гэдэг дээр бодит зөвлөгөө өгнө</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-48 flex-shrink-0">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg transition-all text-white bg-white/10 hover:bg-white/20 border border-white/10"
                >
                  Захиалах
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Асуух зүйл байна уу?</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Үнэгүй зөвлөгөө авч, танай бизнест яг юу хэрэгтэйг тодорхойлъё.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://m.me/961702760355484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-gradient-to-r from-primary to-secondary text-black rounded-lg shadow-lg shadow-primary/30 hover:scale-105 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Messenger-ээр бичих
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
