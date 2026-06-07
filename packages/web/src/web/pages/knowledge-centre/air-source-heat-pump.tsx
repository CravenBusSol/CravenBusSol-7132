import TechPage, { TechData } from "../../components/TechPage";

const data: TechData = {
  slug: "air-source-heat-pump",
  title: "Air Source Heat Pumps",
  tagline: "A low-carbon alternative to gas boilers that extracts heat from outside air to warm your home and hot water.",
  icon: "🌡️",
  metaDesc: "Everything you need to know about air source heat pumps in the UK — costs, savings, grants, property suitability and how they work.",
  intro: "Air source heat pumps (ASHPs) are one of the most popular renewable heating technologies in the UK. They work by absorbing heat from the outside air — even at temperatures as low as -20°C — and using it to heat your home and domestic hot water. Because they move heat rather than generate it, they can be up to 3–4 times more efficient than a traditional gas boiler. With the UK government's Boiler Upgrade Scheme offering up to £7,500 towards installation, there has never been a better time to consider making the switch.",
  howItWorks: [
    { step: "Heat Absorption", desc: "Refrigerant fluid in the outdoor unit absorbs heat from the outside air, even in cold temperatures." },
    { step: "Compression", desc: "The refrigerant is compressed, raising its temperature significantly — similar to how a fridge works, but in reverse." },
    { step: "Heat Transfer", desc: "The hot refrigerant passes through a heat exchanger, transferring warmth into your central heating and hot water system." },
    { step: "Distribution", desc: "Warm water circulates through radiators (ideally oversized) or underfloor heating to heat your home efficiently." },
  ],
  benefits: [
    "Up to 300–400% efficient (3–4 units of heat per unit of electricity used)",
    "Reduces carbon emissions by up to 70% compared to a gas boiler",
    "Eligible for the Boiler Upgrade Scheme — up to £7,500 grant",
    "Heats both space and domestic hot water",
    "Works in temperatures as low as -20°C",
    "Low maintenance — annual service only",
    "Can integrate with solar PV for near-zero running costs",
    "Increases property value",
  ],
  drawbacks: [
    "Higher upfront cost than a gas boiler",
    "Less effective in very poorly insulated homes",
    "Requires outdoor space for the unit",
    "Works best with underfloor heating or larger radiators",
    "Running costs depend on electricity tariffs",
    "May require planning permission in some conservation areas",
  ],
  costs: [
    { item: "Supply & Installation", range: "£7,000 – £13,000", note: "Before BUS grant" },
    { item: "After BUS Grant (£7,500)", range: "£0 – £5,500", note: "Most homes covered or near-covered" },
    { item: "Radiator upgrades (if needed)", range: "£1,000 – £3,000", note: "Larger radiators improve efficiency" },
    { item: "Annual service", range: "£100 – £200", note: "Recommended yearly" },
  ],
  savings: [
    { item: "vs. old gas boiler", value: "£200–£500/yr", note: "With heat pump tariff (e.g. Cosy Octopus)" },
    { item: "vs. oil heating", value: "£500–£900/yr", note: "Oil prices highly variable" },
    { item: "vs. electric storage heaters", value: "£800–£1,500/yr", note: "Significant efficiency gain" },
    { item: "Carbon saved (vs. gas)", value: "1–2 tonnes CO₂/yr", note: "Grid decarbonising annually" },
  ],
  suitability: [
    { label: "Detached & semi-detached houses", suitable: true, note: "Ideal — space for outdoor unit" },
    { label: "Terraced houses", suitable: true, note: "Rear garden space usually sufficient" },
    { label: "Flats", suitable: false, note: "Outdoor unit placement is challenging" },
    { label: "Well-insulated homes (EPC C or above)", suitable: true, note: "Maximises efficiency" },
    { label: "Poorly insulated homes", suitable: false, note: "Improve insulation first for best results" },
    { label: "Homes with underfloor heating", suitable: true, note: "Optimal pairing" },
    { label: "Homes with existing large radiators", suitable: true, note: "May need upgrading" },
    { label: "Listed buildings", suitable: false, note: "Planning constraints may apply" },
  ],
  grants: [
    { name: "Boiler Upgrade Scheme (BUS)", value: "£7,500", desc: "Government grant available through your MCS-accredited installer. Applied at point of purchase — no admin required from homeowner." },
    { name: "ECO4 Scheme", value: "Fully funded", desc: "For lower-income households or those on certain benefits. Can fully fund installation including insulation upgrades." },
    { name: "Heat Pump Ready Programme", value: "Varies", desc: "Ongoing government initiatives to support heat pump adoption and smart grid integration." },
    { name: "0% VAT on installation", value: "0% VAT", desc: "Heat pump installations are zero-rated for VAT, saving around 20% on labour and equipment." },
  ],
  faqs: [
    { q: "Do air source heat pumps work in cold weather?", a: "Yes. Modern ASHPs are designed to operate efficiently down to -20°C. Efficiency does drop slightly in very cold weather, but UK winters rarely present temperatures that cause issues." },
    { q: "Can I keep my existing radiators?", a: "Possibly, but heat pumps work at lower flow temperatures than boilers. Your installer will assess whether your existing radiators are large enough. Upgrading some or all radiators may be recommended." },
    { q: "How noisy are heat pumps?", a: "Modern units produce around 40–50dB — similar to a refrigerator hum. Placement and unit selection can minimise any noise impact on neighbours." },
    { q: "Do I need planning permission?", a: "In most cases, no. ASHPs are permitted development in England, Scotland and Wales. However, conservation areas, listed buildings, and flats may have restrictions." },
    { q: "How long do heat pumps last?", a: "Typically 15–20 years with annual servicing — longer than a standard gas boiler." },
    { q: "Will my electricity bills go up?", a: "Your electricity usage will increase, but specialist heat pump tariffs (such as Cosy Octopus) offer cheaper off-peak rates that make running costs competitive with gas." },
  ],
  related: [
    { title: "Ground Source Heat Pump", slug: "ground-source-heat-pump", icon: "🌍" },
    { title: "Solar PV", slug: "solar-pv", icon: "☀️" },
    { title: "Battery Storage", slug: "battery-storage", icon: "🔋" },
    { title: "Insulation", slug: "insulation", icon: "🏠" },
  ],
};

export default function AirSourceHeatPump() {
  return <TechPage data={data} />;
}
