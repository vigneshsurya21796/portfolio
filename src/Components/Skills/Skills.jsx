import "./Skills.css";
import { technologies } from "../../constants/index";
import { useReveal } from "../../hooks/useReveal";

function Skills() {
  const headRef = useReveal(0.1);
  const half = Math.ceil(technologies.length / 2);
  const rowOne = technologies.slice(0, half);
  const rowTwo = technologies.slice(half);

  return (
    <section className="skills" id="Skills">
      <div ref={headRef} className="skills__head reveal">
        <span className="section__label">Stack</span>
        <h2 className="skills__title">Technologies</h2>
      </div>

      <div className="skills__marquee-wrapper">
        {/* Row 1 — scrolls left */}
        <div className="skills__marquee-track">
          <div className="skills__marquee-row skills__scroll-left">
            {[...rowOne, ...rowOne].map((tech, index) => (
              <div key={`r1-${tech.name}-${index}`} className="skills__pill">
                <tech.Icon size={22} color={tech.color} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div className="skills__marquee-track">
          <div className="skills__marquee-row skills__scroll-right">
            {[...rowTwo, ...rowTwo].map((tech, index) => (
              <div key={`r2-${tech.name}-${index}`} className="skills__pill">
                <tech.Icon size={22} color={tech.color} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
