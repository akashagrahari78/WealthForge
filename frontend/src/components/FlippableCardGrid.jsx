import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Briefcase, Building } from 'lucide-react';  

// A lightweight SVG component to render a simple line chart
function MiniGraph({ data }) {
  const width = 120;
  const height = 40;
  const points = data.map((point, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (point / 100) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.polyline
        fill="none"
        stroke="#1a202c"
        strokeWidth="2"
        points={points}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

// The component now accepts `cardData` as a prop
export default function FlippableCardGrid({ cardData = [] }) {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <div
          key={card.title}
          className="fcard-container"
          onMouseEnter={() => setFlippedIndex(index)}
          onMouseLeave={() => setFlippedIndex(null)}
        >
          <motion.div
            className="fcard-inner"
            animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Front of the Card */}
            <div className="fcard-face fcard-front">
              <Book size={32} className="text-gray-700" /> {/* Generic Icon */}
              <h3 className="text-xl font-bold mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{card.desc}</p>
            </div>

            {/* Back of the Card */}
            <div className="fcard-face fcard-back">
              <h4 className="text-lg font-semibold">Illustrative Trend</h4>
              <div className="mt-2">
                 {/* Using dummy data for graph for now */}
                <MiniGraph data={[20, 30, 25, 40, 35, 50]} />
              </div>
              <p className="text-xs text-gray-500 mt-2">For Illustration Only</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
