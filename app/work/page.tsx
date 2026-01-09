"use client"

import Link from "next/link"
import Image from "next/image"
import { workProjects } from "@/lib/work-data"
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "all", label: "All Work" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
  { id: "service", label: "Services" },
  { id: "recruitment", label: "Recruitment" },
]

const categoryMap: Record<string, string> = {
  "Сургалтын төв": "education",
  "Эмнэлэг / гоо сайхан": "healthcare",
  "Үйлчилгээ": "service",
  "Зуучлал": "recruitment",
}

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects =
    selectedCategory === "all"
      ? workProjects
      : workProjects.filter((p) => categoryMap[p.category] === selectedCategory)

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

  return (
    <>
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top Center Blue Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0d59f2]/20 rounded-full blur-[120px]"></div>
        {/* Left Green Glow */}
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vh] bg-accent/10 rounded-full blur-[100px]"></div>
        {/* Right Purple Glow */}
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6 md:px-10 flex flex-col items-center">
        {/* Page Header */}
        <div className="max-w-7xl w-full flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
            CRAFTING DIGITAL <br /> EXPERIENCES
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light">
            We build loud, proud, and cutting-edge digital products for the world's most ambitious brands.
          </p>
        </div>

        {/* Filter System */}
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

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          {filteredProjects.map((project, index) => {
            const isLarge = index === 0
            const categoryColor = getCategoryColor(project.category)
            const categoryLabel = getCategoryLabel(project.category)

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group relative flex flex-col gap-4 cursor-pointer ${isLarge ? "" : index % 2 === 1 ? "mt-0 md:mt-16" : ""}`}
              >
                <div className="relative w-full aspect-[16/10] bg-surface-dark rounded-2xl overflow-hidden border border-white/10 hover:work-primary-glow hover:work-primary-border/60 transition-all duration-500">
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
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:work-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm">{project.description}</p>
                  </div>
                  <div className="size-10 rounded-full border border-white/20 flex items-center justify-center group-hover:work-primary-bg group-hover:work-primary-border transition-all">
                    <ArrowRight className="w-5 h-5 text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Pagination / More */}
        {filteredProjects.length >= 6 && (
          <div className="mt-20 flex justify-center">
            <button className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 hover:work-primary-border/50 bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-sm font-bold text-white group-hover:work-primary transition-colors">
                Load More Projects
              </span>
              <ChevronDown className="w-5 h-5 text-white/50 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="relative z-10 py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d59f2]/10"></div>
        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Ready to build something <span className="work-primary">loud?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl">
            Our team is ready to push boundaries and create digital experiences that demand attention. Let's start the
            conversation.
          </p>
          <Link
            href="https://m.me/formly"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group mt-4 overflow-hidden rounded-full work-primary-bg px-10 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:work-primary-glow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative flex items-center gap-2">
              Start Your Project
              <ExternalLink className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
