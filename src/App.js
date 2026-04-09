import React from "react";
import {
  Navbar,
  Header,
  Contactme,
  Aboutme,
  Skills,
  Recentprojects,
} from "./Components";
import { Toaster } from "react-hot-toast";
import { useReveal } from "./hooks/useReveal";
import "./App.css";

/* ── Tech Marquee ─────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "React", "Node.js", "TypeScript", "MySQL", "MongoDB",
  "Express", "Tailwind", "Figma", "GitHub", "Vite",
];

function TechMarquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="tech-marquee full-bleed" aria-hidden="true">
      <div className="tech-marquee__inner">
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className="tech-marquee__word">{item}</span>
            <span className="tech-marquee__sep">/</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Quote Section ────────────────────────────────────────── */
function QuoteSection() {
  const ref = useReveal(0.2);
  return (
    <section className="quote-section" aria-label="Philosophy">
      <div ref={ref} className="quote-section__inner reveal">
        <span className="quote-section__mark" aria-hidden="true">"</span>
        <blockquote className="quote-section__text">
          First, solve the problem.<br />Then, write the code.
        </blockquote>
        <p className="quote-section__attr">— John Johnson</p>
      </div>
    </section>
  );
}

/* ── App ──────────────────────────────────────────────────── */
function App() {
  return (
    <>
      <div className="App__container">
        <Navbar />
        <Header />
      </div>

      <TechMarquee />

      <div className="App__container">
        <QuoteSection />
        <Aboutme />
        <Recentprojects />
        <Skills />
        <Contactme />
      </div>

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#1A1A1A",
            color: "#EDE8E0",
            border: "1px solid #222222",
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "14px",
          },
        }}
      />
    </>
  );
}

export default App;
