import React from "react";
import Navbar from "../components/Hero/Navbar";
import HeroSection from "../components/Hero/HeroSections.jsx";
import StatsSection from "../components/Stats/StatsSection.jsx";
import ServicesSection from "../components/Services/ServicesSection.jsx";
import WhyChooseSection from "../components/WhyChoose/WhyChooseSection.jsx";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection.jsx";
import FAQSection from "../components/FAQ/FAQSection.jsx";
import Footer from "../components/Footer/Footer";
import TrustedLogos from "../components/TrustedLogos.jsx";
import GridBackground from "../components/GridBackground.jsx";

// import FAQSectionPro from "../components/FAQ/FAQSectionPro.jsx";

const Home = () => {
  return (
    <>
      <GridBackground>
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyChooseSection />
        <TrustedLogos />
        <TestimonialsSection />
        {/* // White background to black FAQ for contrast: */}
        {/* <FAQSection inverted={true} singleOpen={true} /> */}

        {/* // If you prefer staying white-on-white: */}
        <FAQSection inverted={false} singleOpen={true} />
        {/* <FAQSectionPro inverted={false} /> */}
        <Footer />
      </GridBackground>

    </>
  );
};

export default Home;
