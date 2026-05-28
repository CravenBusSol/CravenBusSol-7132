import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";
import { useAnalytics } from "../hooks/use-analytics";

type FormData = { name: string; email: string; subject: string; message: string };
const init: FormData = { name: "", email: "", subject: "", message: "" };

const inp: React.CSSProperties = {
  width: "100%", padding: "10px 13px",
  border: "1.5px solid var(--color-border)", borderRadius: 8,
  fontSize: 14, fontFamily: "Poppins,sans-serif",
  outline: "none", background: "#fff", color: "var(--color-dark)",
};
const lbl: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "var(--color-dark)", display: "block", marginBottom: 5 };

export default function Contact() {
  useAnalytics("contact");
  const [form, setForm] = useState<FormData>(init);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);

  const set = (k: keyof FormData, v: string) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const submit = useMutation({
    mutationFn: () => api.post("/api/contact", form),
    onSuccess: () => setSuccess(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    submit.mutate();
  };

  return (
    <div style={{ background: "var(--color-light)", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "var(--color-primary)", color: "#fff", padding: "60px 20px 50px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, margin: "0 0 12px" }}>Get in Touch</h1>
        <p style={{ fontSize: 16, opacity: 0.88, maxWidth: 500, margin: "0 auto" }}>Questions about RenewPath, your assessment, or partnering with us? We'd love to hear from you.</p>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 20px 80px", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start" }}>
        {/* Left info */}
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-dark)", marginBottom: 24 }}>Contact Information</h2>
          {[
            { icon: "📧", label: "Email", value: "hello@renewpath.co.uk" },
            { icon: "📍", label: "Based in", value: "United Kingdom" },
            { icon: "🕐", label: "Response time", value: "Within 1–2 business days" },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", gap: 14, marginBottom: 24, alignItems: "flex-start" }}>
              <div style={{ fontSize: 22, lineHeight: 1 }}>{item.icon}</div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--color-mid)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 3px" }}>{item.label}</p>
                <p style={{ fontSize: 14, color: "var(--color-dark)", margin: 0, fontWeight: 500 }}>{item.value}</p>
              </div>
            </div>
          ))}

          <div style={{ background: "var(--color-primary-pale)", borderRadius: 12, padding: "20px 18px", marginTop: 32 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--color-primary)", marginBottom: 6 }}>Are you an installer?</p>
            <p style={{ fontSize: 13, color: "var(--color-mid)", margin: "0 0 12px", lineHeight: 1.6 }}>Register your interest to join our installer network and receive pre-qualified leads.</p>
            <a href="/installers" style={{ fontSize: 13, color: "var(--color-primary)", fontWeight: 700, textDecoration: "none" }}>Learn more →</a>
          </div>
        </div>

        {/* Form */}
        <div>
          {success ? (
            <div style={{ background: "#fff", borderRadius: 16, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>✅</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-primary)", marginBottom: 8 }}>Message sent!</h3>
              <p style={{ fontSize: 14, color: "var(--color-mid)", lineHeight: 1.7 }}>Thanks for reaching out. We'll get back to you within 1–2 business days.</p>
              <button onClick={() => { setSuccess(false); setForm(init); }} style={{ marginTop: 20, background: "var(--color-primary)", color: "#fff", padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", fontFamily: "Poppins,sans-serif" }}>
                Send another
              </button>
            </div>
          ) : (
            <div style={{ background: "#fff", borderRadius: 16, padding: "clamp(24px, 4vw, 40px)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                  <div style={{ marginBottom: 18 }}>
                    <label style={lbl}>Your Name *</label>
                    <input style={inp} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Jane Smith" />
                    {errors.name && <p style={{ color: "#DC2626", fontSize: 12, margin: "3px 0 0" }}>{errors.name}</p>}
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <label style={lbl}>Email Address *</label>
                    <input style={inp} type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="jane@example.com" />
                    {errors.email && <p style={{ color: "#DC2626", fontSize: 12, margin: "3px 0 0" }}>{errors.email}</p>}
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={lbl}>Subject *</label>
                  <input style={inp} value={form.subject} onChange={e => set("subject", e.target.value)} placeholder="How can we help?" />
                  {errors.subject && <p style={{ color: "#DC2626", fontSize: 12, margin: "3px 0 0" }}>{errors.subject}</p>}
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={lbl}>Message *</label>
                  <textarea style={{ ...inp, minHeight: 140, resize: "vertical" }} value={form.message} onChange={e => set("message", e.target.value)} placeholder="Tell us what's on your mind…" />
                  {errors.message && <p style={{ color: "#DC2626", fontSize: 12, margin: "3px 0 0" }}>{errors.message}</p>}
                </div>
                <button type="submit" disabled={submit.isPending} style={{
                  width: "100%", background: submit.isPending ? "#9CA3AF" : "var(--color-primary)",
                  color: "#fff", padding: "14px 24px", borderRadius: 10, fontWeight: 700, fontSize: 15,
                  border: "none", cursor: submit.isPending ? "not-allowed" : "pointer", fontFamily: "Poppins,sans-serif",
                }}>
                  {submit.isPending ? "Sending…" : "Send Message"}
                </button>
                {submit.isError && <p style={{ color: "#DC2626", fontSize: 13, textAlign: "center", marginTop: 10 }}>Something went wrong. Please try again.</p>}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
