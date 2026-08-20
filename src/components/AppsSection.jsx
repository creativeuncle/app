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

const APPS = [
  { name: "ChatMate", desc: "AI chat assistant for support & sales", icon: ChatBotIcon },
  { name: "PixelForge", desc: "Generate on-brand images in seconds", icon: AiImageIcon },
  { name: "InvoiceKit", desc: "Create & send invoices in a click", icon: InvoiceIcon },
  { name: "PaperTrim", desc: "Merge, split & compress PDFs", icon: PdfIcon },
  { name: "VoiceScribe", desc: "Turn voice notes into clean text", icon: AiVoiceIcon },
  { name: "CodeSprint", desc: "Your pair-programmer, on tap", icon: SourceCodeIcon },
  { name: "MetricLoop", desc: "Dashboards that update themselves", icon: AnalyticsIcon },
  { name: "BrandBrush", desc: "Logos & brand kits, made easy", icon: PaletteIcon },
  { name: "QuickQR", desc: "Trackable QR codes for anything", icon: QrCodeIcon },
  { name: "FlowPilot", desc: "Automate the busywork away", icon: WorkflowIcon },
]

export default function AppsSection() {
  return (
    <section id="apps" className="relative bg-paper px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">Apps</span>
          <h2 className="mt-2 font-heading text-4xl font-bold text-ink sm:text-5xl">
            One account, a whole toolbox
          </h2>
          <p className="mt-5 text-slate">
            Every app below shares your login, your billing and your data. Jump
            between them without missing a beat.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {APPS.map((app) => (
            <div
              key={app.name}
              className="group flex flex-col items-start gap-3 rounded-2xl bg-white p-5 soft-shadow transition hover:-translate-y-1 hover:soft-shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand">
                <HugeiconsIcon icon={app.icon} size={22} className="text-white" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-semibold leading-tight text-ink">{app.name}</h3>
                <p className="mt-1 text-sm text-slate">{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
