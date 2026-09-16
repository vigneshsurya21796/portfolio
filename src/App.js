import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Header,
  Contactme,
  Aboutme,
  Skills,
  Recentprojects,
} from "./Components";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Preloader from "./Components/Preloader/Preloader";
import { useReveal } from "./hooks/useReveal";
import { ThemeProvider } from "./hooks/useTheme";
import "./App.css";

/* ── Tech Marquee — scroll-driven ────────────────────────── */
const MARQUEE_ITEMS = [
  "React", "Node.js", "TypeScript", "MySQL", "MongoDB",
  "Express", "Tailwind", "Docker", "GitHub", "Vite",
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
/* Perspective entrance — scale/translate settle in as the preloader panel
   slides away, matching the "inner" transition's page treatment. */
const pageVariants = {
  initial: { opacity: 0, scale: 0.94, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

function App() {
  /* Intro curtain — skipped entirely if the user prefers reduced motion */
  const [loading, setLoading] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [pageSettled, setPageSettled] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Lenis smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
    });
    lenisRef.current = lenis;
    if (loading) lenis.stop();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Scroll-driven gradient — panned via transform (compositor-only, avoids full-viewport repaint) */
  const { scrollYProgress } = useScroll();
  const gx = useTransform(scrollYProgress, [0, 1], ["-12vw", "12vw"]);
  const gy = useTransform(scrollYProgress, [0, 1], ["-8vh", "8vh"]);
  const gradientTransform = useMotionTemplate`translate(${gx}, ${gy})`;

  const pageContent = (
    <>
      <div className="App__container">
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
    </>
  );

  return (
    <ThemeProvider>
      <AnimatePresence onExitComplete={() => lenisRef.current?.start()}>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Scroll-driven accent gradient overlay */}
      <motion.div
        className="scroll-gradient"
        style={{ transform: gradientTransform }}
        aria-hidden="true"
      />

      {/* Navbar sits outside the perspective wrapper — it owns a
          position:fixed full-screen overlay that must stay pinned to
          the viewport, not a transformed ancestor. */}
      <div className="App__container">
        <Navbar />
      </div>

      {pageSettled ? (
        pageContent
      ) : (
        <motion.div
          className="App__page"
          variants={pageVariants}
          initial="initial"
          animate={loading ? "initial" : "visible"}
          onAnimationComplete={(definition) => {
            if (definition === "visible") setPageSettled(true);
          }}
        >
          {pageContent}
        </motion.div>
      )}

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "var(--surface-2)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "14px",
          },
        }}
      />
    </ThemeProvider>
  );
}

export default App;
