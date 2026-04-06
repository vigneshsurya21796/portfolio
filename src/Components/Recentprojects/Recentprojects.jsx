import { useState } from "react";
import "./Recentprojects.css";
import { FiExternalLink } from "react-icons/fi";
import { technologies } from "../../constants";
import { useReveal } from "../../hooks/useReveal";
import Mayilveera from "../../Assets/mvsite.jpg";
import Meipaari from "../../Assets/meipaari3.PNG";
import Ecommerce from "../../Assets/ecommerce.jpg";

const techMap = Object.fromEntries(technologies.map((t) => [t.name, t]));

const projects = [
  {
    num: "01",
    img: Mayilveera,
    project: "Mayilveera Website",
    category: "Corporate / Web",
    used: ["React JS", "Node JS"],
    link: "https://mayilveera.com/",
  },
  {
    num: "02",
    img: Meipaari,
    project: "Meipaari IOT Platform",
    category: "IoT / Dashboard",
    used: ["React JS", "Node JS", "MySQL"],
    link: null,
  },
  {
    num: "03",
    img: Ecommerce,
    project: "ECommerce Site",
    category: "E-Commerce / Full Stack",
    used: ["React JS", "Node JS", "MongoDB"],
    link: null,
  },
];

function Recentprojects() {
  const [hovered, setHovered] = useState(null);
  const [mouseY,  setMouseY]  = useState(0);

  const headRef = useReveal(0.1);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  return (
    <section className="projects" id="Projects">
      {/* Heading */}
      <div ref={headRef} className="projects__head reveal">
        <span className="section__label">Work</span>
        <h2 className="projects__title">Selected Work</h2>
      </div>

      {/* Project list */}
      <div
        className="projects__list"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Floating preview image */}
        <div
          className={`projects__preview${hovered !== null ? " projects__preview--visible" : ""}`}
          style={{ top: mouseY - 130 }}
          aria-hidden="true"
        >
          {hovered !== null && (
            <img src={projects[hovered].img} alt={projects[hovered].project} />
          )}
        </div>

        {projects.map((p, i) => (
          <div
            key={i}
            className={`project__row${hovered === i ? " project__row--active" : ""}${hovered !== null && hovered !== i ? " project__row--dim" : ""}`}
            onMouseEnter={() => setHovered(i)}
          >
            {/* Hover accent bar */}
            <span className="project__row-bar" aria-hidden="true" />

            <span className="project__row-num">{p.num}</span>

            <div className="project__row-main">
              <h3 className="project__row-title">{p.project}</h3>
              <span className="project__row-category">{p.category}</span>
            </div>

            <div className="project__row-tags">
              {p.used.map((t) => {
                const tech = techMap[t];
                return (
                  <span
                    key={t}
                    className="project__tag"
                    title={t}
                  >
                    {tech && <tech.Icon size={13} color={tech.color} />}
                    <span>{t}</span>
                  </span>
                );
              })}
            </div>

            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project__row-link"
                onClick={(e) => e.stopPropagation()}
                title="Live site"
                data-hover
              >
                <FiExternalLink size={16} />
                <span>Visit</span>
              </a>
            ) : (
              <span className="project__row-private">Private</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recentprojects;
