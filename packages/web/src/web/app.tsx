import { Switch, Route } from "wouter";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/index";
import Passport from "./pages/passport";
import Installers from "./pages/installers";
import ThankYou from "./pages/thank-you";
import Contact from "./pages/contact";
import Admin from "./pages/admin";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Switch>
      {/* Admin — no Nav/Footer */}
      <Route path="/admin" component={Admin} />

      {/* Main site */}
      <Route path="/">
        <Layout><Home /></Layout>
      </Route>
      <Route path="/passport">
        <Layout><Passport /></Layout>
      </Route>
      <Route path="/installers">
        <Layout><Installers /></Layout>
      </Route>
      <Route path="/thank-you">
        <Layout><ThankYou /></Layout>
      </Route>
      <Route path="/contact">
        <Layout><Contact /></Layout>
      </Route>

      {/* 404 fallback */}
      <Route>
        <Layout>
          <div style={{ textAlign: "center", padding: "120px 20px" }}>
            <h1 style={{ fontSize: 32, fontWeight: 900, color: "var(--color-primary)" }}>Page not found</h1>
            <p style={{ color: "var(--color-mid)", marginBottom: 24 }}>The page you're looking for doesn't exist.</p>
            <a href="/" style={{ background: "var(--color-primary)", color: "#fff", padding: "11px 26px", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>Back to Home</a>
          </div>
        </Layout>
      </Route>
    </Switch>
  );
}
