import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";
import { useAnalytics } from "../hooks/use-analytics";

const TECHNOLOGIES = ["Air source heat pump", "Ground source heat pump", "Solar PV", "Battery storage", "EV charger", "Other"];

type FormData = {
  companyName: string; contactName: string; email: string; phone: string;
  coverageAreas: string; technologies: string[];
  mcsAccredited: string; averageInstallsPerMonth: string;
  message: string;
};

const init: FormData = {
  companyName: "", contactName: "", email: "", phone: "",
  coverageAreas: "", technologies: [],
  mcsAccredited: "", averageInstallsPerMonth: "",
  message: "",
};

const inp: React.CSSProperties = {
  width: "100%", padding: "10px 13px",
  border: "1.5px solid var(--color-border)", borderRadius: 8,
  fontSize: 14, fontFamily: "Poppins,sans-serif",
  outline: "none", background: "#fff", color: "var(--color-dark)",
};
const lbl: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "var(--color-dark)", display: "block", marginBottom: 5 };
const errStyle = (msg?: string) => msg ? <p style={{ color: "#DC2626", fontSize: 12, margin: "3px 0 0" }}>{msg}</p> : null;

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={lbl}>{label}</label>
      {children}
      {errStyle(error)}
    </div>
  );
}

function MultiCheck({ options, selected, onChange }: { options: string[]; selected: string[]; onChange: (v: string[]) => void }) {
  const toggle = (v: string) => onChange(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v]);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
      {options.map(opt => {
        const checked = selected.includes(opt);
        return (
          <label key={opt} style={{
            display: "flex", alignItems: "center", gap: 8,
            background: checked ? "var(--color-primary)" : "#F9FAFB",
            border: `1.5px solid ${checked ? "var(--color-primary)" : "var(--color-border)"}`,
            borderRadius: 8, padding: "8px 12px", cursor: "pointer", fontSize: 13,
            color: checked ? "#fff" : "var(--color-dark)",
          }}>
            <input type="checkbox" checked={checked} onChange={() => toggle(opt)} style={{ accentColor: "var(--color-primary)" }} />
            {opt}
          </label>
        );
      })}
    </div>
  );
}

function Select({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder?: string }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)} style={{ ...inp, appearance: "none", cursor: "pointer" }}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

export default function Installers() {
  useAnalytics("installer_interest");
  const [form, setForm] = useState<FormData>(init);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [success, setSuccess] = useState(false);

  const set = (k: keyof FormData, v: string | string[]) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.companyName.trim()) e.companyName = "Company name is required";
    if (!form.contactName.trim()) e.contactName = "Contact name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.coverageAreas.trim()) e.coverageAreas = "Coverage area is required";
    if (form.technologies.length === 0) e.technologies = "Select at least one technology";
    if (!form.mcsAccredited) e.mcsAccredited = "Please select an option";
    return e;
  };

  const submit = useMutation({
    mutationFn: () => api.post("/api/installer-interest", {
      ...form,
      technologies: JSON.stringify(form.technologies),
    }),
    onSuccess: () => setSuccess(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    submit.mutate();
  };

  if (success) {
    return (
      <div style={{ background: "var(--color-light)", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "48px 40px", maxWidth: 520, textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "var(--color-primary)", marginBottom: 12 }}>Thanks for your interest!</h2>
          <p style={{ fontSize: 15, color: "var(--color-mid)", lineHeight: 1.7 }}>
            We've received your details and will be in touch shortly to discuss how RenewPath can connect you with pre-qualified homeowner leads in your area.
          </p>
          <a href="/" style={{ display: "inline-block", marginTop: 24, background: "var(--color-primary)", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--color-light)", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #1a5c45 100%)", color: "#fff", padding: "72px 20px 60px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14, color: "#fff" }}>For Installers</p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.2, margin: "0 0 18px" }}>
            Connect with Ready, Pre-Qualified Homeowners
          </h1>
          <p style={{ fontSize: 17, maxWidth: 600, margin: "0 auto", lineHeight: 1.7, color: "#fff" }}>
            RenewPath matches your installation capacity with homeowners who have already assessed their property and understand what they need. No wasted surveys, no cold leads.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 24, fontWeight: 800, color: "var(--color-dark)", marginBottom: 40 }}>Why Partner with RenewPath?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
            {[
              { icon: "🎯", title: "Pre-qualified leads", desc: "Every homeowner has completed a detailed property passport — you know exactly what they need before first contact." },
              { icon: "📍", title: "Local matching", desc: "Leads matched to your coverage area and technology specialisms. No out-of-area waste." },
              { icon: "⚡", title: "Faster conversions", desc: "Homeowners arrive informed and motivated. Cut survey-to-install timelines significantly." },
              { icon: "🛡️", title: "MCS-focused network", desc: "We work with accredited installers to ensure homeowners access quality work and grant funding." },
            ].map(b => (
              <div key={b.title} style={{ background: "var(--color-light)", borderRadius: 12, padding: "28px 24px", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: "var(--color-mid)", lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{ padding: "60px 20px 80px", background: "var(--color-light)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "clamp(24px, 5vw, 44px)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-dark)", marginBottom: 6 }}>Register Your Interest</h2>
            <p style={{ fontSize: 14, color: "var(--color-mid)", marginBottom: 28 }}>Fill in your details and we'll reach out to discuss next steps.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                <Field label="Company Name *" error={errors.companyName}>
                  <input style={inp} value={form.companyName} onChange={e => set("companyName", e.target.value)} placeholder="Eco Installs Ltd" />
                </Field>
                <Field label="Contact Name *" error={errors.contactName}>
                  <input style={inp} value={form.contactName} onChange={e => set("contactName", e.target.value)} placeholder="Jane Smith" />
                </Field>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                <Field label="Email Address *" error={errors.email}>
                  <input style={inp} type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="jane@ecoinstalls.co.uk" />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <input style={inp} type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="07700 900000" />
                </Field>
              </div>
              <Field label="Coverage Areas *" error={errors.coverageAreas}>
                <input style={inp} value={form.coverageAreas} onChange={e => set("coverageAreas", e.target.value)} placeholder="e.g. South West England, Wales" />
              </Field>
              <Field label="Technologies You Install *" error={errors.technologies}>
                <MultiCheck options={TECHNOLOGIES} selected={form.technologies} onChange={v => set("technologies", v)} />
              </Field>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                <Field label="MCS Accredited? *" error={errors.mcsAccredited}>
                  <Select value={form.mcsAccredited} onChange={v => set("mcsAccredited", v)} options={["Yes", "No", "In progress"]} placeholder="Select…" />
                </Field>
                <Field label="Avg. Installs Per Month" error={errors.averageInstallsPerMonth}>
                  <Select value={form.averageInstallsPerMonth} onChange={v => set("averageInstallsPerMonth", v)} options={["1–3", "4–8", "9–15", "16+"]} placeholder="Select…" />
                </Field>
              </div>
              <Field label="Anything else you'd like to share?" error={errors.message}>
                <textarea style={{ ...inp, minHeight: 100, resize: "vertical" }} value={form.message} onChange={e => set("message", e.target.value)} placeholder="Tell us about your business, specialisms, or any questions you have…" />
              </Field>

              <button type="submit" disabled={submit.isPending} style={{
                width: "100%", background: submit.isPending ? "#9CA3AF" : "var(--color-primary)",
                color: "#fff", padding: "14px 24px", borderRadius: 10, fontWeight: 700, fontSize: 15,
                border: "none", cursor: submit.isPending ? "not-allowed" : "pointer", fontFamily: "Poppins,sans-serif",
                marginTop: 8,
              }}>
                {submit.isPending ? "Submitting…" : "Register Interest"}
              </button>
              {submit.isError && <p style={{ color: "#DC2626", fontSize: 13, textAlign: "center", marginTop: 10 }}>Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
