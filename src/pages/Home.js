import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  
  return (
    <>
      <Hero>
        <Banner
          title="LiveStream"
          subtitle="Такс: 20000 /1сар/"
        >
          <Link to="/rooms" className="btn-primary">
            Үзэх
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
