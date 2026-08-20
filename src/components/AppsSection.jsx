import { HugeiconsIcon } from "@hugeicons/react"
import {
  ChatBotIcon,
  AiImageIcon,
  InvoiceIcon,
  PdfIcon,
  AiVoiceIcon,
  SourceCodeIcon,
  AnalyticsIcon,
  PaletteIcon,
  QrCodeIcon,
  WorkflowIcon,
} from "@hugeicons/core-free-icons"
import Scribble from "./Scribble"

const APPS = [
  { name: "ChatMate", desc: "AI chat assistant for support & sales", icon: ChatBotIcon, bg: "bg-brand-light", ring: "text-brand" },
  { name: "PixelForge", desc: "Generate on-brand images in seconds", icon: AiImageIcon, bg: "bg-lilac-light", ring: "text-lilac" },
  { name: "InvoiceKit", desc: "Create & send invoices in a click", icon: InvoiceIcon, bg: "bg-mint-light", ring: "text-mint" },
  { name: "PaperTrim", desc: "Merge, split & compress PDFs", icon: PdfIcon, bg: "bg-sun-light", ring: "text-sun" },
  { name: "VoiceScribe", desc: "Turn voice notes into clean text", icon: AiVoiceIcon, bg: "bg-brand-light", ring: "text-brand" },
  { name: "CodeSprint", desc: "Your pair-programmer, on tap", icon: SourceCodeIcon, bg: "bg-lilac-light", ring: "text-lilac" },
  { name: "MetricLoop", desc: "Dashboards that update themselves", icon: AnalyticsIcon, bg: "bg-mint-light", ring: "text-mint" },
  { name: "BrandBrush", desc: "Logos & brand kits, made easy", icon: PaletteIcon, bg: "bg-sun-light", ring: "text-sun" },
  { name: "QuickQR", desc: "Trackable QR codes for anything", icon: QrCodeIcon, bg: "bg-brand-light", ring: "text-brand" },
  { name: "FlowPilot", desc: "Automate the busywork away", icon: WorkflowIcon, bg: "bg-lilac-light", ring: "text-lilac" },
]

export default function AppsSection() {
  return (
    <section id="apps" className="relative border-b-2 border-ink bg-paper px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="relative inline-flex items-center gap-3 font-heading text-4xl font-bold sm:text-5xl">
            <Scribble name="sparkle" className="h-8 w-8 shrink-0 text-sun sm:h-10 sm:w-10" />
            One account, a whole toolbox
          </h2>
          <p className="mt-5 text-ink/60">
            Every app below shares your login, your billing and your data. Jump between
            them without missing a beat.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {APPS.map((app) => (
            <div
              key={app.name}
              className="group flex flex-col items-start gap-3 rounded-2xl border-2 border-ink bg-white p-5 paper-shadow-sm transition hover:-translate-y-1 hover:bg-cream"
            >
              <span className={`grid h-12 w-12 place-items-center rounded-xl border-2 border-ink ${app.bg}`}>
                <HugeiconsIcon icon={app.icon} size={24} className={app.ring} strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-semibold leading-tight">{app.name}</h3>
                <p className="mt-1 text-sm text-ink/60">{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
