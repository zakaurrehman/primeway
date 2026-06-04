import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Prime Way Capital — call, email or WhatsApp our Lahore team to open an account or ask about trading metals, energy, currencies and indices.",
};

const channels = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email us", value: site.email, href: site.emailHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: site.whatsapp },
  { icon: MapPin, label: "Visit us", value: site.shortAddress, href: `https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title={<>Let&apos;s start your <span className="text-gradient-gold">trading journey</span></>}
        subtitle="Open an account, ask a question, or book a free consultation. Our Lahore-based team is ready to help — usually within one business day."
      />

      {/* Channels */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-hover flex h-full flex-col gap-3 rounded-3xl border border-navy-800/10 bg-gradient-to-b from-sky-100/50 to-white p-6 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-navy-800 text-white">
                  <c.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">{c.label}</p>
                  <p className="font-display mt-0.5 font-bold text-navy-900">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-sky-100/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-navy-800/10 bg-white p-7 shadow-card sm:p-9">
              <h2 className="font-display text-2xl font-bold text-navy-900">Send us a message</h2>
              <p className="mt-2 text-sm text-muted">
                Fill in the form and we&apos;ll get right back to you.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-navy-800/10 bg-navy-950 p-8 text-white">
                <h3 className="font-display text-xl font-bold">Head office</h3>
                <ul className="mt-5 space-y-4 text-sm text-sky-100/85">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                    <span>{site.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-brand-400" />
                    <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-brand-400" />
                    <a href={site.emailHref} className="hover:text-white">{site.email}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-brand-400" />
                    <span>{site.hours}</span>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-navy-800/10 shadow-card">
                <iframe
                  title="Prime Way Capital location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
