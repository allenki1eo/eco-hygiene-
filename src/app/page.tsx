import Link from "next/link";
import { services } from "@/lib/services";
import { complianceNotes, contact, guarantees } from "@/lib/site";
import { PlantIllustration } from "@/components/plant-illustration";
import {
  CheckList,
  CtaBand,
  PartnerStrip,
  ServiceCard,
  StatStrip,
} from "@/components/sections";
import { ButtonLink, Container, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import {
  IconArrowRight,
  IconClock,
  IconGauge,
  IconLeaf,
  IconPhone,
  IconShield,
  IconUsers,
} from "@/components/icons";

const pillars = [
  {
    icon: IconShield,
    title: "Trust earned inside live plants",
    body: "We work around running lines, at night and during shutdowns. Vetted crews, plant-specific induction and a named account lead who picks up the phone.",
  },
  {
    icon: IconGauge,
    title: "Quality you can put in front of an auditor",
    body: "Method statements, chemical dilution records, swab and ATP verification, pest activity trends and effluent readings, issued to you and not filed away.",
  },
  {
    icon: IconUsers,
    title: "Experience in beverage manufacturing",
    body: "Filling halls, CIP support, high-care zones, drain systems and effluent plants. We know the failure modes your plant is trying to avoid.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-carbon-950">
        <div aria-hidden className="absolute inset-0 bg-blueprint opacity-60" />

        <Container className="relative">
          <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
            <div className="lg:col-span-6 xl:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-moss-400/25 bg-moss-400/10 px-4 py-1.5">
                  <span aria-hidden className="size-1.5 rounded-full bg-moss-400" />
                  <span className="eyebrow text-moss-300">
                    Eco-friendly industrial hygiene
                    <span className="max-sm:hidden"> · Shinyanga</span>
                  </span>
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 text-4xl leading-[1.04] text-white sm:text-5xl xl:text-[3.75rem]">
                  Hygiene standards your{" "}
                  <span className="text-gradient">production line</span> can be
                  audited against.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-carbon-300">
                  Ecohygiene keeps Tanzanian beverage and manufacturing plants clean, pest-free
                  and compliant, from the filling hall floor to the water that leaves your
                  site. Eco-friendly by specification, industrial by standard.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact#quote" withArrow className="w-full sm:w-auto">
                    Request a Quote
                  </ButtonLink>
                  <ButtonLink href="/services" variant="ghost" className="w-full sm:w-auto">
                    Explore our services
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
                  {[
                    { term: "Response", detail: "Within 24 hours" },
                    { term: "Cover", detail: `${contact.hoursShort} on site` },
                    { term: "Chemistry", detail: "Biodegradable first" },
                  ].map((item) => (
                    <div key={item.term}>
                      <dt className="eyebrow text-carbon-300">{item.term}</dt>
                      <dd className="mt-2 text-sm font-medium text-white">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={200} className="lg:col-span-6 lg:col-start-7 xl:col-span-7">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-x-6 -inset-y-10 rounded-[3rem] bg-white/[0.03] ring-1 ring-white/10 backdrop-blur-[2px]"
                />
                <PlantIllustration className="relative" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Partners */}
      <section className="border-b border-carbon-900/10 bg-white py-14 sm:py-16">
        <Container>
          <PartnerStrip />
        </Container>
      </section>

      {/* ------------------------------------------------------------ Services */}
      <section className="relative py-20 sm:py-28" id="services">
        <div aria-hidden className="absolute inset-0 bg-blueprint-light opacity-60" />
        <Container className="relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Four services, one hygiene programme."
              lead="Most clients start with one and end up with all four, because the problems are connected: what you clean with ends up in your effluent, and what you leave behind feeds the pests."
            />
            <Reveal delay={120}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-medium text-carbon-900 transition hover:text-moss-600"
              >
                All services in detail
                <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i * 90} />
            ))}
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- Why us */}
      <section className="relative overflow-hidden bg-carbon-950 py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                dark
                eyebrow="Why Ecohygiene"
                title="A contractor your quality manager stops worrying about."
                lead="Hygiene contracts fail in predictable ways: crews who never learn the plant, dilution guessed at the bucket, and paperwork produced the day before an audit. We built the company around removing those three."
              />
              <Reveal delay={140} className="mt-10">
                <ButtonLink href="/company" variant="ghost" withArrow>
                  About the company
                </ButtonLink>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-4">
                {pillars.map((pillar, i) => (
                  <Reveal
                    as="li"
                    key={pillar.title}
                    delay={i * 100}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:border-moss-400/30 hover:bg-white/[0.06] sm:p-8"
                  >
                    <div className="flex gap-5">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-moss-400/12 text-moss-300">
                        <pillar.icon className="size-6" />
                      </span>
                      <div>
                        <h3 className="text-lg text-white">{pillar.title}</h3>
                        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-carbon-300">
                          {pillar.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- Guarantees */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Service guarantees"
            title="What every Ecohygiene contract includes."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="rounded-3xl border border-carbon-900/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-moss-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg leading-snug text-carbon-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-carbon-600">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <StatStrip />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------- Eco commitment */}
      <section className="relative overflow-hidden bg-carbon-900 py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 bg-blueprint opacity-40" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionHeading
                dark
                eyebrow="Eco-friendly by specification"
                title="Solving a hygiene problem should not create an environmental one."
                lead="Anyone can pass a swab test with enough chlorine. The harder job, the one we take on, is passing it with chemistry that breaks down, water you did not waste, and effluent your treatment plant can actually handle."
              />
              <Reveal delay={140} className="mt-10">
                <ButtonLink href="/services/waste-water-stewardship" variant="ghost" withArrow>
                  Waste water stewardship
                </ButtonLink>
              </Reveal>
            </div>

            <Reveal delay={160} className="lg:col-span-5 lg:col-start-8">
              <div className="rounded-3xl border border-white/10 bg-carbon-950/60 p-8 backdrop-blur sm:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-moss-400/12 text-moss-300">
                  <IconLeaf className="size-6" />
                </span>
                <h3 className="mt-6 text-xl text-white">How we work</h3>
                <div className="mt-6">
                  <CheckList
                    dark
                    items={[
                      "Biodegradable, low-phosphate chemistry as the default specification",
                      "Dosing control that removes over-concentration at the point of use",
                      "Integrated pest management before pesticide, every time",
                      "Effluent load reduced at source before more treatment is proposed",
                      "Waste routed only to licensed disposal, with transfer records",
                    ]}
                  />
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="eyebrow text-carbon-300">Working standards</p>
                  <ul className="mt-4 space-y-2 text-sm text-carbon-300">
                    {complianceNotes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- Contact */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Talk to a person"
                title="Something urgent on site right now?"
                lead="Infestations, spill events and failed swabs do not wait for office hours, and neither do we. Call the number below and you will reach someone who can mobilise a crew."
              />
            </div>
            <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-3xl border border-carbon-900/10 bg-white p-8 shadow-lift">
                <Eyebrow tone="muted">24/7 line</Eyebrow>
                <a
                  href={`tel:${contact.phoneIntl}`}
                  className="mt-5 flex items-center gap-3 font-display text-2xl font-semibold tracking-tight text-carbon-900 transition hover:text-moss-600"
                >
                  <IconPhone className="size-5 text-moss-600" />
                  {contact.phone}
                </a>
                <p className="mt-4 flex items-center gap-2 text-sm text-carbon-600">
                  <IconClock className="size-4 text-carbon-500" />
                  {contact.hours}
                </p>
                <ButtonLink href="/contact" variant="outline" withArrow className="mt-7 w-full">
                  All contact details
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
