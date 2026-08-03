import Image from "next/image";
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
      ? { text: "text-moss-600", ring: "group-hover:border-moss-400/60", chip: "text-moss-600" }
      : { text: "text-hydro-600", ring: "group-hover:border-hydro-400/60", chip: "text-hydro-600" };

  return (
    <Reveal as="article" delay={delay} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className={cx(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-carbon-900/10 bg-white transition duration-500 ease-out hover:-translate-y-1.5 hover:shadow-lift-lg",
          accent.ring,
        )}
      >
        {/* Media panel. A photo where we have one; otherwise a designed
            gradient panel carrying the service icon, so a card without
            photography still looks deliberate rather than unfinished. */}
        <div className="relative aspect-[16/10] overflow-hidden bg-carbon-900">
          {service.image ? (
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={service.image.width}
              height={service.image.height}
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          ) : (
            <>
              <div aria-hidden className="absolute inset-0 bg-blueprint opacity-60" />
              {/* Oversized, cropped watermark — decorative, so it does not
                  read as a duplicate of the icon chip below it. */}
              <Icon
                aria-hidden
                className="absolute -bottom-8 -right-6 size-44 text-white/12 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </>
          )}

          {/* Scrim keeps the bottom edge dark enough for the icon chip to sit
              against, whatever the photo is doing. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-carbon-950/65 via-transparent to-carbon-950/20"
          />
          {/* The index gets its own chip rather than relying on the scrim —
              these photos range from a dark plant hall to a bright sky. */}
          <span className="absolute right-3.5 top-3.5 rounded-full bg-carbon-950/55 px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.2em] text-white backdrop-blur-sm">
            {service.index}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col p-7 sm:p-8">
          {/* Icon chip straddles the media edge — ties photo and copy together. */}
          <span
            className={cx(
              "absolute -top-6 left-7 inline-flex size-12 items-center justify-center rounded-2xl bg-white shadow-lift ring-1 ring-carbon-900/5 transition-colors duration-500 group-hover:bg-carbon-950 sm:left-8",
              accent.chip,
            )}
          >
            <Icon className="size-6 transition-colors duration-500 group-hover:text-white" />
          </span>

          <h3 className="mt-6 text-xl leading-snug text-carbon-900">{service.name}</h3>
          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-carbon-600">
            {service.summary}
          </p>
          <span
            className={cx("mt-6 inline-flex items-center gap-2 text-sm font-medium", accent.text)}
          >
            Explore the service
            <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
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

/** Common baseline the logos are optically centred on. */
const LOGO_ROW_HEIGHT = 76;

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
              "flex flex-col items-center justify-center gap-4 px-6 py-9 text-center",
              dark ? "bg-white/[0.03]" : "bg-white",
            )}
          >
            {/* Fixed row height, natural aspect ratio: logos are never squashed
                into equal boxes. Each displayHeight is set by eye in site.ts so
                the roundel and the wordmarks carry the same visual weight. */}
            <span
              className={cx(
                "flex items-center justify-center",
                // Two of these marks are dark on transparent, so on a dark
                // surface they sit on a light chip rather than disappearing.
                dark && "rounded-xl bg-white px-5 py-3",
              )}
              style={{ height: dark ? undefined : LOGO_ROW_HEIGHT }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                style={{ height: partner.displayHeight, width: "auto" }}
                className="max-w-full object-contain"
              />
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
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
      <Container className="relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow tone="moss-dark" className="justify-center">
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
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Optional full-bleed banner photograph behind the whole hero. */
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-carbon-950 pt-16 pb-20 sm:pt-24 sm:pb-28">
      {image && (
        <Image
          src={image}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      )}
      {/* Same flat wash as the service banners: heavy enough that the copy
          clears AA over the brightest part of the photograph. */}
      {image && <div aria-hidden className="absolute inset-0 -z-10 bg-carbon-950/78" />}
      <div aria-hidden className={cx("absolute inset-0 -z-10 bg-blueprint", image ? "opacity-40" : "opacity-50")} />
      <Container className="relative">
        <div className="max-w-3xl">
          {/* Over a photo the copy steps one tone lighter. */}
          <Eyebrow tone={image ? "moss-photo" : "moss-dark"}>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {lead && (
            <p
              className={cx(
                "mt-7 max-w-2xl text-lg leading-relaxed",
                image ? "text-carbon-200" : "text-carbon-300",
              )}
            >
              {lead}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}

export { SectionHeading };
