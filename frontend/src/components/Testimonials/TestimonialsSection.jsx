import React from "react";
import SliderHeader from "./SliderHeader";
import SliderShell from "./SliderShell";
import { testimonials } from "./testimonials.data";

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-[92%] md:w-[86%] max-w-6xl">
        <SliderHeader />
        <SliderShell items={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
