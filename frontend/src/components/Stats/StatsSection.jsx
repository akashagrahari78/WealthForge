import React from "react";
import StatItem from "./StatItem";
import Counter from "./Counter";

const StatsSection = () => {
  return (
<section className="relative z-10 bg-white text-gray-800 py-16 mt-16 md:mt-24 lg:mt-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        <StatItem subtitle="Assets Under Management">
          <Counter to={50} prefix="₹" suffix=" Cr+" duration={1.4} />
        </StatItem>

        <StatItem subtitle="Years of Experience" delay={0.1}>
          <Counter to={20} suffix="+" duration={1.2} />
        </StatItem>

        <StatItem subtitle="Satisfied Clients" delay={0.2}>
          <Counter to={950} suffix="+" duration={1.6} />
        </StatItem>

        <StatItem title="ARN Holder" subtitle="Certified Mutual Fund Distributor" delay={0.3} />

        <StatItem title="AMFI Registered" subtitle="Trusted Financial Advisor" delay={0.4} />
      </div>
    </section>
  );
};

export default StatsSection;
