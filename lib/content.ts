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
// card; subject to change before opening.
export const indoorTiers = [
  { name: "Small", size: "~3.6 m²", rate: "$150–$180/month" },
  { name: "Medium", size: "~6–9 m²", rate: "$200–$230/month" },
  { name: "Large", size: "~13.5–19.5 m²", rate: "$270–$310/month" },
  { name: "Sea container equivalent", size: "6m × 2.4m", rate: "$210–$230/month" },
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
    "Gate hours and access-control details (PIN, keypad, etc.) haven't been finalised yet — round-the-clock access is one of the options we're planning toward, since it's a real gap among nearby regional operators.",
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

export const timeline = {
  bestCase: "12–18 months to opening if the site is already correctly zoned",
  worstCase: "21–36+ months if a zoning scheme amendment is required first",
};

// No public enquiry email/phone exists yet — confirm with Chanelle before
// launch rather than inventing one.
export const contact = {
  email: "TODO@example.com",
};
