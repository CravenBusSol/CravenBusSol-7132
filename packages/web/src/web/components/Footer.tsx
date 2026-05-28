import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)", color: "#9CA3AF", padding: "56px 0 28px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ marginBottom: 14 }}>
              <img src="/logo.png" alt="RenewPath" style={{ height: 192, width: "auto", filter: "brightness(0) invert(1)" }} />
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "#9CA3AF", margin: 0 }}>
              Renewable project readiness for UK homeowners and installers.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 14, marginTop: 0 }}>Homeowners</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link to="/passport" style={{ color: "#9CA3AF", fontSize: 13 }}>Start Your Renewable Passport</Link>
              <Link to="/#how-it-works" style={{ color: "#9CA3AF", fontSize: 13 }}>How it works</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 14, marginTop: 0 }}>Installers</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link to="/installers" style={{ color: "#9CA3AF", fontSize: 13 }}>Installer Information</Link>
              <Link to="/installers#register" style={{ color: "#9CA3AF", fontSize: 13 }}>Register Interest</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 14, marginTop: 0 }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link to="/contact" style={{ color: "#9CA3AF", fontSize: 13 }}>Contact Us</Link>
            </div>
            <p style={{ fontSize: 12, color: "#6B7280", marginTop: 14, marginBottom: 0 }}>Based in the United Kingdom</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #374151", paddingTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 10 }}>
          <p style={{ margin: 0, fontSize: 12, color: "#6B7280" }}>© {new Date().getFullYear()} RenewPath. All rights reserved.</p>
          <p style={{ margin: 0, fontSize: 12, color: "#6B7280" }}>Renewable project readiness · United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
