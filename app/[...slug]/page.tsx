import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { getWorkBySlugFromSupabase } from "@/lib/work-data"
import { MessageCircle, Clock, CheckCircle, XCircle, ArrowRight } from "lucide-react"

export const dynamicParams = true

function joinSlug(slugParts: string[] | undefined): string {
  if (!slugParts || slugParts.length === 0) return ""
  // Re-create the originally typed path segment(s), keeping ":" and "/" so "https:/domain" can be normalized later.
  return slugParts.map((s) => decodeURIComponent(s)).join("/")
}

function normalizeExternalUrl(input: string): string | null {
  const slug = (input || "").trim()
  if (!slug) return null

  if (slug.startsWith("http://") || slug.startsWith("https://")) return slug

  // Handle "https:domain.com" and also "https:/domain.com" and "https://domain.com"
  if (slug.startsWith("https:") && !slug.startsWith("https://")) {
    return `https://${slug.slice("https:".length).replace(/^\/+/, "")}`
  }
  if (slug.startsWith("http:") && !slug.startsWith("http://")) {
    return `http://${slug.slice("http:".length).replace(/^\/+/, "")}`
  }

  if (slug.includes(".") && !slug.includes(" ")) return `https://${slug}`
  return null
}

function hostFromUrl(url: string): string {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

function titleFromSlug(slug: string): string {
  const cleaned = slug.replace(/[-_]+/g, " ").trim()
  if (!cleaned) return "Demo"
  return cleaned
}

function categoryGuessFromSlugOrUrl(input: string): string {
  const s = (input || "").toLowerCase()
  if (s.includes("clinic") || s.includes("derma") || s.includes("beauty") || s.includes("med")) return "Эмнэлэг / гоо сайхан"
  if (s.includes("education") || s.includes("academy") || s.includes("school") || s.includes("course")) return "Сургалтын төв"
  if (s.includes("hr") || s.includes("recruit")) return "Зуучлал"
  return "Үйлчилгээ"
}

interface Props {
  params: Promise<{ slug?: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: slugParts } = await params
  const slugJoined = joinSlug(slugParts)
  const project = slugJoined ? await getWorkBySlugFromSupabase(slugJoined) : null
  const externalUrl = normalizeExternalUrl(slugJoined)

  return {
    title: project?.title ?? (externalUrl ? hostFromUrl(externalUrl) : titleFromSlug(slugJoined)),
    description: project?.description ?? "Formly demo портфолио",
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug: slugParts } = await params
  const slugJoined = joinSlug(slugParts)
  const project = slugJoined ? await getWorkBySlugFromSupabase(slugJoined) : null
  const externalUrlFromSlug = normalizeExternalUrl(slugJoined)

  const safeProject = project ?? {
    slug: slugJoined,
    title: externalUrlFromSlug ? hostFromUrl(externalUrlFromSlug) : titleFromSlug(slugJoined),
    category: categoryGuessFromSlugOrUrl(externalUrlFromSlug ?? slugJoined),
    description: "Вэб сайтын demo хуудас",
    image: "/placeholder.jpg",
    industry: categoryGuessFromSlugOrUrl(externalUrlFromSlug ?? slugJoined),
    goal: "Демо жишээ — танай бизнест яг ийм бүтэц хийгдэнэ",
    problem: "—",
    solution: "—",
    pages: [] as string[],
    duration: "-",
  }

  return (
    <>
      <Section className="pt-20">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-2">Formly demo</p>
          <Badge variant="secondary" className="mb-4">
            {safeProject.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{safeProject.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{safeProject.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" />
              {safeProject.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-secondary" />
              Messenger + Form
            </span>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-4xl mx-auto">
          {(() => {
            const externalUrl = project ? normalizeExternalUrl(project.slug) : externalUrlFromSlug
            return (
              <div className="group aspect-video relative rounded-xl overflow-hidden bg-muted">
                {project ? (
                  <Image src={safeProject.image || "/placeholder.svg"} alt={safeProject.title} fill className="object-cover" />
                ) : externalUrl ? (
                  <iframe
                    src={externalUrl}
                    title={safeProject.title}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  />
                ) : (
                  <Image src="/placeholder.jpg" alt={safeProject.title} fill className="object-cover" />
                )}

                {externalUrl && (
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-end justify-start p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Сайт үзэх"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm font-bold text-white">
                      Сайт үзэх
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                )}
              </div>
            )
          })()}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Салбар</h2>
              <p className="text-foreground">{safeProject.industry}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Хугацаа</h2>
              <p className="text-foreground flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                {safeProject.duration}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Зорилго</h2>
            <p className="text-foreground text-lg">{safeProject.goal}</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-destructive/5 rounded-xl border border-destructive/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" />
                Өмнөх асуудал
              </h3>
              <p className="text-muted-foreground">{safeProject.problem}</p>
            </div>
            <div className="p-6 bg-secondary/5 rounded-xl border border-secondary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                Шийдэл
              </h3>
              <p className="text-muted-foreground">{safeProject.solution}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Орсон хуудсууд</h2>
            <div className="flex flex-wrap gap-2">
              {safeProject.pages.map((page) => (
                <Badge key={page} variant="outline">
                  {page}
                </Badge>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">Demo жишээ — танай бизнест яг ийм бүтэц хийгдэнэ</p>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Ийм сайт хийлгэх</h2>
          <p className="mt-4 text-primary-foreground/80">Танай бизнест яг ийм бүтэц, дизайнаар вэб сайт хийлгэнэ үү.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://m.me/961702760355484"
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
