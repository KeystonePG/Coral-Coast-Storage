import type { Metadata } from "next";
import { aboutUs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `About us | ${site.name}`,
};

export default function AboutPage() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow text-center">About us</p>
        <h1 className="mt-3 text-center font-display text-4xl text-ink-900">
          A planned project, built around a real gap
        </h1>
        <div className="mt-10 space-y-6 text-lg text-ink-700">
          <p>{aboutUs.intro}</p>
          <p>{aboutUs.approach}</p>
          <p>{aboutUs.transparency}</p>
        </div>
        <div className="mt-10 rounded-2xl bg-sand-100 p-6">
          <p className="eyebrow text-gold-500">Where things stand</p>
          <p className="mt-2 text-ink-700">{aboutUs.status}</p>
        </div>
      </div>
    </section>
  );
}
