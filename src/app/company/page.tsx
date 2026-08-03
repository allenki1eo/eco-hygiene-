import type { Metadata } from "next";
import { complianceNotes, contact, site, values } from "@/lib/site";
import { CtaBand, PageHero, PartnerStrip, StatStrip } from "@/components/sections";
import { ButtonLink, Container, Reveal, SectionHeading } from "@/components/ui";
import { IconLeaf, IconShield, IconUsers } from "@/components/icons";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Ecohygiene Company Limited is a Tanzanian industrial hygiene and environmental services company based in Shinyanga. Family-oriented, collaborative and built on sustainable practice.",
  alternates: { canonical: "/company" },
};

const culture = [
  {
    icon: IconUsers,
    title: "Family-oriented",
    body: "Ecohygiene is run like a family business because it is one. People stay, learn the plants they serve, and are trusted with responsibility early.",
  },
  {
    icon: IconShield,
    title: "Collaborative",
    body: "We work alongside your quality, production and maintenance teams rather than around them. Shared plans, shared records, one standard.",
  },
  {
    icon: IconLeaf,
    title: "Sustainable by habit",
    body: "The eco-friendly choice is the default specification, not the upsell. If a greener method holds the standard, that is the method we use.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="The company"
        title="An environmental services company that happens to be very good at cleaning."
        lead="Ecohygiene Company Limited was built for Tanzanian industry, for factories that need to hold a hygiene standard every shift, without leaving a bigger problem behind them in the water and soil."
        image="/banners/company_banner1.jpg"
      />

      {/* ------------------------------------------------------------- Mission */}
      <section className="relative py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 bg-blueprint-light opacity-60" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Mission"
                title="Protect the product, the people and the water."
              />
              <Reveal delay={80} className="mt-8 space-y-5 text-lg leading-relaxed text-carbon-600">
                <p>
                  Every factory has three things it cannot afford to compromise: the product it
                  ships, the people who make it, and the environment it operates in. Hygiene work
                  touches all three at once, which is why it should never be the cheapest line in
                  the budget or the last thing scheduled before an audit.
                </p>
                <p>
                  Our mission is to give Tanzanian manufacturers a hygiene partner that meets an
                  international standard using methods the local environment can absorb.
                  Biodegradable chemistry, controlled dosing, integrated pest management and
                  effluent load reduced at source, applied consistently and documented every visit.
                </p>
              </Reveal>
            </div>

            <Reveal delay={140} className="lg:col-span-5 lg:col-start-8 lg:self-center">
              <figure className="rounded-3xl border border-carbon-900/10 bg-white p-8 shadow-lift sm:p-10">
                <blockquote className="font-display text-xl leading-snug text-carbon-900 sm:text-2xl">
                  “A plant is only as clean as its worst-kept drain, and only as sustainable as
                  the water it sends downstream.”
                </blockquote>
                <figcaption className="mt-6 border-t border-carbon-900/10 pt-6 text-sm text-carbon-600">
                  <span className="block font-medium text-carbon-800">The Directors</span>
                  {site.name}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- Values */}
      <section className="relative overflow-hidden bg-carbon-950 py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
        <Container className="relative">
          <SectionHeading
            dark
            align="center"
            eyebrow="Our values"
            title="Six things we hold ourselves to."
            lead="Not a poster in the office. These are the criteria we hire against, review contracts against, and lose work over when a client wants a corner cut."
          />

          <dl className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 70}
                className="bg-carbon-950 p-8 transition-colors duration-500 hover:bg-carbon-900"
              >
                <dt className="flex items-baseline gap-3">
                  <span className="font-mono text-xs tracking-[0.2em] text-moss-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-semibold tracking-tight text-white">
                    {value.title}
                  </span>
                </dt>
                <dd className="mt-4 text-[0.9375rem] leading-relaxed text-carbon-300">
                  {value.body}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------------------------------------------------------- Experience */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Experience"
            title="Earned on beverage production sites."
            lead="Our reference work is in drink manufacturing, the most demanding hygiene environment in the country, where sugar, water and warmth combine to punish any lapse in standard."
          />
          <div className="mt-14">
            <StatStrip />
          </div>
          <Reveal delay={120} className="mt-16">
            <PartnerStrip />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------- Culture */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Team culture"
                title="Good hygiene work is done by people who intend to stay."
                lead="Industrial cleaning has a reputation for churn: casual crews, no training, no ownership. We run the opposite model, and our clients feel the difference in the third month, not the first."
              />
              <Reveal delay={140} className="mt-10">
                <ButtonLink href="/contact" variant="outline" withArrow>
                  Work with us
                </ButtonLink>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-4">
                {culture.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item.title}
                    delay={i * 90}
                    className="rounded-3xl border border-carbon-900/10 bg-carbon-50 p-7 sm:p-8"
                  >
                    <div className="flex gap-5">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-moss-500/10 text-moss-600">
                        <item.icon className="size-6" />
                      </span>
                      <div>
                        <h3 className="text-lg text-carbon-900">{item.title}</h3>
                        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-carbon-600">
                          {item.body}
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

      {/* --------------------------------------------------- Standards / facts */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 rounded-3xl border border-carbon-900/10 bg-white p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl text-carbon-900">Working standards</h2>
              <ul className="mt-6 space-y-3">
                {complianceNotes.map((note) => (
                  <li
                    key={note}
                    className="border-b border-carbon-900/8 pb-3 text-[0.9375rem] text-carbon-600 last:border-0"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="text-2xl text-carbon-900">Company facts</h2>
              <dl className="mt-6 space-y-3 text-[0.9375rem]">
                {[
                  ["Registered name", site.name],
                  ["Head office", `${contact.address.city}, ${contact.address.country}`],
                  ["Sector", "Industrial hygiene & environmental services"],
                  ["Availability", contact.hours],
                  ["Areas served", "Tanzania, with focus on the Lake and Central zones"],
                ].map(([term, detail]) => (
                  <div
                    key={term}
                    className="flex flex-col gap-1 border-b border-carbon-900/8 pb-3 last:border-0 sm:flex-row sm:justify-between sm:gap-8"
                  >
                    <dt className="text-carbon-600">{term}</dt>
                    <dd className="font-medium text-carbon-900 sm:text-right">{detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Work with Ecohygiene"
        title="Bring us in before the next audit, not after it."
        body="We will survey your plant, tell you honestly what we would change, and quote only the work that needs doing."
      />
    </>
  );
}
