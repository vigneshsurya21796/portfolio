import React from "react";
import "./Header.css";
import Picture from "../../Assets/IMG_0933-removebgwhite.png";
// import Avatar from "../../Assets/photo-1717501218636-a390f9ac5957.avif";
function Header() {
  return (
    <div className="Header-conatainer" id="Home">
      <div className="header_element_1">
        <p>Hello, My Name is</p>
        <h1>SURYA P</h1>

        {/*<div className="Header__text-container">*/}
        {/*  <span className="Nav_text">Im an </span>*/}
        {/*  <div className="Navbar_words">*/}
        {/*    <span className="rotating">Full stack developer</span>*/}
        {/*    <span className="rotating">React js developer</span>*/}
        {/*    <span className="rotating">MERN Stack developer</span>*/}
        {/*    <span className="rotating">Full stack developer</span>*/}
        {/*    <span className="rotating">React js developer</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="Nav_explanation">
          I'm a tech enthusiast who always looks into new tech stacks. A single
          word to represent me is adaptability. Loves to learn new technology to
          work on a project.
        </div>
      </div>
      <div className="header_element_2">
        <div className="Header__image-container">
          <img src={Picture} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
