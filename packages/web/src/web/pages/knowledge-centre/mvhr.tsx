import TechPage, { TechData } from "../../components/TechPage";

const data: TechData = {
  slug: "mvhr",
  title: "MVHR — Mechanical Ventilation with Heat Recovery",
  tagline: "Breathe fresh, filtered air in an airtight home — without losing the heat you've paid for.",
  icon: "💨",
  metaDesc: "UK guide to MVHR systems — how mechanical ventilation with heat recovery works, costs, benefits and whether it's right for your home.",
  intro: "Mechanical Ventilation with Heat Recovery (MVHR) is a whole-house ventilation system that continuously supplies fresh filtered air to every room while recovering up to 95% of the heat from outgoing stale air. As homes become increasingly airtight — through better insulation and draught proofing — controlled ventilation becomes essential to maintain indoor air quality and prevent condensation and damp. MVHR is the gold-standard solution for new builds and deep retrofits, ensuring a healthy, fresh indoor environment without the heat loss associated with opening windows.",
  howItWorks: [
    { step: "Extract Stale Air", desc: "Stale, humid air is continuously extracted from wet rooms — kitchens, bathrooms and utility rooms — via a ducted system." },
    { step: "Heat Recovery", desc: "Extracted air passes through a heat exchanger inside the central unit, transferring up to 95% of its heat to the incoming fresh air stream." },
    { step: "Supply Fresh Air", desc: "Pre-warmed, filtered fresh air is distributed to living rooms and bedrooms via a separate duct network." },
    { step: "Continuous Balance", desc: "The system runs continuously at low speed, maintaining a gentle positive pressure of fresh air throughout the home." },
  ],
  benefits: [
    "Recovers up to 95% of heat from extracted air",
    "Significantly improves indoor air quality",
    "Removes allergens, pollutants and excess humidity",
    "Prevents condensation and mould growth",
    "Very quiet operation at low speed",
    "Reduces ventilation heat losses to near zero",
    "Essential for Passivhaus and highly airtight homes",
    "Filters incoming air — ideal for allergy sufferers",
  ],
  drawbacks: [
    "High installation cost — ductwork throughout the home",
    "Best installed during new build or major renovation",
    "Retrofitting into existing homes is complex and disruptive",
    "Requires regular filter maintenance (every 6–12 months)",
    "Central unit needs wall or loft space",
    "Not suitable for homes with poor airtightness without improvement",
    "Professional commissioning and balancing required",
  ],
  costs: [
    { item: "MVHR system + installation (new build)", range: "£3,000 – £6,000", note: "Installed during construction is most cost-effective" },
    { item: "MVHR retrofit (existing home)", range: "£5,000 – £10,000+", note: "Complex ductwork routing increases cost" },
    { item: "Annual filter replacement", range: "£50 – £150", note: "G4 and F7 filters typically required" },
    { item: "Annual service/cleaning", range: "£100 – £200", note: "Recommended every 12 months" },
  ],
  savings: [
    { item: "Heating energy saving (highly airtight home)", value: "£200–£500/yr", note: "Recovering heat that would otherwise be lost" },
    { item: "vs. background ventilation (trickle vents)", value: "£150–£350/yr", note: "In a well-insulated, airtight property" },
    { item: "Running cost (electricity)", value: "£30–£80/yr", note: "Very low energy consumption" },
    { item: "Condensation damage prevention", value: "Significant", note: "Mould remediation costs avoided" },
  ],
  suitability: [
    { label: "New build homes", suitable: true, note: "Ideal — install during construction" },
    { label: "Deep retrofit / whole-house renovation", suitable: true, note: "Best opportunity to install ductwork" },
    { label: "Passivhaus or highly airtight homes", suitable: true, note: "Essential for Passivhaus standard" },
    { label: "Homes with airtightness test < 3 ACH@50Pa", suitable: true, note: "MVHR most beneficial in tight buildings" },
    { label: "Draughty older homes (no airtightness work)", suitable: false, note: "Address airtightness and insulation first" },
    { label: "Mid-terrace houses without loft access", suitable: false, note: "Ductwork routing very challenging" },
    { label: "Homes with allergy or respiratory conditions", suitable: true, note: "HEPA filtration available" },
  ],
  grants: [
    { name: "0% VAT on Energy-Saving Products", value: "0% VAT", desc: "MVHR systems in residential properties qualify for 0% VAT when installed as part of an energy efficiency improvement." },
    { name: "Home Upgrade Grant (HUG2)", value: "Varies", desc: "Some local authority HUG2 programmes include MVHR as part of a wider low-carbon retrofit package." },
    { name: "Social Housing Decarbonisation Fund", value: "Varies", desc: "Social housing landlords can access funding for MVHR as part of whole-house retrofit projects." },
    { name: "Passivhaus-level Retrofit Schemes", value: "Project-specific", desc: "Some local authority and housing association programmes specifically support Passivhaus-standard retrofits including MVHR." },
  ],
  faqs: [
    { q: "Does MVHR make a house feel stuffy?", a: "The opposite — MVHR continuously supplies fresh filtered outdoor air to every room. Many users report significantly better air quality, fewer headaches and better sleep compared to a naturally ventilated home." },
    { q: "How often do filters need changing?", a: "Typically every 6–12 months depending on local air quality and usage. The system will usually indicate when filters need attention via a control panel or app." },
    { q: "Can MVHR be retrofitted into an existing home?", a: "Yes, but it is more complex and expensive than installing during construction. A semi-rigid duct system can often be routed through existing voids, but some disruption to ceilings and walls should be expected." },
    { q: "Is MVHR the same as an extractor fan?", a: "No. A standard extractor fan simply removes air from one room without recovering any heat. MVHR is a whole-house system that balances supply and extract across all rooms while recovering up to 95% of heat from the exhaust air stream." },
    { q: "What is the difference between MVHR and MEV?", a: "Mechanical Extract Ventilation (MEV) only extracts air and doesn't recover heat. MVHR both extracts and supplies air with heat recovery, making it significantly more energy-efficient in airtight homes." },
    { q: "Does MVHR work with underfloor heating?", a: "Yes — MVHR and underfloor heating are complementary technologies often used together in highly energy-efficient homes. MVHR handles ventilation while UFH handles heating at low flow temperatures." },
  ],
  related: [
    { title: "Insulation", slug: "insulation", icon: "🏠" },
    { title: "Air Source Heat Pump", slug: "air-source-heat-pump", icon: "🌡️" },
    { title: "Ground Source Heat Pump", slug: "ground-source-heat-pump", icon: "🌍" },
    { title: "Solar PV", slug: "solar-pv", icon: "☀️" },
  ],
};

export default function MVHR() {
  return <TechPage data={data} />;
}
