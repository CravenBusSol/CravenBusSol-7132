import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/knowledge-centre", label: "Knowledge Centre" },
    { to: "/passport", label: "Start Passport" },
    { to: "/installers", label: "Installers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#fff",
      borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.2s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 100 }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="RenewPath" style={{ height: 160, width: "auto" }} />
        </Link>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="rp-desktop-nav">
          {links.map((l) => (
            <Link key={l.to} to={l.to} style={{
              fontSize: 14, fontWeight: 500,
              color: location === l.to ? "var(--color-primary)" : "var(--color-mid)",
            }}>{l.label}</Link>
          ))}
          <Link to="/passport" style={{
            background: "var(--color-primary)", color: "#fff",
            padding: "9px 20px", borderRadius: 8, fontWeight: 600, fontSize: 14,
          }}>
            Start Your Passport
          </Link>
        </div>

        {/* Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="rp-mobile-btn"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid var(--color-border)", padding: "12px 24px 24px" }}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} style={{
              display: "block", padding: "12px 0",
              fontSize: 15, fontWeight: 500,
              color: location === l.to ? "var(--color-primary)" : "var(--color-dark)",
              borderBottom: "1px solid var(--color-border)",
            }}>{l.label}</Link>
          ))}
          <Link to="/passport" style={{
            display: "block", marginTop: 16,
            background: "var(--color-primary)", color: "#fff",
            padding: "12px", borderRadius: 8, fontWeight: 600, fontSize: 15, textAlign: "center",
          }}>Start Your Passport</Link>
        </div>
      )}

      <style>{`
        @media(min-width:768px){.rp-mobile-btn{display:none!important}}
        @media(max-width:767px){.rp-desktop-nav{display:none!important}}
      `}</style>
    </nav>
  );
}
