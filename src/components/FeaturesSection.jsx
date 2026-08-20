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
  { title: "Blazing fast", desc: "Every app is built for speed — no bloated loaders, ever.", icon: FlashIcon, chip: "bg-chip-yellow", highlight: true },
  { title: "Bank-grade security", desc: "Your data is encrypted at rest and in transit, always.", icon: ShieldIcon, chip: "bg-chip-blue" },
  { title: "Always in sync", desc: "Cloud-native, so your work follows you across devices.", icon: CloudIcon, chip: "bg-chip-pink" },
  { title: "Built for teams", desc: "Invite teammates and share workspaces in seconds.", icon: UserGroupIcon, chip: "bg-chip-green" },
  { title: "One unified stack", desc: "Same design, same shortcuts, across every single app.", icon: Layers01Icon, chip: "bg-chip-blue" },
  { title: "Ship in minutes", desc: "Templates and presets get you to launch, not to setup.", icon: Rocket01Icon, chip: "bg-chip-pink" },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-offwhite px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-slate">Features</span>
          <h2 className="mt-2 font-heading text-4xl font-bold text-ink sm:text-5xl">
            Why teams stick around
          </h2>
          <p className="mt-5 text-slate">
            Less tab-switching, less duct tape. Just tools that work together, out of the box.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`card-hover rounded-xl p-6 ${
                f.highlight ? "bg-ink text-white" : "border border-border bg-white text-ink"
              }`}
            >
              <span
                className={`grid h-10 w-10 place-items-center rounded-lg ${
                  f.highlight ? "bg-white/10" : f.chip
                }`}
              >
                <HugeiconsIcon icon={f.icon} size={20} strokeWidth={1.8} className={f.highlight ? "text-white" : "text-ink"} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className={`mt-1.5 text-sm ${f.highlight ? "text-white/70" : "text-slate"}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
