import "./Skills.css";
import { technologies, arsenal } from "../../constants/index";
import { useReveal } from "../../hooks/useReveal";
import { WipeText } from "../../utils/WipeText";

const techMap = Object.fromEntries(technologies.map((t) => [t.name, t]));

function ArsenalGroup({ category, techs, index }) {
  const ref = useReveal(0.1);
  return (
    <div
      ref={ref}
      className="arsenal__group reveal"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <h3 className="arsenal__category">{category}</h3>
      <div className="arsenal__pills">
        {techs.map((name) => {
          const tech = techMap[name];
          return (
            <span key={name} className="arsenal__pill">
              {tech && <tech.Icon size={14} color={tech.color} />}
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Skills() {
  const headRef = useReveal(0.1);

  return (
    <section className="skills" id="Skills">
      <div ref={headRef} className="skills__head reveal">
        <span className="section__label">
          <span className="section__num">03 /</span> Expertise
        </span>
        <h2 className="skills__title" aria-label="Technical Arsenal">
          <WipeText text="TECHNICAL" delay={0} />{" "}
          <span className="skills__title-accent">
            <WipeText text="ARSENAL" delay={0.15} />
          </span>
        </h2>
      </div>

      <div className="skills__grid">
        {arsenal.map(({ category, techs }, i) => (
          <ArsenalGroup
            key={category}
            category={category}
            techs={techs}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
