import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/section"
import { MessageCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Процесс",
  description: "Formly-ийн вэб сайт хийх процесс. 3 хоногт бэлэн болно.",
}

const steps = [
  {
    day: "1",
    title: "Бүтэц + баталгаа",
    tasks: [
      "15 минутын уулзалт",
      "UX flow, CTA тодорхойлох",
      "Wireframe баталгаажуулах",
      "Контентын checklist өгөх",
    ],
  },
  {
    day: "2",
    title: "Дизайн + Код",
    tasks: ["Mobile-first UI", "Өнгө, фонт брэндэд нийцүүлэх", "Messenger + Form холболт", "Analytics суулгах"],
  },
  {
    day: "3",
    title: "Тест + Нээлт",
    tasks: ["Олон төхөөрөмжийн тест", "HTTPS, хурд шалгах", "Контент байршуулж баталгаажуулах", "Арчилгааны зөвлөмж"],
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Процесс</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">3 өдрийн эрсдэлгүй төлөвлөгөө</h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">Алхам бүрийг баталгаажуулж, 3 хоногт дуусгана.</p>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.day} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
                  </div>
                )}

                <div className="relative z-10 p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-md transition-all">
                  {/* Day badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground font-bold text-2xl mb-4">
                    {step.day}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">өдөр</span>

                  <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>

                  <ul className="mt-4 space-y-2">
                    {step.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-muted-foreground">
            Wireframe батлагдсан мөчөөс хугацаа эхэлнэ · Өдөр бүр ахиц мэдээлнэ
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Эхлүүлэхэд бэлэн үү?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Өнөөдөр эхлүүлээд, 3 хоногийн дараа мэргэжлийн вэб сайттай болоорой.
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
