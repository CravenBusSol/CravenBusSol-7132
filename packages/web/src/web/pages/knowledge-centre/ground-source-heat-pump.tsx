import TechPage, { TechData } from "../../components/TechPage";

const data: TechData = {
  slug: "ground-source-heat-pump",
  title: "Ground Source Heat Pumps",
  tagline: "Harness the stable warmth stored in the ground beneath your property to heat your home efficiently year-round.",
  icon: "🌍",
  metaDesc: "Complete guide to ground source heat pumps in the UK — how they work, costs, savings, grants and whether your property is suitable.",
  intro: "Ground source heat pumps (GSHPs) extract renewable heat stored in the ground via a network of buried pipes called a ground loop. Because ground temperatures remain relatively stable at around 10–12°C year-round in the UK, GSHPs offer highly consistent and efficient performance. They typically achieve a Coefficient of Performance (COP) of 3.5–4.5, meaning they deliver 3.5 to 4.5 units of heat for every unit of electricity consumed. They are particularly well suited to rural properties with adequate outdoor land, and are eligible for the £7,500 Boiler Upgrade Scheme.",
  howItWorks: [
    { step: "Ground Loop Installation", desc: "Pipes are buried either horizontally (needing large garden area) or vertically (borehole drilling, smaller footprint)." },
    { step: "Heat Absorption", desc: "A water-antifreeze mixture circulates through the ground loop, absorbing stable geothermal heat from the earth." },
    { step: "Heat Pump Processing", desc: "The fluid passes through a heat pump unit indoors, which concentrates the heat using a refrigerant cycle." },
    { step: "Home Heating", desc: "Elevated heat is delivered to underfloor heating or radiators, and domestic hot water cylinders." },
  ],
  benefits: [
    "Higher efficiency than air source (COP 3.5–4.5)",
    "Stable performance regardless of outdoor air temperature",
    "Very quiet — main unit is indoors",
    "Eligible for £7,500 Boiler Upgrade Scheme",
    "Lower running costs than air source in many cases",
    "Can also provide cooling in summer",
    "Long system lifespan (ground loop can last 50+ years)",
    "No external unit required",
  ],
  drawbacks: [
    "Higher installation cost than air source",
    "Requires significant outdoor land or deep borehole drilling",
    "Installation is more disruptive (groundworks or drilling)",
    "Not suitable for most urban or small-garden properties",
    "Boreholes require specialist contractors and drilling permits",
    "Planning permission may be needed for boreholes",
  ],
  costs: [
    { item: "Horizontal ground loop system", range: "£15,000 – £25,000", note: "Requires large garden area" },
    { item: "Vertical borehole system", range: "£20,000 – £35,000", note: "Smaller footprint, higher drilling cost" },
    { item: "After BUS Grant (£7,500)", range: "£7,500 – £27,500", note: "Grant applied at point of installation" },
    { item: "Annual service", range: "£100 – £200", note: "Indoor unit only — no external exposure" },
  ],
  savings: [
    { item: "vs. oil heating", value: "£800–£1,400/yr", note: "Most common upgrade scenario" },
    { item: "vs. LPG heating", value: "£900–£1,600/yr", note: "LPG prices highly volatile" },
    { item: "vs. electric storage heaters", value: "£1,000–£2,000/yr", note: "Large efficiency gain" },
    { item: "Carbon saved (vs. oil)", value: "2–3 tonnes CO₂/yr", note: "Significant annual reduction" },
  ],
  suitability: [
    { label: "Rural properties with large gardens", suitable: true, note: "Ideal for horizontal loops" },
    { label: "Properties with access for borehole drilling", suitable: true, note: "Vertical option for smaller plots" },
    { label: "Urban terraced houses", suitable: false, note: "Insufficient land for ground loop" },
    { label: "Flats or apartments", suitable: false, note: "Not practical" },
    { label: "Off-gas-grid properties", suitable: true, note: "Excellent oil/LPG replacement" },
    { label: "New build properties", suitable: true, note: "Best installed during construction" },
    { label: "Well-insulated homes", suitable: true, note: "Maximises return on investment" },
  ],
  grants: [
    { name: "Boiler Upgrade Scheme (BUS)", value: "£7,500", desc: "Government grant for ground source heat pump installation via an MCS-accredited installer. Applied directly at purchase." },
    { name: "ECO4 Scheme", value: "Fully funded", desc: "For eligible lower-income households. Can fund the full installation cost." },
    { name: "0% VAT on installation", value: "0% VAT", desc: "All heat pump installations are zero-rated for VAT — a significant saving on total project cost." },
    { name: "Renewable Heat Incentive (legacy)", value: "Legacy only", desc: "RHI has now closed to new applicants but existing participants continue to receive payments." },
  ],
  faqs: [
    { q: "How much land do I need for a ground source heat pump?", a: "For a horizontal loop system, you typically need 2–3 times the heated floor area of your home in outdoor garden space. A 4-bedroom house might need 600–900m² of land. Vertical borehole systems require far less space — just access for a drilling rig." },
    { q: "How long does installation take?", a: "Horizontal systems typically take 3–5 days including groundworks. Borehole drilling can take 1–3 days per borehole, plus connection and commissioning time — usually 5–10 days total." },
    { q: "Can a ground source heat pump heat my hot water too?", a: "Yes. GSHPs can provide space heating and domestic hot water, typically via a dedicated hot water cylinder." },
    { q: "Will the garden recover after installation?", a: "Yes. Horizontal loop trenches typically recover well within one growing season. Lawn and planting can be restored over the buried pipes." },
    { q: "Are ground source heat pumps more efficient than air source?", a: "Generally yes — ground temperatures are more stable than air temperatures, so GSHPs tend to achieve higher COP values, particularly in colder months." },
    { q: "Do I need planning permission?", a: "Horizontal loops are generally permitted development. Borehole drilling may require planning permission in some areas — your installer will advise." },
  ],
  related: [
    { title: "Air Source Heat Pump", slug: "air-source-heat-pump", icon: "🌡️" },
    { title: "Solar PV", slug: "solar-pv", icon: "☀️" },
    { title: "Underfloor Heating", slug: "insulation", icon: "🏠" },
    { title: "MVHR", slug: "mvhr", icon: "💨" },
  ],
};

export default function GroundSourceHeatPump() {
  return <TechPage data={data} />;
}
