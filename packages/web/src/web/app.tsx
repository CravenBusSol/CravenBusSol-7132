import { Switch, Route } from "wouter";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/index";
import Passport from "./pages/passport";
import Installers from "./pages/installers";
import ThankYou from "./pages/thank-you";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import KnowledgeCentre from "./pages/knowledge-centre/index";
import AirSourceHeatPump from "./pages/knowledge-centre/air-source-heat-pump";
import GroundSourceHeatPump from "./pages/knowledge-centre/ground-source-heat-pump";
import SolarPV from "./pages/knowledge-centre/solar-pv";
import BatteryStorage from "./pages/knowledge-centre/battery-storage";
import EVCharger from "./pages/knowledge-centre/ev-charger";
import SolarThermal from "./pages/knowledge-centre/solar-thermal";
import Insulation from "./pages/knowledge-centre/insulation";
import MVHR from "./pages/knowledge-centre/mvhr";

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

      {/* Knowledge Centre */}
      <Route path="/knowledge-centre">
        <Layout><KnowledgeCentre /></Layout>
      </Route>
      <Route path="/knowledge-centre/air-source-heat-pump">
        <Layout><AirSourceHeatPump /></Layout>
      </Route>
      <Route path="/knowledge-centre/ground-source-heat-pump">
        <Layout><GroundSourceHeatPump /></Layout>
      </Route>
      <Route path="/knowledge-centre/solar-pv">
        <Layout><SolarPV /></Layout>
      </Route>
      <Route path="/knowledge-centre/battery-storage">
        <Layout><BatteryStorage /></Layout>
      </Route>
      <Route path="/knowledge-centre/ev-charger">
        <Layout><EVCharger /></Layout>
      </Route>
      <Route path="/knowledge-centre/solar-thermal">
        <Layout><SolarThermal /></Layout>
      </Route>
      <Route path="/knowledge-centre/insulation">
        <Layout><Insulation /></Layout>
      </Route>
      <Route path="/knowledge-centre/mvhr">
        <Layout><MVHR /></Layout>
      </Route>

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
