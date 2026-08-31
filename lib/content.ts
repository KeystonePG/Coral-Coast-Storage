// Sourced from the business plan, cost estimate and competitor analysis
// prepared by Keystone Property Group (27 August 2026). This facility is
// NOT yet built — zoning is unconfirmed and opening is not scheduled.
// Every figure here is a planning estimate, not a live offer.

export const site = {
  name: "Coral Coast Self Storage",
  tagline: "Indoor storage and open-air caravan, boat & vehicle parking",
  location: "Port Denison, WA",
};

export const status = {
  headline: "Coming to Port Denison",
  blurb:
    "We're planning Port Denison and Dongara's first dedicated self storage and open-air caravan, boat and vehicle storage facility. Zoning is still being confirmed, so we don't have an opening date yet — register your interest and we'll be in touch as plans firm up.",
};

export const concept = {
  indoorUnits: "~300 indoor units (~3,600 m² total)",
  yardBays: "~80 open-air bays (~3,200 m² hardstand)",
  landSize: "~1.5 hectares",
};

export const whyHere = [
  "Port Denison and Dongara currently have no self storage or dedicated caravan/boat storage facility — the nearest cluster of operators is about 65km away in Geraldton.",
  "Across that Geraldton cluster, only one operator publishes a genuine open-air parking product and price — caravan, boat and vehicle storage is otherwise largely unavailable in the region today.",
  "We're planning the only facility in the region with a fully published, transparent price-and-size table across both indoor units and open-air parking — most operators nearby don't publish full pricing for one or both.",
  "No operator in the region currently publishes a graduated bay-size ladder from small car through large boat or caravan — we're planning to be the first.",
];

// Sourced from the Port Denison Competitor Analysis (27 August 2026),
// comparing the regional Geraldton cluster (the nearest operators, ~65km
// away) against what Coral Coast is planning. Kept general rather than
// naming individual competitor businesses.
export const competitiveEdge = [
  {
    factor: "Distance from Port Denison / Dongara",
    region: "~65km drive to the nearest operator",
    coralCoast: "Local — no drive to Geraldton required",
  },
  {
    factor: "Open-air caravan, boat & vehicle parking",
    region: "Offered by only one operator in the entire Geraldton cluster",
    coralCoast: "Planned as a core part of the facility from day one",
  },
  {
    factor: "Published price-and-size table",
    region: "No regional operator publishes full pricing for both indoor units and open parking",
    coralCoast: "Planned to be fully published for both — no quote-only pricing",
  },
  {
    factor: "Graduated bay-size ladder (car through boat/caravan)",
    region: "Not offered by any regional operator",
    coralCoast: "Planned six-class ladder from small car to large boat/caravan",
  },
];

// Indicative planning rates — see business plan Section 4. Not a live rate
// card; subject to change before opening. "fits" is general self-storage
// sizing convention (the same rough guide most operators publish), not a
// measured claim specific to this site — flagged as a guide, not a guarantee.
export const indoorTiers = [
  {
    name: "Small",
    size: "~3.6 m²",
    rate: "$150–$180/month",
    fits: "Boxes, small furniture, a motorbike, seasonal or overflow items",
  },
  {
    name: "Medium",
    size: "~6–9 m²",
    rate: "$200–$230/month",
    fits: "The contents of a studio or 1-bedroom apartment",
  },
  {
    name: "Large",
    size: "~13.5–19.5 m²",
    rate: "$270–$310/month",
    fits: "The contents of a 2–3 bedroom home",
  },
  {
    name: "Sea container equivalent",
    size: "6m × 2.4m",
    rate: "$210–$230/month",
    fits: "The contents of a 3–4 bedroom home, or bulky/commercial stock",
  },
];

export const yardClasses = [
  { name: "Class S", size: "6.0 × 3.0m", use: "Cars, utes, small vans", rate: "$100/month" },
  { name: "Class M", size: "7.0 × 3.0m", use: "Cars, utes, longer vans", rate: "$110–$120/month" },
  { name: "Class L", size: "6.1 × 3.5m", use: "Cars, utes, larger vans", rate: "$120–$135/month" },
  { name: "Class XL", size: "10.0 × 3.0m", use: "Boats/caravans under 3m width, small trucks", rate: "$150–$175/month" },
  { name: "Class 2XL", size: "10.0 × 3.5m", use: "Larger boats/caravans, trucks", rate: "$180–$200/month" },
  { name: "Class 3XL/4XL", size: "10.1–12.3 × 3.5m", use: "Boats, caravans, medium–large trucks", rate: "$210–$250/month" },
];

// Drive-up access is a reasonable planning statement, not a fabricated
// claim: the concept design is single-storey indoor unit buildings plus an
// open-air hardstand yard (business plan cost estimate v2, Section 2) —
// there's no multi-storey/lift access in the plan at all. Exact gate hours
// aren't locked in yet.
export const driveUpAccess = {
  headline: "Drive-up access, planned for both indoor units and the yard",
  blurb:
    "The facility is planned as single-storey indoor unit buildings plus an open-air hardstand yard — no lifts, no shared corridors to navigate. You'd drive straight up to your unit or bay to load and unload.",
  note:
    "Entry is planned through a secure gate, with each storer given their own unique access code — exact gate hours haven't been finalised yet, though round-the-clock access is one of the options we're planning toward, since it's a real gap among nearby regional operators.",
};

// Provided directly by Keystone (28 August 2026) — the planned site office
// hours, separate from storer gate/yard access hours (still TBD, see
// driveUpAccess above).
export const officeHours = {
  hours: "8:30am–4pm",
  days: "Monday to Friday",
};

// Standard for the self storage industry and explicitly a customer
// responsibility in the draft licence agreement already prepared for this
// project — stated plainly rather than left ambiguous.
export const insuranceNote =
  "Coral Coast Self Storage does not provide insurance for anything you store. Your stored goods are not automatically covered, and you'll need to arrange your own contents insurance (through your existing home/contents policy or a specialist storage insurer) before moving in.";

export const aboutUs = {
  intro:
    "Coral Coast Self Storage is a planned project of Keystone Property Group, developed after research showed Port Denison and Dongara have no self storage or dedicated caravan/boat storage facility of their own — residents currently have to drive around 65km to Geraldton for the nearest option.",
  approach:
    "Rather than a standard indoor-only facility, we're planning a combined site: indoor units alongside a dedicated open-air yard for caravans, boats and vehicles — a combination our research didn't find matched by any single operator in the region.",
  transparency:
    "We're planning to publish full pricing and sizing for every unit and bay from day one, rather than a quote-only model — it's a gap we found across most of the operators we looked at, regionally and beyond.",
  status:
    "This is still a planning-stage project. The site's zoning isn't confirmed yet, so there's no opening date to give — but we wanted the plans, pricing thinking and site details public and honest from the start, rather than waiting until everything is locked in.",
};

// Sourced from the draft Storage Licence Agreement and Sign-Up Checklist
// (27 August 2026) prepared for this project. Both documents are explicitly
// marked DRAFT / NOT LEGAL ADVICE, pending a WA commercial lawyer's review —
// answers below are worded as current planning/drafting, not settled policy.
export const faqs = [
  {
    question: "When will Coral Coast Self Storage open?",
    answer:
      "There's no date yet. The site's zoning isn't confirmed, which is the single biggest thing standing between now and an opening date — we're planning on 12–18 months if the site is already correctly zoned, or 21–36+ months if a zoning scheme amendment is needed first.",
  },
  {
    question: "Can I book a unit or bay now?",
    answer:
      "Not yet — there's nothing to pay a deposit on or reserve at this stage. You can register your interest and we'll contact you as plans firm up.",
  },
  {
    question: "Will there be a bond or deposit?",
    answer:
      "Not decided yet. We're weighing up two models we found in our research: most metro chains charge no bond, just an admin fee, while the closest regional comparable charges a bond plus a letting fee. We'll publish whichever way we land before opening.",
  },
  {
    question: "How would I pay?",
    answer:
      "The current draft plan is Direct Debit or card (AutoPay) only, paid monthly in advance — cash and cheque wouldn't be accepted. This matches every operator we researched, regionally and beyond.",
  },
  {
    question: "Does my vehicle, caravan or boat need to be registered to store it in the yard?",
    answer:
      "Under the current draft agreement, yes — it would need to be currently registered and insured, unless a documented exception is agreed with us directly.",
  },
  {
    question: "Can I live in a caravan, boat or vehicle I'm storing?",
    answer:
      "No — under the current draft rules, no one would be permitted to reside, sleep in, or loiter around a stored vehicle, caravan or boat at any time.",
  },
  {
    question: "What wouldn't I be able to store?",
    answer:
      "The current draft rules ban anything hazardous, illegal, stolen, flammable, explosive, environmentally harmful, perishable or living. Damaged or altered lithium batteries and e-bikes/e-scooters would be banned outright, in any condition — a stricter line than some operators take, reflecting the fire risk they pose in a storage setting. Items worth over $1,000 in total would need to be separately itemised and insured, or not stored at all.",
  },
  {
    question: "Do I need my own insurance?",
    answer: insuranceNote,
  },
  {
    question: "Would I be able to drive straight up to my unit or bay?",
    answer:
      "That's the plan — the facility is designed as single-storey unit buildings plus an open-air yard, with no lifts or shared corridors, so you'd drive straight up to load and unload. Entry is planned through a secure gate with a unique access code for each storer; exact gate hours haven't been finalised yet.",
  },
  {
    question: "What are your office hours?",
    answer: `The planned site office hours are ${officeHours.hours}, ${officeHours.days}. That's separate from gate/yard access hours for storers, which haven't been finalised yet.`,
  },
  {
    question: "How much notice would I need to give to move out?",
    answer:
      "The current draft agreement sets this at 14 days after your fixed period, though this — like the rest of the draft agreement — is still subject to legal review before it's finalised.",
  },
];

// General best-practice storage guidance (widely-used industry advice, not
// a claim specific to this site — the facility doesn't exist yet, so
// nobody has "verified" tips for it either). Facility-specific rules below
// are drawn from the draft Storage Licence Agreement and Facility Rules.
export const carStorageGuide = [
  "Check your registration and insurance are current — the draft agreement requires this for any vehicle, caravan or boat kept in the open-air yard.",
  "Disconnect and remove any gas bottles before you bring the vehicle in, and keep the fuel tank low — fuel can't be decanted on site.",
  "Wash and dry the vehicle first — trapped dirt and moisture cause paintwork and mould problems over a long stay.",
  "Keep the fuel tank close to empty for long-term car storage to reduce fire risk and fuel degradation; for regularly-used vehicles, a fuller tank helps prevent condensation.",
  "Use a trickle/battery maintainer or disconnect the battery if you won't be visiting for a while, to avoid a flat battery.",
  "Slightly over-inflate tyres or use tyre cradles to avoid flat-spotting if the vehicle won't move for months.",
  "Bring your own wheel clamp, hitch lock or trailer lock — under the draft rules, securing the bay is the storer's own responsibility.",
  "Double-check your vehicle, caravan or boat's actual length, width and height against the bay class you're booking before moving in.",
];

export const itemStorageGuide = [
  "Label every box clearly on the side (not just the top) so you can identify it without unstacking everything.",
  "Use uniform, stackable boxes where you can — they use space far more efficiently than mixed shapes and sizes.",
  "Store heavier items lower and lighter/fragile items higher, and never stack directly on top of anything fragile.",
  "Leave a little breathing space between boxes and the wall for airflow, rather than packing right up against it.",
  "Wrap furniture (fabric covers, not plastic sheeting, which can trap moisture) to protect it from dust.",
  "Disassemble large furniture where practical — it protects the piece and frees up meaningful space.",
  "Keep an inventory or photo record of what's in storage, particularly for anything you'd need to itemise for insurance.",
  "Never store anything on the prohibited list — see the FAQ for the full list, including the outright ban on damaged lithium batteries and e-bikes/e-scooters.",
];

// Sourced directly from the Keystone Customer Sign-Up Checklist (DRAFT,
// 27 August 2026) prepared for this project — reproduced as the phased
// sign-up-through-move-in checklist it already is, not rewritten.
export const signUpChecklist = [
  {
    phase: "Before you arrive",
    items: [
      "Know roughly what size unit or bay you need — we can help you work this out if you're not sure.",
      "Check whether a current sign-up promotion applies to you, and what it does and doesn't cover (usually just the storage rent, not the deposit, admin fee or insurance).",
      "Decide whether you'll pay by Direct Debit or card (AutoPay) — cash and cheque aren't accepted for storage fees.",
    ],
  },
  {
    phase: "What to bring",
    items: [
      "A current government-issued photo ID (driver's licence or passport) — the name on your agreement needs to match this exactly.",
      "Your Direct Debit or card details, ready to set up automatic payments.",
      "The name, phone number and email of an Alternative Contact Person (ACP) — someone we can reach if we can't reach you.",
      "If signing up as a business or trust: your ABN/ACN and confirmation you're authorised to sign on the entity's behalf.",
    ],
  },
  {
    phase: "Storing a vehicle, caravan or boat (yard bays only)",
    items: [
      "Bring your registration details and know your rego or survey expiry date.",
      "Make sure it's currently registered and insured — if it isn't, let us know so we can discuss whether an exception is possible.",
      "Check its actual length, width and height against the bay size you're booking.",
      "Disconnect and remove gas bottles beforehand, and keep the fuel tank low.",
      "No one is permitted to live or sleep in a stored vehicle, caravan or boat at any time.",
    ],
  },
  {
    phase: "On move-in day",
    items: [
      "Collect your keys, gate code, PIN or remote, and check it works before you leave.",
      "Bring your own padlock for an indoor unit (please don't lock it in our overlock position).",
      "Walk through your unit or bay with us and flag anything that doesn't look right.",
      "Yard bays: we'll take a photo of your vehicle/boat/caravan's condition on arrival — feel free to do the same for your own records.",
      "Leave with a copy of your signed agreement, either printed or by email.",
    ],
  },
  {
    phase: "After you've signed up",
    items: [
      "Keep your contact details up to date with us — you're required to notify us of any change within a few days.",
      "Keep an eye out for any fee-increase notices, which we'll always give at least 28 days ahead of time.",
      "If anything changes with your insurance or the value of what you're storing, let us know.",
    ],
  },
];

// Not part of any business plan, cost estimate or competitor research
// reviewed for this project — a genuinely new idea, so no rates, trailer
// sizes or availability are invented here. Confirm details before this
// goes further than a "considering" note.
export const trailerHire = {
  headline: "Trailer hire — under consideration",
  blurb:
    "We're looking into offering trailer hire alongside storage, for storers who need to move things to or from their unit or bay. This isn't confirmed yet — no trailer sizes, rates or availability have been decided.",
};

export const timeline = {
  bestCase: "12–18 months to opening if the site is already correctly zoned",
  worstCase: "21–36+ months if a zoning scheme amendment is required first",
};

// No public enquiry email/phone exists yet — confirm with Chanelle before
// launch rather than inventing one.
export const contact = {
  email: "TODO@example.com",
};
