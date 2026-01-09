import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { workProjects } from "@/lib/work-data"
import {
  GraduationCap,
  Heart,
  Wrench,
  Users,
  XCircle,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Clock,
  Smartphone,
  TrendingUp,
  Check,
  LayoutDashboard,
  Wand2,
  ShieldCheck,
} from "lucide-react"
import { HeroGradient } from "@/components/hero-gradient"

const industries = [
  { icon: GraduationCap, label: "Сургалтын төв" },
  { icon: Heart, label: "Эмнэлэг / Гоо сайхан" },
  { icon: Wrench, label: "Үйлчилгээ" },
  { icon: Users, label: "Зуучлал" },
]

const problems = [
  "Facebook page-д найддаг тул лавлагаа алга болдог",
  "Үнийн мэдээлэл, санал хүсэлт тарамдсан",
  "Мобайл дээр уншихад хэцүү, UX эмх цэгцгүй",
  "Итгэл төрүүлэх хангалттай баримт байхгүй",
]

const solutions = [
  "Бүтэц нь хэрэглэгчийг шууд захиалга хүртэл чиглүүлнэ",
  "Messenger + Form-оор нэг товчоор холбогдоно",
  "Брэндтэй нийцсэн, итгэл төрүүлэх UI",
  "Mobile-first, хурдтай кодчилол",
]

const serviceSystem = [
  {
    title: "UX бүтэц",
    description: "Үйлчилгээний урсгалыг 3 алхмаар ойлгомжтой болгоно",
    icon: LayoutDashboard,
  },
  {
    title: "Брэндтэй нийцсэн UI",
    description: "Өнгө, фонт, copy-г танай бизнест тааруулж кодолно",
    icon: Wand2,
  },
  {
    title: "Messenger + Form холболт",
    description: "Холбогдох сувгийг нэг товчоор ил тод үзүүлнэ",
    icon: MessageCircle,
  },
  {
    title: "Хурд + SEO",
    description: "Mobile-first код, HTTPS, analytics суурилуулалт",
    icon: ShieldCheck,
  },
]

const plans = [
  {
    name: "Starter",
    price: "450,000₮",
    features: ["1–3 хуудас", "Messenger + Form", "Mobile-first UX", "Дотооддоо засах заавар"],
    popular: true,
  },
  {
    name: "Growth",
    price: "750,000₮",
    features: ["6–8 хуудас", "Work / FAQ / Process", "UX бичиглэл", "14 хоногийн дэмжлэг"],
  },
  {
    name: "Care",
    price: "120,000₮ / сар",
    features: ["Сар бүрийн арчилгаа", "Контент шинэчлэл", "Жижиг хөгжүүлэлт", "Сар бүрийн тайлан"],
  },
]

const timeline = [
  { day: "1", title: "Бүтэц + баталгаажуулалт", description: "15 минутын уулзалт, UX flow, wireframe батлах" },
  { day: "2", title: "Дизайн + холболт", description: "Mobile-first UI, Messenger + Form, контент суулгах" },
  { day: "3", title: "Тест + нээлт", description: "Олон төхөөрөмжийн тест, домэйн/SSL, зааварчилгаа" },
]

const assurances = ["Нууц төлбөр байхгүй", "Дараа нь өргөтгөнө", "Албадсан багц байхгүй"]

export default function HomePage() {
  return (
    <>
      <Section className="pt-16 md:pt-24">
        <div className="pattern relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 shadow-xl backdrop-blur">
          <HeroGradient className="pointer-events-none" />
          <div className="beam" />
          <div className="glow green left-8 top-6" />
          <div className="glow orange right-10 bottom-8" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cta via-secondary to-primary opacity-70" />
          <div className="relative grid lg:grid-cols-12 gap-10 p-8 md:p-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="eyebrow animate-fade-up">Formly · 3 хоногт · 2025</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance animate-fade-up">
                3 хоногт захиалга авчирдаг
                <br />
                веб сайт
              </h1>
              <p className="text-lg text-muted-foreground text-pretty animate-fade-up delay-100">
                Монголын үйлчилгээний бизнесүүдэд зориулсан, mobile-first, Messenger-ээр холбогддог веб шийдэл.
              </p>

              <div className="flex flex-wrap items-center gap-2 animate-fade-up delay-150">
                <span className="pill">
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                  ЖДБ-д зориулав
                </span>
                <span className="pill">
                  <MessageCircle className="h-4 w-4 text-secondary" />
                  Messenger + Form
                </span>
                <span className="pill">
                  <Smartphone className="h-4 w-4 text-secondary" />
                  Mobile-first
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 animate-fade-up delay-200">
                <Link
                  href="https://m.me/formly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-cta-foreground bg-cta rounded-lg shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Messenger-ээр бичих
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-foreground border-2 border-border rounded-lg hover:border-secondary hover:text-secondary transition-all"
                >
                  Үнэгүй зөвлөгөө авах
                </Link>
              </div>

              <p className="text-sm text-muted-foreground animate-fade-up delay-250">Жижиг бизнесийг ойлгодог</p>
            </div>

            <div className="lg:col-span-5 space-y-4 animate-fade-up delay-200 relative">
              <div className="surface p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Clock className="h-4 w-4 text-secondary" />
                    3 хоногт бэлэн
                  </span>
                  <Badge variant="secondary" className="text-xs px-3 py-1">
                    Mobile-first
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Wireframe батлагдсан цагаас хугацаа тоолно. Холболтуудыг нээлтийн өмнө тестлэнэ.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-muted/60 px-3 py-2 text-xs text-foreground flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Messenger + Form
                  </div>
                  <div className="rounded-lg bg-muted/60 px-3 py-2 text-xs text-foreground flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-secondary" />
                    HTTPS + Analytics
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-secondary">
                  <ArrowRight className="h-4 w-4" />
                  Тайван, эрсдэлгүй гүйцэтгэл
                </div>
              </div>

              <div className="surface p-5 rounded-2xl shadow-xl translate-x-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="pill">
                    <MessageCircle className="h-4 w-4 text-secondary" />
                    Messenger first
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground">Нэг товчоор шууд холбогдох урсгал</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-foreground">
                  <div className="rounded-lg bg-muted/60 px-3 py-2">Контент суулгах</div>
                  <div className="rounded-lg bg-muted/60 px-3 py-2">Дуудлагагүй зөвлөгөө</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">3 хоногт яаж бэлэн болох вэ?</h2>
          <p className="mt-3 text-muted-foreground">Алхам бүр тодорхой, эрсдэлгүй</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {timeline.map((step, index) => (
            <div key={step.day} className="relative p-6 rounded-2xl surface text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground font-bold text-lg mb-4 shadow-sm">
                {step.day}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-secondary" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Wireframe батлагдсан цагаас хугацаа тоолно · Хугацаанд эрсдэлгүй төлөвлөсөн
        </p>
      </Section>

      {/* Industries Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Хэнд зориулав?</h2>
          <p className="mt-4 text-muted-foreground">Эдгээр салбарын бизнесүүдэд тохирсон вэб сайт хийнэ</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.label}
              className="flex flex-col items-center p-6 rounded-xl surface"
            >
              <industry.icon className="h-10 w-10 text-secondary mb-3" />
              <span className="text-sm font-medium text-foreground text-center">{industry.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Салбар бүрийн логикт тохируулсан мэдээллийн дараалал
        </p>
      </Section>

      {/* Problem vs Solution */}
      <Section className="bg-muted/50">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Асуудал ба шийдэл</h2>
          <p className="mt-3 text-muted-foreground">UX-ийг системчилж, захиалга руу чиглүүлнэ</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="p-6 md:p-8 rounded-2xl border border-destructive/15 bg-destructive/5">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <XCircle className="h-6 w-6 text-destructive" />
              Асуудал
            </h3>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-destructive shrink-0" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8 rounded-2xl surface">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-secondary" />
              Formly шийдэл
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Formly систем</h2>
          <p className="mt-4 text-muted-foreground">Бэлэн загвар ашиглахгүй, захиалга руу чиглэсэн UX-ийг системчилнэ</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceSystem.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl surface flex flex-col gap-3 items-start"
            >
              <service.icon className="h-6 w-6 text-secondary" />
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors group"
          >
            Дэлгэрэнгүй үзэх
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Work Preview */}
      <Section className="bg-muted/50 pattern">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Хийсэн ажил / Demo</h2>
          <p className="mt-4 text-muted-foreground">Demo жишээ — танай бизнест яг ийм бүтэц хийгдэнэ</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {workProjects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block overflow-hidden rounded-xl border border-border bg-card hover:border-secondary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-primary-foreground p-4">
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />3 хоногт
                    </p>
                    <p className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Form + Messenger
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 px-4 py-2 bg-cta text-cta-foreground rounded-lg font-medium text-sm">
                    Ийм сайт хийлгэх
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors group"
          >
            Бүх ажлуудыг үзэх
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      <Section className="pattern">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Үнэ</h2>
          <p className="mt-4 text-muted-foreground">Үнэ 450,000₮-с эхэлнэ · Сонголтод дарамт үгүй</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-xl ${
                plan.popular ? "border-cta ring-2 ring-cta/20 surface" : "surface"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground">
                  Хамгийн их сонгогддог
                </Badge>
              )}
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-cta">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {assurances.map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-secondary" />
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors group"
          >
            Дэлгэрэнгүй харах
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Trust Band */}
      <Section className="bg-muted/50 py-12">
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

      {/* Final CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Эндээс эхэлнэ</h2>
          <p className="mt-4 text-primary-foreground/80 text-pretty">
            Өнөөдөр эхлүүлээд, 3 хоногийн дараа мэргэжлийн вэб сайттай болоорой. Нэг удаа хийгээд орхихгүй — арчилгаа,
            өсөлтөд хамт байна.
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
