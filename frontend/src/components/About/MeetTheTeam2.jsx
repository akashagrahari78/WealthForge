import React from "react";
import { motion } from "framer-motion";

// Replace with your actual images in src/assets/team/
import t1 from "../../assets/team1.jpg";
import t2 from "../../assets/team2.jpg";
import t3 from "../../assets/team3.jpg";
import t4 from "../../assets/team4.jpg";

const TEAM = [
  { name: "Akash Sharma", role: "Founder & Principal Advisor", photo: t1, linkedin: "#", email: "mailto:akash@example.com" },
  { name: "Riya Mehta", role: "Operations & Client Success", photo: t2, linkedin: "#", email: "mailto:riya@example.com" },
  { name: "Arjun Patel", role: "Research & Portfolio Analyst", photo: t3, linkedin: "#", email: "mailto:arjun@example.com" },
  { name: "Sana Verma", role: "Compliance & Reporting", photo: t4, linkedin: "#", email: "mailto:sana@example.com" },
];

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Card = ({ m }) => {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({ x: -100, y: -100 });

  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };
  const onLeave = () => setPos({ x: -100, y: -100 });

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_10px_28px_rgba(0,0,0,0.06)]"
      style={{
        backgroundImage: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, rgba(0,0,0,0.06), transparent 60%)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-5 md:p-6 flex items-center gap-4">
        <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-1 ring-black/10 bg-white shrink-0">
          <img src={m.photo} alt={`${m.name} portrait`} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-black truncate">{m.name}</h3>
          <p className="text-sm text-black/60 truncate">{m.role}</p>
          <div className="mt-3 flex items-center gap-3">
            <a href={m.linkedin} aria-label="LinkedIn" className="text-black/60 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5ZM7 8.75H5v9.5h2v-9.5ZM12.25 8.75H10.5v9.5h1.75v-5c0-1.33.92-2.25 2.11-2.25s1.89.8 1.89 2.1v5.15H18v-5.6c0-2.39-1.28-3.5-2.98-3.5-1.37 0-2.1.75-2.47 1.4h-.03v-1.1Z"/></svg>
            </a>
            <a href={m.email} aria-label="Email" className="text-black/60 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.1 10-6.1V6a2 2 0 0 0-2-2Zm0 5.1-8 4.9-8-4.9V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MeetTheTeam2 = () => {
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
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/60">Team</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-black">Meet the team</h2>
          <p className="mt-3 text-sm md:text-base text-black/70 max-w-2xl mx-auto">
            A small, focused team bringing clarity, care, and discipline to every client relationship.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {TEAM.map((m) => (
            <Card key={m.name} m={m} />
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div variants={item} className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90"
          >
            Work with us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MeetTheTeam2;
