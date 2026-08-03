# Client logos

Logo assets for the partner strip on the home, services and company pages.
Anything in `public/` is served from the site root, so `public/logos/pepsi.png`
is reachable at `/logos/pepsi.png`.

## In use

| File | Client | Intrinsic size |
| --- | --- | --- |
| `pepsi.png` | Pepsi | 225 × 225 |
| `sayona.png` | Sayona | 177 × 57 |
| `jambo.png` | Jambo Group | 1334 × 612 |

Each is wired up in `partners` (`src/lib/site.ts`) and rendered by
`PartnerStrip` (`src/components/sections.tsx`) through `next/image`, so the
large PNGs are served as resized WebP at the size they actually display.

### These were processed on the way in

The originals are in git history (commit `b134ad9`) if you need them back.

- **`pepsi.png`** arrived with a solid white background baked in, which would
  have shown as a white box on any non-white surface. The white was flood-filled
  from the image border only, so the white *inside* the mark — the wave band
  behind the wordmark — is untouched.
- **`jambo.png`** and **`sayona.png`** had transparent padding around the
  artwork; it was trimmed off. Built-in padding differs per file and makes a
  logo row look misaligned even when the code is correct.
- **`Jambo.png`** was renamed to lowercase `jambo.png` to match the others and
  to avoid case-sensitivity problems between local machines and Linux servers.

## Adding or replacing a logo

1. Drop the file here. **SVG is preferred** — sharp at any size, a couple of
   kilobytes, and recolourable in CSS. Otherwise PNG with a transparent
   background, around 600px on the long edge.
2. Trim any padding around the artwork, and avoid JPG (no transparency, so the
   white box shows on every background).
3. Add an entry to `partners` in `src/lib/site.ts` with the file path, the
   asset's intrinsic `width`/`height`, and a `displayHeight`.

`displayHeight` is set **by eye, not by formula**. A square roundel needs
noticeably more height than a wide wordmark to carry the same visual weight —
that is why Pepsi sits at 66px while the Sayona wordmark sits at 34px. Add the
logo, look at the row, and adjust until nothing shouts or disappears.

## Dark backgrounds

Two of these marks are dark artwork on transparency, so they would vanish on a
dark section. `PartnerStrip` has a `dark` prop that puts the logos on a white
chip for that case. It is not currently used — every placement is on a light
background — but the support is there if the strip moves.

If a client supplies a reversed (white) version, add it with a `-light` suffix
(`pepsi-light.svg`) and the component can be extended to prefer it on dark.

## Before publishing

These are third-party trademarks. Confirm Ecohygiene has each client's written
permission to display their mark on the website.
