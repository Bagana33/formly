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
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Контент удирдах</h1>
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
                <div className="surface rounded-2xl p-6 space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Hero</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Eyebrow</label>
                      <input
                        value={content.hero.eyebrow}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, eyebrow: e.target.value } })}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subhead</label>
                      <input
                        value={content.hero.subhead}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, subhead: e.target.value } })}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Headline</label>
                    <input
                      value={content.hero.headline}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, headline: e.target.value } })}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">Micro-proof</p>
                      <button
                        onClick={() => setContent({ ...content, proofs: [...content.proofs, "Шинэ нотолгоо"] })}
                        className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80"
                      >
                        <Plus className="h-4 w-4" />
                        Нэмэх
                      </button>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {content.proofs.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input
                            value={item}
                            onChange={(e) =>
                              setContent({ ...content, proofs: updateArrayItem(content.proofs, idx, e.target.value) as string[] })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          />
                          <button
                            onClick={() => setContent({ ...content, proofs: removeAt(content.proofs, idx) })}
                            className="p-2 rounded-lg hover:bg-muted text-muted-foreground"
                            aria-label="remove proof"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {active === "services" && (
                <div className="surface rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">Үйлчилгээ</h2>
                    <button
                      onClick={() => setContent({ ...content, serviceSystem: [...content.serviceSystem, addEmptyService()] })}
                      className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80"
                    >
                      <Plus className="h-4 w-4" />
                      Нэмэх
                    </button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {content.serviceSystem.map((service, idx) => (
                      <div key={idx} className="rounded-xl border border-border/70 bg-muted/60 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">Карт {idx + 1}</p>
                          <button
                            onClick={() =>
                              setContent({ ...content, serviceSystem: removeAt(content.serviceSystem, idx) })
                            }
                            className="p-2 rounded-lg hover:bg-muted text-muted-foreground"
                            aria-label="remove service"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                        <input
                          value={service.title}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              serviceSystem: updateArrayItem(content.serviceSystem, idx, { title: e.target.value }),
                            })
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          placeholder="Гарчиг"
                        />
                        <textarea
                          value={service.description}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              serviceSystem: updateArrayItem(content.serviceSystem, idx, { description: e.target.value }),
                            })
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === "work" && (
                <div className="surface rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">Ажлууд / Demo</h2>
                    <button
                      onClick={() => setContent({ ...content, work: [...content.work, addEmptyWork()] })}
                      className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80"
                    >
                      <Plus className="h-4 w-4" />
                      Demo нэмэх
                    </button>
                  </div>
                  <div className="grid gap-4">
                    {content.work.map((item, idx) => (
                      <div key={item.slug} className="rounded-xl border border-border/70 bg-muted/50 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          <button
                            onClick={() => setContent({ ...content, work: removeAt(content.work, idx) })}
                            className="p-2 rounded-lg hover:bg-muted text-muted-foreground"
                            aria-label="remove work"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          <input
                            value={item.title}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { title: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            placeholder="Нэр"
                          />
                          <input
                            value={item.slug}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { slug: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            placeholder="Slug"
                          />
                          <input
                            value={item.category}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { category: e.target.value as WorkProject["category"] }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            placeholder="Категори"
                          />
                          <input
                            value={item.duration}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { duration: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            placeholder="Хугацаа"
                          />
                          <input
                            value={item.industry}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { industry: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            placeholder="Салбар"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-muted-foreground">Зураг</label>
                          <div className="flex gap-2">
                            <input
                              value={item.image}
                              onChange={(e) =>
                                setContent({ ...content, work: updateArrayItem(content.work, idx, { image: e.target.value }) })
                              }
                              className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm"
                              placeholder="Зураг URL эсвэл local файл оруулах"
                            />
                            <label className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted cursor-pointer">
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
                            <div className="relative w-full h-32 rounded-lg border border-border overflow-hidden bg-muted">
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
                        </div>
                        <textarea
                          value={item.description}
                          onChange={(e) =>
                            setContent({ ...content, work: updateArrayItem(content.work, idx, { description: e.target.value }) })
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          rows={2}
                        />
                        <div className="grid md:grid-cols-2 gap-3">
                          <textarea
                            value={item.goal}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { goal: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            rows={2}
                            placeholder="Зорилго"
                          />
                          <textarea
                            value={item.solution}
                            onChange={(e) =>
                              setContent({ ...content, work: updateArrayItem(content.work, idx, { solution: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            rows={2}
                            placeholder="Шийдэл"
                          />
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-muted-foreground">Хуудсууд</p>
                          <div className="flex flex-wrap gap-2">
                            {item.pages.map((p, pIdx) => (
                              <div key={pIdx} className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-foreground">
                                <input
                                  value={p}
                                  onChange={(e) =>
                                    setContent({
                                      ...content,
                                      work: updateArrayItem(content.work, idx, {
                                        pages: updateArrayItem(item.pages, pIdx, e.target.value) as string[],
                                      }),
                                    })
                                  }
                                  className="bg-transparent outline-none"
                                />
                                <button
                                  onClick={() =>
                                    setContent({
                                      ...content,
                                      work: updateArrayItem(content.work, idx, { pages: removeAt(item.pages, pIdx) }),
                                    })
                                  }
                                  aria-label="remove page"
                                  className="text-muted-foreground hover:text-destructive"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={() =>
                                setContent({
                                  ...content,
                                  work: updateArrayItem(content.work, idx, { pages: [...item.pages, "Шинэ хуудас"] }),
                                })
                              }
                              className="pill text-xs"
                            >
                              <Plus className="h-3 w-3" />
                              Хуудас нэмэх
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === "pricing" && (
                <div className="surface rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">Багц / Үнэ</h2>
                    <button
                      onClick={() => setContent({ ...content, plans: [...content.plans, addEmptyPlan()] })}
                      className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80"
                    >
                      <Plus className="h-4 w-4" />
                      Багц нэмэх
                    </button>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {content.plans.map((plan, idx) => (
                      <div key={idx} className="rounded-xl border border-border/70 bg-muted/50 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <input
                            value={plan.name}
                            onChange={(e) =>
                              setContent({ ...content, plans: updateArrayItem(content.plans, idx, { name: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            placeholder="Нэр"
                          />
                          <button
                            onClick={() => setContent({ ...content, plans: removeAt(content.plans, idx) })}
                            className="p-2 rounded-lg hover:bg-muted text-muted-foreground"
                            aria-label="remove plan"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            value={plan.price}
                            onChange={(e) =>
                              setContent({ ...content, plans: updateArrayItem(content.plans, idx, { price: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            placeholder="Үнэ"
                          />
                          <input
                            value={plan.unit || ""}
                            onChange={(e) =>
                              setContent({ ...content, plans: updateArrayItem(content.plans, idx, { unit: e.target.value }) })
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2"
                            placeholder="Нэгж"
                          />
                        </div>
                        <textarea
                          value={plan.description}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              plans: updateArrayItem(content.plans, idx, { description: e.target.value }),
                            })
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          rows={2}
                          placeholder="Тайлбар"
                        />
                        <div className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={plan.popular ?? false}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                plans: updateArrayItem(content.plans, idx, { popular: e.target.checked }),
                              })
                            }
                          />
                          <span className="text-muted-foreground">Хамгийн их сонгогддог</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                            <span>Онцлогууд</span>
                            <button
                              onClick={() =>
                                setContent({
                                  ...content,
                                  plans: updateArrayItem(content.plans, idx, { features: [...plan.features, "Шинэ"] }),
                                })
                              }
                              className="text-secondary hover:text-secondary/80"
                            >
                              + Нэмэх
                            </button>
                          </div>
                          <div className="space-y-2">
                            {plan.features.map((f, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2">
                                <input
                                  value={f}
                                  onChange={(e) =>
                                    setContent({
                                      ...content,
                                      plans: updateArrayItem(content.plans, idx, {
                                        features: updateArrayItem(plan.features, fIdx, e.target.value) as string[],
                                      }),
                                    })
                                  }
                                  className="w-full rounded-lg border border-input bg-background px-3 py-2"
                                />
                                <button
                                  onClick={() =>
                                    setContent({
                                      ...content,
                                      plans: updateArrayItem(content.plans, idx, {
                                        features: removeAt(plan.features, fIdx),
                                      }),
                                    })
                                  }
                                  className="p-2 rounded-lg hover:bg-muted text-muted-foreground"
                                  aria-label="remove feature"
                                >
                                  <Trash className="h-4 w-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === "process" && (
                <div className="surface rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">Процесс (timeline)</h2>
                    <button
                      onClick={() => setContent({ ...content, timeline: [...content.timeline, addEmptyStep()] })}
                      className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80"
                    >
                      <Plus className="h-4 w-4" />
                      Алхам нэмэх
                    </button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {content.timeline.map((step, idx) => (
                      <div key={idx} className="rounded-xl border border-border/70 bg-muted/50 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <input
                            value={step.day}
                            onChange={(e) =>
                              setContent({ ...content, timeline: updateArrayItem(content.timeline, idx, { day: e.target.value }) })
                            }
                            className="w-20 rounded-lg border border-input bg-background px-3 py-2"
                          />
                          <button
                            onClick={() => setContent({ ...content, timeline: removeAt(content.timeline, idx) })}
                            className="p-2 rounded-lg hover:bg-muted text-muted-foreground"
                            aria-label="remove step"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                        <input
                          value={step.title}
                          onChange={(e) =>
                            setContent({ ...content, timeline: updateArrayItem(content.timeline, idx, { title: e.target.value }) })
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          placeholder="Гарчиг"
                        />
                        <textarea
                          value={step.description}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              timeline: updateArrayItem(content.timeline, idx, { description: e.target.value }),
                            })
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          rows={2}
                          placeholder="Тайлбар"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="surface rounded-xl p-4 space-y-3">
                    <p className="text-sm font-semibold text-foreground">Assurance (copy)</p>
                    <div className="flex flex-wrap gap-2">
                      {content.assurances.map((a, idx) => (
                        <div key={idx} className="pill">
                          <input
                            value={a}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                assurances: updateArrayItem(content.assurances, idx, e.target.value) as string[],
                              })
                            }
                            className="bg-transparent outline-none"
                          />
                          <button
                            onClick={() => setContent({ ...content, assurances: removeAt(content.assurances, idx) })}
                            aria-label="remove assurance"
                            className="text-muted-foreground hover:text-destructive"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => setContent({ ...content, assurances: [...content.assurances, "Шинэ copy"] })}
                        className="pill text-xs"
                      >
                        <Plus className="h-3 w-3" />
                        Нэмэх
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {active === "faq" && (
                <div className="surface rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">FAQ</h2>
                    <button
                      onClick={() => setContent({ ...content, faqs: [...content.faqs, addEmptyFAQ()] })}
                      className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80"
                    >
                      <Plus className="h-4 w-4" />
                      Асуулт нэмэх
                    </button>
                  </div>
                  <div className="grid gap-4">
                    {content.faqs.map((faq, idx) => (
                      <div key={idx} className="rounded-xl border border-border/70 bg-muted/50 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">FAQ {idx + 1}</p>
                          <button
                            onClick={() => setContent({ ...content, faqs: removeAt(content.faqs, idx) })}
                            className="p-2 rounded-lg hover:bg-muted text-muted-foreground"
                            aria-label="remove faq"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                        <input
                          value={faq.question}
                          onChange={(e) =>
                            setContent({ ...content, faqs: updateArrayItem(content.faqs, idx, { question: e.target.value }) })
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          placeholder="Асуулт"
                        />
                        <textarea
                          value={faq.answer}
                          onChange={(e) =>
                            setContent({ ...content, faqs: updateArrayItem(content.faqs, idx, { answer: e.target.value }) })
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2"
                          rows={2}
                          placeholder="Хариулт"
                        />
                      </div>
                    ))}
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
