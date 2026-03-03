import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../components/Services/services.data.js'; // Your single source of truth
import Navbar from '../components/Hero/Navbar.jsx';
import NotFound from './NotFound.jsx';
import FlippableCardGrid from '../components/FlippableCardGrid.jsx';
import Footer from '../components/Footer/Footer.jsx';
// import ServiceChart from '../components/ServiceChart.jsx';

export default function ServicePage() {
  const { slug } = useParams();
  const data = services.find((service) => service.slug === slug);

   if (!data) {
    return (
      <NotFound/>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="bg-white text-black font-sans">
      {/* 1. Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row md:items-center md:gap-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2">
          <p className="inline-block text-xs font-semibold rounded-full px-3 py-1 bg-gray-200 text-gray-700 mb-2">{data.badge}</p>
          <h1 className="text-5xl font-bricolage font-bold leading-tight mb-4">{data.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{data.outcome}</p>
          <div className="flex gap-4">
            {/* <button className="bg-black text-white py-2 px-6 rounded-full font-medium hover:bg-gray-900 transition">{data.ctaText}</button> */}
            <Link to="/contact">
              <button className="border border-black text-black py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition">
                Ask a question
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <motion.img
            src={data.goals[0].img} // Using the first goal image as a placeholder hero image
            alt={data.title}
            className="w-full h-64 md:h-80 rounded-xl object-cover"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.section>

      {/* 2. Overview and What's included Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="leading-relaxed text-gray-700 mb-3">{data.overview}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">What's included</h2>
          <ul className="list-none space-y-2">
            {data.fullHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-black opacity-60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
     {/* <ServiceChart chartData={data.chartData} /> */}

      {/* 3. Types Section */}
       <section className="py-14">
        <h2 className="text-3xl font-bold mb-10 text-center">Types of {data.title}</h2>
        <FlippableCardGrid cardData={data.types} />
      </section>

      {/* 4. Goals Section */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-12 text-center">What's Right For You?</h2>
        {data.goals.map(({ goal, solution, img }, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={goal}
              className={`flex flex-col md:flex-row items-center justify-center mb-16 gap-10 max-w-5xl mx-auto ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{goal}</h3>
                <p className="text-gray-700">{solution}</p>
              </div>
              <div className="md:w-1/2">
                <img
                  className="rounded-lg shadow-lg w-full h-64 object-cover max-w-md mx-auto"
                  src={img}
                  alt={goal}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </section>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto w-[92%] max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Explore other services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black ring-1 ring-black/10 hover:bg-black hover:text-white transition"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
