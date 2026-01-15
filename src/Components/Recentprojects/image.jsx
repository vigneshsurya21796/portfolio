import React from "react";
import "./Recentprojects.css";
const image = ({ img, used, project, color }) => {
  return (
    <div>
      {" "}
      <div
        className="recentproject__imageone"
        style={{ backgroundColor: color }}
      >
        <img alt="recentimage" src={img} />

        <h1>{project}</h1>
        <><p>
          <span></span>
        </p></>
      </div>
    </div>
  );
};

export default image;
