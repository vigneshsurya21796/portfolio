import React from "react";
import "./Aboutme.css";

function Cards({ Icon, color, title, description }) {
  return (
    <div className="about__card">
      <div className="about__card-icon" style={{ "--icon-color": color }}>
        <Icon size={26} color={color} />
      </div>
      <div className="about__card-body">
        <h3 className="about__card-title">{title}</h3>
        <p className="about__card-desc">{description}</p>
      </div>
    </div>
  );
}

export default Cards;
