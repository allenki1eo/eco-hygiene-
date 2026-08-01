export type ServiceSlug =
  | "factory-general-cleaning"
  | "pest-control-management"
  | "mixing-units"
  | "waste-water-stewardship";

export type Service = {
  slug: ServiceSlug;
  /** Two-digit index used as a technical label in the UI. */
  index: string;
  name: string;
  /** Short label for nav and cards. */
  shortName: string;
  tagline: string;
  summary: string;
  /** Long-form opener on the detail page. */
  intro: string[];
  capabilities: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  eco: { headline: string; body: string; points: string[] };
  outcomes: string[];
  accent: "moss" | "hydro";
};

export const services: Service[] = [
  {
    slug: "factory-general-cleaning",
    index: "01",
    name: "Factory General Cleaning Services",
    shortName: "Factory Cleaning",
    tagline: "Deep cleaning built around a live production line",
    summary:
      "Eco-friendly deep cleaning for factory floors, production halls and high-care zones — scheduled around your shifts so the line keeps running.",
    intro: [
      "A beverage plant is not an office. Sugar residue feeds bacteria, condensate carries it into crevices, and a floor drain left alone for a fortnight becomes the dirtiest asset in the building. General cleaning in this environment is a technical job with a verification step, not a mop and a bucket.",
      "Ecohygiene runs scheduled and shutdown cleaning programmes for production halls, filling and packing areas, warehouses, staff welfare facilities and external hardstanding. We work nights, weekends and planned stoppages so that hygiene work never becomes the reason a line stands still.",
    ],
    capabilities: [
      {
        title: "Production and filling areas",
        body: "Conveyors, filler bowls, guarding, drip trays and the structure above the line — the surfaces that decide whether your swabs pass.",
      },
      {
        title: "Floors, drains and plinths",
        body: "Mechanical scrubbing, degreasing and drain sanitation on a rotation that stops biofilm re-establishing between visits.",
      },
      {
        title: "High-level and structural",
        body: "Beams, ducting, cable trays and light fittings cleaned at height under permit, removing the dust that eventually falls into open product.",
      },
      {
        title: "Warehouse and yard",
        body: "Racking, loading bays, external hardstanding and waste compounds — the areas where pest pressure usually starts.",
      },
      {
        title: "Post-construction and shutdown",
        body: "Handover cleans after installation or maintenance, taking a plant from builders' dust to production-ready.",
      },
      {
        title: "Welfare and office areas",
        body: "Canteens, changing rooms and offices held to the same standard, because cross-contamination travels on people.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Site survey",
        body: "We walk the plant with your quality lead, map hygiene zones and identify the surfaces that actually carry risk.",
      },
      {
        step: "02",
        title: "Written programme",
        body: "Every area gets a defined method, chemical, dilution, frequency and responsible party — issued as a document you keep.",
      },
      {
        step: "03",
        title: "Induction and mobilisation",
        body: "Crews are inducted to your plant rules, PPE and permit systems before the first shift. Equipment is staged on site.",
      },
      {
        step: "04",
        title: "Scheduled execution",
        body: "Work runs to the agreed calendar around your production plan, supervised by a named team leader on every shift.",
      },
      {
        step: "05",
        title: "Verification",
        body: "Visual sign-off plus swab or ATP checks where the zone demands it. Results go into your file, not just ours.",
      },
      {
        step: "06",
        title: "Review and adjust",
        body: "Monthly review of results, incidents and seasonal pressure. The programme changes when your plant changes.",
      },
    ],
    eco: {
      headline: "Clean without moving the problem downstream",
      body: "Industrial cleaning traditionally solves a hygiene problem by creating an effluent problem. We formulate against that: biodegradable surfactants, controlled dilution and mechanical action doing work that harsh chemistry would otherwise be asked to do.",
      points: [
        "Biodegradable, low-phosphate detergents as the default specification",
        "Dosing units and pre-mixed dilutions to eliminate over-use at the point of work",
        "Water-efficient methods — scrubber-driers and foam application over open hosing",
        "Chemical selection screened for compatibility with your effluent treatment",
      ],
    },
    outcomes: [
      "Swab and ATP results you can show an auditor",
      "Fewer unplanned stoppages caused by hygiene findings",
      "Lower chemical spend through correct dilution control",
      "A safer, better-lit, better-kept place for your people to work",
    ],
    accent: "moss",
  },
  {
    slug: "pest-control-management",
    index: "02",
    name: "Pest Control Management",
    shortName: "Pest Control",
    tagline: "Integrated pest management for food and beverage sites",
    summary:
      "Monitoring, exclusion and targeted treatment that keeps pests out of production areas — with the lightest chemical footprint the situation allows.",
    intro: [
      "In a food or beverage plant, pest control is an audit line item before it is anything else. A single sighting in a production hall can cost you a customer approval that took years to earn.",
      "We run integrated pest management (IPM) programmes: monitoring first, physical exclusion and housekeeping second, and targeted treatment only where it is genuinely warranted. Fumigation is available where the situation requires it, planned around production and executed under strict re-entry control.",
    ],
    capabilities: [
      {
        title: "Rodent management",
        body: "Externally focused bait and trap networks, internal non-toxic monitoring, and proofing of the entry routes that keep re-populating your site.",
      },
      {
        title: "Flying insect control",
        body: "Insect light traps positioned by airflow and light behaviour, with catch-tray analysis that tells you where they are getting in.",
      },
      {
        title: "Crawling insect control",
        body: "Cockroach, ant and stored-product insect programmes concentrating on harbourage, drains and warm plant voids.",
      },
      {
        title: "Fumigation",
        body: "Warehouse, container and raw-material fumigation under controlled access, with gas monitoring and documented clearance before hand-back.",
      },
      {
        title: "Bird proofing",
        body: "Netting, spiking and roost management on loading bays, silos and roof structures where birds create a contamination route.",
      },
      {
        title: "Audit support",
        body: "Trend reporting, site plans, device maps and corrective-action logs prepared for customer and third-party audits.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Risk survey",
        body: "Full site walk covering perimeter, drainage, waste, raw material intake and structural gaps. Findings are photographed and mapped.",
      },
      {
        step: "02",
        title: "Device plan",
        body: "Numbered devices placed to a plan you can follow, with a site map that auditors and your own team can read.",
      },
      {
        step: "03",
        title: "Exclusion works",
        body: "Proofing recommendations — door seals, mesh, drain covers, housekeeping changes — because keeping pests out beats killing them inside.",
      },
      {
        step: "04",
        title: "Routine monitoring",
        body: "Scheduled inspections at a frequency set by your risk level, each one recorded against the device plan.",
      },
      {
        step: "05",
        title: "Targeted intervention",
        body: "Treatment triggered by evidence, chosen for the lowest effective impact, and never applied over open product or packaging.",
      },
      {
        step: "06",
        title: "Trend reporting",
        body: "Activity plotted over time so you can see whether pressure is rising, and where. Recommendations carry named owners and dates.",
      },
    ],
    eco: {
      headline: "The least chemistry that actually works",
      body: "Blanket spraying is easy to sell and bad practice. Our programmes are built to reduce pesticide use over time by removing the conditions pests need — food, water, harbourage and access — so that treatment becomes the exception.",
      points: [
        "Non-toxic monitoring indoors wherever it can carry the load",
        "Physical exclusion and housekeeping treated as the primary control",
        "Targeted, evidence-triggered application instead of routine spraying",
        "Products selected for rapid breakdown and low non-target impact",
      ],
    },
    outcomes: [
      "Clean pest control section at customer and third-party audits",
      "Downward activity trend rather than a permanent chemical habit",
      "Documented device maps, inspection records and corrective actions",
      "Fewer emergency call-outs as exclusion work takes effect",
    ],
    accent: "moss",
  },
  {
    slug: "mixing-units",
    index: "03",
    name: "Mixing Units",
    shortName: "Mixing Units",
    tagline: "Hygiene chemistry blended for your plant",
    summary:
      "Industrial cleaning and hygiene chemicals blended, dosed and supplied to specification — the right product at the right strength, every shift.",
    intro: [
      "Most hygiene failures we are called to investigate are not caused by the wrong product. They are caused by the right product used at the wrong strength, by someone guessing at a dilution over a bucket.",
      "Our mixing units address both ends of that problem. We blend cleaning and hygiene chemistry to a specification written for your water, your soil type and your effluent plant, and we install the dosing equipment that makes correct dilution the path of least resistance for the operator.",
    ],
    capabilities: [
      {
        title: "Formulation to specification",
        body: "Alkaline, acidic, chlorinated and neutral products blended for your soil profile, water hardness and contact surfaces.",
      },
      {
        title: "Bulk supply and decanting",
        body: "Supply in bulk with controlled decanting, cutting packaging waste and per-litre cost against small-pack buying.",
      },
      {
        title: "Dosing equipment",
        body: "Venturi dosing, foam stations and satellite units installed at the point of use so the operator cannot over-concentrate.",
      },
      {
        title: "CIP and open-plant support",
        body: "Products and strengths matched to clean-in-place circuits and to manual open-plant cleaning, which are not the same job.",
      },
      {
        title: "Titration and verification",
        body: "In-use concentration checked on site, logged and corrected — so the strength on the label is the strength on the surface.",
      },
      {
        title: "Handling and training",
        body: "Safety data sheets, decant procedures, PPE guidance and hands-on training for the people using the product daily.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Water and soil analysis",
        body: "We test your incoming water and characterise the soil actually being removed. Formulation starts from evidence.",
      },
      {
        step: "02",
        title: "Formulation trial",
        body: "Candidate blends trialled on your surfaces at agreed contact times, measured against your existing product.",
      },
      {
        step: "03",
        title: "Specification sign-off",
        body: "The agreed blend is documented — actives, dilution, contact time, temperature, rinse requirement and compatibility notes.",
      },
      {
        step: "04",
        title: "Unit installation",
        body: "Mixing and dosing equipment installed and commissioned at the point of use, calibrated and clearly labelled.",
      },
      {
        step: "05",
        title: "Operator training",
        body: "Training delivered at the station, in the language of the shift, with a one-page instruction left in place.",
      },
      {
        step: "06",
        title: "Scheduled verification",
        body: "Recurring titration checks and usage review. Drift gets corrected before it turns into a hygiene finding.",
      },
    ],
    eco: {
      headline: "Concentrate locally, ship less water",
      body: "Buying pre-diluted chemistry means paying to truck water across the country in plastic. Blending close to the point of use cuts transport emissions, cuts packaging, and gives us direct control over what eventually reaches your drain.",
      points: [
        "Bulk supply and returnable containers instead of single-use small packs",
        "Readily biodegradable surfactants specified wherever performance allows",
        "Phosphate and NTA content minimised to protect downstream treatment",
        "Dosing control that typically removes the 20–40% over-use of manual dilution",
      ],
    },
    outcomes: [
      "Consistent in-use concentration across every shift and station",
      "Lower cost per litre in use, not just per litre purchased",
      "Less packaging waste and fewer part-used drums in the store",
      "Effluent load your treatment plant can actually handle",
    ],
    accent: "hydro",
  },
  {
    slug: "waste-water-stewardship",
    index: "04",
    name: "Waste Water Stewardship",
    shortName: "Waste Water",
    tagline: "Protecting the water that leaves your site",
    summary:
      "Monitoring, treatment support and discharge compliance for factory effluent — so the water leaving your plant is not a liability.",
    intro: [
      "Effluent is where every other decision in the plant eventually shows up. Product loss, over-dosed chemistry, a failed CIP, a cleaning crew hosing sugar to drain — all of it arrives at the same place, and all of it is measurable.",
      "Waste water stewardship is the part of our work we care most about. We help plants understand their effluent, reduce the load at source, keep treatment operating within its design envelope, and meet discharge requirements with records that stand up to inspection.",
    ],
    capabilities: [
      {
        title: "Effluent characterisation",
        body: "Sampling and analysis across the shift pattern to establish real COD, BOD, pH, TSS, oil and grease loads — not assumed ones.",
      },
      {
        title: "Load reduction at source",
        body: "Tracing spikes back to the line, drain or procedure that caused them, then fixing the cause rather than treating the symptom.",
      },
      {
        title: "Treatment plant support",
        body: "Operational support for screening, balancing, dosing, aeration and sludge handling, including operator coaching.",
      },
      {
        title: "Grease, drain and interceptor management",
        body: "Scheduled servicing of interceptors, sumps and drain networks, with waste transferred to licensed disposal.",
      },
      {
        title: "Discharge compliance",
        body: "Sampling schedules, consent-limit tracking and documentation prepared for regulator and customer inspection.",
      },
      {
        title: "Water reduction",
        body: "Identifying where clean water is being wasted — hose habits, single-pass cooling, rinse steps — and cutting draw at the meter.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Baseline sampling",
        body: "Composite and grab samples taken across a full production cycle to establish what is genuinely leaving site.",
      },
      {
        step: "02",
        title: "Source mapping",
        body: "Drain runs traced back to processes so each contribution to the load has an owner and a cause.",
      },
      {
        step: "03",
        title: "Reduction plan",
        body: "Practical interventions ranked by effect and cost — procedure changes first, capital last.",
      },
      {
        step: "04",
        title: "Treatment optimisation",
        body: "Dosing rates, balancing capacity and aeration tuned to the real load, with operators trained on the adjusted regime.",
      },
      {
        step: "05",
        title: "Routine monitoring",
        body: "Scheduled sampling and trend reporting against consent limits, with early warning before a breach becomes a notice.",
      },
      {
        step: "06",
        title: "Compliance reporting",
        body: "Records assembled for regulators, customers and internal sustainability reporting in a format that can be handed over as-is.",
      },
    ],
    eco: {
      headline: "The ecosystem downstream is the real client",
      body: "Water discharged from a factory in Shinyanga does not disappear. It reaches soil, groundwater and the people using it. Every reduction in load at source is a reduction in what the environment is asked to absorb — which is why we start with prevention rather than end-of-pipe treatment.",
      points: [
        "Load reduced at source before any additional treatment is proposed",
        "Recovery of product and solids that would otherwise be washed to drain",
        "Sludge and interceptor waste routed only to licensed disposal",
        "Fresh-water draw tracked and reduced alongside effluent quality",
      ],
    },
    outcomes: [
      "Discharge consistently inside consent limits, with the records to prove it",
      "Lower treatment chemical and energy cost through a stabilised load",
      "Early warning of process losses that were invisible on the line",
      "Credible environmental data for customer sustainability audits",
    ],
    accent: "hydro",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
