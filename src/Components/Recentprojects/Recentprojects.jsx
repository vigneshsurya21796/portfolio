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

function ProjectCard({ p, index }) {
  const ref = useReveal(0.1);
  return (
    <div
      ref={ref}
      className="project__card reveal"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="project__card-img">
        <img src={p.img} alt={p.project} loading="lazy" />
      </div>

      {/* Body */}
      <div className="project__card-body">
        <span className="project__card-num">{p.num}</span>
        <h3 className="project__card-title">{p.project}</h3>
        <p className="project__card-category">{p.category}</p>

        {/* Footer */}
        <div className="project__card-footer">
          <div className="project__card-tags">
            {p.used.map((t) => {
              const tech = techMap[t];
              return (
                <span key={t} className="project__tag">
                  {tech && <tech.Icon size={12} color={tech.color} />}
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
              className="project__card-link"
              aria-label={`Visit ${p.project}`}
            >
              <FiExternalLink size={15} />
            </a>
          ) : (
            <span className="project__row-private">Private</span>
          )}
        </div>
      </div>
    </div>
  );
}

function Recentprojects() {
  const headRef = useReveal(0.1);

  return (
    <section className="projects" id="Projects">
      <div ref={headRef} className="projects__head reveal">
        <span className="section__label">
          <span className="section__num">02 /</span> Work
        </span>
        <h2 className="projects__title">Selected Projects</h2>
      </div>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Recentprojects;
