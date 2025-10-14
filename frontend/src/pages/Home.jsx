import React from "react";
import Navbar from "../components/Hero/Navbar";
import HeroSection from "../components/Hero/HeroSections.jsx";
import StatsSection from "../components/Stats/StatsSection.jsx";
import ServicesSection from "../components/Services/ServicesSection.jsx";
import WhyChooseSection from "../components/WhyChoose/WhyChooseSection.jsx";
import TestimonialsSlider from "../components/Testimonials/TestimonialsSlider.jsx";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      {/* <TestimonialsSlider /> */}
      <TestimonialsSection />

      

    </>
  );
};

export default Home;
