import {
  concept,
  indoorTiers,
  site,
  status,
  timeline,
  whyHere,
  yardClasses,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal-900 px-6 py-24 text-center text-sand-50 sm:px-10">
        <p className="eyebrow text-coral-400">{status.headline}</p>
        <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
          {site.name}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-sand-100">
          {status.blurb}
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm text-sand-200">
          <span>{concept.indoorUnits}</span>
          <span>·</span>
          <span>{concept.yardBays}</span>
        </div>
      </section>

      {/* Why here */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <p className="eyebrow text-center">Why Port Denison</p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
          A gap in the region
        </h2>
        <ul className="mx-auto mt-8 max-w-xl space-y-4 text-ink-700">
          {whyHere.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Indoor tiers */}
      <section className="bg-sand-100 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-center">Planned indoor units</p>
          <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
            Indicative pricing
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-sand-200 text-ink-900">
                  <th className="py-3 pr-4 font-display text-base font-normal">Tier</th>
                  <th className="py-3 pr-4 font-display text-base font-normal">Size</th>
                  <th className="py-3 font-display text-base font-normal">Planned rate</th>
                </tr>
              </thead>
              <tbody>
                {indoorTiers.map((t) => (
                  <tr key={t.name} className="border-b border-sand-200 text-ink-700">
                    <td className="py-3 pr-4">{t.name}</td>
                    <td className="py-3 pr-4">{t.size}</td>
                    <td className="py-3">{t.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Yard classes */}
      <section className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <p className="eyebrow text-center">Planned open-air yard</p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
          Caravan, boat &amp; vehicle bays
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-sand-200 text-ink-900">
                <th className="py-3 pr-4 font-display text-base font-normal">Class</th>
                <th className="py-3 pr-4 font-display text-base font-normal">Size</th>
                <th className="py-3 pr-4 font-display text-base font-normal">Typical use</th>
                <th className="py-3 font-display text-base font-normal">Planned rate</th>
              </tr>
            </thead>
            <tbody>
              {yardClasses.map((y) => (
                <tr key={y.name} className="border-b border-sand-200 text-ink-700">
                  <td className="py-3 pr-4">{y.name}</td>
                  <td className="py-3 pr-4">{y.size}</td>
                  <td className="py-3 pr-4">{y.use}</td>
                  <td className="py-3">{y.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-sm text-ink-700/70">
          All prices above are planning-stage estimates from Keystone
          Property Group&apos;s cost modelling — not a live rate card, and
          subject to change before opening.
        </p>
      </section>

      {/* Timeline + interest */}
      <section id="interest" className="bg-teal-900 px-6 py-20 text-center text-sand-50 sm:px-10">
        <p className="eyebrow text-coral-400">Timeline</p>
        <p className="mx-auto mt-3 max-w-xl text-lg">
          {timeline.bestCase}, or {timeline.worstCase.toLowerCase()}.
        </p>
        <p className="mx-auto mt-6 max-w-md text-sand-200">
          Want to be first to know when we open? Contact details for
          registering your interest are being finalised — check back soon.
        </p>
      </section>
    </>
  );
}
