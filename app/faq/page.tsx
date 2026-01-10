import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Formly-ийн түгээмэл асуултууд. Домэйн, хугацаа, өргөтгөл, арчилгаа гэх мэт.",
}

const faqs = [
  {
    question: "Domain байхгүй бол яах вэ?",
    answer:
      "Домэйн худалдаж авахад бид туслана. Монголд .mn домэйн авах бол жилд 50,000-80,000₮ орчим болдог. Бид домэйн сонгох, бүртгүүлэх процессд зөвлөгөө өгнө.",
  },
  {
    question: "3 хоногт үнэхээр дуусах уу?",
    answer:
      "Тийм. Starter багц (1-3 хуудас) 3 хоногт бэлэн болно. Growth багц (6-8 хуудас) 5-7 хоног орчим болно. Хугацаа нь таны контент бэлдэлтээс хамаарна. Бид түргэн ажиллахыг чухалчилдаг.",
  },
  {
    question: "Дараа нь өргөтгөж болох уу?",
    answer:
      "Тийм, заавал болно. Эхлээд Starter багцаар эхлүүлээд, дараа нь хэрэгцээгээ харж хуудас нэмж, функц нэмж болно. Бид таны бизнестэй хамт өсөхөд бэлэн.",
  },
  {
    question: "Контент хэн бэлдэх вэ?",
    answer:
      "Текст, зураг зэрэг контентыг та бэлдэнэ. Бид агуулгын бүтэц, ямар зураг хэрэгтэй талаар зөвлөгөө өгнө. Хэрэв туслалцаа хэрэгтэй бол нэмэлт үйлчилгээ болгож хийж болно.",
  },
  {
    question: "Сар бүр арчилгаа заавал авах уу?",
    answer:
      "Үгүй, Care багц нь сонголт. Хэрэв та өөрөө жижиг засвар хийж чадах бол арчилгаа авахгүй байж болно. Гэхдээ тогтмол контент шинэчлэлт, засвар хэрэгтэй бол Care багц хэрэгтэй.",
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Ил тод нөхцөл, богино хариулт</h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">Хугацаа, домэйн, өргөтгөл, арчилгааны талаар нэг дороос</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-secondary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-8 text-center text-sm text-muted-foreground">Нууц төлбөр байхгүй · Дараа нь өргөтгөнө</p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Өөр асуулт байна уу?</h2>
          <p className="mt-4 text-primary-foreground/80">Messenger-ээр асуугаарай, бид тусалхдаа баяртай.</p>
          <div className="mt-8">
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
          </div>
        </div>
      </Section>
    </>
  )
}
