import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealProvider } from "@/components/reveal";
import { contact, site } from "@/lib/site";
import { services } from "@/lib/services";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Display face — geometric and sturdy, reads industrial rather than soft. */
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

/** Technical labels, figures and eyebrows. */
const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Industrial Hygiene & Environmental Services in Tanzania`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "factory cleaning Tanzania",
    "industrial hygiene Shinyanga",
    "pest control management",
    "fumigation Tanzania",
    "waste water stewardship",
    "beverage factory hygiene",
    "eco-friendly cleaning services",
  ],
  applicationName: site.shortName,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Industrial Hygiene & Environmental Services`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Industrial services",
};

export const viewport: Viewport = {
  themeColor: "#05090a",
  colorScheme: "light",
};

/** Structured data so the plant, hours and services surface in local search. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: site.shortName,
  description: site.longDescription,
  url: site.url,
  telephone: contact.phoneIntl,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    postOfficeBoxNumber: contact.address.poBox,
    addressLocality: contact.address.city,
    addressCountry: "TZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.geo.lat,
    longitude: contact.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: { "@type": "Country", name: "Tanzania" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial hygiene services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.summary,
        url: `${site.url}/services/${service.slug}`,
      },
    })),
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
      className={`${inter.variable} ${sora.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-carbon-50">
        <script
          type="application/ld+json"
          // Static, developer-authored structured data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealProvider />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
