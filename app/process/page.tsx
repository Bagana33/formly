"use client"

import Link from "next/link"
import { Layers, Palette, Rocket } from "lucide-react"

const steps = [
  {
    day: "01",
    label: "STRATEGY",
    title: "Бүтэц",
    description: "Сайтын газрын зураг болон гол бүтцийг зөв урсгалд зориулж тодорхойлох. Хэрэглэгчийн замыг хамгийн оновчтойгоор төлөвлөнө.",
    icon: Layers,
    iconColor: "text-[#10b981]",
    iconGlow: "icon-glow-emerald",
    dayColor: "text-[#10b981]",
    dotColor: "bg-[#10b981]",
    delay: "0s",
  },
  {
    day: "02",
    label: "DESIGN",
    title: "Харагдах Бүтэц",
    description: "Өндөр чанартай дүрслэл хийж, контентыг саадгүй нэгтгэх. Таны брэндийн үнэ цэнийг илтгэх орчин үеийн дизайн шийдлүүд.",
    icon: Palette,
    iconColor: "text-blue-400",
    iconGlow: "icon-glow-azure",
    dayColor: "text-blue-400",
    dotColor: "bg-blue-400",
    delay: "0.5s",
  },
  {
    day: "03",
    label: "DEPLOY",
    title: "Нээлт",
    description: "Нарийвчилсан чанарын баталгаажуулалт, дараа нь шууд амьд нээлт. Техникийн бүрэн гүйцэтгэлийг ханган зах зээлд нэвтрүүлнэ.",
    icon: Rocket,
    iconColor: "text-[#10b981]",
    iconGlow: "icon-glow-emerald",
    dayColor: "text-[#10b981]",
    dotColor: "bg-[#10b981]",
    delay: "1s",
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* Mesh Gradient Background */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-80"
        style={{
          background: `
            radial-gradient(at 0% 0%, hsla(160,84%,15%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(210,80%,10%,1) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(160,84%,15%,1) 0, transparent 50%),
            radial-gradient(at 0% 100%, hsla(210,80%,10%,1) 0, transparent 50%),
            radial-gradient(at 100% 100%, hsla(160,84%,15%,1) 0, transparent 50%)
          `
        }}
      ></div>

      {/* Additional Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#10b981]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full"></div>
      </div>

      {/* Main Content */}
      <main className="relative px-6 py-24 md:py-32 overflow-hidden min-h-screen">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-[#10b981]/10 text-[#10b981] font-bold text-sm tracking-widest uppercase mb-4 border border-[#10b981]/20">
            Process
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-blue-400 dark:from-[#10b981] dark:via-white dark:to-blue-400">
            3 Хоногийн Протокол
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 font-medium">
            Бид таны төслийг ердөө 72 цагийн дотор санаанаас бодит бүтээл болгон хувиргана. Шинэ үеийн хурд, чанарын төгс хослол.
          </p>
        </div>

        {/* Neon Path - Connecting Line (Desktop Only) */}
        <div 
          className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] z-0 -translate-y-1/2 max-w-6xl mx-auto"
          style={{ 
            background: 'linear-gradient(90deg, transparent, #10b981, #3b82f6, transparent)',
            boxShadow: '0 0 20px rgba(16,185,129,0.5), 0 0 40px rgba(59,130,246,0.3)'
          }}
        ></div>

        {/* Process Steps Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <div key={step.day} className="flex flex-col items-center">
                {/* Icon Container with Glass Card Effect */}
                <div
                  className={`icon-container glass-card ${step.iconGlow} floating relative w-[100px] h-[100px] flex items-center justify-center rounded-3xl mb-8 transition-all duration-400 hover:-translate-y-2`}
                  style={{ 
                    animationDelay: step.delay,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  <IconComponent className={`text-5xl ${step.iconColor}`} />
                </div>

                {/* Glass Card */}
                <div 
                  className="glass-card p-8 rounded-[2.5rem] text-center w-full transition-all duration-400"
                  style={{
                    background: 'rgba(15, 23, 42, 0.3)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{step.description}</p>
                  <div className={`flex items-center justify-center space-x-2 ${step.dayColor} font-bold text-sm`}>
                    <span>ӨДӨР {step.day}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${step.dotColor}`}></div>
                    <span>{step.label}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-24 text-center relative z-10">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSY_U2Qzfw_HhNcW0HtBqZCq8Un5lr8Fp9Mw7aHB2-uKL4pA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#10b981] to-blue-600 rounded-full font-bold text-lg text-white hover:scale-105 transition-all shadow-xl shadow-[#10b981]/20 active:scale-95"
          >
            Төсөл эхлүүлэх
          </Link>
        </div>
      </main>
    </>
  )
}
