import { HugeiconsIcon } from "@hugeicons/react"
import {
  FlashIcon,
  ShieldIcon,
  CloudIcon,
  UserGroupIcon,
  Layers01Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons"
import Scribble from "./Scribble"

const FEATURES = [
  { title: "Blazing fast", desc: "Every app is built for speed — no bloated loaders, ever.", icon: FlashIcon },
  { title: "Bank-grade security", desc: "Your data is encrypted at rest and in transit, always.", icon: ShieldIcon },
  { title: "Always in sync", desc: "Cloud-native, so your work follows you across devices.", icon: CloudIcon },
  { title: "Built for teams", desc: "Invite teammates and share workspaces in seconds.", icon: UserGroupIcon },
  { title: "One unified stack", desc: "Same design, same shortcuts, across every single app.", icon: Layers01Icon },
  { title: "Ship in minutes", desc: "Templates and presets get you to launch, not to setup.", icon: Rocket01Icon },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative border-b-2 border-ink bg-lilac-light/40 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="relative inline-block font-heading text-4xl font-bold sm:text-5xl">
            Why teams stick around
          </h2>
          <p className="mt-5 text-ink/60">
            Less tab-switching, less duct tape. Just tools that work together, out of the box.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border-2 border-ink bg-white p-6 paper-shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-ink bg-cream">
                <HugeiconsIcon icon={f.icon} size={22} strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-ink/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Scribble name="arrow" className="absolute bottom-6 left-[6%] h-16 w-16 text-brand hidden lg:block" />
    </section>
  )
}
