import TechPage, { TechData } from "../../components/TechPage";

const data: TechData = {
  slug: "ev-charger",
  title: "Home EV Chargers",
  tagline: "Charge your electric vehicle overnight at home — faster, cheaper and greener than public charging.",
  icon: "⚡",
  metaDesc: "Complete guide to home EV chargers in the UK — costs, installation, grants, smart charging and property suitability.",
  intro: "Installing a dedicated home EV charger (also called an EVSE — Electric Vehicle Supply Equipment) is one of the most practical and cost-effective renewable energy upgrades you can make. A standard 7kW home charger can fully charge most electric vehicles overnight in 6–10 hours, at a fraction of the cost of public rapid chargers. When combined with a smart tariff and solar panels, you can charge your car almost for free using solar energy during the day or cheap overnight electricity. The UK government's EV Chargepoint Grant offers up to £350 towards installation costs.",
  howItWorks: [
    { step: "Connection", desc: "The wall-mounted charge point connects to your home's consumer unit (fuse box) via a dedicated circuit." },
    { step: "Smart Communication", desc: "Smart chargers communicate with your energy supplier, solar system and an app to optimise when charging happens." },
    { step: "Scheduled Charging", desc: "Set the charger to run overnight on cheap off-peak tariff electricity, or during peak solar generation hours." },
    { step: "Vehicle Charging", desc: "Power flows from the charger to your vehicle's on-board charger via the Type 2 cable, filling the battery efficiently." },
  ],
  benefits: [
    "7kW home charger: ~80–120 miles of range added per overnight charge",
    "Costs ~3–5p per mile vs 15–20p using public rapid chargers",
    "Smart scheduling — charge when electricity is cheapest",
    "Integrates with solar PV for near-free daytime charging",
    "V2H and V2G capable models allow car to power your home",
    "Much faster than a 3-pin plug (7kW vs 2.3kW)",
    "Tethered or untethered options available",
    "Up to £350 government grant available",
  ],
  drawbacks: [
    "Requires off-street parking (driveway or garage)",
    "Flat dwellers face charging challenges",
    "Some older homes may need consumer unit upgrade",
    "Upfront hardware and installation cost",
    "V2G technology is still emerging in the UK",
    "Tethered cable can be inconvenient for multi-car households with different connectors",
  ],
  costs: [
    { item: "7kW smart charger + installation", range: "£750 – £1,200", note: "Before EV Chargepoint Grant" },
    { item: "After EV Chargepoint Grant (£350)", range: "£400 – £850", note: "Grant available for homeowners and renters" },
    { item: "Consumer unit upgrade (if needed)", range: "£500 – £1,200", note: "Only required if existing board is full or outdated" },
    { item: "22kW three-phase charger", range: "£1,500 – £3,000", note: "For properties with three-phase supply" },
  ],
  savings: [
    { item: "vs. public rapid charging", value: "£500–£1,200/yr", note: "Based on 10,000 miles, home vs 50kW rapid" },
    { item: "With off-peak smart tariff", value: "£300–£600/yr", note: "vs. standard rate home charging" },
    { item: "With solar PV daytime charging", value: "£200–£500/yr", note: "Free solar energy during generation hours" },
    { item: "vs. petrol/diesel equivalent", value: "£1,000–£2,500/yr", note: "Full EV running cost saving" },
  ],
  suitability: [
    { label: "Properties with off-street parking", suitable: true, note: "Driveway or garage essential" },
    { label: "Terraced houses with front driveway", suitable: true, note: "Cable must not cross pavement" },
    { label: "Properties without off-street parking", suitable: false, note: "Lamp column chargers available in some councils" },
    { label: "Flats with dedicated parking space", suitable: true, note: "Communal chargers may be an option" },
    { label: "Homes with solar PV", suitable: true, note: "Optimal pairing for free solar charging" },
    { label: "Three-phase properties", suitable: true, note: "22kW charging available" },
  ],
  grants: [
    { name: "EV Chargepoint Grant", value: "Up to £350", desc: "Available to homeowners and renters. Covers 75% of installation costs up to £350. Applied through your installer directly." },
    { name: "EV Infrastructure Grant (flats)", value: "Up to £30,000", desc: "Landlords and flat owners can claim up to £30,000 towards installing multiple chargepoints in residential properties." },
    { name: "0% VAT on home chargers", value: "0% VAT", desc: "Since April 2022, home EV charger installation is zero-rated for VAT." },
    { name: "Workplace Charging Scheme", value: "Up to £350/socket", desc: "For businesses and employees who charge at work — up to 40 sockets covered." },
  ],
  faqs: [
    { q: "What's the difference between a 3-pin plug and a home charger?", a: "A standard 3-pin plug provides 2.3kW, adding about 8 miles of range per hour. A dedicated 7kW home charger adds around 25–30 miles per hour — roughly 3x faster. Manufacturers often advise against regular 3-pin charging as it can stress the vehicle's charging system." },
    { q: "Do I need a smart charger?", a: "From June 2022, all new home chargepoints must be 'smart' — capable of communication, scheduling and demand-side response. This is actually beneficial as it enables off-peak and solar charging scheduling." },
    { q: "Can I charge two cars from one charger?", a: "Most home chargers are single-outlet. For two vehicles, you'd typically install two units. Some load-balancing solutions exist to share a single supply across two chargers." },
    { q: "What is V2G and V2H charging?", a: "Vehicle-to-Grid (V2G) allows your car to export electricity back to the national grid, earning you money. Vehicle-to-Home (V2H) allows your car battery to power your home. Both technologies are available in the UK but are still at an early stage with limited compatible vehicles." },
    { q: "How long does installation take?", a: "A straightforward installation typically takes 2–4 hours. More complex jobs requiring consumer unit upgrades may take a full day." },
    { q: "Does a home charger increase my home insurance?", a: "You should notify your home insurer when installing a charger, but it's unlikely to significantly affect your premium. Some insurers now offer dedicated EV home cover." },
  ],
  related: [
    { title: "Solar PV", slug: "solar-pv", icon: "☀️" },
    { title: "Battery Storage", slug: "battery-storage", icon: "🔋" },
    { title: "Air Source Heat Pump", slug: "air-source-heat-pump", icon: "🌡️" },
    { title: "Solar Thermal", slug: "solar-thermal", icon: "🌞" },
  ],
};

export default function EVCharger() {
  return <TechPage data={data} />;
}
