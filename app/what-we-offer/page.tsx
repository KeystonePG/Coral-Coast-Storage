import type { Metadata } from "next";
import Link from "next/link";
import {
  competitiveEdge,
  driveUpAccess,
  indoorTiers,
  insuranceNote,
  site,
  yardClasses,
} from "@/lib/content";

export const metadata: Metadata = {
  title: `What we offer | ${site.name}`,
};

export default function WhatWeOfferPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 text-center sm:px-10">
        <p className="eyebrow">What we're planning</p>
        <h1 className="mt-3 font-display text-4xl text-ink-900">
          Indoor units and an open-air yard, side by side
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-700">
          Every figure below is a planning-stage estimate from Keystone
          Property Group&apos;s cost modelling — not a live rate card, and
          subject to change before opening.
        </p>
      </section>

      {/* Indoor tiers */}
      <section className="px-6 py-12 sm:px-10">
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
                  <th className="py-3 pr-4 font-display text-base font-normal">Roughly fits</th>
                  <th className="py-3 font-display text-base font-normal">Planned rate</th>
                </tr>
              </thead>
              <tbody>
                {indoorTiers.map((t) => (
                  <tr key={t.name} className="border-b border-sand-200 text-ink-700">
                    <td className="py-3 pr-4">{t.name}</td>
                    <td className="py-3 pr-4">{t.size}</td>
                    <td className="py-3 pr-4">{t.fits}</td>
                    <td className="py-3">{t.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-ink-700/60">
            &quot;Roughly fits&quot; is a general sizing guide, not a
            measurement of this specific site — a good starting point, not a
            guarantee.
          </p>
        </div>
      </section>

      {/* Yard classes */}
      <section className="bg-sand-100 px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-4xl">
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
        </div>
      </section>

      {/* Drive-up access */}
      <section className="px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-500">Access</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900">{driveUpAccess.headline}</h2>
          <p className="mt-4 text-ink-700">{driveUpAccess.blurb}</p>
          <p className="mt-4 text-sm text-ink-700/70">{driveUpAccess.note}</p>
        </div>
      </section>

      {/* Competitive edge */}
      <section className="bg-teal-900 px-6 py-14 text-sand-50 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow text-center text-coral-400">How we compare</p>
          <h2 className="mt-3 text-center font-display text-3xl">
            Coral Coast vs. the regional Geraldton cluster
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-sand-50/20">
                  <th className="py-3 pr-4 font-display text-base font-normal">Factor</th>
                  <th className="py-3 pr-4 font-display text-base font-normal text-sand-200">
                    Regional cluster (~65km away)
                  </th>
                  <th className="py-3 font-display text-base font-normal text-coral-400">
                    Coral Coast (planned)
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitiveEdge.map((c) => (
                  <tr key={c.factor} className="border-b border-sand-50/10 align-top">
                    <td className="py-4 pr-4 font-medium">{c.factor}</td>
                    <td className="py-4 pr-4 text-sand-200">{c.region}</td>
                    <td className="py-4 text-sand-50">{c.coralCoast}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-2xl rounded-2xl bg-sand-100 p-6 text-center">
          <p className="eyebrow">Please note</p>
          <p className="mt-2 text-sm text-ink-700">{insuranceNote}</p>
        </div>
      </section>

      <section className="px-6 pb-20 text-center sm:px-10">
        <Link
          href="/enquire"
          className="inline-block rounded-full bg-coral-500 px-6 py-3 text-sm font-medium text-sand-50 transition hover:bg-coral-600"
        >
          Register interest
        </Link>
      </section>
    </>
  );
}
