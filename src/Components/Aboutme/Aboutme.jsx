import React from "react";
import "./Aboutme.css";
function Aboutme() {
  return (
    <div id="About">
      <div className="Portfolio_aboutMe-header">About me</div>
      <div className="Aboutme__flexcontianer">
        <div className="Portfolio_aboutMe-content">
          Hello! I’m a web developer with over four years of experience in the
          tech industry, combining a strong foundation in IT with hands-on
          expertise in web development. With a backgaboutmeround in Electronics
          {/*and Communication Engineering, I bring a unique perspective to coding,*/}
          {/*blending analytical skills with creative problem-solving. Currently, I*/}
          {/*work at Mayilveera Tech Solutions in Chennai, where I develop custom*/}
          {/*software for Shibaura Company, a leader in manufacturing molding*/}
          {/*machines for plastic products. My role involves creating efficient,*/}
          {/*scalable solutions that drive operational efficiency and provide an*/}
          {/*exceptional user experience. Over the years, I've built expertise in*/}
          {/*various technologies, including React, Express.js, Socket.io, and SQL,*/}
          {/*and have hands-on experience with integrations like Kafka for real-time*/}
          {/*data handling. I’m passionate about writing clean, maintainable code,*/}
          {/*and am always looking for ways to improve both user and developer*/}
          {/*experience. When I’m not coding, I enjoy exploring the latest trends in*/}
          {/*tech and expanding my skills to tackle new challenges. L et’s connect and*/}
          {/*create something amazing together!*/}'<button>Download CV</button>
        </div>
        <div className="Aboutme__contentone">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
