"use client";

import { useState } from "react";
import { contact, site } from "@/lib/content";

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
    const interest = form.get("interest");
    const message = form.get("message");

    const subject = `Registering interest — ${site.name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interested in: ${interest}`,
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
          <label htmlFor="interest" className="mb-1.5 block text-sm text-ink-700">
            Interested in
          </label>
          <select id="interest" name="interest" className={inputClass}>
            <option value="Indoor unit">Indoor unit</option>
            <option value="Open-air yard bay (car/ute/van)">Open-air yard bay (car/ute/van)</option>
            <option value="Open-air yard bay (boat/caravan/truck)">
              Open-air yard bay (boat/caravan/truck)
            </option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
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
        Register interest
      </button>

      {sent && (
        <p className="text-sm text-ink-700">
          Your email app should have opened with your details ready to send —
          if it didn&apos;t, email us directly at {contact.email}.
        </p>
      )}
    </form>
  );
}
