import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Recentprojects.css";
import { FiArrowUpRight, FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import { technologies } from "../../constants";
import { useReveal } from "../../hooks/useReveal";
import { WipeText } from "../../utils/WipeText";
import banksimImg from "../../Assets/project/banksim.png";
import ecommerceImg from "../../Assets/project/ecommerce.png";
import cryptoImg from "../../Assets/project/crypto.png";
import spendwiseImg from "../../Assets/project/spendwise.png";
import messageImg from "../../Assets/project/message.png";

const techMap = Object.fromEntries(technologies.map((t) => [t.name, t]));

/* ── Real projects — stacks pulled from each repo's package.json ── */
const projects = [
  {
    number: "01",
    name: "BankSim",
    subtitle: "Full-stack banking platform simulator",
    category: "FinTech / Full Stack",
    description:
      "Simulated banking platform with account dashboards, statement generation, and email notifications. Background jobs run through BullMQ/Redis, auth via NextAuth + JWT, all on a Next.js + MongoDB foundation.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Redis", "Socket.io", "Tailwind"],
    live: "https://banksim-ivdo.onrender.com",
    github: "https://github.com/vigneshsurya21796/BankSim",
    slug: "banksim",
    accentColor: "#4E9BFF",
    isFeatured: true,
    image: banksimImg,
    placeholder: "linear-gradient(135deg, #08101a 0%, #102030 60%, #0a141f 100%)",
  },
  {
    number: "02",
    name: "Crypto Tracker",
    subtitle: "Real-time market data & charting",
    category: "FinTech / Real-Time Data",
    description:
      "Real-time cryptocurrency tracker streaming live price updates over Socket.io/WebSockets, with Redis-backed caching and interactive charts rendered via lightweight-charts.",
    technologies: ["React JS", "Vite", "Node JS", "Socket.io", "Redis", "Tailwind"],
    live: "https://crypto-tracker-flame-zeta.vercel.app/",
    github: "https://github.com/vigneshsurya21796/Crypto-Tracker",
    slug: "crypto-tracker",
    accentColor: "#FF6FB0",
    isFeatured: true,
    image: cryptoImg,
    placeholder: "linear-gradient(135deg, #190a1a 0%, #2a1030 60%, #14081a 100%)",
  },
  {
    number: "03",
    name: "SpendWise",
    subtitle: "Personal expense & budget tracker",
    category: "FinTech / Personal Finance",
    description:
      "Expense tracking app with budgeting views and spend trends charted via Recharts. Hardened Express API with Helmet, rate limiting, and Zod validation backs a React Query-driven frontend.",
    technologies: ["React JS", "Vite", "Node JS", "MongoDB", "React Query", "Tailwind"],
    live: "https://spendwise-eta-orpin-19.vercel.app",
    github: "https://github.com/vigneshsurya21796/SpendWise",
    slug: "spendwise",
    accentColor: "#3DDC6E",
    isFeatured: false,
    image: spendwiseImg,
    placeholder: "linear-gradient(135deg, #071a10 0%, #0f2a1c 60%, #081a12 100%)",
  },
  {
    number: "04",
    name: "MessageAnyone",
    subtitle: "Real-time messaging application",
    category: "Real-Time Chat / Full Stack",
    description:
      "Real-time chat app with instant messaging over Socket.io, JWT-based auth, and Cloudinary-hosted media uploads on a MERN foundation.",
    technologies: ["React JS", "Vite", "Node JS", "Socket.io", "MongoDB", "React Router"],
    live: "https://messageanyone.netlify.app/login",
    github: "https://github.com/vigneshsurya21796/message-app",
    slug: "messageanyone",
    accentColor: "#FF9A3D",
    isFeatured: false,
    image: messageImg,
    placeholder: "linear-gradient(135deg, #1a1207 0%, #2a1f10 60%, #1a1408 100%)",
  },
  {
    number: "05",
    name: "ECommerce Platform",
    subtitle: "Catalog, cart & Stripe checkout",
    category: "E-Commerce / Full Stack",
    description:
      "End-to-end e-commerce platform with product catalog, cart, and Stripe-powered checkout. Redux Toolkit manages client state on top of an Express + MongoDB REST API.",
    technologies: ["React JS", "Node JS", "Express JS", "MongoDB", "Stripe", "Redux"],
    live: "https://ecommerce-92rp.onrender.com/",
    github: "https://github.com/vigneshsurya21796/ecommerce",
    slug: "ecommerce",
    accentColor: "#3DDC97",
    isFeatured: false,
    image: ecommerceImg,
    placeholder: "linear-gradient(135deg, #1a080d 0%, #2a1020 60%, #1a0a14 100%)",
  },
];

function ProjectCard({ project, index, total, progress }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  const primaryUrl = project.live || project.github;
  const primaryLabel = project.live ? "Live Demo" : "View Code";
  const PrimaryIcon = project.live ? FiExternalLink : FiGithub;

  return (
    <div className="project__sticky">
      <motion.div className="project__card" style={{ scale }}>
        <div
          className="project__card-bar"
          style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent 80%)` }}
        />

        <div className="project__card-grid">
          {/* Left — metadata */}
          <div className="project__card-left">
            <div className="project__meta-row">
              <div className="project__meta-left">
                <span className="project__number" style={{ color: project.accentColor }}>
                  {project.number}
                </span>
                {project.isFeatured && (
                  <span className="project__badge project__badge--featured">
                    <FiStar size={11} />
                    Featured
                  </span>
                )}
              </div>
              <span
                className="project__badge project__badge--category"
                style={{ color: project.accentColor, borderColor: `${project.accentColor}44` }}
              >
                {project.category}
              </span>
            </div>

            <div className="project__heading">
              <h3 className="project__title">{project.name}</h3>
              <p className="project__subtitle">{project.subtitle}</p>
            </div>

            <p className="project__description">{project.description}</p>

            <div className="project__tech">
              <span className="project__tech-label">Technology Stack</span>
              <div className="project__tech-list">
                {project.technologies.map((t) => {
                  const tech = techMap[t];
                  return (
                    <span key={t} className="project__tech-pill">
                      {tech && <tech.Icon size={11} color={tech.color} />}
                      <span>{t}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="project__actions">
              <a
                href={primaryUrl}
                target="_blank"
                rel="noreferrer"
                className="project__btn project__btn--primary"
                style={{ backgroundColor: project.accentColor }}
                data-hover
              >
                <PrimaryIcon size={14} />
                <span>{primaryLabel}</span>
                <FiArrowUpRight size={13} />
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project__btn project__btn--secondary"
                  data-hover
                >
                  <FiGithub size={14} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Right — mockup preview */}
          <div className="project__card-right">
            <a
              href={primaryUrl}
              target="_blank"
              rel="noreferrer"
              className="project__mockup"
              aria-label={`Open ${project.name}`}
              data-hover
            >
              <div className="project__mockup-chrome">
                <div className="project__mockup-dots">
                  <span className="project__mockup-dot project__mockup-dot--red" />
                  <span className="project__mockup-dot project__mockup-dot--yellow" />
                  <span className="project__mockup-dot project__mockup-dot--green" />
                </div>
                <div className="project__mockup-url">https://{project.slug}.dev</div>
                <div className="project__mockup-chrome-spacer" />
              </div>

              <div className="project__mockup-viewport">
                {project.image ? (
                  <img
                    className="project__mockup-image"
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="project__mockup-image"
                    style={{ background: project.placeholder }}
                  />
                )}
                <div className="project__mockup-dotgrid" />
                <div className="project__mockup-overlay">
                  <span className="project__mockup-overlay-text">
                    {project.name} — {project.category}
                  </span>
                  <span
                    className="project__mockup-cta"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    Open Project <FiArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Recentprojects() {
  const containerRef = useRef(null);
  const headRef = useReveal(0.1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="projects" id="Projects">
      <div ref={headRef} className="projects__head reveal">
        <h2 className="projects__title" aria-label="Recent Projects">
          <WipeText text="RECENT" delay={0} />{" "}
          <span className="projects__title-accent">
            <WipeText text="PROJECTS" delay={0.15} />
          </span>
        </h2>
      </div>

      <div className="projects__stack" ref={containerRef}>
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={idx}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

export default Recentprojects;
