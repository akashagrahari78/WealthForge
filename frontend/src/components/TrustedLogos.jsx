import React from "react";
import { Marquee } from "./Marquee.jsx";

// Import your logos (adjust paths to match your assets)
import NegenCapital from "../assets/ourPartners/NegenCapital.webp"
import MotilalOswalWealthManagment from "../assets/ourPartners/MotilalOswalWealthManagment.webp"
import NipponIndiaMutualFunds from "../assets/ourPartners/NipponIndiaMutualFunds.webp"
import TataMutualFunds from "../assets/ourPartners/TataMutualFunds.webp"
import IciciPrudentialMutualFunds from "../assets/ourPartners/IciciPrudentialMutualFunds.png"

const logos = [
  { name: "NegenCapital logo", src: NegenCapital },
  { name: "MotilalOswalWealthManagment logo", src: MotilalOswalWealthManagment },
  { name: "NipponIndiaMutualFunds logo", src: NipponIndiaMutualFunds },
  { name: "TataMutualFunds logo", src: TataMutualFunds },
  { name: "IciciPrudentialMutualFunds logo", src: IciciPrudentialMutualFunds },
];

const LogoCard = ({ src, name }) => (
  <div className="flex items-center justify-center h-16 sm:h-20 px-6 sm:px-8">
    <img
      src={src}
      alt={name}
      className="h-full w-auto object-contain max-w-[200px] sm:max-w-[180px]"
    />
  </div>
);

export default function TrustedLogos() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-black/5">
      <div className="mx-auto w-[92%] max-w-6xl text-center">
        <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/70">
          Partnered with leading financial institutions
        </p>
        <h2 className="mt-8 mb-14 text-3xl md:text-4xl font-medium font-merriweather text-black">
          Enabling access to premier financial solutions{" "}
        </h2>

        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {logos.map((logo, i) => (
              <LogoCard key={`logo-${i}`} {...logo} />
            ))}
          </Marquee>

          {/* Fade-out edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
