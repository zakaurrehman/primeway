"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const ease = [0.22, 0.7, 0.2, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden mesh-hero pt-28 pb-24 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 grid-pattern opacity-[0.35]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-500/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-gold-500/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-sky-100 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            SECP-Registered · PMEX-Linked Trading
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="font-display mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Your <span className="text-gradient">Prime Way</span> to
            <br className="hidden sm:block" /> smarter investing.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-sky-100/85"
          >
            Trade gold, silver, oil, currencies and global indices with a
            regulated, transparent partner. Institutional-grade execution,
            data-driven research and people-first support — built for Pakistan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-7 py-3.5 font-semibold text-navy-900 shadow-[0_16px_40px_-12px_rgba(216,169,60,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Open Your Account
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/markets"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Explore Markets
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-sky-100/70"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-400" /> Regulated & compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-400" /> 22.5 hrs market access
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold-400" /> 100% transparent
            </span>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <TradingCard />
        </motion.div>
      </div>
    </section>
  );
}

function TradingCard() {
  const bars = [38, 52, 44, 66, 58, 78, 70, 92];
  return (
    <div className="relative">
      {/* glow frame */}
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-gold-500/20 blur-2xl" />

      <div className="relative rounded-[1.75rem] border border-white/15 bg-navy-900/70 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-sky-200/70">Portfolio Value</p>
            <p className="font-display text-2xl font-bold text-white">PKR 4,82,640</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" /> +12.4%
          </span>
        </div>

        {/* Chart */}
        <div className="mt-6 flex h-40 items-end gap-2.5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${h}%`, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease }}
              className={`flex-1 rounded-t-md ${
                i === bars.length - 1
                  ? "bg-gradient-to-t from-gold-500 to-gold-300"
                  : "bg-gradient-to-t from-brand-700 to-brand-400"
              }`}
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { k: "Gold", v: "+0.84%", up: true },
            { k: "Crude", v: "-0.32%", up: false },
            { k: "S&P 500", v: "+0.33%", up: true },
          ].map((m) => (
            <div key={m.k} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] text-sky-200/60">{m.k}</p>
              <p className={`text-sm font-semibold ${m.up ? "text-emerald-400" : "text-rose-400"}`}>
                {m.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -top-5 hidden rounded-2xl border border-white/15 bg-white/95 px-4 py-3 shadow-xl sm:block"
      >
        <p className="text-[11px] font-medium text-muted">Execution speed</p>
        <p className="font-display text-lg font-bold text-navy-900">&lt; 30ms</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/95 px-4 py-3 shadow-xl sm:flex"
      >
        <ShieldCheck className="h-5 w-5 text-brand-600" />
        <div>
          <p className="text-[11px] font-medium text-muted">Regulated by</p>
          <p className="font-display text-sm font-bold text-navy-900">SECP Pakistan</p>
        </div>
      </motion.div>
    </div>
  );
}
