import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";
import { useAnalytics } from "../hooks/use-analytics";

const TECHNOLOGIES = ["Air source heat pump", "Ground source heat pump", "Solar PV", "Battery storage", "EV charger", "Not sure yet"];
const GOALS = ["Lower my energy bills", "Replace old or failing heating", "Reduce my carbon footprint", "Improve home comfort", "Prepare my home for an EV", "Explore what options are available"];

type FormData = {
  name: string; email: string; phone: string; postcode: string;
  propertyType: string; ownershipStatus: string; currentHeatingType: string;
  boilerAge: string; hotWaterCylinder: string;
  interestedTechnologies: string[]; mainGoals: string[];
  approximateBudget: string; timeline: string;
  grantFundingEssential: string; willingToUploadPhotos: string;
  consentGiven: boolean;
};

const init: FormData = {
  name: "", email: "", phone: "", postcode: "",
  propertyType: "", ownershipStatus: "", currentHeatingType: "",
  boilerAge: "", hotWaterCylinder: "",
  interestedTechnologies: [], mainGoals: [],
  approximateBudget: "", timeline: "",
  grantFundingEssential: "", willingToUploadPhotos: "",
  consentGiven: false,
};

const inp: React.CSSProperties = {
  width: "100%", padding: "10px 13px",
  border: "1.5px solid var(--color-border)", borderRadius: 8,
  fontSize: 14, fontFamily: "Poppins,sans-serif",
  outline: "none", background: "#fff", color: "var(--color-dark)",
};
const lbl: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "var(--color-dark)", display: "block", marginBottom: 5 };
const err = (msg?: string) => msg ? <p style={{ color: "#DC2626", fontSize: 12, margin: "3px 0 0" }}>{msg}</p> : null;

function SectionHead({ label }: { label: string }) {
  return (
    <div style={{ borderBottom: "2px solid var(--color-primary-pale)", paddingBottom: 10, marginBottom: 20, marginTop: 36 }}>
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--color-primary)" }}>{label}</h3>
    </div>
  );
}

function MultiCheck({ options, selected, onChange }: { options: string[]; selected: string[]; onChange: (v: string[]) => void }) {
  const toggle = (v: string) => onChange(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v]);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 8 }}>
      {options.map(opt => (
        <label key={opt} style={{
          display: "flex", alignItems: "center", gap: 9, padding: "9px 13px",
          border: `1.5px solid ${selected.includes(opt) ? "var(--color-primary)" : "var(--color-border)"}`,
          borderRadius: 8, cursor: "pointer",
          background: selected.includes(opt) ? "var(--color-primary-pale)" : "#fff",
          fontSize: 13, fontWeight: 500, transition: "all 0.12s",
        }}>
          <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} />
          {opt}
        </label>
      ))}
    </div>
  );
}

function RadioGroup({ options, value, onChange, name }: { options: { label: string; value: string }[]; value: string; onChange: (v: string) => void; name: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {options.map(opt => (
        <label key={opt.value} style={{
          display: "flex", alignItems: "center", gap: 9, padding: "9px 13px",
          border: `1.5px solid ${value === opt.value ? "var(--color-primary)" : "var(--color-border)"}`,
          borderRadius: 8, cursor: "pointer",
          background: value === opt.value ? "var(--color-primary-pale)" : "#fff",
          fontSize: 13, fontWeight: 500, transition: "all 0.12s",
        }}>
          <input type="radio" name={name} value={opt.value} checked={value === opt.value} onChange={() => onChange(opt.value)} />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

export default function PassportPage() {
  const [form, setForm] = useState<FormData>(init);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [, navigate] = useLocation();
  const { trackEvent } = useAnalytics();

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    setErrors(er => ({ ...er, [field]: "" }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email address";
    if (!form.postcode.trim()) e.postcode = "Please enter your postcode";
    if (!form.propertyType) e.propertyType = "Please select a property type";
    if (!form.ownershipStatus) e.ownershipStatus = "Please select your ownership status";
    if (!form.currentHeatingType) e.currentHeatingType = "Please select your heating type";
    if (!form.boilerAge) e.boilerAge = "Please select boiler age";
    if (!form.hotWaterCylinder) e.hotWaterCylinder = "Please select an option";
    if (form.interestedTechnologies.length === 0) e.interestedTechnologies = "Please select at least one";
    if (form.mainGoals.length === 0) e.mainGoals = "Please select at least one";
    if (!form.approximateBudget) e.approximateBudget = "Please select a budget";
    if (!form.timeline) e.timeline = "Please select a timeline";
    if (!form.grantFundingEssential) e.grantFundingEssential = "Please select an option";
    if (!form.willingToUploadPhotos) e.willingToUploadPhotos = "Please select an option";
    if (!form.consentGiven) e.consentGiven = "You must give consent to continue";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await api.submissions.$post({ json: data as any });
      return res.json();
    },
    onSuccess: () => { trackEvent("passport_submitted"); navigate("/thank-you"); },
  });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (validate()) submit.mutate(form); };

  const radio = (field: keyof FormData, opts: { label: string; value: string }[]) => (
    <RadioGroup name={field} value={form[field] as string}
      onChange={v => { setForm(f => ({ ...f, [field]: v })); setErrors(er => ({ ...er, [field]: "" })); }}
      options={opts} />
  );

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", padding: "48px 0 80px" }}>
      <div className="container">
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div style={{ marginBottom: 32 }}>
            <span style={{
              display: "inline-block", background: "var(--color-primary-pale)", color: "var(--color-primary)",
              fontWeight: 600, fontSize: 12, padding: "4px 13px", borderRadius: 20, marginBottom: 14,
              textTransform: "uppercase" as const, letterSpacing: "0.4px",
            }}>Homeowner Renewable Passport</span>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, marginBottom: 10, marginTop: 0 }}>
              Tell us about your home and project
            </h1>
            <p style={{ fontSize: 16, marginTop: 0, marginBottom: 0 }}>
              This takes around 5 minutes. The information you provide helps us understand your property and goals so we can provide a meaningful readiness summary and, where appropriate, match you with suitable installers.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            background: "#fff", border: "1px solid var(--color-border)",
            borderRadius: 14, padding: "clamp(20px, 5vw, 44px)",
          }}>

            <SectionHead label="1. Your contact details" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16 }}>
              <div><label style={lbl}>Full name *</label><input style={inp} value={form.name} onChange={set("name")} placeholder="e.g. Sarah Thompson" />{err(errors.name)}</div>
              <div><label style={lbl}>Email address *</label><input style={inp} type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" />{err(errors.email)}</div>
              <div><label style={lbl}>Phone number</label><input style={inp} type="tel" value={form.phone} onChange={set("phone")} placeholder="Optional" /></div>
              <div><label style={lbl}>Postcode *</label><input style={inp} value={form.postcode} onChange={set("postcode")} placeholder="e.g. SW1A 1AA" />{err(errors.postcode)}</div>
            </div>

            <SectionHead label="2. Your property" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16 }}>
              <div>
                <label style={lbl}>Property type *</label>
                <select style={{ ...inp, appearance: "auto" as const }} value={form.propertyType} onChange={set("propertyType")}>
                  <option value="">Select…</option>
                  {["Detached house","Semi-detached house","Terraced house","End-of-terrace house","Bungalow","Flat / apartment","Maisonette","Cottage","Other"].map(o => <option key={o}>{o}</option>)}
                </select>
                {err(errors.propertyType)}
              </div>
              <div>
                <label style={lbl}>Ownership status *</label>
                <select style={{ ...inp, appearance: "auto" as const }} value={form.ownershipStatus} onChange={set("ownershipStatus")}>
                  <option value="">Select…</option>
                  {["Owner-occupier","Landlord / rental property","Shared ownership","Other"].map(o => <option key={o}>{o}</option>)}
                </select>
                {err(errors.ownershipStatus)}
              </div>
            </div>

            <SectionHead label="3. Your current heating" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={lbl}>Current heating type *</label>
                <select style={{ ...inp, appearance: "auto" as const }} value={form.currentHeatingType} onChange={set("currentHeatingType")}>
                  <option value="">Select…</option>
                  {["Gas boiler (radiators)","Gas boiler (underfloor heating)","Oil boiler","LPG boiler","Electric storage heaters","Air source heat pump (existing)","Solid fuel / log burner","No central heating","Other"].map(o => <option key={o}>{o}</option>)}
                </select>
                {err(errors.currentHeatingType)}
              </div>
              <div>
                <label style={lbl}>Boiler or heating system age *</label>
                <select style={{ ...inp, appearance: "auto" as const }} value={form.boilerAge} onChange={set("boilerAge")}>
                  <option value="">Select…</option>
                  {["Less than 5 years old","5–10 years old","10–15 years old","More than 15 years old","Unknown","No boiler / not applicable"].map(o => <option key={o}>{o}</option>)}
                </select>
                {err(errors.boilerAge)}
              </div>
            </div>
            <div>
              <label style={lbl}>Do you have a hot water cylinder? *</label>
              {radio("hotWaterCylinder", [{ label: "Yes", value: "yes" }, { label: "No (combi boiler or no cylinder)", value: "no" }, { label: "Not sure", value: "not_sure" }])}
              {err(errors.hotWaterCylinder)}
            </div>

            <SectionHead label="4. Technologies you're interested in" />
            <p style={{ fontSize: 13, color: "var(--color-mid)", marginTop: 0, marginBottom: 12 }}>Select all that apply. It is fine to select "Not sure yet".</p>
            <MultiCheck options={TECHNOLOGIES} selected={form.interestedTechnologies}
              onChange={v => { setForm(f => ({ ...f, interestedTechnologies: v })); setErrors(er => ({ ...er, interestedTechnologies: "" })); }} />
            {err(errors.interestedTechnologies)}

            <SectionHead label="5. Your main goals" />
            <p style={{ fontSize: 13, color: "var(--color-mid)", marginTop: 0, marginBottom: 12 }}>Select all that apply.</p>
            <MultiCheck options={GOALS} selected={form.mainGoals}
              onChange={v => { setForm(f => ({ ...f, mainGoals: v })); setErrors(er => ({ ...er, mainGoals: "" })); }} />
            {err(errors.mainGoals)}

            <SectionHead label="6. Budget and timeline" />
            <div style={{ marginBottom: 18 }}>
              <label style={lbl}>Approximate budget *</label>
              <select style={{ ...inp, appearance: "auto" as const }} value={form.approximateBudget} onChange={set("approximateBudget")}>
                <option value="">Select…</option>
                {["Under £5,000","£5,000 – £10,000","£10,000 – £15,000","£15,000 – £25,000","Over £25,000","Not sure yet"].map(o => <option key={o}>{o}</option>)}
              </select>
              {err(errors.approximateBudget)}
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={lbl}>How soon are you looking to proceed? *</label>
              {radio("timeline", [
                { label: "Ready to proceed now", value: "ready_now" },
                { label: "Within the next 3 months", value: "within_3_months" },
                { label: "Within the next 6 months", value: "within_6_months" },
                { label: "Just researching at this stage", value: "researching" },
              ])}
              {err(errors.timeline)}
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={lbl}>Is grant funding (e.g. Boiler Upgrade Scheme) essential to your project? *</label>
              {radio("grantFundingEssential", [
                { label: "Yes — grant funding is essential", value: "yes" },
                { label: "Useful but not essential", value: "useful_not_essential" },
                { label: "No — I am able to self-fund", value: "no" },
                { label: "Not sure", value: "not_sure" },
              ])}
              {err(errors.grantFundingEssential)}
            </div>
            <div>
              <label style={lbl}>Would you be willing to upload photos of your property? *</label>
              <p style={{ fontSize: 13, color: "var(--color-mid)", marginTop: 0, marginBottom: 10 }}>Photos of your boiler, loft, roof and electrics help installers assess the project before visiting.</p>
              {radio("willingToUploadPhotos", [
                { label: "Yes, I am happy to upload photos", value: "yes" },
                { label: "Possibly — depends on what is needed", value: "possibly" },
                { label: "No, I would prefer not to", value: "no" },
              ])}
              {err(errors.willingToUploadPhotos)}
            </div>

            <SectionHead label="7. Your consent" />
            <div style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 10, padding: 18, marginBottom: 6 }}>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
                <input type="checkbox" checked={form.consentGiven}
                  onChange={e => { setForm(f => ({ ...f, consentGiven: e.target.checked })); setErrors(er => ({ ...er, consentGiven: "" })); }}
                  style={{ marginTop: 2 }} />
                <span style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-dark)" }}>
                  I consent to RenewPath storing my project information and, where appropriate, sharing it with selected renewable energy installers for the purpose of obtaining quotes or project assessments. I understand my details will not be shared with any third parties for marketing purposes.
                </span>
              </label>
            </div>
            {err(errors.consentGiven)}

            {Object.keys(errors).length > 0 && (
              <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, padding: "10px 14px", marginTop: 20 }}>
                <p style={{ color: "#DC2626", fontWeight: 600, fontSize: 13, margin: 0 }}>Please review the highlighted fields above before submitting.</p>
              </div>
            )}

            <div style={{ marginTop: 28 }}>
              <button type="submit" disabled={submit.isPending} style={{
                width: "100%", background: submit.isPending ? "#9CA3AF" : "var(--color-primary)",
                color: "#fff", padding: "14px 24px", borderRadius: 10, fontWeight: 700, fontSize: 15,
                border: "none", cursor: submit.isPending ? "not-allowed" : "pointer",
                fontFamily: "Poppins,sans-serif",
              }}>
                {submit.isPending ? "Submitting…" : "Submit My Renewable Passport"}
              </button>
              {submit.isError && <p style={{ color: "#DC2626", fontSize: 13, textAlign: "center", marginTop: 10 }}>Something went wrong. Please try again.</p>}
              <p style={{ fontSize: 12, color: "var(--color-mid)", textAlign: "center", marginTop: 10, marginBottom: 0 }}>
                Your information is kept secure and will not be shared without your consent.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
