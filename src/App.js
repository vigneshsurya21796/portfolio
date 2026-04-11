import React, { useEffect } from "react";
import {
  Navbar,
  Header,
  Contactme,
  Aboutme,
  Skills,
  Recentprojects,
} from "./Components";
import { Toaster } from "react-hot-toast";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Cursor from "./Components/Cursor/Cursor";
import { useReveal } from "./hooks/useReveal";
import "./App.css";

/* ── Tech Marquee — scroll-driven ────────────────────────── */
const MARQUEE_ITEMS = [
  "React", "Node.js", "TypeScript", "MySQL", "MongoDB",
  "Express", "Tailwind", "Figma", "GitHub", "Vite",
];

function TechMarquee() {
  const { scrollY } = useScroll();
  /* As page scrolls 0 → 1600px, strip slides left by 42% of its width */
  const x = useTransform(scrollY, [0, 1600], ["0%", "-42%"]);

  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="tech-marquee full-bleed" aria-hidden="true">
      <motion.div className="tech-marquee__inner" style={{ x }}>
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className="tech-marquee__word">{item}</span>
            <span className="tech-marquee__sep">/</span>
          </React.Fragment>
        ))}
      </motion.div>
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
  /* Lenis smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  /* Scroll-driven gradient */
  const { scrollYProgress } = useScroll();
  const gx = useTransform(scrollYProgress, [0, 1], ["12%", "88%"]);
  const gy = useTransform(scrollYProgress, [0, 1], ["8%",  "92%"]);
  const bgPos = useMotionTemplate`${gx} ${gy}`;

  return (
    <>
      {/* Scroll-driven lime gradient overlay */}
      <motion.div
        className="scroll-gradient"
        style={{ backgroundPosition: bgPos }}
        aria-hidden="true"
      />

      <Cursor />

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
