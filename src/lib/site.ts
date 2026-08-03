/**
 * Single source of truth for company facts, navigation and contact details.
 * Update here and the whole site (header, footer, contact page, JSON-LD,
 * sitemap) follows.
 */

export const site = {
  name: "Ecohygiene Company Limited",
  shortName: "Ecohygiene",
  tagline: "Industrial hygiene & environmental services",
  description: "Ecohygiene deals with drink factory hygiene solutions",
  longDescription:
    "Ecohygiene Company Limited delivers eco-friendly factory cleaning, pest control management, hygiene mixing units and waste water stewardship to beverage and manufacturing plants across Tanzania.",
  /** Set NEXT_PUBLIC_SITE_URL at build time for correct canonical/OG URLs. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ecohygiene.co.tz",
  founded: 2015,
  locale: "en_TZ",
} as const;

export const contact = {
  phone: "0685325766",
  phoneIntl: "+255685325766",
  email: "directors@ecohygiene.co.tz",
  hours: "Open 24 hours, 7 days a week",
  hoursShort: "24/7",
  address: {
    line1: "Sido Shinyanga, Tabora Road",
    line2: "Ibinzamata Area, Plot no. 2, Block Y",
    poBox: "P.O. Box 8804",
    city: "Shinyanga",
    country: "Tanzania",
  },
  /** Approximate coordinates for Sido, Shinyanga — refine once surveyed. */
  geo: { lat: -3.6619, lng: 33.4231 },
} as const;

export const addressLines = [
  contact.address.line1,
  contact.address.line2,
  `${contact.address.poBox}, ${contact.address.city}`,
  contact.address.country,
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
] as const;

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "WhatsApp", href: `https://wa.me/${contact.phoneIntl.replace("+", "")}`, icon: "whatsapp" },
] as const;

/**
 * Client logos shown in the partner strip. These are third-party trademarks —
 * confirm Ecohygiene has written permission to display each one before the
 * site goes live.
 *
 * `width`/`height` are the asset's intrinsic pixel dimensions (needed by
 * next/image to reserve space). `displayHeight` is the rendered height in the
 * logo row and is set per logo by eye, not by formula: a square roundel needs
 * noticeably more height than a wide wordmark to carry the same visual weight.
 */
export const partners = [
  {
    name: "Pepsi",
    note: "Bottling plant hygiene",
    logo: "/logos/pepsi.png",
    width: 225,
    height: 225,
    displayHeight: 66,
  },
  {
    name: "Sayona",
    note: "Beverage production lines",
    logo: "/logos/sayona.png",
    width: 177,
    height: 57,
    displayHeight: 34,
  },
  {
    name: "Jambo Group",
    note: "Factory-wide sanitation",
    logo: "/logos/jambo.png",
    width: 1334,
    height: 612,
    displayHeight: 56,
  },
] as const;

/**
 * ⚠ PLACEHOLDER FIGURES — confirm with the directors before the site goes
 * live. Everything a visitor reads as a trust signal lives in this file so it
 * can be checked in one pass. See README "Before you publish".
 */
export const stats = [
  { value: "10+", label: "Years in industrial hygiene", detail: "Serving Tanzanian manufacturers since 2015" },
  { value: "24/7", label: "Response and site cover", detail: "Night shifts, weekends and plant shutdowns" },
  { value: "100%", label: "Eco-conscious chemistry", detail: "Biodegradable, food-safe-compatible programmes" },
  { value: "3", label: "Beverage groups served", detail: "Pepsi, Sayona and Jambo Group production sites" },
];

export const values = [
  {
    title: "Trust",
    body: "We work inside live production plants. Vetted crews, documented procedures and a named account lead who answers the phone.",
  },
  {
    title: "Individuality",
    body: "No two factories foul the same way. Every programme is written around your lines, shift pattern and effluent profile.",
  },
  {
    title: "Experience",
    body: "A decade of beverage and manufacturing work: CIP support, drain systems, high-care zones and wastewater plants.",
  },
  {
    title: "Creativity",
    body: "Where an off-the-shelf product fails, we formulate and blend on site through our own mixing units.",
  },
  {
    title: "Quality",
    body: "Verification is part of the job: swab results, ATP checks, pest activity logs and effluent readings, reported back to you.",
  },
  {
    title: "Leadership",
    body: "We push the sector forward on biodegradable chemistry, reduced water draw and safer handling for the people doing the work.",
  },
];

export const guarantees = [
  {
    title: "Documented every visit",
    body: "Signed-off task sheets, chemical usage logs and photographic evidence issued after each attendance.",
  },
  {
    title: "Food-safe by default",
    body: "Programmes built for beverage production: rinse-verified surfaces, allergen-aware sequencing, no tainting residues.",
  },
  {
    title: "Trained, insured crews",
    body: "Teams trained in confined space, working at height, chemical handling and plant-specific induction before first shift.",
  },
  {
    title: "Response within 24 hours",
    body: "Escalations, infestations and spill events answered same-day, anywhere in the Lake and Central zones.",
  },
];

/**
 * ⚠ PLACEHOLDER — describes working practice, not accredited certification.
 * Replace with the company's actual registrations (OSHA, NEMC, TBS, TFDA
 * numbers) once the certificates are to hand; do not publish claims that have
 * not been verified.
 */
export const complianceNotes = [
  "Procedures written to Tanzanian occupational safety requirements",
  "Effluent handling aligned to national environmental guidance",
  "Food-contact chemicals selected for beverage production",
  "Safety data sheet held on site for every product used",
];
