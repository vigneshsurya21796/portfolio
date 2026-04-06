import "./Header.css";
import Picture from "../../Assets/profile.jpg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { HiArrowDown } from "react-icons/hi";

const roles = ["Full Stack Developer", "React JS Developer", "MERN Stack Developer"];

const socials = [
  { Icon: FaGithub,    href: "https://github.com/vigneshsurya21796",              label: "GitHub"   },
  { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/vigneshsurya21796/",     label: "LinkedIn" },
  { Icon: SiLeetcode,  href: "#",                                                  label: "LeetCode" },
  { Icon: MdAttachEmail, href: "mailto:vigneshsurya21796@gmail.com",               label: "Email"    },
];

function Header() {
  return (
    <div className="Header-conatainer" id="Home">

<div className="header_element_1">

        <div className="header__badge">
          <span className="header__badge-dot" />
          Available for work
        </div>

        <p className="header__greeting">Hello, I'm</p>

        <h1 className="header__name">Surya P</h1>

        <div className="header__roles">
          <span className="header__roles-prefix">I'm a&nbsp;</span>
          <div className="header__roles-window">
            <div className="header__roles-ticker">
              {[...roles, roles[0]].map((role, i) => (
                <span key={i} className="header__role">{role}</span>
              ))}
            </div>
          </div>
          <span className="header__cursor">|</span>
        </div>

        <p className="header__description">
          I'm a tech enthusiast who always looks into new tech stacks.
          A single word to represent me is{" "}
          <span className="header__highlight">adaptability</span>.
          Loves to learn new technology to work on a project.
        </p>

        <div className="header__stats">
          <div className="header__stat">
            <span className="header__stat-num">4+</span>
            <span className="header__stat-label">Years Exp.</span>
          </div>
          <span className="header__stat-divider" />
          <div className="header__stat">
            <span className="header__stat-num">20+</span>
            <span className="header__stat-label">Technologies</span>
          </div>
          <span className="header__stat-divider" />
          <div className="header__stat">
            <span className="header__stat-num">10+</span>
            <span className="header__stat-label">Projects</span>
          </div>
        </div>

        <div className="header__ctas">
          <a href="#Projects" className="header__cta-primary">View My Work</a>
          <a href="#Contactme" className="header__cta-secondary">Let's Talk</a>
        </div>

        <div className="header__socials">
          <span className="header__socials-line" />
          {socials.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="header__social-icon" aria-label={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>

      </div>

      <div className="header_element_2">
        <div className="header__image-wrapper">
          <img src={Picture} alt="Surya P" className="header__image" />
        </div>
      </div>

      <a href="#About" className="hero-scroll">
        <HiArrowDown size={16} />
      </a>

    </div>
  );
}

export default Header;
