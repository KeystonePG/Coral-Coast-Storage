"use client";

import { useState } from "react";
import { contact, indoorTiers, site, yardClasses } from "@/lib/content";

const inputClass =
  "w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-2.5 text-ink-900 outline-none transition focus:border-teal-500";

export default function InterestForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const spaceType = form.get("spaceType");
    const moveInDate = form.get("moveInDate");
    const message = form.get("message");

    const subject = `Booking request — ${site.name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Space requested: ${spaceType}`,
      `Preferred move-in date: ${moveInDate || "Not specified"}`,
      "",
      "Message:",
      String(message ?? ""),
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-ink-700">
            Full name
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-ink-700">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-ink-700">
            Phone
          </label>
          <input id="phone" name="phone" className={inputClass} />
        </div>
        <div>
          <label htmlFor="moveInDate" className="mb-1.5 block text-sm text-ink-700">
            Preferred move-in date
          </label>
          <input id="moveInDate" name="moveInDate" type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="spaceType" className="mb-1.5 block text-sm text-ink-700">
          Space you're interested in
        </label>
        <select id="spaceType" name="spaceType" className={inputClass}>
          <optgroup label="Indoor units">
            {indoorTiers.map((t) => (
              <option key={t.name} value={`Indoor unit — ${t.name} (${t.size})`}>
                Indoor — {t.name} ({t.size})
              </option>
            ))}
          </optgroup>
          <optgroup label="Open-air yard bays">
            {yardClasses.map((y) => (
              <option key={y.name} value={`Yard bay — ${y.name} (${y.size})`}>
                Yard — {y.name} ({y.size}, {y.use})
              </option>
            ))}
          </optgroup>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-ink-700">
          Message (optional)
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-coral-500 px-5 py-2.5 text-sm font-medium text-sand-50 transition hover:bg-coral-600 sm:w-auto"
      >
        Submit booking request
      </button>

      {sent && (
        <p className="text-sm text-ink-700">
          Your email app should have opened with your details ready to send —
          if it didn&apos;t, email us directly at {contact.email}. Since
          we&apos;re not open yet, this joins our interest list rather than
          confirming a booking.
        </p>
      )}
    </form>
  );
}
