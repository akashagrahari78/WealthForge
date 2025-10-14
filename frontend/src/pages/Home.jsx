import React from "react";
import Navbar from "../components/Hero/Navbar";
import HeroSection from "../components/Hero/HeroSections.jsx";
import StatsSection from "../components/Stats/StatsSection.jsx";
import ServicesSection from "../components/Services/ServicesSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      {/* <StatsSection /> */}
      <ServicesSection />
    </>
  );
};

export default Home;
