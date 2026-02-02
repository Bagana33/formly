"use client"

import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/section"
import { getWorkProjectsFromSupabase, type WorkProject } from "@/lib/work-data"
import { ArrowRight, MessageCircle, MessageSquare, Lightbulb, Calendar, Building2, Palette, Rocket, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

// Helper functions for category colors and labels
const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    "Сургалтын төв": "text-[#17BEBB]",
    "Эмнэлэг / гоо сайхан": "text-[#673AB7]",
    "Үйлчилгээ": "text-[#FFA726]",
    "Зуучлал": "text-[#83E0DE]",
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
  const [allProjects, setAllProjects] = useState<WorkProject[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Typewriting animation state
  const texts = ["Тогтвортой", "Хурдан", "Итгэл төрүүлнэ"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  // Load work projects from Supabase on mount
  useEffect(() => {
    getWorkProjectsFromSupabase().then((projects) => {
      setAllProjects(projects || [])
    })
  }, [])

  const scrollProjects = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 400 // Scroll amount in pixels
      const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount
      container.scrollBy({
        left: scrollDirection,
        behavior: 'smooth'
      })
    }
  }

  // Typewriting animation effect
  useEffect(() => {
    let typingTimeout: NodeJS.Timeout
    const currentText = texts[currentTextIndex]

    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, 50) // Faster typing speed (50ms per character)
      } else {
        // Finished typing, wait before deleting
        typingTimeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500) // Wait 1.5 seconds before starting to delete
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30) // Faster deleting speed (30ms per character)
      } else {
        // Finished deleting, move to next text
        const nextIndex = (currentTextIndex + 1) % texts.length
        setCurrentTextIndex(nextIndex)
        setIsTyping(true)
      }
    }

    return () => {
      if (typingTimeout) clearTimeout(typingTimeout)
    }
  }, [displayedText, isTyping, currentTextIndex, texts])

  // Auto-scroll functionality
  useEffect(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
    }

    if (!isPaused && scrollContainerRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const maxScroll = container.scrollWidth - container.clientWidth
          
          // If reached the end, scroll back to the beginning
          if (container.scrollLeft >= maxScroll - 10) {
            container.scrollTo({
              left: 0,
              behavior: 'smooth'
            })
          } else {
            const scrollAmount = 400
            container.scrollBy({
              left: scrollAmount,
              behavior: 'smooth'
            })
          }
        }
      }, 3000) // Scroll every 3 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [isPaused])

  return (
    <>
      {/* Grain overlay and Aurora backgrounds */}
      <div className="grain-overlay"></div>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="aurora-bg"></div>
        <div className="aurora-bg-2"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-36 pb-24 relative z-10 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-serif font-medium tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
            <div>
              <span className="text-gradient-aurora-vibrant font-semibold">Танай сайт</span>
            </div>
            <div>
              <span className="italic text-slate-300 font-light">
                {displayedText}
                <span className="inline-block w-0.5 h-[1em] bg-slate-300 ml-1 animate-[blink_1s_infinite]"></span>
              </span>
            </div>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Хэрэглэгчдэд ээлтэй сайт бүтээхэд <span style={{ color: '#17BEBB' }}>Formly</span> туслана.
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
                  href="https://m.me/961702760355484"
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
                <Lightbulb className="w-36 h-36 text-[#FFA726] drop-shadow-[0_0_10px_rgba(255,167,38,0.35)]" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-24">
            <span className="inline-block py-1 px-4 rounded-full bg-[#17BEBB]/10 text-[#17BEBB] font-bold text-sm tracking-widest uppercase mb-4 border border-[#17BEBB]/20">
              Process
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#17BEBB] via-[#83E0DE] to-[#2F3E46]">
              3 Хоногийн Протокол
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-medium">
              Бид таны төслийг ердөө 72 цагийн дотор санаанаас бодит бүтээл болгон хувиргана. Шинэ үеийн хурд, чанарын төгс хослол.
            </p>
          </div>

          {/* Neon Path - Connecting Line (Desktop Only) */}
          <div 
            className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] z-0 -translate-y-1/2 max-w-6xl mx-auto"
            style={{ 
              background: 'linear-gradient(90deg, transparent, #17BEBB, #673AB7, transparent)',
              boxShadow: '0 0 20px rgba(23,190,187,0.45), 0 0 40px rgba(103,58,183,0.25)'
            }}
          ></div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Day 01 - Strategy */}
            <div className="flex flex-col items-center">
              {/* Icon Container */}
              <div
                className="icon-container glass-card icon-glow-emerald floating relative w-[100px] h-[100px] flex items-center justify-center rounded-3xl mb-8 transition-all duration-400 hover:-translate-y-2"
                style={{ 
                  animationDelay: "0s",
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <Building2 className="text-5xl text-[#17BEBB]" />
              </div>

              {/* Glass Card */}
              <div 
                className="glass-card p-8 rounded-[2.5rem] text-center w-full transition-all duration-400"
                style={{
                  background: 'rgba(15, 23, 42, 0.3)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Бүтэц</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Сайтын газрын зураг болон гол бүтцийг зөв урсгалд зориулж тодорхойлох. Хэрэглэгчийн замыг хамгийн оновчтойгоор төлөвлөнө.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#17BEBB] font-bold text-sm">
                  <span>ӨДӨР 01</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#17BEBB]"></div>
                  <span>STRATEGY</span>
                </div>
              </div>
            </div>

            {/* Day 02 - Design */}
            <div className="flex flex-col items-center">
              {/* Icon Container */}
              <div
                className="icon-container glass-card icon-glow-azure floating relative w-[100px] h-[100px] flex items-center justify-center rounded-3xl mb-8 transition-all duration-400 hover:-translate-y-2"
                style={{ 
                  animationDelay: "0.5s",
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <Palette className="text-5xl text-[#673AB7]" />
              </div>

              {/* Glass Card */}
              <div 
                className="glass-card p-8 rounded-[2.5rem] text-center w-full transition-all duration-400"
                style={{
                  background: 'rgba(15, 23, 42, 0.3)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Харагдах Бүтэц</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Өндөр чанартай дүрслэл хийж, контентыг саадгүй нэгтгэх. Таны брэндийн үнэ цэнийг илтгэх орчин үеийн дизайн шийдлүүд.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#673AB7] font-bold text-sm">
                  <span>ӨДӨР 02</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#673AB7]"></div>
                  <span>DESIGN</span>
                </div>
              </div>
            </div>

            {/* Day 03 - Deploy */}
            <div className="flex flex-col items-center">
              {/* Icon Container */}
              <div
                className="icon-container glass-card icon-glow-emerald floating relative w-[100px] h-[100px] flex items-center justify-center rounded-3xl mb-8 transition-all duration-400 hover:-translate-y-2"
                style={{ 
                  animationDelay: "1s",
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <Rocket className="text-5xl text-[#17BEBB]" />
              </div>

              {/* Glass Card */}
              <div 
                className="glass-card p-8 rounded-[2.5rem] text-center w-full transition-all duration-400"
                style={{
                  background: 'rgba(15, 23, 42, 0.3)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Нээлт</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Нарийвчилсан чанарын баталгаажуулалт, дараа нь шууд амьд нээлт. Техникийн бүрэн гүйцэтгэлийг ханган зах зээлд нэвтрүүлнэ.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#17BEBB] font-bold text-sm">
                  <span>ӨДӨР 03</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#17BEBB]"></div>
                  <span>DEPLOY</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-24 text-center relative z-10">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#17BEBB] to-[#2F3E46] rounded-full font-bold text-lg text-white hover:scale-105 transition-all shadow-lg shadow-[#17BEBB]/25 active:scale-95"
            >
              Төсөл эхлүүлэх
            </Link>
          </div>
        </div>
      </section>

      {/* Curated Portfolio Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        {/* Flowing water animation overlay */}
        <div className="absolute inset-0 flowing-water pointer-events-none opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white">Сонгосон Портфолио</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => scrollProjects('left')}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all active:scale-95"
                aria-label="Зүүн тийш гүйлгэх"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollProjects('right')}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all active:scale-95"
                aria-label="Баруун тийш гүйлгэх"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              // Resume after a delay when touch ends
              setTimeout(() => setIsPaused(false), 3000)
            }}
          >
            {allProjects.map((project, index) => {
              const categoryColor = getCategoryColor(project.category)
              const categoryLabel = getCategoryLabel(project.category)

              return (
                <Link
                  key={project.slug}
                  href={`/${project.slug}`}
                  className="group relative flex flex-col gap-4 cursor-pointer min-w-[300px] sm:min-w-[350px] md:min-w-[400px] snap-start shrink-0"
                >
                  <div className="relative w-full aspect-[16/10] bg-[#161b26] rounded-2xl overflow-hidden border border-white/10 hover:shadow-[0_0_25px_rgba(0,255,170,0.4)] hover:border-primary/60 transition-all duration-500">
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

      {/* Flexible Plans & Client Chatter Section */}
      <section className="py-24 bg-surface/30 border-t border-white/5 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Flexible Plans - Left Side (7 columns) */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden border-[3px] border-[#161b26]/50 bg-[#161b26]/80">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
              
              {/* Header */}
              <div className="mb-10 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Уян хатан үйлчилгээний багцууд</h2>
                <p className="text-gray-400 text-sm md:text-base">Таны бизнесийн цар хүрээ, зорилгод тохирсон дижитал шийдлүүд.</p>
              </div>

              {/* Plans Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {/* Багц 1 - Эхлэл */}
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-secondary transition-colors cursor-pointer relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded bg-white/10 text-xs font-bold uppercase text-white">Эхлэл</span>
                    <span className="material-symbols-outlined text-white group-hover:text-secondary transition-colors text-xl">rocket_launch</span>
                  </div>
                  <p className="text-4xl font-bold mb-1 text-white">
                    450,000 ₮
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    нэг удаагийн
                  </p>
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Тохиромжтой:</p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      Жижиг бизнес, гарааны төсөл, хувийн үйлчилгээ
                    </p>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Агуулга:</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-[#17BEBB] text-base leading-none mt-0.5 shrink-0">check</span>
                      <span>Бүрэн вэб хуудас (үндсэн бүтэц)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-[#17BEBB] text-base leading-none mt-0.5 shrink-0">check</span>
                      <span>Суурь SEO тохиргоо</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-[#17BEBB] text-base leading-none mt-0.5 shrink-0">check</span>
                      <span>3 үндсэн засвар, сайжруулалт</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 rounded-lg border border-white/20 text-sm font-bold text-white hover:bg-white hover:text-black transition-colors">
                    Багц сонгох
                  </button>
                </div>

                {/* Багц 2 - Байгууллага */}
                <div className="rounded-2xl border-2 border-secondary bg-secondary/10 p-6 relative overflow-hidden cursor-pointer group hover:bg-secondary/15 transition-all">
                  {/* Pulse Animation */}
                  <div className="absolute top-3 right-3">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded bg-secondary text-white text-xs font-bold uppercase">Байгууллага</span>
                  </div>
                  <p className="text-4xl font-bold mb-1 text-white">
                    750,000 ₮
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    -өөс эхэлнэ
                  </p>
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Тохиромжтой:</p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      Өсөлтөд чиглэсэн компани, байгууллага
                    </p>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Агуулга:</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-sm text-white">
                      <span className="material-symbols-outlined text-secondary text-base leading-none mt-0.5 shrink-0">check</span>
                      <span>Бүрэн хэмжээний вэб апп / платформ</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white">
                      <span className="material-symbols-outlined text-secondary text-base leading-none mt-0.5 shrink-0">check</span>
                      <span>Дэвшилтэт брэнд стратеги</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white">
                      <span className="material-symbols-outlined text-secondary text-base leading-none mt-0.5 shrink-0">check</span>
                      <span>Хязгааргүй дэмжлэг, зөвлөмж</span>
                    </li>
                  </ul>
                  <Link
                    href="https://m.me/961702760355484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-lg bg-secondary text-white text-sm font-bold shadow-[0_0_20px_-5px_rgba(0,98,255,0.3)] hover:bg-blue-700 transition-colors text-center inline-block"
                  >
                    Ярилцлага эхлүүлэх
                  </Link>
                </div>
              </div>
            </div>

            {/* Client Chatter - Right Side (5 columns) */}
            <div className="lg:col-span-5 glass-card rounded-3xl p-8 flex flex-col bg-gradient-to-b from-[#161b26] to-[#0f1219] border-[3px] border-[#161b26]/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="size-10 rounded-full bg-[#17BEBB] flex items-center justify-center text-[#0b1a1f]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Харилцагчдын сэтгэгдэл</h3>
              </div>
              <div className="flex flex-col gap-6 flex-1 justify-center">
                {/* Message 1 - Б.Энхтөр */}
                <div className="flex gap-4 items-end">
                  <div className="size-10 rounded-full bg-gray-700 shrink-0 flex items-center justify-center text-white text-xs font-bold">
                    БЭ
                  </div>
                  <div className="bg-[#1f2532] p-4 rounded-2xl rounded-bl-none border border-white/5 max-w-[85%]">
                    <p className="text-sm text-gray-300 leading-relaxed">"Formly баг манай веб сайтын бүтэц, хэрэглэгчийн урсгалыг цогцоор нь сайжруулж өгсөн. Шинэчлэл хийснээс хойш богино хугацаанд захиалга болон хандалтын чанар мэдэгдэхүйц өссөн."</p>
                    <p className="text-xs text-gray-500 mt-2 font-bold">— Б.Энхтөр, Технологи хариуцсан захирал</p>
                  </div>
                </div>
                
                {/* Message 2 - Formly багийн хариулт */}
                <div className="flex gap-4 items-end flex-row-reverse">
                  <div className="size-10 rounded-full bg-secondary flex items-center justify-center shrink-0 text-xs font-bold text-white">FM</div>
                  <div className="bg-secondary p-4 rounded-2xl rounded-br-none text-white max-w-[85%] shadow-[0_0_20px_-5px_rgba(0,98,255,0.3)]">
                    <p className="text-sm leading-relaxed italic">"Бид дизайн шийдлийг зөвхөн харагдац бус, бодит хэрэглээ, бизнесийн зорилготой уялдуулж хэрэгжүүлдэг."</p>
                  </div>
                </div>
                
                {/* Message 3 - М.Түвшин */}
                <div className="flex gap-4 items-end">
                  <div className="size-10 rounded-full bg-gray-700 shrink-0 flex items-center justify-center text-white text-xs font-bold">
                    МТ
                  </div>
                  <div className="bg-[#1f2532] p-4 rounded-2xl rounded-bl-none border border-white/5 max-w-[85%]">
                    <p className="text-sm text-gray-300 leading-relaxed">"Formly-ийн санал болгосон интерфэйсийн шийдэл нь ойлгомжтой, цэгцтэй, хэрэглэгчдэд итгэл төрүүлэхүйц байсан. Манай бүтээгдэхүүний чанарыг илүү тодорхой харуулж чадсан."</p>
                    <p className="text-xs text-gray-500 mt-2 font-bold">— М.Түвшин, Үүсгэн байгуулагч</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
