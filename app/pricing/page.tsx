import Link from "next/link"
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react"

const orderLink =
  process.env.NEXT_PUBLIC_GOOGLE_FORMS_LINK ||
  "https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"

const plans = [
  {
    name: "Starter",
    price: "450,000",
    description: "Жижиг бизнес, хувийн үйлчилгээ, гарааны төсөлд",
    popular: true,
    features: [
      "1–3 хуудасны бүтэц, дизайн, хөгжүүлэлт",
      "Текстийн зохион байгуулалт ба үндсэн CTA",
      "Гар утас, таблет, компьютерт тохирсон хувилбар",
      "Messenger, холбоо барих эсвэл хүсэлтийн form",
      "Домэйн холболт, SSL, сайт нээх ажил",
      "Суурь SEO тохиргоо",
      "3 удаагийн засвар, сайжруулалт",
    ],
  },
  {
    name: "Growth",
    price: "750,000",
    description: "Илүү олон үйлчилгээ, агуулгатай байгууллагад",
    popular: false,
    features: [
      "6–8 хуудасны бүрэн вебсайт",
      "Бизнесийн зорилгод таарсан custom бүтэц",
      "Work, FAQ, Process зэрэг нэмэлт хуудсууд",
      "UX бичиглэл ба контентын дэлгэрэнгүй зохион байгуулалт",
      "Захиалга, бүртгэл эсвэл тусгай form холболт",
      "Домэйн, SSL, SEO, deployment бүрэн тохиргоо",
      "14 хоногийн нээлтийн дараах дэмжлэг",
    ],
  },
]

const assurances = [
  "Та өөрөө сайт хийхгүй",
  "Нууц нэмэлт төлбөргүй",
  "Ажиллахад бэлэн хүлээн авна",
]

export default function PricingPage() {
  return (
    <>
      <div className="grain-overlay" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="aurora-bg" />
        <div className="aurora-bg-2" />
      </div>

      <section className="relative z-10 px-4 pb-20 pt-36 text-center sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            БҮГДИЙГ ХИЙЖ ӨГӨХ БАГЦ
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Та зөвхөн мэдээллээ өгнө.
            <span className="mt-2 block text-gradient-aurora-vibrant">Үлдсэнийг Formly хариуцна.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Үнэд зөвхөн дизайн биш — бүтэц, хөгжүүлэлт, mobile хувилбар, form, SEO, домэйн холболт, нээлт болон хүлээлгэн өгөх ажил багтана.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />3 хоногт эхний бэлэн хувилбар</span>
            <span className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-primary" />Mobile-first</span>
            <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" />Done-for-you</span>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-7 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-[2rem] border p-7 sm:p-8 ${
                  plan.popular
                    ? "border-primary/35 bg-primary/[0.07] shadow-[0_30px_90px_-55px_rgba(23,190,187,.9)]"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/30 bg-[#102026] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    Хамгийн их сонголт
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{plan.description}</p>
                  </div>
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-7">
                  <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
                  <span className="ml-2 text-slate-400">₮</span>
                  <p className="mt-2 text-sm text-slate-500">нэг удаагийн төлбөр</p>
                </div>

                <div className="my-7 h-px bg-white/8" />

                <ul className="flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "border border-white/15 bg-white/[0.04] text-white hover:border-primary/35 hover:bg-white/[0.07]"
                  }`}
                >
                  Энэ багцаар захиалах
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
            {assurances.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/5 bg-surface/35 px-4 py-20 backdrop-blur-sm sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#101a20]/80 p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Headphones className="h-4 w-4" />
                САР БҮРИЙН АРЧИЛГАА
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-white">120,000₮ / сар</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Сайт нээгдсэний дараа техникийн хяналт, жижиг засвар, form, аюулгүй байдал, хурд болон зөвлөгөөг Formly үргэлжлүүлэн хариуцна.
              </p>
            </div>

            <Link
              href="https://m.me/961702760355484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-56 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 font-semibold text-white transition hover:border-primary/35 hover:bg-white/[0.05]"
            >
              <MessageCircle className="h-4 w-4" />
              Дэлгэрэнгүй асуух
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Ямар багц тохирохоо мэдэхгүй байна уу?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">Бизнесээ товч тайлбарла. Бид хэрэгтэй хуудас, боломж, бодит үнийг дарамтгүйгээр тодорхойлж өгнө.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Сайтаа захиалах
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://m.me/961702760355484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-primary/35 hover:bg-white/[0.05]"
            >
              <MessageCircle className="h-4 w-4" />
              Messenger-ээр ярилцах
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
