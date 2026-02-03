"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react"
import { useMemo, useState } from "react"
import type { WorkProject } from "@/lib/work-data"

const categories = [
  { id: "all", label: "Бүгд" },
  { id: "education", label: "Сургалтын төв" },
  { id: "healthcare", label: "Эмнэлэг / Гоо сайхан" },
  { id: "service", label: "Үйлчилгээ" },
  { id: "recruitment", label: "Зуучлал" },
]

const categoryMap: Record<string, string> = {
  "Сургалтын төв": "education",
  "Эмнэлэг / гоо сайхан": "healthcare",
  "Үйлчилгээ": "service",
  "Зуучлал": "recruitment",
}

interface WorkPageClientProps {
  projects: WorkProject[]
}

export function WorkPageClient({ projects }: WorkPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects
    return projects.filter((p) => categoryMap[p.category] === selectedCategory)
  }, [projects, selectedCategory])

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

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0d59f2]/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vh] bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-10 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 bg-linear-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
            ДИЖИТАЛ ТУРШЛАГУУД <br /> БҮТЭЭХ
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light">
            Бид дэлхийн хамгийн амбицтай брэндүүдэд чанга, бахархалтай, орчин үеийн дижитал бүтээгдэхүүн хийж байна.
          </p>
        </div>

        <div className="w-full max-w-7xl mb-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all backdrop-blur-md border ${
                  selectedCategory === category.id
                    ? "work-primary-bg work-primary-border text-white work-primary-shadow"
                    : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          {filteredProjects.map((project, index) => {
            const isLarge = index === 0
            const categoryColor = getCategoryColor(project.category)
            const categoryLabel = getCategoryLabel(project.category)

            return (
              <Link
                key={project.slug}
                href={`/${project.slug}`}
                className={`group relative flex flex-col gap-4 cursor-pointer ${isLarge ? "" : index % 2 === 1 ? "mt-0 md:mt-16" : ""}`}
              >
                <div className="relative w-full aspect-16/10 bg-surface-dark rounded-2xl overflow-hidden border border-white/10 hover:work-primary-glow hover:work-primary-border/60 transition-all duration-500">
                  <div className="absolute inset-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 520px"
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
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:work-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm">{project.description}</p>
                  </div>
                  <div className="size-10 rounded-full border border-white/20 flex items-center justify-center group-hover:work-primary-bg group-hover:work-primary-border transition-all">
                    <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {filteredProjects.length >= 6 && (
          <div className="mt-20 flex justify-center">
            <button className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 hover:work-primary-border/50 bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-sm font-bold text-white group-hover:work-primary transition-colors">
                Илүү их төсөл харах
              </span>
              <ChevronDown className="w-5 h-5 text-white/50 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </main>

      <section className="relative z-10 py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0d59f2]/10"></div>
        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Чанга дуугаргах зүйл бүтээхэд <span className="work-primary">бэлэн үү?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl">
            Манай баг хязгаарыг тэлж, анхаарал татахуйц дижитал туршлагууд бүтээхэд бэлэн байна. Ярилцлагаа эхлүүлье.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group mt-4 overflow-hidden rounded-full work-primary-bg px-10 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:work-primary-glow-lg"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center gap-2">
              Төсөл эхлүүлэх
              <ExternalLink className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
