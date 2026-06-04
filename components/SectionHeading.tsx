import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            light
              ? "bg-white/10 text-sky-200 ring-1 ring-white/20"
              : "bg-sky-100 text-brand-700 ring-1 ring-brand-500/15"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.6rem] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${
            light ? "text-sky-200/90" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
