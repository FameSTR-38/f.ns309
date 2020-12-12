import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./boxes.css";
import Banner from "../components/Banner";
import about1 from "../images/hero_1.jpg";
import about2 from "../images/hero_3.jpg";
import about3 from "../images/img_2.jpg";

const Carousel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <h2 data-aos="fade-right" className="boxes-title">
        Бидний тухай
      </h2>
      <img src={about1} alt="About image" className="about-img" />
      <div data-aos="fade-up" className="boxes">
        Уг төсөл нь 2020 онд хичээлийн төслийн санаагаар эхлүүлсэн бөгөөд цаашид ч хөгжүүлэгдэх болно.
      </div>

      <img src={about3} alt="About image" className="about-img2" />
      <div data-aos="fade-right" className="boxes2">
         www.sict.edu.mn
         Хөгжүүлсэн T.Балжинням
      </div>
      
    </div>
  );
};

export default Carousel;
