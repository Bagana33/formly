import Link from "next/link"
import {
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  FileText,
  Globe2,
  Headphones,
  LayoutTemplate,
  MessageCircle,
  MousePointerClick,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react"
import { workProjects } from "@/lib/work-data"
import { WorkCarouselClient } from "@/components/work-carousel-client"

export const revalidate = 300

const orderLink =
  process.env.NEXT_PUBLIC_GOOGLE_FORMS_LINK ||
  "https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"

const messengerLink = "https://m.me/961702760355484"

const includedItems = [
  {
    icon: LayoutTemplate,
    title: "Танд тохирсон бүтэц",
    description:
      "Таны үйлчилгээ, хэрэглэгчийн зам, зорилгод таарсан хуудасны бүтэц, цэс, контентын дарааллыг бид гаргана.",
  },
  {
    icon: FileText,
    title: "Текстийг веб хэлбэрт цэгцлэх",
    description:
      "Таны өгсөн мэдээллийг ойлгомжтой гарчиг, тайлбар, үйлдэлд уриалах хэсэг болгон эмхэлж байршуулна.",
  },
  {
    icon: Smartphone,
    title: "Гар утсанд төгс харагдах дизайн",
    description:
      "Утас, таблет, компьютерийн бүх дэлгэцэд хурдан, цэвэр, хэрэглэгчдэд ойлгомжтой ажиллана.",
  },
  {
    icon: CalendarCheck,
    title: "Бүртгэл, захиалгын хэсэг",
    description:
      "Таны бизнест хэрэгтэй холбоо барих, цаг захиалах, хүсэлт авах эсвэл бүртгэлийн урсгалыг холбоно.",
  },
  {
    icon: Globe2,
    title: "Домэйн ба нээлт",
    description:
      "Домэйн, hosting, SSL болон техникийн тохиргоог хийж, сайтыг тань интернетэд ажиллахад бэлэн нээнэ.",
  },
  {
    icon: SearchCheck,
    title: "Суурь SEO тохиргоо",
    description:
      "Google-д зөв танигдах title, description, бүтэц болон үндсэн хайлтын тохиргоог хийж өгнө.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Та бизнесээ танилцуулна",
    description:
      "Үйлчилгээ, зорилго, лого, зураг болон байгаа мэдээллээ илгээнэ. Дутуу зүйл байвал бид хамт тодруулна.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Formly бүхнийг хийж гүйцэтгэнэ",
    description:
      "Бүтэц, текстийн зохион байгуулалт, дизайн, хөгжүүлэлт, mobile хувилбар, форм болон техникийн ажлыг бид хариуцна.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Бэлэн сайтыг хүлээн авна",
    description:
      "Шалгаж баталгаажуулсны дараа таны домэйн дээр нээж, ажиллах холбоос болон ашиглах заавартай нь хүлээлгэн өгнө.",
    icon: Rocket,
  },
]

const handoffItems = [
  "Ажиллахад бэлэн вебсайт",
  "Гар утас, таблет, компьютерт тохирсон хувилбар",
  "Домэйн болон hosting-ийн холболт",
  "Холбоо барих эсвэл захиалгын форм",
  "Суурь SEO ба хурдны тохиргоо",
  "Засвар, нээлтийн дараах дэмжлэг",
]

export default async function HomePage() {
  const projects = workProjects.slice(0, 10)

  return (
    <>
      <div className="grain-overlay" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="aurora-bg" />
        <div className="aurora-bg-2" />
      </div>

      <section className="relative z-10 overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" />
              DONE-FOR-YOU ВЕБСАЙТ ҮЙЛЧИЛГЭЭ
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Та мэдээллээ өг.
              <span className="mt-2 block text-gradient-aurora-vibrant">
                Бид сайтыг тань бүрэн хийж, бэлэн хүлээлгэн өгнө.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Formly бол сайт өөрөө угсардаг платформ биш. Бид таны өмнөөс бүтэц, текстийн зохион байгуулалт, дизайн, хөгжүүлэлт, mobile хувилбар, домэйн холболт болон нээлтийг бүхэлд нь хийж өгнө.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-[0_18px_55px_-22px_rgba(23,190,187,.9)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Сайтаа захиалах
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={messengerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.07]"
              >
                <MessageCircle className="h-4 w-4" />
                Messenger-ээр ярилцах
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              {["Код бичих шаардлагагүй", "Template тааруулах шаардлагагүй", "Бэлэн сайт хүлээн авна"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/20 blur-[90px]" />
            <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-accent/20 blur-[90px]" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#101b22]/85 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-4">
              <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#eef7f6] text-[#102026]">
                <div className="flex items-center gap-2 border-b border-black/5 bg-white px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#17bebb]" />
                  <div className="ml-3 h-7 flex-1 rounded-full bg-[#edf1f1]" />
                </div>

                <div className="grid min-h-[430px] grid-cols-[78px_1fr] sm:grid-cols-[112px_1fr]">
                  <aside className="border-r border-black/5 bg-white p-3 sm:p-4">
                    <div className="mb-7 grid h-10 w-10 place-items-center rounded-xl bg-[#102026] text-sm font-bold text-white">F</div>
                    <div className="space-y-3">
                      {[74, 56, 66, 48].map((width) => (
                        <div key={width} className="h-2 rounded-full bg-[#dce6e5]" style={{ width: `${width}%` }} />
                      ))}
                    </div>
                  </aside>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="h-3 w-32 rounded-full bg-[#102026] sm:w-44" />
                        <div className="mt-2 h-2 w-24 rounded-full bg-[#cbd8d7]" />
                      </div>
                      <div className="h-9 w-24 rounded-xl bg-[#17bebb]" />
                    </div>

                    <div className="mt-5 rounded-2xl bg-[#102026] p-5 text-white sm:p-6">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">Your business online</div>
                      <div className="mt-3 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">Итгэл төрүүлдэг. Захиалга авдаг. Ашиглахад бэлэн.</div>
                      <div className="mt-5 h-9 w-28 rounded-full bg-primary" />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-black/5 bg-white p-4">
                        <Smartphone className="h-5 w-5 text-[#17bebb]" />
                        <div className="mt-3 h-2 w-16 rounded-full bg-[#102026]" />
                        <div className="mt-2 h-1.5 w-full rounded-full bg-[#dce6e5]" />
                        <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-[#dce6e5]" />
                      </div>
                      <div className="rounded-2xl border border-black/5 bg-white p-4">
                        <CalendarCheck className="h-5 w-5 text-[#673ab7]" />
                        <div className="mt-3 h-2 w-20 rounded-full bg-[#102026]" />
                        <div className="mt-2 h-1.5 w-full rounded-full bg-[#dce6e5]" />
                        <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-[#dce6e5]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-14 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111c22]/95 px-4 py-3 text-white shadow-xl backdrop-blur sm:flex">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <MousePointerClick className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Таны хийх зүйл</p>
                <p className="text-sm font-semibold">Мэдээллээ өгөх</p>
              </div>
            </div>

            <div className="absolute -right-4 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#102026] shadow-xl sm:flex">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-[#0c8d8a]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Formly-ийн хийх зүйл</p>
                <p className="text-sm font-semibold">Бүгдийг гүйцэтгэх</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/5 bg-surface/35 px-4 py-20 backdrop-blur-sm sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Таны хийх зүйл</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Бизнесийнхээ мэдээллийг бидэнд өгөх.</h2>
              <div className="mt-7 space-y-4 text-slate-300">
                {["Ямар үйлчилгээ үзүүлдэг", "Хэнд зориулсан бизнес вэ", "Лого, зураг, холбоо барих мэдээлэл", "Танд хэрэгтэй бүртгэл эсвэл захиалгын хэлбэр"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary/25 bg-primary/[0.07] p-7 shadow-[0_24px_80px_-45px_rgba(23,190,187,.75)] sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Formly-ийн хийх зүйл</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Сайтыг эхнээс нь дуустал бүрэн хийж өгөх.</h2>
              <div className="mt-7 space-y-4 text-white">
                {["Бүтэц болон хэрэглэгчийн урсгал гаргах", "Текст, дизайн, хөгжүүлэлтийг гүйцэтгэх", "Mobile, form, SEO, domain тохируулах", "Шалгаж, нээж, бэлэн хүлээлгэн өгөх"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="included" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">БҮГД БАГТСАН</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Та олон хүн, олон үйлчилгээ тусад нь хайх шаардлагагүй.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Нэг захиалгаар бизнесийн сайт хийхэд шаардлагатай үндсэн ажлуудыг Formly нэг дор хариуцна.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="group rounded-[1.7rem] border border-white/8 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/[0.055]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="process" className="relative z-10 border-y border-white/5 bg-surface/35 px-4 py-20 backdrop-blur-sm sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">ЭНГИЙН 3 АЛХАМ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Та сайт хийхгүй. Та бэлэн сайт хүлээж авна.</h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <article key={step.number} className="rounded-[1.8rem] border border-white/10 bg-[#101a20]/80 p-7">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold tracking-[0.18em] text-slate-600">{step.number}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{step.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <WorkCarouselClient projects={projects ?? []} />

      <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">ХҮЛЭЭН АВАХ ЗҮЙЛ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white">Зөвхөн зураг төслийн файл биш. Бодитоор ажиллаж байгаа сайт.</h2>
            <p className="mt-5 leading-7 text-slate-400">Таны сайт домэйн дээрээ нээгдсэн, хэрэглэгч хүлээн авахад бэлэн байх ёстой. Бидний ажил тэнд дуусна.</p>
          </div>

          <div className="rounded-[2rem] border border-primary/25 bg-primary/[0.07] p-7 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              {handoffItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/10 p-4 text-white">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-primary/20 bg-[#102026] p-7 shadow-[0_35px_120px_-65px_rgba(23,190,187,.85)] sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Headphones className="h-4 w-4" />
                ТӨСЛӨӨ ЭХЛҮҮЛЭХЭД БЭЛЭН ҮҮ?
              </div>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Танд сайт хийх цаг, мэдлэг хэрэггүй. Formly-д бизнесээ тайлбарлахад л болно.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Бид шаардлагыг тань сонсоод ямар бүтэц, ямар боломж, ямар багц тохирохыг шууд тодорхойлно.</p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-56 items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Сайтаа захиалах
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={messengerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-56 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-primary/40 hover:bg-white/[0.05]"
              >
                <MessageCircle className="h-4 w-4" />
                Эхлээд асуух зүйл байна
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
