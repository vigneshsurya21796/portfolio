import "./Recentprojects.css";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ img, used, project, color, link }) => {
  const stack = used ? used.split(",").map((s) => s.trim()) : [];

  return (
    <div className="project__card">
      <img src={img} alt={project} className="project__card-img" />
      <div className="project__card-overlay" style={{ "--accent": color }} />

      <div className="project__card-info">
        <div className="project__card-top">
          <h2 className="project__card-title">{project}</h2>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="project__card-link"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
        <div className="project__card-stack">
          {stack.map((tech, i) => (
            <span key={i} className="project__card-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
