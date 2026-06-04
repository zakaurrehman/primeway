import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "ghost" | "gold" | "outline";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_10px_30px_-10px_rgba(30,111,232,0.7)] hover:bg-brand-500 hover:shadow-[0_16px_40px_-12px_rgba(30,111,232,0.9)] hover:-translate-y-0.5",
  gold:
    "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 shadow-[0_10px_30px_-10px_rgba(216,169,60,0.8)] hover:-translate-y-0.5",
  ghost:
    "bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur hover:bg-white/20",
  outline:
    "bg-transparent text-navy-800 ring-1 ring-inset ring-navy-800/20 hover:bg-navy-800 hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto");
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
