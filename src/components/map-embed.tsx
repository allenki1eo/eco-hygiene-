import { addressLines, contact } from "@/lib/site";
import { IconArrowRight, IconPin } from "@/components/icons";

const { lat, lng } = contact.geo;
const span = 0.022;
const bbox = [lng - span, lat - span, lng + span, lat + span].join("%2C");

/**
 * OpenStreetMap embed — no API key, no billing account, no tracking cookie.
 * Swap the iframe src for a Google Maps embed if the directors prefer it; the
 * surrounding card does not change.
 */
export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border border-carbon-900/10 bg-white shadow-lift">
      {/* The fallback sits behind the iframe, so it only shows if the embed is
          blocked or slow — never a blank white rectangle. */}
      <div className="relative h-80 bg-carbon-100 sm:h-96">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-blueprint-light px-6 text-center">
          <IconPin className="size-6 text-moss-600" />
          <p className="text-sm font-medium text-carbon-800">
            {contact.address.line1}, {contact.address.city}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-moss-700 underline underline-offset-4"
          >
            Open in maps
          </a>
        </div>
        <iframe
          title={`Map showing ${contact.address.line1}, ${contact.address.city}`}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      </div>
      <div className="flex flex-col gap-4 border-t border-carbon-900/10 p-6 sm:flex-row sm:items-center sm:justify-between">
        <address className="text-sm not-italic leading-relaxed text-carbon-600">
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-moss-600 transition hover:text-moss-500"
        >
          Get directions
          <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <p className="sr-only">
        Approximate map location. Confirm exact coordinates with the office before relying on them
        for delivery.
      </p>
    </div>
  );
}
