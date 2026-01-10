import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/section"
import { workProjects } from "@/lib/work-data"
import { ArrowRight, MessageCircle, MessageSquare, Lightbulb, Calendar, Building2, Palette, Rocket, Check, ChevronLeft, ChevronRight } from "lucide-react"

// Helper functions for category colors and labels
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
    "Сургалтын төв": "СУРГАЛТЫН ТӨВ",
    "Эмнэлэг / гоо сайхан": "ЭМНЭЛЭГ / ГОО САЙХАН",
    "Үйлчилгээ": "ҮЙЛЧИЛГЭЭ",
    "Зуучлал": "ЗУУЧЛАЛ",
  }
  return labelMap[category] || "ТӨСӨЛ"
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
          <h1 className="text-4xl md:text-7xl font-serif font-medium tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
            Дижитал Оролцоо <br />
            <span className="italic text-slate-300 font-light">Дахин тодорхойлсон</span>{" "}
            <span className="text-gradient-aurora-vibrant font-semibold">Aurora.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            72 цагийн дотор хүргэх өндөр гүйцэтгэлтэй веб сайтаар танай брэндийг өсгөнө. Тогтвортой өсөлт{" "}
            <span className="text-primary font-normal">энергээр дүүрэн дизайн</span>-тай уулзана.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Concierge Support Card */}
            <div className="glass-card group relative rounded-2xl p-8 flex flex-col items-start text-left overflow-hidden border-t border-white/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageSquare className="w-36 h-36 text-primary drop-shadow-[0_0_10px_rgba(0,255,170,0.5)]" />
              </div>
              <div className="z-10 relative">
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors">
                  Тусламж Үйлчилгээ
                </h3>
                <p className="text-slate-400 mb-8 font-light text-sm">Таны тусгай дизайн багтай шууд холбогдох.</p>
                <Link
                  href="https://m.me/formly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white group-hover:text-primary transition-colors text-sm font-bold tracking-wide uppercase"
                >
                  <span>Чат эхлүүлэх</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Strategic Audit Card */}
            <div className="glass-card group relative rounded-2xl p-8 flex flex-col items-start text-left overflow-hidden border-t border-white/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Lightbulb className="w-36 h-36 text-secondary drop-shadow-[0_0_10px_rgba(0,98,255,0.5)]" />
              </div>
              <div className="z-10 relative">
                <div className="flex items-center justify-between w-full mb-2">
                  <h3 className="text-2xl font-serif text-white group-hover:text-secondary transition-colors">
                    Стратегийн Шинжилгээ
                  </h3>
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary shadow-[0_0_10px_rgba(0,98,255,1)]"></span>
                  </span>
                </div>
                <p className="text-slate-400 mb-8 font-light text-sm">Таны дижитал стратегид мэргэжлийн зөвлөгөө.</p>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 text-white group-hover:text-secondary transition-colors text-sm font-bold tracking-wide uppercase"
                >
                  <span>Зөвлөлдөх цаг захиалах</span>
                  <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Day Protocol Section */}
      <section className="py-24 bg-surface/30 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-20 text-white">3 Хоногийн Протокол</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0 shadow-[0_0_10px_rgba(0,255,170,0.5)]"></div>

            {/* Architecture */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-surface-light border border-primary/30 shadow-[0_0_20px_rgba(0,255,170,0.15)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,170,0.4)]">
                <Building2 className="w-10 h-10 text-primary icon-glow" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Бүтэц</h3>
              <p className="text-sm text-slate-400 max-w-xs font-light leading-relaxed">
                Сайтын газрын зураг болон гол бүтцийг зөв урсгалд зориулж тодорхойлох.
              </p>
            </div>

            {/* Visual Synthesis */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-surface-light border border-secondary/30 shadow-[0_0_20px_rgba(0,98,255,0.15)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:border-secondary group-hover:shadow-[0_0_30px_rgba(0,98,255,0.4)]">
                <Palette className="w-10 h-10 text-secondary icon-glow" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Харагдах Бүтэц</h3>
              <p className="text-sm text-slate-400 max-w-xs font-light leading-relaxed">
                Өндөр чанартай дүрслэл хийж, контентыг саадгүй нэгтгэх.
              </p>
            </div>

            {/* Deployment */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-surface-light border border-accent/30 shadow-[0_0_20px_rgba(0,206,209,0.15)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(0,206,209,0.4)]">
                <Rocket className="w-10 h-10 text-accent icon-glow" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Нээлт</h3>
              <p className="text-sm text-slate-400 max-w-xs font-light leading-relaxed">
                Нарийвчилсан чанарын баталгаажуулалт, дараа нь шууд амьд нээлт.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Portfolio Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white">Сонгосон Портфолио</h2>
            <div className="hidden md:flex gap-2">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
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
                    {/* Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    {/* Floating Tags */}
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

      {/* Membership/Pricing Section */}
      <section className="py-24 bg-surface/30 border-t border-white/5 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-white">Гишүүнчлэл</h2>
          <p className="text-center text-slate-400 font-light mb-16 max-w-lg mx-auto">
            Тогтвортой дижитал өсөлтөд зориулсан ил тод үнэ. Хүссэн үедээ зогсоож, цуцлах боломжтой.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Starter Plan */}
            <div className="glass-card neon-border-blue rounded-xl p-8 flex flex-col h-full bg-surface-light/50">
              <h3 className="text-lg font-serif italic text-secondary mb-4">Эхлэл</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-bold text-white">450к</span>
                <span className="text-sm text-slate-500">₮</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-400 font-light flex-1">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-secondary" />
                  Нэг буух хуудас
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-secondary" />
                  Мобайл дэмжлэг
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-secondary" />
                  1 сарын дэмжлэг
                </li>
              </ul>
              <button className="w-full py-3 rounded border border-secondary/50 text-slate-200 text-sm tracking-wide hover:bg-secondary hover:text-white transition-all shadow-[0_0_10px_rgba(0,98,255,0.1)] hover:shadow-[0_0_15px_rgba(0,98,255,0.5)]">
                Багц сонгох
              </button>
            </div>

            {/* Growth Plan - Popular */}
            <div className="glass-card neon-border rounded-xl p-8 flex flex-col relative overflow-hidden bg-surface-light/80 transform md:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-serif italic text-primary">Өсөлт</h3>
                <span className="text-[10px] font-bold tracking-wider uppercase bg-primary text-black px-2 py-1 rounded shadow-[0_0_10px_rgba(0,255,170,0.5)]">
                  Хамгийн сонгогддог
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary filter drop-shadow-[0_0_5px_rgba(0,255,170,0.4)]">
                  750к
                </span>
                <span className="text-sm text-slate-500">₮</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300 font-light flex-1">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary rounded-full shadow-[0_0_5px_rgba(0,255,170,0.8)]" />
                  5 хүртэл хуудас
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary rounded-full shadow-[0_0_5px_rgba(0,255,170,0.8)]" />
                  SEO оновчлолт
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary rounded-full shadow-[0_0_5px_rgba(0,255,170,0.8)]" />
                  Messenger Bot холболт
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary rounded-full shadow-[0_0_5px_rgba(0,255,170,0.8)]" />
                  3 сарын Премиум дэмжлэг
                </li>
              </ul>
              <Link
                href="/pricing"
                className="w-full py-3 rounded bg-gradient-to-r from-primary to-secondary text-black font-bold text-sm tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/60 transition-all hover:-translate-y-1 text-center"
              >
                Эхлүүлэх
              </Link>
            </div>

            {/* Maintenance Plan */}
            <div className="glass-card neon-border-blue rounded-xl p-8 flex flex-col h-full bg-surface-light/50">
              <h3 className="text-lg font-serif italic text-accent mb-4">Арчилгаа</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-bold text-white">120к</span>
                <span className="text-sm text-slate-500">₮ / сар</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-400 font-light flex-1">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent" />
                  Сарын шинэчлэлтүүд
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent" />
                  Контентын өөрчлөлт
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent" />
                  Серверийн арчилгаа
                </li>
              </ul>
              <button className="w-full py-3 rounded border border-accent/50 text-slate-200 text-sm tracking-wide hover:bg-accent hover:text-black transition-all shadow-[0_0_10px_rgba(0,206,209,0.1)] hover:shadow-[0_0_15px_rgba(0,206,209,0.5)]">
                Багц сонгох
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
