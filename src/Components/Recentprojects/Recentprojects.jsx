import { useState } from "react";
import "./Recentprojects.css";
import { FiExternalLink } from "react-icons/fi";
import { technologies } from "../../constants";
import Landingpage from "../../Assets/landingpage.png";
import Mayilveera from "../../Assets/mvsite.jpg";
import Meipaari from "../../Assets/meipaari3.PNG";
import Ecommerce from "../../Assets/ecommerce.jpg";

const techMap = Object.fromEntries(technologies.map((t) => [t.name, t]));

const projects = [
  // {
  //   num: "01",
  //   img: Landingpage,
  //   project: "Landing Page",
  //   used: ["React JS", "Tailwind"],
  //   link: null,
  // },
  {
    num: "01",
    img: Mayilveera,
    project: "Mayilveera Website",
    used: ["React JS", "Node JS"],
    link: "https://mayilveera.com/",
  },
  {
    num: "02",
    img: Meipaari,
    project: "Meipaari IOT Platform",
    used: ["React JS", "Node JS", "MySQL"],
    link: null,
  },
  {
    num: "03",
    img: Ecommerce,
    project: "ECommerce Site",
    used: ["React JS", "Node JS", "MongoDB"],
    link: null,
  },
];

function Recentprojects() {
  const [hovered, setHovered] = useState(null);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  return (
    <div className="Recentprojects__container" id="Projects">
      {/* Heading */}
      <div className="Receneproject__primary">
        <h3>Recent Projects</h3>
        <p className="Recentprojects__secondary">
          Some of the projects I've worked on — full-stack web apps and more.
        </p>
      </div>

      {/* Project list */}
      <div className="projects__list" onMouseMove={handleMouseMove}>

        {/* Floating preview image */}
        <div
          className={`projects__preview ${hovered !== null ? "projects__preview--visible" : ""}`}
          style={{ top: mouseY - 120 }}
        >
          {hovered !== null && (
            <img src={projects[hovered].img} alt={projects[hovered].project} />
          )}
        </div>

        {projects.map((p, i) => (
          <div
            key={i}
            className={`project__row ${hovered === i ? "project__row--active" : ""} ${hovered !== null && hovered !== i ? "project__row--dim" : ""}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="project__row-num">{p.num}</span>

            <h3 className="project__row-title">{p.project}</h3>

            <div className="project__row-tags">
              {p.used.map((t) => {
                const tech = techMap[t];
                return (
                  <span key={t} className="project__row-tag" style={{ "--tc": tech?.color }} title={t}>
                    {tech && <tech.Icon size={15} color={tech.color} />}
                  </span>
                );
              })}
            </div>

            <div className="project__row-actions">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project__row-icon"
                  onClick={(e) => e.stopPropagation()}
                  title="Live site"
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recentprojects;
