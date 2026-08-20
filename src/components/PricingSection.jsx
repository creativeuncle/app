import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

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
    <section id="pricing" className="relative bg-paper px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">Pricing</span>
          <h2 className="mt-2 font-heading text-4xl font-bold text-ink sm:text-5xl">Simple, honest pricing</h2>
          <p className="mt-5 text-slate">One plan, every app. Cancel any time, no surprises.</p>
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <span className={`text-sm font-semibold ${!yearly ? "text-ink" : "text-slate/50"}`}>Monthly</span>
          <button
            onClick={() => setYearly((v) => !v)}
            className="relative h-8 w-16 rounded-full bg-ink/10"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full gradient-brand transition-all ${
                yearly ? "left-[calc(100%-1.75rem)]" : "left-1"
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${yearly ? "text-ink" : "text-slate/50"}`}>
            Yearly{" "}
            <span className="rounded-full bg-brand-light px-2 py-0.5 text-xs text-brand-dark">save 20%</span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-7 transition hover:-translate-y-1 ${
                plan.highlight ? "gradient-brand text-white soft-shadow-lg md:scale-105" : "bg-white text-ink soft-shadow"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-brand-dark soft-shadow">
                  Most popular
                </span>
              )}
              <h3 className="font-heading text-3xl font-bold">{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.highlight ? "text-white/80" : "text-slate"}`}>{plan.tagline}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-extrabold">${yearly ? plan.yearly : plan.monthly}</span>
                <span className={`pb-1 text-sm ${plan.highlight ? "text-white/80" : "text-slate/70"}`}>/mo</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={18}
                      className={plan.highlight ? "text-white" : "text-brand"}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#signup"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-bold transition hover:-translate-y-0.5 ${
                  plan.highlight ? "bg-white text-brand-dark" : "bg-ink text-white hover:bg-brand-dark"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
