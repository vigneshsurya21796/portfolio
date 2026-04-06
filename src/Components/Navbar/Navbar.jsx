import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home",     href: "#Home"     },
    { label: "About",    href: "#About"    },
    { label: "Skills",   href: "#Skills"   },
    { label: "Projects", href: "#Projects" },
  ];

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      {/* Logo */}
      <a href="#Home" className="nav__logo" data-hover>
        <span className="nav__logo-bracket">&lt;</span>SP<span className="nav__logo-bracket">/&gt;</span>
      </a>

      {/* Desktop links */}
      <ul className="nav__links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="nav__link" data-hover>{label}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#Contactme" className="nav__cta" data-hover>
        Contact Me
      </a>

      {/* Hamburger */}
      <button
        className="nav__hamburger"
        onClick={() => setToggle(!toggle)}
        aria-label="Toggle menu"
        data-hover
      >
        {toggle ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Mobile menu */}
      {toggle && (
        <div className="nav__mobile scale-up-center">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav__mobile-link"
              onClick={() => setToggle(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#Contactme"
            className="nav__mobile-cta"
            onClick={() => setToggle(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
