import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden mesh-hero px-5">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative text-center">
        <p className="font-display text-[7rem] font-extrabold leading-none text-gradient-gold sm:text-[10rem]">
          404
        </p>
        <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">
          This page took a different way.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sky-100/80">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on the prime way.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="gold" arrow>Back to home</Button>
          <Button href="/contact" variant="ghost">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
