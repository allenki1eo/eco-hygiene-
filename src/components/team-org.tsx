import Image from "next/image";
import { monogram, orgTiers, type OrgTier, type TeamMember } from "@/lib/team";
import { IconMail } from "@/components/icons";
import { Container, Reveal, SectionHeading, cx } from "@/components/ui";

/**
 * Company structure as an editorial directory.
 *
 * Each level is a numbered band: the tier sits in a sticky left column while
 * its people scroll past on the right as hairline-separated rows. Rows rather
 * than a centred card grid, because a grid leaves ragged empty cells whenever a
 * level holds two or three people, and rows fill the measure at any count.
 */

type Accent = {
  ghost: string;
  rule: string;
  ring: string;
  fill: string;
  role: string;
  count: string;
};

const TIER_ACCENT: Record<string, Accent> = {
  direction: {
    ghost: "text-moss-400/25",
    rule: "bg-moss-400",
    ring: "ring-moss-400/25 group-hover:ring-moss-400/70",
    fill: "bg-moss-400/12 text-moss-300",
    role: "text-moss-300",
    count: "border-moss-400/25 text-moss-300",
  },
  management: {
    ghost: "text-hydro-400/25",
    rule: "bg-hydro-400",
    ring: "ring-hydro-400/25 group-hover:ring-hydro-400/70",
    fill: "bg-hydro-400/12 text-hydro-300",
    role: "text-hydro-300",
    count: "border-hydro-400/25 text-hydro-300",
  },
  delivery: {
    ghost: "text-white/15",
    rule: "bg-carbon-300",
    ring: "ring-white/15 group-hover:ring-white/45",
    fill: "bg-white/[0.08] text-carbon-100",
    role: "text-carbon-200",
    count: "border-white/15 text-carbon-200",
  },
};

function Portrait({ member, accent }: { member: TeamMember; accent: Accent }) {
  const Icon = member.icon;

  return (
    <span
      className={cx(
        "flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 transition duration-500 sm:size-24",
        accent.ring,
        member.photo ? "bg-carbon-900" : accent.fill,
      )}
    >
      {member.photo ? (
        <Image
          src={member.photo.src}
          alt=""
          aria-hidden
          width={member.photo.width}
          height={member.photo.height}
          sizes="96px"
          className="size-full object-cover"
        />
      ) : member.name ? (
        <span className="font-display text-xl font-semibold tracking-tight">
          {monogram(member.name)}
        </span>
      ) : (
        <Icon className="size-8" />
      )}
    </span>
  );
}

function MemberRow({ member, accent }: { member: TeamMember; accent: Accent }) {
  return (
    <div className="group flex gap-5 sm:gap-7">
      <Portrait member={member} accent={accent} />

      <div className="min-w-0 flex-1">
        {/* The role becomes the heading until a name is supplied, so a row is
            never left with a gap where a person should be. */}
        <h4 className="text-lg leading-snug text-white sm:text-xl">
          {member.name ?? member.role}
        </h4>

        {member.name && (
          <p className={cx("mt-1 text-sm font-medium", accent.role)}>{member.role}</p>
        )}

        <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-carbon-300">{member.focus}</p>

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="mt-3 inline-flex items-center gap-2 text-xs text-carbon-300 transition hover:text-white"
          >
            <IconMail className="size-3.5 shrink-0" />
            <span className="break-all">{member.email}</span>
          </a>
        )}
      </div>
    </div>
  );
}

function Tier({ tier, index }: { tier: OrgTier; index: number }) {
  const accent = TIER_ACCENT[tier.id] ?? TIER_ACCENT.delivery;
  const number = String(index + 1).padStart(2, "0");
  const count = tier.members.length;

  return (
    <section
      aria-labelledby={`tier-${tier.id}`}
      className={cx(
        "grid gap-10 lg:grid-cols-12 lg:gap-12",
        index > 0 && "mt-16 border-t border-white/8 pt-16 sm:mt-20 sm:pt-20",
      )}
    >
      {/* Sticky so the level stays with its people while they scroll past. */}
      <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
        <span
          aria-hidden
          className={cx(
            "block font-mono text-6xl font-medium leading-none sm:text-7xl",
            accent.ghost,
          )}
        >
          {number}
        </span>

        <h3 id={`tier-${tier.id}`} className="mt-5 text-2xl text-white sm:text-3xl">
          {tier.label}
        </h3>

        <span aria-hidden className={cx("mt-5 block h-0.5 w-12 rounded-full", accent.rule)} />

        <p className="mt-5 max-w-sm text-sm leading-relaxed text-carbon-300">{tier.blurb}</p>

        <span
          className={cx(
            "eyebrow mt-6 inline-flex rounded-full border px-3 py-1.5",
            accent.count,
          )}
        >
          {count} {count === 1 ? "role" : "roles"}
        </span>
      </Reveal>

      <ul className="lg:col-span-8">
        {tier.members.map((member, i) => (
          <Reveal
            as="li"
            key={member.role}
            delay={i * 70}
            className="border-b border-white/8 py-8 first:pt-0 last:border-0 last:pb-0"
          >
            <MemberRow member={member} accent={accent} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function TeamOrg() {
  const headcount = orgTiers.reduce((total, tier) => total + tier.members.length, 0);

  return (
    <section id="team" className="relative overflow-hidden bg-carbon-950 py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
      <Container className="relative">
        <SectionHeading
          dark
          eyebrow="The team"
          title="Who you are dealing with, and who answers for what."
          lead={`${headcount} roles across three levels. A small structure on purpose, so nothing gets lost between a director and the person holding the lance on your factory floor.`}
        />

        <div className="mt-16 sm:mt-20">
          {orgTiers.map((tier, i) => (
            <Tier key={tier.id} tier={tier} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
