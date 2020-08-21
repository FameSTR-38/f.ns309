import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./boxes.css";
import Banner from "../components/Banner";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpeg";

const Carousel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <h2 data-aos="fade-right" className="boxes-title">
        About Us
      </h2>
      <img src={about1} alt="About image" className="about-img" />
      <div data-aos="fade-up" className="boxes">
        Mercedes-Benz AG is responsible for the global business of Mercedes-Benz
        Cars and Mercedes-Benz Vans with over 173,000 employeesworldwide. Ola
        Källenius is Chairman of the Board of Management of Mercedes-Benz AG.
        The company focuses on the development, production and sales of
        passenger cars, vans and services. Furthermore, the company aspires to
        be leading in the fields of connectivity, automated driving and
        alternative drives with its forward-looking innovations. The product
        portfolio comprises the Mercedes-Benz brand with the sub-brands
        Mercedes-AMG, Mercedes-Maybach and Mercedes me - as well as the smart
        brand, and the EQ product and technology brand for electric mobility.
      </div>

      <img src={about3} alt="About image" className="about-img2" />
      <div data-aos="fade-right" className="boxes2">
        Mercedes-Benz AG is responsible for the global business of Mercedes-Benz
        Cars and Mercedes-Benz Vans with over 173,000 employeesworldwide. Ola
        Källenius is Chairman of the Board of Management of Mercedes-Benz AG.
        The company focuses on the development, production and sales of
        passenger cars, vans and services. Furthermore, the company aspires to
        be leading in the fields of connectivity, automated driving and
        alternative drives with its forward-looking innovations. The product
        portfolio comprises the Mercedes-Benz brand with the sub-brands
        Mercedes-AMG, Mercedes-Maybach and Mercedes me - as well as the smart
        brand, and the EQ product and technology brand for electric mobility.
      </div>
      <img src={about2} alt="About image" className="about-img" />
      <div data-aos="fade-down" className="boxes">
        Mercedes-Benz AG is responsible for the global business of Mercedes-Benz
        Cars and Mercedes-Benz Vans with over 173,000 employeesworldwide. Ola
        Källenius is Chairman of the Board of Management of Mercedes-Benz AG.
        The company focuses on the development, production and sales of
        passenger cars, vans and services. Furthermore, the company aspires to
        be leading in the fields of connectivity, automated driving and
        alternative drives with its forward-looking innovations. The product
        portfolio comprises the Mercedes-Benz brand with the sub-brands
        Mercedes-AMG, Mercedes-Maybach and Mercedes me - as well as the smart
        brand, and the EQ product and technology brand for electric mobility.
      </div>
    </div>
  );
};

export default Carousel;
