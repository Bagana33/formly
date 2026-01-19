import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { workProjects, getWorkBySlug, getWorkBySlugFromSupabase } from "@/lib/work-data"
import { MessageCircle, Clock, CheckCircle, XCircle, ArrowRight } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getWorkBySlugFromSupabase(slug) || getWorkBySlug(slug)

  if (!project) {
    return {
      title: "Олдсонгүй",
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params
  const project = await getWorkBySlugFromSupabase(slug) || getWorkBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-20">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-2">Formly demo</p>
          <Badge variant="secondary" className="mb-4">
            {project.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" />
              {project.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-secondary" />
              Messenger + Form
            </span>
          </div>
        </div>
      </Section>

      {/* Hero Image */}
      <Section className="pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video relative rounded-xl overflow-hidden bg-muted">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section className="bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Салбар</h2>
              <p className="text-foreground">{project.industry}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Хугацаа</h2>
              <p className="text-foreground flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                {project.duration}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Зорилго</h2>
            <p className="text-foreground text-lg">{project.goal}</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-destructive/5 rounded-xl border border-destructive/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" />
                Өмнөх асуудал
              </h3>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
            <div className="p-6 bg-secondary/5 rounded-xl border border-secondary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                Шийдэл
              </h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Орсон хуудсууд
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.pages.map((page) => (
                <Badge key={page} variant="outline">
                  {page}
                </Badge>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">Demo жишээ — танай бизнест яг ийм бүтэц хийгдэнэ</p>
        </div>
      </Section>

      {/* CTA */}
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
