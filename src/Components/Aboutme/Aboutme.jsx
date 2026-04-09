import "./Aboutme.css";
import { SiReact } from "react-icons/si";
import { FaServer, FaLayerGroup } from "react-icons/fa";
import { useReveal } from "../../hooks/useReveal";

const roles = [
  { Icon: SiReact,      color: "#61DAFB", title: "Frontend",   description: "Pixel-perfect UIs with React, Tailwind & modern CSS." },
  { Icon: FaServer,     color: "#68D391", title: "Backend",    description: "Scalable REST APIs with Node.js, Express & SQL/NoSQL." },
  { Icon: FaLayerGroup, color: "#A78BFA", title: "Full Stack", description: "End-to-end ownership from design system to deployment." },
];

const stats = [
  { num: "4+",   label: "Years Experience"  },
  { num: "10+",  label: "Projects Shipped"  },
  { num: "20+",  label: "Technologies"      },
  { num: "100%", label: "Remote Ready"      },
];

function RoleCard({ Icon, color, title, description, delay }) {
  const ref = useReveal(0.15);
  return (
    <div
      ref={ref}
      className="about__role-card reveal"
      style={{ transitionDelay: delay }}
    >
      <div className="about__role-icon" style={{ "--c": color }}>
        <Icon size={20} color={color} />
      </div>
      <div>
        <h3 className="about__role-title">{title}</h3>
        <p className="about__role-desc">{description}</p>
      </div>
    </div>
  );
}

function Aboutme() {
  const headRef  = useReveal(0.1);
  const bioRef   = useReveal(0.1);
  const statsRef = useReveal(0.15);

  return (
    <section id="About" className="about">
      {/* Watermark */}
      <div className="about__watermark" aria-hidden="true">01</div>

      <div className="about__inner">
        {/* Left */}
        <div className="about__left">
          <div ref={headRef} className="reveal">
            <span className="section__label">
              <span className="section__num">01 /</span> About Me
            </span>
            <h2 className="about__heading">
              Building <span className="about__heading-accent">Systems</span>
              <br />for the Web
            </h2>
          </div>

          <div ref={bioRef} className="reveal" style={{ transitionDelay: "0.1s" }}>
            <p className="about__bio">
              Web developer with <strong>4+ years</strong> of experience combining
              a foundation in Electronics &amp; Communication Engineering with
              hands-on full-stack expertise. Currently building custom software at{" "}
              <strong>Mayilveera Tech Solutions</strong>, Chennai — shipping
              scalable solutions with React, Node.js, Socket.io &amp; MySQL.
            </p>
            <a
              className="about__cv"
              href="https://drive.google.com/file/d/1wJiNO9up801Jm-SzmaiRWGCFDHIR5QIU/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              data-hover
            >
              Download CV <span className="about__cv-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Right — role cards */}
        <div className="about__right">
          <div className="about__roles">
            {roles.map(({ Icon, color, title, description }, i) => (
              <RoleCard
                key={title}
                Icon={Icon}
                color={color}
                title={title}
                description={description}
                delay={`${i * 0.12}s`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 4-column stats row */}
      <div ref={statsRef} className="about__stats-row reveal">
        {stats.map(({ num, label }) => (
          <div key={label} className="about__stat">
            <span className="about__stat-num">{num}</span>
            <span className="about__stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Aboutme;
