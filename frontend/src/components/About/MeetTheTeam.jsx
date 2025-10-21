import React from "react";
import { motion } from "framer-motion";

// 1) Image imports (put your files in: src/assets/team/)
import akash from "../../assets/headshot.jpg";
import riya from "../../assets/img1.jpg";
import arjun from "../../assets/img2.jpg";
import sana from "../../assets/img3.jpg";

// 2) Team data (edit names, roles, links, and images)
const TEAM = [
  {
    name: "Akash Sharma",
    role: "Founder & Principal Advisor",
    photo: akash,
    linkedin: "#",
    email: "mailto:akash@example.com",
  },
  {
    name: "Riya Mehta",
    role: "Operations & Client Success",
    photo: riya,
    linkedin: "#",
    email: "mailto:riya@example.com",
  },
  {
    name: "Arjun Patel",
    role: "Research & Portfolio Analyst",
    photo: arjun,
    linkedin: "#",
    email: "mailto:arjun@example.com",
  },
  {
    name: "Sana Verma",
    role: "Compliance & Reporting",
    photo: sana,
    linkedin: "#",
    email: "mailto:sana@example.com",
  },
  {
    name: "Sana Verma",
    role: "Compliance & Reporting",
    photo: sana,
    linkedin: "#",
    email: "mailto:sana@example.com",
  },
  {
    name: "Sana Verma",
    role: "Compliance & Reporting",
    photo: sana,
    linkedin: "#",
    email: "mailto:sana@example.com",
  },
];

// 3) Framer variants
const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// 4) Single team card with pointer-follow highlight + hover lift
const TeamCard = ({ name, role, photo, linkedin, email }) => {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({ x: -100, y: -100 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: -100, y: -100 })}
      className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_10px_28px_rgba(0,0,0,0.06)] p-4"
      style={{
        backgroundImage: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, rgba(0,0,0,0.06), transparent 60%)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Portrait */}
      <div className="overflow-hidden rounded-xl bg-black/90">
        <img
          src={photo}
          alt={`${name} portrait`}
          className="h-[340px] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Info */}
      <div className="pt-4">
        <h3 className="text-lg font-semibold text-black">{name}</h3>
        <p className="text-sm text-black/60">{role}</p>

        {/* Actions */}
        <div className="mt-3 flex items-center gap-3">
          <a
            href={linkedin}
            aria-label="LinkedIn"
            className="text-black/60 hover:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5ZM7 8.75H5v9.5h2v-9.5ZM12.25 8.75H10.5v9.5h1.75v-5c0-1.33.92-2.25 2.11-2.25s1.89.8 1.89 2.1v5.15H18v-5.6c0-2.39-1.28-3.5-2.98-3.5-1.37 0-2.1.75-2.47 1.4h-.03v-1.1Z" />
            </svg>
          </a>
          <a
            href={email}
            aria-label="Email"
            className="text-black/60 hover:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.1 10-6.1V6a2 2 0 0 0-2-2Zm0 5.1-8 4.9-8-4.9V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// 5) Section
const MeetTheTeam = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl w-[92%] md:w-[86%]"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8 md:mb-12 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/60 font-quicksand">Team</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-black font-bricolage">Meet the team</h2>
          <p className="mt-3 font-quicksand text-sm md:text-base text-black/70 max-w-2xl mx-auto">
            A small, focused team bringing clarity, care, and discipline to every client relationship.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TEAM.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
         
      </motion.div>
    </section>
  );
};

export default MeetTheTeam;
