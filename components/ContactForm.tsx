"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ dict }: Props) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          phone: data.get("phone"),
          process: data.get("process"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-3 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-blue-100">{dict.contactForm.name}</span>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-blue-200/60 focus:border-white/40 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-blue-100">
            {dict.contactForm.company}
          </span>
          <input
            name="company"
            required
            className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-blue-200/60 focus:border-white/40 focus:outline-none"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-xs font-medium text-blue-100">{dict.contactForm.phone}</span>
        <input
          name="phone"
          type="tel"
          required
          className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-blue-200/60 focus:border-white/40 focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-medium text-blue-100">{dict.contactForm.process}</span>
        <select
          name="process"
          required
          defaultValue=""
          className="w-full rounded-xl border border-white/20 bg-blue-700 px-3 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none"
        >
          <option value="" disabled>
            {dict.contactForm.processPlaceholder}
          </option>
          {dict.contactForm.processOptions.map((opt) => (
            <option key={opt} value={opt} className="text-navy-950">
              {opt}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 disabled:opacity-60"
      >
        {state === "submitting" ? dict.contactForm.submitting : dict.contactForm.submit}
      </button>
      {state === "success" && (
        <p className="text-center text-sm text-emerald-200">{dict.contactForm.success}</p>
      )}
      {state === "error" && (
        <p className="text-center text-sm text-red-200">{dict.contactForm.error}</p>
      )}
    </form>
  );
}
