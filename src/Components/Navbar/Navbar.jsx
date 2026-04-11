import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import { socials } from "../../constants/index";

const links = [
  { num: "01", label: "Home",     href: "#Home"     },
  { num: "02", label: "About",    href: "#About"    },
  { num: "03", label: "Skills",   href: "#Skills"   },
  { num: "04", label: "Projects", href: "#Projects" },
  { num: "05", label: "Contact",  href: "#Contactme"},
];

function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        {/* Logo */}
        <a href="#Home" className="nav__logo" data-hover onClick={close}>
          <span className="nav__logo-bracket">&lt;</span>SP
          <span className="nav__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav__link" data-hover>{label}</a>
            </li>
          ))}
        </ul>

        {/* Availability badge — desktop only */}
        <div className="nav__availability" aria-label="Availability status">
          <span className="nav__avail-dot" aria-hidden="true" />
          Available
        </div>

        {/* Animated hamburger */}
        <button
          className={`nav__hamburger${open ? " is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-hover
        >
          <span className="nav__line" />
          <span className="nav__line" />
          <span className="nav__line" />
        </button>
      </nav>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__overlay"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Nav links */}
            <ul className="nav__overlay-links">
              {links.map(({ num, label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{
                    delay: 0.25 + i * 0.07,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={href}
                    className="nav__overlay-link"
                    onClick={close}
                  >
                    <span className="nav__overlay-num">{num}</span>
                    <span className="nav__overlay-label">{label}</span>
                    <span className="nav__overlay-arrow">↗</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Footer row */}
            <motion.div
              className="nav__overlay-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <p className="nav__overlay-tag">Full Stack Developer — Chennai, India</p>
              <div className="nav__overlay-socials">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="nav__overlay-social"
                    onClick={close}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
