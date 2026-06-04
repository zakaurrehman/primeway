import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFab from "@/components/WhatsAppFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Prime Way Capital (Private) Limited is an SECP-registered investment & commodity futures firm in Lahore, Pakistan. Trade gold, silver, oil, currencies and global indices with transparent, regulated execution.",
  keywords: [
    "Prime Way Capital",
    "PMEX broker",
    "commodity trading Pakistan",
    "gold trading Lahore",
    "investment firm Pakistan",
    "futures broker",
    "SECP registered",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "SECP-registered investment & commodity futures firm. Trade gold, silver, oil, currencies and global indices with transparent, regulated execution.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Trade gold, silver, oil, currencies and global indices with a regulated, transparent partner.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: site.legalName,
              alternateName: site.name,
              url: site.url,
              telephone: site.phone,
              email: site.email,
              slogan: site.tagline,
              address: {
                "@type": "PostalAddress",
                streetAddress: "2nd Floor, Block P1, Valencia Town",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              areaServed: "PK",
              description:
                "SECP-registered investment & commodity futures firm offering trading in gold, silver, oil, currencies and global indices.",
            }),
          }}
        />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
