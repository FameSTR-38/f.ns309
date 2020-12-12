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
        Mercedes-Benz AG нь Mercedes-Benz-ийн дэлхийн бизнесийг хариуцдаг
         Мерседес-Бенц машинууд болон микро автобусууд дэлхий даяар 173,000 гаруй ажилтантай. Ола
         Каллениус нь Mercedes-Benz AG компанийн Удирдах зөвлөлийн дарга юм.
         Тус компани нь боловсруулах, үйлдвэрлэх, борлуулах чиглэлээр мэргэшсэн
         автомашин, фургон, үйлчилгээ. Нэмж дурдахад, компани нь үүрэг хүлээсэн
         харилцаа холбоо, автоматжуулсан жолоодлого,
         алсын хараатай шинэлэг зүйлүүд бүхий өөр хөтчүүд. Бүтээгдэхүүн
         багцад Mercedes-Benz брэнд дэд брэндүүд багтсан болно
         Mercedes-AMG, Mercedes-Maybach, Mercedes me - мөн ухаалаг
         брэнд, цахилгаан хөдөлгүүрт зориулсан EQ бүтээгдэхүүн, технологийн брэнд.
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
