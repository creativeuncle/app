import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  CallIcon,
  ChatBotIcon,
  AiImageIcon,
  InvoiceIcon,
  AnalyticsIcon,
  CheckmarkCircle02Icon,
  StarIcon,
} from "@hugeicons/core-free-icons"

const MINI_APPS = [
  { icon: ChatBotIcon, bg: "bg-brand-light", tint: "text-brand" },
  { icon: AiImageIcon, bg: "bg-blue-50", tint: "text-sky" },
  { icon: InvoiceIcon, bg: "bg-brand-light", tint: "text-brand" },
  { icon: AnalyticsIcon, bg: "bg-blue-50", tint: "text-sky" },
]

const BARS = [30, 55, 40, 70, 50, 85, 65]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-blob absolute inset-0" />

      <div className="relative mx-auto max-w-5xl px-6 pt-16 text-center sm:pt-24">
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 soft-shadow">
          <HugeiconsIcon icon={StarIcon} size={16} className="text-brand" strokeWidth={0} fill="currentColor" />
          <span className="text-sm font-semibold text-slate">10+ tiny apps, one home</span>
        </div>

        <h1 className="font-heading text-5xl font-bold leading-[1.05] text-ink sm:text-7xl">
          Build, ship &amp; sell your <span className="text-brand">SaaS ideas</span> faster.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate">
          One workspace for every micro-app you're launching — AI tools, generators
          and utilities, all under one roof, one login and one bill.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#signup"
            className="group inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-base font-bold text-white soft-shadow-lg transition hover:-translate-y-0.5"
          >
            Start Now — It's free
            <HugeiconsIcon icon={ArrowRight02Icon} size={20} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-ink soft-shadow transition hover:-translate-y-0.5"
          >
            <HugeiconsIcon icon={CallIcon} size={20} className="text-brand" />
            Talk to expert
          </a>
        </div>

        <p className="mt-5 text-sm text-slate/70">No credit card needed · Free forever plan</p>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl px-6 pb-16 sm:mt-20 sm:pb-20">
        <div className="relative rounded-3xl bg-white p-4 soft-shadow-lg sm:p-6">
          <div className="flex items-center gap-1.5 pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-slate/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate/20" />
            <span className="ml-3 text-xs font-medium text-slate/50">kaagaz.app/dashboard</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr]">
            <div className="rounded-2xl gradient-brand p-5 text-white">
              <p className="text-xs font-medium text-white/70">Apps used this week</p>
              <p className="mt-1 text-3xl font-extrabold">12,845</p>
              <div className="mt-5 flex items-end gap-1.5">
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className="w-full rounded-t-sm bg-white/40 last:bg-white"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-4 gap-2">
                {MINI_APPS.map((app, i) => (
                  <span key={i} className={`grid h-11 place-items-center rounded-xl ${app.bg}`}>
                    <HugeiconsIcon icon={app.icon} size={18} className={app.tint} />
                  </span>
                ))}
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2.5 rounded-2xl bg-cream p-4">
                <div className="flex items-center gap-2 text-sm">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="text-brand" />
                  <span className="text-ink/80">Invoice sent to client</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="text-brand" />
                  <span className="text-ink/80">3 images generated</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="text-brand" />
                  <span className="text-ink/80">Workflow automated</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 soft-shadow sm:flex">
            <div className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full border-2 border-white bg-brand" />
              <span className="h-6 w-6 rounded-full border-2 border-white bg-sky" />
              <span className="h-6 w-6 rounded-full border-2 border-white bg-ink" />
            </div>
            <span className="text-xs font-semibold text-ink">800+ happy users</span>
          </div>
        </div>
      </div>
    </section>
  )
}
