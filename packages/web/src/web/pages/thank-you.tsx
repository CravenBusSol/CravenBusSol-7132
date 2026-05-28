import { useEffect } from "react";
import { useAnalytics } from "../hooks/use-analytics";

export default function ThankYou() {
  useAnalytics("thank_you");

  return (
    <div style={{
      background: "linear-gradient(160deg, var(--color-primary-pale) 0%, #fff 60%)",
      minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "80px 20px",
    }}>
      <div style={{ maxWidth: 580, width: "100%", textAlign: "center" }}>
        {/* Checkmark */}
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "var(--color-primary)", display: "flex", alignItems: "center",
          justifyContent: "center", margin: "0 auto 28px", boxShadow: "0 8px 32px rgba(22,101,68,0.25)",
        }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M8 18.5L14.5 25L28 11" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 style={{ fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 900, color: "var(--color-dark)", marginBottom: 16, lineHeight: 1.2 }}>
          Your Renewable Passport is Submitted!
        </h1>
        <p style={{ fontSize: 16, color: "var(--color-mid)", lineHeight: 1.75, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
          Thank you for completing your property assessment. Our team will review your details and match you with qualified local installers. We'll be in touch shortly.
        </p>

        {/* What's next cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 40, textAlign: "left" }}>
          {[
            { num: "1", title: "Review", desc: "We assess your property profile and goals" },
            { num: "2", title: "Match", desc: "We identify the best local MCS installers" },
            { num: "3", title: "Connect", desc: "An installer contacts you to arrange a survey" },
          ].map(s => (
            <div key={s.num} style={{ background: "#fff", borderRadius: 12, padding: "20px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid var(--color-border)" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, marginBottom: 10 }}>
                {s.num}
              </div>
              <p style={{ fontWeight: 700, fontSize: 14, color: "var(--color-dark)", margin: "0 0 4px" }}>{s.title}</p>
              <p style={{ fontSize: 13, color: "var(--color-mid)", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/" style={{ background: "var(--color-primary)", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Back to Home
          </a>
          <a href="/contact" style={{ background: "#fff", color: "var(--color-primary)", padding: "12px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14, border: "2px solid var(--color-primary)" }}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
