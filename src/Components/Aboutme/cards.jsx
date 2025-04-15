import React from "react";
import "./Aboutme.css";
function Cards({ icon, title, description }) {
  return (
    <div className="card__header">
      <div className="card__header-container">
        <div className="icon__container">
          <img className="icon__cards" src={icon} alt="" />
        </div>

        <span>{title}</span>
        <p>{description}</p>
        <div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
