import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Recentprojects.css";
import { FiArrowUpRight } from "react-icons/fi";
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
    image: null,
    placeholder: "linear-gradient(135deg, #0d1a08 0%, #1a2e10 60%, #0f1f0a 100%)",
  },
  {
    num: "02",
    project: "Crypto Tracker",
    category: "Finance / Web App",
    description:
      "Real-time cryptocurrency tracking app with live price updates, market cap data, and interactive charts. Fetches data from CoinGecko API with search and filter support.",
    used: ["React JS", "Socket.io"],
    link: "https://crypto-tracker-flame-zeta.vercel.app/",
    image: null,
    placeholder: "linear-gradient(135deg, #08101a 0%, #102030 60%, #0a141f 100%)",
  },
  {
    num: "03",
    project: "ECommerce Platform",
    category: "E-Commerce / Full Stack",
    description:
      "End-to-end e-commerce platform with product catalog, cart, checkout, and order management. REST API backend with MongoDB for flexible product schema.",
    used: ["React JS", "Node JS", "MongoDB"],
    link: "https://ecommerce-92rp.onrender.com/",
    image: null,
    placeholder: "linear-gradient(135deg, #1a080d 0%, #2a1020 60%, #1a0a14 100%)",
  },
];

const barVariants = {
  rest: { scaleY: 0 },
  hover: { scaleY: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const lineVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const watermarkVariants = {
  rest: { opacity: 0.06, color: "#EDE8E0" },
  hover: { opacity: 0.15, color: "#C9FF47", transition: { duration: 0.3 } },
};

function ProjectCard({ p }) {
  return (
    <motion.div
      className="project__card"
      initial="rest"
      whileHover="hover"
    >
      {/* Left accent bar */}
      <motion.span className="project__card-bar" variants={barVariants} />

      {/* Image / placeholder zone */}
      <div className="project__card-image-wrap">
        {p.image ? (
          <img src={p.image} alt={p.project} className="project__card-image" />
        ) : (
          <div
            className="project__card-placeholder"
            style={{ background: p.placeholder }}
          />
        )}
      </div>

      {/* Text block */}
      <div className="project__card-body">
        {/* Category */}
        <div className="project__card-category">
          <span className="project__card-dot" />
          <span>{p.category}</span>
        </div>

        {/* Title */}
        <h3 className="project__card-title">{p.project}</h3>

        {/* Animated divider */}
        <motion.div className="project__card-divider" variants={lineVariants} />

        {/* Footer */}
        <div className="project__card-footer">
          <div className="project__card-tags">
            {p.used.map((t) => {
              const tech = techMap[t];
              return (
                <span key={t} className="project__tag">
                  {tech && <tech.Icon size={11} color={tech.color} />}
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
              className="project__card-cta"
              aria-label={`Visit ${p.project}`}
              data-hover
            >
              VIEW <FiArrowUpRight size={13} />
            </a>
          ) : (
            <span className="project__row-private">Private</span>
          )}
        </div>

        {/* Watermark number */}
        <motion.span className="project__card-watermark" variants={watermarkVariants}>
          {p.num}
        </motion.span>
      </div>
    </motion.div>
  );
}

function Recentprojects() {
  const outerRef = useRef(null);
  const headRef  = useReveal(0.1);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  /*
    3 cards × 36vw = 108vw total strip.
    Start x=+4vw → card 1 fully visible, card 2 peeking right.
    End   x=-18vw → card 1 partially off-left, card 3 fully in view.
  */
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["4vw", "-18vw"]);

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

      <div className="projects__sticky-outer" ref={outerRef}>
        <div className="projects__sticky-inner">
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
