"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const interests = [
  "Commodity Futures",
  "Currency & Indices",
  "Portfolio Management",
  "Managed Account",
  "General Enquiry",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry — ${form.interest}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`
    );
    // Opens the visitor's email client pre-filled to our inbox.
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="font-display mt-5 text-2xl font-bold text-navy-900">Thank you!</h3>
        <p className="mt-2 max-w-sm text-[15px] text-muted">
          Your email client should now be open with your message ready to send.
          Prefer to talk now? Call us at{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-700">{site.phone}</a>.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-navy-800/15 px-6 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-navy-800/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all placeholder:text-muted/60 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/12";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">Full name</label>
          <input required value={form.name} onChange={update("name")} placeholder="Your name" className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">Phone</label>
          <input required value={form.phone} onChange={update("phone")} placeholder="+92 3xx xxxxxxx" className={field} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-800">Email</label>
        <input required type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" className={field} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-800">I&apos;m interested in</label>
        <select value={form.interest} onChange={update("interest")} className={field}>
          {interests.map((it) => (
            <option key={it}>{it}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-800">Message</label>
        <textarea required rows={4} value={form.message} onChange={update("message")} placeholder="Tell us a little about your goals…" className={`${field} resize-none`} />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-[0_14px_36px_-12px_rgba(30,111,232,0.8)] transition-all hover:-translate-y-0.5 hover:bg-brand-500"
      >
        Send message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="text-center text-xs text-muted/80">
        By submitting, you agree to be contacted about your enquiry. We respect your privacy.
      </p>
    </form>
  );
}
