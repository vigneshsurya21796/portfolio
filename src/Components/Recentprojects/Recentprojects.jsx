import React from "react";
import "./Recentprojects.css";
import {  useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "./image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Landingpage from "../../Assets/landingpage.png";
import Mayilveera from "../../Assets/mvsite.jpg";
import Meipaari from "../../Assets/meipaari3.PNG";
import Ecommerce from "../../Assets/ecommerce.jpg";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function Recentprojects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="Recentprojects__container" id="Projects">
      <div className="Receneproject__primary">
        <h3>Recent Projects</h3>
        <div className="Recentprojects__secondary">
          These were some of the projects which I worked in the last 6 months. I
          worked both in Fullstack Web Applications and Mobile Applications.
        </div>
      </div>
      <Swiper
        spaceBetween={isMobile ? 10 : -50}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1.2 : "auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: isMobile ? 30 : 75,
          stretch: isMobile ? 0 : 20,
          depth: isMobile ? 80 : 10,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="Recent__projects-img">
          <div className="recent__projects-container">
            <SwiperSlide
              style={{
                width: isMobile ? "85%" : "40%",
                backgroundColor: "transparent",
              }}
            >
              <Image
                img={Landingpage}
                color="rgba(0, 0, 255, 0.522)"
                project="Landing page"
                used="React"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: isMobile ? "85%" : "40%",
                backgroundColor: "transparent",
              }}
            >
              <Image
                img={Mayilveera}
                color="#129990"
                project="Mayilveera website"
                used="React"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: isMobile ? "85%" : "40%",
                backgroundColor: "transparent",
              }}
            >
              <Image
                img={Meipaari}
                color="#CB0404"
                project="Meipaari IOT platform"
                used="React,Node js,Mysql"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: isMobile ? "85%" : "40%",
                backgroundColor: "transparent",
              }}
            >
              <Image
                img={Ecommerce}
                color="#DDA853"
                project="ECommerce site"
                used="React,Node js, Mongodb"
              />
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Recentprojects;
