import TechPage, { TechData } from "../../components/TechPage";

const data: TechData = {
  slug: "insulation",
  title: "Home Insulation",
  tagline: "The most cost-effective energy upgrade you can make — reduce heat loss, cut bills and make every other technology work better.",
  icon: "🏠",
  metaDesc: "Complete UK guide to home insulation — loft, cavity wall, solid wall, floor insulation costs, grants, savings and property suitability.",
  intro: "Insulation is the foundation of any energy-efficient home. Before investing in renewable technologies like heat pumps or solar panels, ensuring your home is well insulated maximises the return on those investments and keeps energy bills as low as possible. Up to 35% of a home's heat is lost through uninsulated walls and 25% through the roof. The UK government offers substantial funding through the ECO4 and Great British Insulation Scheme for eligible households, and all insulation installations are zero-rated for VAT.",
  howItWorks: [
    { step: "Loft Insulation", desc: "Mineral wool or loose-fill insulation is laid between and over joists in your loft, preventing heat rising and escaping through the roof." },
    { step: "Cavity Wall Insulation", desc: "Insulating beads, mineral wool or foam are injected into the cavity between the inner and outer leaves of your external walls." },
    { step: "Solid Wall Insulation", desc: "For homes without a cavity, insulation boards are fitted to the inside or outside of walls — more disruptive but highly effective." },
    { step: "Floor Insulation", desc: "Rigid insulation boards or mineral wool are installed beneath suspended timber floors or during screed laying to prevent downward heat loss." },
  ],
  benefits: [
    "Reduces heating bills by £200–£700/yr depending on type",
    "Makes heat pump installations far more efficient",
    "Improves comfort — warmer walls, fewer cold spots and draughts",
    "Increases EPC rating — important for future mortgages and sales",
    "Large grants and fully funded options available",
    "Loft and cavity wall insulation typically pays back in 2–5 years",
    "0% VAT on all insulation installations",
    "Reduces carbon footprint significantly",
  ],
  drawbacks: [
    "Solid wall insulation is expensive and disruptive",
    "External wall insulation changes the appearance of the building",
    "Internal wall insulation reduces room size slightly",
    "Cavity wall insulation not suitable for all cavity widths or exposed locations",
    "Poor installation can cause damp — must use accredited installers",
    "Listed buildings may have restrictions",
  ],
  costs: [
    { item: "Loft insulation (top-up to 270mm)", range: "£300 – £600", note: "Often free under ECO4/GBIS for eligible homes" },
    { item: "Cavity wall insulation", range: "£400 – £1,000", note: "Often free for eligible households" },
    { item: "External wall insulation (solid wall)", range: "£8,000 – £22,000", note: "Depends on property size and render finish" },
    { item: "Internal wall insulation (solid wall)", range: "£5,500 – £12,000", note: "Per external wall area" },
    { item: "Underfloor insulation (suspended floor)", range: "£800 – £2,000", note: "Ground floor only" },
  ],
  savings: [
    { item: "Loft insulation (uninsulated to 270mm)", value: "£150–£300/yr", note: "Typical detached house" },
    { item: "Cavity wall insulation", value: "£150–£400/yr", note: "Depending on property size and heating fuel" },
    { item: "Solid wall insulation", value: "£200–£700/yr", note: "Higher savings in larger, older homes" },
    { item: "Combined loft + cavity", value: "£300–£600/yr", note: "Most common combination" },
  ],
  suitability: [
    { label: "Homes built before 1920 (solid walls)", suitable: true, note: "Internal or external wall insulation recommended" },
    { label: "Cavity wall homes (1920–1990s)", suitable: true, note: "Check cavity is suitable for filling" },
    { label: "Loft spaces with joists accessible", suitable: true, note: "Most homes — very cost-effective" },
    { label: "Homes with suspended timber ground floors", suitable: true, note: "Underfloor insulation very effective" },
    { label: "Homes in exposed/coastal locations", suitable: false, note: "Cavity wall injection may not be appropriate" },
    { label: "Listed buildings", suitable: false, note: "External insulation may require listed building consent" },
    { label: "Recently insulated homes (EPC A/B)", suitable: false, note: "Likely already well insulated" },
  ],
  grants: [
    { name: "ECO4 Scheme", value: "Fully funded", desc: "For households on qualifying benefits or low incomes. Can fully fund loft, cavity wall and solid wall insulation including associated works." },
    { name: "Great British Insulation Scheme (GBIS)", value: "Fully funded", desc: "For homes in lower Council Tax bands (A–D in England) or with an EPC of D or below. Covers loft and cavity wall insulation." },
    { name: "Home Upgrade Grant (HUG2)", value: "Up to £10,000", desc: "For off-gas-grid households in England with low EPC ratings. Covers insulation and low-carbon heating in combination." },
    { name: "0% VAT on Insulation", value: "0% VAT", desc: "All insulation installations are zero-rated for VAT — saving 20% on materials and labour." },
  ],
  faqs: [
    { q: "Should I insulate before installing a heat pump?", a: "Yes, ideally. A heat pump works most efficiently in a well-insulated home. Improving insulation first reduces the heat pump size needed and lowers running costs. Your installer will assess your home's heat loss as part of the design process." },
    { q: "How do I know if my walls are solid or cavity?", a: "Homes built before around 1920 typically have solid walls (230mm thick brick). Cavity wall homes (built roughly 1920 onwards) have a gap between two layers of brick, usually 260–320mm total wall thickness. You can check by measuring the wall depth at a window or door reveal." },
    { q: "Can cavity wall insulation cause damp?", a: "Poor installation or unsuitable cavities can lead to damp. Always use a registered CIGA-approved installer who will check cavity width, condition and local exposure rating before proceeding." },
    { q: "What is EPC and why does it matter?", a: "An Energy Performance Certificate (EPC) rates your home's energy efficiency from A (most efficient) to G (least efficient). A higher EPC rating means lower bills, is increasingly required for mortgages, and adds value to your property." },
    { q: "Is external or internal wall insulation better for solid walls?", a: "External wall insulation (EWI) is generally preferred — it doesn't reduce internal floor space, eliminates cold bridges and can refresh the building's appearance. Internal wall insulation is a better option when changing the external appearance isn't desirable or permitted." },
    { q: "Am I eligible for free insulation?", a: "Possibly. ECO4 and GBIS cover many households. Complete your RenewPath Passport to get a personalised assessment of which grants you may qualify for." },
  ],
  related: [
    { title: "Air Source Heat Pump", slug: "air-source-heat-pump", icon: "🌡️" },
    { title: "MVHR", slug: "mvhr", icon: "💨" },
    { title: "Solar PV", slug: "solar-pv", icon: "☀️" },
    { title: "Ground Source Heat Pump", slug: "ground-source-heat-pump", icon: "🌍" },
  ],
};

export default function Insulation() {
  return <TechPage data={data} />;
}
