"use client";

import { useState } from "react";
import { contact, officeHours, site } from "@/lib/content";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = `Quick message — ${site.name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, "", String(message ?? "")].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="fixed bottom-5 right-5 z-30">
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-sand-200 bg-sand-50 p-5 shadow-xl">
          <div className="flex items-start justify-between">
            <p className="font-display text-lg text-teal-700">Send us a message</p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-ink-700/60 hover:text-ink-900"
            >
              ✕
            </button>
          </div>
          <p className="mt-1 text-xs text-ink-700/70">
            There&apos;s no one monitoring live chat right now — this sends
            an email we&apos;ll reply to during office hours ({officeHours.hours},{" "}
            {officeHours.days}).
          </p>

          {sent ? (
            <p className="mt-4 text-sm text-ink-700">
              Your email app should have opened with your message ready to
              send — if it didn&apos;t, email us at {contact.email}.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-sand-200 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-teal-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full rounded-lg border border-sand-200 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-teal-500"
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                rows={3}
                required
                className="w-full rounded-lg border border-sand-200 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-coral-500 px-4 py-2 text-sm font-medium text-sand-50 transition hover:bg-coral-600"
              >
                Send
              </button>
            </form>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-sand-50 shadow-lg transition hover:bg-teal-500"
      >
        {open ? "Close" : "Chat with us"}
      </button>
    </div>
  );
}
