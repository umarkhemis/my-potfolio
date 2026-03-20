"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm text-neutral-300">Name</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-neutral-300">Email</label>
          <input
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-neutral-300">Message</label>
          <textarea
            rows={6}
            className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
            placeholder="Tell me about your project or opportunity"
          />
        </div>

        <button
          type="submit"
          className="rounded-2xl bg-white px-5 py-3 font-medium text-black"
        >
          Send Message
        </button>

        {submitted ? (
          <p className="text-sm text-emerald-400">
            Message captured. Next step: connect this form to Formspree, Getform, or your backend API.
          </p>
        ) : null}
      </form>
    </div>
  );
}
