/**
 * Company structure for the team section on /company.
 *
 * The ROLE is the anchor of every card, not the person. That is deliberate:
 * the structure is true whether or not a name has been supplied yet, so the
 * section looks finished from day one and stays correct as people change.
 *
 * ⚠ No real staff names are recorded here. Add them as you confirm them, and
 * headshots alongside. Both are optional and the card adapts:
 *
 *   {
 *     role: "Managing Director",
 *     name: "A. N. Other",                          // optional
 *     photo: { src: "/team/managing-director.jpg", width: 800, height: 800 },
 *     focus: "…",
 *   }
 *
 * With a photo the card shows it. With a name but no photo it shows a monogram.
 * With neither it shows the role icon, which still reads as intentional.
 */

import type { ComponentType, SVGProps } from "react";
import {
  IconCleaning,
  IconGauge,
  IconLeaf,
  IconMixing,
  IconPest,
  IconPhone,
  IconShield,
  IconUsers,
  IconWater,
} from "@/components/icons";
import { contact } from "@/lib/site";

export type TeamMember = {
  role: string;
  /** Optional until confirmed. */
  name?: string;
  /** One line on what this role is accountable for. */
  focus: string;
  /** Only where a published address genuinely reaches this role. */
  email?: string;
  photo?: { src: string; width: number; height: number };
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type OrgTier = {
  id: string;
  label: string;
  blurb: string;
  members: TeamMember[];
};

export const orgTiers: OrgTier[] = [
  {
    id: "direction",
    label: "Direction",
    blurb: "Accountable for the standard the company is held to, and reachable when it matters.",
    members: [
      {
        role: "Managing Director",
        focus:
          "Owns client relationships and commercial terms. The escalation point when a plant needs a decision made at pace.",
        email: contact.email,
        icon: IconShield,
      },
      {
        role: "Technical Director",
        focus:
          "Signs off chemistry, method statements and effluent programmes. Answerable for what we put on your surfaces and into your drains.",
        email: contact.email,
        icon: IconLeaf,
      },
    ],
  },
  {
    id: "management",
    label: "Management",
    blurb: "The layer that turns a written programme into crews on site, on schedule.",
    members: [
      {
        role: "Operations Manager",
        focus: "Scheduling, crew allocation, equipment and mobilisation across every live contract.",
        icon: IconUsers,
      },
      {
        role: "Quality & Compliance Manager",
        focus: "Verification results, audit packs, safety records and corrective actions.",
        icon: IconGauge,
      },
      {
        role: "Client Accounts",
        focus: "Named contact per plant. Handles reporting, review meetings and change requests.",
        icon: IconPhone,
      },
    ],
  },
  {
    id: "delivery",
    label: "Delivery teams",
    blurb: "One trained team per service line, inducted to your plant before the first shift.",
    members: [
      {
        role: "Factory Cleaning Crews",
        focus: "Site supervisors and cleaning operatives working nights, weekends and shutdowns.",
        icon: IconCleaning,
      },
      {
        role: "Pest Control Technicians",
        focus: "Licensed technicians running monitoring, exclusion, treatment and fumigation.",
        icon: IconPest,
      },
      {
        role: "Mixing Unit Chemists",
        focus: "Blending, titration and dosing equipment across the plants we supply.",
        icon: IconMixing,
      },
      {
        role: "Waste Water Technicians",
        focus: "Sampling, treatment support, interceptor servicing and discharge records.",
        icon: IconWater,
      },
    ],
  },
];

/** Initials for the monogram fallback, e.g. "Asha N. Mwita" gives "AM". */
export function monogram(name: string) {
  const parts = name.trim().split(/\s+/).filter((p) => !p.endsWith("."));
  if (parts.length === 0) return "";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return (first + last).toUpperCase();
}
