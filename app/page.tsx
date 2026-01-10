import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/section"
import { workProjects } from "@/lib/work-data"
import { ArrowRight, MessageCircle, FileText, Code, Rocket, Check, Target, Users, Zap, Shield, Palette, ChevronRight } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Стратеги ба бүтэц",
    description: "Танай байгууллагын зорилго, онцлогийг тодорхойлно. Хэрэглэгчийн логик урсгалыг төлөвлөнө. Захиалга, холболтод чиглэсэн бүтэц.",
  },
  {
    icon: Palette,
    title: "Дизайн ба контент",
    description: "Байгууллагын өнгө төрхөд нийцсэн дизайн. Итгэл төрүүлэх, ойлгомжтой текст. Бүх төхөөрөмжид зохицсон шийдэл.",
  },
  {
    icon: Rocket,
    title: "Байршил ба ашиглалт",
    description: "Хурдан ачаалалтай веб сайт. Холбоо барих, захиалгын форм. Онлайнд бүрэн байршуулж өгнө.",
  },
]

const processSteps = [
  {
    step: "1-р шат",
    title: "Судалгаа, төлөвлөлт",
    description: "Танай байгууллагын хэрэгцээг тодорхойлж, сайтын бүтцийг боловсруулна.",
  },
  {
    step: "2-р шат",
    title: "Дизайн, хөгжүүлэлт",
    description: "Дизайн, текст, техникийн шийдлийг нэгтгэнэ.",
  },
  {
    step: "3-р шат",
    title: "Туршилт, байршуулалт",
    description: "Чанарын шалгалт хийж, сайтыг онлайн гаргана.",
  },
]

const targetAudience = [
  "Сургалтын байгууллага",
  "Эрүүл мэнд, үйлчилгээний төв",
  "Аялал жуулчлалын компани",
  "Жижиг, дунд бизнес",
  "Стартап, зөвлөх үйлчилгээ",
]

const pricingPlans = [
  {
    name: "Starter",
    price: "450,000₮",
    features: [
      "Нэг хуудаст веб сайт",
      "Гар утас, компьютер бүрэн зохицол",
      "Холбоо барих форм",
      "1 сарын техникийн дэмжлэг",
    ],
  },
  {
    name: "Growth",
    price: "750,000₮",
    features: ["3–5 хуудаст веб сайт", "SEO суурь тохиргоо", "Messenger / WhatsApp холболт", "3 сарын техникийн дэмжлэг"],
    popular: true,
  },
  {
    name: "Сар бүрийн арчилгаа",
    price: "120,000₮",
    features: ["Агуулга шинэчлэлт", "Алдаа засвар", "Серверийн хяналт"],
  },
]

const whyFormly = [
  "Байгууллагын хэрэгцээнд тохирсон шийдэл",
  "Ойлгомжтой процесс",
  "Ил тод үнэ",
  "Монгол зах зээлд нийцсэн туршлага",
  "Удаан хугацаанд ашиглахад хялбар сайт",
]

const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    "Сургалтын төв": "text-[#00f0ff]",
    "Эмнэлэг / гоо сайхан": "text-[#0aff60]",
    "Үйлчилгээ": "text-[#ff6b00]",
    "Зуучлал": "text-[#b026ff]",
  }
  return colorMap[category] || "text-white"
}

const getCategoryLabel = (category: string) => {
  const labelMap: Record<string, string> = {
    "Сургалтын төв": "EDUCATION",
    "Эмнэлэг / гоо сайхан": "HEALTHCARE",
    "Үйлчилгээ": "SERVICE",
    "Зуучлал": "RECRUITMENT",
  }
  return labelMap[category] || "PROJECT"
}

export default function HomePage() {
  const featuredProjects = workProjects.slice(0, 3)

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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            Таны бизнест үнэ цэнэ <br />
            <span className="text-gradient-aurora-vibrant font-semibold">нэмэх веб сайт</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Итгэл төрүүлнэ. Ойлгомжтой. Үр дүн авчирна.
          </p>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-light">
            <span className="font-semibold text-primary">Formly</span> — богино хугацаанд, зорилготойгоор танай
            байгууллагад тохирсон веб сайтыг бүтээнэ.
          </p>
          <p className="text-lg md:text-xl font-bold text-primary mb-12">72 цагийн дотор бэлэн болгоно.</p>
          <Link
            href="https://m.me/formly"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full overflow-hidden text-base font-bold text-black shadow-lg shadow-primary/30 transition-all hover:shadow-primary/60 hover:scale-105 inline-flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 group-hover:brightness-110 transition-all"></div>
            <MessageCircle className="relative z-10 w-5 h-5" />
            <span className="relative z-10 font-bold tracking-wide">Холбогдох</span>
          </Link>
        </div>
      </section>

      {/* What is Formly Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Formly гэж юу вэ?</h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-4">
            <span className="font-semibold text-primary">Formly</span> бол байгууллага, бизнесүүдэд зориулсан{" "}
            <span className="font-medium">веб сайт хөгжүүлэлтийн цогц үйлчилгээ</span> юм.
          </p>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Бид сайтын харагдах байдлаас илүү{" "}
            <span className="text-white font-medium">хэрэглэгчийн ойлголт, итгэл, үйлдэл</span> дээр төвлөрдөг.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-surface/30 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Үндсэн үйлчилгээ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card group relative rounded-2xl p-8 flex flex-col items-start text-left overflow-hidden border-t border-white/10">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <service.icon className="w-24 h-24 text-primary drop-shadow-[0_0_10px_rgba(0,255,170,0.5)]" />
                </div>
                <div className="z-10 relative">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Ажлын явц</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-black font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <p className="text-sm text-primary font-bold mb-2">{step.step}</p>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-surface/30 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Хэнд зориулагдсан бэ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-white font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Хийсэн ажлууд</h2>
              <p className="text-slate-400">Бизнест тохирсон веб сайтууд</p>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
            >
              Бүгдийг үзэх
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const categoryColor = getCategoryColor(project.category)
              const categoryLabel = getCategoryLabel(project.category)

              return (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group relative flex flex-col gap-4 cursor-pointer"
                >
                  <div className="relative w-full aspect-[16/10] bg-surface-dark rounded-2xl overflow-hidden border border-white/10 hover:shadow-[0_0_25px_rgba(0,255,170,0.4)] hover:border-primary/60 transition-all duration-500">
                    <div className="absolute inset-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColor} uppercase tracking-wider backdrop-blur-md bg-black/30 border border-white/10`}
                      >
                        {categoryLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md bg-black/30 border border-white/10">
                        UX/UI
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between px-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-sm">{project.description}</p>
                    </div>
                    <div className="size-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <ArrowRight className="w-5 h-5 text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-surface/30 border-t border-white/5 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-white">Үнийн багц</h2>
          <p className="text-center text-slate-400 font-light mb-16 max-w-lg mx-auto">
            Ил тод үнэ. Таны хэрэгцээнд тохирсон багц сонгоорой.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`glass-card rounded-xl p-8 flex flex-col h-full relative overflow-hidden ${
                  plan.popular
                    ? "border-primary shadow-[0_0_25px_rgba(0,255,170,0.3)] transform md:-translate-y-4"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                )}
                <h3 className="text-lg font-serif text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                        : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-slate-300 font-light flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`w-full py-3 rounded text-center font-bold text-sm tracking-wide transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-secondary text-black hover:scale-105"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Сонгох
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Formly Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Яагаад Formly вэ?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whyFormly.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-slate-300 font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-[100px] opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Эхлэхэд бэлэн үү?
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            <p>Хэрэв та:</p>
            <ul className="space-y-2 text-left list-disc list-inside text-slate-300">
              <li>Байгууллагынхаа онлайн дүр төрхийг сайжруулах</li>
              <li>Харилцагчидтайгаа итгэлтэй холбогдох</li>
              <li>Мэргэжлийн, тогтвортой веб сайттай болохыг хүсэж байвал</li>
            </ul>
            <p className="pt-4">
              <span className="font-semibold text-primary">Formly</span> танд тусална.
            </p>
          </div>
          <Link
            href="https://m.me/formly"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center"
          >
            <div className="absolute transition-all duration-200 rounded-full -inset-1 bg-gradient-to-r from-primary to-secondary blur-lg opacity-70 group-hover:opacity-100 group-hover:-inset-2"></div>
            <div className="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-black transition-all duration-200 bg-white rounded-full">
              <MessageCircle className="w-5 h-5 mr-2" />
              Холбогдох
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
