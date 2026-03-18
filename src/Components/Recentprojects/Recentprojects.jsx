import { useState, useEffect } from "react";
import "./Recentprojects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Landingpage from "../../Assets/landingpage.png";
import Mayilveera from "../../Assets/mvsite.jpg";
import Meipaari from "../../Assets/meipaari3.PNG";
import Ecommerce from "../../Assets/ecommerce.jpg";
import { EffectCoverflow, Pagination } from "swiper/modules";

const projects = [
  { img: Landingpage, color: "#6C63FF", project: "Landing Page",          used: "React, Tailwind CSS"     },
  { img: Mayilveera,  color: "#129990", project: "Mayilveera Website",    used: "React, Node JS",         link: "https://mayilveera.com/" },
  { img: Meipaari,    color: "#CB0404", project: "Meipaari IOT Platform", used: "React, Node JS, MySQL"   },
  { img: Ecommerce,   color: "#DDA853", project: "ECommerce Site",        used: "React, Node JS, MongoDB" },
];

function Recentprojects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1000);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="Recentprojects__container" id="Projects">
      <div className="Receneproject__primary">
        <h3>Recent Projects</h3>
        <p className="Recentprojects__secondary">
          Some of the projects I've worked on — full-stack web apps and more.
        </p>
      </div>

      <div className="swiper-clip-wrapper">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1.2 : "auto"}
          spaceBetween={isMobile ? 16 : 30}
          initialSlide={1}
          coverflowEffect={{
            rotate: isMobile ? 15 : 30,
            stretch: 0,
            depth: isMobile ? 60 : 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projects.map((p, i) => (
            <SwiperSlide
              key={i}
              style={{ width: isMobile ? "85%" : "38%", backgroundColor: "transparent" }}
            >
              <ProjectCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Recentprojects;
