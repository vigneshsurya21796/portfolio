import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

// import Apple from "../../assets/artificial-intelligence-14078.svg";
function Navbar() {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="project_Navbar">
      <div className="project_Navbar_links">
        <div className="project_Navbar_img">
          <h3>Surya</h3>
        </div>
        <div className="project_Navbar_signin">
          <p>
            <a href="#Home">Home</a>
          </p>
          <p>
            <a href="#About">About</a>
          </p>
          <p>
            <a href="#Skills">Skills</a>
          </p>
          <p>
            <a href="#Projects">Projects</a>
          </p>
        </div>
        <div className="project_Navbar_container">
          <button>
            <a href="#Contactme">Contact Me</a>
          </button>
        </div>
      </div>

      <div className="project_Navbar_icon">
        {toggle ? (
          <FaTimes onClick={() => settoggle(!toggle)} color="grey" />
        ) : (
          <FaBars color="grey" onClick={() => settoggle(!toggle)} />
        )}
        {toggle && (
          <div className="project_Navbar_container_Responsive scale-up-center">
            <div className="project_Navbar_container_links">
              <p>
                <a href="#Home" onClick={() => settoggle(false)}>
                  Home
                </a>
              </p>
              <p>
                <a href="#About" onClick={() => settoggle(false)}>
                  About
                </a>
              </p>

              <p>
                <a href="#Skills" onClick={() => settoggle(false)}>
                  Skills
                </a>
              </p>
              <p>
                <a href="#Projects" onClick={() => settoggle(false)}>
                  Projects
                </a>
              </p>

            </div>
            {/*  <div className="Project_Navbar_links_signin">
              <p>Signin</p>
              <button>Signup</button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
