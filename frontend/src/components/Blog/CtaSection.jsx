import React from "react";

const CtaSection = ({ title, subtitle, buttonText, lang }) => (
  <section className="mx-auto max-w-4xl w-[92%] md:w-[70%] my-20">
    <div className="rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/10 p-6 md:p-8 text-center">
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="mt-2 text-black/70">{subtitle}</p>
      <div className="mt-5">
        <a
          href="https://cal.com/your-handle"
          className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-black text-white hover:bg-black/90 ring-1 ring-black/10"
        >
          {buttonText}
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;