# Client logos

Drop client logo files in this folder. Anything in `public/` is served from the
site root, so `public/logos/pepsi.svg` is reachable at `/logos/pepsi.svg`.

## Naming

Use the client's slug, lowercase, no spaces, matching the entries in `partners`
(`src/lib/site.ts`):

```
pepsi.svg
sayona.svg
jambo.svg
```

If a client supplies a reversed (white) version for dark backgrounds, add it
alongside with a `-light` suffix:

```
pepsi-light.svg
```

## Format

- **SVG preferred** — sharp at any size, a couple of kilobytes, and it can be
  recoloured in CSS.
- **PNG** as a fallback: transparent background, around 600px on the long edge.
- Trim the artwork so there is no baked-in padding around the mark; the layout
  adds its own spacing, and uneven built-in margins make a logo row look
  misaligned.
- Avoid JPG — no transparency, and the white box shows on every background.

## Once files are here

Tell me and I'll wire them into the partner strip
(`PartnerStrip` in `src/components/sections.tsx`), which currently renders the
client names as plain type. Logos will be optically balanced — set at their
natural aspect ratios in a fixed-height row rather than stretched to equal
boxes — so a wide wordmark and a tall roundel read as the same weight.

## Before publishing

These are third-party trademarks. Confirm Ecohygiene has each client's
permission to display their mark on the website.
