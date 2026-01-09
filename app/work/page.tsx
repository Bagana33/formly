import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { workProjects } from "@/lib/work-data"
import { ArrowRight, Clock, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Ажлууд",
  description: "Formly-ийн хийсэн ажлын жишээнүүд. Demo жишээ — танай бизнест яг ийм бүтэц хийгдэнэ.",
}

const categories = ["Бүгд", "Сургалтын төв", "Эмнэлэг / гоо сайхан", "Үйлчилгээ", "Зуучлал"] as const

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Formly ажлууд</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Кураторласан demo жишээ</h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Demo жишээ — танай бизнест яг ийм бүтэц хийгдэнэ
          </p>
        </div>
      </Section>

      {/* Categories */}
      <Section className="pt-0 bg-muted/50">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant={category === "Бүгд" ? "default" : "secondary"} className="cursor-pointer">
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block overflow-hidden rounded-xl surface"
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover overlay with facts */}
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
              <div className="p-5">
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary">
                  Дэлгэрэнгүй үзэх
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Ийм сайт хийлгэх</h2>
          <p className="mt-4 text-primary-foreground/80">Танай бизнест яг тохирсон вэб сайт хийлгэнэ үү</p>
          <div className="mt-8">
            <Link
              href="https://m.me/formly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary bg-cta rounded-lg shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Messenger-ээр бичих
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
