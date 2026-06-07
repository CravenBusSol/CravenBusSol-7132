import { useState } from "react";
import { Link } from "wouter";

export type TechData = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  howItWorks: { step: string; desc: string }[];
  benefits: string[];
  drawbacks: string[];
  costs: { item: string; range: string; note?: string }[];
  savings: { item: string; value: string; note?: string }[];
  suitability: { label: string; suitable: boolean; note?: string }[];
  grants: { name: string; value: string; desc: string; link?: string }[];
  faqs: { q: string; a: string }[];
  related: { title: string; slug: string; icon: string }[];
  icon: string;
  color?: string;
  metaDesc: string;
};

const pri = "var(--color-primary)";
const pale = "var(--color-light)";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: "56px 20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "var(--color-dark)", marginBottom: 32, borderLeft: `4px solid ${pri}`, paddingLeft: 14 }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function Tick({ ok }: { ok: boolean }) {
  return <span style={{ color: ok ? "#16a34a" : "#dc2626", fontWeight: 700, marginRight: 8 }}>{ok ? "✓" : "✗"}</span>;
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--color-border)" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--color-dark)", lineHeight: 1.4 }}>{q}</span>
        <span style={{ fontSize: 20, color: pri, flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && <p style={{ fontSize: 14, color: "var(--color-mid)", lineHeight: 1.75, margin: "0 0 18px", paddingRight: 24 }}>{a}</p>}
    </div>
  );
}

export default function TechPage({ data }: { data: TechData }) {
  return (
    <div style={{ background: "#fff" }}>
      {/* Breadcrumb */}
      <div style={{ background: pale, borderBottom: "1px solid var(--color-border)", padding: "12px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", fontSize: 13, color: "var(--color-mid)" }}>
          <Link to="/" style={{ color: "var(--color-mid)", textDecoration: "none" }}>Home</Link>
          {" / "}
          <Link to="/knowledge-centre" style={{ color: "var(--color-mid)", textDecoration: "none" }}>Knowledge Centre</Link>
          {" / "}
          <span style={{ color: "var(--color-dark)", fontWeight: 600 }}>{data.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, var(--color-primary) 0%, #1a5c45 100%)`, color: "#fff", padding: "72px 20px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>{data.icon}</div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 16px", color: "#fff" }}>{data.title}</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 680, margin: "0 0 8px", color: "#fff", opacity: 1 }}>{data.tagline}</p>
        </div>
      </div>

      {/* Intro */}
      <Section title="Overview">
        <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--color-mid)", maxWidth: 800 }}>{data.intro}</p>
      </Section>

      {/* How it works */}
      <div style={{ background: pale }}>
        <Section title="How It Works">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
            {data.howItWorks.map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "24px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: pri, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, marginBottom: 12 }}>{i + 1}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>{s.step}</h3>
                <p style={{ fontSize: 13, color: "var(--color-mid)", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Benefits & Drawbacks */}
      <Section title="Benefits &amp; Drawbacks">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          <div style={{ background: "#f0fdf4", borderRadius: 12, padding: "24px" }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#16a34a", marginBottom: 16 }}>✓ Benefits</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {data.benefits.map((b, i) => <li key={i} style={{ fontSize: 14, color: "var(--color-dark)", lineHeight: 1.5, paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "#16a34a", fontWeight: 700 }}>✓</span>{b}</li>)}
            </ul>
          </div>
          <div style={{ background: "#fef2f2", borderRadius: 12, padding: "24px" }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#dc2626", marginBottom: 16 }}>✗ Drawbacks</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {data.drawbacks.map((d, i) => <li key={i} style={{ fontSize: 14, color: "var(--color-dark)", lineHeight: 1.5, paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "#dc2626", fontWeight: 700 }}>✗</span>{d}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* Costs */}
      <div style={{ background: pale }}>
        <Section title="Typical UK Costs (2024–25)">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: pri, color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Item</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Typical Cost Range</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {data.costs.map((c, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid var(--color-border)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--color-dark)" }}>{c.item}</td>
                    <td style={{ padding: "12px 16px", color: pri, fontWeight: 700 }}>{c.range}</td>
                    <td style={{ padding: "12px 16px", color: "var(--color-mid)" }}>{c.note ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>

      {/* Savings */}
      <Section title="Typical Annual Savings">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
          {data.savings.map((s, i) => (
            <div key={i} style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 12, padding: "20px 18px", textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#16a34a", marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-dark)", marginBottom: 4 }}>{s.item}</div>
              {s.note && <div style={{ fontSize: 12, color: "var(--color-mid)" }}>{s.note}</div>}
            </div>
          ))}
        </div>
      </Section>

      {/* Suitability */}
      <div style={{ background: pale }}>
        <Section title="Is My Property Suitable?">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12 }}>
            {data.suitability.map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "flex-start", gap: 8, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
                <Tick ok={s.suitable} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-dark)" }}>{s.label}</div>
                  {s.note && <div style={{ fontSize: 12, color: "var(--color-mid)", marginTop: 2 }}>{s.note}</div>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, background: "#fff", borderRadius: 12, padding: "20px 24px", border: `1.5px solid ${pri}`, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "var(--color-dark)" }}>Not sure if your property qualifies?</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--color-mid)" }}>Complete your free RenewPath Passport and get a personalised assessment in minutes.</p>
            </div>
            <Link to="/passport" style={{ background: pri, color: "#fff", padding: "11px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", whiteSpace: "nowrap" }}>
              Check My Property →
            </Link>
          </div>
        </Section>
      </div>

      {/* Grants */}
      <Section title="Available Grants &amp; Incentives">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {data.grants.map((g, i) => (
            <div key={i} style={{ background: pale, borderRadius: 12, padding: "22px 20px", border: "1.5px solid var(--color-border)" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: pri, marginBottom: 4 }}>{g.value}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>{g.name}</div>
              <p style={{ fontSize: 13, color: "var(--color-mid)", lineHeight: 1.65, margin: 0 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <div style={{ background: pale }}>
        <Section title="Frequently Asked Questions">
          <div style={{ background: "#fff", borderRadius: 12, padding: "8px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            {data.faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} />)}
          </div>
        </Section>
      </div>

      {/* Related */}
      <Section title="Related Technologies">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16 }}>
          {data.related.map((r) => (
            <Link key={r.slug} to={`/knowledge-centre/${r.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: pale, borderRadius: 12, padding: "20px 16px", textAlign: "center", border: "1.5px solid var(--color-border)", transition: "border-color 0.2s" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{r.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-dark)" }}>{r.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div style={{ background: `linear-gradient(135deg, var(--color-primary) 0%, #1a5c45 100%)`, padding: "72px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 900, color: "#fff", marginBottom: 16 }}>Ready to find out what's right for your home?</h2>
          <p style={{ fontSize: 16, color: "#fff", opacity: 0.9, lineHeight: 1.7, marginBottom: 28 }}>Complete your free RenewPath Renewable Passport — a personalised assessment that tells you exactly which technologies suit your property, local installer matches, and available grants.</p>
          <Link to="/passport" style={{ display: "inline-block", background: "#fff", color: pri, padding: "15px 36px", borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
            Start My Free Passport →
          </Link>
        </div>
      </div>
    </div>
  );
}
