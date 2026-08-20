import { HugeiconsIcon } from "@hugeicons/react"
import {
  FlashIcon,
  ShieldIcon,
  CloudIcon,
  UserGroupIcon,
  Layers01Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons"

const FEATURES = [
  { title: "Blazing fast", desc: "Every app is built for speed — no bloated loaders, ever.", icon: FlashIcon, highlight: true },
  { title: "Bank-grade security", desc: "Your data is encrypted at rest and in transit, always.", icon: ShieldIcon },
  { title: "Always in sync", desc: "Cloud-native, so your work follows you across devices.", icon: CloudIcon },
  { title: "Built for teams", desc: "Invite teammates and share workspaces in seconds.", icon: UserGroupIcon },
  { title: "One unified stack", desc: "Same design, same shortcuts, across every single app.", icon: Layers01Icon },
  { title: "Ship in minutes", desc: "Templates and presets get you to launch, not to setup.", icon: Rocket01Icon },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-cream px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">Features</span>
          <h2 className="mt-2 font-heading text-4xl font-bold text-ink sm:text-5xl">
            Why teams stick around
          </h2>
          <p className="mt-5 text-slate">
            Less tab-switching, less duct tape. Just tools that work together, out of the box.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl p-6 transition hover:-translate-y-1 ${
                f.highlight ? "gradient-brand text-white soft-shadow-lg" : "bg-white text-ink soft-shadow"
              }`}
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl ${
                  f.highlight ? "bg-white/15" : "bg-brand-light"
                }`}
              >
                <HugeiconsIcon icon={f.icon} size={22} strokeWidth={2} className={f.highlight ? "text-white" : "text-brand"} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className={`mt-1.5 text-sm ${f.highlight ? "text-white/80" : "text-slate"}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
