import { useState, useEffect, useRef } from "react";
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

const SPRING = [0.16, 1, 0.3, 1];

function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [origin, setOrigin]     = useState({ x: "calc(100% - 40px)", y: "40px" });
  const [hamRect, setHamRect]   = useState({ top: 12, left: 0, width: 36, height: 36, right: 0 });
  const hamRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Calculate exact hamburger position for circle origin + close btn placement */
  const handleOpen = () => {
    if (hamRef.current) {
      const rect = hamRef.current.getBoundingClientRect();
      const cx = Math.round(rect.left + rect.width  / 2);
      const cy = Math.round(rect.top  + rect.height / 2);
      setOrigin({ x: `${cx}px`, y: `${cy}px` });
      setHamRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    }
    setOpen(true);
  };

  const close = () => setOpen(false);

  const circleAt = `${origin.x} ${origin.y}`;

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

        {/* Availability badge */}
        <div className="nav__availability" aria-label="Availability status">
          <span className="nav__avail-dot" aria-hidden="true" />
          Available
        </div>

        {/* Hamburger — only visible when closed */}
        <button
          ref={hamRef}
          className={`nav__hamburger${open ? " nav__hamburger--hidden" : ""}`}
          onClick={handleOpen}
          aria-label="Open menu"
          aria-expanded={open}
          data-hover
        >
          <span className="nav__line" />
          <span className="nav__line" />
          <span className="nav__line" />
        </button>
      </nav>

      {/* Full-screen circle-reveal overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Close button — pixel-perfect on top of the hamburger */}
            <motion.button
              className="nav__close"
              onClick={close}
              aria-label="Close menu"
              data-hover
              style={{
                position: "fixed",
                top:    hamRect.top,
                left:   hamRect.left,
                width:  hamRect.width,
                height: hamRect.height,
              }}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{    opacity: 0, rotate: -45 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
            >
              <span className="nav__close-line" />
              <span className="nav__close-line" />
            </motion.button>

          <motion.div
            className="nav__overlay"
            initial={{ clipPath: `circle(0% at ${circleAt})` }}
            animate={{ clipPath: `circle(150% at ${circleAt})` }}
            exit={{    clipPath: `circle(0% at ${circleAt})` }}
            transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Centered nav links */}
            <ul className="nav__overlay-links">
              {links.map(({ num, label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{    opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.3 + i * 0.07,
                    duration: 0.55,
                    ease: SPRING,
                  }}
                >
                  <a href={href} className="nav__overlay-link" onClick={close}>
                    <span className="nav__overlay-num">{num}</span>
                    <span className="nav__overlay-label">{label}</span>
                    <span className="nav__overlay-arrow">↗</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Footer */}
            <motion.div
              className="nav__overlay-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ delay: 0.65, duration: 0.4 }}
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
