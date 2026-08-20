import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CallIcon, Mail01Icon, SentIcon } from "@hugeicons/core-free-icons"

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-cream px-6 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-semibold text-ink">
            <HugeiconsIcon icon={CallIcon} size={16} />
            Talk to an expert
          </span>
          <h2 className="mt-5 font-heading text-4xl font-bold text-ink sm:text-5xl">
            Not sure which app fits?
          </h2>
          <p className="mt-4 max-w-md text-slate">
            Tell us a bit about what you're building and we'll get back within
            one business day with a plan that fits.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate">
            <HugeiconsIcon icon={Mail01Icon} size={18} className="text-ink" />
            hello@kaagaz.app
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-7 sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-chip-green">
                <HugeiconsIcon icon={SentIcon} size={26} className="text-ink" />
              </span>
              <h3 className="text-xl font-bold text-ink">Thanks — message sent!</h3>
              <p className="text-sm text-slate">Our team will reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-ink" htmlFor="name">Name</label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-ink"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-ink" htmlFor="email">Email</label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-ink"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-ink" htmlFor="company">Company (optional)</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-ink"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-ink" htmlFor="message">What are you building?</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us a little about your project..."
                  className="resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-ink"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-ink/85"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
