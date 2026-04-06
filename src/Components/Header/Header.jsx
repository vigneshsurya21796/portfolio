import { useState, useEffect } from "react";
import "./Header.css";
import Picture from "../../Assets/profile.jpg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";

const socials = [
  { Icon: FaGithub,     href: "https://github.com/vigneshsurya21796",            label: "GitHub"   },
  { Icon: FaLinkedin,   href: "https://www.linkedin.com/in/vigneshsurya21796/",   label: "LinkedIn" },
  { Icon: SiLeetcode,   href: "#",                                                label: "LeetCode" },
  { Icon: MdAttachEmail,href: "mailto:vigneshsurya21796@gmail.com",               label: "Email"    },
];

const NAME_LETTERS = "SURYA P".split("");

function Header() {
  const [mouse, setMouse]   = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const px = mouse.x;
  const py = mouse.y;

  return (
    <section className="hero" id="Home">
      {/* ── Parallax background shapes ────────────────────── */}
      <div className="hero__bg" aria-hidden="true">
        <div
          className="hero__shape hero__shape--circle"
          style={{ transform: `translate(${px * 28}px, ${py * 18}px) translateY(${scrollY * 0.14}px)` }}
        />
        <div
          className="hero__shape hero__shape--ring"
          style={{ transform: `translate(${px * -22}px, ${py * 14}px) translateY(${scrollY * 0.06}px)` }}
        />
        <div
          className="hero__shape hero__shape--ring-sm"
          style={{ transform: `translate(${px * 16}px, ${py * -20}px) translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="hero__shape hero__shape--dot-grid"
          style={{ transform: `translate(${px * 12}px, ${py * -26}px) translateY(${scrollY * 0.08}px)` }}
        />
        <div
          className="hero__shape hero__shape--line"
          style={{ transform: `translate(${px * -32}px, ${py * 28}px)` }}
        />
        <span
          className="hero__code-glyph"
          style={{ transform: `translate(${px * 20}px, ${py * -14}px) translateY(${scrollY * 0.05}px)` }}
        >
          {"</>"}
        </span>
        <span
          className="hero__code-glyph hero__code-glyph--2"
          style={{ transform: `translate(${px * -16}px, ${py * 22}px)` }}
        >
          {"{}"}
        </span>
        {/* Radial glow */}
        <div className="hero__glow" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="hero__content">
        {/* Left */}
        <div className="hero__left">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Work
          </span>

          <h1 className="hero__name" aria-label="Surya P">
            {NAME_LETTERS.map((ch, i) => (
              <span
                key={i}
                className="hero__letter"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h1>

          <p className="hero__role">
            Full Stack <span className="hero__role-accent">Developer</span>
          </p>

          <p className="hero__desc">
            Building scalable web experiences with React, Node.js &amp; modern tooling.
            4+ years shipping products that people actually use.
          </p>

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

          <div className="hero__ctas">
            <a href="#Projects" className="hero__btn-primary" data-hover>
              View Work
            </a>
            <a href="#Contactme" className="hero__btn-secondary" data-hover>
              Let's Talk
            </a>
          </div>

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

        {/* Right — image */}
        <div
          className="hero__right"
          style={{ transform: `translateY(${scrollY * 0.09}px)` }}
        >
          <div className="hero__image-frame">
            <img src={Picture} alt="Surya P" className="hero__image" />
            <div className="hero__image-corner hero__image-corner--tr" aria-hidden="true" />
            <div className="hero__image-corner hero__image-corner--bl" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#About" className="hero__scroll" aria-label="Scroll down">
        <span className="hero__scroll-text">scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}

export default Header;
