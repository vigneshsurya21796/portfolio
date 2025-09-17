import React from "react";
import "./Aboutme.css";
import image3 from "../../Assets/1F606_color.png";
import image2 from "../../Assets/1F60A_color.png";
import image1 from "../../Assets/1F601_color.png";
import Cards from "./cards";

function Aboutme() {
  return (
    <div id="About">
      <div className="Aboutme__flexcontianer">
        <div className="Aboutme__flexcontianer_top">
          <div className="Portfolio_aboutMe-content">
            <div className="Portfolio_aboutMe-header">About Me</div>
            <div>
              Hello! I’m a web developer with over four years of experience in
              the tech industry, combining a strong foundation in IT with
              hands-on expertise in web development. With a background in
              Electronics and Communication Engineering,
            </div>

            {/*
              I bring a unique perspective to coding,
              blending analytical skills with creative problem-solving.
              Currently, I work at Mayilveera Tech Solutions in Chennai,
              where I develop custom software for Shibaura Company, a leader
              in manufacturing molding machines for plastic products.
              My role involves creating efficient, scalable solutions
              that drive operational efficiency and provide an exceptional user experience.
              Over the years, I've built expertise in various technologies,
              including React, Express.js, Socket.io, and SQL, and have hands-on
              experience with integrations like Kafka for real-time data handling.
              I’m passionate about writing clean, maintainable code,
              and am always looking for ways to improve both user and developer experience.
              When I’m not coding, I enjoy exploring the latest trends in tech
              and expanding my skills to tackle new challenges.
              Let’s connect and create something amazing together.
            */}

            <button>
              {" "}
              <a
                href="https://drive.google.com/file/d/1wJiNO9up801Jm-SzmaiRWGCFDHIR5QIU/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Download CV
              </a>
            </button>
            {/* <a></a> */}
          </div>

          <div>
            <Cards
              icon={image1}
              title="Frontend Developer"
              description="Frontend Developer with proven ability to adapt to new technologies and collaborate effectively with other developers and mentor them at the same time."
            />
          </div>
        </div>

        <div className="Aboutme__contentone">
          <div>
            <Cards
              icon={image2}
              title="Full Stack Developer"
              description="Full Stack Developer with proven ability to adapt to new technologies and collaborate effectively with other developers and mentor them at the same time."
            />
          </div>

          <div className="margin__add">
            <Cards
              icon={image3}
              title="React Developer"
              description="React Developer with proven ability to adapt to new technologies and collaborate effectively with other developers and mentor them at the same time."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
