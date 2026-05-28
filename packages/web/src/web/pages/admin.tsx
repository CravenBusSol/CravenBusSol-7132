import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const ADMIN_KEY_STORAGE = "rp_admin_key";

type Submission = {
  id: number; name: string; email: string; phone: string; postcode: string;
  propertyType: string; ownershipStatus: string; currentHeatingType: string;
  boilerAge: string; hotWaterCylinder: string;
  interestedTechnologies: string; mainGoals: string;
  approximateBudget: string; timeline: string;
  grantFundingEssential: string; willingToUploadPhotos: string;
  consentGiven: boolean; createdAt: string;
};

type InstallerInterest = {
  id: number; companyName: string; contactName: string; email: string; phone: string;
  coverageAreas: string; technologies: string;
  mcsAccredited: string; averageInstallsPerMonth: string; message: string; createdAt: string;
};

type ContactMessage = {
  id: number; name: string; email: string; subject: string; message: string; createdAt: string;
};

const cell: React.CSSProperties = { padding: "10px 14px", fontSize: 13, borderBottom: "1px solid #F0F0F0", color: "#374151", verticalAlign: "top" };
const hcell: React.CSSProperties = { ...cell, fontWeight: 700, background: "#F9FAFB", color: "#166544", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" };

function Table({ cols, rows }: { cols: string[]; rows: (string | number | boolean | null)[][] }) {
  if (rows.length === 0) return <p style={{ fontSize: 14, color: "#9CA3AF", padding: "20px 0" }}>No records yet.</p>;
  return (
    <div style={{ overflowX: "auto", borderRadius: 10, border: "1px solid #E5E7EB" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>{cols.map(c => <th key={c} style={hcell}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#FAFAFA" }}>
              {row.map((cell_val, j) => <td key={j} style={cell}>{String(cell_val ?? "—")}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Panel({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 28, overflow: "hidden" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 24px", background: "none", border: "none", cursor: "pointer",
        fontFamily: "Poppins,sans-serif",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 16, fontWeight: 800, color: "#166544" }}>{title}</span>
          {count !== undefined && (
            <span style={{ background: "#166544", color: "#fff", borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 700 }}>{count}</span>
          )}
        </div>
        <span style={{ fontSize: 18, color: "#9CA3AF" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div style={{ padding: "0 24px 24px" }}>{children}</div>}
    </div>
  );
}

export default function Admin() {
  const [key, setKey] = useState(() => sessionStorage.getItem(ADMIN_KEY_STORAGE) || "");
  const [inputKey, setInputKey] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"submissions" | "installers" | "contacts">("submissions");

  const authed = !!key;

  const subs = useQuery<Submission[]>({
    queryKey: ["admin-submissions", key],
    queryFn: async () => {
      const r = await fetch("/api/admin/submissions", { headers: { "x-admin-key": key } });
      if (r.status === 401) { setKey(""); sessionStorage.removeItem(ADMIN_KEY_STORAGE); throw new Error("Unauthorized"); }
      const data = await r.json();
      return data.submissions ?? data;
    },
    enabled: authed && activeTab === "submissions",
  });

  const installers = useQuery<InstallerInterest[]>({
    queryKey: ["admin-installers", key],
    queryFn: async () => {
      const r = await fetch("/api/admin/installer-interest", { headers: { "x-admin-key": key } });
      if (r.status === 401) { setKey(""); sessionStorage.removeItem(ADMIN_KEY_STORAGE); throw new Error("Unauthorized"); }
      const data = await r.json();
      return data.entries ?? data;
    },
    enabled: authed && activeTab === "installers",
  });

  const contacts = useQuery<ContactMessage[]>({
    queryKey: ["admin-contacts", key],
    queryFn: async () => {
      const r = await fetch("/api/admin/contact", { headers: { "x-admin-key": key } });
      if (r.status === 401) { setKey(""); sessionStorage.removeItem(ADMIN_KEY_STORAGE); throw new Error("Unauthorized"); }
      const data = await r.json();
      return data.messages ?? data;
    },
    enabled: authed && activeTab === "contacts",
  });

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputKey.trim()) { setAuthError("Enter the admin key"); return; }
    setAuthError("");
    setKey(inputKey.trim());
    sessionStorage.setItem(ADMIN_KEY_STORAGE, inputKey.trim());
  };

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", background: "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "40px 36px", maxWidth: 400, width: "100%", boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🔐</div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: "#166544", margin: 0 }}>RenewPath Admin</h1>
            <p style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6 }}>Enter your admin key to continue</p>
          </div>
          <form onSubmit={login}>
            <input
              type="password"
              value={inputKey}
              onChange={e => setInputKey(e.target.value)}
              placeholder="Admin key"
              style={{ width: "100%", padding: "11px 13px", border: "1.5px solid #E5E7EB", borderRadius: 8, fontSize: 14, fontFamily: "Poppins,sans-serif", marginBottom: 12, outline: "none" }}
            />
            {authError && <p style={{ color: "#DC2626", fontSize: 13, margin: "0 0 10px" }}>{authError}</p>}
            <button type="submit" style={{ width: "100%", background: "#166544", color: "#fff", padding: "12px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "Poppins,sans-serif" }}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: "submissions", label: "Homeowner Submissions" },
    { id: "installers", label: "Installer Interest" },
    { id: "contacts", label: "Contact Messages" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#F3F4F6" }}>
      {/* Header */}
      <div style={{ background: "#166544", color: "#fff", padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20, fontWeight: 900 }}>RenewPath</span>
          <span style={{ fontSize: 13, opacity: 0.65, fontWeight: 500 }}>Admin</span>
        </div>
        <button onClick={() => { setKey(""); sessionStorage.removeItem(ADMIN_KEY_STORAGE); }} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", fontSize: 13, cursor: "pointer", fontFamily: "Poppins,sans-serif", fontWeight: 600 }}>
          Log out
        </button>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer",
              fontFamily: "Poppins,sans-serif", border: "none",
              background: activeTab === t.id ? "#166544" : "#fff",
              color: activeTab === t.id ? "#fff" : "#374151",
              boxShadow: activeTab === t.id ? "0 2px 8px rgba(22,101,68,0.2)" : "0 1px 4px rgba(0,0,0,0.06)",
            }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "submissions" && (
          <Panel title="Homeowner Submissions" count={subs.data?.length}>
            {subs.isLoading ? <p style={{ color: "#9CA3AF", fontSize: 14 }}>Loading…</p> : subs.isError ? <p style={{ color: "#DC2626", fontSize: 14 }}>Failed to load.</p> : (
              <Table
                cols={["#", "Name", "Email", "Phone", "Postcode", "Property Type", "Heating", "Technologies", "Budget", "Timeline", "Submitted"]}
                rows={(subs.data || []).map(s => [
                  s.id, s.name, s.email, s.phone || "—", s.postcode,
                  s.propertyType, s.currentHeatingType,
                  (() => { try { return JSON.parse(s.interestedTechnologies).join(", "); } catch { return s.interestedTechnologies; } })(),
                  s.approximateBudget || "—", s.timeline || "—",
                  new Date(s.createdAt).toLocaleDateString("en-GB"),
                ])}
              />
            )}
          </Panel>
        )}

        {activeTab === "installers" && (
          <Panel title="Installer Interest" count={installers.data?.length}>
            {installers.isLoading ? <p style={{ color: "#9CA3AF", fontSize: 14 }}>Loading…</p> : installers.isError ? <p style={{ color: "#DC2626", fontSize: 14 }}>Failed to load.</p> : (
              <Table
                cols={["#", "Company", "Contact", "Email", "Phone", "Coverage", "Technologies", "MCS", "Installs/mo", "Submitted"]}
                rows={(installers.data || []).map(i => [
                  i.id, i.companyName, i.contactName, i.email, i.phone || "—",
                  i.coverageAreas,
                  (() => { try { return JSON.parse(i.technologies).join(", "); } catch { return i.technologies; } })(),
                  i.mcsAccredited, i.averageInstallsPerMonth || "—",
                  new Date(i.createdAt).toLocaleDateString("en-GB"),
                ])}
              />
            )}
          </Panel>
        )}

        {activeTab === "contacts" && (
          <Panel title="Contact Messages" count={contacts.data?.length}>
            {contacts.isLoading ? <p style={{ color: "#9CA3AF", fontSize: 14 }}>Loading…</p> : contacts.isError ? <p style={{ color: "#DC2626", fontSize: 14 }}>Failed to load.</p> : (
              <Table
                cols={["#", "Name", "Email", "Subject", "Message", "Sent"]}
                rows={(contacts.data || []).map(c => [
                  c.id, c.name, c.email, c.subject, c.message.slice(0, 100) + (c.message.length > 100 ? "…" : ""),
                  new Date(c.createdAt).toLocaleDateString("en-GB"),
                ])}
              />
            )}
          </Panel>
        )}
      </div>
    </div>
  );
}
