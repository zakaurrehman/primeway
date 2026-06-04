"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const active = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              active
                ? "border-brand-500/30 bg-sky-100/50"
                : "border-navy-800/10 bg-white hover:border-brand-500/20"
            }`}
          >
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={active}
            >
              <span className="font-display text-base font-semibold text-navy-900 sm:text-lg">
                {f.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  active ? "rotate-45 bg-brand-600 text-white" : "bg-sky-100 text-brand-700"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.7, 0.2, 1] }}
                >
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
