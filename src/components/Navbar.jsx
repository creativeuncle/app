import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon, Menu01Icon, Cancel01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons"

const LINKS = [
  { label: "Apps", href: "#apps" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Help", href: "#help" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand">
            <HugeiconsIcon icon={SparklesIcon} size={18} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="font-heading text-2xl font-bold leading-none text-ink">Kaagaz</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-slate transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href="#login" className="text-[15px] font-semibold text-slate transition hover:text-ink">
            Login
          </a>
          <a
            href="#signup"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-brand-dark"
          >
            Get Started
            <HugeiconsIcon icon={ArrowRight02Icon} size={16} className="transition group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={22} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-base font-medium text-ink" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <a href="#login" className="rounded-full border border-ink/15 px-5 py-2 text-center text-[15px] font-semibold text-ink">
                Login
              </a>
              <a href="#signup" className="rounded-full bg-ink px-5 py-2 text-center text-[15px] font-semibold text-white">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
