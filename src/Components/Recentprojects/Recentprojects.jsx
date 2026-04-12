import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Recentprojects.css";
import { FiExternalLink } from "react-icons/fi";
import { technologies } from "../../constants";
import { useReveal } from "../../hooks/useReveal";
import { WipeText } from "../../utils/WipeText";

const techMap = Object.fromEntries(technologies.map((t) => [t.name, t]));

const projects = [
  {
    num: "01",
    project: "Mayilveera Website",
    category: "Corporate / Web",
    description:
      "Full corporate website built with React and Node.js — responsive, production-deployed with custom CMS features, contact forms, and SEO-optimized pages.",
    used: ["React JS", "Node JS"],
    link: "https://mayilveera.com/",
  },
  {
    num: "02",
    project: "Meipaari IoT Platform",
    category: "IoT / Dashboard",
    description:
      "Real-time IoT monitoring dashboard with live data visualization, device management, and alert systems using Socket.io for bidirectional communication.",
    used: ["React JS", "Node JS", "MySQL"],
    link: null,
  },
  {
    num: "03",
    project: "ECommerce Platform",
    category: "E-Commerce / Full Stack",
    description:
      "End-to-end e-commerce platform with product catalog, cart, checkout, and order management. REST API backend with MongoDB for flexible product schema.",
    used: ["React JS", "Node JS", "MongoDB"],
    link: null,
  },
];

function ProjectCard({ p }) {
  return (
    <div className="project__card">
      <div className="project__card-inner">
        <div className="project__card-top">
          <span className="project__card-num">{p.num}</span>
          <span className="project__card-category">{p.category}</span>
        </div>

        <h3 className="project__card-title">{p.project}</h3>
        <p className="project__card-desc">{p.description}</p>

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
              data-hover
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
  const outerRef = useRef(null);   /* tall scroll container */
  const headRef  = useReveal(0.1);

  /* Drive horizontal pan off the tall outer container's scroll progress */
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  /*
    3 cards × 42vw = 126vw total strip width.
    Start: x=+4vw  → card 1 visible, card 3 barely peeking right.
    End:   x=-26vw → card 1 partially off-left, card 3 fully in view.
    Movement range = 30vw = 1 card width of travel.
  */
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["4vw", "-26vw"]);

  return (
    <section className="projects" id="Projects">
      <div ref={headRef} className="projects__head reveal">
        <span className="section__label">
          <span className="section__num">02 /</span> Work
        </span>
        <h2 className="projects__title" aria-label="Selected Projects">
          <WipeText text="SELECTED" delay={0} />{" "}
          <span className="projects__title-accent">
            <WipeText text="PROJECTS" delay={0.15} />
          </span>
        </h2>
      </div>

      {/* ── Tall outer div — gives scroll room for horizontal panning ── */}
      <div className="projects__sticky-outer" ref={outerRef}>

        {/* ── Sticky inner — stays in view while outer scrolls ───────── */}
        <div className="projects__sticky-inner">

          {/* ── Horizontally panning strip ─────────────────────────── */}
          <div className="projects__overflow">
            <motion.div className="projects__grid" style={{ x }}>
              {projects.map((p) => (
                <ProjectCard key={p.num} p={p} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Recentprojects;
