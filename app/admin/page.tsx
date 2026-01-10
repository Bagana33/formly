"use client"

import { useEffect, useMemo, useState } from "react"
import { Section } from "@/components/section"
import { getDefaultContent, type FAQ, type Plan, type ServiceItem, type SiteContent, type TimelineStep } from "@/lib/site-content"
import type { WorkProject } from "@/lib/work-data"
import { Plus, Trash, Copy, RotateCcw, Save, Upload, Image as ImageIcon } from "lucide-react"

type TabKey = "hero" | "services" | "work" | "pricing" | "process" | "faq"

export default function AdminPage() {
  const [content, setContent] = useState<SiteContent>(getDefaultContent)
  const [active, setActive] = useState<TabKey>("hero")
  const [copied, setCopied] = useState(false)

  // Load from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem("formly-content")
    if (stored) {
      try {
        setContent(JSON.parse(stored))
      } catch {
        // ignore parse errors
      }
    }
  }, [])

  // Persist to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem("formly-content", JSON.stringify(content))
  }, [content])

  const tabs: { key: TabKey; label: string }[] = [
    { key: "hero", label: "Hero / Proofs" },
    { key: "services", label: "Үйлчилгээ" },
    { key: "work", label: "Ажлууд" },
    { key: "pricing", label: "Үнэ" },
    { key: "process", label: "Процесс" },
    { key: "faq", label: "FAQ" },
  ]

  const clipboardJson = useMemo(() => JSON.stringify(content, null, 2), [content])

  async function handleCopy() {
    await navigator.clipboard.writeText(clipboardJson)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  function resetDefaults() {
    setContent(getDefaultContent())
  }

  // Handle image upload
  function handleImageUpload(workIndex: number, file: File | null) {
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Зөвхөн зураг файл оруулах боломжтой")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Зурагны хэмжээ 5MB-аас их байж болохгүй")
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result as string
      setContent({
        ...content,
        work: updateArrayItem(content.work, workIndex, { image: base64String }),
      })
    }
    reader.onerror = () => {
      alert("Зураг унших үед алдаа гарлаа")
    }
    reader.readAsDataURL(file)
  }

  // Helpers
  const updateArrayItem = <T,>(list: T[], index: number, updates: Partial<T>): T[] =>
    list.map((item, i) => (i === index ? { ...item, ...updates } : item))

  const removeAt = <T,>(list: T[], index: number): T[] => list.filter((_, i) => i !== index)

  const addEmptyService = (): ServiceItem => ({ title: "Шинэ үйлчилгээ", description: "Тайлбар нэмнэ үү" })
  const addEmptyPlan = (): Plan => ({ name: "Шинэ багц", price: "0", unit: "₮", description: "", features: [] })
  const addEmptyStep = (): TimelineStep => ({ day: `${content.timeline.length + 1}`, title: "Алхам", description: "Тайлбар" })
  const addEmptyFAQ = (): FAQ => ({ question: "Асуулт", answer: "Хариулт" })
  const addEmptyWork = (): WorkProject => ({
    slug: `new-${Date.now()}`,
    title: "Шинэ төсөл",
    category: "Сургалтын төв",
    description: "Төслийн тайлбар",
    image: "/placeholder.svg",
    industry: "Салбар",
    goal: "Зорилго",
    problem: "Өмнөх асуудал",
    solution: "Шийдэл",
    pages: ["Нүүр"],
    duration: "3 хоног",
  })

  return (
    <>
      <Section className="pt-16">
        <div className="pattern relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 shadow-xl backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cta via-secondary to-primary opacity-80" />
          <div className="relative p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Admin Dashboard</p>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Контент удирдах</h1>
                <p className="text-sm text-muted-foreground mt-2">LocalStorage-д хадгална · JSON-оор export хийж болно</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={resetDefaults}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/70 px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  <RotateCcw className="h-4 w-4" />
                  Default сэргээх
                </button>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-lg border border-cta bg-cta/90 px-4 py-2 text-sm font-semibold text-cta-foreground hover:bg-cta"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "Хуулагдлаа" : "JSON Copy"}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    active === tab.key
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-foreground hover:bg-muted/70"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid gap-6">
              {active === "hero" && (
                <div className="space-y-6">
                  {/* Hero Settings */}
                  <div className="surface rounded-2xl p-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">Hero хэсгийн тохируулга</h2>
                        <p className="text-xs text-muted-foreground mt-1">Нүүр хуудсын hero хэсгийн контентыг тохируулах</p>
                      </div>
                    </div>

                    {/* Eyebrow */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          Eyebrow
                          <span className="text-xs text-muted-foreground font-normal">(Дээд жижиг текст)</span>
                        </label>
                        <span className="text-xs text-muted-foreground">{content.hero.eyebrow.length} тэмдэгт</span>
                      </div>
                      <input
                        value={content.hero.eyebrow}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, eyebrow: e.target.value } })}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Жишээ: Formly · 3 хоногт · 2025"
                        maxLength={100}
                      />
                      <p className="text-xs text-muted-foreground">Hero хэсгийн дээд талд харагдах жижиг текст. Ихэвчлэн брэнд нэр, он сар өдөр эсвэл товч мэдээлэл.</p>
                    </div>

                    {/* Headline */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          Headline
                          <span className="text-xs text-muted-foreground font-normal">(Гол гарчиг)</span>
                        </label>
                        <span className="text-xs text-muted-foreground">{content.hero.headline.length} тэмдэгт</span>
                      </div>
                      <textarea
                        value={content.hero.headline}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, headline: e.target.value } })}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[60px]"
                        placeholder="Жишээ: 3 хоногт захиалга авчирдаг веб сайт"
                        rows={2}
                        maxLength={200}
                      />
                      <p className="text-xs text-muted-foreground">Hero хэсгийн гол гарчиг. Хамгийн чухал мессеж, богино бөгөөд тодорхой байх нь зүйтэй.</p>
                    </div>

                    {/* Subhead */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          Subhead
                          <span className="text-xs text-muted-foreground font-normal">(Дэд гарчиг)</span>
                        </label>
                        <span className="text-xs text-muted-foreground">{content.hero.subhead.length} тэмдэгт</span>
                      </div>
                      <textarea
                        value={content.hero.subhead}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, subhead: e.target.value } })}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[80px]"
                        placeholder="Жишээ: Монголын үйлчилгээний бизнесүүдэд зориулсан, mobile-first, Messenger-ээр холбогддог веб шийдэл."
                        rows={3}
                        maxLength={300}
                      />
                      <p className="text-xs text-muted-foreground">Headline-ийн доор харагдах дэлгэрэнгүй тайлбар. Үйлчилгээний онцлог, зорилго, үнэ цэнийг тайлбарлана.</p>
                    </div>

                    {/* Hero Description */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          Hero Description
                          <span className="text-xs text-muted-foreground font-normal">(Гол тайлбар)</span>
                        </label>
                        <span className="text-xs text-muted-foreground">{content.hero.description?.length || 0} тэмдэгт</span>
                      </div>
                      <textarea
                        value={content.hero.description || ""}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, description: e.target.value } })}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[80px]"
                        placeholder="Жишээ: 72 цагийн дотор хүргэх өндөр гүйцэтгэлтэй веб сайтаар танай брэндийг өсгөнө..."
                        rows={3}
                        maxLength={400}
                      />
                      <p className="text-xs text-muted-foreground">Hero хэсгийн гол тайлбар текст. Headline-ийн доор томоор харагдана.</p>
                    </div>

                    {/* Preview Section */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <ImageIcon className="h-4 w-4 text-muted-foreground" />
                        Preview (Урьдчилан харах)
                      </h3>
                      <div className="rounded-xl border border-border/70 bg-muted/30 p-6 space-y-3 backdrop-blur-sm">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {content.hero.eyebrow || "Eyebrow текст..."}
                        </p>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                          {content.hero.headline || "Headline текст..."}
                        </h1>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {content.hero.description || content.hero.subhead || "Description текст..."}
                        </p>
                        <p className="text-xs text-muted-foreground italic leading-relaxed">
                          {content.hero.subhead || "Subhead текст..."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hero Cards Section */}
                  <div className="surface rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">Hero Картууд</h2>
                        <p className="text-xs text-muted-foreground mt-1">Hero хэсгийн доор харагдах 2 карт (Concierge Support, Strategic Audit)</p>
                      </div>
                      <button
                        onClick={() => setContent({ 
                          ...content, 
                          heroCards: [...(content.heroCards || []), { title: "Шинэ карт", description: "", buttonText: "", buttonHref: "" }] 
                        })}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        Нэмэх
                      </button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {(content.heroCards || []).map((card, idx) => (
                        <div key={idx} className="group relative rounded-xl border border-border/70 bg-background/50 p-4 space-y-3 hover:border-primary/50 transition-all">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-muted-foreground">Карт #{idx + 1}</span>
                            <button
                              onClick={() => setContent({ 
                                ...content, 
                                heroCards: removeAt(content.heroCards || [], idx) 
                              })}
                              className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                              aria-label="remove card"
                              title="Устгах"
                            >
                              <Trash className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Гарчиг</label>
                            <input
                              value={card.title}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  heroCards: updateArrayItem(content.heroCards || [], idx, { ...card, title: e.target.value }),
                                })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Жишээ: Тусламж Үйлчилгээ"
                              maxLength={60}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Тайлбар</label>
                            <textarea
                              value={card.description}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  heroCards: updateArrayItem(content.heroCards || [], idx, { ...card, description: e.target.value }),
                                })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[60px]"
                              placeholder="Жишээ: Таны тусгай дизайн багтай шууд холбогдох."
                              rows={2}
                              maxLength={150}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-2">
                              <label className="text-xs font-medium text-foreground">Товч текст</label>
                              <input
                                value={card.buttonText}
                                onChange={(e) =>
                                  setContent({
                                    ...content,
                                    heroCards: updateArrayItem(content.heroCards || [], idx, { ...card, buttonText: e.target.value }),
                                  })
                                }
                                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                placeholder="Жишээ: Чат эхлүүлэх"
                                maxLength={40}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-medium text-foreground">Товч URL</label>
                              <input
                                value={card.buttonHref}
                                onChange={(e) =>
                                  setContent({
                                    ...content,
                                    heroCards: updateArrayItem(content.heroCards || [], idx, { ...card, buttonHref: e.target.value }),
                                  })
                                }
                                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                placeholder="/contact эсвэл https://..."
                                maxLength={200}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      {(!content.heroCards || content.heroCards.length === 0) && (
                        <div className="col-span-full text-center py-8 text-sm text-muted-foreground border border-dashed border-border/50 rounded-lg">
                          Hero карт байхгүй байна. "Нэмэх" товчийг дараад нэмнэ үү.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Micro-proof Section */}
                  <div className="surface rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">Micro-proof (Нотолгоо)</h2>
                        <p className="text-xs text-muted-foreground mt-1">Hero хэсгийн доор харагдах нотолгоо, онцлогууд</p>
                      </div>
                      <button
                        onClick={() => setContent({ ...content, proofs: [...content.proofs, "Шинэ нотолгоо"] })}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        Нэмэх
                      </button>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {content.proofs.map((item, idx) => (
                        <div key={idx} className="group relative rounded-lg border border-border/70 bg-background/50 p-3 hover:border-primary/50 transition-all">
                          <div className="flex items-start gap-2">
                            <input
                              value={item}
                              onChange={(e) =>
                                setContent({ ...content, proofs: updateArrayItem(content.proofs, idx, e.target.value) as string[] })
                              }
                              className="flex-1 rounded-md border-0 bg-transparent px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-background transition-all"
                              placeholder="Нотолгоо текст..."
                              maxLength={50}
                            />
                            <button
                              onClick={() => setContent({ ...content, proofs: removeAt(content.proofs, idx) })}
                              className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                              aria-label="remove proof"
                              title="Устгах"
                            >
                              <Trash className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{item.length}/50</span>
                            <span className="text-border">•</span>
                            <span>#{idx + 1}</span>
                          </div>
                        </div>
                      ))}
                      {content.proofs.length === 0 && (
                        <div className="col-span-full text-center py-8 text-sm text-muted-foreground border border-dashed border-border/50 rounded-lg">
                          Нотолгоо байхгүй байна. "Нэмэх" товчийг дараад нэмнэ үү.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Protocol Section */}
                  <div className="surface rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">3 Хоногийн Протокол</h2>
                        <p className="text-xs text-muted-foreground mt-1">Protocol хэсгийн гарчиг болон 3 картын тохируулга</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        Гарчиг
                        <span className="text-xs text-muted-foreground font-normal">(Protocol Section Title)</span>
                      </label>
                      <input
                        value={content.protocolSection?.title || ""}
                        onChange={(e) => setContent({ 
                          ...content, 
                          protocolSection: { ...content.protocolSection, title: e.target.value, cards: content.protocolSection?.cards || [] } 
                        })}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Жишээ: 3 Хоногийн Протокол"
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground">Протокол картууд</p>
                        <button
                          onClick={() => setContent({ 
                            ...content, 
                            protocolSection: { 
                              ...content.protocolSection, 
                              title: content.protocolSection?.title || "3 Хоногийн Протокол",
                              cards: [...(content.protocolSection?.cards || []), { title: "Шинэ карт", description: "" }] 
                            } 
                          })}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                          Нэмэх
                        </button>
                      </div>
                      <div className="grid gap-3 md:grid-cols-3">
                        {(content.protocolSection?.cards || []).map((card, idx) => (
                          <div key={idx} className="group relative rounded-lg border border-border/70 bg-background/50 p-3 space-y-2 hover:border-primary/50 transition-all">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-muted-foreground">#{idx + 1}</span>
                              <button
                                onClick={() => setContent({ 
                                  ...content, 
                                  protocolSection: { 
                                    ...content.protocolSection, 
                                    title: content.protocolSection?.title || "3 Хоногийн Протокол",
                                    cards: removeAt(content.protocolSection?.cards || [], idx) 
                                  } 
                                })}
                                className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                                aria-label="remove card"
                                title="Устгах"
                              >
                                <Trash className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <input
                              value={card.title}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  protocolSection: {
                                    ...content.protocolSection,
                                    title: content.protocolSection?.title || "3 Хоногийн Протокол",
                                    cards: updateArrayItem(content.protocolSection?.cards || [], idx, { ...card, title: e.target.value }),
                                  },
                                })
                              }
                              className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Гарчиг..."
                              maxLength={50}
                            />
                            <textarea
                              value={card.description}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  protocolSection: {
                                    ...content.protocolSection,
                                    title: content.protocolSection?.title || "3 Хоногийн Протокол",
                                    cards: updateArrayItem(content.protocolSection?.cards || [], idx, { ...card, description: e.target.value }),
                                  },
                                })
                              }
                              className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[60px]"
                              placeholder="Тайлбар..."
                              rows={2}
                              maxLength={200}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Portfolio & Membership Sections */}
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Portfolio Section */}
                    <div className="surface rounded-2xl p-6 space-y-4">
                      <div className="border-b border-border/50 pb-3">
                        <h2 className="text-lg font-semibold text-foreground">Портфолио Хэсэг</h2>
                        <p className="text-xs text-muted-foreground mt-1">Портфолио хэсгийн гарчиг</p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Гарчиг</label>
                        <input
                          value={content.portfolioSection?.title || ""}
                          onChange={(e) => setContent({ 
                            ...content, 
                            portfolioSection: { title: e.target.value } 
                          })}
                          className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="Жишээ: Сонгосон Портфолио"
                          maxLength={100}
                        />
                      </div>
                    </div>

                    {/* Membership Section */}
                    <div className="surface rounded-2xl p-6 space-y-4">
                      <div className="border-b border-border/50 pb-3">
                        <h2 className="text-lg font-semibold text-foreground">Гишүүнчлэл Хэсэг</h2>
                        <p className="text-xs text-muted-foreground mt-1">Membership/Pricing хэсгийн тохируулга</p>
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Гарчиг</label>
                          <input
                            value={content.membershipSection?.title || ""}
                            onChange={(e) => setContent({ 
                              ...content, 
                              membershipSection: { 
                                ...content.membershipSection, 
                                title: e.target.value,
                                description: content.membershipSection?.description || ""
                              } 
                            })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="Жишээ: Гишүүнчлэл"
                            maxLength={100}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Тайлбар</label>
                          <textarea
                            value={content.membershipSection?.description || ""}
                            onChange={(e) => setContent({ 
                              ...content, 
                              membershipSection: { 
                                ...content.membershipSection, 
                                title: content.membershipSection?.title || "Гишүүнчлэл",
                                description: e.target.value
                              } 
                            })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[60px]"
                            placeholder="Жишээ: Тогтвортой дижитал өсөлтөд зориулсан ил тод үнэ..."
                            rows={2}
                            maxLength={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {active === "services" && (
                <div className="surface rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Үйлчилгээний Систем</h2>
                      <p className="text-xs text-muted-foreground mt-1">Системчилсэн үйлчилгээний картуудын тохируулга</p>
                    </div>
                    <button
                      onClick={() => setContent({ ...content, serviceSystem: [...content.serviceSystem, addEmptyService()] })}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Нэмэх
                    </button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {content.serviceSystem.map((service, idx) => (
                      <div key={idx} className="group relative rounded-xl border border-border/70 bg-background/50 p-4 space-y-3 hover:border-primary/50 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-muted-foreground">Карт #{idx + 1}</span>
                          <button
                            onClick={() =>
                              setContent({ ...content, serviceSystem: removeAt(content.serviceSystem, idx) })
                            }
                            className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="remove service"
                            title="Устгах"
                          >
                            <Trash className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-foreground">Гарчиг</label>
                          <input
                            value={service.title}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                serviceSystem: updateArrayItem(content.serviceSystem, idx, { ...service, title: e.target.value }),
                              })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="Жишээ: UX бүтэц"
                            maxLength={60}
                          />
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{service.title.length}/60</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-foreground">Тайлбар</label>
                          <textarea
                            value={service.description}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                serviceSystem: updateArrayItem(content.serviceSystem, idx, { ...service, description: e.target.value }),
                              })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[80px]"
                            placeholder="Жишээ: Үйлчилгээний урсгалыг 3 алхмаар ойлгомжтой болгоно"
                            rows={3}
                            maxLength={200}
                          />
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{service.description.length}/200</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {content.serviceSystem.length === 0 && (
                      <div className="col-span-full text-center py-8 text-sm text-muted-foreground border border-dashed border-border/50 rounded-lg">
                        Үйлчилгээ байхгүй байна. "Нэмэх" товчийг дараад нэмнэ үү.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {active === "work" && (
                <div className="surface rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Ажлууд / Портфолио</h2>
                      <p className="text-xs text-muted-foreground mt-1">Портфолио төслүүдийн тохируулга</p>
                    </div>
                    <button
                      onClick={() => setContent({ ...content, work: [...content.work, addEmptyWork()] })}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Төсөл нэмэх
                    </button>
                  </div>
                  <div className="grid gap-6">
                    {content.work.map((item, idx) => (
                      <div key={item.slug} className="group relative rounded-xl border border-border/70 bg-background/50 p-5 space-y-4 hover:border-primary/50 transition-all">
                        <div className="flex items-center justify-between border-b border-border/50 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-muted-foreground">Төсөл #{idx + 1}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{item.slug}</span>
                          </div>
                          <button
                            onClick={() => setContent({ ...content, work: removeAt(content.work, idx) })}
                            className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="remove work"
                            title="Устгах"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Төслийн нэр</label>
                            <input
                              value={item.title}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, title: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Жишээ: Монголын Эмнэлэг"
                              maxLength={80}
                            />
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{item.title.length}/80</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Slug (URL)</label>
                            <input
                              value={item.slug}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, slug: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Жишээ: mongolyn-emneleg"
                              maxLength={60}
                            />
                            <p className="text-xs text-muted-foreground">URL-д харагдах текст. Англи үсэг, зураас ашиглана.</p>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Категори</label>
                            <select
                              value={item.category}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, category: e.target.value as WorkProject["category"] }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            >
                              <option value="Сургалтын төв">Сургалтын төв</option>
                              <option value="Эмнэлэг / гоо сайхан">Эмнэлэг / гоо сайхан</option>
                              <option value="Үйлчилгээ">Үйлчилгээ</option>
                              <option value="Зуучлал">Зуучлал</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Хугацаа</label>
                            <input
                              value={item.duration}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, duration: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Жишээ: 3 хоног"
                              maxLength={30}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Салбар</label>
                            <input
                              value={item.industry}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, industry: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Жишээ: Эрүүл мэнд"
                              maxLength={50}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-foreground">Зураг</label>
                          <div className="flex gap-2">
                            <input
                              value={item.image}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, image: e.target.value }) })
                              }
                              className="flex-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Зураг URL эсвэл local файл оруулах"
                            />
                            <label className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted cursor-pointer transition-colors">
                              <Upload className="h-4 w-4" />
                              <span className="hidden sm:inline">Файл</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0] || null
                                  handleImageUpload(idx, file)
                                }}
                              />
                            </label>
                          </div>
                          {item.image && (
                            <div className="relative w-full h-40 rounded-lg border border-border overflow-hidden bg-muted">
                              <img
                                src={item.image}
                                alt="Preview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none"
                                }}
                              />
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground">Зураг URL эсвэл "Файл" товчийг дараад local файл оруулна уу (Max 5MB)</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-medium text-foreground">Төслийн тайлбар</label>
                            <span className="text-xs text-muted-foreground">{item.description.length}/200</span>
                          </div>
                          <textarea
                            value={item.description}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, description: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[80px]"
                            rows={3}
                            placeholder="Жишээ: Монголын Эмнэлгийн вэб сайт. Хэрэглэгчдэд мэдээлэл өгөх, захиалга авах зорилготой."
                            maxLength={200}
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-medium text-foreground">Зорилго</label>
                              <span className="text-xs text-muted-foreground">{item.goal?.length || 0}/150</span>
                            </div>
                            <textarea
                              value={item.goal || ""}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, goal: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[80px]"
                              rows={3}
                              placeholder="Жишээ: Хэрэглэгчдэд мэдээлэл өгөх, захиалга авах..."
                              maxLength={150}
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-medium text-foreground">Шийдэл</label>
                              <span className="text-xs text-muted-foreground">{item.solution?.length || 0}/150</span>
                            </div>
                            <textarea
                              value={item.solution || ""}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, solution: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[80px]"
                              rows={3}
                              placeholder="Жишээ: Messenger + Form холболт, мобайл дэмжлэг, хурдан ачаалалт..."
                              maxLength={150}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-medium text-foreground">Асуудал</label>
                            <span className="text-xs text-muted-foreground">{item.problem?.length || 0}/200</span>
                          </div>
                          <textarea
                            value={item.problem || ""}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { ...item, problem: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[80px]"
                            rows={3}
                            placeholder="Жишээ: Өмнө нь Facebook page-д найддаг тул лавлагаа алга болдог байсан..."
                            maxLength={200}
                          />
                        </div>
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-medium text-foreground">Хуудсууд (Pages)</label>
                            <button
                              onClick={() =>
                                setContent({
                                  ...content,
                                  work: updateArrayItem(content.work, idx, { ...item, pages: [...item.pages, "Шинэ хуудас"] }),
                                })
                              }
                              className="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary/80"
                            >
                              <Plus className="h-3 w-3" />
                              Нэмэх
                            </button>
                          </div>
                          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                            {item.pages.map((p, pIdx) => (
                              <div key={pIdx} className="group/page relative flex items-center gap-2 rounded-lg border border-border/70 bg-background/50 px-3 py-2 hover:border-primary/50 transition-all">
                                <input
                                  value={p}
                                  onChange={(e) =>
                                    setContent({
                                      ...content,
                                      work: updateArrayItem(content.work, idx, {
                                        ...item,
                                        pages: updateArrayItem(item.pages, pIdx, e.target.value) as string[],
                                      }),
                                    })
                                  }
                                  className="flex-1 bg-transparent outline-none text-sm focus:ring-1 focus:ring-primary/50 rounded px-1 py-0.5"
                                  placeholder="Хуудас нэр..."
                                  maxLength={30}
                                />
                                <button
                                  onClick={() =>
                                    setContent({
                                      ...content,
                                      work: updateArrayItem(content.work, idx, { ...item, pages: removeAt(item.pages, pIdx) }),
                                    })
                                  }
                                  aria-label="remove page"
                                  className="p-1 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover/page:opacity-100"
                                  title="Устгах"
                                >
                                  <Trash className="h-3 w-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                          {item.pages.length === 0 && (
                            <div className="text-center py-4 text-xs text-muted-foreground border border-dashed border-border/50 rounded-lg">
                              Хуудас байхгүй байна. "Нэмэх" товчийг дараад нэмнэ үү.
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === "pricing" && (
                <div className="surface rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Багц / Үнэ</h2>
                      <p className="text-xs text-muted-foreground mt-1">Pricing хэсгийн багцуудын тохируулга</p>
                    </div>
                    <button
                      onClick={() => setContent({ ...content, plans: [...content.plans, addEmptyPlan()] })}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Багц нэмэх
                    </button>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {content.plans.map((plan, idx) => (
                      <div key={idx} className="group relative rounded-xl border border-border/70 bg-background/50 p-4 space-y-3 hover:border-primary/50 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-muted-foreground">Багц #{idx + 1}</span>
                          <button
                            onClick={() => setContent({ ...content, plans: removeAt(content.plans, idx) })}
                            className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="remove plan"
                            title="Устгах"
                          >
                            <Trash className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-foreground">Багцын нэр</label>
                          <input
                            value={plan.name}
                            onChange={(e) =>
                              setContent({ ...content, plans: updateArrayItem(content.plans, idx, { ...plan, name: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="Жишээ: Starter"
                            maxLength={40}
                          />
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{plan.name.length}/40</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Үнэ</label>
                            <input
                              value={plan.price}
                              onChange={(e) =>
                                setContent({ ...content, plans: updateArrayItem(content.plans, idx, { ...plan, price: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="450,000"
                              maxLength={20}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Нэгж</label>
                            <input
                              value={plan.unit || ""}
                              onChange={(e) =>
                                setContent({ ...content, plans: updateArrayItem(content.plans, idx, { ...plan, unit: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="₮ эсвэл ₮ / сар"
                              maxLength={15}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-foreground">Тайлбар</label>
                          <textarea
                            value={plan.description}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                plans: updateArrayItem(content.plans, idx, { ...plan, description: e.target.value }),
                              })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[60px]"
                            rows={2}
                            placeholder="Жишээ: Эхлэхэд тохиромжтой"
                            maxLength={100}
                          />
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{plan.description.length}/100</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm p-2 rounded-lg bg-muted/50 border border-border/50">
                          <input
                            type="checkbox"
                            checked={plan.popular ?? false}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                plans: updateArrayItem(content.plans, idx, { ...plan, popular: e.target.checked }),
                              })
                            }
                            className="rounded"
                          />
                          <label className="text-muted-foreground cursor-pointer">Хамгийн их сонгогддог</label>
                        </div>
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-medium text-foreground">Онцлогууд</label>
                            <button
                              onClick={() =>
                                setContent({
                                  ...content,
                                  plans: updateArrayItem(content.plans, idx, { ...plan, features: [...plan.features, "Шинэ"] }),
                                })
                              }
                              className="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary/80"
                            >
                              <Plus className="h-3 w-3" />
                              Нэмэх
                            </button>
                          </div>
                          <div className="space-y-2">
                            {plan.features.map((f, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2 group/feature">
                                <input
                                  value={f}
                                  onChange={(e) =>
                                    setContent({
                                      ...content,
                                      plans: updateArrayItem(content.plans, idx, {
                                        ...plan,
                                        features: updateArrayItem(plan.features, fIdx, e.target.value) as string[],
                                      }),
                                    })
                                  }
                                  className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                  placeholder="Онцлог текст..."
                                  maxLength={80}
                                />
                                <button
                                  onClick={() =>
                                    setContent({
                                      ...content,
                                      plans: updateArrayItem(content.plans, idx, {
                                        ...plan,
                                        features: removeAt(plan.features, fIdx),
                                      }),
                                    })
                                  }
                                  className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover/feature:opacity-100"
                                  aria-label="remove feature"
                                  title="Устгах"
                                >
                                  <Trash className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ))}
                            {plan.features.length === 0 && (
                              <div className="text-center py-4 text-xs text-muted-foreground border border-dashed border-border/50 rounded-lg">
                                Онцлог байхгүй. "Нэмэх" товчийг дараад нэмнэ үү.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    {content.plans.length === 0 && (
                      <div className="col-span-full text-center py-8 text-sm text-muted-foreground border border-dashed border-border/50 rounded-lg">
                        Багц байхгүй байна. "Багц нэмэх" товчийг дараад нэмнэ үү.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {active === "process" && (
                <div className="space-y-6">
                  <div className="surface rounded-2xl p-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">Процесс / Timeline</h2>
                        <p className="text-xs text-muted-foreground mt-1">3 хоногийн процесс алхмуудын тохируулга</p>
                      </div>
                      <button
                        onClick={() => setContent({ ...content, timeline: [...content.timeline, addEmptyStep()] })}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        Алхам нэмэх
                      </button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {content.timeline.map((step, idx) => (
                        <div key={idx} className="group relative rounded-xl border border-border/70 bg-background/50 p-4 space-y-3 hover:border-primary/50 transition-all">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-muted-foreground">Алхам #{idx + 1}</span>
                            <button
                              onClick={() => setContent({ ...content, timeline: removeAt(content.timeline, idx) })}
                              className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                              aria-label="remove step"
                              title="Устгах"
                            >
                              <Trash className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Өдөр</label>
                            <input
                              value={step.day}
                              onChange={(e) =>
                                setContent({ ...content, timeline: updateArrayItem(content.timeline, idx, { ...step, day: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Жишээ: 01 эсвэл Эхний өдөр"
                              maxLength={20}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Гарчиг</label>
                            <input
                              value={step.title}
                              onChange={(e) =>
                                setContent({ ...content, timeline: updateArrayItem(content.timeline, idx, { ...step, title: e.target.value }) })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                              placeholder="Жишээ: Төлөвлөгөө"
                              maxLength={60}
                            />
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{step.title.length}/60</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground">Тайлбар</label>
                            <textarea
                              value={step.description}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  timeline: updateArrayItem(content.timeline, idx, { ...step, description: e.target.value }),
                                })
                              }
                              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[80px]"
                              placeholder="Жишээ: Бид таны брэндийн алсын харааг шууд ойлгодог..."
                              rows={3}
                              maxLength={300}
                            />
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{step.description.length}/300</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      {content.timeline.length === 0 && (
                        <div className="col-span-full text-center py-8 text-sm text-muted-foreground border border-dashed border-border/50 rounded-lg">
                          Процесс алхам байхгүй байна. "Алхам нэмэх" товчийг дараад нэмнэ үү.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="surface rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">Баталгаа (Assurances)</h2>
                        <p className="text-xs text-muted-foreground mt-1">Process хэсгийн доор харагдах баталгаа текстүүд</p>
                      </div>
                      <button
                        onClick={() => setContent({ ...content, assurances: [...content.assurances, "Шинэ баталгаа"] })}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        Нэмэх
                      </button>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {content.assurances.map((a, idx) => (
                        <div key={idx} className="group relative rounded-lg border border-border/70 bg-background/50 p-3 hover:border-primary/50 transition-all">
                          <div className="flex items-start gap-2">
                            <input
                              value={a}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  assurances: updateArrayItem(content.assurances, idx, e.target.value) as string[],
                                })
                              }
                              className="flex-1 rounded-md border-0 bg-transparent px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-background transition-all"
                              placeholder="Баталгаа текст..."
                              maxLength={60}
                            />
                            <button
                              onClick={() => setContent({ ...content, assurances: removeAt(content.assurances, idx) })}
                              className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                              aria-label="remove assurance"
                              title="Устгах"
                            >
                              <Trash className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{a.length}/60</span>
                            <span className="text-border">•</span>
                            <span>#{idx + 1}</span>
                          </div>
                        </div>
                      ))}
                      {content.assurances.length === 0 && (
                        <div className="col-span-full text-center py-8 text-sm text-muted-foreground border border-dashed border-border/50 rounded-lg">
                          Баталгаа текст байхгүй байна. "Нэмэх" товчийг дараад нэмнэ үү.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {active === "faq" && (
                <div className="surface rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Түгээмэл Асуултууд (FAQ)</h2>
                      <p className="text-xs text-muted-foreground mt-1">FAQ хуудсанд харагдах асуулт-хариултуудын тохируулга</p>
                    </div>
                    <button
                      onClick={() => setContent({ ...content, faqs: [...content.faqs, addEmptyFAQ()] })}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Асуулт нэмэх
                    </button>
                  </div>
                  <div className="grid gap-4">
                    {content.faqs.map((faq, idx) => (
                      <div key={idx} className="group relative rounded-xl border border-border/70 bg-background/50 p-5 space-y-4 hover:border-primary/50 transition-all">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-muted-foreground">FAQ #{idx + 1}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">
                              {faq.question.length} / {faq.answer.length} тэмдэгт
                            </span>
                          </div>
                          <button
                            onClick={() => setContent({ ...content, faqs: removeAt(content.faqs, idx) })}
                            className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="remove faq"
                            title="Устгах"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-foreground">Асуулт</label>
                            <span className="text-xs text-muted-foreground">{faq.question.length}/150</span>
                          </div>
                          <input
                            value={faq.question}
                            onChange={(e) =>
                              setContent({ ...content, faqs: updateArrayItem(content.faqs, idx, { ...faq, question: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="Жишээ: Domain байхгүй бол яах вэ?"
                            maxLength={150}
                          />
                          <p className="text-xs text-muted-foreground">FAQ хуудсанд харагдах асуулт. Товч, ойлгомжтой байх нь зүйтэй.</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-foreground">Хариулт</label>
                            <span className="text-xs text-muted-foreground">{faq.answer.length}/500</span>
                          </div>
                          <textarea
                            value={faq.answer}
                            onChange={(e) =>
                              setContent({ ...content, faqs: updateArrayItem(content.faqs, idx, { ...faq, answer: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[100px]"
                            placeholder="Жишээ: Домэйн худалдаж авахад бид туслана. Монголд .mn домэйн авах бол жилд 50,000-80,000₮ орчим болдог..."
                            rows={4}
                            maxLength={500}
                          />
                          <p className="text-xs text-muted-foreground">Асуултын хариулт. Дэлгэрэнгүй, ойлгомжтой тайлбарлана уу.</p>
                        </div>
                      </div>
                    ))}
                    {content.faqs.length === 0 && (
                      <div className="text-center py-12 text-sm text-muted-foreground border border-dashed border-border/50 rounded-lg">
                        FAQ байхгүй байна. "Асуулт нэмэх" товчийг дараад нэмнэ үү.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="surface rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Save className="h-4 w-4 text-secondary" />
            <p className="text-sm text-muted-foreground">
              Хадгалалт LocalStorage-д автоматаар хийгдэнэ. JSON-г хуулж code-доо оруулах боломжтой.
            </p>
          </div>
          <pre className="max-h-[320px] overflow-auto rounded-xl bg-muted/70 p-4 text-xs text-foreground">
{clipboardJson}
          </pre>
        </div>
      </Section>
    </>
  )
}
