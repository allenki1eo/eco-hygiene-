import Link from "next/link";
import { partners, stats } from "@/lib/site";
import type { Service } from "@/lib/services";
import { IconArrowRight, IconCheck, serviceIcons } from "@/components/icons";
import { ButtonLink, Container, Eyebrow, Reveal, SectionHeading, cx } from "@/components/ui";

/* -------------------------------------------------------------------------- */
/* Service card                                                               */
/* -------------------------------------------------------------------------- */

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const Icon = serviceIcons[service.slug];
  const accent =
    service.accent === "moss"
      ? { text: "text-moss-600", ring: "group-hover:border-moss-400/60", glow: "bg-moss-400/12" }
      : { text: "text-hydro-600", ring: "group-hover:border-hydro-400/60", glow: "bg-hydro-400/12" };

  return (
    <Reveal as="article" delay={delay} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className={cx(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-carbon-900/10 bg-white p-7 transition duration-500 ease-out hover:-translate-y-1.5 hover:shadow-lift-lg sm:p-8",
          accent.ring,
        )}
      >
        <div
          aria-hidden
          className={cx(
            "absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
            accent.glow,
          )}
        />
        <div className="relative flex items-start justify-between gap-4">
          <span
            className={cx(
              "inline-flex size-12 items-center justify-center rounded-2xl bg-carbon-50 transition-colors duration-500 group-hover:bg-carbon-950",
              accent.text,
            )}
          >
            <Icon className="size-6 transition-colors duration-500 group-hover:text-white" />
          </span>
          <span className="font-mono text-xs tracking-[0.2em] text-carbon-500">{service.index}</span>
        </div>

        <h3 className="relative mt-7 text-xl leading-snug text-carbon-900">{service.name}</h3>
        <p className="relative mt-3 flex-1 text-[0.9375rem] leading-relaxed text-carbon-600">
          {service.summary}
        </p>
        <span
          className={cx(
            "relative mt-6 inline-flex items-center gap-2 text-sm font-medium",
            accent.text,
          )}
        >
          Explore the service
          <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/* Stats                                                                      */
/* -------------------------------------------------------------------------- */

export function StatStrip({ dark = false }: { dark?: boolean }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-carbon-900/10 bg-carbon-900/10 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 80}
          className={cx("p-6 sm:p-8", dark ? "bg-carbon-900" : "bg-white")}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span
              className={cx(
                "font-display text-4xl font-semibold tracking-tight sm:text-5xl",
                dark ? "text-white" : "text-carbon-900",
              )}
            >
              {stat.value}
            </span>
            <span
              className={cx(
                "mt-3 block text-sm font-medium",
                dark ? "text-carbon-200" : "text-carbon-800",
              )}
            >
              {stat.label}
            </span>
            <span
              className={cx("mt-1.5 block text-xs leading-relaxed", dark ? "text-carbon-300" : "text-carbon-500")}
            >
              {stat.detail}
            </span>
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------------------- */
/* Partners                                                                   */
/* -------------------------------------------------------------------------- */

export function PartnerStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div>
      <p
        className={cx(
          "eyebrow text-center",
          dark ? "text-carbon-300" : "text-carbon-500",
        )}
      >
        Trusted on beverage production sites
      </p>
      <ul className={cx(
          "mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border sm:grid-cols-3",
          dark ? "border-white/10 bg-white/10" : "border-carbon-900/10 bg-carbon-900/10",
        )}>
        {partners.map((partner, i) => (
          <Reveal
            as="li"
            key={partner.name}
            delay={i * 90}
            className={cx(
              "flex flex-col items-center justify-center gap-1.5 px-6 py-8 text-center",
              dark ? "bg-white/[0.03]" : "bg-white",
            )}
          >
            {/* Client names set as type. Replace with supplied logo assets once
                written permission to display each mark has been obtained. */}
            <span
              className={cx(
                "font-display text-2xl font-semibold tracking-tight",
                dark ? "text-white/85" : "text-carbon-800",
              )}
            >
              {partner.name}
            </span>
            <span className={cx("text-xs", dark ? "text-carbon-300" : "text-carbon-500")}>
              {partner.note}
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Checklist                                                                  */
/* -------------------------------------------------------------------------- */

export function CheckList({
  items,
  dark = false,
  columns = 1,
}: {
  items: string[];
  dark?: boolean;
  columns?: 1 | 2;
}) {
  return (
    <ul className={cx("space-y-4", columns === 2 && "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-4")}>
      {items.map((item) => (
        <li key={item} className="flex gap-3.5">
          <span
            className={cx(
              "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
              dark ? "bg-moss-400/15 text-moss-300" : "bg-moss-500/12 text-moss-600",
            )}
          >
            <IconCheck className="size-3.5" strokeWidth={2.2} />
          </span>
          <span className={cx("text-[0.9375rem] leading-relaxed", dark ? "text-carbon-300" : "text-carbon-600")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA band                                                                   */
/* -------------------------------------------------------------------------- */

export function CtaBand({
  eyebrow = "Start a conversation",
  title = "Tell us what your plant is up against.",
  body = "Send the brief — line layout, shift pattern, current programme, the findings that keep coming back. We will walk the site and come back with a written scope and price.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-carbon-950 py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-aurora opacity-90" />
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
      <Container className="relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow tone="moss" className="justify-center text-moss-300">
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-6 text-3xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-carbon-300">{body}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact#quote" withArrow className="w-full sm:w-auto">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost" className="w-full sm:w-auto">
              See all services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page hero used by inner pages                                              */
/* -------------------------------------------------------------------------- */

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-carbon-950 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div aria-hidden className="absolute inset-0 bg-aurora opacity-80" />
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-carbon-950"
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow tone="moss" className="text-moss-300">
            {eyebrow}
          </Eyebrow>
          <h1 className="mt-6 text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {lead && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-carbon-300">{lead}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}

export { SectionHeading };
