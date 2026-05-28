import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ClipboardList, Upload, FileCheck, Zap, Sun, Battery, Car, ThermometerSun, HelpCircle } from "lucide-react";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block", background: "var(--color-primary-pale)",
      color: "var(--color-primary)", fontWeight: 600, fontSize: 12,
      padding: "4px 14px", borderRadius: 20, marginBottom: 16,
      textTransform: "uppercase", letterSpacing: "0.4px",
    }}>{children}</span>
  );
}

export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #F8F7F2 0%, #E6F4EC 100%)",
        padding: "88px 0 80px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "rgba(82,183,136,0.07)", pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <Chip>Renewable Project Readiness · UK</Chip>
            <h1 style={{ fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 22, marginTop: 0 }}>
              Start your renewable energy project with a{" "}
              <span style={{ color: "var(--color-primary)" }}>clearer plan.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-mid)", marginBottom: 36, maxWidth: 600, marginTop: 0 }}>
              RenewPath helps homeowners prepare better information before speaking to installers, making renewable projects easier to assess, quote and progress.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link to="/passport" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--color-primary)", color: "#fff",
                padding: "13px 26px", borderRadius: 10, fontWeight: 600, fontSize: 15,
              }}>
                Start Your Renewable Passport <ArrowRight size={17} />
              </Link>
              <Link to="/installers" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "2px solid var(--color-primary)", color: "var(--color-primary)",
                padding: "13px 26px", borderRadius: 10, fontWeight: 600, fontSize: 15, background: "#fff",
              }}>
                Installer? Register Interest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container">
          <Chip>What we do</Chip>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", marginBottom: 14, marginTop: 0 }}>
            A smarter starting point for renewable projects
          </h2>
          <p style={{ fontSize: 16, maxWidth: 580, marginBottom: 48, marginTop: 0 }}>
            Most homeowner enquiries arrive without the detail installers need. RenewPath closes that gap — before any site visit or quote is requested.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
            {[
              { title: "Property Readiness Assessment", desc: "Understand what your home needs before any installer visits. Know whether you're ready, what might need addressing first, and which technologies suit your situation." },
              { title: "Structured Project Information", desc: "Complete a guided form covering property, heating, goals, budget and timeline — giving installers the detail they actually need." },
              { title: "Matched with Suitable Installers", desc: "Where appropriate, your information is shared only with installers who work with projects like yours — saving time on both sides." },
            ].map((c, i) => (
              <div key={i} style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 12, padding: 26 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--color-primary-pale)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <CheckCircle2 size={21} color="var(--color-primary)" />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, marginTop: 0 }}>{c.title}</h3>
                <p style={{ fontSize: 14, marginBottom: 0, marginTop: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: "var(--color-bg)", padding: "80px 0" }}>
        <div className="container">
          <Chip>How it works</Chip>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", marginBottom: 14, marginTop: 0 }}>
            Three straightforward steps
          </h2>
          <p style={{ fontSize: 16, maxWidth: 540, marginBottom: 48, marginTop: 0 }}>
            No account needed. No obligation. Just better information from the start.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {[
              { step: "01", icon: <ClipboardList size={22} color="var(--color-primary)" />, title: "Tell us about your home", desc: "Share details about your property, current heating system, goals, budget and timeline. Takes around 5 minutes." },
              { step: "02", icon: <Upload size={22} color="var(--color-primary)" />, title: "Upload useful photos", desc: "Photos of your boiler, loft, roof and electrics help installers understand the project scope before committing to a visit." },
              { step: "03", icon: <FileCheck size={22} color="var(--color-primary)" />, title: "Receive your readiness summary", desc: "We'll provide a simple project readiness summary and, where appropriate, connect you with installers suited to your project." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid var(--color-border)", borderRadius: 12, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-primary)", background: "var(--color-primary-pale)", padding: "2px 9px", borderRadius: 6 }}>{s.step}</span>
                  <div style={{ width: 38, height: 38, borderRadius: 9, background: "var(--color-primary-pale)", display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, marginTop: 0 }}>{s.title}</h3>
                <p style={{ fontSize: 14, marginBottom: 0, marginTop: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link to="/passport" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--color-primary)", color: "#fff",
              padding: "13px 28px", borderRadius: 10, fontWeight: 600, fontSize: 15,
            }}>
              Start Your Renewable Passport <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container">
          <Chip>Technologies covered</Chip>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", marginBottom: 40, marginTop: 0 }}>
            Which technologies does RenewPath cover?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 14 }}>
            {[
              { icon: <ThermometerSun size={26} color="var(--color-primary)" />, label: "Air Source Heat Pumps" },
              { icon: <Zap size={26} color="var(--color-primary)" />, label: "Ground Source Heat Pumps" },
              { icon: <Sun size={26} color="var(--color-primary)" />, label: "Solar PV Panels" },
              { icon: <Battery size={26} color="var(--color-primary)" />, label: "Battery Storage" },
              { icon: <Car size={26} color="var(--color-primary)" />, label: "EV Chargers" },
              { icon: <HelpCircle size={26} color="var(--color-primary)" />, label: "Not sure yet — we can help" },
            ].map((t, i) => (
              <div key={i} style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 10, padding: "18px 14px", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: 11, background: "var(--color-primary-pale)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{t.icon}</div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-dark)", margin: 0, lineHeight: 1.4 }}>{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HOMEOWNERS */}
      <section id="why-homeowners" style={{ background: "var(--color-bg)", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
            <div>
              <Chip>For homeowners</Chip>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", marginBottom: 18, marginTop: 0 }}>Why homeowners use RenewPath</h2>
              <p style={{ fontSize: 16, marginBottom: 28, marginTop: 0 }}>
                Starting a renewable energy project can feel overwhelming. RenewPath brings clarity before you speak to anyone with something to sell.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Understand your options before speaking to anyone with something to sell",
                  "Provide installers with the information they need in one go",
                  "Avoid wasting time on quotes that don't suit your property",
                  "Know whether grant funding like the Boiler Upgrade Scheme applies to you",
                  "Approach the process with confidence, not confusion",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <p style={{ margin: 0, fontSize: 14, color: "var(--color-dark)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid var(--color-border)", borderRadius: 14, padding: 36 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, marginTop: 0 }}>Ready to get started?</h3>
              <p style={{ fontSize: 14, marginBottom: 24, marginTop: 0 }}>Complete your Renewable Passport in around 5 minutes. No account needed, no obligation.</p>
              <Link to="/passport" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "var(--color-primary)", color: "#fff",
                padding: "13px 20px", borderRadius: 10, fontWeight: 600, fontSize: 15,
              }}>
                Start Your Renewable Passport <ArrowRight size={17} />
              </Link>
              <p style={{ fontSize: 12, color: "var(--color-mid)", textAlign: "center", marginBottom: 0, marginTop: 14 }}>
                Free to use · Takes around 5 minutes · No obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INSTALLERS */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container">
          <Chip>For installers</Chip>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", marginBottom: 14, marginTop: 0 }}>Why installers value RenewPath</h2>
          <p style={{ fontSize: 16, maxWidth: 560, marginBottom: 40, marginTop: 0 }}>
            Poor-fit enquiries cost time, money and frustration. RenewPath ensures every enquiry arrives with the information you need to make an informed decision.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {[
              { title: "Structured information", desc: "Property type, heating system, goals, budget and timeline — before you pick up the phone." },
              { title: "Pre-qualified intent", desc: "Homeowners who have completed a passport are more serious about their project." },
              { title: "Fewer wasted visits", desc: "Know whether a property is likely to suit your installation type before committing resource." },
              { title: "Better conversations", desc: "Start from a position of knowledge, not a blank questionnaire at the kitchen table." },
            ].map((c, i) => (
              <div key={i} style={{ border: "1px solid var(--color-border)", borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, marginTop: 0, color: "var(--color-primary)" }}>{c.title}</h3>
                <p style={{ fontSize: 14, marginBottom: 0, marginTop: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link to="/installers" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "2px solid var(--color-primary)", color: "var(--color-primary)",
              padding: "11px 22px", borderRadius: 10, fontWeight: 600, fontSize: 14, background: "#fff",
            }}>
              Installer information &amp; registration <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "var(--color-primary)", padding: "72px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#fff", marginBottom: 14, marginTop: 0 }}>
            Start your renewable project the right way.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 32px" }}>
            Complete your Renewable Passport and take the first step towards a properly planned, well-matched renewable energy project.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link to="/passport" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", color: "var(--color-primary)",
              padding: "13px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15,
            }}>
              Start Your Renewable Passport <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "2px solid rgba(255,255,255,0.45)", color: "#fff",
              padding: "13px 28px", borderRadius: 10, fontWeight: 600, fontSize: 15,
            }}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
