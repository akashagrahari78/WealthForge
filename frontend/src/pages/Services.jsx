// src/pages/Services.jsx
import React from "react";
import { useLang } from "../hooks/useLang";

// Import your layout components  
import Navbar from "../components/Hero/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";


import { ServicesHero } from "../components/ServicesPage/ServicesHero.jsx";
import { ServicesSection } from "../components/ServicesPage/ServicesSection.jsx";

const ServicesPage = () => {
  const { lang, setLang } = useLang();

  return (
    <>
      <Navbar />
      <main className="relative bg-white min-h-screen">
        <div
          className="pointer-events-none absolute inset-0 
  bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]
 bg-[size:28px_28px] [mask-image:radial-gradient(80%_80%_at_50%_30%,#000_75%,transparent_100%)]"
        />
        <ServicesHero lang={lang} />
        <ServicesSection />
        <section id="consult" className="sr-only" aria-hidden="true" />     {" "}
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
