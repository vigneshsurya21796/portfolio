import "./Aboutme.css";
import { SiReact } from "react-icons/si";
import { FaServer, FaLayerGroup } from "react-icons/fa";
import { technologies } from "../../constants/index";

const roles = [
  { Icon: SiReact,      color: "#61DAFB", title: "Frontend Developer", description: "Pixel-perfect UIs with React, Tailwind & modern CSS." },
  { Icon: FaServer,     color: "#68D391", title: "Backend Developer",  description: "Scalable REST APIs with Node.js, Express & SQL/NoSQL." },
  { Icon: FaLayerGroup, color: "#A78BFA", title: "Full Stack",         description: "End-to-end ownership from design system to deployment." },
];

const techPreview = technologies.slice(0, 8);

function Aboutme() {
  return (
    <div id="About" className="aboutme__section">
      <div className="aboutme__bento">

        {/* 1. Bio card — col 1-2, row 1 */}
        <div className="bento-card bento-bio">
          <span className="bento-eyebrow">About Me</span>
          <h2 className="bento-heading">I Build Things<br />for the Web</h2>
          <p className="bento-bio-text">
            Web developer with <strong>4+ years</strong> of experience combining
            a foundation in Electronics &amp; Communication Engineering with
            hands-on full-stack expertise. Currently building custom software at
            <strong> Mayilveera Tech Solutions</strong>, Chennai — shipping
            scalable solutions with React, Node.js, Socket.io &amp; MySQL.
          </p>
          <a
            className="bento-cv-btn"
            href="https://drive.google.com/file/d/1wJiNO9up801Jm-SzmaiRWGCFDHIR5QIU/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>

        {/* 2. Tech icons card — col 3, row 1 */}
        <div className="bento-card bento-tech">
          <span className="bento-card-label">Tech I Work With</span>
          <div className="bento-tech-grid">
            {techPreview.map(({ Icon, color, name }) => (
              <div key={name} className="bento-tech-icon" title={name}>
                <Icon size={24} color={color} />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Stats card — col 1-3, row 2 */}
        <div className="bento-card bento-stats">
          <div className="stat-item">
            <span className="stat-num">4+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">8+</span>
            <span className="stat-label">Tech Stacks</span>
          </div>
        </div>

        {/* 4–6. Role cards — row 3 */}
        {roles.map(({ Icon, color, title, description }) => (
          <div key={title} className="bento-card bento-role">
            <div className="bento-role-icon" style={{ "--c": color }}>
              <Icon size={22} color={color} />
            </div>
            <h3 className="bento-role-title">{title}</h3>
            <p className="bento-role-desc">{description}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Aboutme;
