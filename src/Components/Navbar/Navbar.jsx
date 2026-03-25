import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#Home" },
    { label: "About", href: "#About" },
    { label: "Skills", href: "#Skills" },
    { label: "Projects", href: "#Projects" },
  ];

  return (
    <nav className={`project_Navbar ${scrolled ? "project_Navbar--scrolled" : ""}`}>
      {/* Logo */}
      <a href="#Home" className="project_Navbar_logo">
        <span className="logo__bracket">&lt;</span>
        Surya
        <span className="logo__bracket">/&gt;</span>
      </a>

      {/* Desktop links */}
      <div className="project_Navbar_signin">
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="nav__link">
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="project_Navbar_container">
        <a href="#Contactme" className="nav__cta">Contact Me</a>
      </div>

      {/* Hamburger */}
      <div className="project_Navbar_icon">
        {toggle ? (
          <FaTimes onClick={() => setToggle(false)} />
        ) : (
          <FaBars onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="project_Navbar_container_Responsive scale-up-center">
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="nav__mobile-link" onClick={() => setToggle(false)}>
                {label}
              </a>
            ))}
            <a href="#Contactme" className="nav__mobile-cta" onClick={() => setToggle(false)}>
              Contact Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
