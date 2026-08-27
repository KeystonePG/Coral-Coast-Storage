// Sourced from the business plan, cost estimate and competitor analysis
// prepared by Keystone Property Group (27 August 2026). This facility is
// NOT yet built — zoning is unconfirmed and opening is not scheduled.
// Every figure here is a planning estimate, not a live offer.

export const site = {
  name: "Coral Coast Self Storage",
  tagline: "Indoor storage and open-air caravan, boat & vehicle parking",
  location: "Near Port Denison, WA",
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
  "Port Denison and Dongara currently have no self storage or dedicated caravan/boat storage facility — the nearest is about 65km away in Geraldton.",
  "We're planning the only facility in the region with a fully published, transparent price-and-size table across both indoor units and open-air parking.",
  "Open-air caravan, boat and vehicle parking is largely unavailable locally today — most nearby operators don't offer it at all.",
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

export const timeline = {
  bestCase: "12–18 months to opening if the site is already correctly zoned",
  worstCase: "21–36+ months if a zoning scheme amendment is required first",
};

// No public enquiry email/phone exists yet — confirm with Chanelle before
// launch rather than inventing one.
export const contact = {
  email: "TODO@example.com",
};
