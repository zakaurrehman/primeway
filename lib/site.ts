/**
 * Single source of truth for all company content.
 * Edit values here and they update everywhere on the site.
 */

export const site = {
  name: "Prime Way Capital",
  legalName: "Prime Way Capital (Private) Limited",
  tagline: "Your Prime Way to Smarter Investing",
  domain: "primewaycapital.co",
  url: "https://primewaycapital.co",
  phone: "+92 306 6062012",
  phoneHref: "tel:+923066062012",
  whatsapp: "https://wa.me/923066062012",
  email: "info@primewaycapital.co",
  emailHref: "mailto:info@primewaycapital.co",
  address: "2nd Floor, Block P1, Valencia Town, Lahore, Punjab, Pakistan",
  shortAddress: "Valencia Town, Lahore",
  mapQuery: "Block P1 Valencia Town Lahore",
  hours: "Mon – Fri · 9:00 AM – 6:00 PM (PKT)",
  founded: "2026",
  regulator: "SECP",
  regNote:
    "Incorporated under the Companies Act, 2017 and registered with the Securities & Exchange Commission of Pakistan (SECP).",
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Markets", href: "/markets" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 22.5, suffix: " hrs", label: "Markets open daily" },
  { value: 100, suffix: "%", label: "Transparent execution" },
  { value: 4, suffix: "+", label: "Global asset classes" },
  { value: 24, suffix: "/5", label: "Dedicated client support" },
];

export const services = [
  {
    icon: "LineChart",
    title: "Commodity Futures Brokerage",
    desc: "Trade gold, silver, crude oil, copper and more on PMEX with razor-thin spreads and lightning-fast execution.",
    points: ["Metals & energy futures", "Low-margin contracts", "Real-time order routing"],
  },
  {
    icon: "Globe2",
    title: "Currency & Index Trading",
    desc: "Access major currency pairs and the world's leading indices — Dow Jones, NASDAQ-100, S&P 500 and more.",
    points: ["Global FX pairs", "International indices", "Borderless market access"],
  },
  {
    icon: "Briefcase",
    title: "Portfolio & Wealth Management",
    desc: "Bespoke portfolios engineered around your goals, time horizon and risk appetite by seasoned strategists.",
    points: ["Tailored strategies", "Active risk control", "Periodic rebalancing"],
  },
  {
    icon: "GraduationCap",
    title: "Research & Trader Education",
    desc: "Daily fundamental and technical research, market insights and structured learning to sharpen every decision.",
    points: ["Daily market briefs", "Technical analysis", "1-on-1 mentoring"],
  },
  {
    icon: "ShieldCheck",
    title: "Risk & Compliance Advisory",
    desc: "Disciplined risk frameworks and full regulatory alignment so your capital is managed with integrity.",
    points: ["Risk profiling", "SECP-aligned process", "Capital protection focus"],
  },
  {
    icon: "Wallet",
    title: "Managed Accounts",
    desc: "Let our desk trade on your behalf within agreed mandates — performance-driven, fully transparent reporting.",
    points: ["Discretionary mandates", "Transparent reporting", "Aligned incentives"],
  },
];

export const markets = [
  {
    icon: "Coins",
    name: "Precious & Base Metals",
    items: ["Gold (Tola, 10oz, 100oz)", "Silver", "Platinum", "Copper"],
    accent: "from-gold-400 to-gold-500",
  },
  {
    icon: "Flame",
    name: "Energy",
    items: ["Crude Oil (WTI)", "Brent Oil", "Natural Gas"],
    accent: "from-brand-500 to-brand-700",
  },
  {
    icon: "Wheat",
    name: "Agriculture",
    items: ["Cotton", "Soft commodities", "Seasonal contracts"],
    accent: "from-emerald-400 to-emerald-600",
  },
  {
    icon: "CandlestickChart",
    name: "Financial Futures",
    items: ["Currency pairs", "Dow Jones", "NASDAQ-100", "S&P 500"],
    accent: "from-navy-600 to-navy-800",
  },
];

// Indicative ticker symbols for the marquee (display only)
export const tickers = [
  { sym: "GOLD", price: "2,358.40", chg: "+0.84%", up: true },
  { sym: "SILVER", price: "30.12", chg: "+1.21%", up: true },
  { sym: "WTI CRUDE", price: "78.45", chg: "-0.32%", up: false },
  { sym: "BRENT", price: "82.10", chg: "-0.18%", up: false },
  { sym: "COPPER", price: "4.62", chg: "+0.45%", up: true },
  { sym: "NAT GAS", price: "2.74", chg: "+2.05%", up: true },
  { sym: "DJIA", price: "39,118", chg: "+0.27%", up: true },
  { sym: "NASDAQ-100", price: "19,640", chg: "+0.61%", up: true },
  { sym: "S&P 500", price: "5,477", chg: "+0.33%", up: true },
  { sym: "EUR/USD", price: "1.0712", chg: "-0.12%", up: false },
];

export const steps = [
  {
    n: "01",
    title: "Open Your Account",
    desc: "Complete a quick, fully-compliant KYC onboarding — guided by a dedicated relationship manager.",
  },
  {
    n: "02",
    title: "Fund Securely",
    desc: "Deposit through secure, regulated channels. Your funds are handled with full transparency.",
  },
  {
    n: "03",
    title: "Build Your Strategy",
    desc: "Work with our research desk to define goals, risk limits and the markets that fit you best.",
  },
  {
    n: "04",
    title: "Trade & Grow",
    desc: "Execute with confidence on a powerful platform, backed by 24/5 support and live insights.",
  },
];

export const whyUs = [
  {
    icon: "ShieldCheck",
    title: "Regulated & Trusted",
    desc: "A duly incorporated company under SECP oversight — governance and compliance at the core.",
  },
  {
    icon: "Zap",
    title: "Fast, Reliable Execution",
    desc: "Institutional-grade infrastructure delivering low-latency order routing you can depend on.",
  },
  {
    icon: "Eye",
    title: "Radical Transparency",
    desc: "Clear pricing, honest reporting and no hidden costs — 100% transparency on every trade.",
  },
  {
    icon: "Users",
    title: "People-First Support",
    desc: "Dedicated relationship managers and round-the-clock support throughout market hours.",
  },
  {
    icon: "BarChart3",
    title: "Data-Driven Research",
    desc: "Actionable fundamental and technical research that turns market noise into clear signals.",
  },
  {
    icon: "Lock",
    title: "Security by Design",
    desc: "Your capital and data are protected with bank-grade security and disciplined risk controls.",
  },
];

export const faqs = [
  {
    q: "Is Prime Way Capital a regulated company?",
    a: "Yes. Prime Way Capital (Private) Limited is incorporated under the Companies Act, 2017 and registered with the Securities & Exchange Commission of Pakistan (SECP). We operate with strict governance and compliance standards.",
  },
  {
    q: "What markets can I trade?",
    a: "Through our PMEX-linked infrastructure you can trade commodity futures (gold, silver, crude oil, copper, natural gas, cotton), major currency pairs and leading global indices such as the Dow Jones, NASDAQ-100 and S&P 500.",
  },
  {
    q: "How do I open an account?",
    a: "Simply reach out via our contact form, phone or WhatsApp. A dedicated relationship manager will guide you through a quick, compliant KYC onboarding and help you fund your account securely.",
  },
  {
    q: "Do you offer guidance for beginners?",
    a: "Absolutely. Our research desk provides daily market briefs, technical analysis and structured education, plus one-on-one mentoring so new traders can build confidence and skill.",
  },
  {
    q: "How is my capital protected?",
    a: "We follow disciplined risk-management frameworks, transparent reporting and SECP-aligned processes. Funds move only through secure, regulated channels and capital protection is central to how we operate.",
  },
];

export const testimonials = [
  {
    quote:
      "Prime Way Capital made commodity trading approachable. Their research desk is sharp and the execution is genuinely fast.",
    name: "Hamza R.",
    role: "Active Trader, Lahore",
  },
  {
    quote:
      "Transparent, professional and always available. My relationship manager truly understands my goals and risk limits.",
    name: "Sana K.",
    role: "Long-term Investor",
  },
  {
    quote:
      "I started as a complete beginner. The mentoring and daily briefs gave me the confidence to trade with discipline.",
    name: "Bilal A.",
    role: "New Trader",
  },
];
