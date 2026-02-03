"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { WorkProject } from "@/lib/work-data"

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

interface WorkCarouselClientProps {
  projects: WorkProject[]
}

export function WorkCarouselClient({ projects }: WorkCarouselClientProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isInView, setIsInView] = useState(true)

  const scrollProjects = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 400
      const scrollDirection = direction === "left" ? -scrollAmount : scrollAmount
      container.scrollBy({
        left: scrollDirection,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setPrefersReducedMotion(media.matches)
    update()
    if (media.addEventListener) {
      media.addEventListener("change", update)
      return () => media.removeEventListener("change", update)
    }
    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return
    const onVisibility = () => setIsVisible(document.visibilityState === "visible")
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const node = sectionRef.current
    if (!node || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
    }

    const reduceMotion = prefersReducedMotion || !isVisible || !isInView
    if (!reduceMotion && !isPaused && scrollContainerRef.current && projects.length > 0) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const maxScroll = container.scrollWidth - container.clientWidth

          if (container.scrollLeft >= maxScroll - 10) {
            container.scrollTo({
              left: 0,
              behavior: "smooth",
            })
          } else {
            container.scrollBy({
              left: 400,
              behavior: "smooth",
            })
          }
        }
      }, 3000)
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [isPaused, projects.length, prefersReducedMotion, isVisible, isInView])

  return (
    <section ref={sectionRef} className="py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 flowing-water pointer-events-none opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white">Сонгосон Портфолио</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scrollProjects("left")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all active:scale-95"
              aria-label="Зүүн тийш гүйлгэх"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollProjects("right")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all active:scale-95"
              aria-label="Баруун тийш гүйлгэх"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 3000)
          }}
        >
          {projects.map((project, index) => {
            const categoryColor = getCategoryColor(project.category)
            const categoryLabel = getCategoryLabel(project.category)

            const href = project.url ?? `/${project.slug}`
            const isExternal = Boolean(project.url)

            return (
              <Link
                key={project.slug}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col gap-4 cursor-pointer min-w-[300px] sm:min-w-[350px] md:min-w-[400px] snap-start shrink-0"
              >
                <div className="relative w-full aspect-16/10 bg-[#161b26] rounded-2xl overflow-hidden border border-white/10 hover:shadow-[0_0_25px_rgba(0,255,170,0.4)] hover:border-primary/60 transition-all duration-500">
                  <div className="absolute inset-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 400px"
                      quality={75}
                      priority={index < 2}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
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
                    <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
