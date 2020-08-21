import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./boxes.css";

const Carousel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <h1>Carousel</h1>
      <div data-aos="fade-up" className="boxes">
        1
      </div>
    </div>
  );
};

export default Carousel;
