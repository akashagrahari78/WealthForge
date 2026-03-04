import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, BarChart3, Layers, Zap, PiggyBank, Building2, Target, Briefcase } from 'lucide-react';

const iconMap = {
  'Equity Funds': TrendingUp,
  'Debt Funds': Shield,
  'Hybrid Funds': BarChart3,
  'Index Funds': Layers,
  'Health Insurance': Shield,
  'Life Insurance': Shield,
  'Auto Insurance': Shield,
  'Government Bonds': Building2,
  'Corporate Bonds': Briefcase,
  'Fixed Maturity Plans': Target,
  'Discretionary PMS': TrendingUp,
  'Non-Discretionary PMS': BarChart3,
  'Advisory PMS': Layers,
  'Category I AIF': Zap,
  'Category II AIF': Layers,
  'Category III AIF': TrendingUp,
  'Pre-IPO Shares': TrendingUp,
  'Growth-Stage Companies': Zap,
  'Strategic Holdings': Target,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function FlippableCardGrid({ cardData = [] }) {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {cardData.map((card) => {
        const IconComponent = iconMap[card.title] || TrendingUp;
        return (
          <motion.div
            key={card.title}
            variants={item}
            className="group relative overflow-hidden rounded-2xl border border-black/8 bg-white p-7 transition-all duration-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-black/15"
            style={{ minHeight: '14rem' }}
          >
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Decorative corner accent */}
            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-black/[0.02] group-hover:bg-black/[0.04] group-hover:scale-150 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black/[0.04] group-hover:bg-black/[0.07] transition-all duration-400 mb-5 group-hover:scale-110 group-hover:rotate-[-3deg]">
                <IconComponent size={22} className="text-black/70 group-hover:text-black transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-black transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-black/55 leading-relaxed group-hover:text-black/70 transition-colors duration-300">
                {card.desc}
              </p>

              {/* Bottom accent line */}
              <div className="mt-5 h-[2px] bg-black/[0.06] rounded-full overflow-hidden">
                <div className="h-full w-0 bg-black/20 group-hover:w-full transition-all duration-700 ease-out rounded-full" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
