"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Section } from "@/components/section"
import { MessageCircle, CheckCircle, Send, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    business: "",
    requirements: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const recipient = "mindverse0713@gmail.com"
    const subject = encodeURIComponent(`Formly захиалга — ${formData.name || "Шинэ хүсэлт"}`)
    const body = encodeURIComponent(
      [
        `Нэр: ${formData.name}`,
        `Холбоо барих: ${formData.contact}`,
        `Байгууллагын төрөл: ${formData.business}`,
        "",
        "Товч шаардлага:",
        formData.requirements || "-",
        "",
        `Илгээсэн хуудас: ${typeof window !== "undefined" ? window.location.href : ""}`,
      ].join("\n"),
    )

    // Open user's email client with prefilled content
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    }

    // Small delay for UX consistency
    await new Promise((resolve) => setTimeout(resolve, 300))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <>
        <Section className="pt-20 min-h-[60vh] flex items-center">
          <div className="text-center max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Амжилттай илгээлээ</h1>
            <p className="mt-4 text-muted-foreground">
              Сайн байна уу, Formly-д хандсанд баярлалаа. Бид таны хүсэлтийг хүлээн авлаа. 24 цагийн дотор холбогдоно.
            </p>

            {/* Reassurance text */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
              <p>Илгээсний дараа шууд холбогдоно</p>
              <p>Заавал утсаар ярих албагүй</p>
              <p>Зөвлөгөө өгч чиглүүлнэ</p>
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">Илүү хурдан хариулт авахыг хүсвэл:</p>
              <Link
                href="https://m.me/961702760355484"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-cta-foreground bg-cta rounded-lg shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
                Messenger-ээр шууд холбогдох
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Section>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Холбогдох</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Албадлагагүй зөвлөгөө</h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">Messenger-ээр шууд бичих эсвэл богино форм бөглөнө.</p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-xl mx-auto text-center">
          <div className="p-8 bg-cta/5 rounded-2xl border-2 border-cta/30">
            <MessageCircle className="h-14 w-14 text-cta mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground">Messenger-ээр бичих</h2>
            <p className="mt-2 text-muted-foreground">Хамгийн хурдан хариулт авах арга · Утас асуухгүй</p>
            <Link
              href="https://m.me/961702760355484"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-cta-foreground bg-cta rounded-lg shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Messenger нээх
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Form Secondary */}
      <Section className="bg-muted/50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-2">Эсвэл форм бөглөх</h2>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Заавал утсаар ярих албагүй · Илгээсний дараа шууд холбогдоно
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Нэр
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                placeholder="Таны нэр"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2">
                Холбоо барих (утас эсвэл имэйл)
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                value={formData.contact}
                onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                placeholder="99001122 эсвэл email@example.com"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                Байгууллагын төрөл
              </label>
              <select
                id="business"
                name="business"
                required
                value={formData.business}
                onChange={(e) => setFormData((p) => ({ ...p, business: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
              >
                <option value="">Сонгоно уу</option>
                <option value="training">Сургалтын төв</option>
                <option value="health">Эмнэлэг / Гоо сайхан</option>
                <option value="service">Үйлчилгээ</option>
                <option value="agency">Зуучлал</option>
                <option value="other">Бусад</option>
              </select>
            </div>
            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-foreground mb-2">
                Товч шаардлага
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                value={formData.requirements}
                onChange={(e) => setFormData((p) => ({ ...p, requirements: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all resize-none"
                placeholder="Ямар төрлийн сайт хэрэгтэй байгаа, онцлог шаардлага гэх мэт..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-secondary-foreground bg-secondary rounded-lg hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                "Илгээж байна..."
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Илгээх
                </>
              )}
            </button>
          </form>

          {/* Reassurance under form */}
          <p className="mt-6 text-center text-sm text-muted-foreground">Хариуг 24 цагийн дотор өгнө · Нууц төлбөргүй</p>
        </div>
      </Section>
    </>
  )
}
