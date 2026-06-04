"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 shadow-[0_8px_30px_-12px_rgba(8,31,58,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <span
            className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white/95 ring-1 transition-colors ${
              scrolled ? "ring-navy-800/10" : "ring-white/25"
            }`}
          >
            <Image src="/logo.png" alt={`${site.name} logo`} fill className="object-contain p-0.5" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-[15px] font-extrabold tracking-tight transition-colors ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            >
              PRIME WAY
            </span>
            <span
              className={`text-[11px] font-semibold tracking-[0.2em] transition-colors ${
                scrolled ? "text-brand-600" : "text-sky-300"
              }`}
            >
              CAPITAL
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-brand-700"
                      : scrolled
                        ? "text-navy-800/80 hover:text-brand-700"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-sky-100"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-navy-800 hover:text-brand-700" : "text-white/90 hover:text-white"
            }`}
          >
            <Phone className={`h-4 w-4 transition-colors ${scrolled ? "text-brand-600" : "text-sky-300"}`} />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(30,111,232,0.7)] transition-all hover:-translate-y-0.5 hover:bg-brand-500"
          >
            Open Account
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-navy-900 ring-1 ring-navy-800/10 backdrop-blur lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.7, 0.2, 1] }}
            className="overflow-hidden border-t border-navy-800/10 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      pathname === n.href
                        ? "bg-sky-100 text-brand-700"
                        : "text-navy-800 hover:bg-sky-100/60"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 flex flex-col gap-2">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-navy-800/15 px-5 py-3 text-sm font-semibold text-navy-800"
                >
                  <Phone className="h-4 w-4 text-brand-600" /> {site.phone}
                </a>
                <Link
                  href="/contact"
                  className="rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Open Account
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
