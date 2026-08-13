import Image from "next/image";
import { IconMail } from "@/components/icons";
import { orgTiers, type TeamMember } from "@/lib/team";
import { Container, Reveal, SectionHeading, cx } from "@/components/ui";

function LeadershipCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <Reveal as="article" delay={index * 100} className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-carbon-800">
        {member.photo && (
          <Image
            src={member.photo.src}
            alt={`Portrait of ${member.name}`}
            width={member.photo.width}
            height={member.photo.height}
            sizes="(min-width: 1024px) 38vw, (min-width: 640px) 45vw, 100vw"
            className="size-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-carbon-950 via-carbon-950/65 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="eyebrow text-moss-300">{member.role}</p>
          <h3 className="mt-2 text-2xl text-white sm:text-3xl">{member.name}</h3>
        </div>
      </div>

      <div className="border-x border-b border-carbon-900/10 bg-white p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-carbon-600">{member.focus}</p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-moss-700 transition hover:text-moss-500"
          >
            <IconMail className="size-3.5" />
            {member.email}
          </a>
        )}
      </div>
    </Reveal>
  );
}

function RoleCard({ member, index }: { member: TeamMember; index: number }) {
  const Icon = member.icon;

  return (
    <Reveal
      as="li"
      delay={(index % 4) * 65}
      className="group border-t border-carbon-900/12 py-7 sm:py-8"
    >
      <div className="flex gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-moss-50 text-moss-700 transition group-hover:bg-moss-100">
          <Icon className="size-5" />
        </span>
        <div>
          <h4 className="text-base text-carbon-900">{member.name ?? member.role}</h4>
          {member.name && <p className="mt-1 text-xs font-medium text-moss-700">{member.role}</p>}
          <p className="mt-2 text-sm leading-relaxed text-carbon-500">{member.focus}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function TeamOrg() {
  const leadership = orgTiers.find((tier) => tier.id === "direction")?.members ?? [];
  const supportingTiers = orgTiers.filter((tier) => tier.id !== "direction");

  return (
    <section id="team" className="relative overflow-hidden bg-carbon-50 py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-blueprint-light opacity-60" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our team"
          title="The people behind the standard."
          lead="Experienced leadership, backed by specialists who understand the realities of industrial hygiene and keep every programme accountable."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-8">
          {leadership.map((member, index) => (
            <LeadershipCard key={member.role} member={member} index={index} />
          ))}
        </div>

        <div className="mt-20 border-t border-carbon-900/12 pt-12 sm:mt-24 sm:pt-16">
          <Reveal className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-hydro-700">Our wider structure</p>
              <h3 className="mt-3 text-2xl text-carbon-900">Specialists at every stage.</h3>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-carbon-600 lg:col-span-7 lg:col-start-6">
              Our directors stay close to delivery, supported by managers and trained service teams who
              own the work from mobilisation through verification and reporting.
            </p>
          </Reveal>

          {supportingTiers.map((tier, tierIndex) => (
            <div
              key={tier.id}
              className={cx(
                "mt-10 grid gap-x-8 lg:grid-cols-12",
                tierIndex > 0 && "border-t border-carbon-900/12 pt-10",
              )}
            >
              <Reveal className="lg:col-span-3">
                <p className="eyebrow text-carbon-500">{tier.label}</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-carbon-500">{tier.blurb}</p>
              </Reveal>
              <ul className="mt-7 grid gap-x-7 sm:grid-cols-2 lg:col-span-9 lg:mt-0">
                {tier.members.map((member, index) => (
                  <RoleCard key={member.role} member={member} index={index} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
