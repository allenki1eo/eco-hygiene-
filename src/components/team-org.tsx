import Image from "next/image";
import { monogram, orgTiers, type OrgTier, type TeamMember } from "@/lib/team";
import { IconMail } from "@/components/icons";
import { Container, Reveal, SectionHeading, cx } from "@/components/ui";

/**
 * Company structure as a numbered directory: each level of the organisation is
 * a titled band (01, 02, 03) and the people in it sit beneath as circular
 * portraits. Hierarchy is carried by the numbering and the reading order rather
 * than by connector lines, which keeps it intact on a phone.
 */

const TIER_ACCENT: Record<string, { number: string; ring: string; fill: string; role: string }> = {
  direction: {
    number: "text-moss-300",
    ring: "ring-moss-400/30 group-hover:ring-moss-400/70",
    fill: "bg-moss-400/12 text-moss-300",
    role: "text-moss-300",
  },
  management: {
    number: "text-hydro-300",
    ring: "ring-hydro-400/30 group-hover:ring-hydro-400/70",
    fill: "bg-hydro-400/12 text-hydro-300",
    role: "text-hydro-300",
  },
  delivery: {
    number: "text-carbon-300",
    ring: "ring-white/15 group-hover:ring-white/40",
    fill: "bg-white/[0.06] text-carbon-200",
    role: "text-carbon-200",
  },
};

function Portrait({ member, tierId }: { member: TeamMember; tierId: string }) {
  const accent = TIER_ACCENT[tierId] ?? TIER_ACCENT.delivery;
  const Icon = member.icon;

  return (
    <span
      className={cx(
        "flex size-28 items-center justify-center overflow-hidden rounded-full ring-1 transition duration-500 sm:size-32",
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
          sizes="128px"
          className="size-full object-cover"
        />
      ) : member.name ? (
        <span className="font-display text-2xl font-semibold tracking-tight">
          {monogram(member.name)}
        </span>
      ) : (
        <Icon className="size-10" />
      )}
    </span>
  );
}

function MemberCard({ member, tierId }: { member: TeamMember; tierId: string }) {
  const accent = TIER_ACCENT[tierId] ?? TIER_ACCENT.delivery;

  return (
    <div className="group flex flex-col items-center text-center">
      <Portrait member={member} tierId={tierId} />

      {/* The role becomes the heading until a name is supplied, so a card is
          never left with a gap where a person should be. */}
      <h4 className="mt-6 text-lg leading-snug text-white">{member.name ?? member.role}</h4>

      {member.name && <p className={cx("mt-1 text-sm font-medium", accent.role)}>{member.role}</p>}

      <p className="mt-3 max-w-xs text-sm leading-relaxed text-carbon-300">{member.focus}</p>

      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-4 inline-flex items-center gap-2 text-xs text-carbon-300 transition hover:text-white"
        >
          <IconMail className="size-3.5 shrink-0" />
          <span className="break-all">{member.email}</span>
        </a>
      )}
    </div>
  );
}

function Tier({ tier, index }: { tier: OrgTier; index: number }) {
  const accent = TIER_ACCENT[tier.id] ?? TIER_ACCENT.delivery;

  return (
    <section aria-labelledby={`tier-${tier.id}`} className={cx(index > 0 && "mt-20 sm:mt-24")}>
      <Reveal>
        <div className="flex items-baseline gap-5">
          <span
            aria-hidden
            className={cx("font-mono text-2xl font-medium sm:text-3xl", accent.number)}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 id={`tier-${tier.id}`} className="text-2xl text-white sm:text-3xl">
            {tier.label}
          </h3>
          <span aria-hidden className="h-px flex-1 bg-white/10" />
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-carbon-300 sm:pl-14">
          {tier.blurb}
        </p>
      </Reveal>

      {/* One grid for every tier, so portraits line up down the page whether a
          level holds two people or six. */}
      <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {tier.members.map((member, i) => (
          <Reveal as="li" key={member.role} delay={i * 80}>
            <MemberCard member={member} tierId={tier.id} />
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
