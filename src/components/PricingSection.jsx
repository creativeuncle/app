import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"
import Scribble from "./Scribble"

const PLANS = [
  {
    name: "Starter",
    tagline: "For solo builders trying things out",
    monthly: 0,
    yearly: 0,
    features: ["3 apps included", "Community support", "1 workspace", "Basic templates"],
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "For makers shipping real products",
    monthly: 29,
    yearly: 24,
    features: ["All 10+ apps unlocked", "Priority support", "5 workspaces", "Custom branding", "Team collaboration"],
    highlight: true,
  },
  {
    name: "Scale",
    tagline: "For teams that need more power",
    monthly: 79,
    yearly: 65,
    features: ["Everything in Growth", "Dedicated onboarding", "Unlimited workspaces", "SSO & audit logs", "API access"],
    highlight: false,
  },
]

export default function PricingSection() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="relative border-b-2 border-ink bg-paper px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">Simple, honest pricing</h2>
          <p className="mt-5 text-ink/60">One plan, every app. Cancel any time, no surprises.</p>
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <span className={`text-sm font-semibold ${!yearly ? "text-ink" : "text-ink/40"}`}>Monthly</span>
          <button
            onClick={() => setYearly((v) => !v)}
            className="relative h-8 w-16 rounded-full border-2 border-ink bg-white"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full border-2 border-ink bg-brand transition-all ${
                yearly ? "left-[calc(100%-1.75rem)]" : "left-0.5"
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${yearly ? "text-ink" : "text-ink/40"}`}>
            Yearly{" "}
            <span className="rounded-full border-2 border-ink bg-mint-light px-2 py-0.5 text-xs">save 20%</span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2 border-ink p-7 paper-shadow ${
                plan.highlight ? "bg-brand text-white" : "bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border-2 border-ink bg-sun px-4 py-1 text-xs font-bold text-ink">
                  Most popular
                </span>
              )}
              <h3 className="font-heading text-3xl font-bold">{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.highlight ? "text-white/80" : "text-ink/60"}`}>{plan.tagline}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-extrabold">${yearly ? plan.yearly : plan.monthly}</span>
                <span className={`pb-1 text-sm ${plan.highlight ? "text-white/80" : "text-ink/50"}`}>/mo</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={18}
                      className={plan.highlight ? "text-white" : "text-mint"}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#signup"
                className={`mt-8 rounded-full border-2 border-ink px-5 py-3 text-center text-sm font-bold transition hover:-translate-y-0.5 ${
                  plan.highlight ? "bg-ink text-white hover:bg-black" : "bg-cream hover:bg-sun-light"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>

      <Scribble name="check" className="absolute right-[6%] top-16 h-14 w-14 text-mint hidden lg:block" />
    </section>
  )
}
