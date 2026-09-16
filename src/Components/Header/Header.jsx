import "./Header.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { socials } from "../../constants/index";

const SOLID_LETTERS = "SURYA".split("");
const OUTLINE_WORD = "DEVELOPER";

function Header() {
  const { scrollY } = useScroll();
  /* Spring-smoothed once, shared by every scroll-linked value below —
     raw scrollY updates in whatever bursts Lenis/the browser deliver
     them, which reads as jittery (worse on fast direction reversals
     like flicking back up); a single spring decouples the animation
     from that noise. */
  const smoothScrollY = useSpring(scrollY, { stiffness: 300, damping: 40, mass: 0.5 });

  const circleY = useTransform(smoothScrollY, [0, 600], [0, 140]);
  const glowY = useTransform(smoothScrollY, [0, 600], [0, 200]);
  const dotGridY = useTransform(smoothScrollY, [0, 600], [0, 80]);

  /* Scroll-drawn accent — draws in fast, over the first bit of scroll */
  const pathLength = useTransform(smoothScrollY, [0, 220], [0, 1]);

  return (
    <section className="hero" id="Home">
      {/* ── Background shapes (scroll-parallax) ───────────────── */}
      <div className="hero__bg" aria-hidden="true">
        <motion.div
          className="hero__shape hero__shape--circle"
          style={{ y: circleY }}
        />
        <div className="hero__shape hero__shape--ring" />
        <div className="hero__shape hero__shape--ring-sm" />
        <motion.div
          className="hero__shape hero__shape--dot-grid"
          style={{ y: dotGridY }}
        />
        <div className="hero__shape hero__shape--line" />
        <span className="hero__code-glyph">{"</>"}</span>
        <span className="hero__code-glyph hero__code-glyph--2">{"{}"}</span>
        <motion.div className="hero__glow" style={{ y: glowY }} />
      </div>

      {/* ── Corner label (top-left) ────────────────────────── */}
      <div className="hero__corner-label" aria-hidden="true">
        <span>Chennai, India</span>
        <span className="hero__corner-sep">—</span>
        <span>Full Stack Dev</span>
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="hero__content">
        {/* Name block */}
        <div className="hero__name-wrap">
          <h1 className="hero__name" aria-label="Surya — Full Stack Developer">
            <span className="hero__name-solid">
              {SOLID_LETTERS.map((ch, i) => (
                <span
                  key={i}
                  className="hero__letter"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {ch}
                </span>
              ))}
            </span>
            <span
              className="hero__name-outline"
              style={{ animationDelay: `${SOLID_LETTERS.length * 70 + 120}ms` }}
            >
              {OUTLINE_WORD}
            </span>
          </h1>

          {/* Scroll-drawn swoosh — loops over SURYA, dives through DEVELOPER */}
          <svg
            className="hero__scroll-path"
            viewBox="0 0 900 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="scrollPathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8FC1FF" />
                <stop offset="45%" stopColor="#1877F2" />
                <stop offset="100%" stopColor="#0E3A82" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0.0,8.32
       C 5.89,12.9 22.32,28.36 35.17,35.67 C 48.02,42.98 62.98,47.38 77.15,52.32
       C 91.32,57.25 105.6,62.01 120.31,65.4 C 135.02,68.79 150.23,71.64 165.53,72.53
       C 180.83,73.42 197.22,73.13 212.22,70.75 C 227.23,68.37 241.55,63.56 255.58,58.2
       C 269.66,52.85 286.77,38.88 296.53,38.64 C 306.29,38.41 316.25,46.73 314.09,56.84
       C 311.93,66.94 293.89,85.26 283.49,99.29 C 273.09,113.32 262.2,127.11 251.61,141.02
       C 241.01,154.93 229.39,168.37 219.92,182.88 C 210.46,197.38 195.3,215.7 194.71,228.0
       C 194.13,240.31 205.7,254.4 216.49,256.84 C 227.23,259.27 245.23,247.8 259.31,242.57
       C 273.38,237.34 287.17,231.27 301.05,225.33 C 314.88,219.38 328.66,213.08 342.44,206.9
       C 356.22,200.71 369.86,194.05 383.74,188.23 C 397.62,182.4 411.55,176.75 425.77,171.82
       C 439.99,166.88 454.22,162.01 468.98,158.74 C 483.74,155.47 500.27,149.82 514.4,152.2
       C 528.52,154.58 547.41,160.64 553.73,173.07 C 560.06,185.49 555.11,209.45 552.26,226.69
       C 549.42,243.94 541.37,259.75 536.57,276.58 C 531.76,293.4 523.77,310.46 523.32,327.71
       C 522.88,344.95 524.75,370.27 533.87,380.2 C 542.99,390.13 562.86,387.1 578.11,387.22
       C 593.36,387.34 609.65,382.28 625.49,381.03 C 641.33,379.79 657.22,379.43 673.06,379.79
       C 688.9,380.14 704.99,380.14 720.64,383.12 C 736.28,386.09 752.27,390.31 766.79,397.44
       C 781.31,404.58 794.55,417.36 807.84,425.86 C 821.13,434.36 834.18,438.7 846.59,448.34
       C 858.95,457.97 876.21,477.82 882.15,483.71"
              fill="none"
              stroke="url(#scrollPathGradient)"
              strokeWidth="14"
              strokeLinecap="butt"
              strokeLinejoin="round"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* Role */}
        <p className="hero__role">
          Full Stack <span className="hero__role-accent">Developer</span>
          <span className="hero__role-sep">·</span>
          <span className="hero__role-location">Chennai, India</span>
        </p>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-n">3.3+</span>
            <span className="hero__stat-l">Years Exp.</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-n">20+</span>
            <span className="hero__stat-l">Technologies</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-n">10+</span>
            <span className="hero__stat-l">Projects</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="hero__ctas">
          <a href="#Projects" className="hero__btn-primary" data-hover>
            View Work
          </a>
          <a href="#Contactme" className="hero__btn-secondary" data-hover>
            Let's Talk
          </a>
        </div>

        {/* Socials */}
        <div className="hero__socials">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hero__social"
              aria-label={label}
              data-hover
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;
