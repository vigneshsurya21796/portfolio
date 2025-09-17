import React from "react";
import "./Skills.css";
import { technologies } from "../../constants/index";
function Skills() {
  return (
    <div className="skills__container"  id="Skills">
      <div>
        <h1>Skills</h1>
        <div className="skills__container-overall">
          {technologies.map((tech, index) => {
            return (
              <div key={index} className="skills__imageconatainer">
                <p style={{ textAlign: "center" }}>{tech.name}</p>
                <img src={tech.icon} width="100%" alt="HTML 5" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
