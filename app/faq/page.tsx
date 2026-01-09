"use client"

import Link from "next/link"
import { useState } from "react"
import { MessageCircle, ArrowRight, ChevronDown, Zap, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What services does Formly offer?",
    answer:
      "We specialize in end-to-end digital product creation. Our core services include UI/UX design, full-stack web development, mobile app development (iOS & Android), and strategic brand identity design. We focus on creating high-performance, scalable solutions tailored to your business goals.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Timelines vary based on project scope. A standard landing page might take 2-3 weeks, while a comprehensive web application could take 8-12 weeks. We provide a detailed timeline during the proposal phase so you know exactly what to expect.",
  },
  {
    question: "Do you offer ongoing support packages?",
    answer:
      "Yes! We believe in long-term partnerships. We offer several maintenance and support retainers that cover server monitoring, security updates, content updates, and priority bug fixing to keep your digital product running smoothly.",
  },
  {
    question: "How does the payment structure work?",
    answer:
      "Typically, we operate on a 50/50 or 40/30/30 split depending on the project size. A deposit secures your slot in our schedule. For larger, ongoing projects, we can discuss milestone-based payments or monthly billing cycles.",
  },
  {
    question: "Can you help with branding and logo design?",
    answer:
      "Absolutely. Our design team excels at building brands from the ground up. Whether you need a simple logo refresh or a complete brand style guide including typography, color palettes, and voice, we've got you covered.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#0d59f2]/25 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vh] bg-[#00f0ff]/15 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[20%] right-[30%] w-64 h-64 bg-purple-900/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        {/* Left Column: Header + FAQ List */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Page Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl font-light">
              Everything you need to know about Formly services, pricing, and how we help your business grow.
            </p>
          </div>

          {/* Accordions */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-white/[0.05] border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.3),0_0_20px_rgba(0,240,255,0.1)]"
                      : "bg-white/[0.03] border-white/10 hover:border-[#00f0ff]/50"
                  } backdrop-blur-xl border`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex cursor-pointer items-center justify-between gap-4 p-6 select-none w-full text-left"
                  >
                    <h3
                      className={`text-lg font-bold transition-colors ${
                        isOpen || openIndex === null
                          ? "text-white group-hover:text-[#00f0ff]"
                          : "text-white group-hover:text-[#00f0ff]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`text-gray-400 group-hover:text-white transition-all duration-300 flex items-center justify-center bg-white/5 rounded-full p-1 w-8 h-8 ${
                        isOpen ? "rotate-180 text-[#00f0ff]" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Sticky Support Card */}
        <div className="lg:w-[360px] flex-shrink-0">
          <div className="sticky top-28 flex flex-col gap-6">
            {/* Support Card */}
            <div className="rounded-3xl p-6 relative overflow-hidden group bg-white/[0.03] backdrop-blur-xl border border-white/10">
              {/* Decorative bg gradient inside card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00f0ff]/20 blur-[50px] rounded-full group-hover:bg-[#00f0ff]/30 transition-all duration-500"></div>
              <div className="relative z-10 flex flex-col gap-5">
                <div className="size-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center shadow-lg">
                  <HelpCircle className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Still have questions?</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Can't find the answer you're looking for? Our team is here to help with any specific inquiries.
                  </p>
                </div>
                <Link
                  href="https://m.me/formly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/btn relative flex items-center justify-center gap-2 bg-[#0d59f2] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(13,89,242,0.3)] hover:shadow-[0_4px_25px_rgba(13,89,242,0.5)] overflow-hidden"
                >
                  <span className="relative z-10">Chat with us</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                </Link>
              </div>
            </div>

            {/* Mini Promo Card */}
            <div className="rounded-3xl p-1 relative overflow-hidden group bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="bg-gray-900/80 rounded-[20px] p-5 h-full relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-5 h-5 text-[#39ff14]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#39ff14]">New Feature</span>
                </div>
                <p className="text-sm font-medium text-white">Check out our new Design System services.</p>
                <Link
                  href="/services"
                  className="text-xs text-gray-400 hover:text-white underline underline-offset-4 decoration-gray-600 hover:decoration-white transition-all"
                >
                  Learn more
                </Link>
              </div>
              {/* Animated Border Gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#39ff14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  animation: "spin 3s linear infinite",
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
