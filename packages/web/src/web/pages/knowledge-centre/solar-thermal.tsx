import TechPage, { TechData } from "../../components/TechPage";

const data: TechData = {
  slug: "solar-thermal",
  title: "Solar Thermal",
  tagline: "Use the sun's heat directly to provide up to 70% of your annual hot water needs for free.",
  icon: "🌞",
  metaDesc: "UK guide to solar thermal systems — how they work, costs, savings, grants and whether solar thermal or solar PV is right for you.",
  intro: "Solar thermal systems use roof-mounted collectors to capture heat from sunlight and transfer it to your domestic hot water system. Unlike solar PV which generates electricity, solar thermal directly heats water — making it a highly efficient way to reduce hot water bills. A well-designed system can provide 50–70% of a household's annual hot water needs, with virtually free hot water from April through to October. Solar thermal pairs well with heat pumps, boilers and immersion heaters as a pre-heating or primary source system.",
  howItWorks: [
    { step: "Solar Collection", desc: "Roof-mounted collectors (flat plate or evacuated tube) absorb solar radiation and heat a fluid circulating through them." },
    { step: "Heat Transfer", desc: "The heated fluid passes through a coil inside a specially designed hot water cylinder, transferring its heat to the stored water." },
    { step: "Storage", desc: "Hot water is stored in an insulated cylinder until needed for showers, baths and taps." },
    { step: "Backup Top-up", desc: "On cloudy days or during winter, a boiler, heat pump or immersion heater tops up the water temperature when needed." },
  ],
  benefits: [
    "Provides 50–70% of annual hot water needs",
    "Very low running costs — minimal electricity for pump only",
    "Long system lifespan (20–25 years for collectors)",
    "Reduces hot water bills by £150–£400/yr",
    "Simple technology — reliable and low maintenance",
    "Works alongside existing boiler, heat pump or immersion",
    "0% VAT on installation",
    "Reduces carbon footprint",
  ],
  drawbacks: [
    "Only heats water — does not generate electricity",
    "Backup system still required for winter and cloudy periods",
    "Requires suitable roof space and orientation",
    "May require a new or larger hot water cylinder",
    "Less versatile than solar PV + immersion diverter combination",
    "No current government grant specifically for solar thermal",
  ],
  costs: [
    { item: "Flat plate collector system", range: "£3,000 – £5,000", note: "Most common choice for UK homes" },
    { item: "Evacuated tube system", range: "£4,000 – £7,000", note: "More efficient in lower light levels" },
    { item: "Hot water cylinder (if replacement needed)", range: "£500 – £1,200", note: "Solar-compatible twin-coil cylinder" },
    { item: "Annual maintenance", range: "£50 – £100", note: "Fluid check and pump service" },
  ],
  savings: [
    { item: "Annual hot water bill saving", value: "£150–£400/yr", note: "Depends on current fuel type" },
    { item: "vs. electric immersion", value: "£300–£500/yr", note: "High savings replacing electric heating" },
    { item: "vs. gas hot water", value: "£100–£200/yr", note: "Lower saving as gas is cheaper" },
    { item: "Carbon saving", value: "0.3–0.5 tonnes CO₂/yr", note: "Per typical 3–4m² system" },
  ],
  suitability: [
    { label: "South-facing roof (within 45° of south)", suitable: true, note: "Optimal orientation" },
    { label: "East or west-facing roof", suitable: true, note: "Reduced output but still viable" },
    { label: "Homes with high hot water demand", suitable: true, note: "Families, frequent bathers" },
    { label: "Homes replacing electric immersion heating", suitable: true, note: "Best financial case" },
    { label: "Homes already with solar PV + immersion diverter", suitable: false, note: "PV diverter may be more cost-effective" },
    { label: "Homes with a heat pump", suitable: true, note: "Great combination for low-carbon hot water" },
    { label: "Listed buildings", suitable: false, note: "Planning permission usually required" },
  ],
  grants: [
    { name: "0% VAT on Installation", value: "0% VAT", desc: "Solar thermal installations are zero-rated for VAT since April 2022, saving around 20% on total installation costs." },
    { name: "ECO4 Scheme", value: "Varies", desc: "Some ECO4 funded measures can include solar thermal for eligible low-income households." },
    { name: "Great British Insulation Scheme", value: "Varies", desc: "Complementary energy efficiency improvements that pair well with solar thermal." },
    { name: "Home Upgrade Grant", value: "Varies", desc: "Local authority schemes for off-gas-grid properties may include solar thermal as an eligible technology." },
  ],
  faqs: [
    { q: "Is solar thermal better than solar PV with a diverter?", a: "It depends. Solar thermal is more efficient at converting sunlight to hot water (70–80% vs 15–20% for PV). However, solar PV with an immersion diverter is more versatile — the electricity can be used for other purposes too. For most homes, solar PV offers better overall value. Solar thermal is most competitive in homes with high hot water demand and no existing plans for solar PV." },
    { q: "How much roof space do I need?", a: "A typical domestic system uses 3–4m² of roof space for flat plate collectors, or 2–3m² for evacuated tube collectors." },
    { q: "Can solar thermal overheat in summer?", a: "Yes — on very hot, sunny days with low hot water demand, systems can overheat. Stagnation protection (dump radiators, relief valves) is standard on well-designed systems." },
    { q: "Does it work in winter?", a: "Output is reduced significantly in winter, but the system still contributes useful pre-heating even on cold, bright days. A backup heat source is always required for year-round hot water." },
    { q: "Can I use solar thermal with a heat pump?", a: "Yes. Solar thermal can pre-heat water entering the heat pump cylinder, reducing the heat pump's workload and improving system efficiency." },
    { q: "How long is the payback period?", a: "Typically 10–15 years for a solar thermal system, depending on your current hot water fuel type and usage patterns." },
  ],
  related: [
    { title: "Solar PV", slug: "solar-pv", icon: "☀️" },
    { title: "Air Source Heat Pump", slug: "air-source-heat-pump", icon: "🌡️" },
    { title: "Battery Storage", slug: "battery-storage", icon: "🔋" },
    { title: "Insulation", slug: "insulation", icon: "🏠" },
  ],
};

export default function SolarThermal() {
  return <TechPage data={data} />;
}
