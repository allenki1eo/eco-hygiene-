# Ecohygiene Company Limited — website

Marketing site for **Ecohygiene Company Limited**, a Tanzanian industrial hygiene and
environmental services company based in Shinyanga.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.
Every page is statically generated; the only server route is the contact endpoint.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

Node 20+ required.

### Environment variables

| Variable               | Required | Purpose                                                             |
| ---------------------- | -------- | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | For prod | Canonical/OG URLs, sitemap and JSON-LD. Defaults to `https://www.ecohygiene.co.tz`. |

No other secrets are needed until email delivery is wired up (see below).

---

## Structure

```
src/
  app/
    page.tsx                  Home
    services/page.tsx         Services index
    services/[slug]/page.tsx  One page per service (statically generated)
    company/page.tsx          Mission, values, experience, culture
    contact/page.tsx          Contact details, form, map
    api/contact/route.ts      Contact form endpoint
    opengraph-image.tsx       Social card, generated at build time
    sitemap.ts / robots.ts    SEO plumbing
    globals.css               Design tokens and shared component classes
  components/
    site-header.tsx           Sticky header + mobile drawer
    site-footer.tsx           Footer
    sections.tsx              Service cards, stats, partners, CTA band, page hero
    ui.tsx                    Container, buttons, section headings, Reveal
    contact-form.tsx          Validated contact form (client component)
    plant-illustration.tsx    Hero illustration (hand-drawn SVG)
    map-embed.tsx             OpenStreetMap embed with fallback
    icons.tsx                 Icon set
    reveal.tsx                Scroll-reveal observer
  lib/
    site.ts                   Company facts, contact details, values, guarantees
    services.ts               All service copy
```

### Editing content

Nearly all copy lives in `src/lib/site.ts` and `src/lib/services.ts`. Changing a
phone number, adding a value or rewriting a service description means editing
those two files — the header, footer, contact page, sitemap and structured data
all read from them.

---

## Design system

Defined as Tailwind v4 tokens in `src/app/globals.css`:

- **Carbon** — near-black with a green cast, for text and dark sections
- **Moss** — sustainability green, the primary accent
- **Hydro** — water blue, the secondary accent (used for the water-facing services)

Dark sections are flat carbon with the hairline blueprint grid — no gradient
washes or colour glows. The only gradients left are functional scrims that keep
text and icon chips legible over photography, plus the headline highlight in
`.text-gradient`, which colours text rather than a background.

Type: **Sora** for headings (geometric, sturdy), **Inter** for body,
**IBM Plex Mono** for the small technical labels. All self-hosted via
`next/font`, so there are no external font requests at runtime.

Shared classes: `.eyebrow`, `.bg-blueprint`, `.bg-blueprint-light`,
`.text-gradient`, `.reveal`.

### Motion

Scroll reveals are driven by one IntersectionObserver (`components/reveal.tsx`).
Content is visible by default and is only hidden once JavaScript confirms it can
reveal it again, so the site is fully readable without JS. Everything is disabled
under `prefers-reduced-motion`.

### Imagery

The hero is a hand-drawn SVG of a beverage plant — process tanks, filling line and
the effluent path beneath the floor — rather than stock photography. It carries the
brand palette exactly and weighs a few kilobytes.

**To use real photography in the hero instead:** drop an optimised image in
`public/`, replace `<PlantIllustration />` in `src/app/page.tsx` with `next/image`,
and set explicit `width`/`height` plus a descriptive `alt`. Keep the dark overlay so
the headline retains its contrast ratio.

The company logo is `public/logos/logo.png`, used in the header, the footer and
the social card, and as the favicon (`src/app/icon.png`). It was supplied as a
432 KB `.ico`; the 256px frame was extracted, the white outside the roundel made
transparent, and the result trimmed. The white disc *inside* the ring is kept
deliberately so the mark stays legible on the dark footer.

**Service card photos** live in `public/services/`, named to match the service slug,
and are declared on the optional `image` field in `src/lib/services.ts`. The field is
optional by design: a service without a photo falls back to a designed gradient
panel carrying its icon, so the grid stays consistent rather than looking
half-finished. All four services currently have a photo.

**Page banners** for the company and contact heroes live in `public/banners/` and
are passed to `PageHero` via its optional `image` prop.

The same photo runs full-bleed behind the whole service detail hero, under a flat
78% carbon wash. White headline text measures ~10:1 against the brightest part of
every one of these photos, and the hero body copy steps one tone lighter
(`carbon-200`, `moss-200`/`hydro-200`) to clear AA over a photographic backdrop.

Photographs belong in JPEG, not PNG. The supplied waste water PNG was 421 KB; the
same image as JPEG is 51 KB and indistinguishable at card size.

---

## Contact form

Front end (`components/contact-form.tsx`): per-field validation on blur and submit,
an error summary that receives focus, `aria-invalid`/`aria-describedby` wiring, a
honeypot field, and a success state.

Back end (`app/api/contact/route.ts`): re-validates server-side, then **logs the
enquiry — it does not email anyone yet.** The file has a commented block showing
exactly where to plug in delivery:

1. **Email** — Resend, Postmark or Nodemailer against the company mailbox. Put the
   API key in an environment variable.
2. **CRM/spreadsheet** — POST the same payload onward to Airtable, HubSpot or a
   Google Apps Script.
3. **Rate limiting** — add one before launch; a public POST endpoint will be found.

The front end needs no changes when delivery is added.

---

## Accessibility

- Semantic landmarks, one `<h1>` per page, ordered headings
- Skip link, visible focus ring on light and dark surfaces
- Mobile drawer: `role="dialog"`, Escape to close, focus moved in and returned
- Every icon either labelled or `aria-hidden`
- Automated audit: **axe-core (WCAG 2.1 A/AA) reports zero violations** across
  every page, the open mobile drawer and the form's error state
- Contrast is also verified by pixel sampling: the page is screenshotted with all
  text made transparent, then the actual rendered backdrop behind each glyph run
  is measured. **953 text nodes checked, none below threshold.** This matters
  because axe returns "incomplete" rather than a result wherever text sits over a
  photograph or a decorative overlay, which on this site is most of the heroes.

Re-run both after changing colours — several greys and greens in this palette sit
close to the 4.5:1 threshold.

**A trap worth knowing:** passing a `text-*` class to `<Eyebrow>` alongside `tone`
does not override the tone. Both classes land in the class list and the generated
stylesheet order decides the winner, which silently rendered every dark-surface
eyebrow in the light-surface green (3.8:1) for several commits. `Eyebrow` now
takes explicit per-surface tones (`moss-dark`, `moss-photo`, …) — use those
instead of overriding the colour.

---

## Before you publish

These items are placeholders or need confirmation from the directors:

1. **Statistics** (`src/lib/site.ts` → `stats`) — "10+ years", "3 beverage groups",
   founding year 2015. Confirm or replace.
2. **Compliance wording** (`src/lib/site.ts` → `complianceNotes`) — deliberately
   describes working practice, not accredited certification. Replace with real
   OSHA/NEMC/TBS/TFDA registrations once the certificates are to hand. Do not
   publish credential claims that have not been verified.
3. **Client logos** (`src/lib/site.ts` → `partners`, assets in `public/logos/`) —
   the Pepsi, Sayona and Jambo Group marks are now displayed. These are
   third-party trademarks: confirm each client has given written permission
   before the site goes live, and remove any that have not.
4. **Pest control photo** (`public/services/pest-control-management.jpg`) — this
   image is a marketing graphic carrying another business's branding: an
   "EcoFriendly Pest Control" logo and a "PEST CONTROL SPECIALIST" banner, both
   legible at hero size. It is in use at the client's instruction. Replacing it
   with a photograph of an actual Ecohygiene pest control job would remove the
   copyright exposure and read as Ecohygiene's own work; drop the replacement in
   at the same path and nothing else needs changing.
5. **Social links** (`src/lib/site.ts` → `social`) — currently point at the
   platforms' home pages. Swap in the real profiles or remove the entries.
6. **Map coordinates** (`src/lib/site.ts` → `contact.geo`) — approximate for Sido,
   Shinyanga. Confirm the exact plot location.
7. **Contact form delivery** — see above; nothing is emailed until it is wired up.
8. **`NEXT_PUBLIC_SITE_URL`** — set to the live domain so canonical URLs, the
   sitemap and the social card resolve correctly.

---

## Deploying

Static output plus one API route: deploy to Vercel, Netlify or any Node host.

```bash
npm run build && npm start
```

If the host is not Vercel, make sure the Node runtime is available for
`/api/contact` — the rest of the site is prerendered HTML.
