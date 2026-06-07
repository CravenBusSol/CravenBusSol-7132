import TechPage, { TechData } from "../../components/TechPage";

const data: TechData = {
  slug: "solar-pv",
  title: "Solar PV Panels",
  tagline: "Generate your own clean electricity from sunlight and slash your energy bills for decades to come.",
  icon: "☀️",
  metaDesc: "Complete UK guide to solar PV panels — installation costs, savings, grants, SEG payments and property suitability.",
  intro: "Solar photovoltaic (PV) panels convert sunlight directly into electricity using semiconductor cells. In the UK, a typical 4kWp system can generate between 3,400–4,200 kWh per year — covering a significant proportion of an average household's electricity needs. With electricity prices remaining high, the payback period for solar PV has dropped considerably, now typically 6–9 years. Adding battery storage can further increase self-consumption and reduce reliance on the grid. The Smart Export Guarantee (SEG) also means you get paid for any surplus electricity you export back to the grid.",
  howItWorks: [
    { step: "Sunlight Capture", desc: "Solar cells in the panels absorb photons from sunlight, generating a direct current (DC) of electricity." },
    { step: "Inversion", desc: "An inverter converts DC electricity into alternating current (AC) — the type used by your home appliances." },
    { step: "Home Use First", desc: "Your home uses the solar electricity first. Lights, appliances and EV chargers all benefit from free solar power." },
    { step: "Export or Store", desc: "Surplus electricity is either exported to the grid (earning SEG payments) or stored in a battery for use at night." },
  ],
  benefits: [
    "Significantly reduces electricity bills",
    "Earn money through the Smart Export Guarantee (SEG)",
    "Generate free electricity for 25–30+ years",
    "Low maintenance — occasional cleaning and 10-year inverter replacement",
    "Increases property value (average 4–14% uplift)",
    "Pairs perfectly with EVs and heat pumps",
    "Reduces carbon footprint by 1–2 tonnes CO₂/yr",
    "0% VAT on solar panel installation",
  ],
  drawbacks: [
    "South-facing roof preferred — east/west less optimal",
    "Shading from trees or chimneys reduces output",
    "Upfront capital cost",
    "Flat roofs need specialist mounting",
    "Listed buildings may have restrictions",
    "Output reduced on cloudy days and in winter",
    "Inverter replacement needed every 10–15 years (~£800–£1,200)",
  ],
  costs: [
    { item: "4kWp system (10–12 panels)", range: "£6,000 – £8,000", note: "Most popular size for 3–4 bed homes" },
    { item: "6kWp system (15–16 panels)", range: "£8,000 – £11,000", note: "Good for higher usage or EV charging" },
    { item: "Battery storage (add-on)", range: "£2,500 – £5,000", note: "Extends self-consumption significantly" },
    { item: "Inverter replacement", range: "£800 – £1,200", note: "Typically after 10–15 years" },
  ],
  savings: [
    { item: "Average annual bill saving", value: "£500–£1,000/yr", note: "Based on 4kWp, average UK usage" },
    { item: "SEG export earnings", value: "£80–£200/yr", note: "Varies by tariff and export volume" },
    { item: "With battery storage", value: "+£200–£400/yr", note: "Higher self-consumption" },
    { item: "Carbon saving", value: "~1 tonne CO₂/yr", note: "Per typical 4kWp system" },
  ],
  suitability: [
    { label: "South-facing roof", suitable: true, note: "Optimal — maximum generation" },
    { label: "East or west-facing roof", suitable: true, note: "15–20% less generation than south" },
    { label: "North-facing roof", suitable: false, note: "Not recommended" },
    { label: "Roof angle 30–45°", suitable: true, note: "Ideal pitch range" },
    { label: "Shading-free roof", suitable: true, note: "Trees, chimneys reduce output" },
    { label: "Roof in good condition", suitable: true, note: "Should have 15+ years life remaining" },
    { label: "Listed buildings", suitable: false, note: "Planning consent usually required" },
    { label: "Flats", suitable: false, note: "Communal roof — complex ownership issues" },
  ],
  grants: [
    { name: "0% VAT on Solar PV", value: "0% VAT", desc: "Since April 2022, solar panel installations are zero-rated for VAT — saving around 20% on installation costs." },
    { name: "Smart Export Guarantee (SEG)", value: "4–15p/kWh", desc: "Earn money for every unit of surplus electricity you export to the grid. Rates vary by supplier." },
    { name: "ECO4 Scheme", value: "Fully funded", desc: "Solar PV may be included for eligible low-income households under ECO4 funded programmes." },
    { name: "Great British Insulation Scheme", value: "Varies", desc: "Energy efficiency improvements that complement solar PV installations." },
  ],
  faqs: [
    { q: "Do solar panels work on cloudy days?", a: "Yes, solar panels still generate electricity on cloudy days, but at reduced output — typically 10–25% of their peak generation. The UK's diffuse light still provides useful energy throughout the year." },
    { q: "How many panels do I need?", a: "A typical 3-4 bedroom home suits a 4kWp system (10–12 panels), requiring roughly 20–25m² of suitable roof space. Your installer will assess your roof and usage to recommend the right size." },
    { q: "What is the Smart Export Guarantee?", a: "The SEG requires licensed electricity suppliers with 150,000+ customers to offer a tariff paying you for each unit of electricity you export to the grid. Rates typically range from 4p to 15p per kWh." },
    { q: "Do I need planning permission for solar panels?", a: "In most cases, no — solar panels on residential roofs are permitted development in England, Scotland and Wales. Exceptions include listed buildings, conservation areas, and flat roofs in some locations." },
    { q: "How long do solar panels last?", a: "Most quality panels come with a 25-year performance guarantee and a 10-12 year product warranty. Real-world lifespan often exceeds 30 years, with gradual efficiency degradation of around 0.5% per year." },
    { q: "Should I get battery storage at the same time?", a: "Installing battery storage at the same time as panels is generally more cost-effective than retrofitting later. However, if budget is a constraint, solar panels alone offer strong returns and storage can be added later." },
  ],
  related: [
    { title: "Battery Storage", slug: "battery-storage", icon: "🔋" },
    { title: "EV Charger", slug: "ev-charger", icon: "⚡" },
    { title: "Solar Thermal", slug: "solar-thermal", icon: "🌞" },
    { title: "Air Source Heat Pump", slug: "air-source-heat-pump", icon: "🌡️" },
  ],
};

export default function SolarPV() {
  return <TechPage data={data} />;
}
