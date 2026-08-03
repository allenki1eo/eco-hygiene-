import type { SVGProps } from "react";
import type { ServiceSlug } from "@/lib/services";

/**
 * Bespoke line icons drawn on a 24px grid with a 1.5px stroke so the set reads
 * as one family rather than assorted stock glyphs.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** Scrubbing head over a factory floor — general cleaning. */
export function IconCleaning(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 3.2 15 5.1a2 2 0 0 1 1.4 2.4l-.6 2.2-7.7-2.2.6-2.2a2 2 0 0 1 .8-1.1Z" />
      <path d="M8.1 7.5 15.8 9.7l-.8 2.8-7.7-2.2z" />
      <path d="M7 13v4M10 13.8v4M13 14.6v4M16 15.4v4" />
      <path d="M3 21h18" />
    </svg>
  );
}

/** Shield with an insect silhouette — pest control. */
export function IconPest(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 4.8 5.5v6c0 4.3 3 8.1 7.2 9.7 4.2-1.6 7.2-5.4 7.2-9.7v-6z" />
      <ellipse cx="12" cy="12.4" rx="2.1" ry="3.4" />
      <path d="M12 9v-1.4M10.6 7 9.6 5.9M13.4 7l1-1.1" />
      <path d="M9.9 10.6 7.4 9.4M9.9 12.9H7.2M9.9 15.1l-2.3 1.3M14.1 10.6l2.5-1.2M14.1 12.9h2.7M14.1 15.1l2.3 1.3" />
    </svg>
  );
}

/** Blending vessel with impeller — mixing units. */
export function IconMixing(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 7h13v11a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3z" />
      <path d="M4 7h16" />
      <path d="M9 7V4.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4.5V7" />
      <path d="M12 9.5v6" />
      <path d="M9.3 13.2c1.1-1.1 2-1.1 2.7 0 .7 1.1 1.6 1.1 2.7 0" />
      <path d="M9.3 16.6c1.1-1.1 2-1.1 2.7 0 .7 1.1 1.6 1.1 2.7 0" />
    </svg>
  );
}

/** Droplet over flow lines — waste water stewardship. */
export function IconWater(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8s5 5.4 5 8.8a5 5 0 0 1-10 0c0-3.4 5-8.8 5-8.8Z" />
      <path d="M9.6 11.6c0 1.4 1.1 2.5 2.4 2.5" />
      <path d="M3 18.2c1.8-1.2 3.6-1.2 5.4 0s3.6 1.2 5.4 0 3.6-1.2 5.4 0" />
      <path d="M3 21.4c1.8-1.2 3.6-1.2 5.4 0s3.6 1.2 5.4 0 3.6-1.2 5.4 0" />
    </svg>
  );
}

export const serviceIcons: Record<ServiceSlug, (props: IconProps) => React.JSX.Element> = {
  "factory-general-cleaning": IconCleaning,
  "pest-control-management": IconPest,
  "mixing-units": IconMixing,
  "waste-water-stewardship": IconWater,
};

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 4.8 4.8L19.5 7" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.2 3.5H5.4A2.4 2.4 0 0 0 3 6.2C3 14 10 21 17.8 21a2.4 2.4 0 0 0 2.7-2.4v-2.8l-4.2-1.4-1.7 2.1a13.6 13.6 0 0 1-5.1-5.1l2.1-1.7z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.2" />
      <path d="m3.5 7 7.3 5.4a2 2 0 0 0 2.4 0L20.5 7" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.5s7-6 7-11.2a7 7 0 1 0-14 0C5 15.5 12 21.5 12 21.5Z" />
      <circle cx="12" cy="10.1" r="2.7" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2.1" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 19.5C3 15 5 8 12.5 5.5c2.4-.8 5-.9 7-.9.2 2.4 0 5.4-1.1 8-2.2 5.3-7.6 7.2-11.4 6.1" />
      <path d="M4 20.5c2.8-4.6 6.3-8 11-10.4" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 4.8 5.5v6c0 4.3 3 8.1 7.2 9.7 4.2-1.6 7.2-5.4 7.2-9.7v-6z" />
      <path d="m8.8 11.8 2.3 2.3 4.3-4.3" />
    </svg>
  );
}

export function IconGauge(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 18a9 9 0 1 1 17 0" />
      <path d="m12 13.5 3.8-3.8" />
      <circle cx="12" cy="14.6" r="1.5" />
      <path d="M3.5 18h3M17.5 18h3" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="8" r="3.3" />
      <path d="M3.5 20.2c0-3.2 2.7-5.4 6-5.4s6 2.2 6 5.4" />
      <path d="M16.5 5.2a3.3 3.3 0 0 1 0 6.4" />
      <path d="M18 14.9c1.7.7 2.9 2.2 2.9 4.1" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function IconAlert(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.8 2.9 19.6h18.2z" />
      <path d="M12 9.5v4.2M12 16.6h.01" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Social                                                                     */
/* -------------------------------------------------------------------------- */

const solid = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;

export function IconLinkedin(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v10.75H3zM9.5 9.75h3.83v1.47h.05c.53-.95 1.84-1.96 3.79-1.96 4.05 0 4.8 2.5 4.8 5.76v5.48h-4v-4.86c0-1.16-.02-2.65-1.7-2.65-1.7 0-1.96 1.26-1.96 2.57v4.94h-4z" />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34v7.03C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.14 0-3.51.02-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.05 1.24-.07 1.61-.07 4.75s.02 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.05 1.61.07 4.75.07s3.51-.02 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.05-1.24.07-1.61.07-4.75s-.02-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.05-1.61-.07-4.75-.07Zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96Zm0 8.21a3.23 3.23 0 1 0 0-6.46 3.23 3.23 0 0 0 0 6.46Zm6.34-8.41a1.16 1.16 0 1 1-2.33 0 1.16 1.16 0 0 1 2.33 0Z" />
    </svg>
  );
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.83 9.83 0 0 0 4.6 1.17h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2Zm0 18.02a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.15 8.15 0 0 1-1.25-4.32c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.16-8.21 8.16Zm4.5-6.11c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.12-.16.25-.63.8-.78.97-.14.16-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.19 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.17-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export const socialIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  linkedin: IconLinkedin,
  facebook: IconFacebook,
  instagram: IconInstagram,
  whatsapp: IconWhatsapp,
};
