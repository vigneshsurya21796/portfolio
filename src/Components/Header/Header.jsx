import "./Header.css";
import { socials } from "../../constants/index";

const SOLID_LETTERS  = "SURYA".split("");
const OUTLINE_WORD   = "DEVELOPER";

function Header() {
  return (
    <section className="hero" id="Home">
      {/* ── Background shapes (static) ─────────────────────── */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__shape hero__shape--circle" />
        <div className="hero__shape hero__shape--ring" />
        <div className="hero__shape hero__shape--ring-sm" />
        <div className="hero__shape hero__shape--dot-grid" />
        <div className="hero__shape hero__shape--line" />
        <span className="hero__code-glyph">{"</>"}</span>
        <span className="hero__code-glyph hero__code-glyph--2">{"{}"}</span>
        <div className="hero__glow" />
      </div>

      {/* ── Corner label (top-left) ────────────────────────── */}
      <div className="hero__corner-label" aria-hidden="true">
        <span>Chennai, India</span>
        <span className="hero__corner-sep">—</span>
        <span>Full Stack Dev</span>
      </div>

      {/* ── Float panel (top-right) ────────────────────────── */}
      <div className="hero__float-panel" aria-label="Brief intro">
        <p>
          Building scalable web experiences with React, Node.js &amp; modern tooling.
          4+ years shipping products that people actually use.
        </p>
        <span className="hero__float-scroll">scroll for more ↓</span>
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="hero__content">
        {/* Name block */}
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

        {/* Role */}
        <p className="hero__role">
          Full Stack <span className="hero__role-accent">Developer</span>
          <span className="hero__role-sep">·</span>
          <span className="hero__role-location">Chennai, India</span>
        </p>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-n">4+</span>
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
