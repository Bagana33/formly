"use client"

import Link from "next/link"
import { ArrowRight, ArrowDown, CheckCircle2, Rocket, Zap, FileText, Code, Search, Gauge } from "lucide-react"

const steps = [
  {
    day: "01",
    dayLabel: "Day One",
    title: "The Blueprint",
    subtitle: "Intake & Strategy",
    description: "We digest your brand vision instantly. You fill out our smart questionnaire, and we lock in the strategy. No endless meetings, just pure direction.",
    tasks: ["Brand Asset Collection", "Competitor Analysis", "Site Architecture Approval"],
    color: "primary",
    icon: FileText,
  },
  {
    day: "02",
    dayLabel: "Day Two",
    title: "The Engine",
    subtitle: "Design & Build",
    description: "Design and code merge in a 24-hour sprint. Our designers and developers work in parallel streams to bring the visual identity to life with clean, performant code.",
    tech: ["React", "Tailwind", "Figma", "Motion"],
    color: "secondary",
    icon: Code,
  },
  {
    day: "03",
    dayLabel: "Day Three",
    title: "Liftoff",
    subtitle: "QA & Launch",
    description: "Final polish. We connect your domain, set up analytics, and hand over the keys. Your site goes live to the world, fully optimized and ready to convert.",
    metrics: [
      { icon: Gauge, label: "100/100 Speed", color: "text-green-400" },
      { icon: Search, label: "SEO Ready", color: "text-blue-400" },
    ],
    color: "white",
    icon: Rocket,
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* Global Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#0dccf2]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00ff9d]/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 z-10 pt-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0dccf2] rounded-full blur-[100px] opacity-20 animate-pulse"></div>
        <div className="text-center max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse"></span>
            <span className="text-[#00ff9d] text-xs font-bold uppercase tracking-widest">The Formly Sprint</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
              Zero to Live
            </span>
            <span className="block relative inline-block">
              in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0dccf2] to-[#00ff9d] drop-shadow-[0_0_20px_rgba(13,204,242,0.5)]">
                72 Hours
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            High-velocity web development for modern brands.
            <br className="hidden md:block" />
            3 Days. No Fluff. Pure Performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#process"
              className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2 group"
            >
              See How It Works
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <Link
              href="/work"
              className="h-14 px-8 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps Container */}
      <div id="process" className="relative max-w-7xl mx-auto px-6 py-20 z-10 space-y-32 md:space-y-48">
        {/* Connecting Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0dccf2]/30 to-transparent -translate-x-1/2 hidden md:block z-0"></div>

        {/* Step 01 */}
        <section className="relative group">
          {/* Background Number */}
          <div className="absolute -top-20 -left-10 md:left-auto md:right-1/2 md:translate-x-1/2 text-[200px] md:text-[300px] font-black leading-none text-white/5 select-none pointer-events-none z-0">
            01
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
            {/* Visual Side (Left) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0dccf2]/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="w-full h-full rounded-2xl flex items-center justify-center p-8 relative overflow-hidden border border-[#0dccf2]/20 shadow-[0_0_50px_-12px_rgba(13,204,242,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-[#0f172a]/40 backdrop-blur-xl">
                  {/* Abstract 3D Questionnaire Representation */}
                  <div className="relative w-48 h-64 bg-slate-800 rounded-xl border border-slate-700 shadow-2xl transform -rotate-6 flex flex-col p-4">
                    <div className="w-full h-2 bg-slate-600 rounded mb-4"></div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-[#0dccf2]"></div>
                        <div className="h-2 w-20 bg-slate-600 rounded"></div>
                      </div>
                      <div className="h-1 w-full bg-slate-700 rounded"></div>
                      <div className="h-1 w-2/3 bg-slate-700 rounded"></div>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-[#00ff9d]"></div>
                        <div className="h-2 w-16 bg-slate-600 rounded"></div>
                      </div>
                      <div className="h-1 w-full bg-slate-700 rounded"></div>
                    </div>
                    <div className="absolute -right-4 top-10 bg-[#0dccf2] text-black text-xs font-bold px-3 py-1 rounded shadow-lg">
                      Input Received
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none"></div>
                  <FileText className="w-16 h-16 text-white absolute bottom-6 right-6 opacity-20" />
                </div>
              </div>
            </div>
            {/* Text Side (Right) */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-[#0dccf2] text-[#0dccf2] font-bold text-xl bg-[#0dccf2]/10 backdrop-blur-md">
                  01
                </span>
                <h2 className="text-[#0dccf2] font-bold tracking-widest uppercase text-sm">Day One</h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The Blueprint <br />
                <span className="text-gray-500">Intake & Strategy</span>
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
                We digest your brand vision instantly. You fill out our smart questionnaire, and we lock in the
                strategy. No endless meetings, just pure direction.
              </p>
              <ul className="space-y-3 mb-8">
                {steps[0].tasks.map((task) => (
                  <li key={task} className="flex items-center gap-3 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-[#0dccf2]" />
                    {task}
                  </li>
                ))}
              </ul>
              <button className="text-white border-b border-[#0dccf2] pb-1 hover:text-[#0dccf2] transition-colors flex items-center gap-2">
                Learn about intake <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Step 02 */}
        <section className="relative group">
          {/* Background Number */}
          <div className="absolute -top-20 -right-10 md:left-1/2 md:-translate-x-1/2 text-[200px] md:text-[300px] font-black leading-none text-white/5 select-none pointer-events-none z-0">
            02
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
            {/* Text Side (Left) */}
            <div className="w-full md:w-1/2 order-1">
              <div className="flex items-center gap-4 mb-4 md:flex-row-reverse md:justify-end">
                <h2 className="text-[#00ff9d] font-bold tracking-widest uppercase text-sm">Day Two</h2>
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-[#00ff9d] text-[#00ff9d] font-bold text-xl bg-[#00ff9d]/10 backdrop-blur-md">
                  02
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight md:text-right">
                The Engine <br />
                <span className="text-gray-500">Design & Build</span>
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8 md:ml-auto md:text-right">
                Design and code merge in a 24-hour sprint. Our designers and developers work in parallel streams to
                bring the visual identity to life with clean, performant code.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end mb-8">
                {steps[1].tech?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-800 text-gray-400 text-xs border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Visual Side (Right) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#00ff9d]/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="w-full h-full rounded-2xl flex items-center justify-center p-0 relative overflow-hidden border border-[#00ff9d]/20 shadow-[0_0_50px_-12px_rgba(0,255,157,0.3)] hover:scale-[1.02] transition-transform duration-500 group-hover:border-[#00ff9d]/40 bg-[#0f172a]/40 backdrop-blur-xl">
                  {/* Abstract Code/Design Interface */}
                  <div className="w-full h-full bg-[#0d1117] flex flex-col font-mono text-xs p-6 relative">
                    <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2 opacity-80">
                      <p className="text-purple-400">
                        const <span className="text-yellow-300">FormlySprint</span> = <span className="text-blue-300">async</span> () =&gt; {"{"}
                      </p>
                      <p className="pl-4 text-white">
                        await <span className="text-blue-300">designSystem</span>.init();
                      </p>
                      <p className="pl-4 text-white">
                        const <span className="text-green-400">website</span> = <span className="text-blue-300">build</span>(
                        <span className="text-orange-300">'fast'</span>);
                      </p>
                      <p className="pl-4 text-white">
                        return <span className="text-green-400">website</span>.deploy();
                      </p>
                      <p className="text-purple-400">{"}"}</p>
                    </div>
                    {/* Floating UI Element */}
                    <div
                      className="absolute bottom-8 right-8 bg-[#0f172a] border border-[#00ff9d]/50 p-4 rounded-lg shadow-2xl w-40 animate-bounce"
                      style={{ animationDuration: "3s" }}
                    >
                      <div className="h-24 bg-gradient-to-br from-[#0dccf2] to-[#00ff9d] rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-700 rounded mb-1"></div>
                      <div className="h-2 w-1/2 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <Code className="w-16 h-16 text-[#00ff9d] absolute top-6 right-6 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 03 */}
        <section className="relative group">
          {/* Background Number */}
          <div className="absolute -top-20 -left-10 md:left-auto md:right-1/2 md:translate-x-1/2 text-[200px] md:text-[300px] font-black leading-none text-white/5 select-none pointer-events-none z-0">
            03
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
            {/* Visual Side (Left) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/20 shadow-[0_0_50px_-12px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-transform duration-500 bg-[#0f172a]/40 backdrop-blur-xl">
                  {/* Rocket / Launch Visual */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full border-4 border-white/20 flex items-center justify-center relative bg-black/40 backdrop-blur-sm">
                      <Rocket className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                      <div
                        className="absolute inset-0 rounded-full border-t-4 border-[#0dccf2] animate-spin"
                        style={{ animationDuration: "2s" }}
                      ></div>
                    </div>
                    <div className="mt-6 px-6 py-2 bg-gradient-to-r from-[#0dccf2] to-[#00ff9d] rounded text-black font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(13,204,242,0.6)]">
                      System Live
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text Side (Right) */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white font-bold text-xl bg-white/10 backdrop-blur-md">
                  03
                </span>
                <h2 className="text-white font-bold tracking-widest uppercase text-sm">Day Three</h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Liftoff <br />
                <span className="text-gray-500">QA & Launch</span>
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
                Final polish. We connect your domain, set up analytics, and hand over the keys. Your site goes live to
                the world, fully optimized and ready to convert.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {steps[2].metrics?.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <metric.icon className={`w-6 h-6 ${metric.color} mb-2`} />
                    <p className="text-white text-sm font-bold">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-[#0dccf2]/20 to-transparent rounded-full blur-[100px] opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready to break the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-[#0dccf2] animate-pulse">
              speed limit?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Stop waiting months for a website. Get a premium, high-performance build in just 72 hours.
          </p>
          <Link
            href="https://m.me/formly"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center"
          >
            <div className="absolute transition-all duration-200 rounded-full -inset-1 bg-gradient-to-r from-[#0dccf2] to-[#00ff9d] blur-lg opacity-70 group-hover:opacity-100 group-hover:-inset-2"></div>
            <div className="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-[#020617] transition-all duration-200 bg-white rounded-full">
              Start Your 3-Day Sprint
              <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
