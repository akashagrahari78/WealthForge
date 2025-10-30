// src/components/MutualFundsServicePage.jsx

import React from 'react';
import { motion } from 'framer-motion';
// We'll use icons from 'react-icons' to add a clean visual element
import { FaChartLine, FaBullseye, FaHandshake, FaArrowRight } from 'react-icons/fa';

// --- Animation Variants for Framer Motion ---

// Parent container to stagger children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Child item animation (for cards, list items, etc.)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

// Main component
export default function MutualFundsServicePage() {
  // Transcribed list from your image
  const amcPartners = [
    'SBI Mutual Fund',
    'Bandhan Bank',
    'White OAK Capital Management',
    'Kotak Mutual Fund',
    'ICICI Prudential Mutual Fund',
    'TATA Mutual Fund',
    'Quant Mutual Fund',
    'Aditya Birla Group',
    'HDFC Bank',
    'Bajaj Finserv',
    'Motilal Oswal',
    'Nippon India Mutual Fund',
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-gray-800"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 0.5 }}
    >
      {/* --- 1. Hero Section --- */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Navigate Your Future with Mutual Funds
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          We provide expert guidance to help you build a diversified mutual fund
          portfolio that aligns with your financial goals, whether you're planning
          for retirement, a major purchase, or long-term wealth creation.
        </motion.p>
      </section>

      {/* --- 2. Our Approach (The "Story") --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Your Journey to Financial Growth
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={containerVariants}
          >
            {/* Story Card 1 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <FaBullseye className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                1. Goal-Oriented Planning
              </h3>
              <p className="text-gray-600">
                We start by understanding you. What are your dreams? Your
                timeline? Your risk comfort? Your plan is built around your life.
              </p>
            </motion.div>

            {/* Story Card 2 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <FaChartLine className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                2. Expert Fund Selection
              </h3>
              <p className="text-gray-600">
                The market is vast. We curate a selection of funds from
                top-performing AMCs, matching them to your profile for optimal
                diversification and growth potential.
              </p>
            </motion.div>

            {/* Story Card 3 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <FaHandshake className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                3. Long-Term Partnership
              </h3>
              <p className="text-gray-600">
                This isn't a one-time transaction. We provide regular reviews
                and rebalancing to ensure your portfolio stays on track as your
                life and the market evolve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. Our Partners (From your list) --- */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Access to India's Most Trusted AMCs
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            We partner with a wide range of asset management companies to ensure
            you have access to the best and most diverse investment
            opportunities.
          </motion.p>

          {/* Partner Logo Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
            variants={containerVariants}
          >
            {amcPartners.map((name) => (
              <motion.div
                key={name}
                className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                variants={itemVariants}
                whileHover={{ scale: 1.05, shadow: 'md' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* IMAGE PLACEHOLDER: 
                  Here, you would ideally put the logo of the company. 
                  For a clean, minimalist look, you can just use text.
                */}
                <span className="text-sm font-semibold text-gray-700">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. Call to Action (CTA) --- */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Start Your Investment Journey?
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 max-w-xl mx-auto mb-8"
            variants={itemVariants}
          >
            Let's build a portfolio that works for you. Schedule a
            complimentary consultation with our expert advisors today.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg flex items-center justify-center mx-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Book Your Free Consultation
            <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
}