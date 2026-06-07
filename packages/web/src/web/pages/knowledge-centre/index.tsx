import { Link } from "wouter";
import { useAnalytics } from "../../hooks/use-analytics";

const TECHS = [
  { slug: "air-source-heat-pump", icon: "🌡️", title: "Air Source Heat Pumps", desc: "The most popular low-carbon heating upgrade in the UK. Up to £7,500 BUS grant available.", tags: ["Heating", "Grant Available"] },
  { slug: "ground-source-heat-pump", icon: "🌍", title: "Ground Source Heat Pumps", desc: "Exceptionally efficient heating from stable ground temperatures. Ideal for rural properties.", tags: ["Heating", "Grant Available"] },
  { slug: "solar-pv", icon: "☀️", title: "Solar PV Panels", desc: "Generate your own free electricity and earn money exporting to the grid via the SEG.", tags: ["Electricity", "0% VAT"] },
  { slug: "battery-storage", icon: "🔋", title: "Battery Storage", desc: "Store solar energy or cheap off-peak electricity for use when you need it most.", tags: ["Electricity", "Storage"] },
  { slug: "ev-charger", icon: "⚡", title: "EV Chargers", desc: "Charge your electric vehicle at home overnight for a fraction of public charging costs.", tags: ["Transport", "Grant Available"] },
  { slug: "solar-thermal", icon: "🌞", title: "Solar Thermal", desc: "Use the sun's heat directly to provide up to 70% of your annual hot water for free.", tags: ["Hot Water", "0% VAT"] },
  { slug: "insulation", icon: "🏠", title: "Home Insulation", desc: "The most cost-effective upgrade — reduce heat loss and make every other technology work better.", tags: ["Efficiency", "Grant Available"] },
  { slug: "mvhr", icon: "💨", title: "MVHR Ventilation", desc: "Whole-house ventilation with up to 95% heat recovery — essential for airtight homes.", tags: ["Ventilation", "0% VAT"] },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  "Grant Available": { bg: "#dcfce7", color: "#15803d" },
  "0% VAT": { bg: "#dbeafe", color: "#1d4ed8" },
  "Heating": { bg: "#fef3c7", color: "#92400e" },
  "Electricity": { bg: "#fce7f3", color: "#9d174d" },
  "Hot Water": { bg: "#ffedd5", color: "#9a3412" },
  "Storage": { bg: "#ede9fe", color: "#6d28d9" },
  "Transport": { bg: "#d1fae5", color: "#065f46" },
  "Efficiency": { bg: "#e0f2fe", color: "#0369a1" },
  "Ventilation": { bg: "#f1f5f9", color: "#334155" },
};

export default function KnowledgeCentre() {
  useAnalytics("knowledge_centre");
  return (
    <div style={{ background: "#fff" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #1a5c45 100%)", color: "#fff", padding: "72px 20px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14, color: "#fff" }}>Knowledge Centre</p>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 18px", color: "#fff" }}>
            Renewable Technology Guides
          </h1>
          <p style={{ fontSize: 17, maxWidth: 640, margin: "0 auto", lineHeight: 1.75, color: "#fff" }}>
            In-depth, UK-specific guides to every major renewable and energy efficiency technology — costs, savings, grants, and whether each one is right for your property.
          </p>
        </div>
      </div>

      {/* Intro strip */}
      <div style={{ background: "var(--color-light)", borderBottom: "1px solid var(--color-border)", padding: "28px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "var(--color-mid)", maxWidth: 600 }}>
            Not sure where to start? Complete your free <strong style={{ color: "var(--color-dark)" }}>RenewPath Passport</strong> to get a personalised recommendation for your property.
          </p>
          <Link to="/passport" style={{ background: "var(--color-primary)", color: "#fff", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", whiteSpace: "nowrap" }}>
            Start Free Passport →
          </Link>
        </div>
      </div>

      {/* Technology Grid */}
      <div style={{ padding: "60px 20px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
            {TECHS.map(t => (
              <Link key={t.slug} to={`/knowledge-centre/${t.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#fff", borderRadius: 16, padding: "28px 24px",
                  border: "1.5px solid var(--color-border)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  height: "100%", display: "flex", flexDirection: "column",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                }}>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>{t.icon}</div>
                  <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--color-dark)", marginBottom: 10, marginTop: 0 }}>{t.title}</h2>
                  <p style={{ fontSize: 14, color: "var(--color-mid)", lineHeight: 1.65, flex: 1, margin: "0 0 16px" }}>{t.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {t.tags.map(tag => {
                      const style = tagColors[tag] ?? { bg: "#f3f4f6", color: "#374151" };
                      return (
                        <span key={tag} style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: style.bg, color: style.color }}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-primary)", display: "flex", alignItems: "center", gap: 4 }}>
                    Read guide <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #1a5c45 100%)", padding: "72px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, color: "#fff", marginBottom: 16 }}>Find out what's right for your home</h2>
          <p style={{ fontSize: 16, color: "#fff", lineHeight: 1.7, marginBottom: 28 }}>
            Your RenewPath Passport gives you a personalised technology recommendation, grant eligibility check and local installer matches — completely free.
          </p>
          <Link to="/passport" style={{ display: "inline-block", background: "#fff", color: "var(--color-primary)", padding: "15px 36px", borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
            Start My Free Passport →
          </Link>
        </div>
      </div>
    </div>
  );
}
