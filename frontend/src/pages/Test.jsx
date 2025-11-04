import React from 'react';
import { BookOpen, BarChart2, ShieldCheck, RefreshCcw, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MutualFundAdvisory() {
  return (
    <div className="bg-white text-black font-sans">
      {/* 1. Hero Section - mimicking snapshot style (single column) */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row md:gap-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2">
          <p className="inline-block text-xs font-semibold rounded-full px-3 py-1 bg-gray-200 text-gray-700 mb-2">Long-term &bull; Diversified</p>
          <h1 className="text-5xl font-bold leading-tight mb-4">Mutual Funds</h1>
          <p className="text-lg text-gray-700 mb-6">
            Build long-term wealth with diversified portfolios matched to your risk and goals.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white py-2 px-6 rounded-full font-medium hover:bg-gray-900 transition">Explore plan</button>
            <button className="border border-black text-black py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition">Ask a question</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          {/* Image Placeholder - Replace with relevant vector or image */}
          <motion.div
            className="w-64 h-64 bg-gray-100 rounded-xl flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            aria-label="Finance illustration placeholder"
          >
            <BarChart2 className="w-20 h-20 text-gray-700" />
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Overview and What's included Section in two columns */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="leading-relaxed text-gray-700 mb-3">
            Invest systematically with goal-based SIPs, direct-plan selection, and periodic rebalancing. Transparent, low-cost funds from top AMCs to maximize returns and minimize expenses.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">What's included</h2>
          <ul className="list-none space-y-2">
            {[
              'Goal-based SIPs',
              'Direct-plan selection',
              'Periodic rebalancing',
              'Tax-efficient fund switches',
              'Performance tracking & reports'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-black opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Types of Mutual Funds Section with white background */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-14">
        <h2 className="text-3xl font-bold mb-10 text-center">Types of Mutual Funds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Equity Funds',
              desc: 'Growth-oriented funds investing primarily in stocks.',
            },
            {
              title: 'Debt Funds',
              desc: 'Conservative funds focusing on fixed income securities.',
            },
            {
              title: 'Hybrid Funds',
              desc: 'Combination of equity and debt for balanced growth.',
            },
            {
              title: 'Index Funds',
              desc: 'Funds tracking stock market indices passively.',
            }
          ].map(({ title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-300 rounded-lg p-5 text-center cursor-pointer hover:bg-gray-50 transition"
            >
              <BookOpen size={24} className="mx-auto mb-3 text-black opacity-70" />
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. What’s Right For You Section with images on right side */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-12 text-center">What&apos;s Right For You?</h2>
        {[
          {
            goal: 'Child Education',
            solution: 'Invest systematically in child education funds to beat inflation and secure your child’s future.',
            img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80'
          },
          {
            goal: 'Retirement Planning',
            solution: 'Build a diversified mutual fund portfolio that grows steadily to support your post-retirement lifestyle.',
            img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80'
          },
          {
            goal: 'Marriage Planning',
            solution: 'Plan long-term investments with hybrid funds to accumulate wealth for your big day.',
            img: 'https://images.unsplash.com/photo-1541745537419-cab21d59a403?auto=format&fit=crop&w=400&q=80'
          },
        ].map(({ goal, solution, img }, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={goal}
              className={`flex flex-col md:flex-row items-center mb-12 gap-6 max-w-5xl mx-auto ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{goal}</h3>
                <p className="text-gray-700">{solution}</p>
              </div>
              <div className="md:w-1/2">
                <img
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                  src={img}
                  alt={goal}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
