import React from "react";
import "./Skills.css";
import { technologies } from "../../constants/index";

function Skills() {
  const half = Math.ceil(technologies.length / 2);
  const rowOne = technologies.slice(0, half);
  const rowTwo = technologies.slice(half);

  return (
    <div className="skills__container" id="Skills">
      <h1>Skills</h1>
      <div className="skills__marquee-wrapper">
        {/* Row 1 — scrolls left */}
        <div className="skills__marquee-track">
          <div className="skills__marquee-row skills__scroll-left">
            {[...rowOne, ...rowOne].map((tech, index) => (
              <div key={index} className="skills__pill">
                <tech.Icon size={28} color={tech.color} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div className="skills__marquee-track">
          <div className="skills__marquee-row skills__scroll-right">
            {[...rowTwo, ...rowTwo].map((tech, index) => (
              <div key={index} className="skills__pill">
                <tech.Icon size={28} color={tech.color} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
