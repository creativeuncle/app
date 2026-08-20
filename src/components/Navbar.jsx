import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"

const LINKS = [
  { label: "Apps", href: "#apps" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Help", href: "#help" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border-2 border-ink bg-brand paper-shadow-sm">
            <HugeiconsIcon icon={SparklesIcon} size={20} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="font-heading text-2xl font-bold leading-none">Kaagaz</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-ink/80 transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#login" className="px-3 py-2 text-[15px] font-semibold text-ink/80 hover:text-ink">
            Login
          </a>
          <a
            href="#signup"
            className="rounded-full border-2 border-ink bg-ink px-5 py-2 text-[15px] font-semibold text-white paper-shadow-sm transition hover:-translate-y-0.5 hover:bg-brand"
          >
            Sign up
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={22} />
        </button>
      </nav>

      {open && (
        <div className="border-t-2 border-ink bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-base font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <a href="#login" className="rounded-full border-2 border-ink px-5 py-2 text-center text-[15px] font-semibold">
                Login
              </a>
              <a href="#signup" className="rounded-full border-2 border-ink bg-ink px-5 py-2 text-center text-[15px] font-semibold text-white">
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
